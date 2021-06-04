export class Delay {
  static ms(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
