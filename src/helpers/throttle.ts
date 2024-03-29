// this function is used to call a function only once in delayed time
// example: it limits the API calls in every keyboard stroke

export default function throttle<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let lastTime = 0;

  return function (this: any, ...args: any[]) {
    const now = new Date().getTime();

    if (now - lastTime >= delay) {
      callback.apply(this, args);
      lastTime = now;
    }
  } as T;
}
