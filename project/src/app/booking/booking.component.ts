import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
public booking: FormGroup | any;
public date: String;
  

  constructor(private http:HttpClient,private route:Router) { 
      let currDate = new Date()
     this.date = `${currDate.getFullYear()}-${currDate.getMonth()+1}-${currDate.getDate()}`;
  }

  ngOnInit(): void {
this.booking = new FormGroup({
  'email': new FormControl(),
  'date': new FormControl(),
  'time':new FormControl()

})
let currDate = new Date()
this.date = `${currDate.getFullYear()}-${currDate.getMonth()+1}-${currDate.getDate()}`;
  }
  book(booking:FormGroup){
    this.http.post<any>("http://localhost:8080/reservation", this.booking.value)
    .subscribe(res=>{
      if(res.responseCode == 0){
        this.route.navigate(['success', {date: this.booking.value.date, time: this.booking.value.time}]);
      } else {
        alert("All tables booked for this slot");
      }
    })
  }

}
