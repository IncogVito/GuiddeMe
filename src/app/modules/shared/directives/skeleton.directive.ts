import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  Input,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {random} from "lodash";
import {SkeletonLoaderComponent} from "../components/skeleton-loader/skeleton-loader.component";

@Directive({
  selector: '[skeleton]'
})
export class SkeletonDirective {

  @Input('skeleton') isLoading = false;
  @Input('skeletonRepeat') size = 1;
  @Input('skeletonWidth') width: string = '';
  @Input('skeletonHeight') height: string = '';
  @Input('skeletonClassName') className: string = '';

  constructor(private tpl: TemplateRef<any>,
              private vcr: ViewContainerRef,
              private resolver: ComponentFactoryResolver) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
      this.vcr.clear();

      if (changes['isLoading'].currentValue) {
        Array.from({length: this.size}).forEach(() => {
          const compFactory: ComponentFactory<SkeletonLoaderComponent> = this.resolver.resolveComponentFactory(SkeletonLoaderComponent);
          const ref = this.vcr.createComponent(compFactory);

          Object.assign(ref.instance, {
            width: this.width === 'rand' ? `${random(30, 90)}%` : this.width,
            height: this.height,
            className: this.className
          })
        })
      } else {
        this.vcr.createEmbeddedView(this.tpl);
      }
    }
  }
}
