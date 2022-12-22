(() => {
  var e;
  ((e = 1),
  new Promise(function (n) {
    return setTimeout(n, e);
  })).then(console.log);
})();
