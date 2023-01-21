export const doOnce = (fn: Function) => {
  let done = false;

  return (...args: any) => {
    if (!done) {
      done = true;
      console.log(`호출 전 done: ${done}`);
      fn(...args);
      done = false;
      console.log(`호출 후 done: ${done}`);
    }
  };
};
