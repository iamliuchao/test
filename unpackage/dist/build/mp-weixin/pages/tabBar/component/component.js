"use strict";const e=require("../../../common/vendor.js"),a={data:()=>({list:[{id:"view",name:"视图容器",open:!1,pages:["view","scroll-view","swiper","match-media"]},{id:"content",name:"基础内容",open:!1,pages:["icon","text","rich-text","progress"]},{id:"form",name:"表单组件",open:!1,pages:["button","checkbox","input","label","picker","picker-view","radio","slider","switch","textarea","form",""]},{id:"nav",name:"导航",open:!1,pages:["navigator"]},{id:"media",name:"媒体组件",open:!1,pages:["image","camera","audio","video"]},{id:"map",name:"地图",open:!1,pages:["map"]},{id:"canvas",name:"画布",open:!1,pages:["canvas"]}]}),methods:{triggerCollapse(e,a){if(this.list[e].pages)for(var i=0;i<this.list.length;++i)this.list[i].open=e===i&&!this.list[i].open;else this.goDetailPage("",this.list[e].url)},goDetailPage(a,i){if(console.log(a),console.log(i),"string"==typeof i){const a="/pages/component/"+i+"/"+i;console.log(a),this.hasLeftWin?e.index.reLaunch({url:a}):e.index.navigateTo({url:a})}else this.hasLeftWin?e.index.reLaunch({url:i.url}):e.index.navigateTo({url:i.url})}}};const i=e._export_sfc(a,[["render",function(a,i,n,t,o,s){return{a:e.f(o.list,((a,i,n)=>e.e({a:e.t(a.name),b:e.o((e=>s.triggerCollapse(i,a.id)),a.id),c:a.open},a.open?{d:e.f(a.pages,((i,n,t)=>({a:e.t(i.name?i.name:i),b:n,c:e.o((e=>s.goDetailPage(a.id,i)),n)})))}:{},{e:a.id})))}}]]);wx.createPage(i);
