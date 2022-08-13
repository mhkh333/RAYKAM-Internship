import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LimitedAccessComponent } from './limited-access/limited-access.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LimitedAccessComponent,
    NotAuthorizedComponent,
    ProductComponent,
    HomeComponent,
    EditProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
