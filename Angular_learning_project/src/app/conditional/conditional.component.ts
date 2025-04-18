import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conditional',
  imports: [FormsModule],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css'
})
export class ConditionalComponent {

  divonevisible:boolean=false;
  ischecked:boolean=false;
  dayname:string='';

  viewdiv(){
    this.divonevisible=true;
  }
  hidediv(){
    this.divonevisible=false;
  }

  employeeArray:any[]=[
    {empId:12222,empName:"appu",empPhone:"34567898877",empLocation:"kochi"},
    {empId:12223,empName:"apaserpu",empPhone:"3457767898877",empLocation:"pune"},
    {empId:12221,empName:"fssaa",empPhone:"345657898877",empLocation:"thrissur"},
    {empId:12224,empName:"sretr",empPhone:"3456777898877",empLocation:"tvm"}
    
  ]
  cityList:string[]=["pune","mumbai","kochi","banglore"]
}


  
