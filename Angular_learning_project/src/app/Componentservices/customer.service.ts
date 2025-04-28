import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  CarRentalUrl :string="https://freeapi.miniprojectideas.com/api/CarRentalApp/";

  constructor(private http: HttpClient) {}

    loadCustomers() {
      return this.http.get(this.CarRentalUrl +'GetCustomers');
  }
    AddCustomers(obj:any){
      return this.http.post(this.CarRentalUrl + "CreateNewCustomer",obj);
      
    }
  
}
