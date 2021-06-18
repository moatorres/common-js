let objeto, adicoes, array

export const init = () => {
  const _ = Object.create(null)

  Object.defineProperties(_, {
    tipo: {
      value: 'admin',
      writable: true,
      enumerable: false,
      configurable: false,
    },
  })

  objeto = Object.create(null)
  Object.defineProperties(objeto, {
    _: {
      value: _,
      writable: false,
      enumerable: false,
      configurable: false,
    },
    nome: {
      value: 'Moka',
      writable: true,
      enumerable: true,
      configurable: false,
    },
    ultimoAcesso: {
      value: Date.now(),
      writable: true,
      enumerable: true,
      configurable: false,
    },
    tipo: {
      enumerable: false,
      configurable: false,
      get() {
        this.ultimoAcesso = Date.now()
        return this.isAdmin() ? this._.tipo : 'acesso restrito'
      },
      set(tipo) {
        this.ultimoAcesso = Date.now()
        if (this.isAdmin()) this._.tipo = tipo
      },
    },
  })

  adicoes = Object.create(null)
  Object.defineProperties(adicoes, {
    sobrenome: {
      value: 'Floca',
      writable: true,
      enumerable: true,
      configurable: false,
    },
    isAdmin: {
      value: function () {
        return this._.tipo === 'admin'
      },
      writable: false,
      enumerable: false,
      configurable: false,
    },
    // dita ordem e retorno de interação em for(...of) loops
    [Symbol.iterator]: {
      value: function* () {
        yield `Nome: ${this.nome}`
        yield this.sobrenome
        yield this.ultimoAcesso
      },
    },
  })

  array = [{ idade: 33 }]
}

export { objeto, adicoes, array }
