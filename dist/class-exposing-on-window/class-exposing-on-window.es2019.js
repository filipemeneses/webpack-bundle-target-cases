window.MyClass = class {
  constructor() {
    this.mount();
  }
  mount() {
    document.querySelector("canvas").getContext("2d").beginPath();
  }
};
