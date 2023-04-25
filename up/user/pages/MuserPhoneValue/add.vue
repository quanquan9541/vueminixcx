<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validate-trigger="submit" err-show-type="toast" label-position="top">
      <uni-section title="基础信息" type="line">
        <uni-forms-item name="age" label="年龄">
          <uni-easyinput placeholder="请输您的年龄" type="number" v-model="formData.age"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item name="sex" label="性别">
          <uni-data-checkbox v-model="formData.sex" :localdata="formOptions.sex_localdata"></uni-data-checkbox>
        </uni-forms-item>
      </uni-section>
      <uni-section title="手机相关" type="line" sub-title="请输入目前在用手机的基础信息">
        <uni-forms-item name="phonebrand" label="品牌">
          <uni-data-picker v-model="formData.phonebrand" placeholder="请选择当前手机品牌" popup-title="请选择当前在用手机品牌" :where="wer"
            collection="Manufacturer_brand" field="_id as value, name as text"></uni-data-picker>
        </uni-forms-item>
        <uni-section type="line" title="你认为品牌会影响你购买手机吗？">
          <uni-forms-item name="isbrand">
            <uni-data-checkbox v-model="formData.isbrand"
              :localdata="formOptions.isbrand_localdata"></uni-data-checkbox>
          </uni-forms-item>
        </uni-section>
        <uni-forms-item name="ram" label="内存">
          <uni-data-checkbox v-model="formData.ram" :localdata="formOptions.ram_localdata"></uni-data-checkbox>
        </uni-forms-item>
        <uni-forms-item name="rom" label="闪存">
          <uni-data-checkbox v-model="formData.rom" :localdata="formOptions.rom_localdata"></uni-data-checkbox>
        </uni-forms-item>
      </uni-section>

      <uni-section title="预算相关" type="line" sub-title="你认为目前手机价格偏贵吗？">
        <uni-forms-item name="ismoney">
          <uni-data-checkbox v-model="formData.ismoney" :localdata="formOptions.ismoney_localdata"></uni-data-checkbox>
        </uni-forms-item>
        <uni-forms-item name="moneymaxjiag" label="预算">
          <uni-easyinput placeholder="请输入手机预算" type="number" v-model="formData.moneymaxjiag"></uni-easyinput>
        </uni-forms-item>
      </uni-section>

      <uni-section title="请选择你认为最影响你选购的因素" type="line" sub-title="选择2项">
        <uni-forms-item name="import">
          <uni-data-checkbox :min="2" :max="2" :multiple="true" v-model="formData.import"
            :localdata="formOptions.import_localdata"></uni-data-checkbox>
        </uni-forms-item>
      </uni-section>
      <uni-section title="请对以下6个维度进行打分" type="line" :sub-title="'总分100,当前累计'+sum+'分'" :subTitleColor="subTitleColor">
        <uni-forms-item name="screenv" label="显示">
          <text class="text">屏幕显示效果相关方面</text>
          <u-slider v-model="formData.screenv" :showValue="true" min="1" max="95" @change="change"></u-slider>
        </uni-forms-item>
        <uni-forms-item name="camerav" label="影像">
          <text class="text">拍照影像相关
          </text>
          <u-slider v-model="formData.camerav" :showValue="true" min="1" max="95" @change="change"></u-slider>
        </uni-forms-item>
        <uni-forms-item name="fastchargev" label="快充">
          <text class="text">充电速度</text>
          <u-slider v-model="formData.fastchargev" :showValue="true" min="1" max="95" @change="change"></u-slider>
        </uni-forms-item>
        <uni-forms-item name="endurancev" label="续航">
          <text class="text">手机续航(目前很难量化，主要参考电池容量)</text>
          <u-slider v-model="formData.endurancev" :showValue="true" min="1" max="95" @change="change"></u-slider>
        </uni-forms-item>
        <uni-forms-item name="lightthinv" label="轻薄">
          <text class="text">尺寸和重量相关</text>
          <u-slider v-model="formData.lightthinv" :showValue="true" min="1" max="95" @change="change"></u-slider>
        </uni-forms-item>
        <uni-forms-item name="performancev" label="性能">
          <text class="text">手机性能</text>
          <u-slider v-model="formData.performancev" :showValue="true" min="1" max="95" @change="change"></u-slider>
        </uni-forms-item>
      </uni-section>

      <view class="uni-button-group">
        <button :disabled="disabled" type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import {
    validator
  } from '../../js_sdk/validator/MuserPhoneValue.js';

  const db = uniCloud.database();
  const dbCollectionName = 'MuserPhoneValue';

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
        "age": null,
        "sex": null,
        "ram": null,
        "rom": null,
        "phonebrand": null,
        "isbrand": null,
        "moneymaxjiag": null,
        "ismoney": null,
        "import": [],
        "screenv": 1,
        "camerav": 1,
        "fastchargev": 1,
        "endurancev": 1,
        "lightthinv": 1,
        "performancev": 1
      }
      return {
        formData,
        wer: "type==1 && status==true", //级联选择器条件
        subTitleColor: "#999", //标签栏字体颜色
        disabled: true,
        formOptions: {
          "sex_localdata": [{
              "text": "女",
              "value": 0
            },
            {
              "text": "男",
              "value": 1
            }
          ],
          "ram_localdata": [{
              "value": 4,
              "text": 4
            },
            {
              "value": 6,
              "text": 6
            },
            {
              "value": 8,
              "text": 8
            },
            {
              "value": 12,
              "text": 12
            },
            {
              "value": 16,
              "text": 16
            },
            {
              "value": 18,
              "text": 18
            },
            {
              "value": "其他",
              "text": "其他"
            }
          ],
          "rom_localdata": [{
              "value": 32,
              "text": 32
            },
            {
              "value": 64,
              "text": 64
            },
            {
              "value": 128,
              "text": 128
            },
            {
              "value": 256,
              "text": 256
            },
            {
              "value": 512,
              "text": 512
            },
            {
              "value": 1024,
              "text": 1024
            },
            {
              "value": "其他",
              "text": "其他"
            }
          ],
          "isbrand_localdata": [{
              "text": "无影响",
              "value": 0
            },
            {
              "text": "有影响",
              "value": 1
            }
          ],
          "ismoney_localdata": [{
              "text": "贵",
              "value": 0
            },
            {
              "text": "不贵",
              "value": 1
            }
          ],
          "import_localdata": [{
              "value": "屏幕显示效果",
              "text": "屏幕显示效果"
            },
            {
              "value": "影像(拍照)",
              "text": "影像(拍照)"
            },
            {
              "value": "充电速度",
              "text": "充电速度"
            },
            {
              "value": "续航/电池容量",
              "text": "续航/电池容量"
            },
            {
              "value": "重量/尺寸",
              "text": "重量/尺寸"
            },
            {
              "value": "性能",
              "text": "性能"
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
    computed: {
      sum() {
        return this.formData.screenv + this.formData.camerav + this.formData.fastchargev +
          this.formData.endurancev +
          this.formData.lightthinv +
          this.formData.performancev
      }
    },
    methods: {
      /**
       * @param {Object} e 滚动条数值
       */
      change(e) {
        // console.log(e);
        let log = this.valuesum()
        if (!log) {
          this.subTitleColor = "#FFB94C"
          this.disabled = false
          return
        } else {
          // console.log(log);
          this.subTitleColor = log
        }
      },
      //数据校验
      valuesum() {
        if (this.sum == 100) return false
        if (this.sum < 100) {
          return "blue"
        } else {
          return "red"
        }
      },
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

  .text {
    font-size: 18rpx;
    color: #a3a3a3;
  }
</style>