import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

var shift = '250px';

export const Animations = {
  openClose:  trigger('openClose', [
    // ...
    state('open', style({
      opacity: 1,
      width: shift
    })),
    state('closed', style({
      opacity: 0,
      width: 0,
      color: '#444'
    })),
    transition('open <=> closed', [
      animate('0.15s')
    ])
  ]),
  openCloseContent: trigger('openCloseContent', [
    state('open', style({
      marginLeft: shift
    })),
    transition('open <=> closed', [
      animate('0.15s')
    ])
  ]),
  openCloseButton: trigger('openCloseButton', [
    state('open', style({
      width: shift
    })),
    state('closed', style({
      width: '150px'
    })),
    transition('open <=> closed', [
      animate('0.15s')
    ])
  ])
}
