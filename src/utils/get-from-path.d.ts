type NotFunction<T> = T extends Function ? never : T

export default function getFromPath<T>(
  object: NotFunction<T>,
  path: string
): any
