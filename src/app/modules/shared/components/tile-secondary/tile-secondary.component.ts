import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tile-secondary',
  templateUrl: './tile-secondary.component.html',
  styleUrls: ['./tile-secondary.component.scss']
})
export class TileSecondaryComponent implements OnInit {

  @Output()
  public onExpand = new EventEmitter<Event>();

  @Input()
  public expanded: boolean = false;

  @Input()
  public leftLabel: string = '';

  @Input()
  public rightLabel: string = '';

  @Input()
  public contentText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.onExpand.emit();
  }
}
