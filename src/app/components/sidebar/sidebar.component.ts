import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animate';
import { Subscription } from 'rxjs';
import { AnimateService } from 'src/app/animate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    Animations.openClose
  ]
})
export class SidebarComponent implements OnInit {

  private sbAnimateSub: Subscription;
  openLeft: boolean;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((openLeft: boolean) => {
        this.openLeft = openLeft;
      });
  }

}
