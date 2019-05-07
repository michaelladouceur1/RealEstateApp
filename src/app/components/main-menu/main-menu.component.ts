import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animate';
import { Subscription } from 'rxjs';
import { AnimateService } from 'src/app/animate.service';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [
    Animations.openCloseButtonSB,
    Animations.openCloseButtonSN
  ]
})
export class MainMenuComponent implements OnInit {

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

  sbToggle() {
    this.animateService.sbAnimateUpdate();
  }

  snToggle() {
    this.animateService.snAnimateUpdate();
  }
}
