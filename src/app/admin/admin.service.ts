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
  updatecategory(data:any,id:any){
    return this.http.put(this.url+'categories/'+id,data);
  }
  // =====================================
  // About Page
  getabout(){
    return this.http.get(this.url+'about')
  }
  viewabout(id:any){
    return this.http.get(this.url+'about/'+id);
  }
  updateabout(data:any,id:any){
    return this.http.put(this.url+'about/'+id,data);
  }
  // Registration page
  sendregisterdetails(details: any) {
    console.log(details);
    return this.http.post(this.url + 'register', details);
  }
  registerdata() {
    return this.http.get(this.url + 'register');
  }
  // Login 
  admin_login(data:any){
    console.log(data);
    return this. http.post(this.url+'register',data)
  }
}
