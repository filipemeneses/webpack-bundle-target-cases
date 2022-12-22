const useSummer = () => {
  return {
    sum(a: number, b: number) {
      return a + b;
    },
  };
};
const useDivider = () => {
  return {
    divide(a: number, b: number) {
      return a / b;
    },
  };
};

console.log(useDivider().divide(3, useSummer().sum(1, 2)));
