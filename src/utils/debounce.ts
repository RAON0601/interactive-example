export const debounce = (cb: Function, limit = 100) => {
  let timeout: any;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(args);
    }, limit);
  };
};
