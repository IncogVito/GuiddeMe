import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureAuthorsComponent } from './pure-authors.component';

describe('PureAuthorsComponent', () => {
  let component: PureAuthorsComponent;
  let fixture: ComponentFixture<PureAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureAuthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
