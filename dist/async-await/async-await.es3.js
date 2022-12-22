({
  182: function () {
    var n,
      t =
        (this && this.__awaiter) ||
        function (n, t, e, r) {
          return new (e || (e = Promise))(function (o, i) {
            function u(n) {
              try {
                c(r.next(n));
              } catch (n) {
                i(n);
              }
            }
            function a(n) {
              try {
                c(r.throw(n));
              } catch (n) {
                i(n);
              }
            }
            function c(n) {
              var t;
              n.done
                ? o(n.value)
                : ((t = n.value),
                  t instanceof e
                    ? t
                    : new e(function (n) {
                        n(t);
                      })).then(u, a);
            }
            c((r = r.apply(n, t || [])).next());
          });
        },
      e =
        (this && this.__generator) ||
        function (n, t) {
          var e,
            r,
            o,
            i,
            u = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function a(a) {
            return function (c) {
              return (function (a) {
                if (e) throw new TypeError("Generator is already executing.");
                for (; i && ((i = 0), a[0] && (u = 0)), u; )
                  try {
                    if (
                      ((e = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return u.label++, { value: a[1], done: !1 };
                      case 5:
                        u.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (o = (o = u.trys).length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0])
                          )
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          u.label = a[1];
                          break;
                        }
                        if (6 === a[0] && u.label < o[1]) {
                          (u.label = o[1]), (o = a);
                          break;
                        }
                        if (o && u.label < o[2]) {
                          (u.label = o[2]), u.ops.push(a);
                          break;
                        }
                        o[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    a = t.call(n, u);
                  } catch (n) {
                    (a = [6, n]), (r = 0);
                  } finally {
                    e = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, c]);
            };
          }
        };
    ((n = 1),
    t(void 0, void 0, void 0, function () {
      return e(this, function (t) {
        switch (t.label) {
          case 0:
            return [
              4,
              new Promise(function (t) {
                return setTimeout(t, n);
              }),
            ];
          case 1:
            return t.sent(), [2];
        }
      });
    })).then(console.log);
  },
}[182]());
