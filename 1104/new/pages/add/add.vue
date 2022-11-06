<template>
  <view class="add">
    <form action="">
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
        <button>提交</button>
      </view>
    </form>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
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
    }
  }
</style>
