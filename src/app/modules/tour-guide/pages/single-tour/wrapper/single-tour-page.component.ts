import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TourModel} from "../../../models/tour.model";
import {take} from "rxjs";
import {CardSingleDetailModel} from "../../../../shared/models/card-single-detail.model";
import {TourStopModel} from "../../../models/tour-stop.model";
import {NavItemModel} from "../../../../shared/models/nav-item.model";
import {TourDescriptionUtilService} from "../../../services/util/tour-description-util.service";
import {Store} from "@ngxs/store";
import {GameActions} from "../../../stores/game/game.actions";
import {Navigate} from "@ngxs/router-plugin";

@Component({
  selector: 'guidde-me-single-tour-wrapper',
  templateUrl: './single-tour-page.component.html',
  styleUrls: ['./single-tour-page.component.scss']
})
export class SingleTourPageComponent implements OnInit {

  public tour: TourModel | undefined;

  public extractedTourDetails: CardSingleDetailModel[] = [];
  public tourInformationList: NavItemModel[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private readonly store: Store) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(take(1))
      .subscribe(data => {
        const tourWithStops: [TourModel, TourStopModel[]] = data['tourWithStops'];

        this.tour = tourWithStops[0];
        this.extractedTourDetails = TourDescriptionUtilService.extractTourDetails(tourWithStops[0]);
        this.tourInformationList = TourDescriptionUtilService.extractTourInformation(tourWithStops[0], tourWithStops[1]);
      })
  }

  startGame() {
    this.store.dispatch(new GameActions.GatherTourData({tourId: this.tour!.id}));
    this.store.dispatch(new Navigate(['tour-active']));
  }
}
