export class EventEmitter {
  ouvintes = {}

  adicionar(evento, fn) {
    this.ouvintes[evento] = this.ouvintes[evento] || []
    this.ouvintes[evento].push(fn)
    return this
  }

  on(evento, fn) {
    return this.adicionar(evento, fn)
  }

  quando(evento, fn) {
    return this.adicionar(evento, fn)
  }

  remove(evento, fn) {
    let lista = this.ouvintes[evento]

    // return 'this' for chaining
    if (!lista) return this

    for (let i = lista.length; i >= 0; i--) {
      if (lista[i] === fn) {
        lista.splice(i, 1)
        delete lista[evento]
        break
      }
    }

    return this
  }

  remover(evento, fn) {
    return this.remove(evento, fn)
  }

  off(evento, fn) {
    return this.remove(evento, fn)
  }

  removeAll() {
    this.ouvintes = {}
    return this
  }

  once(evento, fn) {
    this.ouvintes[evento] = this.ouvintes[evento] || []

    const onceWrapper = () => {
      fn()
      this.off(evento, onceWrapper)
    }

    this.ouvintes[evento].push(onceWrapper)

    return this
  }

  emitir(evento, ...args) {
    let funcoes = this.ouvintes[evento]

    if (!funcoes) return false

    funcoes.forEach((funcao) => {
      funcao(...args)
    })

    return true
  }

  emit(evento, ...args) {
    return this.emitir(evento, ...args)
  }

  qtdOuvintes(evento) {
    let fns = this.ouvintes[evento] || []
    return fns.length
  }

  rawOuvintes(evento) {
    return this.ouvintes[evento]
  }
}

export class AsyncEventEmitter extends EventEmitter {
  execute(asyncFunc, ...args) {
    this.on('dados', (dados) => console.log('dados recebidos: ', dados))

    asyncFunc(...args, (erro, dados) => {
      if (erro) {
        return this.emitir('erro', erro)
      }

      this.emitir('dados', dados)
    })
  }
}
