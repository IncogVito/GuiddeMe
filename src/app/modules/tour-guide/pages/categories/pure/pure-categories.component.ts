import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryViewModel} from "../../../models/category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './pure-categories.component.html',
  styleUrls: ['./pure-categories.component.scss']
})
export class PureCategoriesComponent implements OnInit {

  @Input()
  public categories: CategoryViewModel[] = [];

  @Output()
  public chooseCategory = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
