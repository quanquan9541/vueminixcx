//获取富文本内的图片url地址
export function getImgSrc(richtext, num = 3) {
  let imgList = [];
  richtext.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
    imgList.push(capture);
  });
  imgList = imgList.slice(0, num)
  return imgList;
}

//到处省市+判断
export function getProvince() {
  return new Promise((resolve, reject) => {
    let historyProvince = uni.getStorageSync("historyProvince")
    if (historyProvince) {
      //时间判断
      if ((Date.now() - historyProvince.time) > 1000 * 60 * 60) {
        console.log("缓存过期了");
        getIp().then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      } else {
        resolve(historyProvince.province)
        console.log("这是缓存", historyProvince.province)
      }

    } else {
      getIp().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }
  })

}


//网络请求 获取省市

function getIp() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "https://restapi.amap.com/v3/ip?key=f55ac7c6a06cce856428e551f0acf0fc",
      success: res => {
        console.log("进行网络请求")
        let str = ""
        if (typeof(res.data.province) == "string") {
          str = res.data.province
        } else {
          str = '您的地址不在中国境内，无法查询'
        }
        let obj = {
          province: str,
          time: Date.now()
        }
        uni.setStorageSync("historyProvince", obj)
        resolve(str); //当缓存没有数据
      },
      fail: err => {
        reject(err)
      }
    })
  })
}




///获取昵称
export function giveName(item) {
  return item.user_id[0].nickname || item.user_id[0].username || item.user_id[0].mobile || "请设置昵称"
}
//获取头像
export function giveAvatar(item) {
  return item.user_id[0]?.avatar_file?.url ?? '../../static/images/user-default.jpg'
}
