import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile-primary',
  templateUrl: './tile-primary.component.html',
  styleUrls: ['./tile-primary.component.scss']
})
export class TilePrimaryComponent implements OnInit {

  @Input()
  public text: string = '';

  @Input()
  public iconName: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
