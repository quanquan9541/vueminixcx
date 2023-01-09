<template>
  <view>
    <view class="commentFrame">
      <uni-easyinput ref="uipt" @confirm="goComment" suffixIcon="paperplane" v-model="replyContent"
        :placeholder="placeholder" @iconClick="goComment"></uni-easyinput>
    </view>
  </view>
</template>

<script>
  const utils = uniCloud.importObject('utils', {
    customUI: true // 取消自动展示的交互提示界面
  });
  const db = uniCloud.database();
  import {
    getImgSrc,
    getProvince
  } from '@/utils/tools.js';
  export default {
    name: 'comment-frame',
    props: {
      comment: {
        type: Object,
        default: () => {
          return {};
        }
      },
      placeholder: {
        type: String,
        default: '评论'
      }
    },
    data() {
      return {
        replyContent: '',
      };
    },
    methods: {
      async goComment() {
        if (!this.replyContent) {
          uni.showToast({
            icon: 'none',
            title: '什么也没有说'
          });
          return;
        }
        // console.log(this.replyContent);
        let province = await getProvince();
        db.collection('quanzi_comment')
          .add({
            comment_content: this.replyContent,
            reply_user_id: null,
            reply_comment_id: null,
            province,
            ...this.comment
          })
          .then(res => {
            uni.showToast({
              title: '评论成功'
            });
            // console.log(res);
            this.$emit('commentEnv', {
              _id: res.result.id,
              comment_content: this.replyContent,
              province,
              comment_date: Date.now()
            });

            //清空输入框
            this.replyContent = '';
            //使用云对象
            utils.operation('quanzi_article', 'comment_count', this.comment.article_id, 1);
          });
      }
    }
  };
</script>

<style lang="scss">
  .commentFrame {
    width: 100%;
    background: #fff;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
</style>
