import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPrimaryComponent } from './nav-bar-primary.component';

describe('HeaderComponent', () => {
  let component: NavBarPrimaryComponent;
  let fixture: ComponentFixture<NavBarPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
