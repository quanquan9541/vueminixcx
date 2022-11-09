'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  let {
    skip = 0
  } = event;
  let getall = db.collection("article").skip(skip).limit(8).orderBy("posttime", "desc").get()
  return await getall
};
