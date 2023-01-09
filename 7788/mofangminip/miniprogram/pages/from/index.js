Page({
    data:{
        data:"",
        region:[],
        gruopId:"",
    },
    onLoad:function(e){
        if(e.gruopId){
            this.setData({
                gruopId:e.gruopId
            })
        }
    },
    // 注意顺序
    submit:function(e){
     let u = e.detail.value;
     if(this.data.gruopId){}else{}
     wx.cloud
      .callFunction({
        name: "quickstartFunctions",
        data: {
          type: "createGroup",
          data: {
            ...u,
            year:this.data.age,
            region:this.data.region
          },
        },
      }).then((res)=>{console.log(res)})
   },
   
   dateChange:function(e){
       this.setData({date: e.detail.value})
   },
   regionChange:function(e){
       this.setData({region: e.detail.value})
   }
})