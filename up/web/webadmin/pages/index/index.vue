<template>
  <view class="content">
    <button @click="requst">请求发动</button>
    <button @click="url">链接判断</button>
    {{mofa}}
    <image class="logo" src="/static/logo.png" @click="click"></image>
    <view class="text-area">
      <text class="title">{{title}}</text>
      <button @click="goadd">123</button>
    </view>
  </view>
</template>

<script>
  import md5 from 'node_modules/crypto-js/md5.js'
  import crypto from 'node_modules/crypto-js/crypto-js.js'
  export default {
    data() {
      return {
        mofa: '',
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {
      //链接判断
      url() {
        let url = 'https://uniapp.dcloud.net.cn/component/image.html'
        let data = this.isUrl(url)
        console.log('链接判断',
          data);
      },
      isUrl(str) {
        var url = new RegExp(
          '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
          'i');
        return url.test(str);
      },

      //京东
      requst() {
        console.log('请求');
        let method = "jd.union.open.goods.promotiongoodsinfo.query"
        let app_secret = "859a28687efe4f4eb0f88f5669e869f6"
        let app_key = "8abdd6bc4b34757b9793f48aba4883d5"
        let timestamp = this.dateFormat(new Date());
        let format = 'json'
        let v = '1.0'
        let sign_method = 'md5'
        let skuIds = '10066663722631'
        let buy_param_json = {
          "end_date": null,
          "optional_fields": null,
          "order_state": "WAIT_SELLER_STOCK_OUT",
          "start_date": null,
          'skuIds': skuIds
        }
        let data = app_secret + '360buy_param_json' + JSON.stringify(buy_param_json) + 'app_key' + app_key +
          'method' +
          method +
          'timestamp' + timestamp + 'v' + v + app_secret
        console.log(data);
        let sign = this.sign(data);
        console.log('md5加密', sign);

        let url = 'https://api.jd.com/routerjson?app_key=' + app_key + '&method=' + method + '&v=' + v + '&sign=' +
          sign + '&360buy_param_json=' + JSON.stringify(buy_param_json) +
          '&timestamp=' + timestamp
        console.log('url', url);
        uni.request({
          url: url,
          data: {

          },
          success: (res) => {
            // console.log(res);
            let data = JSON.parse(res.data.jd_union_open_goods_promotiongoodsinfo_query_responce.queryResult)
            console.log(data);
            this.mofa = data
          }
        })
      },
      //签名算法
      md5(m) {
        return md5(m).toString(crypto.enc.Hex)
      }, //md5加密
      sign(e) {
        return this.md5(e).toUpperCase()
      },
      //时间格式化
      dateFormat(date, format = 'yyyy-MM-dd hh:mm:ss') {
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
      },
      //
      goadd() {
        uni.navigateTo({
          url: '/pages/index/add/add'
        })
      },

      click() {
        uni.navigateTo({
          url: "/pages/cpu/cpu_manufacturer"
        })
      }
    }
  }
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
