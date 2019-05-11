import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation
} from '@angular/animations';

var shift = '250px';
var halfShift = '75px';
var transitionTime = '0.2s ease-out';
var background = '#a2b9ff';
// #fffdbd

export const Animations = {
  openCloseSB:  trigger('openCloseSB', [
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
  openCloseSN:  trigger('openCloseSN', [
    // ...
    state('openBoth', style({
      opacity: 1,
      width: halfShift
    })),
    state('openRight', style({
      opacity: 1,
      width: halfShift
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
      width: `calc(100% - 325px)`,
      marginLeft: shift
    })),
    state('openLeft', style({
      width: `calc(100% - ${shift})`,
      marginLeft: shift
    })),
    state('openRight', style({
      width: `calc(100% - ${halfShift})`,
      marginRight: halfShift
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
      background: background
    })),
    state('openLeft', style({
      width: shift,
      background: background
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
      width: halfShift,
      background: background
    })),
    state('openRight', style({
      width: halfShift,
      background: background
    })),
    state('closed', style({
      width: '50px'
    })),
    transition('* <=> *', [
      animate(transitionTime)
    ])
  ])
}
