// terser size before prettier: 675
({
  28() {
    var e,
      t,
      i,
      a,
      r =
        (this && this.__classPrivateFieldSet) ||
        function (e, t, i, a, r) {
          if ("m" === a) throw new TypeError("Private method is not writable");
          if ("a" === a && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? r.call(e, i) : r ? (r.value = i) : t.set(e, i), i;
        },
      s = function (i, a) {
        e.set(this, 0),
          t.set(this, void 0),
          r(this, e, i, "f"),
          r(this, t, a, "f");
      };
    (e = new WeakMap()), (t = new WeakMap());
    var n = function (e, t) {
      i.set(this, 0),
        a.set(this, void 0),
        r(this, i, e, "f"),
        r(this, a, t, "f");
    };
    (i = new WeakMap()), (a = new WeakMap()), new s(10, 10), new n(10, 10);
  },
}[28]());
