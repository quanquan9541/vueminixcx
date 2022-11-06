'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  let getall = db.collection("article").get()
  return await getall
};
