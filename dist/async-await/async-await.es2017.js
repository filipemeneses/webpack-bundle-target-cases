(async (e) => {
  await new Promise((o) => setTimeout(o, e));
})(1).then(console.log);
