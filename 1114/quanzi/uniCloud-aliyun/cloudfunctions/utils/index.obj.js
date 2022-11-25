const db = uniCloud.database();
const dbCmd = db.command;

module.exports = {
  _before: function() { // 通用预处理器

  },
  /**
   * 自增自减
   * @table 表
   * @attr 属性
   * @id
   * @num 1自增 -1自减
   */
  async operation(table, attr, id, num) {
    let Obj = {};
    Obj[attr] = dbCmd.inc(num)
    return await db.collection(table).doc(id).update(Obj)
  }
}
