// terser size before prettier: 443
({
  182() {
    var n,
      t =
        (this && this.__awaiter) ||
        function (n, t, e, o) {
          return new (e || (e = Promise))(function (i, c) {
            function u(n) {
              try {
                r(o.next(n));
              } catch (n) {
                c(n);
              }
            }
            function a(n) {
              try {
                r(o.throw(n));
              } catch (n) {
                c(n);
              }
            }
            function r(n) {
              var t;
              n.done
                ? i(n.value)
                : ((t = n.value),
                  t instanceof e
                    ? t
                    : new e(function (n) {
                        n(t);
                      })).then(u, a);
            }
            r((o = o.apply(n, t || [])).next());
          });
        };
    ((n = 1),
    t(void 0, void 0, void 0, function* () {
      yield new Promise((t) => setTimeout(t, n));
    })).then(console.log);
  },
}[182]());
