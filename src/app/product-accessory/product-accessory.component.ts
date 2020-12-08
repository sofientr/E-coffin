import { Component, OnInit , Input} from '@angular/core';
import { Accessory } from '../model/Accessory/Accessory.module';
import { ProductAccessoryService } from '../shared/product-accessory.service';

@Component({
  selector: 'app-product-accessory',
  templateUrl: './product-accessory.component.html',
  styleUrls: ['./product-accessory.component.css']
})
export class ProductAccessoryComponent implements OnInit {

x:number =8;
inputval:number;
vall : number;
@Input(('joke')) data: Accessory;
  first : number = 5;
  Accessorys : Accessory[]=[
 //   {id: 1, title: "T-shirt 1", price: 18, quantity: 5, like: 0}, 
  //  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0}, 
  //  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  //  {id: 4, title: "T-shirt 3", price: 20, quantity: 8, like: 0},
    ];
  constructor(private as : ProductAccessoryService) {
    
 this.x;}

  likeAccessory(p :Accessory){
   // p.like++;
  }
  buyAccessory(i : number){
    if (this.Accessorys[i].quantity > 0)
      this.Accessorys[i].quantity -=1;
      console.log("test");
  }
  buyAccessory2(p : Accessory){
    if (p.quantity > 0)
    p.quantity -=1;
      console.log("test");
  }
  getcolor(i:number){
if (i <5)return 'yellow';
else return 'green';
  }
  ngOnInit(): void { //this.Accessorys =this.as.getAccessorys();
  this.as.getAccessorysJson().subscribe(next=>this.Accessorys=next);
  console.log(this.Accessorys)
  }
  addAccessory(p:Accessory){
    this.Accessorys.push(p);
  }
  updateListe(list : Accessory[]){
    this.Accessorys=list;
      }
    
      deleteP(p:Accessory){
        this.as.deleteAccessory(p).subscribe(next=>this.as.getAccessorysJson().subscribe(next=>this.Accessorys=next));
      }

}
