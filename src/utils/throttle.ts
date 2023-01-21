export const throttle = (cb: Function, limit = 100) => {
  let wating = false;
  return () => {
    if (!wating) {
      cb(this);
      wating = true;
      setTimeout(() => {
        wating = false;
      }, limit);
    }
  };
};

export const _requestAnimationFrame = (
  cb: any,
  dismissCondition = () => false,
  tirggerCondition = () => true
) => {
  let flag = false;

  return () => {
    if (flag) {
      return;
    }

    flag = true;

    return requestAnimationFrame(() => {
      if (dismissCondition()) {
        flag = false;
        return;
      }

      if (tirggerCondition()) {
        flag = true;
        cb();
        return;
      }
    });
  };
};
