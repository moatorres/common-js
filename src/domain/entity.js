import makeReadOnly from '../utils/make-read-only'
import { makeId } from './unique-id'

const Entity = ({ props, id }) => {
  let _id = id ? id : makeId()
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
