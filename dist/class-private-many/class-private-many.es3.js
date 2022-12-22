({
  28: function () {
    var e,
      t,
      i,
      a,
      n =
        (this && this.__classPrivateFieldSet) ||
        function (e, t, i, a, n) {
          if ("m" === a) throw new TypeError("Private method is not writable");
          if ("a" === a && !n)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? n.call(e, i) : n ? (n.value = i) : t.set(e, i), i;
        },
      r = function (i, a) {
        e.set(this, 0),
          t.set(this, void 0),
          n(this, e, i, "f"),
          n(this, t, a, "f");
      };
    (e = new WeakMap()), (t = new WeakMap());
    var s = function (e, t) {
      i.set(this, 0),
        a.set(this, void 0),
        n(this, i, e, "f"),
        n(this, a, t, "f");
    };
    (i = new WeakMap()), (a = new WeakMap()), new r(10, 10), new s(10, 10);
  },
}[28]());
