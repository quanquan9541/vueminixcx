<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="phone_id" label="名称">
        <uni-data-picker v-model="formData.phone_id" collection="Manufacturer_brand" parent-field="parent_id.value"
          placeholder="请选择型号" self-field="_id" field="_id as value, name as text" @change="onchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="edit" label="关联">
        <uni-easyinput disabled placeholder="参数关联" v-model="formData.edit"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ComeraType" label="类型" required>
        <uni-data-checkbox v-model="formData.ComeraType"
          :localdata="formOptions.ComeraType_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="Comeraedit" label="详情" required>
        <uni-easyinput placeholder="相机详情" v-model="formData.Comeraedit"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="Comeravalue" label="数值" required>
        <uni-easyinput placeholder="相机数值644" type="number" v-model="formData.Comeravalue"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="Comeraadd" label="附加分">
        <uni-easyinput placeholder="特别加分" type="number" v-model="formData.Comeraadd"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="sort" label="排序">
        <uni-easyinput type="number" v-model="formData.sort"></uni-easyinput>
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
  } from '../../js_sdk/validator/Mcamera.js';
  import {
    relevance,
    codeeditid
  } from '../../js/tools.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'Mcamera';

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
        "phone_id": "",
        "edit": "",
        "ComeraType": "",
        "Comeraedit": "",
        "Comeravalue": null,
        "Comeraadd": 0,
        "sort": 0
      }
      return {
        formData,
        formOptions: {
          "ComeraType_localdata": [{
              "text": "前置",
              "value": "前置"
            },
            {
              "text": "主摄",
              "value": "主摄"
            },
            {
              "text": "广角",
              "value": "广角"
            },
            {
              "text": "长焦",
              "value": "长焦"
            },
            {
              "text": "人像",
              "value": "人像"
            },
            {
              "text": "微距",
              "value": "微距"
            },
            {
              "text": "景深",
              "value": "景深"
            },
            {
              "text": "其他",
              "value": "其他"
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
      //获取选择数据
      async onchange(e) {
        //调用公共函数
        let editid = await relevance(e)
        if (editid == "200") {
          setTimeout(() => {
            this.formData.phone_id = null
            // console.log(editid);
          }, 800)
          return
        }
        // console.log(editid);
        this.formData.edit = editid
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
        db.collection(dbCollectionName).doc(id).field("phone_id,edit,ComeraType,Comeraedit,Comeravalue,Comeraadd,sort")
          .get().then((res) => {
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