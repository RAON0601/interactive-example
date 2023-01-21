export const debounce = (cb: any, limit = 100) => {
  let timeout: any;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, limit);
  };
};
