// terser size before prettier: 561
({
  118: function () {
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
        };
    (e = new WeakMap()),
      (t = new WeakMap()),
      new (class {
        constructor(i, a) {
          e.set(this, 0),
            t.set(this, void 0),
            r(this, e, i, "f"),
            r(this, t, a, "f");
        }
      })(10, 10);
  },
}[118]());
