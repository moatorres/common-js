'use strict'

const isPrimeNumber = (value) => {
  if (value == 2) return true
  for (let i = 2; i <= Math.sqrt(value); i++) if (value % i == 0) return false
  return true
}

export default isPrimeNumber
