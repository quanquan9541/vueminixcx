<template>
  <view class="big">
    <u--form labelPosition="left" :model="Cpu" :rules="Cpurules" ref="Cpuform">
      <!-- 厂商 -->
      <u-form-item label="厂商" prop="Cpu.manufacturer" borderBottom>
        <uni-data-select v-model="Cpu.manufacturer" :localdata="manufacturerlist" @change="manufacturer_change">
        </uni-data-select>
      </u-form-item>
      <!-- 系列 -->
      <u-form-item label="系列" prop="Cpu.series" borderBottom>
        <u--input placeholder="请输入系列" border="surround" clearable v-model="Cpu.series"></u--input>
      </u-form-item>
      <!-- 型号 -->
      <u-form-item label="型号" prop="Cpu.model" borderBottom>
        <u--input placeholder="请输入型号" border="surround" clearable v-model="Cpu.model"></u--input>
      </u-form-item>
      <!-- 数值 -->
      <u-form-item label="数值" prop="Cpu.Cpuvalue" borderBottom>
        <u--input type="number" placeholder="请输入数值" border="surround" clearable v-model="Cpu.Cpuvalue"></u--input>
      </u-form-item>
      <!-- 状态 -->
      <u-form-item label="状态" prop="Cpu.state">
        <u-switch v-model="Cpu.state" @change="statechange"></u-switch>
      </u-form-item>
    </u--form>
    <u-button class='button' type="primary" text="确定" @click="submit"></u-button>
    <!--  <u-button class='button' type="warning" text="重置" @click="reset"></u-button> -->
  </view>
</template>

<script>
  const db = uniCloud.database();
  let Cpudata; //定义全局变量
  export default {
    data() {
      return {
        Cpu: {
          manufacturer: "",
          series: "",
          model: "",
          Cpuvalue: "",
          state: false
        }, //数据
        Cpurules: {
          manufacturer: "",
          series: "",
          model: "",
          Cpuvalue: "",
          state: ""
        }, //验证规则
        //厂商列表
        manufacturerlist: [{
            value: '高通',
            text: "高通"
          },
          {
            value: '华为',
            text: "华为"
          },
          {
            value: '苹果',
            text: "苹果"
          },
          {
            value: '联发科',
            text: "联发科"
          },
          {
            value: '三星',
            text: "三星"
          },
          {
            value: '其他',
            text: "其他"
          }
        ],
        brandlist: []

      }
    },
    onShow() {
      Cpudata = uni.getStorageSync('Cpu_key')
      if (Cpudata) {
        uni.setNavigationBarTitle({
          title: '修改参数'
        });
        Object.keys(this.Cpu).forEach((key) => {
          this.Cpu[key] = Cpudata[key]
        })
      }
    },
    onUnload() {
      uni.removeStorageSync('Cpu_key')
      // console.log('离开了');
    },
    methods: {
      //状态选择
      statechange(e) {
        // console.log('change', e);
        this.Cpu.state = e
      },
      //选择品牌
      manufacturer_change(e) {
        this.Cpu.manufacturer = e
      },
      //提交表单
      submit() {
        this.$refs.Cpuform.validate().then(res => {
          uni.$u.toast('校验通过')
        }).catch(errors => {
          uni.$u.toast('校验失败')
        })
        //读表
        console.log(this.Cpu);

        console.log('id', Cpudata._id);
        //写个判断
        if (!Cpudata) {
          //新增数据
          db.collection('mini_cpu').add({
            ...this.Cpu
          }).then(res => {
            console.log('提交成功', res);
          }).catch(err => {
            console.log('提交失败', err);
          })
        } else {
          db.collection('mini_cpu').where(`_id=="${Cpudata._id}"`).update({
            ...this.Cpu
          }).then(res => {
            console.log('修改成功', res);
          }).catch(err => {
            console.log('修改失败', err);
          })

        }


      },
      // //重置表单
      // reset() {
      //   this.$refs.Cpuform.resetFields()
      //   this.Cpu.manufacturer = ''
      //   this.Cpu.series = ''
      // }
    }
  }
</script>

<style lang="scss">
  .big {
    margin: 0 40rpx;
  }

  .button {
    margin: 15rpx 0;
  }
</style>
