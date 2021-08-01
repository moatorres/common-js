function arrayFromIterator(iterator) {
  let next
  let list = []

  while (!(next = iterator.next()).done) list.push(next.value)
  return list
}

export default arrayFromIterator
