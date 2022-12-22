class MyClass {
  constructor() {
    this.mount();
  }
  mount() {
    document.querySelector("canvas").getContext("2d").beginPath();
  }
}

new MyClass().mount();
