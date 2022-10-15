import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarScrollComponent } from './navbar-scroll.component';

describe('NavbarScrollComponent', () => {
  let component: NavbarScrollComponent;
  let fixture: ComponentFixture<NavbarScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
