<template>
  <view class="worklist">
    <!-- {{workdata}} -->
    <view class="dev">
      <uni-card title="工作得分" class="box">
        <uni-list>
          <uni-list-item title="综合分" :rightText="workdata" />
          <uni-list-item title="金钱分" :rightText="wages" />
          <uni-list-item title="时间分" :rightText="time" />
          <uni-list-item title="资质分" :rightText="Qualifications" />
          <uni-list-item title="人文分" :rightText="humanity" />
          <uni-list-item title="环境分" :rightText="periphery" />
        </uni-list>
      </uni-card>
      <u-button @click="backnum" type="primary" :plain="true" color='#aaaaff' :hairline="true" shape="circle"
        text="排行榜">
      </u-button>
    </view>
  </view>
</template>

<script>
  let id;
  export default {
    data() {
      return {
        id: '',
        workdata1: "",
        workdata: "",
        wages: "",
        time: "",
        Qualifications: "",
        humanity: "",
        periphery: ""
      };
    },
    onLoad(e) {
      //启动时判断参数
      if (!e.id) {
        this.errfun()
        return
      }

      console.log(e)
      this.id = e.id
      uni.showLoading({
        title: '加载中',
        mask: true
      });
      this.getdata()
    },
    onShow() {

    },
    methods: {
      //错误判断
      errfun() {
        uni.showToast({
          icon: 'error',
          title: "参数错误"
        })
        setTimeout(() => {
          uni.reLaunch({
            url: "/pages/index/index"
          })
        }, 1000)
      },
      //跳转回排行榜
      backnum() {
        uni.reLaunch({
          url: '/pages/worklist/listw',
        })
      },
      //查询数据
      async getdata() {
        let id = this.id
        console.log("拿下id", id)
        const db = uniCloud.database();
        await db.collection("worklist").where(`_id == '${id}'`
          // {_id: id} 常规写法 上面为jql写法 
        ).get().then(res => {
          // res 为数据库查询结果
          console.log("成功:", res)
          this.workdata1 = res.result.data
          let workdata1 = res.result.data
          this.workdata = workdata1[0].workdata.toString()
          this.wages = (workdata1[0].wages / 10).toString()
          this.time = workdata1[0].time.toString()
          this.Qualifications = workdata1[0].Qualifications.toString()
          this.humanity = workdata1[0].humanity.toString()
          this.periphery = workdata1[0].periphery.toString()
          uni.hideLoading();
        }).catch(err => {
          console.log(err.errcode); // 打印错误码
          console.log(err.errMsg); // 打印错误内容
        })
      }
    },

  }
</script>

<style lang="scss" scoped>
  .worklist {
    padding: 15rpx;
    margin: 10rpx;

    .dev {
      margin-bottom: 10rpx;
      border-bottom: 1rpx #efefef solid;

      .box {
        .text {
          font-size: 36rpx;
        }
      }
    }


  }
</style>
