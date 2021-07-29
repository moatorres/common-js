interface DataObject {
  [index: string]: any
}

export default function merge(object: T, extension: U): DataObject<T & U>
