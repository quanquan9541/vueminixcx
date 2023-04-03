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
      <uni-forms-item name="ram" label="内存" required>
        <uni-data-checkbox v-model="formData.ram" :localdata="formOptions.ram_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="rom" label="闪存" required>
        <uni-data-checkbox v-model="formData.rom" :localdata="formOptions.rom_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="money" label="价格">
        <uni-easyinput placeholder="价格表" v-model="formData.money"></uni-easyinput>
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
  } from '../../js_sdk/validator/Mmoney.js';
  import {
    relevance
  } from '../../js/tools.js'
  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'Mmoney';

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
        "ram": null,
        "rom": null,
        "money": "",
        "sort": 0
      }
      return {
        formData,
        formOptions: {
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
      //查询详情id
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
        db.collection(dbCollectionName).doc(id).field("phone_id,edit,ram,rom,money,sort").get().then((res) => {
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