<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="z_id" label="厂商" required>
        <uni-data-picker placeholder="请选择厂商" popup-title="请选择厂商" collection="Manufacturer_brand" :where="zwhere"
          field="_id as value, name as text" :step-searh="true" @change="zonchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="parent_id" label="品牌" required>
        <uni-data-picker placeholder="请选择品牌" popup-title="请选择品牌" collection="Manufacturer_brand" :where="pwhere"
          field="_id as value, name as text" :step-searh="true" @change="ponchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="name" label="名称" required>
        <uni-easyinput placeholder="名称" v-model="formData.name" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="pic" label="大图" required>
        <uni-file-picker file-mediatype="image" file-extname="jpg,png" return-type="array" v-model="formData.pic">
        </uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="url" label="链接" required>
        <uni-easyinput placeholder="请输入购买链接" @change="getjdsuld" v-model="formData.url" type="text">
        </uni-easyinput>
        <!-- {{formData.jdurl}} -->
      </uni-forms-item>
      <uni-forms-item name="money" label="价格" required>
        <uni-easyinput type="number" placeholder="请输入当前价格" v-model="formData.money"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="moneyCheck" label="价格补正" required>
        <uni-easyinput type="number" placeholder="请输入价格补正" v-model="formData.moneyCheck"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="brith" label="发售日" required>
        <uni-datetime-picker type="date" :clear-icon="false" return-type="timestamp" placeholder="请选择发售日期"
          v-model="formData.brith">
        </uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item name="hot" label="热门">
        <switch @change="binddata('hot', $event.detail.value)" :checked="formData.hot"></switch>
      </uni-forms-item>
      <uni-forms-item name="status" label="启用" required>
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
    jddatalist,
    urlchenge
  } from '../../js/jdurl.js';
  import {
    validator
  } from '../../js_sdk/validator/Manufacturer_brand.js';
  import {
    request
  } from '../../js/request.js';
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
        "pic": "",
        "url": "",
        "jdurl": "",
        "money": "",
        "moneyCheck": 0,
        "brith": "",
        "hot": false,
        "status": true,
        "type": 2,
        "z_id": null,
        "parent_id": "_id",
        "create_date": new Date()
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        },
        zwhere: 'status==true && type==0', //爷级查询条件
        pwhere: "status==true && type==1", //父级查询条件
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      //获取京东id
      async getjdsuld() {
        const jdsuld = this.formData.url.match(/\d+(\.\d+)?/g)[0]
        const requesturl = jddatalist(jdsuld)
        let jddetailed = await request(requesturl) //请求
        let datailed = JSON.parse(jddetailed.jd_union_open_goods_promotiongoodsinfo_query_responce.queryResult)
        if (!datailed.data.length) {
          uni.showToast({
            title: datailed.message,
            icon: 'none',
            duration: 2000
          });
          return
        }
        this.formData.money = datailed.data[0].unitPrice
        // console.log(datailed);
        // 获取链接
        let eurl = datailed.data[0].materialUrl
        //调用转化链接
        this.chengeurl(eurl)
      },
      //转化链接 
      async chengeurl(e) {
        let method = "jd.union.open.promotion.common.get"
        let jdurl = e
        let jdddurl = urlchenge(method, jdurl) //拼接链接
        let urldatailed = await request(jdddurl)
        let data = JSON.parse(urldatailed.jd_union_open_promotion_common_get_responce.getResult)
        console.log('12333', data.data.clickURL);
        this.formData.jdurl = data.data.clickURL
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
        return db.collection(dbCollectionName).add({
          ...value,
          type: this.formData.type,
          jdurl: this.formData.jdurl,
          // last_date: new Date()
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
