// terser size before prettier: 155
(() => {
  var n, r;
  console.log(
    ((n = 1.5),
    (r = 2 * n),
    {
      divide: function (n) {
        return n / r;
      },
    }).divide(
      (function (n) {
        var r = 2 * n;
        return {
          sum: function (n) {
            return n + r;
          },
        };
      })(1).sum(1)
    )
  );
})();
