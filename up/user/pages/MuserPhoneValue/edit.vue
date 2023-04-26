<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validate-trigger="submit" err-show-type="toast">
      <uni-forms-item name="age" label="年龄">
        <uni-easyinput placeholder="请输您的年龄" type="number" v-model="formData.age"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sex" label="性别">
        <uni-data-checkbox v-model="formData.sex" :localdata="formOptions.sex_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="phonebrand" label="品牌">
        <uni-data-picker v-model="formData.phonebrand" collection="Manufacturer_brand" field="_id as value, name as text"></uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="ram" label="内存">
        <uni-data-checkbox v-model="formData.ram" :localdata="formOptions.ram_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="rom" label="闪存">
        <uni-data-checkbox v-model="formData.rom" :localdata="formOptions.rom_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="isbrand" label="品牌影响">
        <uni-data-checkbox v-model="formData.isbrand" :localdata="formOptions.isbrand_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="moneymaxjiag" label="预算">
        <uni-easyinput placeholder="请输入手机预算" type="number" v-model="formData.moneymaxjiag"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ismoney" label="金钱影响">
        <uni-data-checkbox v-model="formData.ismoney" :localdata="formOptions.ismoney_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="import" label="重要">
        <uni-data-checkbox v-model="formData.import" :localdata="formOptions.import_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="screenv" label="显示">
        <picker @change="pickerChange($event, 'screenv')" :range="formOptions.screenv_data" :value="formOptions.screenv_index">
          <view>{{formOptions.screenv_data[formOptions.screenv_index] || "请选择..."}}</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="camerav" label="影像">
        <picker @change="pickerChange($event, 'camerav')" :range="formOptions.camerav_data" :value="formOptions.camerav_index">
          <view>{{formOptions.camerav_data[formOptions.camerav_index] || "请选择..."}}</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="fastchargev" label="快充">
        <picker @change="pickerChange($event, 'fastchargev')" :range="formOptions.fastchargev_data" :value="formOptions.fastchargev_index">
          <view>{{formOptions.fastchargev_data[formOptions.fastchargev_index] || "请选择..."}}</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="endurancev" label="续航">
        <picker @change="pickerChange($event, 'endurancev')" :range="formOptions.endurancev_data" :value="formOptions.endurancev_index">
          <view>{{formOptions.endurancev_data[formOptions.endurancev_index] || "请选择..."}}</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="lightthinv" label="轻薄">
        <picker @change="pickerChange($event, 'lightthinv')" :range="formOptions.lightthinv_data" :value="formOptions.lightthinv_index">
          <view>{{formOptions.lightthinv_data[formOptions.lightthinv_index] || "请选择..."}}</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="performancev" label="性能">
        <picker @change="pickerChange($event, 'performancev')" :range="formOptions.performancev_data" :value="formOptions.performancev_index">
          <view>{{formOptions.performancev_data[formOptions.performancev_index] || "请选择..."}}</view>
        </picker>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/MuserPhoneValue.js';

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

  function numberRange(start, end) {
    return Array.from(new Array(end + 1).keys()).slice(start);
  }

  export default {
    data() {
      let formData = {
        "age": null,
        "sex": null,
        "phonebrand": "",
        "ram": null,
        "rom": null,
        "isbrand": null,
        "moneymaxjiag": null,
        "ismoney": null,
        "import": "",
        "screenv": 1,
        "camerav": 1,
        "fastchargev": 1,
        "endurancev": 1,
        "lightthinv": 1,
        "performancev": 1
      }
      return {
        formData,
        formOptions: {
          "sex_localdata": [
            {
              "text": "女",
              "value": 0
            },
            {
              "text": "男",
              "value": 1
            }
          ],
          "ram_localdata": [
            {
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
          "rom_localdata": [
            {
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
          "isbrand_localdata": [
            {
              "text": "无影响",
              "value": 0
            },
            {
              "text": "有影响",
              "value": 1
            }
          ],
          "ismoney_localdata": [
            {
              "text": "贵",
              "value": 0
            },
            {
              "text": "不贵",
              "value": 1
            }
          ],
          "import_localdata": [
            {
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
          ],
          "screenv_data": numberRange(1, 99),
          "screenv_index": 1,
          "camerav_data": numberRange(1, 99),
          "camerav_index": 1,
          "fastchargev_data": numberRange(1, 99),
          "fastchargev_index": 1,
          "endurancev_data": numberRange(1, 99),
          "endurancev_index": 1,
          "lightthinv_data": numberRange(1, 99),
          "lightthinv_index": 1,
          "performancev_data": numberRange(1, 99),
          "performancev_index": 1
        },
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onLoad(e) {
      if (e.id) {
        const id = e.id
        this.formDataId = id
        this.getDetail(id)
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      pickerChange(e, name) {
        this.formOptions[name + '_index'] = e.detail.value;
        this.formData[name] = this.formOptions[name + '_data'][e.detail.value];
        this.binddata(name, this.formData[name]);
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
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            icon: 'none',
            title: '修改成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field("age,sex,phonebrand,ram,rom,isbrand,moneymaxjiag,ismoney,import,screenv,camerav,fastchargev,endurancev,lightthinv,performancev").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
            for (let key in this.formOptions) {
              let pickerIndex = key.lastIndexOf("_index")
              if (pickerIndex > -1) {
                let fieldName = key.substring(0, pickerIndex)
                let fieldData = this.formOptions[fieldName + "_data"];
                if (data[fieldName] && fieldData && fieldData.indexOf(data[fieldName]) > -1) {
                  this.formOptions[fieldName + "_index"] = fieldData.indexOf(data[fieldName])
                }
              }
            }
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
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
