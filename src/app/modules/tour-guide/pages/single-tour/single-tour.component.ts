import {Component, Input, OnInit} from '@angular/core';
import {Pair} from "../../../shared/models/pair";

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.scss']
})
export class SingleTourComponent implements OnInit {

  @Input()
  public iconWithDescription: Pair<string, string>[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
