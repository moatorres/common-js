export class Maybe {
  constructor(value) {
    this.value = value
  }

  static just(value) {
    if (!isValid(value)) {
      throw new Error('Just can not have an null or undefined value')
    }
    return new Just(value)
  }

  static nothing() {
    return new Nothing()
  }

  static fromNullable(a) {
    return isValid(a) ? Maybe.just(a) : Maybe.nothing()
  }

  static fromValue(a) {
    return this.fromNullable(a)
  }

  static of(a) {
    return this.fromNullable(a)
  }

  has() {
    return this.value !== null && this.value !== undefined
  }

  getOrExecute(defaultValue) {
    return this.value === null ? defaultValue() : this.value
  }

  flatMap(f) {
    if (this.value === null || this.value === undefined) return Maybe.nothing()
    else return f(this.value)
  }

  getOrThrow(error) {
    return this.value === null || this.value === undefined
      ? (() => {
          if (error !== undefined) throw error
          throw new Error()
        })()
      : this.value
  }
}

export class Just extends Maybe {
  map(f) {
    return Maybe.of(f(this.value))
  }

  tap(f) {
    if (isValid(this.value)) f(this.value)
    return Maybe.fromValue(this.value)
  }

  getOrElse() {
    return this.value
  }

  filter(f) {
    Maybe.fromNullable(f(this.value) ? this.value : null)
  }

  toString() {
    return `Maybe.Just(${this.value})`
  }

  isJust() {
    return true
  }

  isNothing() {
    return false
  }
}

export class Nothing extends Maybe {
  map() {
    return this
  }

  getOrElse(other) {
    return other
  }

  filter() {
    return this.value
  }

  tap() {
    return Maybe.nothing()
  }

  toString() {
    return 'Maybe.Nothing()'
  }

  isNothing() {
    return true
  }

  isJust() {
    return false
  }
}

function isValid(value) {
  return (
    !!value ||
    isNumberZero(value) ||
    isFalse(value) ||
    isEmptyString(value) ||
    isNullOrUndefined(value)
  )
}

function isNumberZero(value) {
  return typeof value === 'number' && value === 0
}

function isEmptyString(value) {
  return typeof value === 'string' && value === ''
}

function isFalse(value) {
  return typeof value === 'boolean' && !value
}

function isNullOrUndefined(value) {
  return value !== null && value !== undefined
}
