import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-primary',
  templateUrl: './footer-primary.component.html',
  styleUrls: ['./footer-primary.component.scss']
})
export class FooterPrimaryComponent implements OnInit {
  additionalLabel: string = 'additionalLabel';
  mainLabel: string = 'mainLabel';
  buttonLabel: string = 'buttonLabel';

  constructor() {
  }

  ngOnInit(): void {
  }

}
