import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'guidde-me-pure-quiz',
  templateUrl: './pure-quiz.component.html',
  styleUrls: ['./pure-quiz.component.scss']
})
export class PureQuizComponent implements OnInit {

  @Input()
  public availableResponses: string[] = ['Mieszko I', 'Mieszko II'];

  @Input()
  public chosenIndex: number | undefined;

  @Input()
  public questionText: string = 'Kto mieszkał w tej budzie?';

  @Output()
  public confirmChoice = new EventEmitter<number>();

  @Output()
  public exitQuiz = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
