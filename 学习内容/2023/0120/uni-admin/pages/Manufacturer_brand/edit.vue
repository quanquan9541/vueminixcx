<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="name" label="名称" required>
        <uni-easyinput placeholder="名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="pic" label="大图">
        <uni-file-picker file-mediatype="image" file-extname="jpg,png" return-type="array" v-model="formData.pic"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="money" label="价格">
        <uni-easyinput type="number" v-model="formData.money"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="url" label="链接">
        <uni-easyinput placeholder="请输入购买链接" v-model="formData.url"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="brith" label="发售日期">
        <uni-datetime-picker return-type="timestamp" v-model="formData.brith"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="status" label="启用">
        <switch @change="binddata('status', $event.detail.value)" :checked="formData.status"></switch>
      </uni-forms-item>
      <uni-forms-item name="type" label="类型">
        <uni-easyinput placeholder="类型0厂商1品牌2型号" type="number" v-model="formData.type"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="parent_id" label="品牌">
        <undefined v-model="formData.parent_id"></undefined>
      </uni-forms-item>
      <uni-forms-item name="z_id" label="厂商">
        <undefined v-model="formData.z_id"></undefined>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/Manufacturer_brand.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'Manufacturer_brand';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "name": "",
        "pic": "上传手机大图",
        "money": null,
        "url": "",
        "brith": null,
        "status": true,
        "type": null,
        "parent_id": null,
        "z_id": null
      }
      return {
        formData,
        formOptions: {},
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
        db.collection(dbCollectionName).doc(id).field("name,pic,money,url,brith,status,type,parent_id,z_id").get().then((res) => {
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
