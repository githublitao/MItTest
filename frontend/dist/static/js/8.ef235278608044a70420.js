webpackJsonp([8],{TOsa:function(t,o){},pO8N:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=a("P9l9"),n=a("Au9i"),l={name:"blackList",data:function(){return{total:"",value:"",result:[],searchCondition:{pageVal:1,pageSize:20},allLoaded:!1,status:"",bottomPullTextVal:"上划加载更多数据",bottomDropTextVal:"释放更新",bottomLoadingTextVal:"加载中...",topPullTextVal:"下拉加载更多数据",topDropTextVal:"释放更新",topLoadingTextVal:"加载中...",topStatus:"",bottomStatus:""}},methods:{search:function(){var t=this,o={page:t.searchCondition.pageVal,name:t.value};Object(e.a)({},o).then(function(o){o.msg;var a=o.code,e=o.data;"999999"===a?(t.total=e.total,console.log(e.data),e.data.forEach(function(o){t.result.push(o)})):Object(n.Toast)({message:"查询失败",position:"bottom",duration:5e3})})},loadBottom:function(){this.searchCondition.pageVal<this.total?(this.searchCondition.pageVal++,this.$refs.loadmore.onBottomLoaded(),this.search()):(this.$refs.loadmore.onBottomLoaded(),Object(n.Toast)("我是底线的！"))},loadTop:function(){this.allLoaded=!1,this.searchCondition.pageVal=1,this.search(),this.$refs.loadmore.onTopLoaded()},handleTopChange:function(t){this.topStatus=t},handleBottomChange:function(t){this.bottomStatus=t}},mounted:function(){this.search()}},s={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("form",{staticStyle:{"margin-top":"5px"},attrs:{action:""},on:{submit:function(t){t.preventDefault()}}},[a("mt-search",{attrs:{placeholder:"请输入关键字",show:!0},nativeOn:{keyup:function(o){if(!("button"in o)&&t._k(o.keyCode,"enter",13,o.key,"Enter"))return null;t.search(t.value)}},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}},[a("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"top-method":t.loadTop,"bottom-all-loaded":t.allLoaded,bottomPullText:t.bottomPullTextVal,bottomDropText:t.bottomDropTextVal,bottomLoadingText:t.bottomLoadingTextVal,topPullText:t.topPullTextVal,topDropText:t.topDropTextVal,topLoadingText:t.topLoadingTextVal,autoFill:!1},on:{"bottom-status-change":t.handleBottomChange,"top-status-change":t.handleTopChange}},[a("div",{staticStyle:{"margin-top":"80px"}},t._l(t.result,function(t){return a("mt-cell",{key:t.id,attrs:{title:t.CompanyName,to:{name:"公司详情",query:t}}})}))])],1)],1)},staticRenderFns:[]};var i=a("VU/8")(l,s,!1,function(t){a("TOsa")},"data-v-37be8532",null);o.default=i.exports}});