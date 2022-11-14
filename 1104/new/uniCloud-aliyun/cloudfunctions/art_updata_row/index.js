'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  let {
    adddata,
    picurls
  } = event;
  return await db.collection("article").doc(adddata._id).update({
    title: adddata.title,
    author: adddata.author,
    content: adddata.content,
    picurls
  })
};
