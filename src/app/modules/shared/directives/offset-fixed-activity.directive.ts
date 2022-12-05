import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {NumberUtilService} from "../services/utils/number-util.service";

@Directive({
  selector: '[appOffsetFixedActivity]'
})
export class OffsetFixedActivityDirective {

  @Input()
  public additionalOffset: number = 0;

  @Input()
  public sourcePosition: 'top' | 'bottom' = 'bottom';

  @Output()
  public onChangedFixedActivity = new EventEmitter<boolean>();

  private currentActivity: boolean = false;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    const currentTopPosition = (document.documentElement.scrollTop || document.body.scrollTop);
    const offsetHeight = (document.documentElement.offsetHeight || document.body.offsetHeight);

    const documentTopPosition = this.elementRef.nativeElement.offsetTop;
    const bottomPosition = NumberUtilService.add(currentTopPosition, offsetHeight);

    const defaultScrollPosition = NumberUtilService.add(documentTopPosition, this.additionalOffset);

    this.changeActivity(defaultScrollPosition <= currentTopPosition);
  }

  private changeActivity(active: boolean) {
    if (active !== this.currentActivity) {
      this.currentActivity = active;
      this.onChangedFixedActivity.emit(active);
    }
  }
}
