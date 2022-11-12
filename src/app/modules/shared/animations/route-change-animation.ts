import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const rightToLeftAnimationSteps = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({left: '-100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({left: '100%'}))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({left: '0%'}))
    ]),
  ]),
];

export const leftToRightAnimationSteps =  [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({right: '-100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({right: '100%'}))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({right: '0%'}))
    ]),
  ]),
];
