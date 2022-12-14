import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  form:any;
  data:any;
  editdata:any;
  id:any;
  constructor(private ser:AdminService,private r:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title:new FormControl(''),
      description:new FormControl('')
    })
    this.id = this.r.snapshot.paramMap.get('id');
    // console.log(this.id);

    this.ser.viewabout(this.id).subscribe((ares)=>{
      // console.log(ares);
      this.editdata=ares

      this.form.patchValue({  // patchvalue fn. is used to update only a subset of the elements of the FormGroup 
        title:this.editdata.title,
        description:this.editdata.description
      })
    })

  }
  editupdate(){
    return this.ser.updateabout(this.form.value,this.id).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/admin-dashboard'])
    })
  }
}
