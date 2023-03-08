import md5 from 'node_modules/crypto-js/md5.js';
import crypto from 'node_modules/crypto-js/crypto-js.js';
//签名算法
export function Md5(m) {
  return md5(m).toString(crypto.enc.Hex)
};
//md5加密
export function sign(e) {
  return Md5(e).toUpperCase()
};
//组合数据
export function md5data(e) {
  const urldata = e.app_secret + '360buy_param_json' + JSON.stringify(e.buy_param_json) + 'app_key' + e
    .app_key +
    'method' +
    e.method +
    'timestamp' + e.timestamp + 'v' + e.v + e.app_secret

  const url = 'https://api.jd.com/routerjson?app_key=' + e.app_key + '&method=' + e.method + '&v=' + e.v + '&sign=' +
    sign(urldata) + '&360buy_param_json=' + JSON.stringify(e.buy_param_json) +
    '&timestamp=' + e.timestamp
  return url
};
//获取转化链接
export function urlchenge(method, jdurl) {
  const urlchengedata = {
    app_secret: "859a28687efe4f4eb0f88f5669e869f6",
    app_key: "8abdd6bc4b34757b9793f48aba4883d5",
    timestamp: dateFormat(new Date()),
    format: 'json',
    v: '1.0',
    sign_method: 'md5',
    method: method,
    siteId: 4101001220,
    materialId: jdurl,
    buy_param_json: {
      "end_date": null,
      "optional_fields": null,
      "order_state": "WAIT_SELLER_STOCK_OUT",
      "start_date": null,
      'promotionCodeReq': {
        'materialId': jdurl,
        'siteId': 4101001220,
      }
    },
  }
  return md5data(urlchengedata)
};
//获取详情数据
export function jddatalist(jdsuld) {
  const jddatalistdata = {
    app_secret: "859a28687efe4f4eb0f88f5669e869f6",
    app_key: "8abdd6bc4b34757b9793f48aba4883d5",
    timestamp: dateFormat(new Date()),
    format: 'json',
    v: '1.0',
    sign_method: 'md5',
    method: "jd.union.open.goods.promotiongoodsinfo.query",
    skuIds: jdsuld,
    buy_param_json: {
      "end_date": null,
      "optional_fields": null,
      "order_state": "WAIT_SELLER_STOCK_OUT",
      "start_date": null,
      'skuIds': jdsuld
    }
  }
  return md5data(jddatalistdata)
};
//时间格式化
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
