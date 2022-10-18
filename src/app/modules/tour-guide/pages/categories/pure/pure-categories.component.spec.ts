import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCategoriesComponent } from './pure-categories.component';

describe('CategoriesComponent', () => {
  let component: PureCategoriesComponent;
  let fixture: ComponentFixture<PureCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
