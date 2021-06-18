interface Assignable {
  destino: Object | Array | Function
  origem: Object
}

export default function assign({ destino, origem }: Assignable): Object

export default function assign(destino: Object, origem: Object): Object
