// terser size before prettier: 692
({
  28: function () {
    var t,
      e,
      s,
      i,
      a =
        (this && this.__classPrivateFieldSet) ||
        function (t, e, s, i, a) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !a : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? a.call(t, s) : a ? (a.value = s) : e.set(t, s), s;
        };
    (t = new WeakMap()),
      (e = new WeakMap()),
      (s = new WeakMap()),
      (i = new WeakMap()),
      new (class {
        constructor(s, i) {
          t.set(this, 0),
            e.set(this, void 0),
            a(this, t, s, "f"),
            a(this, e, i, "f");
        }
      })(10, 10),
      new (class {
        constructor(t, e) {
          s.set(this, 0),
            i.set(this, void 0),
            a(this, s, t, "f"),
            a(this, i, e, "f");
        }
      })(10, 10);
  },
}[28]());
