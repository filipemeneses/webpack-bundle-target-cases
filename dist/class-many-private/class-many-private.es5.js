// terser size before prettier: 1085
({
  893() {
    var e,
      t,
      r =
        (this && this.__classPrivateFieldSet) ||
        function (e, t, r, i, n) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !n)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        },
      i =
        (this && this.__classPrivateFieldGet) ||
        function (e, t, r, i) {
          if ("a" === r && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : t.get(e);
        },
      n = (function () {
        function t(t) {
          e.set(this, 0), r(this, e, 2 * t, "f");
        }
        return (
          (t.prototype.sum = function (t) {
            return t + i(this, e, "f");
          }),
          t
        );
      })();
    e = new WeakMap();
    var o = (function () {
      function e(e) {
        t.set(this, 0), r(this, t, 2 * e, "f");
      }
      return (
        (e.prototype.divide = function (e) {
          return e / i(this, t, "f");
        }),
        e
      );
    })();
    (t = new WeakMap()), console.log(new o(1.5).divide(new n(1).sum(1)));
  },
}[893]());
