// terser size before prettier: 327
(() => {
  var n = (function () {
      function n() {}
      return (
        (n.prototype.mount = function () {
          console.log(2);
        }),
        n
      );
    })(),
    o = (function () {
      function o() {}
      return (
        (o.prototype.mount = function () {
          new n().mount(), console.log(1);
        }),
        o
      );
    })(),
    t = (function () {
      function n() {
        this.mount();
      }
      return (
        (n.prototype.mount = function () {
          new o().mount(), console.log(0);
        }),
        n
      );
    })();
  window.MyClass = t;
})();
