<template>
  <view class="add">
    <!-- {{formvalue.title}}
    {{formvalue.author}}
    {{formvalue.content}} -->
    <form @submit="onsubmit">
      <view class="item">
        <input type="text" v-model="formvalue.title" name="title" placeholder="请输入标题">
      </view>
      <view class="item">
        <input type="text" v-model="formvalue.author" name="author" placeholder="请输入作者">
      </view>
      <view class="item">
        <textarea v-model="formvalue.content" name="content" cols="30" rows="10" placeholder="请输入内容"></textarea>
      </view>
      <view class="item">
        <button form-type="submit" type="primary" :disabled="inDisabled(formvalue)">提交</button>
        <button form-type="reset" type="warn">重置</button>
      </view>
    </form>
  </view>
</template>

<script>
  let id;
  export default {
    data() {
      return {
        formvalue: {
          title: "",
          author: "",
          content: ""
        }
      };
    },
    onLoad(e) {
      console.log(e);
      id = e.id;
      this.getData()
    },
    methods: {
      //获取详情
      getData() {
        uniCloud.callFunction({
          name: "art_get_row",
          data: {
            id
          }
        }).then(res => {
          console.log(res);
          this.formvalue = res.result.data[0]
        })
      },
      //判断按钮禁用
      inDisabled(formvalue) {
        // let formvalue = formvalue
        for (let key in formvalue) {
          if (!formvalue[key]) {
            return true
          }
        }
      },
      //点击提交表单
      onsubmit(e) {
        let adddata = e.detail.value
        uniCloud.callFunction({
          name: "art_updata_row",
          data: {
            adddata: this.formvalue
          }
        }).then(res => {
          uni.showToast({
            title: "修改成功"
          })
          setTimeout(() => {
            uni.navigateBack()
          }, 2000)
          // console.log(res)
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
