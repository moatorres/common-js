import nanoid from 'nanoid'
import { makeReadOnly } from '../utils'
import { makeIdentifier } from './identifier'

export function makeIdFactory({ nanoid }) {
  function generateId(id) {
    const chars = '0123456789abcdef'
    const nano = nanoid.customAlphabet(chars, 24)

    const _id = id ? String(id) : nano()
    return makeReadOnly(makeIdentifier(_id))
  }

  return makeReadOnly({
    create: generateId,
  })
}

export const makeId = () => makeIdFactory({ nanoid }).create()
