<template>
  <view class="add">
    <form @submit="onsubmit">
      <view class="item">
        <input type="text" name="title" placeholder="请输入标题">
      </view>
      <view class="item">
        <input type="text" name="author" placeholder="请输入作者">
      </view>
      <view class="item">
        <textarea name="content" cols="30" rows="10" placeholder="请输入内容"></textarea>
      </view>
      <view class="item">
        <button form-type="submit" type="primary">提交</button>
        <button form-type="reset" type="warn">重置</button>
      </view>
    </form>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      //点击提交表单
      onsubmit(e) {
        let adddata = e.detail.value
        uniCloud.callFunction({
          name: "art_add_row",
          data: {
            adddata
          }
        }).then(res => {
          console.log(res)
        })

      }
    }

  }
</script>

<style lang="scss" scoped>
  .add {
    padding: 30rpx;

    .item {
      padding-bottom: 20rpx;

      input,
      textarea {
        border: 1rpx solid #ff557f;
        height: 80rpx;
        padding: 0 20rpx;
      }

      textarea {
        height: 300rpx;
        width: 100%;
        box-sizing: border-box;
      }

      button {
        margin-bottom: 20rpx;
      }
    }
  }
</style>
