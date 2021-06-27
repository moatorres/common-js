import removeNullProps from './remove-null-props'

let oops
let original = {
  nome: '',
  age: oops,
  gender: undefined,
  race: null,
  friend: true,
  enemy: false,
}

describe('removeNullProps()', () => {
  it('Should be defined', () => {
    expect(removeNullProps).toBeDefined()
  })

  it('Should remove properties with null or undefined values', () => {
    let object = removeNullProps(original)

    expect(object.nome).not.toBeDefined()
    expect(object.age).not.toBeDefined()
    expect(object.gender).not.toBeDefined()
    expect(object.race).not.toBeDefined()
  })
})
