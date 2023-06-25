// types as value

/**
 * Filter conditions in a `Query.where()` clause are specified using the strings '<', '<=', '==', '>=', '>', 'array-contains', 'array-contains-any' or 'in'.
 */

export enum FirebaseWhereFilterOp {
  LessThan = '<',
  LessThanOrEqual = '<=',
  Equal = '==',
  GreaterThan = '>',
  GreaterThanOrEqual = '>=',
  NotEqual = '!=',
  ArrayContains = 'array-contains',
  ArrayContainsAny = 'array-contains-any',
  In = 'in',
  NotIn = 'not-in',
}

export enum FirebaseOrderByDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export enum TypeOfEditProfile {
  Name,
  UserName,
  Bio,
}
