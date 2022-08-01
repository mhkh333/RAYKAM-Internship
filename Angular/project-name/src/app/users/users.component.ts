import {AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('par', { static: true }) par: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    console.log(this.par.nativeElement.textContent);
  }


  ngAfterContentChecked(): void {
    // @ts-ignore
    console.log('from checked' + this.par.nativeElement.textContent);

  }

  ngAfterContentInit(): void {
    // @ts-ignore
    console.log("from init" + this.par.nativeElement.textContent);

  }




}
