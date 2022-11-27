import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardSingleDetailModel} from "../../models/card-single-detail.model";

@Component({
  selector: 'app-tile-secondary',
  templateUrl: './tile-secondary.component.html',
  styleUrls: ['./tile-secondary.component.scss']
})
export class TileSecondaryComponent implements OnInit {

  @Output()
  public onToggle = new EventEmitter<Event>();

  @Output()
  public buttonClicked = new EventEmitter<Event>();

  @Input()
  public expanded: boolean = false;

  @Input()
  public mainLabel: string = '';

  @Input()
  public topRightIcon: string = '';

  @Input()
  public descriptionIcon: string = '';

  @Input()
  public descriptionText: string = '';

  @Input()
  public buttonText: string = '';

  @Input()
  public imageUrl: string = '';

  @Input()
  public details: CardSingleDetailModel[] = [];

  missingImage: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggle() {
    this.onToggle.emit();
  }

  public clickButton($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.buttonClicked.emit();
  }

  public handleMissingImage() {
    this.missingImage = true;
  }
}
