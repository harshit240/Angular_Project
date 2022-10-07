import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url="http://localhost:3000/"
  
  constructor(private http:HttpClient,private route :Router) { }
  
  getdata(){
    return this.http.get(this.url+'blogs');
  }

  insertblog(blog:any){
    return this.http.post(this.url+'blogs',blog)
  }

  viewdata(id:any){
    return this.http.get(this.url+'blogs/'+id);
  }
  
  updatedata(data:any,id:any){
    return this.http.put(this.url+'blogs/'+id,data);
  }
  // ============================
  // Contact methods
  insertcontact(details:any){
    console.log(details);
    return this.http.post(this.url+'contacts',details);
  }
  contactsdata(){
    return this.http.get(this.url+'contacts');
  }
  viewcontacts(id:any){
    return this.http.get(this.url+'contacts/'+id);
  }
  // ============================
  // Category Methods
  categorydata(){
    return this.http.get(this.url+'categories');
  }
  insertcategory(category:any){
    return this.http.post(this.url+'categories',category)
  }
  viewcategorydata(id:any){
    return this.http.get(this.url+'categories/'+id);
  }
  // =====================================
  // About Page
  viewabout(){
    return this.http.get(this.url+'about')
  }
  // Registration page
  
}
