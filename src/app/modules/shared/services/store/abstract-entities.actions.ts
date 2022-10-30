
export namespace AbstractEntitiesActions  {
  export abstract class Create<T> {
    protected constructor(public payload: T) {
    }
  }

  export class Edit {
    static readonly type = '[Category API] EditCategory';

    constructor(public payload: any) {
    }
  }

  export class FetchAll {
     readonly type = '[Category API] FetchAllCategories';
  }

  export class Deactivate {
    static readonly type = '[Category API] DeleteCategory';

    constructor(public id: number) {
    }
  }
}
