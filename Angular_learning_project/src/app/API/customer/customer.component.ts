import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../Componentservices/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerObj:any={
    
      //"customerId": 0,
      "customerName": "",
      "customerCity": "",
      "mobileNo": "",
      "email": ""
    
  }

  customerArray:any[]=[];
  // constructor(private http:HttpClient){
  //   this.getCoustomers();
  // }

  // getCoustomers(){
  //   this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe((output:any)=>
  //   {
  //     this.customerArray=output.data;

  //   })

  //}


  constructor(private custSer:CustomerService){
    this.getCoustomers();
  }
  getCoustomers(){
    
    this.custSer.loadCustomers().subscribe((output:any)=>{
      this.customerArray=output.data;
    })
  }


  saveCustomer(){
    console.log("Posting Customer:", this.customerObj);
  
    if (!this.customerObj.customerName || !this.customerObj.customerCity || !this.customerObj.mobileNo || !this.customerObj.email) {
      alert("Please fill all the fields before saving.");
      return;
    }
  
    this.custSer.AddCustomers(this.customerObj).subscribe((output: any) => {
      if (output.result) {
        alert("Customer created successfully!"),
        this.getCoustomers();
      } else {
        alert(output.message);
      }
    });
  }


  resetForm() {
    this.customerObj = {
      customerId: 0,
      customerName: '',
      customerCity: '',
      mobileNo: '',
      email: '',
    };
  }
  

}
