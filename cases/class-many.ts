class Summer {
  sum(a: number, b: number) {
    return a + b;
  }
}
class Divider {
  divide(a: number, b: number) {
    return a / b;
  }
}

console.log(new Divider().divide(3, new Summer().sum(1, 2)));
