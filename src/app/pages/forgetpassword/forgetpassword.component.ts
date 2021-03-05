import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  myForm= new FormGroup({
    oldPass: new FormControl("",[]),
    newPass: new FormControl("",[])
  })

  constructor() { }

  ngOnInit(): void {
  }
  handelfrom(){

  }
}
