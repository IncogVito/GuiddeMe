import {Component, Input, OnInit} from '@angular/core';
import {CategoryViewModel} from "../../models/category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './pure-categories.component.html',
  styleUrls: ['./pure-categories.component.scss']
})
export class PureCategoriesComponent implements OnInit {

  @Input()
  public categories: CategoryViewModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
