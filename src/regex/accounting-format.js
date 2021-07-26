import { rangeError, typeError } from '../internal/error'
import { isNumber, isString } from '../utils'

const MAX = Number.MAX_SAFE_INTEGER
const isNaN = (v) => Number.isNaN(Number(v))

const lastTwoDigits = (string) => string.substring(string.length - 2)
const removeLastTwoDigits = (string) => string.substring(0, string.length - 2)

const addThousandsSeparator = (value, useComma) => {
  let notation = useComma ? ',' : '.'
  return String(value).replace(/(.)(?=(\d{3})+$)/g, `$1${notation}`)
}

export const toAccountingFormat = (value, { useComma = false } = {}) => {
  if (!isNumber(value) && !isString(value))
    typeError('First argument must be of type string or number')
  else if (isNaN(value)) typeError('Argument is not a number (isNaN)')

  if (value > MAX) rangeError(`Argument cannot be higher than ${MAX}`)

  let notation = useComma ? '.' : ','
  let stringNumber = String(value)
  let decimals = lastTwoDigits(stringNumber)
  let withoutDecimals = removeLastTwoDigits(stringNumber)
  let withThousandsSeparator = addThousandsSeparator(withoutDecimals, useComma)
  const formatted = `${withThousandsSeparator}${notation}${decimals}`

  return formatted
}
