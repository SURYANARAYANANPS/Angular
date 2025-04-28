import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class POSTAPIComponent implements OnInit {
  ngOnInit(): void {
    this.getCars();
  }

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
onSaveCar(){
  
  this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((output:any)=>{
    if(output.result){
      alert("car added to database"),
      this.getCars()
    }else{
      alert(output.message)
    }
  })
}
}

