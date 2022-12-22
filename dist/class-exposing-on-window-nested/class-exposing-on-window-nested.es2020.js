// terser size before prettier: 209
(() => {
  class o {
    constructor() {}
    mount() {
      console.log(2);
    }
  }
  class n {
    constructor() {}
    mount() {
      new o().mount(), console.log(1);
    }
  }
  window.MyClass = class {
    constructor() {
      this.mount();
    }
    mount() {
      new n().mount(), console.log(0);
    }
  };
})();
