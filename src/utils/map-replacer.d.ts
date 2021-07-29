interface StringifiedMap {
  dataType: 'Map'
  value: any
}

export default function mapReplacer(key: any, value: T): StringifiedMap | T
