import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable, of} from "rxjs";
import {TourViewModel} from "../../../models/tour.model";

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})
export class ToursPageComponent implements OnInit {

  public tours$: Observable<TourViewModel[]> = EMPTY;

  constructor() {
  }

  ngOnInit(): void {
    this.tours$ = this.loadTours();
  }

  private loadTours(): Observable<TourViewModel[]> {
    return of([{
      title: 'Title',
      time: 120,
      imageUrl: 'mapa.jpg',
      expanded: false
    }]);
  }

}
