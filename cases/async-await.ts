const wait = async (ms: number) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};

wait(1).then(console.log);
