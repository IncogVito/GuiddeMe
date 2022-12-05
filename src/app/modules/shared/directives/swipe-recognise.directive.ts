import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[guiddeMeSwipeRecognise]'
})
export class SwipeRecogniseDirective implements OnInit, OnDestroy {

  @Input()
  public minOffset: number = 0;

  @Output()
  public swipedLeft = new EventEmitter();

  @Output()
  public swipedRight = new EventEmitter();

  private disposeTouchStart!: Function;
  private disposeTouchEnd!: Function;
  private touchstartX = 0
  private touchendX = 0

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }


  ngOnInit() {
    console.log('Działam');
    this.disposeTouchStart = this.renderer.listen(this.elementRef.nativeElement, 'touchstart', e => {
      this.touchstartX = e.changedTouches[0].screenX
    });
    this.disposeTouchEnd = this.renderer.listen(this.elementRef.nativeElement, 'touchend', e => {
      this.touchendX = e.changedTouches[0].screenX;
      this.checkDirection();
    });
  }

  ngOnDestroy() {
    this.disposeTouchStart();
  }

  private checkDirection() {
    if (this.touchendX < this.touchstartX - this.minOffset) {
      this.swipedLeft.emit();
    }
    if (this.touchendX - this.minOffset > this.touchstartX) {
      this.swipedRight.emit();
    }
  }
}
