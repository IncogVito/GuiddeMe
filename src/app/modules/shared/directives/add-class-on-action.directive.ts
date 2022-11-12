import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAddStyleClassOnAction]'
})
export class AddClassOnActionDirective implements OnInit, OnDestroy {

  @Input()
  public actionType: 'mouseenter' | 'mouseout' | 'mouseleave' | 'mousedown' | 'click' = 'mouseenter';

  @Input()
  public classOnActionName: string | undefined;

  @Input()
  public removeTimeOutMs: number | undefined;

  @Input()
  public actionDisabled: boolean = false;

  private dispose!: Function;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    console.log('Działam');
    this.dispose = this.renderer.listen(this.elementRef.nativeElement, this.actionType, e => this.performAction());
  }

  ngOnDestroy() {
    this.dispose();
  }

  private performAction(): void {
    if (this.classOnActionName && !this.actionDisabled) {
      const className = this.classOnActionName!;
      this.renderer.addClass(this.elementRef.nativeElement, className);

      if (this.removeTimeOutMs) {
        setTimeout(() => this.renderer.removeClass(this.elementRef.nativeElement, className), this.removeTimeOutMs);
      }
    }
  }

}
