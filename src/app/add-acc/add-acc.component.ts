import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Accessory } from '../model/Accessory/Accessory.module';
import { AccessoryService } from '../shared/accessory.service';


@Component({
  selector: 'app-add-acc',
  templateUrl: './add-acc.component.html',
  styleUrls: ['./add-acc.component.css']
})
export class AddAccComponent implements OnInit {
  product : Accessory = new Accessory();


  constructor( private ps:AccessoryService ,private _router:Router ) { }

  ngOnInit(): void {
  }

  addProduct(form){
    console.log(this.product);
    this.ps.addAccessory(this.product).subscribe();
    window.alert ("prduct saved ");
    
    
  }

  
}
