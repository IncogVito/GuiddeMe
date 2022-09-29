import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCategoryPrimaryComponent } from './tile-category-primary.component';

describe('TileCategoryPrimaryComponent', () => {
  let component: TileCategoryPrimaryComponent;
  let fixture: ComponentFixture<TileCategoryPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileCategoryPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileCategoryPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
