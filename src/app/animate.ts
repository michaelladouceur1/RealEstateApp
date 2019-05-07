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
    state('openBoth', style({
      opacity: 1,
      width: shift
    })),
    state('openLeft', style({
      opacity: 1,
      width: shift
    })),
    state('closed', style({
      opacity: 0,
      width: 0,
      color: '#444'
    })),
    transition('* <=> *', [
      animate(transitionTime)
    ])
  ]),
  openCloseContent: trigger('openCloseContent', [
    state('openBoth', style({
      width: `calc(100% - 500px)`,
      marginLeft: shift
    })),
    state('openLeft', style({
      width: `calc(100% - ${shift})`,
      marginLeft: shift
    })),
    state('openRight', style({
      width: `calc(100% - ${shift})`,
      marginRight: shift
    })),
    state('closed', style({
      width: '100%',
    })),
    transition('* <=> *', [
      animate(transitionTime)
    ])
  ]),
  openCloseButtonSB: trigger('openCloseButtonSB', [
    state('openBoth', style({
      width: shift,
      background: '#fffdbd'
    })),
    state('openLeft', style({
      width: shift,
      background: '#fffdbd'
    })),
    state('closed', style({
      width: '50px'
    })),
    transition('* <=> *', [
      animate(transitionTime)
    ])
  ]),
  openCloseButtonSN: trigger('openCloseButtonSN', [
    state('openBoth', style({
      width: shift,
      background: '#fffdbd'
    })),
    state('openRight', style({
      width: shift,
      background: '#fffdbd'
    })),
    state('closed', style({
      width: '50px'
    })),
    transition('* <=> *', [
      animate(transitionTime)
    ])
  ])
}
