// terser size before prettier: 64
new (class {
  #h = 0;
  #t;
  constructor(h, t) {
    (this.#h = h), (this.#t = t);
  }
})(10, 10);
