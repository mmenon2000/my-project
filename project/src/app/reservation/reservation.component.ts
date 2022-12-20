import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  public reservation!: FormGroup<any>;

  constructor(private http:HttpClient,private route:Router) { }
  user:any;
  ngOnInit(): void {
    this.reservation=new FormGroup({
      'username': new FormControl(),
      'password': new FormControl(),
    })
  }
  reserve(Reservation:FormGroup){
      this.http.post<any>("http://localhost:8080/login", this.reservation.value)
      .subscribe(res=>{
        if(res.responseCode == 0){
          alert("User found");
        } else {
          alert("User Not Found");
        }
      })
  }
}
