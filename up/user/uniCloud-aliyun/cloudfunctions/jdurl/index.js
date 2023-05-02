'use strict 京东url云函数 暂时没用';

exports.main = () => {
  let data;
  uni.request({
    url: "https://api.jd.com/routerjson?access_token=&app_key=108cc81dd178e9da057aa39d789aec03&method=jd.union.open.goods.bigfield.query&v=1.0&sign=8F72C3E326C43600434DD570B1285D40&360buy_param_json=%7B%22goodsReq%22%3A%7B%22skuIds%22%3A%5B10072903964374%5D%7D%7D&timestamp=2023-05-01+18%3A41%3A13.109%2B0800",
    success: (res) => {
      data = res
    }
  })

  //返回数据给客户端
  return data
};