import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//import { CartService } from '../cart.service';
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { AccessoryService } from '../shared/accessory.service';
import{ProductOrders}from '../model/accessory/ProductOrder';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent    {
  po:ProductOrders[];
  isadmin:boolean=false;

  constructor(private as: AccessoryService){

  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  
  ngOnInit(){
    this.loadorders();
}
  loadorders() {
    this.as.getAllOrder().subscribe(next => this.po = next);
    console.log(this.po)

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.profileForm.value.firstName=="admin" && this.profileForm.value.lastName=="admin"? this.isadmin=true : this.isadmin=false;
    console.warn(this.profileForm.value, this.isadmin);
    
  }
}
