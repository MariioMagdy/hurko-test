import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  child= 5
  isAuth:any
  @Input() count:number
  @Output() changeCount:EventEmitter<number>=new EventEmitter()

  constructor(private _user:UserService,private _router:Router) {
     const token = localStorage.getItem("token")
     if(token){
      this.isAuth=true
     }else{
      this.isAuth=_user.isAuth
     }

  }

  // logged(){
  //   this.isAuth=this._user.isAuth
  //   console.log(this.isAuth);

  // }
  logOut(){
    // this.isAuth=true
    // this._user.isAuth=!this.isAuth
    this._user.logOut().subscribe(res=>{
   })
    //  console.log(this.isAuth);
    localStorage.clear()
    this._user.isAuth=!this.isAuth


  }
  ngOnInit(): void {
    console.log(this.count);

  }

  increment(){
    this.count++
    this.changeCount.emit(this.count)
  }

}
