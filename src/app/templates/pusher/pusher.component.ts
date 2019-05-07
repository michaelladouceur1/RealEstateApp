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
  private snAnimateSub: Subscription;
  openLeft: boolean;
  openRight: boolean;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((openLeft: boolean) => {
        this.openLeft = openLeft;
      });

    this.snAnimateSub = this.animateService.snAnimateListener()
    .subscribe((openRight: boolean) => {
      this.openRight = openRight;
    });
  }

}
