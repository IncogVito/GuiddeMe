import {CreateGamePayload} from "./game.actions-payload";

export namespace GameActions {
  export class GatherTourData {
    static readonly type = '[Game] GatherTourData';

    constructor(public payload: { tourId: string }) {
    }
  }

  export class Create {
    static readonly type = '[Game] CreateGame';

    constructor(public payload: CreateGamePayload) {
    }
  }

  export class NextStop {
    static readonly type = '[Game] NextStop';

    constructor() {
    }
  }
}
