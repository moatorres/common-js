type NotNullOrUndefined = string | boolean | number | Function | Object

export default pipe =
  (...fns: Function | Function[]) =>
  (param: NotNullOrUndefined) =>
    any
