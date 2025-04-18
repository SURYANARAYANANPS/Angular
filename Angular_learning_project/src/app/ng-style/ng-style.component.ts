import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle,FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  div1bgcolour:string='';
  isChecked:boolean=true;
 

  addDiv1Colour(value:string){
    this.div1bgcolour=value;
  }

mycss:any={
  'background-color':'red',
  // 'width':'200px',
  // 'height':'200px'
};
}
