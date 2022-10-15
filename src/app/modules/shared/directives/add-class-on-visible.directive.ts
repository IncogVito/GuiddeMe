import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {NumberUtilService} from "../services/utils/number-util.service";
import * as Console from "console";

// TODO nazwa do zmiany
@Directive({
  selector: '[appAddClassOnVisible]'
})
export class AddClassOnVisibleDirective {

  @Input()
  public className: string = '';

  @Input()
  public additionalOffset: number = 0;

  @Input()
  public sourcePosition: 'top' | 'bottom' = 'bottom';

  @Input()
  public range: number = 100;

  @Output()
  public onVisible = new EventEmitter<void>();

  private removeTimeOutMs: number | undefined;

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

    if (this.sourcePosition == 'bottom') {
      if (bottomPosition > defaultScrollPosition) {
        this.addClassIntoContainer();
        this.onVisible.emit();
      } else {
        this.removeClassFromContainer();
      }
    } else {
      if (currentTopPosition + this.range > documentTopPosition
        && (currentTopPosition + this.range < documentTopPosition + this.range)) {
        this.addClassIntoContainer();
        this.onVisible.emit();
      } else {
        this.removeClassFromContainer();
      }
    }
  }

  private addClassIntoContainer() {
    this.renderer.addClass(this.elementRef.nativeElement, this.className);
  }

  private removeClassFromContainer() {
    if (this.removeTimeOutMs) {
      setTimeout(() => this.renderer.removeClass(this.elementRef.nativeElement, this.className), this.removeTimeOutMs);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.className);
    }
  }
}
