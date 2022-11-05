<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validate-trigger="submit" err-show-type="toast">
      <uni-forms-item name="money" label="月薪">
        <uni-easyinput placeholder="请输入你的工资" type="number" v-model="formData.money"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="date" label="月工作">
        <uni-easyinput placeholder="请输入月工作天数" type="number" v-model="formData.date"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="time" label="工时">
        <uni-easyinput placeholder="请输入日工作时长" type="number" v-model="formData.time"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="gowork" label="摸鱼时长">
        <uni-easyinput placeholder="摸鱼时长=吃饭+午休+偷懒" type="number" v-model="formData.gowork"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="education" label="学历">
        <uni-data-checkbox v-model="formData.education" :localdata="formOptions.education_localdata">
        </uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="environment" label="工作环境">
        <uni-data-checkbox v-model="formData.environment" :localdata="formOptions.environment_localdata">
        </uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="sex" label="异性">
        <uni-easyinput placeholder="好看的异性数量" type="number" v-model="formData.sex"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ssex" label="同性">
        <uni-easyinput placeholder="所有同性" type="number" v-model="formData.ssex"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="colleague" label="同事质量">
        <uni-data-checkbox v-model="formData.colleague" :localdata="formOptions.colleague_localdata">
        </uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="occupation" label="职业资格">
        <uni-data-checkbox v-model="formData.occupation" :localdata="formOptions.occupation_localdata">
        </uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="special" label="工作特殊">
        <uni-data-checkbox v-model="formData.special" :localdata="formOptions.special_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
      <view>总和：{{sum}}</view>
      <button type="primary" class="uni-button" @click="sss">计算</button>
    </uni-forms>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {

    }
  }
</script>

<style>
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

  .uni-container {
    padding: 15px;
  }

  .uni-input-border,
  .uni-textarea-border {
    width: 100%;
    font-size: 14px;
    color: #666;
    border: 1px #e5e5e5 solid;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .uni-input-border {
    padding: 0 10px;
    height: 35px;

  }

  .uni-textarea-border {
    padding: 10px;
    height: 80px;
  }

  .uni-button-group {
    margin-top: 50px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
  }

  .uni-button {
    width: 184px;
  }
</style>
