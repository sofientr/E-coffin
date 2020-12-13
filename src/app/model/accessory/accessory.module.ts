import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Accessory {
  id:number;
  name:string;
price:number;
quantity : number;
image: string;
discount:number;

 }
