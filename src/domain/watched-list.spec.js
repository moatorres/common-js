import { WatchedList } from './watched-list'

let list, item1, item2, item3

beforeEach(() => {
  list = WatchedList()
  item1 = { _id: '1', nome: 'Moka' }
  item2 = { _id: '2', nome: 'Moka' }
  item3 = { _id: '3', nome: 'Moka' }
})

describe('WatchedList', () => {
  it('Should be defined', () => {
    expect(WatchedList).toBeDefined()
  })

  it('Should return a valid WatchedList instance', () => {
    expect(list.add).toBeDefined()
    expect(list.exists).toBeDefined()
    expect(list.getItems).toBeDefined()
    expect(list.getNewItems).toBeDefined()
    expect(list.getRemovedItems).toBeDefined()
    expect(list.remove).toBeDefined()
  })

  describe('.add()', () => {
    it('Should successfully add an item to the current items list', () => {
      list.add(item1)
      expect(list.getItems().length).toEqual(1)
    })

    it("Should NOT add an item that's been already added to the  items list", () => {
      list.add(item1)
      list.add(item1)
      list.add(item1)
      expect(list.getItems().length).toEqual(1)
    })
  })

  describe('.exists()', () => {
    it('Should return false if an item is not found', () => {
      expect(list.exists(item1)).toBeFalse()
    })

    it('Should return true if the same item is found', () => {
      list.add(item1)
      expect(list.exists(item1)).toBeTrue()
    })

    it('Should NOT return true if the item was removed from the list', () => {
      list.add(item1)
      list.remove(item1)
      expect(list.exists(item1)).toBeFalse()
    })
  })

  describe('.getItems()', () => {
    it('Should return an empty array if no item is found', () => {
      expect(list.getItems()).toEqual([])
    })

    it('Should return an array of current items', () => {
      list.add(item1)
      list.add(item2)
      expect(list.getItems().length).toEqual(2)
      expect(list.getItems()[0]).toEqual(item1)
    })
  })

  describe('.getNewItems()', () => {
    it('Should return an empty array if no item is found', () => {
      expect(list.getNewItems()).toEqual([])
    })

    it('Should ONLY add items that were not initially added to the list', () => {
      let newList = WatchedList([item1, item2])
      newList.add(item2)
      newList.add(item3)
      expect(newList.getNewItems().length).toEqual(1)
      expect(newList.getNewItems()).toEqual([item3])
    })
  })

  describe('.getRemovedItems()', () => {
    it('Should return an empty array if no item was found', () => {
      expect(list.getRemovedItems()).toEqual([])
    })

    it('Should return items that were removed from the list', () => {
      let newList = WatchedList([item1, item2])
      newList.remove(item2)
      expect(newList.getRemovedItems().length).toEqual(1)
      expect(newList.getRemovedItems()).toEqual([item2])
    })
  })
})
