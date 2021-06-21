const ValueObject = (props) => {
  let _props = {
    ...props,
  }

  function igual(vo) {
    if (vo === null || vo === undefined) return false
    if (vo.props === undefined) return false
    return JSON.stringify(_props) === JSON.stringify(vo.props)
  }

  return {
    props: _props,
    equals: igual,
  }
}

export const makeValueObject = (props) => ValueObject(props)
