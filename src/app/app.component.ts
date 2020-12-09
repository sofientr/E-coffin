import { Component, ViewChild } from '@angular/core';
import { AllAccessoryComponent } from './all-accessory/all-accessory.component';
import { ProductOrder } from './model/accessory/OrderAccessory';
import { OrdersComponent } from './orders/orders.component';
import { ProductAccessoryComponent } from './product-accessory/product-accessory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'E-coffin';
  orderFinished = false;


  @ViewChild('productsC')
  productsC:AllAccessoryComponent;
  
  @ViewChild('ordersC')
  ordersC: OrdersComponent;


  @ViewChild('shoppingCartC')
  shoppingCartC: ProductAccessoryComponent;


  Accessorys : ProductOrder[]=[];

  accAdded(accessory:any){
     const acc=new ProductOrder();
   acc.product={...accessory};
   acc.quantity=0;
    this.Accessorys.push(acc)
    //this.calculateTotal();
    
  }
  finishOrder(data) {
    this.orderFinished = data.orderFinished;
}
reset() {
  this.orderFinished = false;
  this.productsC.reset();
  this.shoppingCartC.reset();
  this.ordersC.paid = false;

}
/*
calculateTotal(){
  const count = this.Accessorys.reduce((counter, { product,quantity }) => true ? counter +=product.price*quantity : counter, 0);
}*/
}
 