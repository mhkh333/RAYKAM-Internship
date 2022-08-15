import {Component} from '@angular/core';
import {observable, Observable} from "rxjs";
import {Todo} from "./models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public http$: Observable<Todo[]> | any;
  public doneTasks: Todo[] | any;
  public undoneTasks: Todo[] | any;

  public ngOnInit() {

    this.http$ = new Observable((observer) => {
      fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
        return response.json();
      }).then((body) => {
        observer.next(body);
        observer.complete();
      }).catch((err) => {
        observer.error(err);
      });
    });

    this.http$.subscribe((val: any) =>{
      this.doneTasks = val.filter((todo) => todo.completed === true);
      this.undoneTasks = val.filter((todo: { complete: boolean; }) => todo.completed === true);
    });


  }
}
