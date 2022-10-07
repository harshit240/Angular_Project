import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data:any;
  constructor(private ser:AdminService) { }

  ngOnInit(): void {
    this.ser.viewabout().subscribe((res)=>{
      // console.log(res);
      this.data=res;
    })
  }

}
