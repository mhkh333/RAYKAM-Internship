import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IUser} from "../app-interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private _user: IUser | undefined;


  @Input()
  set user(user: IUser){
    this._user = user;
    this.counter++;
  };
  get user(): IUser{
    return <IUser>this._user;
  }

  counter: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  // ngOnChanges(){
  //   this._user = this.user;
  //   this.counter++;
  // }



}
