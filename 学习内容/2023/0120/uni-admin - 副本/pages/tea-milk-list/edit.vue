<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="category_id" label="品牌">
        <uni-data-picker v-model="formData.category_id" collection="tea-milk-class" field="_id as value, name as text">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="name" label="名称" required>
        <uni-easyinput placeholder="请输入商品名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="pic" label="大图" required>
        <uni-file-picker file-mediatype="image" file-extname="jpg,png" :limit="3" return-type="array"
          v-model="formData.pic"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="goods_desc" label="配料">
        <uni-easyinput placeholder="请输入配料表" v-model="formData.goods_desc" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="url" label="图文">
        <uni-easyinput placeholder="商品图文链接" v-model="formData.url" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="add_date" label="日期">
        <uni-datetime-picker type="date" return-type="timestamp" v-model="formData.add_date"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="state" label="状态">
        <switch @change="binddata('state', $event.detail.value)" :checked="formData.state"></switch>
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
  } from '../../js_sdk/validator/tea-milk-list.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'tea-milk-list';

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
        "category_id": "",
        "name": "",
        "pic": [],
        "goods_desc": "",
        "url": "",
        "add_date": null,
        "state": true
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
        }).catch(() => {}).finally(() => {
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
        db.collection(dbCollectionName).doc(id).field("category_id,name,pic,goods_desc,url,add_date,state").get().then((
          res) => {
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
