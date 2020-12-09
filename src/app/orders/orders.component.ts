import { Component, OnInit ,Input, OnChanges} from '@angular/core';
import { ProductOrder } from '../model/accessory/OrderAccessory';
import { ProductOrders } from '../model/accessory/ProductOrder';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit  {

    total: number;
    paid: boolean;

    @Input('ProductOrder') data: ProductOrder[];

   /* constructor(private ecommerceService: EcommerceService) {
        this.orders = this.ecommerceService.ProductOrders;
    }*/

    ngOnInit() {
        this.paid = false;
        
       /* this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });
        this.loadTotal();*/
        this.calculateTotal();
    }
    calculateTotal(){
     this.total = this.data.reduce((counter, { product,quantity }) => true ? counter +=product.price*quantity : counter, 0);
    }



}
