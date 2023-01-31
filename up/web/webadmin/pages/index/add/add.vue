<template>
  <view class="phone">
    <view class="form">
      <u--form labelPosition="left" :model="data" :rules="datarules" ref="dataform">
        <view class="name">
          <u-form-item labelWidth='125rpx' label="手机型号" prop="name.text" borderBottom>
            <uni-data-picker class='nameleft' :localdata="phone" placeholder="请选择手机品牌" popup-title="请选择手机型号"
              @change="onchange" @nodeclick="onnodeclick">
            </uni-data-picker>
            <uni-easyinput class='nameright' v-model="data.name.text" placeholder="请输入具体型号"></uni-easyinput>
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
        <u-form-item labelWidth='125rpx' label="屏幕厂商" prop="monitor" borderBottom>
          <uni-data-picker :localdata="monitorlist" placeholder="请选择屏幕厂商" popup-title="请选择屏幕" @change="monitorchange"
            @nodeclick="onnodeclick">
          </uni-data-picker>
        </u-form-item>
        <u-form-item class="pixel" labelWidth='125rpx' label="分辨率" prop="pixel" borderBottom>
          <uni-easyinput class="l_box" v-model="data.pixel.t_pixel" placeholder="横向分辨率"></uni-easyinput>
          <uni-easyinput class="c_box" v-model="data.pixel.l_pixel" placeholder="纵向分辨率"></uni-easyinput>
          <uni-easyinput class="r_box" v-model="data.pixel.size" placeholder="尺寸"></uni-easyinput>
        </u-form-item>
        <u-form-item class="Hz" labelWidth='125rpx' label="刷新采样" prop="Hz" borderBottom>
          <uni-easyinput class="l_box" v-model="data.Hz.R_Hz" placeholder="刷新率"></uni-easyinput>
          <uni-easyinput class="r_box" v-model="data.Hz.S_Hz" placeholder="采样率"></uni-easyinput>
        </u-form-item>
        <u-form-item labelWidth='125rpx' label="调光方式" prop="Hz" borderBottom>
          <uni-data-picker :localdata="Dimminglist" placeholder="请选择调光方式" popup-title="请选择调光方式" @change="Dimmingchange"
            @nodeclick="onnodeclick">
          </uni-data-picker>
        </u-form-item>
        <u-form-item class="nitcolor" labelWidth='125rpx' label="亮度颜色" prop="nitcolor.nit" borderBottom>
          <uni-easyinput class="l_box" v-model="data.nitcolor.nit" placeholder="亮度"></uni-easyinput>
          <uni-data-picker class="r_box" :localdata="colorlist" placeholder="请选择色彩数值" popup-title="请选择调光方式"
            @change="colorchange" @nodeclick="onnodeclick">
          </uni-data-picker>
        </u-form-item>
        <u-form-item labelWidth='125rpx' label="屏幕附加" prop="ScreenAttach" borderBottom>
          <uni-data-checkbox multiple v-model="data.ScreenAttach.value" :localdata="ScreenAttachlist" :multiple="true"
            @change="ScreenAttachchange">
          </uni-data-checkbox>
        </u-form-item>
        <u-form-item labelWidth='125rpx' label="外观设计" prop="Design" borderBottom>
          <uni-data-picker :localdata="Designlist" placeholder="请选择外观设计" popup-title="请选择外观设计" @change="Designchange"
            @nodeclick="onnodeclick">
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
  //屏幕类型0 OLED 1LCD
  let monitorlistchildren = [{
      text: "OLED",
      value: 1000
    },
    {
      text: "LCD",
      value: 2000
    }
  ];
  //
  export default {
    data() {
      return {
        // 表单数据
        data: {
          name: {
            prefix: "",
            text: ""
          },
          soc: '',
          Rom: "",
          Ram: "",
          monitor: "",
          pixel: {
            t_pixel: "", //横向
            l_pixel: "", //纵向
            size: "", //尺寸
          },
          Hz: {
            R_Hz: "",
            S_Hz: "",
            Dimming: "" //调光
          },
          nitcolor: { //亮度和色彩
            nit: "",
            color: ""
          },
          ScreenAttach: {
            Object: [],
            value: []
          }, //屏幕附加
          Design: "" //外观
        },
        // 表单规则
        datarules: {
          'name.text': [{
            type: 'string',
            required: true,
            message: '请填写具体型号',
            trigger: ['blur', 'change']
          }],
          'nitcolor.nit': [{
            type: 'string',
            required: true,
            message: '请填写亮度数值',
            trigger: ['blur', 'change']
          }]
        },
        //外观设计
        Designlist: [{
          value: 1,
          text: "全面屏",
          children: [{
              value: 10,
              text: "刘海",
            },
            {
              value: 20,
              text: "挖槽",
            },
            {
              value: 30,
              text: "水滴",
            },
            {
              value: 40,
              text: "打孔",
              children: [{
                  value: 401,
                  text: "左置",
                },
                {
                  value: 402,
                  text: "中置",
                }, {
                  value: 403,
                  text: "右置",
                }
              ]
            },
            {
              value: 50,
              text: "真全面屏(屏下镜头)",
            }

          ]
        }, {
          value: 99999,
          text: "非全面屏",
        }],
        //色彩表
        colorlist: [{
          "value": 8,
          "text": "8bit"
        }, {
          "value": 10,
          "text": "10bit"
        }, {
          "value": 12,
          "text": "12bit"
        }],
        //屏幕附加
        ScreenAttachlist: [{
          "value": 0,
          "text": "DCI-P3"
        }, {
          "value": 1,
          "text": "HDR10+"
        }],
        //调光
        Dimminglist: [{
            value: 0,
            text: "DC调光",

          }, {
            value: 1,
            text: "PWM调光",
            children: [{
                value: 1000,
                text: "1440Hz",
              },
              {
                value: 1100,
                text: "1920Hz",
              },
              {
                value: 1200,
                text: "2160Hz",
              }
            ]
          },

        ],
        //monitorlist屏幕厂商选择器
        monitorlist: [{
            value: 0,
            text: "三星",
            children: monitorlistchildren

          }, {
            value: 1,
            text: "京东方",
            children: monitorlistchildren
          },
          {
            value: 2,
            text: "华星光电",
            children: monitorlistchildren
          },
          {
            value: 3,
            text: "天马微电子",
            children: monitorlistchildren
          },
          {
            value: 4,
            text: "维信诺",
            children: monitorlistchildren
          },
          {
            value: 5,
            text: "柔宇科技",
            children: monitorlistchildren
          },
          {
            value: 6,
            text: "其他",
            children: monitorlistchildren
          }
        ],
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
      //外观选择
      Designchange(e) {
        // console.log('外观选择', e);
        this.data.Design = e.detail.value
      },

      //颜色选择
      colorchange(e) {
        // console.log('颜色选择',e);
        this.data.nitcolor.color = e.detail.value
      },
      //屏幕附加
      ScreenAttachchange(e) {
        // console.log(e);
        this.data.ScreenAttach.Object = e.detail
        this.data.ScreenAttach.value = e.detail.value
      },
      //选择调光方式
      Dimmingchange(e) {
        this.data.Hz.Dimming = e.detail.value
      },
      //屏幕厂商和类型选择器
      monitorchange(e) {
        // console.log('屏幕', e);
        this.data.monitor = e.detail.value
      },
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
        // this.data.names = value[0].text + "\xa0" + value[1].text
        this.data.name.prefix = value
        // console.log(this.data.names);
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

      .pixel,
      .Hz,
      .nitcolor {
        .l_box {
          margin-right: 20rpx;
        }

        .r_box {
          margin-left: 20rpx;
        }
      }

      .name {
        .nameleft {}

        .nameright {
          margin-left: 10rpx;
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
