webpackJsonp([0],{"2OBU":function(t,a,i){i("BhFa"),t.exports=i("/KQr").Object.assign},"4YfN":function(t,a,i){"use strict";a.__esModule=!0;var e,n=i("aA9S"),s=(e=n)&&e.__esModule?e:{default:e};a.default=s.default||function(t){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t}},"5oxQ":function(t,a){},BhFa:function(t,a,i){var e=i("2AZ7");e(e.S+e.F,"Object",{assign:i("MAoi")})},GPWu:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("4YfN"),n=i.n(e),s=i("R4Sj"),o={props:{total:{type:Number,default:5}},computed:{numArray:function(){for(var t=[],a=0;a<this.total;a++)t.push(a+1);return t}},data:function(){return{activeNum:1}},mounted:function(){},methods:n()({},Object(s.b)(["actionPageNumber"]),{preClick:function(){var t=this.activeNum-1;t<=0||this.numClick(t)},numClick:function(t){this.activeNum!==t&&(this.activeNum=t,this.actionPageNumber(t))},nextClick:function(){var t=this.activeNum+1;t>=this.total+1||this.numClick(t)}})},c={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"easy-pagination"},[i("span",{staticClass:"item",on:{click:t.preClick}},[t._v("上一页")]),t._v(" "),t._l(t.numArray,function(a,e){return i("span",{key:e,class:a===t.activeNum?"item num actived":"item num",on:{click:function(i){return t.numClick(a)}}},[t._v(t._s(a))])}),t._v(" "),i("span",{staticClass:"item",on:{click:t.nextClick}},[t._v("下一页")])],2)},staticRenderFns:[]};var r={components:{easyPagination:i("C7Lr")(o,c,!1,function(t){i("5oxQ")},"data-v-5ab86fb9",null).exports},data:function(){return{allData:{"华夏官网":{leftData:[{title:"华夏教育企业官网",content:"机构的官方网站。学生与家长可以在这里了解机构的教育资质，老师、活动等情况，也可以使用线上课程来在线学习。网页设计采用了简洁流畅的交互逻辑，时下流行的高饱度色系，再加上几何线条的元素给用户一种青春活力的感受，满足了机构的需求"},{title:"官方网站线上地址",content:"http://www.huaxiak12.com"}],images:["static/image/works/huaxia/shouye.jpg","static/image/works/huaxia/kecheng.jpg","static/image/works/huaxia/shizi.jpg","static/image/works/huaxia/zhibo.jpg","static/image/works/huaxia/about.jpg"]},"拳友官网":{leftData:[{title:"拳友酒魅官方网站",content:"企业门户网站，搭建了企业对外推送信息的平台，是企业品牌文化打造的重要环节。包含的主要页面有品牌文化、产品中心、联系我们。网站采用了和品牌文化所结合的水墨古风，主要使用了水墨画的山水，印章篆刻等等元素，和企业想传达的悠久文化相契合。满足了客户的需求。"},{title:"官方网站线上地址",content:"设计已经交付完毕，前端项目还在开发中。"}],images:["static/image/works/quanyou/shouye.png","static/image/works/quanyou/wenhua.png","static/image/works/quanyou/chanpinxiangqing.png","static/image/works/quanyou/dongtai.png","static/image/works/quanyou/chanpin.png","static/image/works/quanyou/about.png"]},"哈云官网":{leftData:[{title:"哈云科技企业官网",content:"该项目为公司商业官方网站，向用户展示的主要页面有产品与应用场景、公办学校网校、机构网校、关于哈云。是公司对外展示主营业务、产品、企业动态的重要平台。网页整体偏向简约、商务、大气的设计风格。设计已经交付完毕，前端项目还在开发中。"},{title:"官方网站线上地址",content:"设计已经交付完毕，前端项目还在开发中。"}],images:["static/image/works/hayun/shouye.jpg","static/image/works/hayun/chanpin.jpg","static/image/works/hayun/wangxiao.jpg","static/image/works/hayun/xuexiao.jpg","static/image/works/hayun/guanyu.jpg"]},"手机端":{leftData:[{title:"哈云课堂手机端",content:"该项目为公司课程网页的手机端。完善了用户线上浏览的方式。整体延展网页的板块规范，遵从手机端设计规范进行适配设计。参考哈云课堂网页版，优化手机端布局排版，设计。设计已经交付完毕，前端项目还在开发中。"},{title:"官方网站线上地址",content:"https://www.hayun100.com/vip"}],images:["static/image/works/phone/shouye.jpg","static/image/works/phone/putongzhuangtai.jpg","static/image/works/phone/laoshixiangqing.jpg","static/image/works/phone/zhiboxiangqing.jpg"]},"手绘":{leftData:[{title:"各种风格的手绘",content:"为了更加自由的实现自己的设计，不被资源和风格限制了思路和设计实现。于是开始自学手绘，临摹了各种各样的风格和作品。能够绘制一些简单的原创素材，在设计需要时可以作为补充和风格原型。完整的绘画作品较少，一部分是临摹的插画，其他的手绘散落在自己练习作和商业作品的素材之中。绘画水平和意识还在稳步提高"}],images:["static/image/works/shouhui/huaban.png","static/image/works/shouhui/biaoqingbao.png"]}},activeData:{},activeImage:"",activeLabel:""}},mounted:function(){var t=this;this.activeLabel=this.$route.params.label||"华夏官网",this.activeData=this.allData[this.activeLabel],this.activeImage=this.activeData.images[0],this.$bus.on("worksMenuClick",function(a){t.$refs.imgDiv.scrollTop=0,t.activeData=t.allData[a],t.activeImage=t.activeData.images[0]})},methods:{},computed:{pageNumber:function(){return this.$store.state.pagination.pageNumber}},watch:{pageNumber:function(t,a){this.activeImage=this.activeData.images[t-1],this.$refs.imgDiv.scrollTop=0}}},u={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"works"},[i("div",{staticClass:"left"},t._l(t.activeData.leftData,function(a,e){return i("div",{key:e,staticClass:"content-item"},[i("span",{staticClass:"title"},[t._v("\n        "+t._s(a.title)+"\n      ")]),t._v(" "),a.title.indexOf("地址")<0?i("span",{staticClass:"content"},[t._v("\n        "+t._s(a.content)+"\n      ")]):t._e(),t._v(" "),a.title.indexOf("地址")>0?i("span",{staticClass:"content"},[a.content.indexOf("http")>=0?i("a",{attrs:{href:a.content,target:"_blank"}},[t._v(t._s(a.content))]):i("span",[t._v(t._s(a.content))])]):t._e()])}),0),t._v(" "),i("div",{staticClass:"right"},[i("div",{ref:"imgDiv",staticClass:"images"},[i("img",{attrs:{src:t.activeImage,alt:""}})]),t._v(" "),i("div",{staticClass:"pagination"},[i("easyPagination",{ref:"easyPagination",attrs:{total:t.activeData.images&&t.activeData.images.length}})],1)])])},staticRenderFns:[]};var l=i("C7Lr")(r,u,!1,function(t){i("eRrB")},"data-v-6f67f041",null);a.default=l.exports},MAoi:function(t,a,i){"use strict";var e=i("H5bT"),n=i("SQZr"),s=i("n1iq"),o=i("A2+p"),c=i("IlC8"),r=Object.assign;t.exports=!r||i("D86D")(function(){var t={},a={},i=Symbol(),e="abcdefghijklmnopqrst";return t[i]=7,e.split("").forEach(function(t){a[t]=t}),7!=r({},t)[i]||Object.keys(r({},a)).join("")!=e})?function(t,a){for(var i=o(t),r=arguments.length,u=1,l=n.f,g=s.f;r>u;)for(var m,h=c(arguments[u++]),p=l?e(h).concat(l(h)):e(h),f=p.length,v=0;f>v;)g.call(h,m=p[v++])&&(i[m]=h[m]);return i}:r},SQZr:function(t,a){a.f=Object.getOwnPropertySymbols},aA9S:function(t,a,i){t.exports={default:i("2OBU"),__esModule:!0}},eRrB:function(t,a){},n1iq:function(t,a){a.f={}.propertyIsEnumerable}});
//# sourceMappingURL=0.ad223cb27dd4099ce418.js.map