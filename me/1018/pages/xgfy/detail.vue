<template>
  <view class="container">
    <unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="options"
      :collection="collectionList" :getone="true" :manual="true">
      <view v-if="error">{{error.message}}</view>
      <view v-else-if="loading">
        <uni-load-more :contentText="loadMore" status="loading"></uni-load-more>
      </view>
      <view v-else-if="data">
        <view>
          <text>姓名</text>
          <text>{{data.username}}</text>
        </view>
        <view>
          <text>性别</text>
          <text>{{options.gender_valuetotext[data.gender]}}</text>
        </view>
        <view>
          <text>电话</text>
          <text>{{data.mobile}}</text>
        </view>
        <view>
          <text>身份证</text>
          <text>{{data.idcord}}</text>
        </view>
        <view>
          <text>返回日期</text>
          <!-- <text>{{data.fdate}}</text> -->
          <uni-dateformat date="{{data.fdate}}"></uni-dateformat>
        </view>
        <view>
          <text>地址</text>
          <text>{{data.add && data.add[0] && data.add[0].text}}</text>
        </view>
        <view>
          <text>健康码</text>
          <uni-file-picker v-if="data.photo && data.photo.fileType == 'image'" :value="data.photo"
            :file-mediatype="data.photo && data.photo.fileType" return-type="object" readonly></uni-file-picker>
          <uni-link v-else-if="data.photo" :href="data.photo.url" :text="data.photo.url">
          </uni-link>
          <text v-else></text>
        </view>
        <view>
          <text>审核状态</text>
          <text>{{data.statu == true ? '✅' : '❌'}}</text>
        </view>
        <view>
          <text>省</text>
          <text>{{data.province_code}}</text>
        </view>
        <view>
          <text>市</text>
          <text>{{data.city_code}}</text>
        </view>
      </view>
    </unicloud-db>
    <view class="btns">
      <button type="primary" @click="handleUpdate">修改</button>
      <button type="warn" class="btn-delete" @click="handleDelete">删除</button>
    </view>
  </view>
</template>

<script>
  // 由schema2code生成，包含校验规则和enum静态数据
  import {
    enumConverter
  } from '../../js_sdk/validator/xgfy.js'
  const db = uniCloud.database()

  export default {
    data() {
      return {
        queryWhere: '',
        collectionList: [db.collection('xgfy').field(
          'username,gender,mobile,idcord,fdate,add,photo,statu,province_code,city_code').getTemp(), db.collection(
          'opendb-city-china').field('code, name as text, eq(type, 2) as isleaf').getTemp()],
        loadMore: {
          contentdown: '',
          contentrefresh: '',
          contentnomore: ''
        },
        options: {
          // 将scheme enum 属性静态数据中的value转成text
          ...enumConverter
        }
      }
    },
    onLoad(e) {
      this._id = e.id
    },
    onReady() {
      if (this._id) {
        this.collectionList = [db.collection('xgfy').where('_id=="' + this._id + '"').field(
          'username,gender,mobile,idcord,fdate,add,photo,statu,province_code,city_code').getTemp(), db.collection(
          'opendb-city-china').field('code, name as text, eq(type, 2) as isleaf').getTemp()]
      }
    },
    methods: {
      handleUpdate() {
        // 打开修改页面
        uni.navigateTo({
          url: './edit?id=' + this._id,
          events: {
            // 监听修改页面成功修改数据后, 刷新当前页面数据
            refreshData: () => {
              this.$refs.udb.loadData({
                clear: true
              })
            }
          }
        })
      },
      handleDelete() {
        this.$refs.udb.remove(this._id, {
          success: (res) => {
            // 删除数据成功后跳转到list页面
            uni.navigateTo({
              url: './list'
            })
          }
        })
      }
    }
  }
</script>

<style>
  .container {
    padding: 10px;
  }

  .btns {
    margin-top: 10px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
  }

  .btns button {
    flex: 1;
  }

  .btn-delete {
    margin-left: 10px;
  }
</style>
