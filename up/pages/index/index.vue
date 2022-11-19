<template>
  <view class="content">
    <view class="form">
      <uni-forms ref="work" :rules="rules" :modelValue="worklist">
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
          <!-- 判断 -->
          <uni-section title="9:00 - 18:00为正常作息" titleFontSize="10px" titleColor="#55aaff" type="circle">
            <uni-forms-item class="item" label="正常作息" label-width="75px" name="morning">
              <uni-data-checkbox mode="tag" v-model="morning" :localdata="judge" @change="changemorning">
              </uni-data-checkbox>
            </uni-forms-item>
            <!-- 夜班判断 -->
            <uni-forms-item class="item" label="无需夜班" label-width="75px" name="night" v-if="morning==1">
              <uni-data-checkbox mode="tag" v-model="night" :localdata=" judgenight" @change="changenight">
              </uni-data-checkbox>
            </uni-forms-item>
          </uni-section>

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
            <uni-data-checkbox mode="tag" v-model="environment" :localdata="environmentlist"
              @change="changeenvironment">
            </uni-data-checkbox>
          </uni-forms-item>

        </uni-section>
        <!-- 人文部分 -->
        <uni-section class="section" title="人文部分" type="line">
          <uni-forms-item class="item" label="同性人数" label-width="75px" name="compete">
            <uni-easyinput type="number" trim="all" v-model="worklist.compete" placeholder="请输入人数" />
          </uni-forms-item>

          <uni-forms-item class="item" label="优质异性" label-width="75px" name="sex">
            <uni-easyinput type="number" trim="all" v-model="worklist.sex" placeholder="请输入优质异性人数" />
          </uni-forms-item>


          <uni-forms-item class="item" label="同事水平" label-width="75px" name="abilitydata">
            <uni-rate v-model="abilitydata" max="10" @change="changeability" />
          </uni-forms-item>

        </uni-section>
      </uni-forms>
    </view>
    <view class="button">
      <button type="primary" @click="submit">提交</button>
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
          loaf: "",
          compete: '',
          sex: ''
        },
        //夜班
        night: 0,
        //夜班表
        judgenight: [{
            "value": 1,
            "text": "是"
          },
          {
            "value": 0,
            "text": "否"
          },
        ],
        morning: 0,
        //判断表
        judge: [{
            "value": 0,
            "text": "是"
          },
          {
            "value": 1,
            "text": "否"
          },
        ],
        //同事水平
        abilitydata: 0,
        // 学历值
        education: 10,

        //学历列表
        educationlist: [{
            value: 8,
            text: "专科及以下"
          },
          {
            value: 10,
            text: "普通本科"
          },
          {
            value: 12,
            text: "985/211本科"
          },
          {
            value: 14,
            text: "普通硕士"
          }, {
            value: 16,
            text: "985/211硕士"
          }, {
            value: 18,
            text: "普通博士"
          }, {
            value: 20,
            text: "985/211博士"
          },
        ],
        //职业值
        occupation: 10,
        //职业列表
        occupationlist: [{
            value: 10,
            text: "无要求"
          },
          {
            value: 11,
            text: "基础证书"
          },
          {
            value: 12,
            text: "专业证书"
          },
          {
            value: 13,
            text: "行业专家"
          }
        ],
        //工作单位值
        company: 10,
        //工作单位
        companylist: [{
            value: 8,
            text: "小微公司(少于20人)"
          }, {
            value: 9,
            text: "小型公司(20-99人)"
          }, {
            value: 10,
            text: "正常公司(100人以上)"
          },
          {
            value: 11,
            text: "上市公司(不限规模)"
          },
          {
            value: 12,
            text: "国企(不限规模)"
          },
          {
            value: 13,
            text: "欧美外企(不限规模)"
          },
          {
            value: 14,
            text: "政府单位(不限规模)"
          }
        ],
        //工作环境值
        environment: 11,
        //环境列表
        environmentlist: [{
            "value": 10,
            "text": "工厂户外"
          },
          {
            "value": 11,
            "text": "办公室"
          },
          {
            "value": 12,
            "text": "自由办公"
          }
        ],
        //
        work: {}, //rules
        time: '', //时间
        Qualifications: '', //资历
        periphery: '', //工作环境
        humanity: '', //人文
        workdata: '', //总数据
        rules: {
          //工资验证
          wages: {
            rules: [{
              required: true,
              errorMessage: '请输入工资',
            }, {
              format: "number"
            }, {
              validateFunction: function(rule, value, data, callback) {
                if (value < 100) {
                  callback('回家睡觉不香吗？')
                }
                return true
              }
            }]
          },
          //月工作日验证
          weekday: {
            rules: [{
              required: true,
              errorMessage: '请输入月工作日',
            }, {
              format: "number"
            }, {
              validateFunction: function(rule, value, data, callback) {
                if (value > 30) {
                  callback('时间猎手？')
                } else if (value < 7) {
                  callback('不要骗自己')
                }
                return true
              }
            }]
          },
          //工作时长验证
          duration: {
            rules: [{
              required: true,
              errorMessage: '请输入工作时长',
            }, {
              format: "number"
            }, {
              validateFunction: function(rule, value, data, callback) {
                if (value > 24) {
                  callback('时间猎手？')
                } else if (value < 2) {
                  callback('不要骗自己')
                }
                return true
              }
            }]
          },
          //通勤时长验证
          commute: {
            rules: [{
              required: true,
              errorMessage: '请输入通勤时长',
            }, {
              format: "number"
            }, {
              validateFunction: function(rule, value, data, callback) {
                if (value > 24) {
                  callback('一直在路上')
                }
                return true
              }
            }]
          },
          //摸鱼时间
          loaf: {
            rules: [{
              required: true,
              errorMessage: '请输入摸鱼时长',
            }, {
              format: "number"
            }, {
              validateFunction: function(rule, value, data, callback) {
                if (value > 24) {
                  callback('透支时间')
                }
                return true
              }
            }]
          },
          //人数判断
          compete: {
            rules: [{
              required: true,
              errorMessage: '请输入同性人数',
            }, {
              format: "number"
            }, ]
          },
          //sex
          sex: {
            rules: [{
              required: true,
              errorMessage: '请输入异性人数',
            }, {
              format: "number"
            }, ]
          },

          /////
        }
      }
    },
    onLoad() {

    },
    methods: {
      //计算
      calculation() {
        let wages = this.work.wages //工资
        let weekday = this.work.weekday //工作日
        let duration = this.work.duration //工时
        let commute = this.work.commute //通勤
        let loaf = this.work.loaf //摸鱼
        let compete = this.work.compete //同性
        let sex = this.work.sex //异性
        let morning = this.morning //早
        let education = this.education //学历
        let night = this.night //夜班
        let occupation = this.occupation //职业资格
        let company = this.company //单位
        let environment = this.environment //环境
        let abilitydata = this.abilitydata //水平
        let time = weekday * (duration + commute - loaf) * (1 + ((morning + night) / 4)) //时间
        // console.log(time)
        this.time = time
        let Qualifications = education * occupation //资历
        this.Qualifications = Qualifications
        let periphery = environment * company //工作环境
        this.periphery = periphery
        let humanity = Math.floor((sex / compete) * abilitydata * 100) //人文
        this.humanity = humanity
        console.log(abilitydata)
        console.log(humanity)
        let workdata = Math.floor(((wages * periphery * (1 + humanity)) / (time * Qualifications)) / 10)
        this.workdata = workdata
      },
      //新增数据
      addlist() {
        let work = this.work
        // 获取db引用
        const db = uniCloud.database() //代码块为cdb
        db.collection('worklist')
          .add({
            ...work,
            morning: this.morning,
            education: this.education,
            night: this.night,
            occupation: this.occupation,
            company: this.company,
            environment: this.environment,
            ability: this.ability,
            time: this.time,
            Qualifications: this.Qualifications,
            periphery: this.periphery,
            humanity: this.humanity,
            workdata: this.workdata
          })
          .then((res) => {
            console.log(res)
            // res 为数据库查询结果
            //获取id
            let id = res.result.id
            console.log(id)
            //延时
            setTimeout(function() {
              //干掉弹窗
              uni.hideLoading();
              //跳转
              uni.navigateTo({
                url: '/pages/worklist/worklist?id=' + id
              });
            }, 2000);


          }).catch((err) => {
            console.log(err.code); // 打印错误码
            console.log(err.message); // 打印错误内容
          })
      },
      //判断是否需要夜班
      changenight(e) {
        console.log("上班时间:", e.detail.value);
        this.night = e.detail.value
      },
      //判断作息时间
      changemorning(e) {
        console.log("上班时间:", e.detail.value);
        this.morning = e.detail.value

      },

      //修改评分
      changeability(e) {
        console.log('rate发生改变:' + JSON.stringify(e))
        this.abilitydata = JSON.stringify(e.value)
      },
      //环境选择
      changeenvironment(e) {
        // console.log("环境:", e);
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
          this.work = res
          //数据计算
          this.calculation()
          // 调用上传函数
          this.addlist()
          //加点动画
          uni.showLoading({
            title: '计算中',
            mask: true
          });
        }).catch(err => {
          console.log('表单错误信息：', err);
        })


        //
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
