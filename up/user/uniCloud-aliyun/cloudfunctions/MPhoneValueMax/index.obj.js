// 获取手机参数权重
const db = uniCloud.database();
let j = "2"
module.exports = {
  _before: function() {
    const token = this.getUniIdToken()
    if (!token) {
      throw new Error('未登录')
    }
  },
  PhoneValuemax: async function() {
    return [j, await db.collection('Mphonevalue').get()]
  }
}