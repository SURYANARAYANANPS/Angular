import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  divview:boolean =false;

  num1:string='';
  num2:string='';




  shoediv(){
      this.divview=true;

    }
    hidediv(){
      this.divview=false;

    }
  

}

