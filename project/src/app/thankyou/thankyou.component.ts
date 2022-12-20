import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  address: any;

  constructor() {
    this.address = localStorage.getItem('address');
   }

  ngOnInit(): void {
  }

}
