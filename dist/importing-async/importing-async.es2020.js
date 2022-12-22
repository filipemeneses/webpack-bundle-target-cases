// terser size before prettier: 3068
(() => {
  var e,
    t,
    r,
    o,
    n = {},
    i = {};
  function a(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var r = (i[e] = { exports: {} });
    return n[e](r, r.exports, a), r.exports;
  }
  (a.m = n),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (r, o) {
      if ((1 & o && (r = this(r)), 8 & o)) return r;
      if ("object" == typeof r && r) {
        if (4 & o && r.__esModule) return r;
        if (16 & o && "function" == typeof r.then) return r;
      }
      var n = Object.create(null);
      a.r(n);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var u = 2 & o && r; "object" == typeof u && !~e.indexOf(u); u = t(u))
        Object.getOwnPropertyNames(u).forEach((e) => (i[e] = () => r[e]));
      return (i.default = () => r), a.d(n, i), n;
    }),
    (a.d = (e, t) => {
      for (var r in t)
        a.o(t, r) &&
          !a.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, r) => (a.f[r](e, t), t), []))),
    (a.u = (e) => e + "/" + e + ".es2020.js"),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r = {}),
    (o = "webpack-studies:"),
    (a.l = (e, t, n, i) => {
      if (r[e]) r[e].push(t);
      else {
        var u, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), s = 0;
            s < l.length;
            s++
          ) {
            var p = l[s];
            if (
              p.getAttribute("src") == e ||
              p.getAttribute("data-webpack") == o + n
            ) {
              u = p;
              break;
            }
          }
        u ||
          ((c = !0),
          ((u = document.createElement("script")).charset = "utf-8"),
          (u.timeout = 120),
          a.nc && u.setAttribute("nonce", a.nc),
          u.setAttribute("data-webpack", o + n),
          (u.src = e)),
          (r[e] = [t]);
        var f = (t, o) => {
            (u.onerror = u.onload = null), clearTimeout(d);
            var n = r[e];
            if (
              (delete r[e],
              u.parentNode && u.parentNode.removeChild(u),
              n && n.forEach((e) => e(o)),
              t)
            )
              return t(o);
          },
          d = setTimeout(
            f.bind(null, void 0, { type: "timeout", target: u }),
            12e4
          );
        (u.onerror = f.bind(null, u.onerror)),
          (u.onload = f.bind(null, u.onload)),
          c && document.head.appendChild(u);
      }
    }),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e + "../");
    })(),
    (() => {
      var e = { 191: 0 };
      a.f.j = (t, r) => {
        var o = a.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var n = new Promise((r, n) => (o = e[t] = [r, n]));
            r.push((o[2] = n));
            var i = a.p + a.u(t),
              u = new Error();
            a.l(
              i,
              (r) => {
                if (a.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (u.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + i + ")"),
                    (u.name = "ChunkLoadError"),
                    (u.type = n),
                    (u.request = i),
                    o[1](u);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var o,
            n,
            [i, u, c] = r,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in u) a.o(u, o) && (a.m[o] = u[o]);
            if (c) c(a);
          }
          for (t && t(r); l < i.length; l++)
            (n = i[l]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
        },
        r = (self.webpackChunkwebpack_studies =
          self.webpackChunkwebpack_studies || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    a.e(683).then(a.t.bind(a, 683, 19));
})();
