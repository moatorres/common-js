interface StringifiedSet {
  dataType: 'Set'
  value: any
}

export default function setReplacer(key: any, value: T): StringifiedSet | T
