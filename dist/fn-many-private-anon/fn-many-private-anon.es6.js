// terser size before prettier: 111
console.log(
  ((e) => {
    let d = 2 * e;
    return { divide: (e) => e / d };
  })(1.5).divide(
    ((e) => {
      let d = 2 * e;
      return { sum: (e) => e + d };
    })(1).sum(1)
  )
);
