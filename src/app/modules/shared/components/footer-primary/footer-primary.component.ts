import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer-primary',
  templateUrl: './footer-primary.component.html',
  styleUrls: ['./footer-primary.component.scss']
})
export class FooterPrimaryComponent implements OnInit {

  @Input()
  public additionalLabel: string = '';

  @Input()
  public mainLabel: string = '';

  @Input()
  public buttonLabel: string = '';

  @Input()
  public buttonFillFullSpace: boolean = false;

  @Output()
  public btnClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
