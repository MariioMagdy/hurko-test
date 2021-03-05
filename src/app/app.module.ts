/****modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from "@angular/common/http"
import { FormsModule ,ReactiveFormsModule } from "@angular/forms"
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxPaginationModule} from 'ngx-pagination'




/****** */
// import { OwlModule } from 'ngx-owl-carousel';
/***components */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LoginComponent } from './shared/login/login.component';
import { AllproductsComponent } from './pages/allproducts/allproducts.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { UserInterceptor } from './user.interceptor';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { SignupComponent } from './shared/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AllproductsComponent,
    SingleproductComponent,
    PurchaseComponent,
    CheckoutComponent,
    CartComponent,
    NotfoundComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:UserInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
