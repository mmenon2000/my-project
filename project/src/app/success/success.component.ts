import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public date: String | null;
  public time: String | null;

  constructor(public route: ActivatedRoute) {
    this.date = "";
    this.time = "";
  }

  ngOnInit(): void {
    this.date = this.route.snapshot.paramMap.get('date');
    this.time = this.route.snapshot.paramMap.get('time');
  }

}
