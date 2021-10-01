declare namespace flattenStringify {
  declare type Metadata = { [key: PropertyKey]: T | string }

  declare type FlattenOptions = {
    sort?: boolean
    reverse?: boolean
    stringify?: boolean
    removeNullish?: boolean
    ignoreArrays?: boolean
  }
}

export default function flattenStringify(
  object: Metadata,
  options?: FlattenOptions,
  result?: Metadata
): Metadata
