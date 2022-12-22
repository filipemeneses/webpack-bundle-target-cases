(() => {
  var n = (function () {
    function n() {
      this.mount();
    }
    return (
      (n.prototype.mount = function () {
        document.querySelector("canvas").getContext("2d").beginPath();
      }),
      n
    );
  })();
  window.MyClass = new n();
})();
