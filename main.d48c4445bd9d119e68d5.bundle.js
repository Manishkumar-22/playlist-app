webpackJsonp([1],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";function e(n){return s._17(0,[(n()(),s._4(0,0,null,null,3,"li",[],[[2,"active",null]],[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.playVideo(n.context.$implicit)&&e}return e},null,null)),(n()(),s._4(1,0,null,null,1,"a",[],null,null,null,null,null)),(n()(),s._16(2,null,["",""])),(n()(),s._16(-1,null,["\n        \n    "]))],null,function(n,l){n(l,0,0,l.component.title==l.context.$implicit.title),n(l,2,0,l.context.$implicit.title)})}function u(n){return s._17(0,[(n()(),s._4(0,0,null,null,9,"div",[],null,null,null,null,null)),(n()(),s._16(-1,null,["\n  "])),(n()(),s._4(2,0,null,null,4,"ul",[["class","rectangle-list"]],null,null,null,null,null)),(n()(),s._16(-1,null,["\n    "])),(n()(),s.Y(16777216,null,null,1,null,e)),s._2(5,802816,null,0,m.c,[s.N,s.K,s.t],{ngForOf:[0,"ngForOf"]},null),(n()(),s._16(-1,null,["\n                \n"])),(n()(),s._16(-1,null,["\n"])),(n()(),s._4(8,0,null,null,0,"div",[["class","playlist"]],null,null,null,null,null)),(n()(),s._16(-1,null,["\n\n"]))],function(n,l){n(l,5,0,l.component.playlists)},null)}function o(n){return s._17(0,[(n()(),s._16(-1,null,["\n"])),(n()(),s.Y(16777216,null,null,1,null,u)),s._2(2,16384,null,0,m.d,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s._16(-1,null,["\n\n"]))],function(n,l){var t=l.component;n(l,2,0,0!=(null==t.playlists?null:t.playlists.length))},null)}function i(n){return s._17(0,[(n()(),s._4(0,0,null,null,1,"app-playlist",[],null,null,null,o,O)),s._2(1,114688,null,0,b,[v],null,null)],function(n,l){n(l,1,0)},null)}function c(n){return s._17(0,[(n()(),s._4(0,0,null,null,1,"video",[["class","playlistVideo"],["controls",""]],[[8,"src",4]],null,null,null,null)),(n()(),s._16(-1,null,["\n \n"])),(n()(),s._16(-1,null,["\n\n"]))],null,function(n,l){var t=l.component;n(l,0,0,null==t.playlist?null:t.playlist.videoUrl)})}function a(n){return s._17(0,[(n()(),s._4(0,0,null,null,1,"app-video",[],null,null,null,c,k)),s._2(1,573440,null,0,M,[],null,null)],null,null)}function r(n){return s._17(0,[(n()(),s._4(0,0,null,null,14,"div",[["class","container"]],null,null,null,null,null)),(n()(),s._16(-1,null,["\n\n"])),(n()(),s._4(2,0,null,null,4,"div",[["class","playlistContainer"]],null,null,null,null,null)),(n()(),s._16(-1,null,["\n\n"])),(n()(),s._4(4,0,null,null,1,"app-playlist",[],null,[[null,"play"]],function(n,l,t){var e=!0,u=n.component;if("play"===l){e=!1!==u.playTheVideo(t)&&e}return e},o,O)),s._2(5,114688,null,0,b,[v],null,{play:"play"}),(n()(),s._16(-1,null,["\n"])),(n()(),s._16(-1,null,["\n\n"])),(n()(),s._4(8,0,null,null,5,"div",[["class","videoContainer"]],null,null,null,null,null)),(n()(),s._16(-1,null,["\n"])),(n()(),s._4(10,0,null,null,2,"app-video",[],null,null,null,c,k)),s._2(11,573440,null,0,M,[],{playlist:[0,"playlist"]},null),(n()(),s._16(-1,null,["\n\n\n"])),(n()(),s._16(-1,null,["\n"])),(n()(),s._16(-1,null,["\n\n"]))],function(n,l){var t=l.component;n(l,5,0),n(l,11,0,t.video)},null)}function _(n){return s._17(0,[(n()(),s._4(0,0,null,null,1,"app-root",[],null,null,null,r,V)),s._2(1,49152,null,0,d,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var s=t("/oeL"),p={production:!0},f=function(){function n(){}return n}(),d=function(){function n(){}return n.prototype.playTheVideo=function(n){this.video=n,console.log(this.video)},n}(),g=["*[_ngcontent-%COMP%]{margin:0;padding:0}.container[_ngcontent-%COMP%]{width:100%}.playlistContainer[_ngcontent-%COMP%]{float:left;width:30%}.videoContainer[_ngcontent-%COMP%]{width:65%;float:right;height:90vh;margin-top:16px;border:14px solid #8383de}"],y=['.rectangle-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:block;padding:.4em .4em .4em .8em;*padding:.4em;margin:.5em 0 .5em 2.5em;background:#222;color:#efefef;text-decoration:none;transition:all .3s ease-out}.rectangle-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#444}.rectangle-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-2.5em;top:50%;margin-top:-1em;background:#8383de;height:2em;width:2em;line-height:2em;text-align:center;font-weight:700}.rectangle-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{position:absolute;content:"";border:.5em solid transparent;left:-1em;top:50%;margin-top:-.5em;transition:all .3s ease-out}.rectangle-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{left:-.5em;border-left-color:#8383de}li[_ngcontent-%COMP%]{list-style-type:none;cursor:pointer}.active[_ngcontent-%COMP%]{background:#222}.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after{left:-.5em;border-left-color:#8383de}.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:before{background:#8383de;content:"\\BB";color:#222;text-shadow:none}'],m=t("qbdv"),h=t("CPp0"),v=(t("GQSG"),function(){function n(n){this.http=n}return n.prototype.getVideoData=function(){return this.http.post("https://q76udcq2l7.execute-api.us-east-1.amazonaws.com/temp/playlist",{demo:!0,type:"TV_SERIES"}).map(function(n){return n.json()})},n.ctorParameters=function(){return[{type:h.d}]},n}()),b=function(){function n(n){var l=this;this.play=new s.m,this.title="",n.getVideoData().subscribe(function(n){l.playlists=n.RESULT,console.log(l.playlists),l.title=l.playlists[0].title,l.play.emit(l.playlists[0])})}return n.prototype.playVideo=function(n){this.play.emit(n),this.title=n.title},n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:v}]},n}(),C=[y],O=s._1({encapsulation:0,styles:C,data:{}}),P=(s.Z("app-playlist",b,i,{},{play:"play"},[]),[".playlistVideo[_ngcontent-%COMP%]{width:100%;-o-object-fit:fill;object-fit:fill;height:100%}"]),M=function(){function n(){}return n.prototype.ngOnChanges=function(n){console.log(this.playlist)},n.ctorParameters=function(){return[]},n}(),w=[P],k=s._1({encapsulation:0,styles:w,data:{}}),x=(s.Z("app-video",M,a,{playlist:"video"},{},[]),[g]),V=s._1({encapsulation:0,styles:x,data:{}}),j=s.Z("app-root",d,_,{},{},[]),F=t("fc+i"),I=s._0(f,[d],function(n){return s._13([s._14(512,s.i,s.W,[[8,[j]],[3,s.i],s.x]),s._14(4608,h.c,h.c,[]),s._14(4608,h.g,h.b,[]),s._14(5120,h.i,h.j,[]),s._14(4608,h.h,h.h,[h.c,h.g,h.i]),s._14(4608,h.f,h.a,[]),s._14(5120,h.d,h.k,[h.h,h.f]),s._14(5120,s.v,s._12,[[3,s.v]]),s._14(4608,m.f,m.e,[s.v]),s._14(4608,s.h,s.h,[]),s._14(5120,s.a,s._5,[]),s._14(5120,s.t,s._10,[]),s._14(5120,s.u,s._11,[]),s._14(4608,F.b,F.s,[m.b]),s._14(6144,s.H,null,[F.b]),s._14(4608,F.e,F.f,[]),s._14(5120,F.c,function(n,l,t,e){return[new F.k(n),new F.o(l),new F.n(t,e)]},[m.b,m.b,m.b,F.e]),s._14(4608,F.d,F.d,[F.c,s.z]),s._14(135680,F.m,F.m,[m.b]),s._14(4608,F.l,F.l,[F.d,F.m]),s._14(6144,s.F,null,[F.l]),s._14(6144,F.p,null,[F.m]),s._14(4608,s.L,s.L,[s.z]),s._14(4608,F.g,F.g,[m.b]),s._14(4608,F.i,F.i,[m.b]),s._14(4608,v,v,[h.d]),s._14(512,h.e,h.e,[]),s._14(512,m.a,m.a,[]),s._14(1024,s.l,F.q,[]),s._14(1024,s.b,function(n,l){return[F.r(n,l)]},[[2,F.h],[2,s.y]]),s._14(512,s.c,s.c,[[2,s.b]]),s._14(131584,s._3,s._3,[s.z,s.X,s.r,s.l,s.i,s.c]),s._14(2048,s.e,null,[s._3]),s._14(512,s.d,s.d,[s.e]),s._14(512,F.a,F.a,[[3,F.a]]),s._14(512,f,f,[])])});p.production&&Object(s.R)(),Object(F.j)().bootstrapModuleFactory(I).catch(function(n){return console.log(n)})},gFIY:function(n,l){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="gFIY"}},[0]);