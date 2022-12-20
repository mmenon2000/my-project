import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initialpage',
  templateUrl: './initialpage.component.html',
  styleUrls: ['./initialpage.component.css']
})
export class InitialpageComponent implements OnInit {

  showOutlet: boolean;

onActivate(event : any) {
  this.showOutlet = true;
}

onDeactivate(event : any) {
  this.showOutlet = false;
}
  constructor() { 
    this.showOutlet = false;
  }

  ngOnInit(): void {
  }

}
