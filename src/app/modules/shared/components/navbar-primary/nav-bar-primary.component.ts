import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {filter, map, Subject, takeUntil} from "rxjs";
import {ObjectUtilService} from "../../services/utils/object-utils.service";
import {Store} from "@ngxs/store";
import {Navigate} from "@ngxs/router-plugin";

@Component({
  selector: 'guidde-me-navbar-primary',
  templateUrl: './nav-bar-primary.component.html',
  styleUrls: ['./nav-bar-primary.component.scss']
})
export class NavBarPrimaryComponent implements OnInit, OnDestroy {

  @Output()
  public back = new EventEmitter();

  public hideGoBack: boolean = false;
  public hideGoBackByExpandedMenu: boolean = false;

  private ngDestroy$ = new Subject<void>();

  constructor(private readonly store: Store,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.listenHideGoBackData();
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  backIconClicked() {
    this.back.emit();
  }

  private listenHideGoBackData() {
    this.router.events
      .pipe(
        takeUntil(this.ngDestroy$),
        filter(event => event instanceof ActivationEnd),
        map(activation => activation as ActivationEnd),
        map(event => event.snapshot),
        filter(snapshot => ObjectUtilService.isValueDefined(snapshot)),
        map(snapshot => snapshot.data)
      )
      .subscribe(dataUrl => {
        this.hideGoBack = !!dataUrl['hideBackIcon'];
      });
  }

  public changeGoBackVisibility(menuExpanded: boolean) {
    this.hideGoBackByExpandedMenu = menuExpanded;
  }

  navigateTo(path: string[]) {
    this.store.dispatch(new Navigate(path));
  }
}
