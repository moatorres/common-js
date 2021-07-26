import { makeReadOnly } from '../utils'

export function WatchedList(initialItems = []) {
  let currentItems = initialItems ? initialItems : []
  let _initial = initialItems ? initialItems : []
  let _new = []
  let _removed = []

  function compareItems(a, b) {
    if (a == null || a == undefined) return false
    if (a._id !== b._id) return false
    return a === b
  }

  function isCurrentItem(item) {
    return currentItems.filter((v) => compareItems(item, v)).length !== 0
  }

  function isNewItem(item) {
    return _new.filter((v) => compareItems(item, v)).length !== 0
  }

  function isRemovedItem(item) {
    return _removed.filter((v) => compareItems(item, v)).length !== 0
  }

  function removeFromNew(item) {
    _new = _new.filter((v) => !compareItems(v, item))
  }

  function removeFromCurrent(item) {
    currentItems = currentItems.filter((v) => !compareItems(item, v))
  }

  function removeFromRemoved(item) {
    _removed = _removed.filter((v) => !compareItems(item, v))
  }

  function wasAddedInitially(item) {
    return _initial.filter((v) => compareItems(item, v)).length !== 0
  }

  return makeReadOnly({
    getItems: () => currentItems,
    getNewItems: () => _new,
    getRemovedItems: () => _removed,
    exists: (item) => isCurrentItem(item),
    add: (item) => {
      if (isRemovedItem(item)) removeFromRemoved(item)
      if (!isNewItem(item) && !wasAddedInitially(item)) _new.push(item)
      if (!isCurrentItem(item)) currentItems.push(item)
    },
    remove: (item) => {
      removeFromCurrent(item)

      if (isNewItem(item)) {
        removeFromNew(item)
        return
      }

      if (!isRemovedItem(item)) {
        _removed.push(item)
      }
    },
  })
}
