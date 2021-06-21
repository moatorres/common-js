import nanoid from 'nanoid'
import makeReadOnly from '../utils/make-read-only'
import { makeIdentifier } from './identifier'

export function makeIdFactory({ nanoid }) {
  function gerarId(id) {
    const alfabeto = '0123456789abcdef'
    const nano = nanoid.customAlphabet(alfabeto, 24)

    const _id = id ? String(id) : nano()
    return makeReadOnly(makeIdentifier(_id))
  }

  return makeReadOnly({
    create: gerarId,
  })
}

export const makeId = () => makeIdFactory({ nanoid }).create()
