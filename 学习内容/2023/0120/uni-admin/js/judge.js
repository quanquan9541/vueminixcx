//判断文件
//提示
export function notice(e, ic) {
  uni.showToast({
    title: e,
    mask: true,
    icon: ic,
    duration: 2000
  });
}
//判断空
export function empty(e) {
  if (e) {
    return true
  } else {
    return false
  }
};
//判断时间间隔
let timeTandard = 0
export function interval(e) {
  if (new Date() - timeTandard > e) {
    timeTandard = new Date()
    return true
  } else {
    return false
  }
};
//判断字符串是否包含数字
export function containsNumber(str) {
  return !!str.match(/\d/g)
};
//判断是否为链接格式
export function isUrl(str) {
  var url = new RegExp(
    '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    'i');
  return url.test(str);
}
