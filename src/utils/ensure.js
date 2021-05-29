import isArray from './is-array'

export function makeEnsure() {
  let success = {
    success: true,
  }

  /**
   * Guards against null or undefined values
   *
   * @param {*} value The `variable` to be evaluated.
   * @param {string} key The `name` of the variable.
   * @returns {object} Returns either an `object` with `{ success: true }`
   * or `{ sucess: false, message: failure message }`
   */
  const notEmpty = (value, key) => {
    const notValid = value === null || value === undefined || value === ''

    if (notValid) {
      return {
        success: false,
        message: `${key} cannot be null or undefined`,
      }
    } else {
      return success
    }
  }

  const notEmptyBulk = (args) => {
    for (let arg of args) {
      const result = notEmpty(arg.prop, arg.propName)
      if (!result.success) return result
    }

    return { success: true }
  }

  const isOneOf = (value, validValues, key) => {
    if (!isArray(validValues)) validValues = [validValues]

    let isValid = false

    for (let validValue of validValues) {
      if (value === validValue) {
        isValid = true
      }
    }

    if (isValid) {
      return success
    } else {
      return {
        success: false,
        message: `${key} isn't oneOf the correct types in ${JSON.stringify(
          validValues
        )}. Received "${value}".`,
      }
    }
  }

  const inRange = (num, min, max, key) => {
    const isInRange = num >= min && num <= max

    if (!isInRange) {
      return {
        success: false,
        message: `${key} is not within range ${min} to ${max}.`,
      }
    } else {
      return success
    }
  }

  const allInRange = (numbers, min, max, key) => {
    let failingResult = null

    for (let num of numbers) {
      const numIsInRangeResult = inRange(num, min, max, key)

      if (!numIsInRangeResult.success) failingResult = numIsInRangeResult
    }

    if (failingResult) {
      return {
        success: false,
        message: `${key} is not within the range.`,
      }
    } else {
      return success
    }
  }

  const greaterThan = (minValue, actualValue) => {
    return actualValue > minValue
      ? { success: true }
      : {
          success: false,
          message: `Number given {${actualValue}} is not greater than {${minValue}}`,
        }
  }

  const atLeast = (numChars, text) => {
    return text.length >= numChars
      ? { success: true }
      : {
          success: false,
          message: `Text is not at least ${numChars} chars.`,
        }
  }

  const atMost = (numChars, text) => {
    return text.length <= numChars
      ? { success: true }
      : {
          success: false,
          message: `Text is greater than ${numChars} chars.`,
        }
  }

  const mergeResults = (guardResults) => {
    let res = []

    if (!isArray(guardResults)) guardResults = [guardResults]

    for (let result of guardResults) {
      if (result.success === false) res.push(result)
    }

    return res
  }

  const combine = (guardResults) => {
    for (let result of guardResults) {
      if (result.success === false) return result
    }

    return success
  }

  return Object.freeze({
    notEmpty,
    notEmptyBulk,
    isOneOf,
    inRange,
    allInRange,
    greaterThan,
    atLeast,
    atMost,
    mergeResults,
    combine,
  })
}
