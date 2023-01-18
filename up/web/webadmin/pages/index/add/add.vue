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
        <u-form-item labelWidth='125rpx' label="处理器" prop="soc" borderBottom>
          <uni-data-picker placeholder="请选择处理器" popup-title="请选择处理器型号" collection="mini_cpu" where="
state == false" field="_id as value, name as text" :step-searh="true" self-field="_id" parent-field="series"
            @change="socchange">
          </uni-data-picker>
        </u-form-item>
        <view class="RomRam">
          <u-form-item labelWidth='125rpx' label="内存" prop="Rom" borderBottom>
            <uni-data-select v-model="data.Rom" :localdata="romlist" @change="changerom" placeholder='选择Rom规格'>
            </uni-data-select>
          </u-form-item>
          <u-form-item labelWidth='75rpx' label="闪存" prop="Ram" borderBottom class='ram'>
            <uni-data-select v-model="data.Ram" :localdata="ramlist" @change="changeram" placeholder='选择Ram规格'>
            </uni-data-select>
          </u-form-item>
        </view>
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
        //Ram选择器列表
        ramlist: [{
            value: "USF 4.0",
            text: "USF 4.0"
          }, {
            value: "USF 3.1",
            text: "USF 3.1"
          },
          {
            value: "USF 2.2",
            text: "USF 2.2"
          },
          {
            value: "emmc",
            text: "emmc"
          },
          {
            value: "未知",
            text: "未知"
          }
        ],
        //Rom选择器列表
        romlist: [{
            value: "LPDDR 5",
            text: "LPDDR 5"
          },
          {
            value: "LPDDR 4X",
            text: "LPDDR 4X"
          },
          {
            value: "LPDDR 4",
            text: "LPDDR 4"
          },
          {
            value: '未知',
            text: "未知"
          },
        ],
        // 表单数据
        data: {
          names: '',
          name: '',
          soc: '',
          Rom: "",
          Ram: ""
        },
        // 表单规则
        datarules: {
          'name': [{
            type: 'string',
            required: true,
            message: '请填写内容',
            trigger: ['blur', 'change']
          }]
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
      //ram选择器
      changeram(e) {
        // console.log("ram:", e);
        this.data.Ram = e
      },
      //rom选择器
      changerom(e) {
        // console.log("rom:", e);
        this.data.Rom = e
      },
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

        .nameleft {
          flex: 3;
        }

        .nameright {
          flex: 2;
          margin-left: 5rpx;
        }
      }

      .RomRam {
        display: flex;

        .ram {
          margin-left: 90rpx;
        }
      }
    }
  }
</style>
