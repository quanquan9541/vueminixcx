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
    return "200" //没选到第三级
  } else {
    let titleid = e.detail.value[2].value
    let editid = await db.collection('Mparameter').where(`title=='${titleid}'`).field('_id').get({
      getOne: true
    })
    console.log(editid);
    if (!editid.result.data) {
      return "400" //没有详情参数
    } else {
      let id = editid.result.data._id
      return id
    }
  }
}

export function codeeditid(e) {
  if (e == '200' || e == '400') {
    return e
  } else {
    return 'success'
  }
}

export async function phonevalue(e, id, fun = "add") {
  let value = {}
  value.phone_id = e.title //手机关联
  // 获取soc 数据
  let phonefunction = await db.collection('Msoc').where(`_id=='${e.socfunction}'`).field("_id,socvalue").get({
    getOne: true
  })
  value.phonefunction = String(phonefunction.result.data.socvalue)
  // console.log(typeof(value.phonefunction));
  //轻薄
  let light_thin = {}
  light_thin.weight = String(e.weight)
  light_thin.measurement = Number(e.measurementHight) * Number(e.measurementWidth) * Number(e
    .measurementThickness)
  value.light_thin = light_thin
  //屏幕水平
  let phoneshow = ((Number(e.screenPPI) * Number(e.screenMaterial)) / 50 + (Number(e.screenRenovate) -
      60) / 60 +
    Number(e.screenAdmin) / 10) - 1
  value.phoneshow = String(Number(phoneshow.toFixed(2)))
  //相机水平
  let phoneimage = await db.collection('Mcamera').where(`phone_id=='${e.title}'`).groupBy('phone_id').groupField(
    'sum(add(Comeravalue,Comeraadd)) as sumScore ').get({
    getOne: true
  })
  value.phoneimage = String(phoneimage.result.data.sumScore)
  //电池
  value.phonecell = String(e.cell)
  //充电
  value.phonecharge = String(Number(e.WiredCharging) + (Number(e.WirelessCharging) / 4))
  if (fun == "add") {
    //云数据上传
    db.collection('Mphonevalue').add({
      ...value,
    }).then((res) => {
      console.log('上传', res);
    }).catch((err) => {
      console.log('上传失败', err);
    })
  } else {
    //云数据修改
    db.collection('Mphonevalue').doc(id).update({
      ...value,
      last_date: Date.now()
    }).then(res => {
      console.log("修改", res);
    }).catch(err => {
      console.log('修改失败', err);
    })
  }
}