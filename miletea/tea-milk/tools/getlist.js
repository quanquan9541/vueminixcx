/**
 * 
 */
const db = uniCloud.database();
export async function getdata(wer, skip, limit = 6) {
  let data = await db.collection('tea-milk-list').where(wer).field(
    '_id,name,category_id,pic').skip(skip).limit(limit).orderBy('add_date desc').get({
    getCount: true
  })
  return data
}
