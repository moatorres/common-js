import makeReadOnly from '../utils/make-read-only'
import { makeIdentifier } from './identifier'
import { makeId } from './unique-id'

function Entity({ props, id }) {
  let _id = idHandler(id)
  let _props = {
    ...props,
  }

  function equals(object) {
    if (object == null || object == undefined) return false
    if (this === object) return true
    return _id.equals(object.id)
  }

  return {
    id: _id,
    props: _props,
    equals: makeReadOnly(equals),
  }
}

function idHandler(id) {
  if (!id) return makeId()
  if (isStringOrNumber(id)) return makeIdentifier(id)
  return id
}

function isStringOrNumber(v) {
  return typeof v === 'number' || typeof v === 'string'
}

export const makeEntity = (props) => Entity(props)
