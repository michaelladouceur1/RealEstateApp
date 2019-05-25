import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Property } from '../../models/properties.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  propertyForm: FormGroup;
  content = 'general';
  property: Property;

  constructor() { }

  ngOnInit() {
    this.property = {
      general: {
        address: {
          street: '',
          city: '',
          state: '',
          zip: null
        },
        features: {
          homeType: '',
          area: null,
          bedrooms: null,
          bathrooms: null,
          parking: '',
          heating: '',
          cooling: '',
          appliances: [''],
          schoolDistrict: '',
          description: ''
        }
      }
    }
  }

  // setValue() {
  //   this.street = '2846';
  // }

  log() {
    console.log(this.property);
  }
}
