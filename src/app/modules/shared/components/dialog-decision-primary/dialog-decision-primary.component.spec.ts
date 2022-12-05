import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDecisionPrimaryComponent } from './dialog-decision-primary.component';

describe('DialogDecisionPrimaryComponent', () => {
  let component: DialogDecisionPrimaryComponent;
  let fixture: ComponentFixture<DialogDecisionPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDecisionPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDecisionPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
