
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccessoryService } from '../shared/accessory.service';
import { Accessory } from "../model/accessory//accessory.module"
import { ProductOrder } from '../model/accessory/OrderAccessory';
import { ProductOrders } from '../model/accessory/ProductOrder';


@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css']
})
export class CrudProductComponent implements OnInit {
  productOrders: ProductOrder[]=[];
  private shoppingCartOrders: ProductOrders;
  productSelected: boolean = false;
  

  x: number = 8;
  inputval: number;
  vall: number;
  @Output() accAdded = new EventEmitter<Accessory>();

  first: number = 5;
  Accessorys: Accessory[];
  constructor(private as: AccessoryService) {

    this.x;
  }



  ngOnInit(): void { //this.Accessorys =this.as.getAccessorys();
    this.productOrders =[];
    this.loadProducts();
    this.loadOrders();
    console.log(this.Accessorys)
  }

  loadOrders(){
   /* this.as.getAllOrder().subscribe(next => this.ProductOrders = next);
    console.log(this)

*/
  }
  loadProducts() {
    this.as.getAccessorys().subscribe(next => this.Accessorys = next);

  }


  deleteP(p: Accessory) {
    this.as.deleteAccessory(p).subscribe(next => this.as.getAccessorys().subscribe(next => this.Accessorys = next));
  }
  addAccToMain(a: Accessory) {
    console.log(a);
  }


}
