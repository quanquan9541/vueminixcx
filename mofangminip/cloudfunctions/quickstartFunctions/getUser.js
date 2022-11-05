module.exports=async(args,db,openId,ctx) =>{
    let user = await db.collection("user").doc(openId).get();
    if(user.data){
        return user.data
    }
    let data={
        _id:openId,//小程序openID
        name:"",//用户名
        bio:"",//简介
        avatar:'',//头像
        createdAt:new Date(),//注册时间（获取当前时间）
         ban:false,//封禁用户
         share:20,//贡献
         coin:0,//金币
         score:0,//积分
         codelevel:0,//等级
         role:[],//角色
        course:"从零开始的抄代码之路",//课程
        lesson:{
            id:"001-001",//章节ID
            title:"编程的本质",//标题
            summaray:"就是抄",//简介
            homework:"抄完小程序4"//作业
        }
    }
    await db.collection("uesr").add({data}) 
    return data
}