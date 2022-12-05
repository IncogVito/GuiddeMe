import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePrimaryComponent } from './toggle-primary.component';

describe('TogglePrimaryComponent', () => {
  let component: TogglePrimaryComponent;
  let fixture: ComponentFixture<TogglePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglePrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
