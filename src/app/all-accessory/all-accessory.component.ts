
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccessoryService } from '../shared/accessory.service';
import { Accessory } from "../model/accessory//accessory.module"
import { ProductOrder } from '../model/accessory/OrderAccessory';
import { ProductOrders } from '../model/accessory/ProductOrder';

@Component({
  selector: 'app-all-accessory',
  templateUrl: './all-accessory.component.html',
  styleUrls: ['./all-accessory.component.css']
})
export class AllAccessoryComponent implements OnInit {
  productOrders: ProductOrder[]=[];
  private shoppingCartOrders: ProductOrders;
  productSelected: boolean = false;
  title = 'Angular Search Using ng2-search-filter';
  searchText;

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
  }

  loadOrders(){
   /* this.as.getAllOrder().subscribe(next => this.ProductOrders = next);
    console.log(this)

*/
  }
  loadProducts() {
    this.as.getAccessorys().subscribe(next => this.Accessorys = next);

  }
 /* addAccessory(p: Accessory) {
    this.Accessorys.push(p);
  }
  updateListe(list: Accessory[]) {
    this.Accessorys = list;
  }

  deleteP(p: Accessory) {
    this.as.deleteAccessory(p).subscribe(next => this.as.getAccessorysJson().subscribe(next => this.Accessorys = next));
  }
  addAccToMain(a: Accessory) {
    console.log(a);
  }*/

  addToMainProduct(Accessory: Accessory) {
    const index = this.Accessorys.indexOf(Accessory, 0);
    if (index > -1) {
      this.Accessorys.splice(index, 1);
    }
    
    this.accAdded.emit(Accessory);

  }
  reset() {
    /*this.productOrders =[];
    this.loadProducts();
    this.ecommerceService.ProductOrders.productOrders =[];
    this.loadOrders();
    this.productSelected = false;*/
}

}
