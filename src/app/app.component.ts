import { Component, ViewChild } from '@angular/core';
import { AllAccessoryComponent } from './all-accessory/all-accessory.component';
import { Accessory } from './model/Accessory/Accessory.module';
import { ProductOrder } from './model/accessory/OrderAccessory';
import { ProductOrders } from './model/accessory/ProductOrder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('AllAccessory')
  AllAccessory: AllAccessoryComponent;
  title = 'E-coffin';
  orderFinished = false;
  

  Accessorys : ProductOrder[]=[];

  accAdded(accessory:any){
     const acc=new ProductOrder();
   acc.product={...accessory};
   acc.quantity=0;
    this.Accessorys.push(acc)
    this.calculateTotal();
    
  }
  finishOrder(data) {
    this.orderFinished = data.orderFinished;
}
calculateTotal(){
  const count = this.Accessorys.reduce((counter, { product,quantity }) => true ? counter +=product.price*quantity : counter, 0);
}
}
 