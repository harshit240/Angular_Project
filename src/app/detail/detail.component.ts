import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private ser:AdminService,private route:ActivatedRoute) { }
  id:any;
  dataview:any;
  data:any
  
  ngOnInit(): void {
    this.ser.getdata().subscribe((res)=>{
      this.data=res;
    })





    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);

    this.ser.viewdata(this.id).subscribe((res)=>{
      console.log(res);
      this.dataview = res;
    })
  }

}
