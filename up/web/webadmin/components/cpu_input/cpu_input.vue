<template>
  <view>
    <u--form labelPosition="left" :model="data" :rules="datarules" ref="dataform">
      <!-- 厂商 -->
      <u-form-item :label="title" prop="name" borderBottom>
        <u--input :placeholder="'请输入'+title" border="surround" clearable v-model="data.name"></u--input>
      </u-form-item>
      <u-form-item label="数值" prop="Cpuvalue" borderBottom v-if="data.type==2 ? true : false ">
        <u--input placeholder="请输入性能值" border="surround" clearable v-model="data.Cpuvalue"></u--input>
      </u-form-item>
      <!-- 状态 -->
      <u-form-item label="状态" prop="state">
        <u-switch v-model="data.state" @change="statechange"></u-switch>
      </u-form-item>
    </u--form>
    <u-button class='button' type="primary" text="确定" @click="submit"></u-button>
  </view>
</template>

<script>
  const db = uniCloud.database();
  import {
    type
  } from '../../utils/tools.js';
  export default {
    name: "cpu_input",
    props: {
      //传参 父向子
      title: {
        type: String,
        default: "内容",
      },
      data: {
        name: {
          type: String,
          // default: ''
        },
        Cpuvalue: {
          type: String,
        },
        state: {
          type: Boolean,
          default: false
        },

      },
    },
    data() {
      return {
        //验证规则
        datarules: {
          'name': [{
            type: 'string',
            required: true,
            message: '请填写内容',
            trigger: ['blur', 'change']
          }],
        }
      };
    },
    methods: {
      type,
      //状态选择
      statechange(e) {
        // console.log('change', e);
        this.manufacturer.state = e
      },
      //数据验证
      submit() {
        this.$refs.dataform.validate().then(res => {
          uni.$u.toast('校验通过')
          //上传数据
          this.updata()
        }).catch(errors => {
          console.log(errors);
          uni.$u.toast('校验失败')
        })
      },
      //上传函数
      updata() {
        //判断
        if (!this.data._id) {
          db.collection('mini_cpu').add({
            ...this.data,
            last_update_date: Date.now()
          }).then(res => {
            console.log('提交成功', res);
            //下拉刷新
            setTimeout(1000);
            uni.startPullDownRefresh();
            this.data.name = '' //清空输入
          })
        } else {
          db.collection('mini_cpu').where(`_id=="${this.data._id}"`).update({
            name: this.data.name,
            last_update_date: Date.now()
          }).then(res => {
            console.log('修改成功', res);
            //下拉刷新
            setTimeout(1000);
            uni.startPullDownRefresh();
            this.data.name = '' //清空输入
          })
        }
      }
    },
    onReady() {
      //如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
      this.$refs.dataform.setRules(this.datarules)
    },
  }
</script>

<style lang="scss">
  .button {
    margin: 15rpx 0;
  }
</style>
