<template>
  <view class="phone">
    <view class="form">
      <u--form labelPosition="left" :model="data" :rules="datarules" ref="dataform">
        <view class="name">
          <u-form-item class='nameleft' labelWidth='125rpx' label="手机型号" prop="names" borderBottom>
            <uni-data-picker :localdata="phone" popup-title="请选择手机型号" @change="onchange" @nodeclick="onnodeclick">
            </uni-data-picker>
          </u-form-item>
          <u-form-item class='nameright' prop="name" borderBottom>
            <uni-easyinput v-model="data.name" placeholder="请输入具体型号"></uni-easyinput>
          </u-form-item>
        </view>
        <u-form-item labelWidth='125rpx' label="手机型号" prop="soc" borderBottom>
          <uni-data-picker placeholder="请选择处理器" popup-title="请选择处理器型号" collection="mini_cpu" where="
state == false" field="_id as value, name as text" :step-searh="true" self-field="_id" parent-field="series"
            @change="socchange">
          </uni-data-picker>
        </u-form-item>
      </u--form>
      <view class="button">
        <u-button class='button' type="primary" text="确定" @click="submit"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        //输入框样式
        styles: {
          hight: 55
        },
        // 表单数据
        data: {
          names: '',
          name: '',
          soc: ''
        },
        // 表单规则
        datarules: {
          names: '',
          name: ''
        },
        //手机型号列表
        phone: [{
            text: "OPPO",
            value: "1",
            children: [{
                text: "OPPO",
                value: "1-1"
              },
              {
                text: "Realme",
                value: "1-2"
              },
              {
                text: "一加",
                value: "1-3"
              }
            ]
          },
          {
            text: "vivo",
            value: "2",
            children: [{
                text: "vivo",
                value: "2-1"
              },
              {
                text: "IQOO",
                value: "2-1"
              }
            ]
          },
          {
            text: "小米",
            value: "3",
            children: [{
                text: "Mi",
                value: "3-1"
              },
              {
                text: "Redmi",
                value: "3-2"
              }
            ]
          },
          {
            text: "华为",
            value: "4",
            children: [{
              text: "华为",
              value: "4-1"
            }]
          },
          {
            text: "荣耀",
            value: "5",
            children: [{
              text: "荣耀",
              value: "5-1"
            }]
          },
          {
            text: "苹果",
            value: "6",
            children: [{
              text: "Apple",
              value: "6-1"
            }]
          },
          {
            text: "中兴",
            value: "7",
            children: [{
                text: "努比亚",
                value: "7-1"
              },
              {
                text: "红魔",
                value: "7-2"
              }
            ]
          },
          {
            text: "三星",
            value: "8",
            children: [{
              text: "三星",
              value: "8-1"
            }, ]
          },
          {
            text: "联想",
            value: "9",
            children: [{
                text: "拯救者",
                value: "9-1"
              },
              {
                text: "MOTO",
                value: "9-2"
              },
            ]
          },
          {
            text: "魅族",
            value: "10",
            children: [{
              text: "魅族",
              value: "10-1"
            }]
          },
        ]
      };
    },
    methods: {
      //数据验证
      submit() {
        this.$refs.dataform.validate().then(res => {
          uni.$u.toast('校验通过')
          console.log('表单', this.data);
        }).catch(errors => {
          console.log(errors);
          uni.$u.toast('校验失败')
        })
      },
      //选择处理器
      socchange(e) {
        let soc = e.detail.value
        this.data.soc = soc
      },
      //选择手机型号
      onchange(e) {
        let value = e.detail.value
        // console.log(value);
        this.data.names = value[0].text + "\xa0" + value[1].text
        console.log(this.data.names);
      },
      onnodeclick(node) {}
      //
    },
    onReady() {
      //如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
      this.$refs.dataform.setRules(this.datarules)
    },
  }
</script>

<style lang="scss">
  .phone {
    margin: 10rpx;

    .form {
      padding: 0 20rpx;

      .name {
        display: flex;
        height: 56.8px;

        .nameleft {
          flex: 3;
        }

        .nameright {
          flex: 2;
          margin-left: 5rpx;
        }
      }
    }
  }
</style>
