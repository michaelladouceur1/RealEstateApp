import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Property } from '../../models/properties.model';
import { Animations } from '../../animate';
import { AnimateService } from '../../animate.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  animations: [
    Animations.toggleModal
  ]
})
export class PropertiesComponent implements OnInit {

  propertyForm: FormGroup;
  content = 'general';
  property: Property;
  private modalAnimateSub: Subscription;
  modalOpen = false;

  constructor(
    public animateService: AnimateService
    ) { }

  ngOnInit() {
    this.modalSubscribe();

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

  modalSubscribe() {
    this.modalAnimateSub = this.animateService.modalAnimateListener()
    .subscribe((res: boolean) => {
      this.modalOpen = res;
    });
  }

  modalToggle(res: boolean) {
    console.log(`Modal Open: ${res}`);
    this.animateService.modalAnimateUpdate(res);
  }

  log() {
    console.log(this.property);
  }
}
