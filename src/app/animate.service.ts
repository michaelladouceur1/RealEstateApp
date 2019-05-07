import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {
  private sbAnimate = new Subject<boolean>();
  private snAnimate = new Subject<boolean>();
  private openLeft: boolean = false;
  private openRight: boolean = false;

  constructor() { }

  sbAnimateListener() {
    return this.sbAnimate.asObservable();
  }

  snAnimateListener() {
    return this.snAnimate.asObservable();
  }

  sbAnimateUpdate() {
    console.log('Left Toggled');
    this.openLeft = !this.openLeft
    this.sbAnimate.next(this.openLeft);
  }

  snAnimateUpdate() {
    console.log('Right Toggled');
    this.openRight = !this.openRight
    this.snAnimate.next(this.openRight);
  }
}
