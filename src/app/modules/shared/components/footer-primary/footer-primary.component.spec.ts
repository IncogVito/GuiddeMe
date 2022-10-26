import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrimaryComponent } from './footer-primary.component';

describe('FootbarPrimaryComponent', () => {
  let component: FooterPrimaryComponent;
  let fixture: ComponentFixture<FooterPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
