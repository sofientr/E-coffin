import { Injectable } from '@angular/core';
import { Accessory } from '../model/Accessory/Accessory.module';
import {HttpClient, HttpHeaders}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOrder } from '../model/accessory/OrderAccessory';
import { ProductOrders } from '../model/accessory/ProductOrder';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {
  private productOrder: ProductOrder;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  urlAccessorys : string ="http://localhost:3000/accessory";
  ordersUrl:string="http://localhost:3000/orders";
  Accessorys : Accessory[]/*=[
    {id: 1, name: "T-shirt 1", price: 18, quantity: 0, }, 
    {id: 2, name: "T-shirt 2", price: 21, quantity: 10, }, 
    {id: 3, name: "T-shirt 3", price: 16, quantity: 8, },
    {id: 4, name: "T-shirt 4", price: 20, quantity: 8, },
    ];*/
  constructor(private http : HttpClient) { }
  /*getAccessorys() : Accessory[]{
    return this.Accessorys;
  }*/
  getAccessorys() : Observable<Accessory[]>{
    //return this.http.get<Accessory[]>("/assets/Accessorys.json");
    return this.http.get<Accessory[]>(this.urlAccessorys);
  }
  getAllOrder() : Observable<ProductOrders[]>{
    //return this.http.get<Accessory[]>("/assets/Accessorys.json");
    return this.http.get<ProductOrders[]>(this.ordersUrl);
  }
  saveOrder(order: ProductOrders) {
    return this.http.post(this.ordersUrl, order);
}

  addAccessory (Accessory: Accessory): Observable<Accessory> {
    return this.http.post<Accessory>(this.urlAccessorys, Accessory, this.httpOptions);}

    deleteAccessory (p: Accessory | number): Observable<Accessory> {
      const id = typeof p === 'number' ? p : p.id;
      const url=this.urlAccessorys+'/'+id;
      return this.http.delete<Accessory>(url);
      }

      getAccessoryById(id:number){
        return this.http.get<Accessory>(this.urlAccessorys+'/'+id);
      }

      updateAccessory (id:number,Accessory: Accessory): Observable<Accessory> {
        return this.http.put<Accessory>(this.urlAccessorys+'/'+id, Accessory, this.httpOptions);}
     
   
}
