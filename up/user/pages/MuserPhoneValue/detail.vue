<template>
  <view class="container">
    <unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="options" :collection="collectionList" :getone="true" :manual="true">
      <view v-if="error">{{error.message}}</view>
      <view v-else-if="loading">
        <uni-load-more :contentText="loadMore" status="loading"></uni-load-more>
      </view>
      <view v-else-if="data">
        <view>
          <text>年龄</text>
          <text>{{data.age}}</text>
        </view>
        <view>
          <text>性别</text>
          <text>{{options.sex_valuetotext[data.sex]}}</text>
        </view>
        <view>
          <text>品牌</text>
          <text>{{data.phonebrand && data.phonebrand[0] && data.phonebrand[0].text}}</text>
        </view>
        <view>
          <text>内存</text>
          <text>{{options.ram_valuetotext[data.ram]}}</text>
        </view>
        <view>
          <text>闪存</text>
          <text>{{options.rom_valuetotext[data.rom]}}</text>
        </view>
        <view>
          <text>品牌影响</text>
          <text>{{options.isbrand_valuetotext[data.isbrand]}}</text>
        </view>
        <view>
          <text>预算</text>
          <text>{{data.moneymaxjiag}}</text>
        </view>
        <view>
          <text>金钱影响</text>
          <text>{{options.ismoney_valuetotext[data.ismoney]}}</text>
        </view>
        <view>
          <text>重要</text>
          <text>{{options.import_valuetotext[data.import]}}</text>
        </view>
        <view>
          <text>显示</text>
          <text>{{data.screenv}}</text>
        </view>
        <view>
          <text>影像</text>
          <text>{{data.camerav}}</text>
        </view>
        <view>
          <text>快充</text>
          <text>{{data.fastchargev}}</text>
        </view>
        <view>
          <text>续航</text>
          <text>{{data.endurancev}}</text>
        </view>
        <view>
          <text>轻薄</text>
          <text>{{data.lightthinv}}</text>
        </view>
        <view>
          <text>性能</text>
          <text>{{data.performancev}}</text>
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
  import { enumConverter } from '../../js_sdk/validator/MuserPhoneValue.js'
  const db = uniCloud.database()

  export default {
    data() {
      return {
        queryWhere: '',
        collectionList: [ db.collection('MuserPhoneValue').field('age,sex,phonebrand,ram,rom,isbrand,moneymaxjiag,ismoney,import,screenv,camerav,fastchargev,endurancev,lightthinv,performancev').getTemp(),db.collection('Manufacturer_brand').field('_id, name as text').getTemp() ],
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
        this.collectionList = [ db.collection('MuserPhoneValue').where('_id=="' + this._id + '"').field('age,sex,phonebrand,ram,rom,isbrand,moneymaxjiag,ismoney,import,screenv,camerav,fastchargev,endurancev,lightthinv,performancev').getTemp(),db.collection('Manufacturer_brand').field('_id, name as text').getTemp() ]
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
