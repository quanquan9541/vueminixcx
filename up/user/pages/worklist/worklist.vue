<template>
  <view class="worklist">
    <view class="operate">
      <view class="button" v-for="(item,index) in buttonlist" :key="index">
        <!-- v-if="index==5 ? false :true" -->
        <button :type="item.type" size="mini" @click="backnum(item.url,item.status)">{{item.text}}</button>
      </view>
    </view>
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
        periphery: "",
        buttonlist: [{
            text: "排行榜",
            type: "primary",
            url: "./listw"
          },
          {
            text: "转图",
            type: "default",
            url: false
          },
          {
            text: "编辑",
            type: "warn",
            url: "./work",
            status: true
          }
        ]
      };
    },
    onLoad(e) {
      //启动时判断参数
      if (!e.id) {
        this.errfun()
        return
      }
      // console.log(e)
      this.id = e.id
      uni.showLoading({
        title: '加载中',
        mask: true
      });
      this.getdata()
    },
    onShow() {
      uni.$u.mpShare.title = '工作计算器';
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
      //跳转
      backnum(e, p) {
        if (!e) return
        uni.navigateTo({
          url: p ? e + "?id=" + this.id : e,
        })
      },
      //查询数据
      async getdata() {
        let id = this.id
        // console.log("拿下id", id)
        const db = uniCloud.database();
        await db.collection("worklist").where(`_id == '${id}'`
          // {_id: id} 常规写法 上面为jql写法 
        ).get().then(res => {
          // res 为数据库查询结果
          // console.log("成功:", res)
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .operate {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 650rpx;

      .button {
        // border: 1px red solid;

        button {
          line-height: 60rpx;
          width: 120rpx;
          height: 60rpx;
          font-size: 18rpx
        }
      }
    }

    .dev {
      margin-top: 100rpx;
      margin-bottom: 10rpx;
      width: 100%;
    }
  }
</style>