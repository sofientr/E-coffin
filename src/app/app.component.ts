import { Component } from '@angular/core';
import { Accessory } from './model/Accessory/Accessory.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-coffin';

  Accessorys : Accessory[]=[
    //   {id: 1, title: "T-shirt 1", price: 18, quantity: 5, like: 0}, 
     //  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0}, 
     //  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
     //  {id: 4, title: "T-shirt 3", price: 20, quantity: 8, like: 0},
       ];

  accAdded(accessory:any){
    this.Accessorys.push(accessory)
    console.log(this.Accessorys ,"testtsest");
  }
}
 