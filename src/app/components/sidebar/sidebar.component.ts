import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animate';
import { Subscription } from 'rxjs';
import { AnimateService } from 'src/app/animate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
  animations: [
    Animations.openClose
  ]
})
export class SidebarComponent implements OnInit {

  private sbAnimateSub: Subscription;
  isOpen: boolean;

  constructor(public animateService: AnimateService) { }

  ngOnInit() {
    this.sbAnimateSub = this.animateService.sbAnimateListener()
      .subscribe((isOpen: boolean) => {
        this.isOpen = isOpen;
      });
  }

}
