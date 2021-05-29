import { makeEnsure } from './ensure'

let ensure = makeEnsure()

describe('makeEnsure()', () => {
  it('Method .notEmpty() should be defined', () => {
    expect(ensure.notEmpty).toBeDefined()
    expect(typeof ensure.notEmpty === 'function').toBeTruthy()
  })

  it('Method .notEmptyBulk() should be defined', () => {
    expect(ensure.notEmptyBulk).toBeDefined()
    expect(typeof ensure.notEmptyBulk === 'function').toBeTruthy()
  })

  it('Method .isOneOf() should be defined', () => {
    expect(ensure.isOneOf).toBeDefined()
    expect(typeof ensure.isOneOf === 'function').toBeTruthy()
  })

  it('Method .inRange() should be defined', () => {
    expect(ensure.inRange).toBeDefined()
    expect(typeof ensure.inRange === 'function').toBeTruthy()
  })

  it('Method .allInRange() should be defined', () => {
    expect(ensure.allInRange).toBeDefined()
    expect(typeof ensure.allInRange === 'function').toBeTruthy()
  })

  it('Method .greaterThan() should be defined', () => {
    expect(ensure.greaterThan).toBeDefined()
    expect(typeof ensure.greaterThan === 'function').toBeTruthy()
  })

  it('Method .atLeast() should be defined', () => {
    expect(ensure.atLeast).toBeDefined()
    expect(typeof ensure.atLeast === 'function').toBeTruthy()
  })

  it('Method .atMost() should be defined', () => {
    expect(ensure.atMost).toBeDefined()
    expect(typeof ensure.atMost === 'function').toBeTruthy()
  })

  it('Method .mergeResults() should be defined', () => {
    expect(ensure.mergeResults).toBeDefined()
    expect(typeof ensure.mergeResults === 'function').toBeTruthy()
  })
})

describe('.notEmpy()', () => {
  it('Should return { success: true } when provided valid key-values', () => {
    const nome = 'Moka'
    const result = ensure.notEmpty(nome, 'nome')

    expect(result.success).toBeTruthy()
    expect(result).toEqual({ success: true })
  })

  it('Should return { success: false } when provided empty key-values', () => {
    const nome = ''
    const result = ensure.notEmpty(nome, 'nome')
    expect(result.success).toBeFalsy()

    let vazio = undefined
    const resultado = ensure.notEmpty(vazio, 'vazio')
    expect(resultado.success).toBeFalsy()
  })

  it('Should return valid failure messages', () => {
    const nome = ''
    const result = ensure.notEmpty(nome, 'nome')
    expect(result).toEqual({
      success: false,
      message: 'nome cannot be null or undefined',
    })

    let vazio = undefined
    const resultado = ensure.notEmpty(vazio, 'vazio')
    expect(resultado).toEqual({
      success: false,
      message: 'vazio cannot be null or undefined',
    })
  })
})

describe('.notEmpyBulk()', () => {
  it('Should return { success: true } when provided valid key-values', () => {
    const user = {
      primeiroNome: 'Moka',
      segundoNome: 'Floka',
    }

    const result = ensure.notEmptyBulk([
      { prop: user.primeiroNome, propName: 'primeiroNome' },
      { prop: user.segundoNome, propName: 'segundoNome' },
    ])

    expect(result.success).toBeTruthy()
    expect(result).toEqual({ success: true })
  })

  it('Should return { success: false } when provided empty key-values', () => {
    const user = {
      primeiroNome: '',
      segundoNome: 'Floka',
    }
    const result = ensure.notEmptyBulk([
      { prop: user.primeiroNome, propName: 'primeiroNome' },
      { prop: user.segundoNome, propName: 'segundoNome' },
    ])
    expect(result.success).toBeFalsy()

    let vazio = undefined
    const resultado = ensure.notEmptyBulk([{ prop: vazio, propName: 'vazio' }])
    expect(resultado.success).toBeFalsy()
  })

  it('Should return valid failure messages', () => {
    const user = {
      primeiroNome: '',
      segundoNome: 'Floka',
    }

    const result = ensure.notEmptyBulk([
      { prop: user.primeiroNome, propName: 'primeiroNome' },
      { prop: user.segundoNome, propName: 'segundoNome' },
    ])

    expect(result.success).toBeFalsy()
    expect(result.message).toBeDefined()
    expect(result).toEqual({
      success: false,
      message: 'primeiroNome cannot be null or undefined',
    })
  })
})

describe('.isOneOf()', () => {
  it('Should fail when provided invalid values', () => {
    const tipo = 'fazenda'
    const tiposValidos = ['casa', 'apto']
    const result = ensure.isOneOf(tipo, tiposValidos, 'tipo')

    expect(result.success).toBeFalsy()
    expect(result.message).toBeDefined()
  })

  it('Should return { success: true } when provided valid key-values', () => {
    const tipo = 'casa'
    const tiposValidos = ['casa', 'apto']
    const result = ensure.isOneOf(tipo, tiposValidos, 'tipo')
    expect(result.success).toBeTruthy()
  })

  it('Should return a valid failure message', () => {
    const tipo = 'fazenda'
    const tiposValidos = ['casa', 'apto']
    const result = ensure.isOneOf(tipo, tiposValidos, 'tipo')

    expect(result).toEqual({
      success: false,
      message: `tipo isn't oneOf the correct types in ["casa","apto"]. Received "fazenda".`,
    })
  })
})

describe('.inRange()', () => {
  it('Should return { success: true } when provided an in-range value', () => {
    const props = { idade: 15, min: 12, max: 60, key: 'idade' }
    const result = ensure.inRange(props.idade, props.min, props.max, props.key)

    expect(result.success).toBeTruthy()
    expect(result.message).not.toBeDefined()
    expect(result).toEqual({ success: true })
  })

  it('Should fail when provided an out-of-range value', () => {
    const props = { idade: 150, min: 12, max: 60, key: 'idade' }
    const result = ensure.inRange(props.idade, props.min, props.max, props.key)

    expect(result.success).toBeFalsy()
    expect(result.message).toBeDefined()
  })

  it('Should return a valid failure message', () => {
    const props = { idade: 150, min: 12, max: 60, key: 'idade' }
    const result = ensure.inRange(props.idade, props.min, props.max, props.key)

    expect(result).toEqual({
      success: false,
      message: 'idade is not within range 12 to 60.',
    })
  })
})

describe('.allInRange()', () => {
  it('Should return { success: true } when provided an in-range value', () => {
    const props = {
      cursos: [2007, 2015, 2018],
      min: 1998,
      max: 2020,
      key: 'cursos',
    }
    const result = ensure.allInRange(
      props.cursos,
      props.min,
      props.max,
      props.key
    )

    expect(result.success).toBeTruthy()
    expect(result.message).not.toBeDefined()
    expect(result).toEqual({ success: true })
  })

  it('Should fail when provided an out-of-range value', () => {
    const props = { cursos: [1987, 1995], min: 1998, max: 2020, key: 'cursos' }
    const result = ensure.allInRange(
      props.cursos,
      props.min,
      props.max,
      props.key
    )

    expect(result.success).toBeFalsy()
    expect(result.message).toBeDefined()
  })

  it('Should return a valid failure message', () => {
    const props = { cursos: [1987, 1995], min: 1998, max: 2020, key: 'cursos' }
    const result = ensure.allInRange(
      props.cursos,
      props.min,
      props.max,
      props.key
    )

    expect(result).toEqual({
      success: false,
      message: 'cursos is not within the range.',
    })
  })
})

describe('.greaterThan()', () => {
  it('Should return { success: true } when provided an in-range value', () => {
    const idade = 21
    const idadeMinima = 18
    const result = ensure.greaterThan(idadeMinima, idade)

    expect(result.success).toBeTruthy()
    expect(result.message).not.toBeDefined()
    expect(result).toEqual({ success: true })
  })

  it('Should fail when provided an out-of-range value', () => {
    const idade = 16
    const idadeMinima = 18
    const result = ensure.greaterThan(idadeMinima, idade)

    expect(result.success).toBeFalsy()
    expect(result.message).toBeDefined()
  })

  it('Should return a valid failure message', () => {
    const idade = 16
    const idadeMinima = 18
    const result = ensure.greaterThan(idadeMinima, idade)

    expect(result).toEqual({
      success: false,
      message: 'Number given {16} is not greater than {18}',
    })
  })
})

describe('.atLeast()', () => {
  it('Should return { success: true } when provided an in-range value', () => {
    const minLength = 21
    const frase = 'Running tests with jest is the best'
    const result = ensure.atLeast(minLength, frase)

    expect(result.success).toBeTruthy()
    expect(result.message).not.toBeDefined()
    expect(result).toEqual({ success: true })
  })

  it('Should fail when provided an out-of-range value', () => {
    const minLength = 150
    const frase = 'Running tests with jest is the best'
    const result = ensure.atLeast(minLength, frase)

    expect(result.success).toBeFalsy()
    expect(result.message).toBeDefined()
  })

  it('Should return a valid failure message', () => {
    const minLength = 150
    const frase = 'Running tests with jest is the best'
    const result = ensure.atLeast(minLength, frase)

    expect(result).toEqual({
      success: false,
      message: 'Text is not at least 150 chars.',
    })
  })
})

describe('.atMost()', () => {
  it('Should return { success: true } when provided an in-range value', () => {
    const maxLength = 30
    const username = 'mokafloca'
    const result = ensure.atMost(maxLength, username)

    expect(result.success).toBeTruthy()
    expect(result.message).not.toBeDefined()
    expect(result).toEqual({ success: true })
  })

  it('Should fail when provided an out-of-range value', () => {
    const maxLength = 15
    const username = 'annoyingUserRobot2299'
    const result = ensure.atMost(maxLength, username)

    expect(result.success).toBeFalsy()
    expect(result.message).toBeDefined()
  })

  it('Should return a valid failure message', () => {
    const maxLength = 15
    const username = 'nobodycanimposelimits'
    const result = ensure.atMost(maxLength, username)

    expect(result).toEqual({
      success: false,
      message: 'Text is greater than 15 chars.',
    })
  })
})

describe('.mergeResults()', () => {
  it('Should successfully merge results', () => {
    const user = { primeiroNome: '', etnia: '' }

    const resultOne = ensure.notEmptyBulk([
      { prop: user.primeiroNome, propName: 'primeiroNome' },
    ])
    const resultTwo = ensure.notEmpty(user.etnia, 'etnia')

    const merged = ensure.mergeResults([resultOne, resultTwo])
    expect(merged).toEqual([
      { success: false, message: 'primeiroNome cannot be null or undefined' },
      { success: false, message: 'etnia cannot be null or undefined' },
    ])
  })
})
