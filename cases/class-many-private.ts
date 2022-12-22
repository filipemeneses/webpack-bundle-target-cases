class Summer {
  #c = 0;
  constructor(b: number) {
    this.#c = b * 2;
  }
  sum(a: number) {
    return a + this.#c;
  }
}
class Divider {
  #c = 0;
  constructor(b: number) {
    this.#c = b * 2;
  }
  divide(a: number) {
    return a / this.#c;
  }
}

console.log(new Divider(1.5).divide(new Summer(1).sum(1)));
