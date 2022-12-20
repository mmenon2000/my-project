import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public login: FormGroup|any;
public isLoggedIn: boolean;

constructor(private http:HttpClient, private route:Router, private _snackBar: MatSnackBar) {
    this.isLoggedIn = false;
 }

  ngOnInit(): void {
   this.login = new FormGroup({
    'username': new FormControl(),
    'password': new FormControl()

   })
   this.isLoggedIn = false;
  } 
  
  logindata(login:FormGroup){
    this.http.post<any>("http://localhost:8080/login", this.login.value)
      .subscribe(res=>{
        if(res.responseCode == 0){
          this.route.navigate(['newpage', {fname: res.fname, lname: res.lname}]);
          
          this.isLoggedIn = true;
          localStorage.setItem('address', res.address);
        } else {
            document.getElementById("alert-box")!.style.display = "block";
        }
      })
    }

    sbtn1(){
      $('.form-box').css('display','none');
      $('.form-box1').css('display','block');
    }
  

}
