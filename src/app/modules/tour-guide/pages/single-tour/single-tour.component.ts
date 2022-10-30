import {Component, Input, OnInit} from '@angular/core';
import {Pair} from "../../../shared/models/pair";
import {CardSingleDetailModel} from "../../../shared/models/card-single-detail.model";
import {NavItemModel} from "../../../shared/models/nav-item.model";

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.scss']
})
export class SingleTourComponent implements OnInit {

  @Input()
  public singleDetails: CardSingleDetailModel[] = [{
    icon: 'schedule',
    text: '180 min',
    colorStyle: 'orange'
  }]

  @Input()
  public navigationList: NavItemModel[] = [];


  constructor() {
  }

  ngOnInit(): void {
  }

}
