import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {from, fromEvent, of} from "rxjs";
import {concatMap, delay, exhaustMap, filter, map, mergeMap, take, takeWhile, tap} from "rxjs/operators";
import {User} from "./models/app-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsersService} from "./services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  @ViewChild('input', {static: true}) input: ElementRef | undefined;

  @ViewChild('editBtn', {static: true}) editBtn: ElementRef | any;

  constructor(private http: HttpClient, private userService: UsersService) {
  }

  users: User[] = [
    {
      name: 'foad',
      age: 30,
      status: 'active'
    }, {
      name: 'Resoad',
      age: 40,
      status: 'active'
    }, {
      name: 'farid',
      age: 100,
      status: 'inactive'
    }, {
      name: 'mia',
      age: 333,
      status: 'inactive'
    }

  ];

  public ngOnInit() {
    of(['name', 'name1', 'name3']).subscribe(console.log);
    of('name', 'name1', 'name3').subscribe(console.log);
    from(['name', 'name1', 'name3']).subscribe(console.log);

    // @ts-ignore
    fromEvent(document, 'click').pipe(
      map(event => event as MouseEvent),
      map(item => {
        return {
          x: item.offsetX,
          y: item.offsetY,
        }
      }),
      // take(5),
      takeWhile(item => item.x < 1000),
      tap(i => console.log(i)),
    ).subscribe();


    fromEvent(this.input?.nativeElement, 'input').pipe(
      map(event => event as InputEvent),
      map(item => (item.target as HTMLInputElement).value),
      concatMap(item => this.userService.patchBodyPost(item)),
      tap(i => console.log(i))
    ).subscribe();

    // of(1, 2, 3, 4, 5, 6, 7, 8, 9).subscribe(val => {
    //   this.http.patch('')
    // });

    // from(this.users).pipe(
    //   filter(user => user.status === 'inactive')
    // ).subscribe(console.log);

    of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      mergeMap((val) => this.patchMultiplePosts(val)),
      tap(i => console.log(i))
    ).subscribe();

    fromEvent(this.editBtn.nativeElement, 'click').pipe(
      tap(i => console.log('clicked')),
      exhaustMap(() => this.patchSinglePost()),
      tap(i => console.log(i))
    ).subscribe();

  }

  public patchMultiplePosts(postId: number) {
    let body = JSON.stringify({
      body: 'Test123',
      title: 'TestTitle123'
    });

    let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    let options = {headers: headers};

    return this.http.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, body, options);

  }

  public patchSinglePost() {
    let body = JSON.stringify({
      body: 'Bob',
      title: 'asgharTitle'
    });

    let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    let options = {headers: headers};

    return this.http.patch(`https://jsonplaceholder.typicode.com/posts/1`, body, options).pipe(
      delay(2000)
    );
  }

  public changeBodyPost(val: string) {

  }
}
