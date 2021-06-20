export declare class EventEmitter {
  adicionar(evento: string, fn: Function): EventEmitter
  on(evento: string, fn: Function): EventEmitter
  quando(evento: string, fn: Function): EventEmitter
  remover(evento: string, fn: Function): EventEmitter
  remove(evento: string, fn: Function): EventEmitter
  removeAll(): EventEmitter
  off(evento: string, fn: Function): EventEmitter
  once(evento: string, fn: Function): EventEmitter
  emitir(evento: string, args: any): boolean
  emit(evento: string, args: any): boolean
  qtdOuvintes(evento: string): number
  rawOuvintes(evento: string): string
}
