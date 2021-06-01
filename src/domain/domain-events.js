// import { EventEmitter } from 'events'

export function makeDomainEvents({ handler }) {
  return function DomainEvents() {
    let handlers = {}
    let eventList = []

    const getHandlers = () => handlers
    const clearHandlers = () => (handlers = {})

    const add = ({ evento, callback }) => {
      if (handlers[evento]) return
      handlers[evento] = callback
      handler.on(evento, callback)
    }

    const dispatch = ({ evento, payload }) => {
      let found = handlers[evento]
      if (!found) throw new Error('Nenhum evento encontrado com este nome')
      handler.emit(evento, payload)
    }

    const getEventList = () => eventList
    const clearEventList = () => (eventList = [])

    const register = (nome, payload) => {
      let found = handlers[nome]
      if (!found) return new Error('Nenhum evento encontrado com este nome')
      let evento = { nome, payload }
      eventList.push(evento)
    }

    const dispatchAll = () =>
      eventList.forEach((e) => handler.emit(e.nome, e.payload))

    return {
      add,
      register,
      dispatch,
      dispatchAll,
      getEventList,
      clearEventList,
      getHandlers,
      clearHandlers,
      __proto__: {
        constructor: DomainEvents,
      },
    }
  }
}
