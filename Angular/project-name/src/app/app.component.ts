import {Component, OnInit} from '@angular/core';

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



  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '3rem',
      'color': 'red'
    };
    this.classes= {
      'big-font-size': this.isModified
    }
  }



}
