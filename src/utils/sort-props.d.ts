declare type Metadata = { [key: PropertyKey]: T }

export default function sortProps(
  target: Metadata,
  options?: { reverse?: boolean }
): Metadata
