import{P as t,h as a,c as o,w as e,i as n,o as l,d as s,e as i,f as c,a as u,t as d,F as r,g as f,k as h}from"./index-BLvKzfQr.js";import{f as p}from"./util.btMYe2DP.js";import{_}from"./_plugin-vue_export-helper.BCo6x5W8.js";var m=p;const g=_({data:()=>({title:"chooseLocation",hasLocation:!1,location:{},locationAddress:""}),methods:{chooseLocation:function(){t({success:t=>{this.hasLocation=!0,console.log("111111111111"),this.location=m(t.longitude,t.latitude),this.locationAddress=t.address}})},clear:function(){this.hasLocation=!1}}},[["render",function(t,p,_,m,g,k){const L=a("page-head"),x=n,F=f,y=h;return l(),o(x,null,{default:e((()=>[s(L,{title:g.title},null,8,["title"]),s(x,{class:"uni-padding-wrap"},{default:e((()=>[s(x,{style:{background:"#FFFFFF",padding:"40rpx"}},{default:e((()=>[s(x,{class:"uni-hello-text uni-center"},{default:e((()=>[i("当前位置信息")])),_:1}),!1===g.hasLocation?(l(),o(x,{key:0,class:"uni-h2 uni-center uni-common-mt"},{default:e((()=>[i("未选择位置")])),_:1})):c("",!0),!0===g.hasLocation?(l(),u(r,{key:1},[s(x,{class:"uni-hello-text uni-center",style:{"margin-top":"10px"}},{default:e((()=>[i(d(g.locationAddress),1)])),_:1}),s(x,{class:"uni-h2 uni-center uni-common-mt"},{default:e((()=>[s(F,null,{default:e((()=>[i("E: "+d(g.location.longitude[0])+"°"+d(g.location.longitude[1])+"′",1)])),_:1}),s(F,null,{default:e((()=>[i("\\nN: "+d(g.location.latitude[0])+"°"+d(g.location.latitude[1])+"′",1)])),_:1})])),_:1})],64)):c("",!0)])),_:1}),s(x,{class:"uni-btn-v"},{default:e((()=>[s(y,{type:"primary",onClick:k.chooseLocation},{default:e((()=>[i("选择位置")])),_:1},8,["onClick"]),s(y,{onClick:k.clear},{default:e((()=>[i("清空")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-85b07544"]]);export{g as default};
