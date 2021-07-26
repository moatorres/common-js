import { isNullOrUndefined, isNumber, isString, makeReadOnly } from '../utils'
import { makeIdentifier } from './identifier'
import { makeId } from './unique-id'

function Entity({ props, id }) {
  let _id = idHandler(id)
  let _props = {
    ...props,
  }

  function isEqual(object) {
    // if (object == null || object == undefined) return false
    if (isNullOrUndefined(object)) return false
    if (this === object) return true
    return _id.isEqual(object.id)
  }

  return {
    id: _id,
    props: _props,
    isEqual: makeReadOnly(isEqual),
  }
}

function idHandler(id) {
  if (!id) return makeId()
  if (isString(id) || isNumber(id)) return makeIdentifier(id)
  return id
}

export const makeEntity = (props) => Entity(props)
