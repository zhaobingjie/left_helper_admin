webpackJsonp([1],{"7J73":function(t,e){},GrIc:function(t,e){},L7Ko:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("kV13"),n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("wv-tabbar",{attrs:{fixed:""}},[o("wv-tabbar-item",{attrs:{to:"/","is-on":"/"==t.$route.path}},[o("span",{staticStyle:{display:"inline-block",position:"relative"},attrs:{slot:"icon"},slot:"icon"}),t._v("\n    首页\n  ")]),t._v(" "),o("wv-tabbar-item",{attrs:{to:"/cookbook","is-on":"/cookbook"==t.$route.path}},[t._v("\n    菜谱\n  ")]),t._v(" "),o("wv-tabbar-item",{attrs:{to:"/cookbook1"}},[o("span",{staticStyle:{display:"inline-block",position:"relative"},attrs:{slot:"icon"},slot:"icon"}),t._v("\n    菜谱1\n  ")]),t._v(" "),o("wv-tabbar-item",{attrs:{to:"/profile"}},[t._v("\n    我\n  ")])],1)},staticRenderFns:[]};var s={name:"App",components:{tabbar:o("C7Lr")({data:function(){return{}}},n,!1,function(t){o("GrIc")},"data-v-728a6e4e",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("section",{staticClass:"content"},[e("router-view")],1),this._v(" "),e("section",[e("tabbar")],1)])},staticRenderFns:[]};var c=o("C7Lr")(s,i,!1,function(t){o("pend")},"data-v-7b055294",null).exports,r=o("5inH"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title"},[this._v("jack`s left helper")]),this._v(" "),e("ul",[e("li",{staticClass:"list"},[e("router-link",{attrs:{to:"/cookbook"}},[e("wv-button",{attrs:{title:"标题文字",type:"primary"}},[this._v("菜谱")])],1)],1)])])},staticRenderFns:[]};var u=o("C7Lr")({data:function(){return{}}},l,!1,function(t){o("L7Ko")},"data-v-009b1a07",null).exports,d=o("3cXf"),h=o.n(d),f=o("I29D"),v=o.n(f),p="http://helper.com/",m=v.a.create({baseURL:p,headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){var e="";for(var o in t)e+=encodeURIComponent(o)+"="+encodeURIComponent(t[o])+"&";return e}]}),_=function(t){return v.a.get(p+"cook/menu/"+t.search,{params:{page:t.page}})},k=function(t,e){if(!t||!e)return!1;for(var o in e)if(e[o]==t)return!0;return!1},g={data:function(){return{value:"",collect:[],historyTagsKey:"historyTags",historyTagsLimit:10,historyTags:[],defaultResult:[]}},created:function(){var t,e,o=this;t={},e=function(t){console.log(t.data),o.collect=t.data},v.a.get(p+"cook/collect",{params:t}).then(function(t){200==t.status?e(t.data):alert("服务器错误")}),this.historyTags=JSON.parse(localStorage.getItem(this.historyTagsKey))},computed:{filterResult:function(){var t=this;return this.defaultResult.filter(function(e){return new RegExp(t.value,"i").test(e)})}},methods:{onSearch:function(t){var e=JSON.parse(localStorage.getItem(this.historyTagsKey))||[];k(this.value,e)||(e.length>=this.historyTagsLimit&&e.pop(),e.unshift(this.value),localStorage.setItem(this.historyTagsKey,h()(e))),this.$store.commit("changeSearch",this.value),this.$store.dispatch("searchCookbook"),this.$router.push({name:"cookList"})},onCancel:function(){},onSearchHisotry:function(t){this.$store.commit("changeSearch",t),this.$store.dispatch("searchCookbook"),this.$router.push({name:"cookList"})}}},b={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",{staticClass:"hi"},[t._v("今天想做点什么 ?")]),t._v(" "),o("wv-search-bar",{attrs:{autofocus:!1,result:t.filterResult},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),t.historyTags.length>0?o("div",{staticClass:"my_collect"},[o("h2",[t._v("历史标签")]),t._v(" "),o("p",t._l(t.historyTags,function(e){return o("span",{staticClass:"tag",on:{click:function(o){return t.onSearchHisotry(e)}}},[t._v(t._s(e))])}),0)]):t._e(),t._v(" "),o("div",{staticClass:"my_collect"},[o("h2",[t._v("我的收藏")]),t._v(" "),o("ul",t._l(t.collect,function(e){return o("ol",{attrs:{id:e.menu_id}},[o("router-link",{attrs:{to:"/cookbook/detail/"+e.menu_id}},[t._v(t._s(e.title))])],1)}),0)])],1)},staticRenderFns:[]};var C=o("C7Lr")(g,b,!1,function(t){o("X+uT")},"data-v-06b8f658",null).exports,y=o("WBIT"),w=o.n(y),T={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("wv-search-bar",{staticClass:"top_search",attrs:{autofocus:!1},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),o("p",{staticClass:"hr-44"}),t._v(" "),t.list.length>0?o("wv-panel",{attrs:{title:t.value}},[t._l(t.list,function(t,e){return o("wv-media-box",{key:e,attrs:{title:t.title,thumb:t.albums[0],description:t.imtro,to:"/cookbook/detail/"+t.id}})}),t._v(" "),o("wv-cell",{attrs:{slot:"ft",title:"查看更多","is-link":""},on:{click:t.getMore},slot:"ft"})],2):t._e()],1)},staticRenderFns:[]};var $=o("C7Lr")({data:function(){return{search:""}},created:function(){},computed:{value:function(){return this.$store.state.cook.search},list:{get:function(){return this.$store.state.cook.list},set:function(){}}},methods:{getMore:function(){this.$store.dispatch("getMoreCookbook")},onSearch:function(t){this.$store.commit("changeSearch",this.search),this.$store.dispatch("searchCookbook")},onCancel:function(){}}},T,!1,function(t){o("Wk3e")},"data-v-773337b2",null).exports,S={data:function(){return{detail:{},is_collect:!1}},created:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,this.$store.commit("changeSelectedId",this.$route.params.id),this.getDetail()},methods:{getDetail:function(){var t,e,o=this;t={id:this.$store.state.cook.selected_id},e=function(t){t.data?(console.log(t),o.detail=t.data.detail,o.is_collect=t.data.collect):alert("该内容已不存在")},v.a.get(p+"cook/detail/"+t.id).then(function(t){200==t.status?e(t.data):alert("服务器错误")})},doCollect:function(){var t=this.detail.id;this.is_collect=!this.is_collect,this.$store.dispatch("CookCollect",{id:t,title:this.detail.title,is_collect:this.is_collect})}}},R={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("span",{staticClass:"goback",on:{click:function(e){return t.$router.go(-1)}}},[t._v("< 返回")]),t._v(" "),t.is_collect?o("span",{staticClass:"doCollect on",on:{click:t.doCollect}},[t._v("已收藏")]):o("span",{staticClass:"doCollect",on:{click:t.doCollect}},[t._v("收藏")]),t._v(" "),t.detail.id?o("div",{staticClass:"detail"},[o("h1",{staticClass:"title"},[t._v(t._s(t.detail.title))]),t._v(" "),o("img",{staticClass:"weui-article-img",attrs:{src:t.detail.albums[0],alt:""}}),t._v(" "),o("p",{staticClass:"panel"},[t._v("简介 : "+t._s(t.detail.imtro))]),t._v(" "),o("p",{staticClass:"panel"},[t._v("准备 : "+t._s(t.detail.burden))]),t._v(" "),t._l(t.detail.steps,function(e){return o("div",[o("p",[t._v(t._s(e.step))]),t._v(" "),o("img",{attrs:{src:e.img,alt:""}})])})],2):t._e()])},staticRenderFns:[]};var L=o("C7Lr")(S,R,!1,function(t){o("luis")},"data-v-781fb08c",null).exports,x={data:function(){return{value:"",defaultResult:["Apple","Banana","Orange","Durian","Lemon","Peach","Cherry","Berry","Core","Fig","Haw","Melon","Plum","Pear","Peanut","Other"]}},computed:{filterResult:function(){var t=this;return this.defaultResult.filter(function(e){return new RegExp(t.value,"i").test(e)})}},methods:{onSearch:function(t){localStorage.setItem("username","zhangsan")},onCancel:function(){}},created:function(){console.log(this),y.Toast.loading({duration:1e6,message:"laoding"}),setTimeout(function(){y.Toast.close()},3e3)}},I={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},E=o("C7Lr")(x,I,!1,null,null,null).exports;a.default.use(r.a);var P=new r.a({routes:[{path:"/",name:"index",component:u},{path:"/cookbook",name:"cookbook",component:C},{path:"/cookbook/list",name:"cookList",component:$},{path:"/cookbook/detail/:id",name:"cookDetail",component:L},{path:"/demo",name:"demo",component:E}]}),F=(o("7J73"),o("rVsN")),M=o.n(F),H=o("b8UZ");a.default.use(H.a);var K={searchCookbook:function(t,e){return t.commit("resetPage"),y.Toast.loading({duration:1e6,message:"laoding"}),new M.a(function(e){_(t.state.cook).then(function(o){y.Toast.close(),200==o.status?0==o.data.status?t.commit("changeCookbookList",o.data.data):9002==o.data.status?alert("没有这个菜,换个词试试吧"):alert(o.data.msg):alert("请求链接异常"),e()})})},getMoreCookbook:function(t,e){return t.commit("changePage"),y.Toast.loading({duration:1e6,message:"laoding"}),new M.a(function(e){_(t.state.cook).then(function(o){y.Toast.close(),200==o.status?0==o.data.status?t.commit("getMoreCookbook",o.data.data):9002==o.data.status?alert("没了,就这些了..."):alert(o.data.msg):alert("请求链接异常"),e()})})},CookCollect:function(t,e){return new M.a(function(t){(function(t){return m.post("cook/collect",{menu_id:t.id,title:t.title,is_collect:t.is_collect})})(e).then(function(e){200==e.status?0==e.data.status&&y.Toast.success("操作成功"):alert("请求链接异常"),t()})})}},D=new H.a.Store({state:{cook:{search:"",page:1,pageSize:10,selected_id:0,list:[]}},mutations:{changeSearch:function(t,e){t.cook.search=e},changePage:function(t,e){t.cook.page++},resetPage:function(t){t.cook.page=1},changeSelectedId:function(t,e){t.cook.selected_id=e},changeCookbookList:function(t,e){t.cook.list=e},getMoreCookbook:function(t,e){t.cook.list=t.cook.list.concat(e)}},actions:K});a.default.use(w.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:P,store:D,components:{App:c},template:"<App/>"})},Wk3e:function(t,e){},"X+uT":function(t,e){},luis:function(t,e){},pend:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.77d022cc8b4ca723bad2.js.map