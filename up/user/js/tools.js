//防抖函数
/**
 * @param {Object} fn 需要防抖的函数
 * @param {Object} wait 等待时间
 * @param {Object} immediate  true 执行首次 false 执行尾操作
 */
export function debounce(fn, wait = 500, immediate = false) {
  let timeout; // 局部全局变量
  return function(...args) {
    let context = this;
    if (timeout) clearTimeout(timeout); // 清除计时器，但是timeout本身还在，只是不会在执行

    if (immediate) { // 总是执行第一次操作
      let callNow = !timeout; // 第一次为true
      // 多次操作，timeout初始化，多次触发只有当wait等待时间结束timeout才为空
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      // 第一次为true, 执行
      if (callNow) fn.apply(context, args);
    } else { // 总是执行最后一次操作
      timeout = setTimeout(function() {
        fn.apply(context, args);
      }, wait);
    }
  };
}

//时间格式化
/**
 * @param {object} date 输入时间
 * 
 */
export function dateFormat(date, format = 'yyyy-MM-dd hh:mm:ss') {
  if (typeof date === 'string') {
    return date
  }
  let d = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    s: date.getMilliseconds()

  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

  }
  for (let i in d) {
    if (new RegExp('(' + i + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? d[i] : ('00' + d[i]).substr(('' + d[i])
        .length));
    }
  }
  return format;
}


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
  return item.user_id[0]?.avatar_file?.url ?? '../../static/iconPath/user-default.png'
}