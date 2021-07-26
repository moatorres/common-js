import { Identifier } from './identifier'
import { ValueObjectProps } from './value-object'
import { IEvent } from './events/domain-events'
import { IEntity } from './entity'

interface IAggregate {
  id: Identifier
  props: ValueObjectProps
  isEqual: (object: IEntity | IAggregate) => boolean
  domainEvents(): IEvent[] | []
  addEvent(event: IEvent): void
  clearEvents(): void
}

export function makeAggregate(props: object): IAggregate
