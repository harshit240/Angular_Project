import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any;
  data:any;
  
  constructor(private as:AdminService, private route:Router) { }
  

  ngOnInit(): void {
    this.form = new FormGroup({
      email :  new FormControl(''),
      password : new FormControl('')
    })
  }

  
  login_user(){
    // this.admin_service.user_login(this.form.value).subscribe((res)=>{
    //   console.log(res)
    console.log(this.form.value)
    this.as.admin_login(this.form.value).subscribe((res)=>{
        console.log(res);
        this.form.reset();
        this.route.navigate(["/admin-dashboard"])
      }
    )
    }

}
