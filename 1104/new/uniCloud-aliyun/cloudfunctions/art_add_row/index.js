'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  let {
    adddata
  } = event;
  return await db.collection("article").add({
    posttime: Date.now(),
    ...adddata
  })
};
