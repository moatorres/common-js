import filterNumbers from './filter-numbers'
import makeReadOnly from './make-read-only'

const compare = (a, b) => a - b

const sort = (array) => {
  if (array.length === 0) return array

  const numbers = filterNumbers(array)

  const lt = (value) => value.slice(1).filter((x) => 0 < compare(numbers[0], x))

  const gte = (value) =>
    value.slice(1).filter((x) => 0 >= compare(numbers[0], x))

  return [...sort(lt(numbers)), numbers[0], ...sort(gte(numbers))]
}

const sortAscending = (itens) => sort(itens)
const sortDescending = (itens) => sortAscending(itens).reverse()

const sortNumbers = makeReadOnly({
  ascending: sortAscending,
  descending: sortDescending,
})

export default sortNumbers
