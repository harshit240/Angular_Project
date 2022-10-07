import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-display-about',
  templateUrl: './display-about.component.html',
  styleUrls: ['./display-about.component.css']
})
export class DisplayAboutComponent implements OnInit {

  aboutdata:any;
  constructor(private ser:AdminService) { }

  ngOnInit(): void {
    this.ser.viewabout().subscribe((res)=>{
      console.log(res);
      this.aboutdata=res;
    })
  }

}
