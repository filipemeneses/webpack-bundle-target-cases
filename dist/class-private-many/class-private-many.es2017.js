// terser size before prettier: 683
({
  28() {
    var e,
      t,
      s,
      a,
      i =
        (this && this.__classPrivateFieldSet) ||
        function (e, t, s, a, i) {
          if ("m" === a) throw new TypeError("Private method is not writable");
          if ("a" === a && !i)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? i.call(e, s) : i ? (i.value = s) : t.set(e, s), s;
        };
    (e = new WeakMap()),
      (t = new WeakMap()),
      (s = new WeakMap()),
      (a = new WeakMap()),
      new (class {
        constructor(s, a) {
          e.set(this, 0),
            t.set(this, void 0),
            i(this, e, s, "f"),
            i(this, t, a, "f");
        }
      })(10, 10),
      new (class {
        constructor(e, t) {
          s.set(this, 0),
            a.set(this, void 0),
            i(this, s, e, "f"),
            i(this, a, t, "f");
        }
      })(10, 10);
  },
}[28]());
