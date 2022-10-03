import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  data:any;
  constructor(private ser:AdminService) { }

  ngOnInit(): void {
    this.ser.getdata().subscribe((res)=>{
      console.log(res);
      this.data = res;
    })
  }


}
