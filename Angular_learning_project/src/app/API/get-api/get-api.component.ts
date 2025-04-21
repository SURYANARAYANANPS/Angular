import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GETAPIComponent {
  userList:any[]=[];
  productList:any[]=[];
  constructor(private http: HttpClient){

  }
  getUsers(){
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((output:any)=>{
      this.userList=output; 
    })
  }
  getAllProduct(){
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((output:any)=>{
      this.productList=output;
    })
  }

}
