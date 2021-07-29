interface Metadata {
  [key: index]: any
}

export default function getKeys(target: Metadata): Array<Metadata>
