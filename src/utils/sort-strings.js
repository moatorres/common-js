import filterStrings from './filter-strings'
import makeReadOnly from './make-read-only'

const compareStrings = (a, b) => a.localeCompare(b)
const sortAscending = (itens) => filterStrings(itens).sort(compareStrings)
const sortDescending = (itens) => sortAscending(itens).reverse()

const sortStrings = makeReadOnly({
  ascending: sortAscending,
  descending: sortDescending,
})

export default sortStrings
