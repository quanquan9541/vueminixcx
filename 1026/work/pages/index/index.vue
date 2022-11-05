<template>
  <view>
    <view>
      <form @submit="formSubmit" @reset="formReset">
        <view>
          <uni-section title="1.工作时间" subTitle="月工作时间" type="line" padding>
            <uni-easyinput name="days" v-model="value" errorMessage focus placeholder="请输入天数(参考值22)" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="2.月薪" subTitle="薪资+补贴" type="line" padding>
            <uni-easyinput name="money" errorMessage v-model="money" focus placeholder="请输入数字(参考值5000)" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="3.工作时长" subTitle="日工作时长=下班时间-上班时间" type="line" padding>
            <uni-easyinput name="hours" errorMessage v-model="hours" focus placeholder="请输入数字(参考值9)" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="4.通勤时间" subTitle="日通勤时长=上班通勤+下班通勤" type="line" padding>
            <uni-easyinput name="commute" errorMessage v-model="commute" focus placeholder="请输入数字(参考值:3)"
              @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="5.摸鱼时间" subTitle="摸鱼时长=上班摸鱼+吃饭时间+午休时间" type="line" padding>
            <uni-easyinput name="loaf" errorMessage v-model="loaf" focus placeholder="请输入数字(参考值:3)" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="6.学历" subTitle="最高学历" type="line" padding>
            <picker name="edu" @change="change" :value="index1" :range="range1">
              <view>请点击这里选择你的学历：{{range1[index1]}}</view>
            </picker>
          </uni-section>
        </view>
        <view>
          <uni-section title="7.工作环境" subTitle="工作环境" type="line" padding>
            <picker name="environment" @change="change2" :value="index2" :range="range2">
              <view>请点击这里选择你的工作环境：{{range2[index2]}}</view>
            </picker>
          </uni-section>
        </view>
        <view>
          <uni-section title="8.异性指数" subTitle="周围高颜值的异性" type="line" padding>
            <uni-easyinput name="sex" errorMessage v-model="sex" focus placeholder="请输入数字(参考值:3)" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="9.同性指数" subTitle="周围同性数量[每一个同性都是潜在的竞争者]" type="line" padding>
            <uni-easyinput name="Same" errorMessage v-model="Same" focus placeholder="请输入数字(参考值:3)" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="10.同事水平" subTitle="周围同事做事做人的水平" type="line" padding>
            <picker name="colleague" @change="change3" :value="index3" :range="range3">
              <view>请点击这里选择你的同事：{{range3[index3]}}</view>
            </picker>
          </uni-section>
        </view>

        <view>
          <uni-section title="11.职业门槛" subTitle="职业证书需求门槛" type="line" padding>
            <picker name="occupation" @change="change4" :value="index4" :range="range4">
              <view>请点击这里选择你的职业标准：{{range4[index4]}}</view>
            </picker>
          </uni-section>
        </view>
        <view>
          <uni-section title="12.特殊上班情况" subTitle="夜班要命,早班折磨人
          (非加班情况:早于9点上班OR晚于6点下班的都算非正常!)" type="line" padding>
            <picker name="special" @change="change5" :value="index5" :range="range5">
              <view>请点击这里选择你的上班特殊情况：{{range5[index5]}}</view>
            </picker>
          </uni-section>
        </view>

        <view class="wz" v-show="status">
          <text>低于0.8建议回家睡觉</text>
          <text>工作指数：{{count}}</text>
        </view>

        <!-- {{linshi}} //日志 -->
        <view class="bott">
          <button type="primary" form-type="submit">提交</button>
          <button type="warn" form-type="reset">重置</button>
        </view>
        <view>
          <!-- {{count}}//算式 -->
        </view>
        <!-- {{days}}//计算结果 -->
        <!-- {{linshi}} //日志 -->
      </form>
    </view>
  </view>
</template>

<script>
  export default {
    onShow: function() {
      uni.pageScrollTo({
        scrollTop: 0,
        // duration: 300
      });
      uni.showModal({
        title: '提示',
        content: '仅供娱乐',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });

    },
    data() {
      return {
        linshi: "1", //日志
        range1: ['专科及以下', '普通本科', '211/985本科', '普通硕士', '211/985硕士', '普通博士', '211/985博士'],
        index1: 1,
        range2: ['偏远地区', '工厂/户外', '普通工作环境', '体制'],
        index2: 2,
        range3: ['能力较差居多', '一般水平居多', '能力较强居多'],
        index3: 1,
        range4: ['无要求', '专业级要求', '熟练级要求', '专家级要求'],
        index4: 0,
        range5: ['夜班', '非正常上班时间', '正常作息'],
        index5: 2,
        count: "2",
        days: "",
        money: "",
        status: false
      }
    },
    methods: {
      change(e) { //学历
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.index1 = e.detail.value
      },
      change2(e) { //工作环境
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.index2 = e.detail.value
      },
      //同事水平
      change3(e) { //工作环境
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.index3 = e.detail.value
      },
      //职业门槛
      change4(e) { //工作环境
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.index4 = e.detail.value
      },
      //特殊上班时间
      change5(e) { //工作环境
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.index5 = e.detail.value
      },
      formReset() {
        this.status = false
      },
      formSubmit(e) { //日志输出
        console.log(e)
        this.linshi = e.detail.value //打印数组方便看
        let linshi = e.detail.value //正经捞数组
        this.days = linshi.days //打印数组某一项方便看
        let days = linshi.days //正经捞天数
        this.money = linshi.money //打印月薪
        let money = linshi.money //正经捞月薪
        let hours = linshi.hours //日工作时间
        let commute = linshi.commute //通勤时间
        let loaf = linshi.loaf //摸鱼时间
        let edu = linshi.edu //学历
        let environment = linshi.environment //工作环境
        let sex = linshi.sex //异性指数
        let Same = linshi.Same //同性指数
        let colleague = linshi.colleague //同事水平
        let occupation = linshi.occupation //职业门槛
        let special = linshi.special //特殊情况
        let count = ((Number(money) / Number(days)) * ((Number(environment) / 10) + 0.8) * ((Number(sex) / Number(
          Same)) + 0.9) * ((Number(colleague) / 10) + 0.9)) / (35 * ((Number(hours) + Number(commute)) - 0.5 * Number(
          loaf)) * ((Number(edu) / 5) + 0.8) * ((Number(occupation) / 10) + 1))
        this.count = count.toFixed(1)
        this.status = true
      }
    }
  }
</script>

<style>
  .text {
    font-size: 12px;
    color: #666;
    margin-top: 5px;
  }

  .uni-px-5 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .uni-pb-5 {
    padding-bottom: 10px;
  }

  .bott {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }

  .wz {
    height: 200px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-content: space-around; */
    text-align: center;
    align-items: center;
  }
</style>
