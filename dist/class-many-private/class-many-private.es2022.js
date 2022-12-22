// terser size before prettier: 175
console.log(
  new (class {
    #c = 0;
    constructor(c) {
      this.#c = 2 * c;
    }
    divide(c) {
      return c / this.#c;
    }
  })(1.5).divide(
    new (class {
      #c = 0;
      constructor(c) {
        this.#c = 2 * c;
      }
      sum(c) {
        return c + this.#c;
      }
    })(1).sum(1)
  )
);
