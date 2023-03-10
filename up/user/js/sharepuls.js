export default {
  data() {
    return {
      //设置默认的分享参数
      share: {
        title: '来试试吗',
        path: '/pages/index/index',
        imageUrl: '',
        desc: '',
        content: ''
      }
    }
  },
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
  }
  //
}
