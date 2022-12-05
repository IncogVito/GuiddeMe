import {TourStopSearchParams} from "../../models/tour-stop.model";

export namespace TourStopsActions {
  export class Create {
    static readonly type = '[TourStop API] CreateTourStop';

    constructor(public payload: any) {
    }
  }

  export class Edit {
    static readonly type = '[TourStop API] EditTourStop';

    constructor(public payload: any) {
    }
  }

  export class LoadByTour {
    static readonly type = '[TourStop API] LoadTourStopsByTour';

    constructor(public payload: TourStopSearchParams) {
    }
  }

  export class FetchByTour {
    static readonly type = '[TourStop API] FetchTourStopsByTour';
    constructor(public payload: TourStopSearchParams) {
    }
  }


  export class Deactivate {
    static readonly type = '[TourStop API] DeleteTourStop';

    constructor(public id: number) {
    }
  }

}
