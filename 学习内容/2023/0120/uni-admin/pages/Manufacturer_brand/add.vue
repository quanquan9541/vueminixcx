<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="z_id" label="厂商">
        <uni-data-picker placeholder="请选择厂商" popup-title="请选择厂商" collection="Manufacturer_brand" :where="zwhere"
          field="_id as value, name as text" :step-searh="true" self-field="_id" @change="zonchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="parent_id" label="品牌">
        <uni-data-picker placeholder="请选择品牌" popup-title="请选择品牌" collection="Manufacturer_brand" :where="pwhere"
          field="_id as value, name as text" :step-searh="true" self-field="_id" @change="ponchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="name" label="产品" required>
        <uni-easyinput placeholder="请输入产品型号" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="url" label="链接">
        <uni-easyinput placeholder="请输入购买链接" v-model="formData.url" @change='urlchenge'></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="pic" label="大图">
        <uni-file-picker file-mediatype="image" file-extname="jpg,png" return-type="array" v-model="formData.pic">
        </uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="money" label="价格">
        <uni-easyinput type="number" v-model="formData.money"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="brith" label="发售日">
        <uni-datetime-picker return-type="timestamp" v-model="formData.brith"></uni-datetime-picker>
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
  } from '../../js_sdk/validator/Manufacturer_brand.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'Manufacturer_brand';
  const jdurl = uniCloud.importObject('jdurl')

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
        "pic": "",
        "money": null,
        "url": "",
        "brith": null,
        "status": true,
        "type": 2,
        "parent_id": null,
        "z_id": null
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        },
        zwhere: 'status==true && type==0',
        pwhere: "status==true && type==1",
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      //输入框失去焦点
      async urlchenge() {
        console.log('测试焦点');
        let res = jdurl('1234')
        console.log('res');
      },
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
        return db.collection(dbCollectionName).add(value).then((res) => {
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
