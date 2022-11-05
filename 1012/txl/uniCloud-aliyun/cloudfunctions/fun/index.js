'fun';
let db = uniCloud.database({
  throwOnNotFound: false
})
exports.main = async (event, context) => {
  //event为客户端上传的参数
  if (event.api === 'publish') {
    return await db.collection('message').add({
      content: event.content
    })
  }
  if (event.api === 'getmassage') {
    return await db.collection('message').get()
  }
  //返回数据给客户端
  // return event
};
