<template>
  <view>
    <view>
      <form @submit="formSubmit" @reset="formReset">
        <view>
          <uni-section title="工作时间" subTitle="月工作时间" type="line" padding>
            <uni-easyinput name="days" errorMessage v-model="days" focus placeholder="请输入天数" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="月薪" subTitle="薪资+补贴" type="line" padding>
            <uni-easyinput name="money" errorMessage v-model="money" focus placeholder="请输入数字" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="工作时长" subTitle="日工作时长=下班时间-上班时间" type="line" padding>
            <uni-easyinput name="hours" errorMessage v-model="hours" focus placeholder="请输入数字" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="通勤时间" subTitle="日通勤时长=上班通勤+下班通勤" type="line" padding>
            <uni-easyinput name="commute" errorMessage v-model="commute" focus placeholder="请输入数字" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="摸鱼时间" subTitle="摸鱼时长=上班摸鱼+吃饭时间+午休时间" type="line" padding>
            <uni-easyinput name="
loaf" errorMessage v-model="
loaf" focus placeholder="请输入数字" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="学历" subTitle="最高学历" type="line" padding>
            <picker name="edu" @change="change" :value="index1" :range="range1">
              <view>请点击这里选择你的学历：{{range1[index1]}}</view>
            </picker>
          </uni-section>
        </view>
        <view>
          <uni-section title="工作环境" subTitle="工作环境" type="line" padding>
            <picker name="environment" @change="change2" :value="index2" :range="range2">
              <view>请点击这里选择你的工作环境：{{range2[index2]}}</view>
            </picker>
          </uni-section>
        </view>
        <view>
          <uni-section title="异性指数" subTitle="周围高颜值的异性" type="line" padding>
            <uni-easyinput name="sex" errorMessage v-model="sex" focus placeholder="请输入数字" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="同性指数" subTitle="周围异性数量[每一个同性都是潜在的竞争者]" type="line" padding>
            <uni-easyinput name="Same" errorMessage v-model="Same" focus placeholder="请输入数字" @input="input">
            </uni-easyinput>
          </uni-section>
        </view>
        <view>
          <uni-section title="同事水平" subTitle="周围同事做事做人的水平" type="line" padding>
            <picker name="colleague" @change="change3" :value="index3" :range="range3">
              <view>请点击这里选择你的同事：{{range3[index3]}}</view>
            </picker>
          </uni-section>
        </view>

        <view>
          <uni-section title="职业门槛" subTitle="职业证书需求门槛" type="line" padding>
            <picker name="occupation" @change="change4" :value="index4" :range="range4">
              <view>请点击这里选择你的职业标准：{{range4[index4]}}</view>
            </picker>
          </uni-section>
        </view>
        <view>
          <uni-section title="特殊上班情况" subTitle="夜班要命,早班折磨人" type="line" padding>
            <view class="uni-px-5">
              <view class="text">单选选中：{{JSON.stringify(radio3)}}</view>
              <uni-data-checkbox name="radio3" mode="tag" v-model="radio3" :localdata="special"></uni-data-checkbox>
            </view>
          </uni-section>
        </view>
        <!-- {{linshi}} //日志 -->
        <view class="uni-btn-v">
          <button type="primary" form-type="submit">提交</button>
        </view>
        <view></view>
        <view>
          <button type="warn" form-type="reset">重置</button>
        </view>

        {{linshi}} //日志
      </form>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        linshi: "1", //日志
        range1: ['专科及以下', '普通本科', '211/985本科', '普通硕士', '211/985硕士', '普通博士', '211/985博士'],
        index1: 1,
        range2: ['偏远地区', '工厂/户外', '普通工作环境', '体制'],
        index2: 2,
        range3: ['能力较差居多', '一般水平居多', '能力较强居多'],
        index3: 1,
        range4: ['无要求', '一般要求', '专业级要求', '熟练级要求'],
        index4: 0,
        radio3: 0,
        special: [{
          text: '夜班',
          value: 0
        }, {
          text: '早8点半前上班',
          value: 1
        }, {
          text: '正常',
          value: 2
        }],
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
      formSubmit(e) { //日志输出
        console.log(e)
        this.linshi = e.detail.value

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
</style>
