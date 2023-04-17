export default {
  data() {
    return {
      //设置默认的分享参数
      share: {
        title: '小站',
        path: '/pages/index/index/index', //需要多写一层 小程多一层文件夹
        imageUrl: '',
        desc: '',
        content: ''
      }
    }
  },
  //好友
  onShareAppMessage(res) {
    return {
      title: this.share.title,
      path: this.share.path,
      imageUrl: this.share.imageUrl,
      desc: this.share.desc,
      content: this.share.content,
      success(res) {
        uni.showToast({
          title: '分享成功',
          icon: 'success',
          mask: true,
          duration: 1200
        })
      },
      fail(res) {
        uni.showToast({
          title: '分享失败',
          icon: 'none',
          mask: true,
          duration: 1200
        })
      }
    }
  },
  //朋友圈
  onShareTimeline(res) {
    return {
      title: this.share.title,
      path: this.share.path,
      imageUrl: this.share.imageUrl,
      desc: this.share.desc,
      content: this.share.content,
      success(res) {

        uni.showToast({
          title: '分享成功',
          icon: 'success',
          mask: true,
          duration: 1200
        })
      },
      fail(res) {
        uni.showToast({
          title: '分享失败',
          icon: 'none',
          mask: true,
          duration: 1200
        })
      }
    }
  },
}
