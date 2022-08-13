import {Component, OnInit} from '@angular/core';
import {IUser} from "../interfaces/app-interface";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selectedID: number = 0;
  selectedUser: IUser = {id: 0, name: ''};
  isUserFound: boolean = true;

  users: IUser[] = [
    {
      id: 1,
      name: 'Foad'
    }, {
      id: 2,
      name: 'Ali'
    }, {
      id: 3,
      name: 'Amir'
    }, {
      id: 4,
      name: 'Akbar'
    },
  ];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.selectedID = +this.route.snapshot.params['id'];
    // @ts-ignore
    this.selectedUser = this.users.find(user => user.id === this.selectedID);
    if (!this.selectedUser) {
      this.isUserFound = false;
    }

    this.route.params.subscribe((params: Params) => {
      // @ts-ignore
      this.selectedUser = this.users.find(user => user.id === +params['id']);
    });
  }

}
