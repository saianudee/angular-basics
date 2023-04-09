import { Component } from '@angular/core';

import { products } from '../products';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countryData } from './data';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor() {
    this.bioData.reset();
  }
  products = products;
  bioData = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    selectData: new FormControl('', [Validators.required]),
  });

  countryData = countryData;

  get fName() {
    return this.bioData.get('firstName');
  }

  get lName() {
    return this.bioData.get('lastName');
  }

  get select() {
    if (this.bioData.get('selectData').value === 'Africa') {
      return 'Not allowed';
    }
  }
  submitData(item) {
    console.log(item);
    this.bioData.reset();
  }
  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
