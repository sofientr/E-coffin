import { Component, OnInit ,Input, OnChanges} from '@angular/core';
import { ProductOrder } from '../model/accessory/OrderAccessory';
import { ProductOrders } from '../model/accessory/ProductOrder';
import { AccessoryService } from '../shared/accessory.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit  {

    total: number;
    paid: boolean;
    orderFinished :boolean
    profileForm = new FormGroup({
      nom: new FormControl(''),
      adresse: new FormControl(''),
    });


    @Input('ProductOrder') data: ProductOrder[];

   constructor(private ecommerceService: AccessoryService) {
       // this.orders = this.ecommerceService.ProductOrders;
    }

    ngOnInit() {
        this.paid = false;
        this.calculateTotal()
       /* this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });
        this.loadTotal();*/
        
    }

    finishOrder() {
      this.paid = true;
      this.pay()
      window.alert ("Ordre finished");
      

  }
  pay() {
    const result:ProductOrders  = Object.assign({}, this.profileForm.value);
result.productOrders=this.data
    console.log(result)
    this.ecommerceService.saveOrder(result).subscribe();
}
calculateTotal(){
  this.total = this.data.reduce((counter, { product }) => true ? counter +=product.price*product.quantity : counter, 0);
  console.log(this.total)
}


}
