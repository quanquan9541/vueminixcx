<template>
  <view class="content">
    <input type="text" class="input" v-model="content" placeholder="留言板">
    <button type="primary" @click="publish" size="mini">提交</button>
  </view>
  <view v-for="item in list" :key="item._id">
    <view class="box">
      {{item.content}}
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        content: '',
        list: '',
      }
    },
    onLoad() {
      uniCloud.callFunction({
        name: 'fun',
        data: {
          api: 'getmassage',
        }
      }).then(res => {
        this.list = res.result.data
      })
    },
    methods: {
      publish() {
        if (!this.content.trim() == "")
        //判断是否为空值，！表示取反
        {
          uni.showToast({
            title: '留言成功',
            duration: 1000
          });
          //提示1
          uniCloud.callFunction({
            name: 'fun',
            //调用云函数
            data: {
              api: 'publish',
              content: this.content
            }
          }).then(res => {
            console.log(res) //返回云端结果
            this.list.push({
              _id: res.result.id,
              content: this.content
            })
            //直接push一行
            this.content = ""
            //清空输入框
          })
        } else {
          uni.showToast({
            title: '请输入内容',
            duration: 1000,
            //提示2
          });
        }
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    margin: rpx;
  }

  .input {
    border-bottom: 1px solid #ccc;
    padding: 6px;
    flex: 1;
  }

  .button {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }

  .box {
    margin: 40rpx;
    border-bottom: 1px solid #ccc;
    padding: 20rpx, 0;
  }
</style>
