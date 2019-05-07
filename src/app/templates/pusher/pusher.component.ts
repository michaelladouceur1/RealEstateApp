import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animate';
import { Subscription } from 'rxjs';
import { AnimateService } from 'src/app/animate.service';

@Component({
  selector: 'app-pusher',
  templateUrl: './pusher.component.html',
  styleUrls: ['./pusher.component.scss'],
  animations: [
    Animations.openCloseContent
  ]
})
export class PusherComponent implements OnInit {

  private sbAnimateSub: Subscription;
  res: string;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((res: string) => {
        this.res = res;
      });
  }

  pushReturn() {
    return this.res;
  }

}
