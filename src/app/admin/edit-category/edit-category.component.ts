import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  form:any;
  id:any;
  editdata:any;
  constructor(private ser:AdminService,private r:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title:new FormControl(''),
      description:new FormControl('')
    })






    this.id = this.r.snapshot.paramMap.get('id');
    // console.log(this.id);

    this.ser.viewcategorydata(this.id).subscribe((res)=>{
      // console.log(res);
      this.editdata=res

      this.form.patchValue({  // patchvalue fn. is used to update only a subset of the elements of the FormGroup 
        title:this.editdata.title,
        description:this.editdata.description
      })
    })
  }
  updatecategory(){
    return this.ser.updatecategory(this.form.value,this.id).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/admin-dashboard'])
    })
  }
}
