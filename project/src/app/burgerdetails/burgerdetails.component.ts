import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burgerdetails',
  templateUrl: './burgerdetails.component.html',
  styleUrls: ['./burgerdetails.component.css']
})
export class BurgerdetailsComponent implements OnInit {

  cart: any;
  cartItems: any;
  cartAmount: number;

  constructor() { 
    this.cart = [];
    this.cartItems = {};
    this.cartAmount = 0;
  }

  ngOnInit(): void {
  }

  addToCart(item:any, cost:number){
    this.cart.push(item);
    if (this.cartItems[item]) {
      this.cartItems[item] = this.cartItems[item] + 1;
    } else {
      this.cartItems[item] = 1;
    }
    this.cartAmount += cost;
  }

  showCart(){
    if(document.getElementById("cart-details")!.style.display == "none"){
      document.getElementById("cart-details")!.style.display = "block";
    } else {
      document.getElementById("cart-details")!.style.display = "none";
    }
  }
}
