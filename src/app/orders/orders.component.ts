import { Component, OnInit } from '@angular/core';
import { ProductOrders } from '../model/accessory/ProductOrder';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: ProductOrders;
    total: number;
    paid: boolean;
    

   /* constructor(private ecommerceService: EcommerceService) {
        this.orders = this.ecommerceService.ProductOrders;
    }*/

    ngOnInit() {
        this.paid = false;
       /* this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });
        this.loadTotal();*/
    }

}
