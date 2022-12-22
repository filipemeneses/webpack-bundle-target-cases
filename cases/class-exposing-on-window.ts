class MyClass {
  constructor() {
    this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod();
    this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod();
    this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod();
    this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod();
    this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod();
    this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod();
    this.callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod();
  }
  callThisVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongMethod() {
    document.querySelector("canvas").getContext("2d").beginPath();
  }
}

window.MyClass = MyClass;
