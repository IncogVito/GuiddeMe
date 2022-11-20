import {transition, trigger} from "@angular/animations";
import {leftToRightAnimationSteps, rightToLeftAnimationSteps} from "../shared/animations/route-change-animation";

export const tourGuideRouteAnimations =
  trigger('routeAnimations', [
    transition('MainPageAnimation => ToursPageAnimation', leftToRightAnimationSteps),
    transition('ToursPageAnimation => MainPageAnimation', rightToLeftAnimationSteps),
    transition('ToursPageAnimation => TourPreviewAnimation', leftToRightAnimationSteps),
    transition('TourPreviewAnimation => ToursPageAnimation', rightToLeftAnimationSteps),
    transition('TourPreviewAnimation => TourActiveAnimation', leftToRightAnimationSteps),
    transition('TourActiveAnimation => TourPreviewAnimation', rightToLeftAnimationSteps),
    transition('MainPageAnimation => AuthorsAnimation', leftToRightAnimationSteps),
    transition('AuthorsAnimation => MainPageAnimation', rightToLeftAnimationSteps),
  ]);
