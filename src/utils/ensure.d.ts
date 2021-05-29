type NotNullOrUndefined = string | number | boolean | object

interface EnsureResponse {
  success: boolean
  message?: string
}

interface makeEnsure {
  notEmpty: NotEmpty
  notEmptyBulk: NotEmptyBulk
  isOneOf: isOneOf
  inRange: inRange
  allInRange: allInRange
  greaterThan: greaterThan
  atLeast: atLeast
  atMost: atMost
  mergeResults: mergeResults
  combine: () => {}
}

export function makeEnsure(): makeEnsure

type NotEmpty = (value: NotNullOrUndefined, key: string) => EnsureResponse

type NotEmptyBulk = (args: NotEmptyBulkAttrs[]) => EnsureResponse

interface NotEmptyBulkAttrs {
  prop: NotNullOrUndefined
  propName: string
}

type isOneOf = (
  value: string,
  validValues: string | string[],
  key: string
) => EnsureResponse

type inRange = (
  num: number,
  min: number,
  max: number,
  key: string
) => EnsureResponse

type allInRange = (
  numbers: number[],
  min: number,
  max: number,
  key: string
) => EnsureResponse

type greaterThan = (minValue: number, actualValue: number) => EnsureResponse

type atLeast = (numChars: number, text: string) => EnsureResponse
type atMost = atLeast

type mergeResults = (
  args: EnsureResponse[]
) => EnsureResponse | EnsureResponse[]
