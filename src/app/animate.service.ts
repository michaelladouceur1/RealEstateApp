import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {
  private sbAnimate = new Subject<boolean>();
  private isOpen: boolean = false;

  constructor() { }

  sbAnimateListener() {
    return this.sbAnimate.asObservable();
  }

  sbAnimateUpdate() {
    console.log('Toggled');
    this.isOpen = !this.isOpen
    this.sbAnimate.next(this.isOpen);
  }
}
