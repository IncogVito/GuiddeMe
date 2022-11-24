import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WindowUtilService} from "../../../shared/services/utils/window-util.service";
import {Store} from "@ngxs/store";
import {UxDetailsActions} from "../../stores/ux-details/ux-details.actions";
import {UxDetailsState} from "../../stores/ux-details/ux-details.state";
import {take} from "rxjs";

@Component({
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.scss']
})
export class IntroductionPageComponent implements OnInit, AfterViewInit {

  private firstTimeInApplication: boolean = true;

  constructor(private readonly store: Store,
              private readonly uxDetailsState: UxDetailsState) {
  }

  ngOnInit(): void {
    // this.readFirstTimeInIntroductionFlag();
    // this.dispatchIntroductionReadAction();
  }

  ngAfterViewInit(): void {
    // if (this.firstTimeInApplication) {
    //   WindowUtilService.scrollToElementOfId('introduction-top-element');
    // } else {
    //   setTimeout(
    //     () => WindowUtilService.scrollToElementOfId('category-section-id', 'start'),
    //     500
    //   );
    // }
  }

  swipeDown() {
    setTimeout(
      () => WindowUtilService.scrollToElementOfId('category-section-id', 'start'),
      200
    );
  }

  private dispatchIntroductionReadAction() {
    this.store.dispatch(new UxDetailsActions.IntroductionRead());
  }

  private readFirstTimeInIntroductionFlag() {
    this.uxDetailsState.uxDetailsState$
      .pipe(take(1))
      .subscribe(uxDetailsState => {
        this.firstTimeInApplication = uxDetailsState.firstTime;
      })
  }
}
