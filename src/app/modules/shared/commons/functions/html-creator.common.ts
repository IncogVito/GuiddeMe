export const createHeaderText = (indexNr: string, mainText: string) => '<div class="header-text header-text--single-row">' +
  '  <span class="header-text__icon" *ngIf="customStrIcon">' +
  `${indexNr} </span>` +
  `<h5 class="header-text__main-text"> ${mainText} </h5> </div>`;
