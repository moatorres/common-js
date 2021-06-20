import { makeIdentifier } from './identifier'

const Entity = ({ props, id }) => {
  let _id = id ? id : makeIdentifier(id) // FIXME: should create an id
  let _props = props

  const getId = () => _id

  function equals(object) {
    if (object == null || object == undefined) return false
    return _id.equals(object.getId())
  }

  return {
    props: _props,
    getId,
    equals,
  }
}

export const makeEntity = (props) => Entity(props)
