import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {AuthGuard} from "./auth.guard";
import {LimitedAccessGuard} from "./limited-access.guard";
import {CheckCeredentialsGuard} from "./check-ceredentials.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'product', component: ProductComponent, canActivate: [AuthGuard], data: {roles: ['admin']}},
  {path: 'editProduct', component: EditProductComponent, canActivate: [AuthGuard], data: {roles: ['users']}},
  {path: 'not-authorized', component: NotAuthorizedComponent},
  {path: 'limited-access', component: LimitedAccessGuard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
