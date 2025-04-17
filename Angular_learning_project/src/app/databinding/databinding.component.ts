import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isDataView } from 'node:util/types';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  firstName:string="surya";
  rollNo: number =1234;
  isAactive:boolean = true;
  currentDate:Date = new Date();
  placeholder:string="add your name here"


  constructor(){
    console.log(this.firstName)
  }
  showMessag(){
    alert("hi sura its a alert")
  }

  showChang(){
    alert("state changed")
  }


}
