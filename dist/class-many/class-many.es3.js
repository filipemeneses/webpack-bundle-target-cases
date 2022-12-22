// terser size before prettier: 227
(() => {
  var n = (function () {
      function n() {}
      return (
        (n.prototype.sum = function (n, t) {
          return n + t;
        }),
        n
      );
    })(),
    t = (function () {
      function n() {}
      return (
        (n.prototype.divide = function (n, t) {
          return n / t;
        }),
        n
      );
    })();
  console.log(new t().divide(3, new n().sum(1, 2)));
})();
