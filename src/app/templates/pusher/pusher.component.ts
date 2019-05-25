import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animate';
import { Subscription } from 'rxjs';
import { AnimateService } from 'src/app/animate.service';

@Component({
  selector: 'app-pusher',
  templateUrl: './pusher.component.html',
  styleUrls: ['./pusher.component.scss'],
  animations: [
    Animations.openCloseContent,
    Animations.darkenPusher
  ]
})
export class PusherComponent implements OnInit {

  private modalAnimateSub: Subscription;
  private sbAnimateSub: Subscription;
  modalOpen = false;
  res: string;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.modalSubscribe();
    this.sidebarSubscribe();
  }

  modalSubscribe() {
    this.modalAnimateSub = this.animateService.modalAnimateListener()
    .subscribe((res: boolean) => {
      this.modalOpen = res;
    });
  }

  sidebarSubscribe() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((res: string) => {
        this.res = res;
      });
  }

  pushReturn() {
    return this.res;
  }

}
