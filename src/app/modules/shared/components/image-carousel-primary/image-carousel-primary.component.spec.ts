import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarouselPrimaryComponent } from './image-carousel-primary.component';

describe('PhotoCarouselPrimaryComponent', () => {
  let component: ImageCarouselPrimaryComponent;
  let fixture: ComponentFixture<ImageCarouselPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCarouselPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCarouselPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
