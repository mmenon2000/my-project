import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }
public signup: FormGroup|any;
signuser:any;
  ngOnInit(): void {
    this.signup=new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'username': new FormControl(),
      'password': new FormControl(),
      'address': new FormControl()
    }
    )
  }
  signupdata(signup:FormGroup){
    //console.log(this.singup.value);
    this.signuser = this.signup.value.fname
    if(!this.validate()){
      return;
    }
    this.http.post<any>("http://localhost:8080/signup", this.signup.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.signup.reset();
      this.route.navigate(['login']);
    }, err=>{
      alert('Somthing went wrong');
    })

  }
  sbtn(){
   
    this.route.navigate(['login']);
    //$('.form-box1').css('z-index', '99');
    $('.form-box').css('display','block');
    $('.form-box1').css('display','none');
  }

  validate(){
    if(!this.signup.value.username.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      alert("Enter valid email id");
      return false;
    }
    if(!this.signup.value.password.match(/[A-Z]/)){
      alert('password should contain atleast one uppercase');
      return false;
    }
    if(!this.signup.value.password.match(/[0-9]/)){
      alert('password should contain atleast one Number');
      return false;
    }
    return true;
  }

  }

