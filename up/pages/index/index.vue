<template>
  <view class="content">
    <view class="form">
      <uni-forms ref="work" :modelValue="worklist">
        <!-- 钱 -->
        <uni-section class="section" title="金钱部分" type="line">
          <uni-forms-item class="item" label="工资" label-width="75px" name="wages">
            <uni-easyinput type="number" trim="all" v-model="worklist.wages" placeholder="请输入工资" />
          </uni-forms-item>
        </uni-section>
        <!-- 时间 -->
        <uni-section class="section" title="时间部分" type="line">
          <uni-forms-item class="item" label="月工作日" label-width="75px" name="weekday">
            <uni-easyinput type="number" trim="all" v-model="worklist.weekday" placeholder="请输入月工作时间" />
          </uni-forms-item>

          <uni-forms-item class="item" label="工作时长" label-width="75px" name="duration">
            <uni-easyinput type="number" trim="all" v-model="worklist.duration" placeholder="请输入日工作时长(下班时间-上班时间)" />
          </uni-forms-item>

          <uni-forms-item class="item" label="通勤时间" label-width="75px" name="commute">
            <uni-easyinput type="number" trim="all" v-model="worklist.commute" placeholder="请输入通勤时长(上班通勤+下班通勤)" />
          </uni-forms-item>

          <uni-forms-item class="item" label="摸鱼时间" label-width="75px" name="loaf">
            <uni-easyinput type="number" trim="all" v-model="worklist.loaf" placeholder="请输入摸鱼时长(上班摸鱼+吃饭+午休)" />
          </uni-forms-item>
        </uni-section>
      </uni-forms>
      <!-- 要求 -->
      <uni-section class="section" title="资质部分" type="line">
        <uni-forms-item class="item" label="学历" label-width="75px" name="education">
          <uni-data-select v-model="education" :localdata="educationlist" @change="changeeducation"></uni-data-select>
        </uni-forms-item>

        <uni-forms-item class="item" label="职业" label-width="75px" name="occupation">
          <uni-data-select v-model="occupation" :localdata="occupationlist" @change="changeoccupation">
          </uni-data-select>
        </uni-forms-item>
      </uni-section>
      <!-- 环境 -->
      <uni-section class="section" title="环境部分" type="line">
        <uni-forms-item class="item" label="工作单位" label-width="75px" name="company">
          <uni-data-select v-model="company" :localdata="companylist" @change="changecompany"></uni-data-select>
        </uni-forms-item>

        <uni-forms-item class="item" label="工作环境" label-width="75px" name="environment">
          <uni-data-checkbox mode="tag" v-model="environment" :localdata="environmentlist" @change="changeenvironment">
          </uni-data-checkbox>
        </uni-forms-item>

      </uni-section>
    </view>
    <view class="button">
      <button @click="submit">提交</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        //表单绑定
        worklist: {
          wages: '',
          weekday: "",
          duration: "",
          commute: "",
          value: ""
        },

        // 学历值
        education: 1,

        //学历列表
        educationlist: [{
            value: 0.8,
            text: "专科及以下"
          },
          {
            value: 1,
            text: "普通本科"
          },
          {
            value: 1.2,
            text: "985/211本科"
          },
          {
            value: 1.4,
            text: "普通硕士"
          }, {
            value: 1.6,
            text: "985/211硕士"
          }, {
            value: 1.8,
            text: "普通博士"
          }, {
            value: 2,
            text: "985/211博士"
          },
        ],
        //职业值
        occupation: 1,
        //职业列表
        occupationlist: [{
            value: 1,
            text: "无要求"
          },
          {
            value: 1.05,
            text: "基础证书"
          },
          {
            value: 1.1,
            text: "专业证书"
          },
          {
            value: 1.15,
            text: "行业专家"
          }
        ],
        //工作单位值
        company: 1,
        //工作单位
        companylist: [{
            value: 0.8,
            text: "小微公司(少于20人)"
          }, {
            value: 0.9,
            text: "小型公司(20-99人)"
          }, {
            value: 1,
            text: "正常公司(100人以上)"
          },
          {
            value: 1.1,
            text: "上市公司(不限规模)"
          },
          {
            value: 1.2,
            text: "国企(不限规模)"
          },
          {
            value: 1.3,
            text: "欧美外企(不限规模)"
          },
          {
            value: 1.4,
            text: "政府单位(不限规模)"
          }
        ],
        //工作环境值
        environment: 2,
        //环境列表
        environmentlist: [{
            "value": 1,
            "text": "工厂户外"
          },
          {
            "value": 2,
            "text": "办公室"
          },
          {
            "value": 3,
            "text": "自由办公"
          }
        ],
        //
      }
    },
    onLoad() {

    },
    methods: {
      //环境选择
      changeenvironment(e) {
        console.log("环境:", e);
        console.log("环境:", e.detail.value);
        this.environment = e.detail.value
      },
      //单位选择
      changecompany(e) {
        console.log("单位:", e);
        this.company = e
      },
      //职业选择
      changeoccupation(e) {
        console.log("职业:", e);
        this.occupation = e
      },
      //学历选择
      changeeducation(e) {
        console.log("学历:", e);
        this.education = e
      },
      //提交表单
      submit() {
        this.$refs.work.validate().then(res => {
          console.log('表单数据信息：', res);
        }).catch(err => {
          console.log('表单错误信息：', err);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 20rpx;

    .form {
      .section {
        margin-bottom: 10rpx;
        border-bottom: 1rpx #bdbdbd solid;

        .item {
          margin-left: 20rpx;
        }
      }
    }
  }
</style>
