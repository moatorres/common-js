declare type Metadata = { [key: PropertyKey]: any }

export default function sortPropsByValue(
  object: Metadata,
  propName?: string,
  options?: { reverse?: boolean }
)
