import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllAccessoryComponent } from './all-accessory/all-accessory.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainProductComponent } from './main-product/main-product.component';
import { ProductAccessoryComponent } from './product-accessory/product-accessory.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { AppRoutingModule } from './app-routing.module';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AuthComponent } from './auth/auth.component';
import { CrudProductComponent } from './crud-product/crud-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAccComponent } from './update-acc/update-acc.component';
import { AddAccComponent } from './add-acc/add-acc.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    AllAccessoryComponent,
    NavbarComponent,
    MainProductComponent,
    ProductAccessoryComponent,
    OrdersComponent,
    ECommerceComponent,
    AuthComponent,
    CrudProductComponent,
    UpdateAccComponent,
    AddAccComponent,

  ],
  imports: [
     Ng2SearchPipeModule ,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
