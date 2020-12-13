import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Accessory} from './accessory.module';
import { ProductOrder } from './OrderAccessory';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductOrders {
    productOrders: ProductOrder  []=[];
    nom:string;
    adresse:string;

}