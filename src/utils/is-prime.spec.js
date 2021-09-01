import isPrimeNumber from './is-prime'

describe('isPrime', () => {
  it('Should be defined', () => {
    expect(isPrimeNumber).toBeDefined()
  })

  it('Should allow us to check if "value" is a prime number', () => {
    let numbers = [1, 3, 6, 18, 23, 37, 49, 111]

    expect(numbers.some(isPrimeNumber)).toBeTrue()
    expect(numbers.every(isPrimeNumber)).toBeFalse()
    expect(numbers.filter(isPrimeNumber)).toEqual([1, 3, 23, 37])
  })
})
