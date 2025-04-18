import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',

  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {


  firstName = signal("suryaaaa");
  lastName = signal<string>("narayanan");
  rollnumber=signal(0)

  courseName:string='angular';

  increase(){
    this.rollnumber.update(oldValue=> oldValue+1)

  }


  constructor(){
    const value = this.firstName();

  

    setTimeout(()=> {
      // debugger;
      // this.courseName="react JS";
      // debugger;
      this.firstName.set("Devika");
      this.lastName.set("MR");
      
      
    },5000
    
  );
  }

}
