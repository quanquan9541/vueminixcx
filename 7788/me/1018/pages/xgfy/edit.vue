<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validate-trigger="submit" err-show-type="toast">
      <uni-forms-item name="username" label="姓名" required>
        <uni-easyinput placeholder="姓名" v-model="formData.username" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="gender" label="性别">
        <uni-data-checkbox v-model="formData.gender" :localdata="formOptions.gender_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="mobile" label="电话" required>
        <uni-easyinput placeholder="电话" v-model="formData.mobile" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="idcord" label="身份证">
        <uni-easyinput placeholder="身份证号码" v-model="formData.idcord" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="fdate" label="返回日期">
        <uni-datetime-picker return-type="date" v-model="formData.fdate"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="add" label="地址">
        <uni-data-picker self-field="code" parent-field="parent_code" v-model="formData.add" collection="opendb-city-china" orderby="value asc" field="code as value, name as text, eq(type, 2) as isleaf"></uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="photo" label="健康码">
        <uni-file-picker file-mediatype="image" file-extname="jpg,png" return-type="object" v-model="formData.photo"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="statu" label="审核状态">
        <switch @change="binddata('statu', $event.detail.value)" :checked="formData.statu"></switch>
      </uni-forms-item>
      <uni-forms-item name="province_code" label="省">
        <uni-easyinput placeholder="省级编码，冗余存储" v-model="formData.province_code"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="city_code" label="市">
        <uni-easyinput placeholder="地级编码，冗余存储" v-model="formData.city_code"></uni-easyinput>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" @click="submit">提交</button>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/xgfy.js';

  const db = uniCloud.database();
  const dbCollectionName = 'xgfy';

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
        "username": "",
        "gender": 0,
        "mobile": "",
        "idcord": "",
        "fdate": null,
        "add": "",
        "photo": null,
        "statu": null,
        "province_code": "",
        "city_code": ""
      }
      return {
        formData,
        formOptions: {
          "gender_localdata": [
            {
              "text": "未知",
              "value": 0
            },
            {
              "text": "男",
              "value": 1
            },
            {
              "text": "女",
              "value": 2
            }
          ]
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
        db.collection(dbCollectionName).doc(id).field("username,gender,mobile,idcord,fdate,add,photo,statu,province_code,city_code").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
            
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
