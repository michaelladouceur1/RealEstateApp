import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {
  private modalAnimate = new Subject<string>();
  private sbAnimate = new Subject<string>();
  private openLeft = false;
  private openRight = false;

  constructor() { }

  modalAnimateListener() {
    return this.modalAnimate.asObservable();
  }

  sbAnimateListener() {
    return this.sbAnimate.asObservable();
  }

  modalAnimateUpdate(res: string) {
    this.modalAnimate.next(res);
  }

  sbAnimateUpdate(res: string) {
    if (res === 'openLeft') {
      this.openLeft = !this.openLeft;
    } else {
      this.openRight = !this.openRight;
    }

    if (this.openLeft === true && this.openRight === true) {
      this.sbAnimate.next('openBoth');
    } else if (this.openLeft === true && this.openRight === false) {
      this.sbAnimate.next('openLeft');
    } else if (this.openLeft === false && this.openRight === true) {
      this.sbAnimate.next('openRight');
    } else {
      this.sbAnimate.next('closed');
    }
  }
}
