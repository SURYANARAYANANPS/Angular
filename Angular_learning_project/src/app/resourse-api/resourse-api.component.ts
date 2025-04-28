import { Component, resource } from '@angular/core';
import { promises } from 'dns';

@Component({
  selector: 'app-resourse-api',
  imports: [],
  templateUrl: './resourse-api.component.html',
  styleUrl: './resourse-api.component.css'
})
export class ResourseAPIComponent {
userList = resource({
  loader:() => {
    return fetch('https://jsonplaceholder.typicode.com/users').then((output)=>output.json() as Promise<any[]>)
  }
})

reloaddata(){
  this.userList.reload();
}
}
