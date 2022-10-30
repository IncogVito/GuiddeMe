import {Component, ElementRef, OnInit} from '@angular/core';


/**
 * From https://netbasal.com/implementing-a-loading-skeleton-in-angular-7490ffdecc1b
 *
 * Usage example:
 *  <p *skeleton="true; repeat: 3; className: 'dashboard-user-project-tile__loader'; height: '9rem'; width: '33%' "> </p>
 */
@Component({
  selector: 'app-skeleton-loader',
  template: ``,
  styleUrls: ['./skeleton-loader.component.scss'],
  host: {
    'class': 'pulse'
  },
})
export class SkeletonLoaderComponent implements OnInit {
  public width: string | undefined;
  public height: string | undefined;
  public className: string | undefined;

  constructor(private host: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '20px');
  }

}
