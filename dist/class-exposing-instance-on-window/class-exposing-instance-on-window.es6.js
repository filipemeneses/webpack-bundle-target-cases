// terser size before prettier: 124
window.MyClass = new (class {
  constructor() {
    this.mount();
  }
  mount() {
    document.querySelector("canvas").getContext("2d").beginPath();
  }
})();
