import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
import { SolorfulDirective } from './solorful.directive';
import { AppHighlightDirective } from './app-highlight.directive';
import { CarouselDirective } from './carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SolorfulDirective,
    AppHighlightDirective,
    CarouselDirective
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
