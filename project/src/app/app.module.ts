import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NewpageComponent } from './newpage/newpage.component';
import { FormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './booking/booking.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SuccessComponent } from './success/success.component';
import { FoodComponent } from './food/food.component';
import { BurgerdetailsComponent } from './burgerdetails/burgerdetails.component';
import { AddtocartbComponent } from './addtocartb/addtocartb.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { RouterpageComponent } from './routerpage/routerpage.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ThankyouComponent } from './thankyou/thankyou.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LoginComponent,
    NewpageComponent,
    ReservationComponent,
    BookingComponent,
    SuccessComponent,
    FoodComponent,
    BurgerdetailsComponent,
    AddtocartbComponent,
    InitialpageComponent,
    RouterpageComponent,
    PaymentdetailsComponent,
    ThankyouComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
