'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  //event为客户端上传的参数
  let {
    id
  } = event;

  //返回数据给客户端
  return await db.collection("article").doc(id).get();
};
