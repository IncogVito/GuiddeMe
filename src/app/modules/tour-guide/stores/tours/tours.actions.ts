import {ToursSearchParams} from "./tours.actions-payload";

export namespace ToursActions {
  export class Create {
    static readonly type = '[Tour API] CreateTour';

    constructor(public payload: any) {
    }
  }

  export class Edit {
    static readonly type = '[Tour API] EditTour';

    constructor(public payload: any) {
    }
  }

  export class LoadByCategory {
    static readonly type = '[Tour API] LoadToursByCategory';

    constructor(public payload: ToursSearchParams) {
    }
  }

  export class FetchByCategory {
    static readonly type = '[Tour API] FetchToursByCategory';
    constructor(public payload: ToursSearchParams) {
    }
  }

  export class LoadCategoryDetails {
    static readonly type = '[Tour API] LoadCategoryDetails';
    constructor() {
    }
  }

  export class Deactivate {
    static readonly type = '[Tour API] DeleteTour';

    constructor(public id: number) {
    }
  }

  export class ToggleTourTile {
    static readonly type = '[Tour API] ToggleTourTile';

    constructor(public payload: string) {
    }
  }
}
