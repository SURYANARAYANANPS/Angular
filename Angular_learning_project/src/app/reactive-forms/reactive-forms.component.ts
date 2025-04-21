import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  userForm:FormGroup = new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    firstLast:new FormControl("",[Validators.required,Validators.minLength(4)]),
    user:new FormControl(""),
    city:new FormControl("Thrissur"),
    state:new FormControl(""),
    zip:new FormControl(""),
    isAgreed:new FormControl(false)
  })

  constructor(){
    this.userForm.controls['city'].disable();
    setTimeout(() => {
      this.userForm.controls['city'].enable();

    },5000);
  }

  onSave(){
    
    const formValue = this.userForm.value;
    debugger;
  }

}
