import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { Animations } from '../../animate';
import { AnimateService } from '../../animate.service';
import { headersToString } from 'selenium-webdriver/http';

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
  modalOpen = this.header;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.modalSubscribe();
  }

  modalSubscribe() {
    this.modalAnimateSub = this.animateService.modalAnimateListener()
    .subscribe((res: string) => {
      this.modalOpen = res;
    });
  }

  modalToggle(res: string) {
    this.animateService.modalAnimateUpdate(res);
  }

}
