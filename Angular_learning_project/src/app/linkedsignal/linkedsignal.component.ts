import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linkedsignal',
  imports: [],
  templateUrl: './linkedsignal.component.html',
  styleUrl: './linkedsignal.component.css'
})
export class LinkedsignalComponent {

  firstname = signal<string>("suryaa")
  lastname = signal<string>(" narayanan")


  fullname=linkedSignal({
    source:this.firstname,
    computation:(newVal,prevVal)=>{
      const fullname = newVal +""+this.lastname()
      return fullname;

  }}
)


user=signal({id:'111',name:'suryaa'});

// emailid = linkedSignal({
//   source: this.user,
//   computation: (user) => `${user.name}${user.id}@gmail.com`, // Concatenate name + id + domain
//   equal:(a:any,b:any)=>a.id ===b.id// Ensure 'id' is present in both objects before comparison
// });

emailid=linkedSignal({
  source:this.user,
  computation: user=> `${user.name+user.id}@gmail.com`,
  equal:(a:any,b:any)=>a.id ===b.id
})
changeName(){
  this.firstname.set("devika")
}
}
