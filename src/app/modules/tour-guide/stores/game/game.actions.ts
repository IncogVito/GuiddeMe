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

  export class EnableQuiz {
    static readonly type = '[Game] EnableQuiz';

    constructor() {
    }
  }

  export class DisableQuiz {
    static readonly type = '[Game] DisableQuiz';

    constructor() {
    }
  }

  export class RequestNextStop {
    static readonly type = '[Game] RequestNextStop';

    constructor() {
    }
  }

  export class DoNextStop {
    static readonly type = '[Game] DoNextStop';

    constructor() {
    }
  }
}
