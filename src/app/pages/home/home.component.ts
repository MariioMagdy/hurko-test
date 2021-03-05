import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { UserService } from 'src/app/shared/services/user/user.service';
import {NavbarComponent } from "../../shared/navbar/navbar.component"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1000, noPause: true} }
  ]
})
export class HomeComponent implements OnInit {
@ViewChild(NavbarComponent,{static:true}) x:NavbarComponent
clicks=3


  constructor() {


   }



   addcount(count){

    this.clicks=count
    console.log(this.clicks);
    //  console.log(count);

   }

  //  Images = ['../assets/images/slider/slider-1.jpg', '../assets/images/slider/slider-2.jpg', '../assets/images/slider/slider-3.jpg'];

  //  SlideOptions = { items: 1, dots: true};
  //  CarouselOptions = { items: 3, dots: true, nav: true };




  ngOnInit(): void {


  }

}
