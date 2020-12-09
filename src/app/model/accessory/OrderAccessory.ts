import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Accessory} from './accessory.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductOrder {
    product: Accessory;
    quantity: number;

   //all arguments constructor
}