webpackJsonp([2],{pujI:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={data:function(){return{menuImageIconFlag:!0,currentTopMenu:"Collection",menuArray:[{label:"WeChart"},{label:"E-mail"}],collectionMenuArray:[{label:"WeChart"},{label:"E-mail"}],activeMenu:"",workMenuArray:[{label:"华夏官网"},{label:"拳友官网"},{label:"哈云官网"},{label:"手机端"},{label:"手绘"}],topMenuArray:[{label:"Collection"},{label:"Introduction"}]}},mounted:function(){var e=this;location.href.indexOf("works")>0?(this.menuArray=this.workMenuArray,this.currentTopMenu="",this.activeMenu="华夏官网"):location.href.indexOf("introduction")>0&&(this.currentTopMenu="Introduction"),this.$bus.on("imgCardClick",function(n){e.currentTopMenu="",e.activeMenu=n.name,e.menuArray=e.workMenuArray,e.$router.push({name:"works",params:{label:n.name}})})},methods:{topMenuClick:function(e){this.menuArray=this.collectionMenuArray,this.currentTopMenu=e,this.activeMenu="",this.$router.push(e.toLocaleLowerCase())},leftMenuClick:function(e){this.activeMenu=e,this.$bus.emit("worksMenuClick",e)}}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"main-page"},[t("div",{staticClass:"left-menu"},[t("img",{attrs:{src:e.menuImageIconFlag?"static/image/mainPage/menu-open.png":"static/image/mainPage/menu-unopen.png",alt:""},on:{click:function(n){e.menuImageIconFlag=!e.menuImageIconFlag}}}),e._v(" "),e._l(e.menuArray,function(n,a){return t("div",{key:a,class:e.currentTopMenu?"menu-item":"menu-item another",on:{click:function(t){return e.leftMenuClick(n.label)}}},[t("div",{class:e.activeMenu===n.label?"point active-point":"point"}),e._v(" "),e.currentTopMenu?t("div",{class:e.activeMenu===n.label?"content active-content":"content"},[e._v(e._s(n.label))]):e._e(),e._v(" "),e.currentTopMenu?e._e():t("div",{class:e.activeMenu===n.label?"content-another active-content":"content-another"},[e._v(e._s(n.label))])])})],2),e._v(" "),t("div",{staticClass:"top-menu"},e._l(e.topMenuArray,function(n,a){return t("div",{key:a,staticClass:"menu-item",on:{click:function(t){return e.topMenuClick(n.label)}}},[t("div",{class:e.currentTopMenu===n.label?"point show":"point unShow"}),e._v(" "),t("div",{class:e.currentTopMenu===n.label?"content selected":"content"},[e._v(e._s(n.label))])])}),0),e._v(" "),t("router-view")],1)},staticRenderFns:[]};var r=t("C7Lr")(a,i,!1,function(e){t("rwVw")},"data-v-18253164",null);n.default=r.exports},rwVw:function(e,n){}});
//# sourceMappingURL=2.bbbcdcfd0bcd8813fde5.js.map