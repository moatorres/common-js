import { isNullOrUndefined, isUndefined, safeJSON } from '../utils'

const ValueObject = (props) => {
  let _props = {
    ...props,
  }

  function isEqual(vo) {
    if (isNullOrUndefined(vo) || isUndefined(vo.props)) return false
    return safeJSON.stringify(_props) === safeJSON.stringify(vo.props)
  }

  return {
    props: _props,
    isEqual: isEqual,
  }
}

export const makeValueObject = (props) => ValueObject(props)
