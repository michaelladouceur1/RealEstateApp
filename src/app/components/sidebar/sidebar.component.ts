import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animate';
import { Subscription } from 'rxjs';
import { AnimateService } from 'src/app/animate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    Animations.openCloseSB
  ]
})
export class SidebarComponent implements OnInit {

  private sbAnimateSub: Subscription;
  res: string;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((res: string) => {
        console.log('Subscribed to Sidebar');
        this.res = res;
      });
  }

  sidebarReturn() {
    console.log('Sidebar Clicked');
    return this.res;
  }

}
