import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import userdetails from '../../../db.json';
import { ApiService } from '../shared/api.service';
import { UserDetails } from './dashboard.model';

interface User {
  fname: string | null;
  lname: string | null;
  email: string | null;
  password: any;
  id: number | null;
}

declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formValue!: FormGroup
  userDetailsObj:UserDetails = new UserDetails;
  public fname: string | null;
  public lname: string | null;
  public userName: User[] = [];
  display = "none";
  userdetails: any;

  openModal(data: any) {
    this.display = "block";
    this.detailsupdate = data;
    this.editdata(data);
  }

  editdata(data:any){
    this.formValue.controls['fname'].setValue(data.fname);
    this.formValue.controls['lname'].setValue(data.lname);
    this.formValue.controls['email'].setValue(data.email);
  }

  onCloseHandled() {
    this.display = "none";
  }
  detailsupdate = {
    fname: "",
    lname: "",
    email: "",
    id: 0,
    password: ""
  };
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private formBuilder: FormBuilder,private api:ApiService) {
    this.fname = "";
    this.lname = "";
    console.log(userdetails);
    userdetails.signup.forEach(user => {
      this.userName.push(user);
    });
  }

  ngOnInit(): void {
    this.fname = this.route.snapshot.paramMap.get('fname');
    this.lname = this.route.snapshot.paramMap.get('lname');
    this.formValue = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: ['']

    })
  }

  redirect() {
    //$('form').attr('action','./login')
    this.router.navigateByUrl('/login');
  }
  deleteUser(id:any){
    this.api.deleteData(id).subscribe(res=>{
      alert("Record Deleted");
    })
  }

  
  edit(data: any) {
    this.detailsupdate = data;
  };
  EditValue(data:any){
    this.userDetailsObj.id=data.id;
    this.formValue.controls['fname'].setValue(data.fname);
    this.formValue.controls['lname'].setValue(data.lname);
    this.formValue.controls['email'].setValue(data.email);
  }
  updatevalue(id:number, password:any) {
    this.userDetailsObj.fname=this.formValue.value.fname;
    this.userDetailsObj.lname=this.formValue.value.lname;
    this.userDetailsObj.email=this.formValue.value.email;
    this.userDetailsObj.password=password;
    this.api.updateData(this.userDetailsObj,id).subscribe(res=>{
      alert("Records Update");
    })   
  }
}
    $("#modal").modal("hide");
  
  


function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}

