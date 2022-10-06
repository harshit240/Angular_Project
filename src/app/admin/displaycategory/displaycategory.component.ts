import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-displaycategory',
  templateUrl: './displaycategory.component.html',
  styleUrls: ['./displaycategory.component.css']
})
export class DisplaycategoryComponent implements OnInit {
  data:any;
  constructor(private ser:AdminService) { }

  ngOnInit(): void {
    this.ser.categorydata().subscribe((res)=>{
      // console.log(res);
      this.data = res
    })
  }

}
