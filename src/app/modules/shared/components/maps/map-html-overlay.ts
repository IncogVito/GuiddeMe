export class MapHtmlOverlay extends google.maps.OverlayView {
  private position: google.maps.LatLngLiteral;
  private element: HTMLElement;

  constructor(position: google.maps.LatLngLiteral, element: HTMLElement) {
    super();
    this.position = position;
    this.element = element;
  }

  onAdd(): void {
    const panes = this.getPanes();
    // dodajemy do overlayMouseTarget żeby elementy reagowały na zdarzenia myszy
    if (panes && panes.overlayMouseTarget) {
      panes.overlayMouseTarget.appendChild(this.element);
    } else if (panes && panes.overlayLayer) {
      panes.overlayLayer.appendChild(this.element);
    }
  }

  draw(): void {
    const proj = this.getProjection();
    if (!proj) {
      return;
    }
    const latLng = new google.maps.LatLng(this.position.lat, this.position.lng);
    const point = proj.fromLatLngToDivPixel(latLng);
    if (point) {
      this.element.style.position = 'absolute';
      // ustawiamy tak, by element był wycentrowany podobnie jak w starym agm-overlay
      this.element.style.left = point.x + 'px';
      this.element.style.top = point.y + 'px';
      // centrowanie elementu względem punktu
      this.element.style.transform = 'translate(-50%, -50%)';
      this.element.style.transformOrigin = 'center center';
      // upewnij się, że overlay jest nad mapą
      this.element.style.zIndex = '5';
      // ensure pointer events
      this.element.style.pointerEvents = 'auto';
    }
  }

  onRemove(): void {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  // pomocnicze
  setPosition(position: google.maps.LatLngLiteral) {
    this.position = position;
    // redraw przy ponownym ustawieniu pozycji
    if (this.getMap()) {
      this.draw();
    }
  }
}
