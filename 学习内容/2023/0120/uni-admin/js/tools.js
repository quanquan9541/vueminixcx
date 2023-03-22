//工具函数
//选择获取数据
const db = uniCloud.database();
export async function gettreedata(fun, wer) {
  let cdb = ["Mcamera", "Mmoney"]
  let data = await db.collection(cdb[fun]).where(wer).get()
  console.log(data.result.data);
  return data.result.data
}
