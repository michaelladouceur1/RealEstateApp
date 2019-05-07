import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation
} from '@angular/animations';

var shift = '250px';
var transitionTime = '0.2s ease-out';

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
    state('openLeft', style({
      width: `calc(100% - ${shift})`,
      marginLeft: shift
    })),
    state('openRight', style({
      width: `calc(100% - ${shift})`,
      marginRight: shift
    })),
    state('openRight && openLeft', style({
      width: `calc(100% - 500px)`
    })),
    state('close', style({
      width: `calc(100% + ${shift})`,
      marginLeft: -shift
    })),
    transition('openLeft <=> closed', [
      animate(transitionTime)
    ]),
    transition('openRight <=> closed', [
      animate(transitionTime)
    ])
  ]),
  openCloseButtonSB: trigger('openCloseButtonSB', [
    state('openLeft', style({
      width: shift,
      background: '#fffdbd'
    })),
    state('closeLeft', style({
      width: '50px'
    })),
    transition('openLeft <=> closed', [
      animate(transitionTime)
    ])
  ]),
  openCloseButtonSN: trigger('openCloseButtonSN', [
    state('openRight', style({
      width: shift,
      background: '#fffdbd'
    })),
    state('closeRight', style({
      width: '50px'
    })),
    transition('openRight <=> closed', [
      animate(transitionTime)
    ])
  ])
}
