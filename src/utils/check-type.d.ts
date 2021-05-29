type CheckableTypes =
  | 'boolean'
  | 'number'
  | 'string'
  | 'function'
  | 'object'
  | 'array'
  | 'primitive'

export function checkType(
  param: {},
  type?: CheckableTypes
): boolean | ErrorConstructor
