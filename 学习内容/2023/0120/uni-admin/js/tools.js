//工具函数
//选择获取数据
const db = uniCloud.database();
export async function gettreedata(fun, wer) {
  let cdb = ["Mcamera", "Mmoney"]
  let data = await db.collection(cdb[fun]).where(wer).get()
  console.log(data.result.data);
  return data.result.data
}
/** 通过手机型号 返回详细参数表id
 * @param {Object} e 传手机参数
 */
export async function relevance(e) {
  if (!e.detail.value[2]) {
    return "重新选择"
  } else {
    let titleid = e.detail.value[2].value
    let editid = await db.collection('Mparameter').where(`title=='${titleid}'`).field('_id').get({
      getOne: true
    })
    console.log(editid);
    if (!editid.result.data) {
      return "无结果"
    } else {
      let id = editid.result.data._id
      return id
    }
  }
}