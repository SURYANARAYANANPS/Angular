import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule,NgIf],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {

  userObj:any={
    firstName:'',
    lastName:'',
    userName:'',
    userCity:'',
    userState:'',
    userZip:'',
    isAgreed:false
  }

  onSave(){
    debugger;
    const formValue = this.userObj;

  }

}
