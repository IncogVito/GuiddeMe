// noinspection SpellCheckingInspection

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardSingleDetailModel} from "../../../../shared/models/card-single-detail.model";
import {NavItemModel} from "../../../../shared/models/nav-item.model";

@Component({
  selector: 'guidde-me-pure-single-tour',
  templateUrl: './pure-single-tour.component.html',
  styleUrls: ['./pure-single-tour.component.scss'],
  standalone: false
})
export class PureSingleTourComponent implements OnInit {

  @Output()
  public startGame = new EventEmitter();

  @Input()
  public title: string = '';

  @Input()
  public mainUrlImage: string = '';

  @Input()
  public singleDetails: CardSingleDetailModel[] = []

  @Input()
  public navigationList: NavItemModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
