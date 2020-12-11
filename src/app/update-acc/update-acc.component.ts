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
  fbuilder : FormBuilder = new FormBuilder();
  constructor(private ac:ActivatedRoute, private ps:AccessoryService, private _router:Router) { }
  paramId : string;
  ngOnInit(): void {
    
   /* this.productform = new FormGroup({
      id : new FormControl('',Validators.required),
      price : new FormControl('',Validators.required),
      quantity :  new FormControl('',[Validators.required, Validators.pattern("[1-9][0-9]*")]),
      title : new FormControl('',[Validators.required, Validators.minLength(3)])
    })*/
    this.productform = this.fbuilder.group({
      id : ['',Validators.required],
      price : ['',Validators.required],
      quantity :  ['',[Validators.required, Validators.pattern("[1-9][0-9]*")]],
      name : ['',[Validators.required, Validators.minLength(3)]]
    })
    this.ac.paramMap.subscribe(res=>{this.paramId=res.get('id');
    this.ps.getAccessoryById(Number(res.get('id'))).subscribe(res=>this.p=res)});
  
  }
  
  debug(){
    console.log(this.productform);
  }
  updateProduct(){
    //this.list.push(this.p);
    //this.p=new Product();
   /// console.log(this.list);
   this.ps.updateAccessory(Number(this.paramId),this.p).subscribe(res=>this._router.navigateByUrl("/second-component"));
  
  
  }
  
  get priceProduct() { return this.productform.get('price');}
  get quantityProduct() { return this.productform.get('quantity');}

}
