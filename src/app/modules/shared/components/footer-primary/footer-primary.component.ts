import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer-primary',
  templateUrl: './footer-primary.component.html',
  styleUrls: ['./footer-primary.component.scss']
})
export class FooterPrimaryComponent implements OnInit {

  @Input()
  public additionalLabel: string = 'additionalLabel';

  @Input()
  public mainLabel: string = 'mainLabel';

  @Input()
  public buttonLabel: string = 'buttonLabel';

  @Output()
  public btnClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
