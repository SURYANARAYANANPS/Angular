import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList:string[]=["pune","thrissur","kochi","tvm"]

  employeeArray:any[]=[
    {empId:12222,empName:"appu",empPhone:"34567898877",empLocation:"kochi"},
    {empId:12223,empName:"apaserpu",empPhone:"3457767898877",empLocation:"pune"},
    {empId:12221,empName:"fssaa",empPhone:"345657898877",empLocation:"thrissur"},
    {empId:12224,empName:"sretr",empPhone:"3456777898877",empLocation:"tvm"},
    
  ]
}
