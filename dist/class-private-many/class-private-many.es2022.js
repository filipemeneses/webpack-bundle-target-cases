new (class {
  #h = 0;
  #t;
  constructor(h, t) {
    (this.#h = h), (this.#t = t);
  }
})(10, 10),
  new (class {
    #h = 0;
    #t;
    constructor(h, t) {
      (this.#h = h), (this.#t = t);
    }
  })(10, 10);
