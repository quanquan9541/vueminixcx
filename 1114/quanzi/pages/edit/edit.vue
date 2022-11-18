<template>
  <view class="edit">
    <!-- 标题 -->
    <view class="title">
      <input type="text" placeholder="请输入标题" placeholder-class="placeholderClass">
    </view>
    <!-- 内容 -->
    <view class="content">
      <!-- 富文本 -->
      <editor placeholder="写点什么吧"></editor>
    </view>
    <!-- 按钮 -->
    <view class="btnGroup">
      <u-button type="primary" text="确认发表"></u-button>
    </view>
    <!-- 工具 -->
    <view class="tools">
      <view class="item">
        <text class="iconfont icon-zitibiaoti"></text>
      </view>
      <view class="item">
        <text class="iconfont icon-zitijiacu"></text>
      </view>
      <view class="item">
        <text class="iconfont icon-zitixieti"></text>
      </view>
      <view class="item">
        <text class="iconfont icon-fengexian"></text>
      </view>
      <view class="item">
        <text class="iconfont icon-charutupian
"></text>
      </view>
      <view class="item">
        <text class="iconfont icon-duigou_kuai"></text>
      </view>
    </view>
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
  /deep/ .ql-blank::before {
    font-style: normal;
    color: #e0e0e0;
  }

  .edit {
    padding: 30rpx;

    .title {
      input {
        font-size: 46rpx;
        height: 120rpx;
        border-bottom: 1rpx #e4e4e4 solid;
        margin-bottom: 30rpx;
        color: #666;
      }

      .placeholderClass {
        color: #e0e0e0;
      }
    }

    .content {
      height: calc(100vh - 500rpx);
      margin-bottom: 30rpx;
    }

    .tools {
      width: 100%;
      height: 80rpx;
      background: #fff;
      border-top: 1rpx solid #f4f4f4;
      position: fixed;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .iconfont {
        font-size: 36rpx;
        color: #333;

        //点击变色存在疑问
        &.active {
          color: #0199FE
        }
      }
    }
  }
</style>
