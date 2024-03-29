import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {user} from "./app-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = '';
  password: string = '';
  retype: string = '';
  isMatch: boolean = false;

  isCorrect: boolean = false;
  isModified: boolean = true;
  isCancelled: boolean = true;

  switchPropert: string = 'c';

  title = 'ngContent';
  ratings: number[] = [3, 5, 2.5, 2, 4];

  public onUserNameInputChanged(e: Event) {
    this.username = (<HTMLInputElement>e.target).value;
  }

  public onPasswordInputChanged(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  public onRetype(e: Event) {
    this.retype = (<HTMLInputElement>e.target).value;

    if (this.retype === this.password) {
      this.isMatch = true;
    } else {
      this.isMatch = false;
    }
  }

  styles = {};
  classes = {};
  userObj: any = [{
    id: 1,
    name: 'foad'
  }, {
    id: 2,
    name: 'reza'
  }, {
    id: 3,
    name: 'armin'
  }, {
    id: 4,
    name: 'turaj'
  }, {
    id: 5,
    name: 'ali'
  }

  ];


  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '3rem',
      'color': 'red'
    };
    this.classes = {
      'big-font-size': this.isModified,
      'cancelled-color': this.isCancelled
    }
  }

  public addUser() {
    this.userObj = [{
      id: 1,
      name: 'foad'
    }, {
      id: 2,
      name: 'reza'
    }, {
      id: 3,
      name: 'armin'
    }, {
      id: 4,
      name: 'turaj'
    }, {
      id: 5,
      name: 'ali'
    },
      {
        id: 6,
        name: 'aka'
      }

    ];

  }

  public trackByFunc(index: number, el: any) {
    return el.id;
  }

  public onStarClicked(rating: number) {
    console.log(`The rating ${rating} is clicked!`);
  }


  /////////////////////////////////components decoupling
  users: user[] = [
    {
      email: 'mhkh@gmail.com',
      password: '123',
      address: 'aliabad'
    }, {
      email: 'mhkh@ail.com',
      password: '123444',
      address: 'shiekh baha'
    }, {
      email: 'mh@gmail.com',
      password: '123333',
      address: 'gisha'
    },
  ];

  public onAddUser(){

  }

  @ViewChild('par') par: ElementRef | undefined;

  public onContentChanged(){
    // @ts-ignore
    this.par.nativeElement.textContent = '1234';
  }

}
