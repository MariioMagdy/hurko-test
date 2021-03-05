import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../services/user/user.service"
import {User} from "../interfaces/user"
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  userData:User
  respononse:any
  badRequest:any

   myForm = new FormGroup({
      fname: new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
      lname: new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
      username: new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
      email: new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
      password:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.minLength(8),Validators.pattern("^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,20}$")]),
      role_id: new FormControl("user",[Validators.required]),
   })


  constructor(private _UserService:UserService, private _router:Router) { }

  ngOnInit(): void {
  }

  handleSubmitForm(){
    console.log(this.myForm.value);

    this.userData=this.myForm.value
    this._UserService.userData(this.userData).subscribe(res=>{

      if(this.myForm.invalid){
        this.Toast.fire({
          icon: 'error',
          title: 'Please try again'
        })
      }else{
        this.respononse= res.message
        console.log(res);
        this.Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      }
      console.log(res);

      localStorage.setItem("token","Bearer " + res.data.token)
      this._router.navigate(["shop"])
    },err=>{
      console.log("check the connection with DataBase");
      this.badRequest=err.statusText
      this.Toast.fire({
        icon: 'error',
        title: 'Please try again'
      })


    })
    console.log(this.myForm);
    console.log(this.myForm.value);


  }

}
