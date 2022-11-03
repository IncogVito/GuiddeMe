import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TourModel} from "../../../models/tour.model";
import {take} from "rxjs";
import {CardSingleDetailModel} from "../../../../shared/models/card-single-detail.model";
import {TourStopModel} from "../../../models/tour-stop.model";
import {NavItemModel} from "../../../../shared/models/nav-item.model";

@Component({
  selector: 'guidde-me-single-tour-wrapper',
  templateUrl: './single-tour-page.component.html',
  styleUrls: ['./single-tour-page.component.scss']
})
export class SingleTourPageComponent implements OnInit {

  public tour: TourModel | undefined;

  public extractedTourDetails: CardSingleDetailModel[] = [];
  public tourInformationList: NavItemModel[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(take(1))
      .subscribe(data => {
        const tourWithStops: [TourModel, TourStopModel[]] = data['tourWithStops'];

        this.tour = tourWithStops[0];
        this.extractTourDetails(tourWithStops[0]);
        this.extractTourInformation(tourWithStops[0], tourWithStops[1]);
      })
  }

  private extractTourDetails(tourModel: TourModel): void {
    this.extractedTourDetails = [
      {
        text: tourModel.time + ' minut',
        icon: 'schedule'
      },
      {
        text: tourModel.stopsCount + ' punktów',
        icon: 'map'
      }
    ]
  }

  private extractTourInformation(tourModel: TourModel, tourStopModels: TourStopModel[]) {
    this.tourInformationList = [
      {
        title: 'Informacje',
        content: [
          {
            title: 'Informacje',
            text: tourModel.descriptionHtml
          }
        ]
      },
      {
        title: "Mapa",
        content: [
          {
            title: "Mapa",
            imageUrl: tourModel.mapImageUrl
          }
        ]
      },
      {
        title: 'Lista stopów',
        content: tourStopModels.map(singleStop => {
          return {
            title: `${singleStop.orderIndex} - ${singleStop.name}`,
          }
        })
      }
    ]
  }
}
