import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSecondaryComponent } from './tile-secondary.component';

describe('TileSecondaryComponent', () => {
  let component: TileSecondaryComponent;
  let fixture: ComponentFixture<TileSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileSecondaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
