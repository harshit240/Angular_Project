import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {
  form:any;
  constructor(private ser:AdminService,private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title:new FormControl(''),
      description:new FormControl(''),
    })
  }
addcategory(){
  return this.ser.insertcategory(this.form.value).subscribe((res)=>{
    console.log(res);
    this.route.navigate(['/admin-displaycategory'])
  })
}
}
