import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Accessory } from '../model/Accessory/Accessory.module';
import { AccessoryService } from '../shared/accessory.service';


@Component({
  selector: 'app-update-acc',
  templateUrl: './update-acc.component.html',
  styleUrls: ['./update-acc.component.css']
})
export class UpdateAccComponent implements OnInit {
  list : Accessory[]
  productform : FormGroup;
  productform2 : FormGroup;
  p : Accessory = new Accessory();
  submitted = false;

  fbuilder : FormBuilder = new FormBuilder();
  constructor(private ac:ActivatedRoute, private ps:AccessoryService, private _router:Router) { }
  paramId : string;
  ngOnInit(): void {
    

    this.productform = this.fbuilder.group({
      id : ['',Validators.required],
      price : ['',Validators.required],
      quantity :  ['',[Validators.required]],
      name : ['',[Validators.required]],
      discount:['',[Validators.required]],
      image:['',[Validators.required]],

    })
    this.ac.paramMap.subscribe(res=>{this.paramId=res.get('id');
    this.ps.getAccessoryById(Number(res.get('id'))).subscribe(res=>this.p=res)});
  
  }
  get f() { return this.productform.controls; }

  debug(){
    console.log(this.productform);
  }
  updateProduct(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.productform.invalid) {
        return;
    }


   this.ps.updateAccessory(Number(this.paramId),this.p).subscribe(res=>this._router.navigateByUrl("/second-component"));
   window.alert ("prduct updateted ");

  
  
  }
  
  get priceProduct() { return this.productform.get('price');}
  get quantityProduct() { return this.productform.get('quantity');}

}
