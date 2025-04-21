import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  imports: [FormsModule,CommonModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent {
  divview:boolean =false;
  carList :any[]=[];
  carObj:any={ 
    // "carId": "",
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
}

  http = inject(HttpClient);

  getCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((output:any)=>{
      this.carList=output.data;
    })

}
editCar(data:any){
  this.divview=true;
  this.carObj=data;

}
cancelEdit(){
  this.divview=false;
}

oneditSaveCar(){
  this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.carObj).subscribe((output:any)=>{
    if(output.result){
      alert("updated"),
      this.getCars()
    }else{
      alert(output.message)
    }
  })

}
}
