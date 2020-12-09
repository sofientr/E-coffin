import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllAccessoryComponent } from './all-accessory/all-accessory.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainProductComponent } from './main-product/main-product.component';
import { ProductAccessoryComponent } from './product-accessory/product-accessory.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    AllAccessoryComponent,
    NavbarComponent,
    MainProductComponent,
    ProductAccessoryComponent,
    OrdersComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
