webpackJsonp([13],{"b/7A":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"MovieComing",data:function(){return{loading:!0,detailShow:!1,movies:[],span:"",screenWidth:document.body.clientWidth,timer:null,movieDetail:{boxOffice:{todayBoxDesUnit:"",todayBoxDes:"",totalBoxUnit:"",totalBoxDes:""},basic:{img:"",actors:[],director:{img:"",name:""}}},activeKey:"1",detailLoading:!0,comments:[]}},methods:{detail:function(t){var e=this;this.activeKey="1",this.detailShow=!0,this.detailLoading=!0,this.$get("movie/detail?id="+t).then(function(a){var i=JSON.parse(a.data.data);i=i.data,e.movieDetail=i,e.detailLoading=!1,e.$get("movie/comments?id="+t).then(function(t){var a=JSON.parse(t.data.data);a=a.data,e.comments=e.comments.concat(a.mini.list),e.comments=e.comments.concat(a.plus.list)})})},detailClose:function(){this.detailShow=!1,this.comments=[]},video:function(t){window.open(t)},changeTab:function(t){this.activeKey=t},getDate:function(t){return new Date(1e3*t).toLocaleString()}},mounted:function(){var t=this,e=this,a=window.innerWidth;this.span=a>1660?4:a>1250?6:a>1e3?8:a>900?10:12,window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(e.screenWidth=window.screenWidth)},this.$get("movie/coming").then(function(e){var a=JSON.parse(e.data.data);t.movies=a.moviecomings,t.loading=!1})},watch:{screenWidth:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){e.screenWidth=t,e.span=t>1660?4:t>1250?6:t>1e3?8:t>900?10:12},100)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-skeleton",{attrs:{active:"",loading:t.loading,paragraph:{rows:24}}},[a("div",{staticStyle:{padding:"10px"}},[a("a-row",t._l(t.movies,function(e,i){return a("a-col",{key:i,staticStyle:{padding:"1rem"},attrs:{span:t.span}},[a("a-card",{staticClass:"movie-card",staticStyle:{width:"200px"},on:{click:function(a){return t.detail(e.id)}}},[a("img",{staticStyle:{width:"198px",height:"300px"},attrs:{src:e.image,alt:"海报"}}),t._v(" "),a("div",{staticClass:"movie-desc"},[a("div",{staticClass:"movie-title",attrs:{title:e.title}},[a("p",[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticStyle:{color:"#aaa","margin-bottom":".2rem"}},[t._v(t._s(e.type))]),t._v(" "),a("p",[t._v(t._s(e.releaseDate))])])])],1)}),1),t._v(" "),a("a-modal",{staticClass:"movie-detail",attrs:{width:700,keyboard:!1,centered:!0,maskClosable:!1,mask:!1,footer:null},on:{cancel:t.detailClose},model:{value:t.detailShow,callback:function(e){t.detailShow=e},expression:"detailShow"}},[a("a-tabs",{ref:"movieTabs",attrs:{activeKey:t.activeKey},on:{change:t.changeTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"电影详情"}},[a("a-skeleton",{attrs:{active:"",loading:t.detailLoading,paragraph:{rows:14}}},[a("span",[a("a-row",{attrs:{gutter:2}},[a("a-col",{staticClass:"poster",attrs:{span:12}},[a("img",{staticClass:"poster-img",attrs:{alt:"电影海报",src:t.movieDetail.basic.img}})]),t._v(" "),a("a-col",{attrs:{span:12}},[a("p",[t._v("片名："+t._s(t.movieDetail.basic.name))]),t._v(" "),a("p",[t._v("片长："+t._s(t.movieDetail.basic.mins))]),t._v(" "),a("p",[t._v("是否3D："+t._s(t.movieDetail.basic.is3D?"是":"否"))]),t._v(" "),a("p",[t._v("是否IMAX："+t._s(t.movieDetail.basic.isIMAX?"是":"否"))]),t._v(" "),a("p",[t._v("上映日期："+t._s(t.movieDetail.basic.releaseDate))]),t._v(" "),a("p",[t._v("上映国家 / 地区："+t._s(t.movieDetail.basic.releaseArea))]),t._v(" "),a("p",[t._v("综合评分："+t._s(-1===t.movieDetail.basic.overallRating?"暂无评分":t.movieDetail.basic.overallRating))]),t._v(" "),t.movieDetail.boxOffice.todayBoxDesUnit?a("p",[t._v(t._s(t.movieDetail.boxOffice.todayBoxDesUnit)+"："+t._s(t.movieDetail.boxOffice.todayBoxDes))]):t._e(),t._v(" "),t.movieDetail.boxOffice.totalBoxUnit?a("p",[t._v(t._s(t.movieDetail.boxOffice.totalBoxUnit)+"："+t._s(t.movieDetail.boxOffice.totalBoxDes))]):t._e(),t._v(" "),a("p",[t._v("预告片："),a("a",{on:{click:function(e){return t.video(t.movieDetail.basic.video.hightUrl)}}},[t._v("点击查看")])]),t._v(" "),a("a-popover",{attrs:{title:t.movieDetail.basic.director.name}},[a("template",{slot:"content"},[a("img",{staticStyle:{width:"140px",height:"180px"},attrs:{alt:"头像",src:t.movieDetail.basic.director.img}})]),t._v(" "),a("p",[t._v("导演："),a("a",[t._v(t._s(t.movieDetail.basic.director.name))])])],2),t._v(" "),a("div",{staticStyle:{"margin-bottom":".4rem"}},[t._v("\n                  主演：\n                  "),t._l(t.movieDetail.basic.actors,function(e,i){return[a("a-popover",{key:i,attrs:{title:e.name}},[a("template",{slot:"content"},[a("div",[a("p",{staticStyle:{"max-width":"140px"}},[t._v("扮演："+t._s(e.roleName?e.roleName:"未知 X_X"))]),t._v(" "),a("img",{staticStyle:{width:"140px",height:"180px"},attrs:{alt:"头像",src:e.img}})])]),t._v(" "),e.name?a("span",[0===i?a("span",[a("a",{staticStyle:{"margin-left":"-6px"}},[t._v(t._s(e.name))]),t._v(" · ")]):i===t.movieDetail.basic.actors.length-1?a("span",[a("a",[t._v(t._s(e.name))])]):a("span",[a("a",[t._v(t._s(e.name))]),t._v(" · ")])]):t._e()],2)]})],2)],1)],1),t._v(" "),a("a-row",[a("a-col",[a("a-divider",{attrs:{orientation:"left"}},[t._v("电影简介")]),t._v(" "),a("div",{staticStyle:{"text-indent":"1rem","margin-bottom":"2rem"}},[t._v(t._s(t.movieDetail.basic.story))])],1)],1)],1)])],1),t._v(" "),a("a-tab-pane",{key:"2",attrs:{tab:"电影评论"}},[a("div",[a("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.comments},scopedSlots:t._u([{key:"renderItem",fn:function(e,i){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.content}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n                  "+t._s(e.nickname)+" \n                  "),a("span",{staticStyle:{color:"#aaa","font-weight":"400","font-size":"13px"}},[t._v(t._s(t.getDate(e.commentDate)))])]),t._v(" "),a("a-avatar",{attrs:{slot:"avatar",src:e.headImg},slot:"avatar"})],1)],1)}}])})],1)])],1)],1)],1)])},staticRenderFns:[]},s=a("VU/8")(i,o,!1,function(t){a("k2zW")},null,null);e.default=s.exports},k2zW:function(t,e){}});