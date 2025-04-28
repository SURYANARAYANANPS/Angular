import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit,AfterViewInit,AfterViewChecked ,AfterContentInit,AfterContentChecked,OnDestroy{

  constructor(){
    console.log("constructor")

  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("ngOnDestroy")
    alert("you are leaving page")
  }
  ngAfterContentChecked(): void {
    //throw new Error('Method not implemented.');
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("ngAfterViewInit");
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("OnInit");
    alert("you viewing bad page")
  }

}
