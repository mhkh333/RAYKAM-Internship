import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Foad";
  isEnabeld: boolean = false;

  public onInputChanged(e: Event) {
    // console.log(e);
    this.name = (<HTMLInputElement>e.target).value;
  }
}
