// @ts-nocheck
'use strict'

import assign from './assign'
import { init, objeto, adicoes, array } from './assign.spec.setup'

beforeEach(() => {
  init()
})

describe('assign()', () => {
  it('Should be defined', () => {
    expect(assign).toBeDefined()
  })

  it('Should assign values and properties to the object destination', () => {
    let res = assign(objeto, adicoes)

    expect(res.sobrenome).toEqual('Floca')
    expect(res.tipo).toEqual('admin')
    expect(res.isAdmin()).toBeTrue()
  })

  it('Should accept arrays of values as the object destination', () => {
    expect(() => assign(array, objeto)).not.toThrow()
  })

  it('Should return an array if the destination object is an array', () => {
    let res = assign(array, objeto)
    expect(res.length).toBeTruthy()
  })
})
