<template>
  <view class="edit">
    <!-- 标题 -->
    <view class="title"><input type="text" v-model="artObj.title" placeholder="请输入标题" placeholder-class="placeholderClass" /></view>
    <!-- 内容 -->
    <view class="content">
      <!-- 富文本 -->
      <editor
        :content="artObj.content"
        class="myEdit"
        placeholder="写点什么吧"
        show-img-size:true
        show-img-toolbar:true
        show-img-resize:true
        @ready="onEditReady"
        @focus="onFocus"
        @statuschange="onStatuschange"
      ></editor>
    </view>
    <!-- 按钮 -->
    <view class="btnGroup"><u-button @click="OnSubmit" type="primary" text="确认发表" :disabled="!artObj.title.length"></u-button></view>
    <!-- 工具 -->
    <view class="tools" v-if="toolshow">
      <view class="item" @click="onclickHead"><text class="iconfont icon-zitibiaoti" :class="HeadShow ? 'active' : ''"></text></view>
      <view class="item" @click="onclickBlod"><text class="iconfont icon-zitijiacu" :class="BlodShow ? 'active' : ''"></text></view>
      <view class="item" @click="onclickitalic"><text class="iconfont icon-zitixieti" :class="ItalicShow ? 'active' : ''"></text></view>
      <view class="item" @click="Divider"><text class="iconfont icon-fengexian"></text></view>
      <view class="item" @click="clickInsertImage"><text class="iconfont icon-charutupian"></text></view>
      <view class="item" @click="editOK"><text class="iconfont icon-duigou_kuai"></text></view>
    </view>
  </view>
</template>

<script>
//引入库
import { getImgSrc, getProvince } from '@/utils/tools.js';
//链接云端数据库
const db = uniCloud.database();
let id; //定义全局变量
export default {
  data() {
    return {
      html: '123',
      toolshow: false,
      HeadShow: false,
      BlodShow: false,
      ItalicShow: false,
      artObj: {
        title: '',
        content: '',
        description: '',
        picurls: '',
        province: ''
      }
    };
  },
  onLoad(e) {
    getProvince().then(res => {
      console.log(res);

      this.artObj.province = res;
      console.log('跳转来的id', e);
      if (!e.id) return;
      id = e.id; //为全局变量赋值不需要let 这里可以直接传参更方便 故意测试的
      this.getedit();
    });
  },

  methods: {
    //子组件来的编辑
    async getedit() {
      console.log('第二验证id', id);
      await db
        .collection('quanzi_article')
        .doc(id)
        .field('_id,title,content')
        .get()
        .then(res => {
          console.log(res);
          this.artObj.title = res.result.data[0].title;
          //富文本不显示待处理 //解决方法 set
          // this.artObj.content = res.result.data[0].content;
          let content = res.result.data[0].content;
          this.editorContext.setContents({
            html: content,
            success: res => {
              console.log('6666', res);
            }
          });
        });
    },

    //提交表单
    OnSubmit() {
      this.editorContext.getContents({
        success: res => {
          console.log(this.artObj);
          this.artObj.description = res.text.slice(0, 55);
          this.artObj.content = res.html;
          this.artObj.picurls = getImgSrc(res.html);
          //搞个提示
          uni.showLoading({
            title: '提交中',
            mask: true
          });
          //调用添加数据
          this.addData();
        }
      });
    },
    //添加数据
    addData() {
      db.collection('quanzi_article')
        .add({
          ...this.artObj
        })
        .then(res => {
          console.log(res);
          uni.hideLoading();
          uni.showToast({
            icon: 'success',
            title: '发布成功'
          });
          setTimeout(() => {
            console.log('定时器');
            uni.reLaunch({
              url: '/pages/index/index'
            });
          }, 1000);
        });
    },
    //初始化
    onEditReady() {
      uni
        .createSelectorQuery()
        .in(this)
        .select('.myEdit')
        .fields(
          {
            size: true,
            context: true
          },
          res => {
            console.log(res);
            this.editorContext = res.context;
          }
        )
        .exec();
    },

    checkStatus(name, detail, obj) {
      if (detail.hasOwnProperty(name)) {
        this[obj] = true;
      } else {
        this[obj] = false;
      }
    },

    // 当样式发生改变的时候
    onStatuschange(e) {
      let detail = e.detail;
      this.checkStatus('header', detail, 'HeadShow');
      this.checkStatus('bold', detail, 'BoldShow');
      this.checkStatus('italic', detail, 'ItalicShow');
    },

    //添加图像
    clickInsertImage() {
      uni.chooseImage({
        success: async res => {
          uni.showLoading({
            title: '上传中稍等',
            mask: true
          });
          for (let item of res.tempFiles) {
            let res = await uniCloud.uploadFile({
              filePath: item.path,
              cloudPath: item.name
            });
            this.editorContext.insertImage({
              src: res.fileID
            });
            uni.hideLoading();
          }
        }
      });
    },

    //插入分割线
    Divider() {
      this.editorContext.insertDivider();
    },
    //标题
    onclickHead() {
      this.HeadShow = !this.HeadShow;
      this.editorContext.format('header', this.HeadShow ? 'H1' : false);
    },
    //加粗
    onclickBlod() {
      this.BlodShow = !this.BlodShow;
      this.editorContext.format('bold');
    },
    //倾斜
    onclickitalic() {
      this.ItalicShow = !this.ItalicShow;
      this.editorContext.format('italic');
    },
    //点击焦点
    onFocus() {
      this.toolshow = true;
    },
    //确认
    editOK() {
      this.toolshow = !this.toolshow;
    }
  }
};
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
    .myEdit {
      height: calc(100vh - 500rpx);
      margin-bottom: 30rpx;
    }
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
        color: #0199fe;
      }
    }
  }
}
</style>
