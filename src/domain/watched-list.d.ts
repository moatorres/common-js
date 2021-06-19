interface Item {
  _id?: string
  id?: string
}

interface IWatchedList {
  getItems: () => Item[] | []
  getNewItems: () => Item[] | []
  getRemovedItems: () => Item[] | []
  exists: (item: object) => boolean
  add: (item: object) => void
  remove: (item: object) => void
}

export function WatchedList(initialItems?: Item[]): IWatchedList
