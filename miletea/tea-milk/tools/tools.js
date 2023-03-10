//防抖函数
/**
 * @param {Object} fn 需要防抖的函数
 * @param {Object} wait 等待时间
 * @param {Object} immediate  true 执行首次 false 执行尾操作
 */
export function debounce(fn, wait = 500, immediate = false) {
  let timeout; // 局部全局变量
  return function(...args) {
    let context = this;
    if (timeout) clearTimeout(timeout); // 清除计时器，但是timeout本身还在，只是不会在执行

    if (immediate) { // 总是执行第一次操作
      let callNow = !timeout; // 第一次为true
      // 多次操作，timeout初始化，多次触发只有当wait等待时间结束timeout才为空
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      // 第一次为true, 执行
      if (callNow) fn.apply(context, args);
    } else { // 总是执行最后一次操作
      timeout = setTimeout(function() {
        fn.apply(context, args);
      }, wait);
    }
  };
}
