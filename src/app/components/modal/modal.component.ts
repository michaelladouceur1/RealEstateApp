import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { Animations } from '../../animate';
import { AnimateService } from '../../animate.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    Animations.toggleModal
  ]
})
export class ModalComponent implements OnInit {

  @Input() header: string;
  @Input() content: TemplateRef<any>;
  private modalAnimateSub: Subscription;
  modalOpen = false;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.modalSubscribe();
  }

  modalSubscribe() {
    this.modalAnimateSub = this.animateService.modalAnimateListener()
    .subscribe((res: boolean) => {
      this.modalOpen = res;
    });
  }

  modalToggle(res: boolean) {
    this.animateService.modalAnimateUpdate(res);
  }

}
