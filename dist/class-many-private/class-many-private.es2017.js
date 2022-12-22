// terser size before prettier: 1001
({
  893() {
    var e,
      t,
      r =
        (this && this.__classPrivateFieldSet) ||
        function (e, t, r, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r;
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
        };
    (e = new WeakMap()),
      (t = new WeakMap()),
      console.log(
        new (class {
          constructor(e) {
            t.set(this, 0), r(this, t, 2 * e, "f");
          }
          divide(e) {
            return e / i(this, t, "f");
          }
        })(1.5).divide(
          new (class {
            constructor(t) {
              e.set(this, 0), r(this, e, 2 * t, "f");
            }
            sum(t) {
              return t + i(this, e, "f");
            }
          })(1).sum(1)
        )
      );
  },
}[893]());
