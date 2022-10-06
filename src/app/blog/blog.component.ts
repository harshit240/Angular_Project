import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id:any;
  dataview:any;
  constructor(private ser:AdminService,private route:ActivatedRoute) { }
  data:any;
  ngOnInit(): void {
    this.ser.getdata().subscribe((res)=>{
      // console.log(res);
      this.data=res;
    })




    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.ser.viewdata(this.id).subscribe((res)=>{
      // console.log(res);
      this.dataview = res;
    })
  }

}
