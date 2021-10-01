import sortProps from './sort-props'

export const sortPropsByValue = (obj, propName, options = {}) => {
  let descending = options.reverse

  if (!propName || propName === '') {
    return descending ? sortProps(obj, { reverse: true }) : sortProps(obj)
  }

  return Object.fromEntries(
    Object.entries(obj).sort(([, a], [, b]) => {
      let type = typeof a[propName]
      switch (type) {
        case 'string':
          return descending
            ? b[propName].localeCompare(a[propName])
            : a[propName].localeCompare(b[propName])
        default:
          return descending
            ? b[propName] - a[propName]
            : a[propName] - b[propName]
      }
    })
    // .reduce((r, [k, v]) => ({ ...r, [k]: v }), {}) // → ES8 alternative
  )
}

export default sortPropsByValue
