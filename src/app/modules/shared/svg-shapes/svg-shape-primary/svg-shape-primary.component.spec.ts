import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgShapePrimaryComponent } from './svg-shape-primary.component';

describe('SvgShapePrimaryComponent', () => {
  let component: SvgShapePrimaryComponent;
  let fixture: ComponentFixture<SvgShapePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgShapePrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgShapePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
