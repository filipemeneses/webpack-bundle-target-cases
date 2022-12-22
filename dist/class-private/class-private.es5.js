({
  118: function () {
    var e,
      t,
      i =
        (this && this.__classPrivateFieldSet) ||
        function (e, t, i, r, a) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? a.call(e, i) : a ? (a.value = i) : t.set(e, i), i;
        },
      r = function (r, a) {
        e.set(this, 0),
          t.set(this, void 0),
          i(this, e, r, "f"),
          i(this, t, a, "f");
      };
    (e = new WeakMap()), (t = new WeakMap()), new r(10, 10);
  },
}[118]());
