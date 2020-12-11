import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//import { CartService } from '../cart.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent   {
  isadmin:boolean=false;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.profileForm.value.firstName=="admin" && this.profileForm.value.lastName=="admin"? this.isadmin=true : this.isadmin=false;
    console.warn(this.profileForm.value, this.isadmin);
    
  }
}
