import {Component, OnInit} from '@angular/core';
import {Address, User} from "./models/album";
import {concat, Observable, of} from "rxjs";
import {concatAll, delay, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users: User[] = [];

  public address: Address[] = [];

  constructor() {
  }

  public ngOnInit() {

    const obs1$ = of(1, 2).pipe(delay(3000));
    const obs2$ = of(3, 4).pipe(delay(1000));
    const obs3$ = of(5, 6).pipe(delay(2000));

    const res1$ = of(obs1$, obs2$, obs3$);
    const res2$ = of(obs1$, obs2$, obs3$).pipe(concatAll()) .subscribe();

    const obs$4 = of(of(of(1, 2)));

    const res$3 = obs$4.pipe(
      mergeMap(n => n),
      mergeMap(i => i),
    ).subscribe(console.log);

    let users$: Observable<User[]>;
    let address$: Observable<Address[]>;

    users$ = of(this.users);

    address$ = users$.pipe(

    );

  }

  // @ts-ignore
  public getAddress(userId: number): Observable<Address>{
    const add = this.address.findIndex(a => a.userId === userId);
    return of(this.address[add]);
  }
}
