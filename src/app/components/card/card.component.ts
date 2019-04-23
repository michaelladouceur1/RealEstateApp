import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() header: string;
  @Input() content: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
