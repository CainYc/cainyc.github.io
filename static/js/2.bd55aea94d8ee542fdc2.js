webpackJsonp([2],{"30/R":function(e,t){},avRv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{downX:0,upX:0,moveFlag:!1,cardData:[{imageUrl:"static/image/mainPage/collection/phone.png",name:"手机端"},{imageUrl:"static/image/mainPage/collection/hayun.png",name:"哈云官网"},{imageUrl:"static/image/mainPage/collection/huaxia.png",name:"华夏官网"},{imageUrl:"static/image/mainPage/collection/quanyou.png",name:"拳友官网"},{imageUrl:"static/image/mainPage/collection/chahua.png",name:"手绘"}]}},mounted:function(){var e=this;document.addEventListener("DOMMouseScroll",this.scrollFunc,!1),window.onmousewheel=document.onmousewheel=this.scrollFunc,this.$refs.collectionContent.addEventListener("mousedown",this.mousedown),this.$refs.collectionContent.addEventListener("mouseup",this.mouseup),this.$bus.on("hoverMover",function(t){e.moveFlag="right"===t})},methods:{mousedown:function(e){this.downX=e.screenX},mouseup:function(e){this.upX=e.screenX,this.downX!==this.upX&&(this.downX!==this.upX&&this.downX<this.upX?this.moveFlag=!1:this.moveFlag=!0)},imgCardClick:function(e){this.$bus.emit("imgCardClick",e)},scrollFunc:function(e){(e=e||window.event).wheelDelta?(e.wheelDelta>0&&(this.moveFlag=!1),e.wheelDelta<0&&(this.moveFlag=!0)):e.detail&&(e.detail>0&&(this.moveFlag=!1),e.detail<0&&(this.moveFlag=!0))},hoverMove:function(){this.moveFlag=!1}},beforeDestroy:function(){document.removeEventListener("DOMMouseScroll",this.scrollFunc,!1),window.onmousewheel=document.onmousewheel="",this.$refs.collectionContent.removeEventListener("mousedown",this.mousedown),this.$refs.collectionContent.removeEventListener("mouseup",this.mouseup),this.$bus.off("hoverMover")}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"collection"},[n("img",{staticClass:"bottom-je",attrs:{src:"static/image/mainPage/collection/je-design.png",alt:""}}),e._v(" "),n("img",{staticClass:"top-work",attrs:{src:"static/image/mainPage/collection/work.png",alt:""}}),e._v(" "),n("img",{staticClass:"top-01",attrs:{src:"static/image/mainPage/collection/01.png",alt:""}}),e._v(" "),e._m(0),e._v(" "),n("div",{ref:"collectionContent",class:e.moveFlag?"content move-right":"content"},e._l(e.cardData,function(t,i){return n("div",{key:i,staticClass:"content-item"},[i%2!=0?n("div",{staticClass:"empty"}):e._e(),e._v(" "),n("img",{attrs:{src:t.imageUrl,alt:""},on:{click:function(n){return e.imgCardClick(t)}}})])}),0),e._v(" "),n("div",{staticClass:"move-hover move-hover-left",on:{mouseover:function(t){return e.hoverMove("left")}}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"line-div"},[t("div",{staticClass:"line"})])}]};var s=n("VU/8")(i,o,!1,function(e){n("30/R")},"data-v-48eff4c0",null);t.default=s.exports}});
//# sourceMappingURL=2.bd55aea94d8ee542fdc2.js.map