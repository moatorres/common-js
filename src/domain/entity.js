import makeReadOnly from '../utils/make-read-only'
import { makeIdentifier } from './identifier'

const Entity = ({ props, id }) => {
  let _id = id ? id : makeIdentifier(id) // FIXME: should create an id
  let _props = {
    ...props,
  }

  function equals(object) {
    if (object == null || object == undefined) return false
    return _id.equals(object.id)
  }

  return {
    id: _id,
    props: _props,
    equals: makeReadOnly(equals),
  }
}

export const makeEntity = (props) => Entity(props)
