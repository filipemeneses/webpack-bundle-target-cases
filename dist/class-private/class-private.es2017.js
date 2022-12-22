// terser size before prettier: 552
({
  118() {
    var e,
      t,
      r =
        (this && this.__classPrivateFieldSet) ||
        function (e, t, r, a, i) {
          if ("m" === a) throw new TypeError("Private method is not writable");
          if ("a" === a && !i)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
        };
    (e = new WeakMap()),
      (t = new WeakMap()),
      new (class {
        constructor(a, i) {
          e.set(this, 0),
            t.set(this, void 0),
            r(this, e, a, "f"),
            r(this, t, i, "f");
        }
      })(10, 10);
  },
}[118]());
