const and = (a, b) => a && b

const predicate = (a, b) => (v) => a(v) && b(v)

// prettier-ignore
const all = (...args) => (val) => args.reduce((acc, v)=> acc && v(val))

export default Object.assign(and, { predicate, all })
