<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="parent_id" label="厂商">
        <uni-data-picker placeholder="请选择厂商" popup-title="请选择厂商" collection="Msoc" :where="where"
          field="_id as value, name as text" :step-searh="true" @change="onchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="name" label="系列" required>
        <uni-easyinput placeholder="请输入系列名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="status" label="启用">
        <switch @change="binddata('status', $event.detail.value)" :checked="formData.status"></switch>
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
  import {
    validator
  } from '../../js_sdk/validator/Msoc.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'Msoc';

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
        "parent_id": {},
        "name": "",
        "socvalue": null,
        "status": true,
        "type": 1
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        },
        where: 'status==true && type==0',
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      //选择父级id
      onchange(e) {
        console.log(e.detail.value[0]);
        this.formData.parent_id = e.detail.value[0]
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
        return db.collection(dbCollectionName).add({
          ...value,
          type: this.formData.type
        }).then((res) => {
          uni.showToast({
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