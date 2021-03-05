import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllproductsComponent } from './pages/allproducts/allproducts.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';


const routes: Routes = [
  {path:"home" ,component:HomeComponent},
  {path:"signup" ,component:SignupComponent},
  {path:"login" ,component:LoginComponent},
  {path:"shop",component:AllproductsComponent, canActivate:[AuthGuard]},
  {path:"shop/productdetalis",component:SingleproductComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"cart",component:CartComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"" , redirectTo:"/home", pathMatch:"full" },
  {path:"**" ,component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
