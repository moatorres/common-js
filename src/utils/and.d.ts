declare type PredicateFn = (v: T) => boolean
declare type AndType = {
  (a: boolean, b: boolean): boolean
  predicate(a: PredicateFn, b: PredicateFn): PredicateFn
  all(...args: PredicateFn[]): PredicateFn
}

declare const and: AndType
export default and
