import {ComponentRef, Injector, Type, ViewContainerRef} from '@angular/core';


export interface CustomOverlay {
  onRemove: () => void;
  onAdd: () => void;
  draw: () => void;
  setMap: (map: google.maps.Map|null) => void;
}

export function createCustomOverlayClass() {
  return class CustomOverlayImpl extends google.maps.OverlayView implements CustomOverlay {

    private componentRef?: ComponentRef<any>;
    private div?: HTMLElement;

    constructor(
      private map: google.maps.Map,
      private position: google.maps.LatLngLiteral,
      private viewContainerRef: ViewContainerRef,
      private injector: Injector,
      private component: Type<any>,
      private componentInputs: Record<string, any>
    ) {
      super();
    }

    override onAdd() {
      this.div = document.createElement('div');
      this.div.style.position = 'absolute';
      this.getPanes()?.overlayMouseTarget.appendChild(this.div);

      this.componentRef = this.viewContainerRef.createComponent(this.component, {
        injector: this.injector,
      });

      Object.assign(this.componentRef.instance, this.componentInputs);
      this.div.appendChild(this.componentRef.location.nativeElement);
    }

    override draw() {
      if (!this.div) return;
      const projection = this.getProjection();
      const pos = projection.fromLatLngToDivPixel(new google.maps.LatLng(this.position));
      if (pos) {
        this.div.style.left = `${pos.x}px`;
        this.div.style.top = `${pos.y}px`;
        this.div.style.transform = 'translate(-50%, -100%)';
      }
    }

    override onRemove() {
      this.componentRef?.destroy();
      this.div?.parentNode?.removeChild(this.div);
    }
  }
}
