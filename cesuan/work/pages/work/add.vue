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
    </uni-forms>
  </view>
</template>

<script>
  import {
    validator
  } from '../../js_sdk/validator/work.js';

  const db = uniCloud.database();
  const dbCollectionName = 'work';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.indexOf(key) > -1) {
        result[key] = validator[key]
      }
    }
    return result
  }



  export default {
    data() {
      let formData = {
        "money": null,
        "date": null,
        "time": null,
        "gowork": null,
        "education": 1,
        "environment": 1,
        "sex": null,
        "ssex": null,
        "colleague": 1,
        "occupation": 1,
        "special": 1
      }
      return {
        formData,
        formOptions: {
          "education_localdata": [{
              "text": "专科及以下",
              "value": 0.8
            },
            {
              "text": "本科",
              "value": 1
            },
            {
              "text": "211/985本科",
              "value": 1.2
            },
            {
              "text": "硕士研究生",
              "value": 1.4
            },
            {
              "text": "211/985硕士",
              "value": 1.6
            },
            {
              "text": "博士研究生",
              "value": 1.8
            },
            {
              "text": "211/985研究生",
              "value": 2
            }
          ],
          "environment_localdata": [{
              "text": "偏僻地区",
              "value": 0.8
            },
            {
              "text": "工厂/户外",
              "value": 0.9
            },
            {
              "text": "普通办公室",
              "value": 1
            },
            {
              "text": "体制",
              "value": 1.1
            }
          ],
          "colleague_localdata": [{
              "text": "SB占多数",
              "value": 0.9
            },
            {
              "text": "普通占多数",
              "value": 1
            },
            {
              "text": "优秀占多数",
              "value": 1.1
            }
          ],
          "occupation_localdata": [{
              "text": "无要求",
              "value": 1
            },
            {
              "text": "门槛水平",
              "value": 1.05
            },
            {
              "text": "优秀水平",
              "value": 1.1
            },
            {
              "text": "资深水平",
              "value": 1.15
            }
          ],
          "special_localdata": [{
              "text": "正常",
              "value": 1
            },
            {
              "text": "8：30前上班",
              "value": 0.95
            },
            {
              "text": "夜班",
              "value": 0.9
            }
          ]
        },
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {

      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {}).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            icon: 'none',
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>

<style>
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
