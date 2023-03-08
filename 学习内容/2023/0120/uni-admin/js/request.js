export function request(e) {
  let detailed = new Promise((resolve, reject) => {
    uni.request({
      url: e,
      success: res => {
        console.log('请求内部', res.data);
        resolve(res.data)
      },
      fail: err => {
        // console.log(err);
        reject(err)
      }
    })
  })
  return detailed
}
