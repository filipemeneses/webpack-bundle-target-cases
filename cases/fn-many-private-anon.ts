const useSummer = (b: number) => {
  let c = b * 2;
  return {
    sum: (a: number) => a + c,
  };
};
const useDivider = (b: number) => {
  let c = b * 2;
  return {
    divide: (a: number) => a / c,
  };
};

console.log(useDivider(1.5).divide(useSummer(1).sum(1)));
