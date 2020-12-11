import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AuthComponent } from './auth/auth.component';
import { UpdateAccComponent } from './update-acc/update-acc.component';
const routes: Routes = [
  { path: 'first-component', component: ECommerceComponent },
  { path: 'second-component', component: AuthComponent },
  { path: "update/:id", component:UpdateAccComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }