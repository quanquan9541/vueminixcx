const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();

module.exports = async (event) => {
    let u = event.data;
    let wxContext = cloud.getWXContext();
    let openId = wxContext.OPENID;
   
    let res = await db.collection("test-group").count();
    let groupId = parseInt(res.total) + 1;
    // 严格项目需要事务功能，可以自行搜索并查看文档
    await db.collection("test-group").add({
      data: {
        leader: u.nickname,
        region: u.region,
        code: u.code,
        age: u.age,
        info: u.info,
        member: 1,
        openId,
        groupId,
      },
    });

    await db.collection("test-form").add({
      data: {
        nickname: u.nickname,
        gender: u.gender === "nv",
        region: u.region,
        code: u.code,
        age: u.age,
        info: u.info,
        isLeader: true,
        openId,
        groupId,
      },
    });
    return {
      success: true,
      groupId,
    };
};
