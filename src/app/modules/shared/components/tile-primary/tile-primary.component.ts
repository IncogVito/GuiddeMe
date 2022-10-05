import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile-primary',
  templateUrl: './tile-primary.component.html',
  styleUrls: ['./tile-primary.component.scss']
})
export class TilePrimaryComponent implements OnInit {

  @Input()
  public buttonText: string = '';

  @Input()
  public rightText: string = '';

  @Input()
  public imageUrl: string = '';

  public backgroundStyle: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.resolveBackgroundStyle();
  }

  private resolveBackgroundStyle() {
    if (this.imageUrl) {
      this.backgroundStyle = {
        'background-image': `url('${this.imageUrl}')`
      }
    }
  }
}
