// terser size before prettier: 120
window.MyClass = class {
  constructor() {
    this.mount();
  }
  mount() {
    document.querySelector("canvas").getContext("2d").beginPath();
  }
};
