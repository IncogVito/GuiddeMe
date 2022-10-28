import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTextPrimaryComponent } from './header-text-primary.component';

describe('HeaderTextPrimaryComponent', () => {
  let component: HeaderTextPrimaryComponent;
  let fixture: ComponentFixture<HeaderTextPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTextPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTextPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
