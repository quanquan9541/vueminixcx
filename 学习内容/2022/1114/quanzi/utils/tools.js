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
        // console.log("缓存过期了");
        getIp().then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      } else {
        resolve(historyProvince.province)
        // console.log("这是缓存", historyProvince.province)
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
        // console.log("进行网络请求")
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

const db = uniCloud.database();
const utils = uniCloud.importObject('utils', {
  customUI: true // 取消自动展示的交互提示界面
});

//点赞操作数据库的方法

export async function likefun(artid) {
  let count = await db
    .collection('quanzi_like')
    .where(`article_id=="${artid}" && user_id==$cloudEnv_uid`)
    .count();
  console.log(count);
  if (count.result.total) {
    db.collection('quanzi_like')
      .where(`article_id=="${artid}" && user_id==$cloudEnv_uid`)
      .remove();
    utils.operation('quanzi_article', 'like_count', artid, -1);
  } else {
    db.collection('quanzi_like').add({
      article_id: artid
    });
    utils.operation('quanzi_article', 'like_count', artid, 1);
  }
}