import{f as e,o as a,c as l,w as n,a as u,b as t,t as d,d as o,v as i,r,e as s,i as p,g,h as m,j as f,k as c}from"./index.181994b7.js";import{a as _,_ as h}from"./uni-section.48413db4.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";var b=v({data:()=>({linshi:"1",range1:["专科及以下","普通本科","211/985本科","普通硕士","211/985硕士","普通博士","211/985博士"],index1:1,range2:["偏远地区","工厂/户外","普通工作环境","体制"],index2:2,range3:["能力较差居多","一般水平居多","能力较强居多"],index3:1,range4:["无要求","一般要求","专业级要求","熟练级要求"],index4:0,range5:["夜班","非正常上班时间","正常作息"],index5:2,count:"2",status:!1}),methods:{change(a){e("log","at pages/work/work.vue:127","picker发送选择改变，携带值为",a.detail.value),this.index1=a.detail.value},change2(a){e("log","at pages/work/work.vue:131","picker发送选择改变，携带值为",a.detail.value),this.index2=a.detail.value},change3(a){e("log","at pages/work/work.vue:136","picker发送选择改变，携带值为",a.detail.value),this.index3=a.detail.value},change4(a){e("log","at pages/work/work.vue:141","picker发送选择改变，携带值为",a.detail.value),this.index4=a.detail.value},change5(a){e("log","at pages/work/work.vue:146","picker发送选择改变，携带值为",a.detail.value),this.index5=a.detail.value},formReset(){this.status=!1},formSubmit(a){e("log","at pages/work/work.vue:153",a),this.linshi=a.detail.value;let l=a.detail.value,n=l.days,u=l.money,t=l.hours,d=l.commute,o=l.loaf,i=l.edu,r=l.environment,s=l.sex,p=l.Same,g=l.colleague,m=l.occupation;l.special;let f=Number(u)/Number(n)*(Number(r)/10+.8)*(Number(s)/Number(p)+.9)*(Number(g)/10+.9)/(35*(Number(t)+Number(d)-.5*Number(o))*(Number(i)/5+.8)*(Number(m)/10+1));this.count=f.toFixed(1),this.status=!0}}},[["render",function(e,v,b,x,y,k){const V=r(s("uni-easyinput"),_),w=r(s("uni-section"),h),I=p,T=g,N=m,C=f,S=c;return a(),l(I,null,{default:n((()=>[u(I,null,{default:n((()=>[u(S,{onSubmit:k.formSubmit,onReset:k.formReset},{default:n((()=>[u(I,null,{default:n((()=>[u(w,{title:"工作时间",subTitle:"月工作时间",type:"line",padding:""},{default:n((()=>[u(V,{name:"days",errorMessage:"",focus:"",placeholder:"请输入天数",onInput:e.input},null,8,["onInput"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"月薪",subTitle:"薪资+补贴",type:"line",padding:""},{default:n((()=>[u(V,{name:"money",errorMessage:"",modelValue:e.money,"onUpdate:modelValue":v[0]||(v[0]=a=>e.money=a),focus:"",placeholder:"请输入数字",onInput:e.input},null,8,["modelValue","onInput"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"工作时长",subTitle:"日工作时长=下班时间-上班时间",type:"line",padding:""},{default:n((()=>[u(V,{name:"hours",errorMessage:"",modelValue:e.hours,"onUpdate:modelValue":v[1]||(v[1]=a=>e.hours=a),focus:"",placeholder:"请输入数字",onInput:e.input},null,8,["modelValue","onInput"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"通勤时间",subTitle:"日通勤时长=上班通勤+下班通勤",type:"line",padding:""},{default:n((()=>[u(V,{name:"commute",errorMessage:"",modelValue:e.commute,"onUpdate:modelValue":v[2]||(v[2]=a=>e.commute=a),focus:"",placeholder:"请输入数字",onInput:e.input},null,8,["modelValue","onInput"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"摸鱼时间",subTitle:"摸鱼时长=上班摸鱼+吃饭时间+午休时间",type:"line",padding:""},{default:n((()=>[u(V,{name:"loaf",errorMessage:"",modelValue:e.loaf,"onUpdate:modelValue":v[3]||(v[3]=a=>e.loaf=a),focus:"",placeholder:"请输入数字",onInput:e.input},null,8,["modelValue","onInput"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"学历",subTitle:"最高学历",type:"line",padding:""},{default:n((()=>[u(T,{name:"edu",onChange:k.change,value:y.index1,range:y.range1},{default:n((()=>[u(I,null,{default:n((()=>[t("请点击这里选择你的学历："+d(y.range1[y.index1]),1)])),_:1})])),_:1},8,["onChange","value","range"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"工作环境",subTitle:"工作环境",type:"line",padding:""},{default:n((()=>[u(T,{name:"environment",onChange:k.change2,value:y.index2,range:y.range2},{default:n((()=>[u(I,null,{default:n((()=>[t("请点击这里选择你的工作环境："+d(y.range2[y.index2]),1)])),_:1})])),_:1},8,["onChange","value","range"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"异性指数",subTitle:"周围高颜值的异性",type:"line",padding:""},{default:n((()=>[u(V,{name:"sex",errorMessage:"",modelValue:e.sex,"onUpdate:modelValue":v[4]||(v[4]=a=>e.sex=a),focus:"",placeholder:"请输入数字",onInput:e.input},null,8,["modelValue","onInput"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"同性指数",subTitle:"周围异性数量[每一个同性都是潜在的竞争者]",type:"line",padding:""},{default:n((()=>[u(V,{name:"Same",errorMessage:"",modelValue:e.Same,"onUpdate:modelValue":v[5]||(v[5]=a=>e.Same=a),focus:"",placeholder:"请输入数字",onInput:e.input},null,8,["modelValue","onInput"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"同事水平",subTitle:"周围同事做事做人的水平",type:"line",padding:""},{default:n((()=>[u(T,{name:"colleague",onChange:k.change3,value:y.index3,range:y.range3},{default:n((()=>[u(I,null,{default:n((()=>[t("请点击这里选择你的同事："+d(y.range3[y.index3]),1)])),_:1})])),_:1},8,["onChange","value","range"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"职业门槛",subTitle:"职业证书需求门槛",type:"line",padding:""},{default:n((()=>[u(T,{name:"occupation",onChange:k.change4,value:y.index4,range:y.range4},{default:n((()=>[u(I,null,{default:n((()=>[t("请点击这里选择你的职业标准："+d(y.range4[y.index4]),1)])),_:1})])),_:1},8,["onChange","value","range"])])),_:1})])),_:1}),u(I,null,{default:n((()=>[u(w,{title:"特殊上班情况",subTitle:"夜班要命,早班折磨人\r\n          (非加班情况:早于9点上班OR晚于6点下班的都算非正常!)",type:"line",padding:""},{default:n((()=>[u(T,{name:"special",onChange:k.change5,value:y.index5,range:y.range5},{default:n((()=>[u(I,null,{default:n((()=>[t("请点击这里选择你的上班特殊情况："+d(y.range5[y.index5]),1)])),_:1})])),_:1},8,["onChange","value","range"])])),_:1})])),_:1}),o(u(I,{class:"wz"},{default:n((()=>[u(N,null,{default:n((()=>[t("工作指数："+d(y.count),1)])),_:1})])),_:1},512),[[i,y.status]]),u(I,{class:"bott"},{default:n((()=>[u(C,{type:"primary","form-type":"submit"},{default:n((()=>[t("提交")])),_:1}),u(C,{type:"warn","form-type":"reset"},{default:n((()=>[t("重置")])),_:1})])),_:1}),u(I)])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})}],["__scopeId","data-v-6a8cf34e"]]);export{b as default};
