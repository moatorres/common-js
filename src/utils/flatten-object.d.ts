declare namespace flattenObject {
  declare type Metadata = { [key: PropertyKey]: T }

  declare type FlattenOptions = {
    sort?: boolean
    reverse?: boolean
    stringify?: boolean
    removeNullish?: boolean
  }
}

export default function flattenObject(
  object: Metadata,
  options?: FlattenOptions,
  result?: Metadata,
  prefix?: string
): Metadata
