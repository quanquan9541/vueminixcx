module.exports = {
  onLoad() {
    //分享白名单
    let urlList = []
    //获取路由信息
    let pages = getCurrentPages()
    //获取当前路由
    let nowPage = pages[pages.length - 1]
    // 获取标题
    // let title = nowPage.$holder.navigationBar.titleText
    // let title = nowPage //没写好
    let path = nowPage.route
    // console.log('页面', title);
    // 设置默认的转发参数
    this.share = {
      title: '略懂工具箱', // 空默认为小程序名称
      path: path, // 默认为当前页面路径
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
