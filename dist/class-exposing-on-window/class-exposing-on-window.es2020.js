// terser size before prettier: 622
window.MyClass = class {
  constructor() {
    this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod(),
      this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod(),
      this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod(),
      this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod(),
      this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod(),
      this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod(),
      this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod();
  }
  callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod() {
    document.querySelector("canvas").getContext("2d").beginPath();
  }
};
