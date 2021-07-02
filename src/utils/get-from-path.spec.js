import getFromPath from './get-from-path'

let testCall = jest.fn()

let obj = {
  name: 'moka',
  address: {
    business: {
      streetName: '5th avenue',
      number: '13',
      meta: {
        active: true,
        print: () => console.log('All good, mate'),
        call: testCall,
      },
    },
  },
}

describe('getFromPath()', () => {
  it('Should be defined', () => {
    expect(getFromPath).toBeDefined()
  })

  it('Should allow us to get properties and values by passing string-paths', () => {
    let path = 'address.business.streetName'
    let streetName = getFromPath(obj, path)

    expect(streetName).toEqual(obj.address.business.streetName)
  })

  it('Should preserve types of properties', () => {
    let meta = 'address.business.meta'
    getFromPath(obj, meta).call()
    getFromPath(obj, meta).call()
    expect(testCall).toHaveBeenCalled()
    expect(testCall).toHaveBeenCalledTimes(2)

    let res = getFromPath(obj, meta)
    expect(res.print).toBeFunction()
    expect(() => res.print()).not.toThrow()
  })
})
