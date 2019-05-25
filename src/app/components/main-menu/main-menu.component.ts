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
  res: string;
  openRight: boolean;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((res: string) => {
        this.res = res;
      });
  }

  sbToggle(res: string) {
    this.animateService.sbAnimateUpdate(res);
  }

  sbReturn() {
    return this.res;
  }
}
