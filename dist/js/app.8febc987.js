(function(e){function t(t){for(var s,r,a=t[0],c=t[1],d=t[2],u=0,f=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0367":function(e,t,n){},"13c1":function(e,t,n){},1943:function(e,t,n){},"2ace":function(e,t,n){},"338d":function(e,t,n){"use strict";n("705b")},3535:function(e,t,n){"use strict";n("1943")},"3b9b":function(e,t,n){},"45a0":function(e,t,n){},4600:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Background"),n("Bandname"),n("Socials"),n("MainContent",{attrs:{selectedTab:e.selectedTab}}),n("Tabs",{on:{"select-tab":e.selectTab}})],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"background"}})},a=[],c=(n("f2e1"),n("2877")),d={},l=Object(c["a"])(d,r,a,!1,null,"0a5fcb5c",null),u=l.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"band-name-container"}},[n("img",{attrs:{src:"/images/band-name.jpg",id:"band-name"}})])}],h={},g=h,p=(n("3535"),Object(c["a"])(g,f,m,!1,null,"66cccf5e",null)),b=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"socials"}},e._l(e.socials,(function(t,s){return n("button",{key:s,attrs:{target:"_blank",id:"social"},on:{click:function(n){return e.visit(t.link)}}},[n("img",{attrs:{src:t.image,id:"social-image"}})])})),0)},w=[],x={data:function(){return{socials:[{image:"/images/instagram hover.png",link:"https://www.instagram.com/trickysusan/?hl=en"},{image:"/images/facebook hover.png",link:"https://www.facebook.com/TrickySusan"},{image:"/images/youtube.png",link:"https://www.youtube.com/user/youronewayticket"}]}},methods:{visit:function(e){window.open(e,"_blank")}}},I=x,y=(n("8fa8"),Object(c["a"])(I,v,w,!1,null,"6874d2e3",null)),_=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-content"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"News"===e.selectedTab,expression:"selectedTab === 'News'"}]},[n("News")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"Gigs"===e.selectedTab,expression:"selectedTab === 'Gigs'"}]},[n("Gigs")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"Bio"===e.selectedTab,expression:"selectedTab === 'Bio'"}]},[n("Bio")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"Photos"===e.selectedTab,expression:"selectedTab === 'Photos'"}]},[n("Photos")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"Videos"===e.selectedTab,expression:"selectedTab === 'Videos'"}]},[n("videos")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"Contact"===e.selectedTab,expression:"selectedTab === 'Contact'"}]},[n("contact")],1)])},T=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"news"}},[n("div",{attrs:{id:"date"}},[e._v(" "+e._s(e.posts[e.selectedPostIndex].date)+" ")]),n("br"),n("div",[n("span",{domProps:{innerHTML:e._s(e.posts[e.selectedPostIndex].post)}})]),n("br"),n("br"),n("div",{attrs:{id:"video-navigator"}},[n("button",{staticClass:"nav-button",on:{click:function(t){return e.previousPost()}}},[n("img",{attrs:{src:"/images/previous-button.png",id:"previous-icon"}})]),n("div",{attrs:{id:"caption"}}),n("button",{staticClass:"nav-button",on:{click:function(t){return e.nextPost()}}},[n("img",{attrs:{src:"/images/next-button.png",id:"next-icon"}})])])])},P=[],O={data:function(){return{posts:[{date:"08.10.20",post:"Word on the street Tricky Su are close to a single release....WHAAAATTTT?!!! WATCH THIS SPACE"},{date:"14.07.20",post:'Let’s face it - COVID-19 continues to be a major prick. We’re working really hard to establish which venues will have us back as soon as possible, so we can provide the antidote to all this BS – a large and loud dose of Tricky Susan.<br><br>In the meanwhile we’ve been in the recording studio laying down our latest tracks. Watch this space ...<br><br><div style="text-align: center"><h1>KA-POW.</h1></div>'}],selectedPostIndex:this.getIndex()||0}},mounted:function(){},methods:{nextPost:function(){this.selectedPostIndex===this.posts.length-1?this.selectedPostIndex=0:this.selectedPostIndex+=1,this.storeIndex()},previousPost:function(){0===this.selectedPostIndex?this.selectedPostIndex=this.posts.length-1:this.selectedPostIndex-=1,this.storeIndex()},storeIndex:function(){sessionStorage.selectedPostIndex=this.selectedPostIndex},getIndex:function(){return parseInt(sessionStorage.selectedPostIndex,10)}}},S=O,C=(n("8267"),Object(c["a"])(S,j,P,!1,null,"42adf1ed",null)),V=C.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"shadow-one",attrs:{id:"gig-image-container"}},[n("img",{attrs:{src:"/images/stage.jpg",id:"gig-image"}}),n("br"),n("br")]),n("br"),n("div",{attrs:{id:"gig-caption"}},[e._v(" You will note the lack of bodies both on and off stage."),n("br"),e._v(" As soon as this can be remedied, it shall be. ")])])}],N=(n("a798"),{}),B=Object(c["a"])(N,$,E,!1,null,"59a65ae4",null),A=B.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Tricky Susan are here to assault your taste buds with their attention-grabbing rock ‘n’ roll. "),n("br"),n("br"),e._v(" A four-piece outfit formed in London, Tricky Susan entice you to join their journey with their melodic, hook-driven and beat-centric hits. Packing the punch in their storytelling and an intense gusto for performing live – their energy is hard to eclipse. "),n("br"),n("br"),e._v(" Head over to the Gigs page and follow them on Instagram and Facebook … PRONTO. "),n("div",{attrs:{id:"quotes"}},[e._v(' "... I’ve seen deaf people cry at a Tricky Susan show ..."'),n("br"),e._v(' "... I’ve even seen a goose take a bump at one of their shows ..." ')])])}],W=(n("efd1"),{}),G=Object(c["a"])(W,M,H,!1,null,"0fa1c0b8",null),L=G.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"photo-outer"},[n("img",{staticClass:"photo",attrs:{src:e.images[e.selectedImageIndex]}})]),n("div",{attrs:{id:"video-navigator"}},[n("button",{staticClass:"nav-button",on:{click:function(t){return e.previousImage()}}},[n("img",{attrs:{src:"/images/previous-button.png",id:"previous-icon"}})]),n("div",{attrs:{id:"caption"}}),n("button",{staticClass:"nav-button",on:{click:function(t){return e.nextImage()}}},[n("img",{attrs:{src:"/images/next-button.png",id:"next-icon"}})])])])},q=[],D={data:function(){return{images:["/images/0.jpg","/images/1.jpg","/images/2.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg","/images/6.jpg","/images/7.jpg","/images/8.jpg","/images/9.jpg","/images/10.jpg"],selectedImageIndex:this.getIndex()||0}},methods:{nextImage:function(){this.selectedImageIndex===this.images.length-1?this.selectedImageIndex=0:this.selectedImageIndex+=1,this.storeIndex()},previousImage:function(){0===this.selectedImageIndex?this.selectedImageIndex=this.images.length-1:this.selectedImageIndex-=1,this.storeIndex()},storeIndex:function(){sessionStorage.selectedImageIndex=this.selectedImageIndex},getIndex:function(){return parseInt(sessionStorage.selectedImageIndex,10)}}},J=D,Y=(n("8a03"),Object(c["a"])(J,U,q,!1,null,"7cb58b43",null)),R=Y.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"video"}},[n("span",{domProps:{innerHTML:e._s(e.videos[e.selectedVideoIndex].address)}})]),n("div",{attrs:{id:"video-navigator"}},[n("button",{staticClass:"nav-button",on:{click:function(t){return e.previousVideo()}}},[n("img",{attrs:{src:"/images/previous-button.png",id:"previous-icon"}})]),n("div",{attrs:{id:"caption"}}),n("button",{staticClass:"nav-button",on:{click:function(t){return e.nextVideo()}}},[n("img",{attrs:{src:"/images/next-button.png",id:"next-icon"}})])])])},F=[],K={data:function(){return{videos:[{name:"Undercover",address:'<iframe src="https://www.youtube.com/embed/ZZUYN2O9bdU?rel=0&modestbranding=1"                     frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media;                     gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'},{name:"Strategy",address:'<iframe src="https://www.youtube.com/embed/exggrODRu4w?rel=0&modestbranding=1"                     frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media;                     gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'},{name:"Tug of War",address:'<iframe src="https://www.youtube.com/embed/hm2jNxkG2ak?rel=0&modestbranding=1&start=4"                     frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media;                     gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'},{name:"Come On Over (session)",address:'<iframe src="https://www.youtube.com/embed/X3lryMPttIY?rel=0&modestbranding=1"                     frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media;                     gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'},{name:"Baby, I Do",address:'<iframe src="https://www.youtube.com/embed/qTJmtTHc31U?rel=0&modestbranding=1"                     frameborder="0" fullscreen="0" allow="accelerometer; autoplay; encrypted-media;                     gyroscope; picture-in-picture" allowfullscreen style="height: 60vh; width: 60vw"></iframe>'}],selectedVideoIndex:this.getIndex()||0}},methods:{previousVideo:function(){0===this.selectedVideoIndex?this.selectedVideoIndex=this.videos.length-1:this.selectedVideoIndex-=1,this.storeIndex()},nextVideo:function(){this.selectedVideoIndex===this.videos.length-1?this.selectedVideoIndex=0:this.selectedVideoIndex+=1,this.storeIndex()},storeIndex:function(){sessionStorage.selectedVideoIndex=this.selectedVideoIndex},getIndex:function(){return parseInt(sessionStorage.selectedVideoIndex)}}},X=K,z=(n("d1da"),Object(c["a"])(X,Z,F,!1,null,"1322e852",null)),Q=z.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"contact"}},[n("h2",[e._v("Wanna get in touch?")]),n("h2",[e._v("Hit us up on")]),n("div",{attrs:{id:"email"}},[n("a",{attrs:{href:"mailto:trickysusanband@gmail.com"}},[e._v("trickysusanband@gmail.com")])])])}],ne=(n("610c"),{}),se=Object(c["a"])(ne,ee,te,!1,null,null,null),ie=se.exports,oe={props:{selectedTab:{type:String,required:!0}},components:{News:V,Gigs:A,Bio:L,Photos:R,Videos:Q,Contact:ie}},re=oe,ae=(n("338d"),Object(c["a"])(re,k,T,!1,null,"1fd09f38",null)),ce=ae.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"tabs"}},e._l(e.tabs,(function(t,s){return n("span",{key:s},[n("button",{staticClass:"tab",attrs:{id:t},on:{click:function(n){return e.selectTab(t)}}},[e._v(e._s(t))])])})),0)},le=[],ue={data:function(){return{tabs:["News","Gigs","Bio","Photos","Videos","Contact"]}},methods:{selectTab:function(e){this.$emit("select-tab",e)}}},fe=ue,me=(n("c123"),Object(c["a"])(fe,de,le,!1,null,"26cc0e80",null)),he=me.exports,ge={components:{Background:u,Bandname:b,Socials:_,MainContent:ce,Tabs:he},data:function(){return{selectedTab:sessionStorage.tab||"News"}},methods:{selectTab:function(e){this.selectedTab=e,sessionStorage.tab=e}}},pe=ge,be=(n("034f"),Object(c["a"])(pe,i,o,!1,null,null,null)),ve=be.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(ve)}}).$mount("#app")},"610c":function(e,t,n){"use strict";n("0367")},"705b":function(e,t,n){},8267:function(e,t,n){"use strict";n("13c1")},"85ec":function(e,t,n){},"8a03":function(e,t,n){"use strict";n("f833")},"8fa8":function(e,t,n){"use strict";n("4600")},"9f4c":function(e,t,n){},a798:function(e,t,n){"use strict";n("45a0")},c123:function(e,t,n){"use strict";n("2ace")},d1da:function(e,t,n){"use strict";n("3b9b")},d260:function(e,t,n){},efd1:function(e,t,n){"use strict";n("d260")},f2e1:function(e,t,n){"use strict";n("9f4c")},f833:function(e,t,n){}});