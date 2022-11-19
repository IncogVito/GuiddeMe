import { Component, OnInit } from '@angular/core';
import {WindowUtilService} from "../../../../shared/services/utils/window-util.service";

@Component({
  selector: 'guidde-me-pure-authors',
  templateUrl: './pure-authors.component.html',
  styleUrls: ['./pure-authors.component.scss']
})
export class PureAuthorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    WindowUtilService.scrollToTheTop();
  }

}
