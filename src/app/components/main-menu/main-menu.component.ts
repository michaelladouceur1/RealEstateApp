import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animate';
import { Subscription } from 'rxjs';
import { AnimateService } from 'src/app/animate.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [
    Animations.openCloseButton
  ]
})
export class MainMenuComponent implements OnInit {

  private sbAnimateSub: Subscription;
  isOpen: boolean;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((isOpen: boolean) => {
        this.isOpen = isOpen;
      });
  }

  sbToggle() {
    this.animateService.sbAnimateUpdate();
  }
}
