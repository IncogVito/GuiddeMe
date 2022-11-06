import {Component, Input, OnInit} from '@angular/core';
import {ImageCarouselViewModel} from "../../models/image-carousel.model";

@Component({
  selector: 'app-image-carousel-primary',
  templateUrl: './image-carousel-primary.component.html',
  styleUrls: ['./image-carousel-primary.component.scss']
})
export class ImageCarouselPrimaryComponent implements OnInit {

  @Input()
  public images: string[] = [];

  @Input()
  public defaultOffset = 0;

  @Input()
  public carouselElements: ImageCarouselViewModel[] = [];

  public currentOffset = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeCarousel();
  }

  private initializeCarousel() {
    this.currentOffset = this.defaultOffset;
    this.carouselElements = this.images.map((singleUrl, index) => {
      return {
        url: singleUrl,
        displayIndex: index + 1 - this.defaultOffset,
        visible: index < (2 + this.defaultOffset) && index > (this.defaultOffset - 2)
      }
    })
  }

  swipeElement(element: ImageCarouselViewModel) {
    if (element.displayIndex === 0) {
      this.previousElement();
    }

    if (element.displayIndex === 2) {
      this.nextElement();
    }
  }

  nextElementWithCheck() {
    if (this.currentOffset < this.carouselElements.length - 1) {
      this.nextElement();
    }
  }

  previousElementWithCheck() {
    if (this.currentOffset > 0) {
      this.previousElement();
    }
  }

  nextElement() {
    for (const singleElem of this.carouselElements) {
      singleElem.displayIndex--;

      if (singleElem.displayIndex < 3) {
        singleElem.visible = true;
      }
      if (singleElem.displayIndex < 0) {
        singleElem.visible = false;
      }
    }
    this.currentOffset++;
  }

  previousElement() {
    for (const singleElem of this.carouselElements) {
      singleElem.displayIndex++;

      if (singleElem.displayIndex >= 0) {
        singleElem.visible = true;
      }
      if (singleElem.displayIndex > 2) {
        singleElem.visible = false;
      }
    }
    this.currentOffset--;
  }
}
