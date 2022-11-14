'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  let {
    adddata,
    picurls
  } = event;
  return await db.collection("article").add({
    posttime: Date.now(),
    ...adddata,
    picurls
  })
};
