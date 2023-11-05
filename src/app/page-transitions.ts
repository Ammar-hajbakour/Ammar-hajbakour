import { trigger, transition, style, animate, query, AnimationMetadata, group } from '@angular/animations';
import { Optional } from '@angular/core';

export const pageTransitions = trigger('pageTransitions', [
    transition('* <=> *', [
        query(':enter', [
            style({ opacity: 0 }),
            animate('0.3s', style({ opacity: 1 })),
        ], { optional: true }),
        query(':leave', [
            style({ opacity: 1 }),
            animate('0.3s', style({ opacity: 0 })),
        ], { optional: true }),
    ]),
]);
export const fader =
  trigger('fader', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(-100%)',
        }),
      ], {optional: true}),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ], {optional: true})
    ]),
]);
export const slider =
  trigger('slider', [
    transition('* <=> *', slideTo('left') ),

  ]);

function slideTo(direction:string): AnimationMetadata[] {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%',
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-200%' })
        ]),
        group([
            query(':leave', [
                animate('300ms ease', style({ [direction]: '200%' }))
            ], optional),
            query(':enter', [
                animate('300ms ease', style({ [direction]: '0%' }))
            ])
        ]),
    ];
}