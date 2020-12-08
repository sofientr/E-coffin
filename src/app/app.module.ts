import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllAccessoryComponent } from './all-accessory/all-accessory.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainProductComponent } from './main-product/main-product.component';
import { ProductAccessoryComponent } from './product-accessory/product-accessory.component';
import { ProdutAccesssoryComponent } from './produt-accesssory/produt-accesssory.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllAccessoryComponent,
    NavbarComponent,
    MainProductComponent,
    ProductAccessoryComponent,
    ProdutAccesssoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
