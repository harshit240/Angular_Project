import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-display-about',
  templateUrl: './display-about.component.html',
  styleUrls: ['./display-about.component.css']
})
export class DisplayAboutComponent implements OnInit {

  data:any;
  constructor(private ser:AdminService) { }

  ngOnInit(): void {
    this.ser.getabout().subscribe((res)=>{
      console.log(res);
      this.data=res;
    })
  }

}
