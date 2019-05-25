import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Property } from '../../models/properties.model';
import { Animations } from '../../animate';
import { AnimateService } from '../../animate.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {

  propertyForm: FormGroup;
  content = 'general';
  property: Property;
  private modalAnimateSub: Subscription;

  constructor(
    public animateService: AnimateService
    ) { }

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
      },
      financial: {
        purchase: null,
        estimatedARV: null,
        downpayment: null,
        closingCost: null,
        rehabCost: null,
        miscellaneousCost: null,
        loanRate: null,
        loanTerm: null,
        loanAmount: null,
        loanPayments: null,
        mortgageRate: null,
        mortgageTerm: null,
        mortgageAmount: null,
        mortgagePayment: null,
        currentBalance: null
      }
    };
    console.log(this.property);
  }

  modalToggle(res: string) {
    this.animateService.modalAnimateUpdate(res);
  }

  log() {
    console.log(this.property);
  }
}
