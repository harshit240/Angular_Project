import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  form:any;
  constructor(private ser:AdminService,private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title:new FormControl(''),
      description:new FormControl(''),
    })
  }
  addblog(){
    // console.log(this.form.value);
    return this.ser.insertblog(this.form.value).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/admin-display'])
    })
  }

}
