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

//时间格式化
/**
 * @param {object} date 输入时间
 * 
 */
export function dateFormat(date, format = 'yyyy-MM-dd hh:mm:ss') {
  if (typeof date === 'string') {
    return date
  }
  let d = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    s: date.getMilliseconds()

  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

  }
  for (let i in d) {
    if (new RegExp('(' + i + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? d[i] : ('00' + d[i]).substr(('' + d[i])
        .length));
    }
  }
  return format;
}
