import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewpageComponent } from './newpage/newpage.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import {FoodComponent} from './food/food.component';
import { BurgerdetailsComponent } from './burgerdetails/burgerdetails.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {redirectTo:'',path:'initialpage',pathMatch:"full"},
  {path:'initialpage',component:InitialpageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'newpage',component:NewpageComponent},
{path:'reserve',component:ReservationComponent},
{path:'booking',component:BookingComponent},
{path:'success',component:SuccessComponent},
{path:'food',component:FoodComponent},
{path:'burgerdetails',component:BurgerdetailsComponent},
{path:'paymentdetails',component:PaymentdetailsComponent},
{path:'thankyou',component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
