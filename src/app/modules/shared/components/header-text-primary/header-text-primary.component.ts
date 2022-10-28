import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-text-primary',
  templateUrl: './header-text-primary.component.html',
  styleUrls: ['./header-text-primary.component.scss']
})
export class HeaderTextPrimaryComponent implements OnInit {

  public mainText: string = '';
  public descriptionText: string = '';
  public icon: string = '';
  public customStrIcon: string = '1';

  constructor() {
  }

  ngOnInit(): void {
  }

}
