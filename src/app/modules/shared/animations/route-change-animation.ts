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

export const topToBottomAnimationSteps = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '100vh',
      width: '100%'
    })
  ]),
  query(':enter', [
    style({top: '-100vh'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({top: '100vh'}))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({top: '0'}))
    ]),
  ]),
];

export const bottomToTopAnimationSteps = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100%'
    })
  ]),
  query(':enter', [
    style({bottom: '-100vh'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({bottom: '100vh'}))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({bottom: '0'}))
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
      width: '100%',
      height: '100vh',
      overflow: 'hidden'

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
