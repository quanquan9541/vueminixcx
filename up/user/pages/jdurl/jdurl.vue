<template>
  <view class="jdurlbox">
    <view class="input">
      <uni-easyinput v-model="jdvalue" placeholder="请输入链接" :styles="styles" :placeholderStyle="placeholderStyle"
        trim="both" suffixIcon="search" @iconClick="jdClick"></uni-easyinput>
    </view>
    <view class="history" v-if='!state'>
      <u-empty mode="history" icon="http://cdn.uviewui.com/uview/empty/history.png">
      </u-empty>
    </view>
    <view v-if='state'>
      <!-- ?v-if='state'? -->
      <view class="show" v-if='show'>
        <!--   v-if='show' -->
        <view class="img">
          <image class="image" style="width: 600rpx; height: 600rpx; background-color: #eeeeee;" mode="aspectFit"
            :src="redata.imgUrl" @error="imageError"></image>
        </view>
        <view class="text">
          <view class="title">{{redata.goodsName}}</view>
          <view class="content">价格：{{redata.unitPrice}}元</view>
          <view class="content">月销：{{redata.inOrderCount}}台</view>
        </view>
      </view>
      <view class="row" v-if='!show'>
        <u-skeleton rows="5" title loading></u-skeleton>
      </view>
    </view>
  </view>
</template>

<script>
  import md5 from 'node_modules/crypto-js/md5.js';
  import crypto from 'node_modules/crypto-js/crypto-js.js';
  export default {
    data() {

      return {
        state: false,
        show: false,
        jdvalue: '',
        redata: {},
        placeholderStyle: "color:#c0c3ff;font-size:14px",
        styles: {
          color: '#aa55ff',
          borderColor: '#ffaaff'
        }
      };
    },
    methods: {
      //判断字符串是否包含数字
      containsNumber(str) {
        return !!str.match(/\d/g)
      },
      //链接判断
      isUrl(str) {
        var url = new RegExp(
          '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
          'i');
        return url.test(str);
      },
      //放大镜点击
      jdClick() {
        if (!this.jdvalue) {
          // console.log('空值');
          uni.showLoading({
            mask: true,
            icon: 'error',
            title: '查询为空'
          });
          setTimeout(function() {
            uni.hideLoading();
          }, 2000);
          return
        }
        let urltime = uni.getStorageSync('url_time')
        if ((Date.now() - urltime) < 3000) {
          uni.showLoading({
            mask: true,
            title: '查询过于频繁'
          });
          setTimeout(function() {
            uni.hideLoading();
          }, 2000);
          return
        }
        if (!this.isUrl(this.jdvalue) || !this.containsNumber(this.jdvalue)) {
          uni.showLoading({
            mask: true,
            title: '链接错误'
          });
          setTimeout(function() {
            uni.hideLoading();
          }, 2000);
          return
        }
        this.state = true
        this.show = false
        let jdsuld = this.jdvalue.match(/\d+(\.\d+)?/g)[0]
        this.requst(jdsuld)
      },
      //请求京东转化链接
      urlchenge(e) {
        let app_secret = "859a28687efe4f4eb0f88f5669e869f6";
        let app_key = "8abdd6bc4b34757b9793f48aba4883d5";
        let timestamp = this.dateFormat(new Date());;
        let format = 'json';
        let v = '1.0';
        let sign_method = 'md5';
        // console.log('链接转化');
        let siteId = 4101001220
        let method = "jd.union.open.promotion.common.get"
        let materialId = e
        let buy_param_json = {
          "end_date": null,
          "optional_fields": null,
          "order_state": "WAIT_SELLER_STOCK_OUT",
          "start_date": null,
          'promotionCodeReq': {
            'materialId': materialId,
            'siteId': siteId,
          }

        }
        let urldata = app_secret + '360buy_param_json' + JSON.stringify(buy_param_json) + 'app_key' + app_key +
          'method' +
          method +
          'timestamp' + timestamp + 'v' + v + app_secret
        // console.log("url", urldata);
        let sign = this.sign(urldata);
        // console.log('url转化md5加密', sign);
        let url = 'https://api.jd.com/routerjson?app_key=' + app_key + '&method=' + method + '&v=' + v + '&sign=' +
          sign + '&360buy_param_json=' + JSON.stringify(buy_param_json) +
          '&timestamp=' + timestamp
        // console.log('url', url);
        uni.request({
          url: url,
          data: {

          },
          success: (res) => {
            // console.log(res);
            let data = JSON.parse(res.data.jd_union_open_promotion_common_get_responce
              .getResult)
            // console.log('转化的链接', data.data.clickURL);
            this.Copy(data.data.clickURL)
            let time = Date.now()
            uni.setStorageSync('url_time', time) //设置时间缓存
            this.show = true //骨架瓶消失
          }
        })
      },
      //请求京东详情
      requst(jdsuld) {
        let app_secret = "859a28687efe4f4eb0f88f5669e869f6";
        let app_key = "8abdd6bc4b34757b9793f48aba4883d5";
        let timestamp = this.dateFormat(new Date());;
        let format = 'json';
        let v = '1.0';
        let sign_method = 'md5';
        console.log('请求');
        let method = "jd.union.open.goods.promotiongoodsinfo.query"
        let skuIds = jdsuld
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
        // console.log(data);
        let sign = this.sign(data);
        // console.log('md5加密', sign);

        let url = 'https://api.jd.com/routerjson?app_key=' + app_key + '&method=' + method + '&v=' + v + '&sign=' +
          sign + '&360buy_param_json=' + JSON.stringify(buy_param_json) +
          '&timestamp=' + timestamp
        // console.log('url', url);
        uni.request({
          url: url,
          data: {

          },
          success: (res) => {
            console.log(res);


            let data = JSON.parse(res.data.jd_union_open_goods_promotiongoodsinfo_query_responce.queryResult)
            if (!data.data) {
              uni.showLoading({
                mask: true,
                title: '无效链接'
              });
              setTimeout(function() {
                uni.hideLoading();
              }, 2500);
              return

            }
            this.redata = data.data[0]
            console.log(this.redata);
            //调用链接转化
            this.urlchenge(data.data[0].materialUrl)
          }
        })
      },
      ////签名算法
      md5(m) {
        return md5(m).toString(crypto.enc.Hex)
      }, //md5加密
      sign(e) {
        return this.md5(e).toUpperCase()
      },
      // //时间格式化
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
      //复制窗
      Copy(e) {
        uni.setClipboardData({
          data: e,
          success: function(res) {
            uni.showToast({
              title: '查询成功',
            });
          }
        });
      },
    }
  }
</script>

<style lang="scss">
  .jdurlbox {
    padding: 20rpx;
    margin: 20rpx;

    .history {
      margin: 400rpx 0;
    }

    .row {
      margin: 10rpx;
    }

    .input {
      margin: 10rpx;
    }

    .show {
      .img {
        // border: 1px solid;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .image {
          // border: #ffaa00 solid 1px;
        }
      }

      .text {
        .title {
          margin: 20rpx 0;
          font-family: '华文细黑';
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          color: #7c90a8;
          text-overflow: clip;
          text-align: left;
          word-wrap: normal;
          text-shadow: 0px 1px 1px #c4c4c4
        }

        .content {
          margin: 20rpx 0;
          font-family: '华文细黑';
          font-style: normal;
          font-weight: normal;
          font-size: 9px;
          color: #a39aad;
          white-space: pre-line;
          text-overflow: ellipsis;
          text-align: center;
          word-wrap: break-word;
          text-shadow: 0px 1px 1px #c4c4c4
        }
      }
    }

  }
</style>
