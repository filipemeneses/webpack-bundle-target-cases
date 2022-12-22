// terser size before prettier: 103
console.log(
  new (class {
    divide(e, s) {
      return e / s;
    }
  })().divide(
    3,
    new (class {
      sum(e, s) {
        return e + s;
      }
    })().sum(1, 2)
  )
);
