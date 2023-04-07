<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="title" label="名称">
        <uni-data-picker v-model="formData.title" collection="Manufacturer_brand" parent-field="parent_id.value"
          self-field="_id" field="_id as value, name as text" @change="onchange">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="configurationParameter" label="配置">
        <view v-for="item in formData.configurationParameter" :key="_id">
          <money :item="item"></money>
        </view>
      </uni-forms-item>
      <uni-forms-item name="screenMeasurement" label="屏尺寸">
        <uni-easyinput placeholder="屏幕尺寸" v-model="formData.screenMeasurement"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenMaterial" label="材质">
        <uni-data-checkbox v-model="formData.screenMaterial" :localdata="formOptions.screenMaterial_localdata">
        </uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="screenSupplier" label="屏厂">
        <uni-data-checkbox :multiple="true" v-model="formData.screenSupplier"
          :localdata="formOptions.screenSupplier_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="screenX" label="横向">
        <uni-easyinput placeholder="横轴" type="number" v-model="formData.screenX"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenY" label="纵向">
        <uni-easyinput placeholder="纵轴" type="number" v-model="formData.screenY" @blur="blur"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenPPI" label="PPI">
        <uni-easyinput placeholder="等效PPI" v-model="formData.screenPPI"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenRenovate" label="刷新率">
        <uni-easyinput placeholder="请输入刷新率" v-model="formData.screenRenovate"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenSampling" label="采用率">
        <uni-easyinput placeholder="请输入采样率" v-model="formData.screenSampling"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenDimming" label="调光">
        <uni-data-checkbox v-model="formData.screenDimming" :localdata="formOptions.screenDimming_localdata">
        </uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="screenPwm" label="频率">
        <uni-easyinput placeholder="调光频率" v-model="formData.screenPwm"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenLuminance" label="亮度">
        <uni-easyinput placeholder="屏幕亮度/nit" type="number" v-model="formData.screenLuminance"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenColor" label="色彩">
        <uni-easyinput placeholder="屏幕色彩丰富度/bit" type="number" v-model="formData.screenColor"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="screenAdd" label="附加功能">
        <uni-data-checkbox :multiple="true" v-model="formData.screenAdd" :localdata="formOptions.screenAdd_localdata">
        </uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="screenAdmin" label="情感分">
        <uni-easyinput placeholder="加权分0-1之间" type="number" v-model="formData.screenAdmin"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="AppearanceDesign" label="外观">
        <uni-easyinput placeholder="外观设计" v-model="formData.AppearanceDesign"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="Camera" label="相机">
        <view v-for="item in formData.Camera" :key="_id">
          <left-right :item="item"></left-right>
        </view>
      </uni-forms-item>
      <uni-forms-item name="socfunction" label="芯片">
        <uni-data-picker v-model="formData.socfunction" collection="Msoc" parent-field="parent_id.value"
          self-field="_id" field="_id as value, name as text">
        </uni-data-picker>
      </uni-forms-item>
      <uni-forms-item name="ram" label="内存">
        <uni-easyinput placeholder="内存" v-model="formData.ram"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="rom" label="闪存">
        <uni-easyinput placeholder="闪存" v-model="formData.rom"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="cell" label="电池">
        <uni-easyinput placeholder="电池容量" type="number" v-model="formData.cell"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="WiredCharging" label="有线充">
        <uni-easyinput placeholder="有线充电" type="number" v-model="formData.WiredCharging"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="WirelessCharging" label="无线充">
        <uni-easyinput placeholder="无线充电" type="number" v-model="formData.WirelessCharging"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="ReverseCharging" label="反充">
        <uni-easyinput placeholder="反向充电" type="number" v-model="formData.ReverseCharging"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="measurementHight" label="高度">
        <uni-easyinput placeholder="高度" v-model="formData.measurementHight"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="measurementWidth" label="宽度">
        <uni-easyinput placeholder="宽度" v-model="formData.measurementWidth"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="measurementThickness" label="厚度">
        <uni-easyinput placeholder="厚度" v-model="formData.measurementThickness"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="weight" label="重量">
        <uni-easyinput placeholder="重量" v-model="formData.weight"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="cheek" label="边框">
        <uni-data-checkbox v-model="formData.cheek" :localdata="formOptions.cheek_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="backCover" label="后盖">
        <uni-data-checkbox v-model="formData.backCover" :localdata="formOptions.backCover_localdata">
        </uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="system" label="系统">
        <uni-easyinput placeholder="系统名称" v-model="formData.system"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="fingerprintIdentification" label="指纹">
        <uni-data-checkbox v-model="formData.fingerprintIdentification"
          :localdata="formOptions.fingerprintIdentification_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="motor" label="马达">
        <uni-data-checkbox v-model="formData.motor" :localdata="formOptions.motor_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="AdditionalExperience" label="其他">
        <uni-data-checkbox :multiple="true" v-model="formData.AdditionalExperience"
          :localdata="formOptions.AdditionalExperience_localdata"></uni-data-checkbox>
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
    callWithErrorHandling
  } from "vue";
  import {
    validator
  } from '../../js_sdk/validator/Mparameter.js';
  import {
    phonevalue
  } from '../../js/tools.js';
  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'Mparameter';

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
        "title": "",
        "configurationParameter": [],
        "screenMeasurement": "",
        "screenMaterial": "", //材质
        "screenSupplier": [
          0
        ],
        "screenX": 1080, //
        "screenY": 0,
        "screenPPI": "",
        "screenRenovate": "120",
        "screenSampling": "240",
        "screenDimming": 1,
        "screenPwm": "",
        "screenLuminance": 1200,
        "screenColor": 8,
        "screenAdd": [
          0
        ],
        "screenAdmin": 0,
        "AppearanceDesign": "",
        "Camera": [],
        "socfunction": "",
        "ram": "LPDDR 5",
        "rom": "USF 3.1",
        "cell": 5000,
        "WiredCharging": 65,
        "WirelessCharging": 50,
        "ReverseCharging": 10,
        "measurementHight": "170",
        "measurementWidth": "70",
        "measurementThickness": "7.9",
        "weight": "200.00",
        "cheek": 1,
        "backCover": 1,
        "system": "",
        "fingerprintIdentification": 1,
        "motor": 1,
        "AdditionalExperience": [
          1,
          2,
          3
        ],
        "last_date": null
      }
      return {
        formData,
        formOptions: {
          "screenMaterial_localdata": [{
              "text": "OLED",
              "value": "0.8"
            },
            {
              "text": "LCD",
              "value": "1"
            }
          ],
          "screenSupplier_localdata": [{
              "text": "三星",
              "value": 0
            },
            {
              "text": "华星光电",
              "value": 1
            },
            {
              "text": "京东方",
              "value": 2
            },
            {
              "text": "天马",
              "value": 3
            },
            {
              "text": "维信诺",
              "value": 4
            },
            {
              "text": "柔宇",
              "value": 5
            },
            {
              "text": "未知",
              "value": 9
            }
          ],
          "screenDimming_localdata": [{
              "text": "DC调光",
              "value": 1
            },
            {
              "text": "类DC调光",
              "value": 2
            },
            {
              "text": "PWM调光",
              "value": 3
            }
          ],
          "screenAdd_localdata": [{
              "text": "DCI-P3",
              "value": 0
            },
            {
              "text": "HDR10",
              "value": 1
            },
            {
              "text": "HDR10+",
              "value": 2
            }
          ],
          "cheek_localdata": [{
              "text": "塑料",
              "value": 1
            },
            {
              "text": "金属",
              "value": 2
            }
          ],
          "backCover_localdata": [{
              "text": "塑料",
              "value": 1
            },
            {
              "text": "玻璃",
              "value": 2
            },
            {
              "text": "陶瓷",
              "value": 2
            }
          ],
          "fingerprintIdentification_localdata": [{
              "text": "短焦·光学·屏下指纹",
              "value": 1
            },
            {
              "text": "超薄·光学·屏下指纹",
              "value": 2
            },
            {
              "text": "侧边·实体指纹",
              "value": 3
            },
            {
              "text": "背部·实体指纹",
              "value": 4
            },
            {
              "text": "无指纹识别",
              "value": 5
            }
          ],
          "motor_localdata": [{
              "text": "X轴·线性马达",
              "value": 1
            },
            {
              "text": "Z轴·线性马达",
              "value": 2
            },
            {
              "text": "转子马达",
              "value": 3
            }
          ],
          "AdditionalExperience_localdata": [{
              "text": "双扬声器",
              "value": 1
            },
            {
              "text": "NFC",
              "value": 2
            },
            {
              "text": "WiFi6",
              "value": 3
            },
            {
              "text": "红外遥控",
              "value": 4
            },
            {
              "text": "VC液冷散热",
              "value": 5
            },
            {
              "text": "IP68防尘防水",
              "value": 6
            }
          ]
        },
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    computed: {

    },
    methods: {
      //计算ppi
      blur() {
        if (this.formData.screenMeasurement && this.formData.screenMaterial && this.formData.screenX && this
          .formData.screenY) {
          // console.log('失去焦点');
          const ppi2 = Number(this.formData.screenX) ** 2 + Number(this.formData.screenY) ** 2
          const ppi = Math.round(Math.sqrt(ppi2) / Number(this.formData
            .screenMeasurement))
          this.formData.screenPPI = String(ppi)
          // console.log(ppi);
        } else {
          console.log('缺失数据');
        }

      },
      // 获取选择手机id
      onchange(e) {
        const id = e.detail.value[2].value
        // console.log(id);
        this.getCamera(id)
      },
      //获取相机和金钱数据
      async getCamera(e) {
        let Cameradata = await db.collection('Mcamera').where(`phone_id=="${e}"`).field(
          "_id, ComeraType,Comeraedit, sort").orderBy("sort asc").get()
        let Moneydata = await await db.collection('Mmoney').where(`phone_id=="${e}"`).field("_id,ram,rom,money,sort")
          .orderBy("sort asc").get()

        this.formData.Camera = Cameradata.result.data
        this.formData.configurationParameter = Moneydata.result.data
        // console.log(this.formData.configurationParameter);
      },
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          this.submitForm(res)
          phonevalue(this.formData)
          return
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
          setTimeout(() => uni.navigateBack(), 500) //注意
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