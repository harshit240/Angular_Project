import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form:any;
  data:any;
  constructor( private ser:AdminService,private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl(''),
      mail:new FormControl(''),
      phone:new FormControl(''),
      message:new FormControl('')
    })

    this.ser.contactsdata().subscribe((res)=>{
      // console.log(res);
      this.data = res;
    })
  }
  
  sendmessage(){
    // console.log(this.form.value);
    return this.ser.sendcontactdetails(this.form.value).subscribe((res)=>{
      console.log(res);
    })
    
    
  }

}
