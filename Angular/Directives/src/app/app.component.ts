// @ts-ignore

import {Component} from '@angular/core';
import {IUser} from "./app-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser = {
    name: 'foad',
    age: 30
  };

  // @ts-ignore
  // @ts-ignore
  users: IUser[] = [
    {
      name: 'foad',
      age: 30
    }, {
      name: 'ali',
      age: 33
    }, {
      name: 'ahmad',
      age: 22
    }, {
      name: 'gholam',
      age: 40
    }
  ];


  public onSelectChanged() {
    console.log(this.user);
  }

  color = 'red';
  images: string[] = ['/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg'];


}
