const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

wait(1).then(console.log);
