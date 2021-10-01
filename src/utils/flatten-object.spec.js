import flattenObject from './flatten-object'

let obj = {
  id: 1,
  info: {
    personal: {
      name: 'Jack',
    },
  },
  bank: {
    credits: [1, 2, 3],
    debts: {
      due: [],
    },
  },
}

describe('flattenObject()', () => {
  it('Should flatten deep properties of an object', () => {
    // let addTo = { bumbum: 'zap' }
    let res = flattenObject(obj)

    expect(res['info.personal.name']).toBeDefined()
    expect(res['info.personal.name']).toEqual(obj.info.personal.name)
    expect(res['bank.credits']).toBeDefined()
    expect(res['bank.credits']).toEqual(obj.bank.credits)
    expect(res['bank.debts.due']).toBeDefined()
    expect(res['bank.debts.due']).toEqual(obj.bank.debts.due)
  })
})
