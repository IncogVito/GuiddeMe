import {CollectionReference} from "@angular/fire/compat/firestore/interfaces";
import firebase from "firebase/compat";
import Query = firebase.firestore.Query;
import WhereFilterOp = firebase.firestore.WhereFilterOp;
import OrderByDirection = firebase.firestore.OrderByDirection;
import {ObjectUtilService} from "./object-utils.service";
import {ArrayUtilService} from "./array-util.service";
import {PaginationParams} from "../../models/firestore.model";


interface Constraint<T> {
  fieldPath: keyof T;
  opStr: WhereFilterOp;
  value: any;
}

export class AngularFirestoreQueryBuilder<T> {
  queryFn?: (ref: CollectionReference<T>) => Query<T>;
  private constraints: Constraint<T>[] = [];

  // TODO ewidentnie do jakiegoś innego utilsa albo pogrupować
  private startAt: number = 0;
  private endAt: number = 0;

  private orderByDirection: OrderByDirection | undefined;
  private orderByField: string = '';
  private paginated: boolean = false;
  private edgeElem: any;
  private paginationMode: 'forward' | 'backward' | undefined;

  constructor() {
  }

  public addEqualsConstraint(fieldPath: keyof T, value: any): this {
    if (!ObjectUtilService.isValueDefined(value)) { // TODO ObjectUtils if defined to prevent 0 bug
      return this;
    }

    this.constraints.push({
      fieldPath,
      opStr: '==',
      value
    });
    return this;
  }

  public addNotEqualsConstraint(fieldPath: keyof T, value: any): this {
    if (!ObjectUtilService.isValueDefined(value)) { // TODO ObjectUtils if defined to prevent 0 bug
      return this;
    }

    this.constraints.push({
      fieldPath,
      opStr: '!=',
      value
    });
    return this;
  }

  public addIncludeConstraint(fieldPath: keyof T, value: any[] | undefined): this {
    if (!value || ArrayUtilService.isEmpty(value)) { // TODO ObjectUtils if defined to prevent 0 bug
      return this;
    }

    this.constraints.push({
      fieldPath,
      opStr: 'in',
      value
    });
    return this;
  }

  public addFieldContainsConstraint(fieldPath: keyof T, value: any): this {
    if (!value) { // TODO ObjectUtils if defined to prevent 0 bug
      return this;
    }

    this.constraints.push({
      fieldPath,
      opStr: 'array-contains',
      value
    });
    return this;
  }

  public addFieldContainsAnyConstraint(fieldPath: keyof T, value: any[]): this {
    if (!value) { // TODO ObjectUtils if defined to prevent 0 bug
      return this;
    }

    this.constraints.push({
      fieldPath,
      opStr: 'array-contains-any',
      value
    });
    return this;
  }

  public startsWithConstraint(fieldPath: keyof T, value: string | undefined): this {
    if (!ObjectUtilService.isValueDefined(value) || !value) {
      return this;
    }

    const stringLength = value.length;
    const strFrontCode = value.slice(0, stringLength - 1);
    const strEndCode = value.slice(stringLength - 1, value.length);

    const startCode = value;
    const endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

    this.constraints.push(...[
      {
        fieldPath,
        opStr: '>=' as WhereFilterOp,
        value: startCode
      },
      {
        fieldPath,
        opStr: '<' as WhereFilterOp,
        value: endCode
      }]);
    return this;
  }

  public orderBy(orderByField: keyof T, direction: 'asc' | 'desc' = 'asc'): this {
    if (!orderByField) {
      return this;
    }
    this.orderByField = orderByField as string;
    this.orderByDirection = direction;
    return this;
  }

  public addPagination(orderByField: string, pagination: PaginationParams | undefined): this {
    if (!pagination) { // TODO ObjectUtils if defined to prevent 0 bug
      return this;
    }
    const page = pagination.page;

    this.paginated = true;
    this.startAt = page.pageSize * page.pageIndex;
    this.endAt = this.startAt + page.pageSize;
    this.orderByField = orderByField as string;
    this.edgeElem = pagination.edgeItem;
    this.paginationMode = (page.pageIndex > page.previousPageIndex!) ? 'forward' : 'backward';


    return this;
  }

  public build() {
    if (ArrayUtilService.isEmpty(this.constraints)) {
      throw new Error('Query Function is empty!');
    }

    this.queryFn = (ref) => {
      const firstConstraint = ArrayUtilService.getFirstRequired<Constraint<T>>(this.constraints);
      let query = ref.where(firstConstraint.fieldPath as string, firstConstraint.opStr, firstConstraint.value);
      for (const singleConstraint of this.constraints.splice(1)) {
        query = query.where(singleConstraint.fieldPath as string, singleConstraint.opStr, singleConstraint.value);
      }

      if (ObjectUtilService.isValueDefined(this.orderByField)) {
        query = query.orderBy(this.orderByField)
      }

      if (this.paginated) {
        query = query
          .limit(this.endAt - this.startAt);

        if (this.edgeElem) { // TODO
          if (this.paginationMode === 'forward') {
            query = query.startAfter(this.edgeElem);
          } else {
            query = query.endBefore(this.edgeElem);
          }
        }
      }

      return query;
    }


    return this.queryFn;
  }
}
