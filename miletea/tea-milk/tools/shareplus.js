module.exports = {
  onLoad() {
    //分享白名单
    let urlList = []
    //获取路由信息
    let pages = getCurrentPages()
    //获取当前路由
    let nowPage = pages[pages.length - 1]
    // this.share.title = nowPage.$holder.navigationBarTitleText
    // this.share.path = nowPage.$page.fullPath获取标题
    // console.log('页面', nowPage.$holder.navigationBarTitleText);
    // 设置默认的转发参数
    this.share = {
      title: '奶茶奇缘', // 空默认为小程序名称
      path: nowPage.$page.fullPath, // 默认为当前页面路径
      imageUrl: '', // 默认为当前页面的截图
    }

  },
  //分享好友
  onShareAppMessage() {
    // console.log('888', this.share);
    return this.share
  },
  //朋友圈
  onShareTimeline() {
    return this.share
  }
}
