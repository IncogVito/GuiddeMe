import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrimaryComponent } from './card-primary.component';

describe('CardPrimaryComponent', () => {
  let component: CardPrimaryComponent;
  let fixture: ComponentFixture<CardPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
