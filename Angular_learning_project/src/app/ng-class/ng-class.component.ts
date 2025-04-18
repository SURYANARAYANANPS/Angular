import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  divBgcolour:string="";

  isChecked:boolean=false;

  div3className:string='';
  
  addDiv2Colour(className:string){
    this.divBgcolour=className;

  }
  addDiv1Colour(className:string){
    this.divBgcolour=className;

  }




}
