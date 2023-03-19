<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="z_id" label="厂商" required>
        <uni-data-picker placeholder="请选择厂商" popup-title="请选择厂商" collection="Msoc" :where="zwhere"
          field="_id as value, name as text" :step-searh="true" @change="zonchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="parent_id" label="品牌" required>
        <uni-data-picker placeholder="请选择品牌" popup-title="请选择品牌" collection="Msoc" :where="pwhere"
          field="_id as value, name as text" :step-searh="true" @change="ponchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="name" label="名称" required>
        <uni-easyinput placeholder="名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="socvalue" label="性能">
        <uni-easyinput placeholder="性能数值" type="number" v-model="formData.socvalue"></uni-easyinput>
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
        "z_id": {},
        "parent_id": {},
        "name": "",
        "socvalue": "",
        "status": true,
        "type": 2
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        },
        zwhere: 'status==true && type==0', //爷级查询条件
        pwhere: 'status==true && type==1', //父级查询条件
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      //选择父亲
      ponchange(e) {
        // console.log(e.detail.value[0]);
        this.formData.parent_id = e.detail.value[0]
      },
      //选择爷级id
      zonchange(e) {
        // console.log(e.detail.value[0]);
        this.formData.z_id = e.detail.value[0]
        this.pwhere = 'status==true && type==1 && parent_id.value==' + JSON.stringify(e.detail.value[0].value)
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
