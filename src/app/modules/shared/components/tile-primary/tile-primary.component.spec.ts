import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilePrimaryComponent } from './tile-primary.component';

describe('TileCategoryPrimaryComponent', () => {
  let component: TilePrimaryComponent;
  let fixture: ComponentFixture<TilePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilePrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
