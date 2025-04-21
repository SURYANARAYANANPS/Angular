import { HttpClient } from '@angular/common/http';
import { Component, inject, output } from '@angular/core';

@Component({
  selector: 'app-delete-api',
  imports: [],
  templateUrl: './delete-api.component.html',
  styleUrl: './delete-api.component.css'
})
export class DeleteApiComponent {

  

  carList :any[]=[];

  http = inject(HttpClient);
  getCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((output:any)=>{
      this.carList=output.data;
    })

}
deleteCar(id:any){
  const isDelete = confirm("are you sure to delete");
  if (isDelete){
    this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid="+id).subscribe((output:any)=>{
      if(output.result){
        alert("deleted successfully")
        this.getCars();
      }else{
        alert(output.message)
      }
    })
  }else{
    alert("delete action cancled")
  }
  
}
}
