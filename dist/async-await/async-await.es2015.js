({
  182: function () {
    var n,
      t =
        (this && this.__awaiter) ||
        function (n, t, o, e) {
          return new (o || (o = Promise))(function (i, c) {
            function u(n) {
              try {
                r(e.next(n));
              } catch (n) {
                c(n);
              }
            }
            function a(n) {
              try {
                r(e.throw(n));
              } catch (n) {
                c(n);
              }
            }
            function r(n) {
              var t;
              n.done
                ? i(n.value)
                : ((t = n.value),
                  t instanceof o
                    ? t
                    : new o(function (n) {
                        n(t);
                      })).then(u, a);
            }
            r((e = e.apply(n, t || [])).next());
          });
        };
    ((n = 1),
    t(void 0, void 0, void 0, function* () {
      yield new Promise((t) => setTimeout(t, n));
    })).then(console.log);
  },
}[182]());
