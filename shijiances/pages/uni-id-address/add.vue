<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validate-trigger="submit" err-show-type="toast">
      <uni-forms-item name="name" label="收货人" required>
        <uni-easyinput placeholder="收货人" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="alias" label="地址别名">
        <uni-easyinput placeholder="地址别名，例如：家、公司、学校" v-model="formData.alias" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="mobile" label="手机号" required>
        <uni-easyinput placeholder="手机号码，加密存储" v-model="formData.mobile" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="mobile_area_code" label="国际区号">
        <uni-easyinput placeholder="国际区号，中国大陆为 +86" v-model="formData.mobile_area_code" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="province_code" label="省">
        <uni-easyinput placeholder="省级编码，冗余存储" v-model="formData.province_code"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="city_code" label="市">
        <uni-easyinput placeholder="地级编码，冗余存储" v-model="formData.city_code"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="area_code" label="省市区" required>
        <uni-data-picker self-field="code" parent-field="parent_code" v-model="formData.area_code" collection="opendb-city-china" orderby="value asc" field="code as value, name as text, eq(type, 2) as isleaf"></uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="address" label="详细住址" required>
        <uni-easyinput placeholder="省市区后面的详细住址，包含街道小区房间号" v-model="formData.address" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="formatted_address" label="">
        <uni-easyinput placeholder="完整地址信息，包括省市区及街道小区房间号" v-model="formData.formatted_address" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="zip_code" label="邮编">
        <uni-easyinput placeholder="邮编" v-model="formData.zip_code" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="email" label="邮箱">
        <uni-easyinput placeholder="邮箱" v-model="formData.email" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="is_default" label="默认地址">
        <switch @change="binddata('is_default', $event.detail.value)" :checked="formData.is_default"></switch>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/uni-id-address.js';

  const db = uniCloud.database();
  const dbCollectionName = 'uni-id-address';

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
        "name": "",
        "alias": "",
        "mobile": "",
        "mobile_area_code": "",
        "province_code": "",
        "city_code": "",
        "area_code": "",
        "address": "",
        "formatted_address": "",
        "zip_code": "",
        "email": "",
        "is_default": false
      }
      return {
        formData,
        formOptions: {},
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
