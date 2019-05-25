import { Injectable } from '@angular/core';

import { Property } from '../models/properties.model';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private properties: Property[] = [];

  constructor() { }
}
