import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

var shift = '250px';
var transitionTime = '0.15s';

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
      animate(transitionTime)
    ])
  ]),
  openCloseContent: trigger('openCloseContent', [
    state('open', style({
      marginLeft: shift
    })),
    transition('open <=> closed', [
      animate(transitionTime)
    ])
  ]),
  openCloseButton: trigger('openCloseButton', [
    state('open', style({
      width: '218px'
    })),
    state('closed', style({
      width: '50px'
    })),
    transition('open <=> closed', [
      animate(transitionTime)
    ])
  ])
}
