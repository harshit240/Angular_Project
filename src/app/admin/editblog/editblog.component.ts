import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  id:any;
  editdata:any;
  form:any;
  constructor(private ser:AdminService,private r:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title:new FormControl(''),
      description:new FormControl('')
    })






    this.id = this.r.snapshot.paramMap.get('id');
    // console.log(this.id);

    this.ser.viewdata(this.id).subscribe((res)=>{
      // console.log(res);
      this.editdata=res

      this.form.patchValue({  // patchvalue fn. is used to update only a subset of the elements of the FormGroup 
        title:this.editdata.title,
        description:this.editdata.description
      })
    })
  }
  update(){
    return this.ser.updatedata(this.form.value,this.id).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/admin-dashboard'])
    })
  }

}
