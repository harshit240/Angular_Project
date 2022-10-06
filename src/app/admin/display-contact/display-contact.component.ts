import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {
  data:any;
  constructor(private ser:AdminService) { }

  ngOnInit(): void {
    this.ser.contactsdata().subscribe((res)=>{
      // console.log(res);
      this.data = res
    })
  }

}
