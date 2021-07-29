import merge from './merge'

let original = { name: 'Moka', emails: [{ id: 1, value: 'moka@moka.com' }] }
let extension = { name: 'Floca', age: 21 }
let originalArr = [{ name: 'Moka' }]
let extensionArr = [{ age: 21 }]

describe('merge()', () => {
  it('Should be defined', () => {
    expect(merge).toBeDefined()
  })

  it('Should successfully merge two objects into a new object with both key-value pairs', () => {
    let res = merge(original, extension)
    expect(res.age).toEqual(21)
  })

  it('Should merge the extended value of an existing property of the original object', () => {
    let res = merge(original, extension)
    expect(res.name).toEqual(extension.name)
  })

  it('Should successfully merge two arrays', () => {
    let res = merge(originalArr, extensionArr)
    expect(res[1]).toEqual(extensionArr[0])
  })

  it('Should merge an object and an array into a new array containing both objects', () => {
    let res = merge(original, extensionArr)
    expect(res[1]).toEqual(extensionArr[0])
  })

  it('Should merge an object and an array into a new array containing both the original object and the received array', () => {
    let res = merge(original, extensionArr)
    expect(res[1]).toEqual(extensionArr[0])
  })

  it('Should merge an array and an object into a new array containing the received object properties as index values of the extended array', () => {
    let i
    let res = merge(originalArr, extension)
    expect(res[`${extension[i]}`]).toEqual(extension[i])
  })
})
