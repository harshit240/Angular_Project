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

  sendcontactdetails(details:any){
    console.log(details);
    // return this.http.post(this.url+'contacts'+details)
  }

  contactsdata(){
    return this.http.get(this.url+'contacts')
  }

  viewdata(id:any){
    return this.http.get(this.url+'blogs/'+id);
  }

  updatedata(data:any,id:any){
    return this.http.put(this.url+'blogs/'+id,data);
  }
}
