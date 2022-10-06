import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  constructor(private ser:AdminService) { }

  ngOnInit(): void {
    this.ser.getdata().subscribe((res)=>{
      //console.log(res);
      this.data=res;
    })
  }

}
