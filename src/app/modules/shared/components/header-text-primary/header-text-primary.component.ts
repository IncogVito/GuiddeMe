import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-header-text-primary',
  templateUrl: './header-text-primary.component.html',
  imports: [
    MatIcon
  ],
  styleUrls: ['./header-text-primary.component.scss']
})
export class HeaderTextPrimaryComponent implements OnInit {

  @Input()
  public mainText: string = '';

  @Input()
  public descriptionText: string = '';

  @Input()
  public icon: string = '';

  @Input()
  public customStrIcon: string = '1';

  constructor() {
  }

  ngOnInit(): void {
  }

}
