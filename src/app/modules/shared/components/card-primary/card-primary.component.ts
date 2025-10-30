import {Component, Input, OnInit} from '@angular/core';
import {CardSingleDetailModel} from "../../models/card-single-detail.model";
import {NgStyle} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-card-primary',
  templateUrl: './card-primary.component.html',
  imports: [
    NgStyle,
    MatIcon
  ],
  styleUrls: ['./card-primary.component.scss']
})
export class CardPrimaryComponent implements OnInit {

  @Input()
  public imageUrl: string = '';

  @Input()
  public title: string = '';

  @Input()
  public details: CardSingleDetailModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
