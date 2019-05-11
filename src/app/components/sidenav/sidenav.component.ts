import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animate';
import { Subscription } from 'rxjs';
import { AnimateService } from 'src/app/animate.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    Animations.openCloseSN
  ]
})
export class SidenavComponent implements OnInit {

  private sbAnimateSub: Subscription;
  res: string;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((res: string) => {
        this.res = res;
      });
  }

  sidenavReturn() {
    return this.res;
  }

}
