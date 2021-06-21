import { domainEvents } from './domain-events'

export const UserCreatedEvent = (aggregate) => {
  let dateTimeOccurred = new Date()
  let _aggregate = aggregate

  // const getAggregateId = () => _aggregate.id

  return {
    get name() {
      return UserCreatedEvent.name
    },
    get aggregate() {
      return _aggregate
    },
    get dateTimeOccurred() {
      return dateTimeOccurred
    },
    get aggregateId() {
      return _aggregate.id
    },
  }
}

export let eventHandlerFoiChamado = jest.fn()

export const AfterUserCreated = (updateUser) => {
  let useCase = updateUser

  const setupSubscription = () => {
    console.info('[Subscription]:', AfterUserCreated.name)
    domainEvents.register(UserCreatedEvent.name, onMemberCreated.bind(this))
  }

  setupSubscription()

  async function onMemberCreated(event) {
    try {
      eventHandlerFoiChamado()
      // await useCase.execute({ userId: event.aggregate.id.toString() })
      console.log(
        `[AfterUserCreated]: User Updated {${event.aggregate.id.toString()}}`
      )
    } catch (err) {
      console.log(
        `[AfterUserCreated]: Failed to Update User {${event.aggregate.id.toString()}}`
      )
    }
  }
}
