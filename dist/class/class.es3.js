new ((function () {
  function t() {
    this.mount();
  }
  return (
    (t.prototype.mount = function () {
      document.querySelector("canvas").getContext("2d").beginPath();
    }),
    t
  );
})())().mount();
