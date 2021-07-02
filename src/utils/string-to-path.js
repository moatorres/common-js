import memoizeCapped from './memoize-capped'

const dot = '.'.charCodeAt(0)
const reEscape = /\\(\\)?/g
const propName = RegExp(
  '[^.[\\]]+' + // not dot or bracket
    '|' +
    '\\[(?:' + // names within brackets
    '([^"\'][^[]*)' + // non-string expression
    '|' +
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' + // strings
    ')\\]' +
    '|' +
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', // space between consecutive dots or empty brackets
  'g'
)

const stringToPath = memoizeCapped((string) => {
  const result = []

  if (string.charCodeAt(0) === dot) result.push('')

  string.replace(propName, (match, expression, quote, subString) => {
    let key = match
    if (quote) key = subString.replace(reEscape, '$1')
    else if (expression) key = expression.trim()

    result.push(key)
  })

  return result
})

export default stringToPath
