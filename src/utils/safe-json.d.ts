type NotFunction<T> = T extends Function ? never : T

interface ISafeJSON {
  parse(value: T): NotFunction<T>
  stringify(value: T): string & NotFunction<T>
}

const safeJSON: ISafeJSON

export default safeJSON
