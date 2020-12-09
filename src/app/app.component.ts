import { Component, ViewChild } from '@angular/core';
import { AllAccessoryComponent } from './all-accessory/all-accessory.component';
import { Accessory } from './model/Accessory/Accessory.module';
import { ProductOrder } from './model/accessory/OrderAccessory';

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

  Accessorys : ProductOrder[]=[
    //   {id: 1, title: "T-shirt 1", price: 18, quantity: 5, like: 0}, 
     //  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0}, 
     //  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
     //  {id: 4, title: "T-shirt 3", price: 20, quantity: 8, like: 0},
       ];

  accAdded(accessory:any){
     const acc=new ProductOrder();
   acc.product={...accessory};
   acc.quantity=0;
   console.log(acc)
   acc.quantity=0;
    this.Accessorys.push(acc)
    console.log(this.Accessorys ,"testtsest");
    this.calculateTotal();
  }
  finishOrder(data) {
    this.orderFinished = data.orderFinished;
    console.log(this.orderFinished )
}
calculateTotal(){
  const count = this.Accessorys.reduce((counter, { product,quantity }) => true ? counter +=product.price*quantity : counter, 0);
  console.log('total',count)
}
}
 