(function(t){function e(e){for(var a,n,s=e[0],i=e[1],l=e[2],u=0,b=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&b.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,l||[]),c()}function c(){for(var t,e=0;e<o.length;e++){for(var c=o[e],a=!0,n=1;n<c.length;n++){var s=c[n];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=c[0]))}return t}var a={},n={app:0},r={app:0},o=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1cdebc2d":"f3839463","chunk-23c97068":"53717aa3","chunk-39384154":"e72fd7f4","chunk-40b9063c":"b0357e5b","chunk-47389066":"f6ed7160","chunk-5127f104":"95f04b7b","chunk-5a951387":"5c91cd4b","chunk-6c75082c":"a42cde18","chunk-9bc4e762":"5de00f08","chunk-a377b8e2":"aa9c8019","chunk-c40a7a00":"60f5fb5e","chunk-d1a103ba":"4d29001c"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var c=a[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.e=function(t){var e=[],c={"chunk-1cdebc2d":1,"chunk-23c97068":1,"chunk-39384154":1,"chunk-40b9063c":1,"chunk-47389066":1,"chunk-5127f104":1,"chunk-5a951387":1,"chunk-6c75082c":1,"chunk-9bc4e762":1,"chunk-a377b8e2":1,"chunk-c40a7a00":1,"chunk-d1a103ba":1};n[t]?e.push(n[t]):0!==n[t]&&c[t]&&e.push(n[t]=new Promise((function(e,c){for(var a="css/"+({}[t]||t)+"."+{"chunk-1cdebc2d":"d66b6acf","chunk-23c97068":"bcfee474","chunk-39384154":"c14a2dd3","chunk-40b9063c":"42543cb4","chunk-47389066":"5b395727","chunk-5127f104":"e9bb8022","chunk-5a951387":"221df8ee","chunk-6c75082c":"084c9bce","chunk-9bc4e762":"e66de79a","chunk-a377b8e2":"ae5b0ffc","chunk-c40a7a00":"055dcb53","chunk-d1a103ba":"245c7d88"}[t]+".css",r=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){l=b[s],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],d.parentNode.removeChild(d),c(o)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,c){a=r[t]=[e,c]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var b=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var c=r[t];if(0!==c){if(c){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",b.name="ChunkLoadError",b.type=a,b.request=n,c[1](b)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,c){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(c,a,function(e){return t[e]}.bind(null,a));return c},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/superPowerGems/dist/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var b=0;b<l.length;b++)e(l[b]);var d=u;o.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},1336:function(t,e,c){"use strict";c.d(e,"a",(function(){return a})),c.d(e,"b",(function(){return n}));c("ac1f"),c("5319"),c("d3b7"),c("25f0"),c("99af");function a(t){return(t||0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}function n(t){var e=new Date(1e3*t).getFullYear(),c=new Date(1e3*t).getMonth()+1,a=new Date(1e3*t).getDate();return"".concat(e,"-").concat(c<10?"0".concat(c):c,"-").concat(a<10?"0".concat(a):a)}},3288:function(t,e,c){},3324:function(t,e,c){"use strict";var a=c("7a23"),n=Object(a["U"])("data-v-44656f1a");Object(a["z"])("data-v-44656f1a");var r=Object(a["g"])('<div class="bg-dark" data-v-44656f1a><div class="container py-3 text-center text-white" data-v-44656f1a><div class="d-flex justify-content-center" data-v-44656f1a><p class="mb-0 w-100" data-v-44656f1a>Copyright © 2021 Jason06286.</p><ul class="mb-0 d-flex list-unstyled ms-auto" data-v-44656f1a><li class="mx-3" data-v-44656f1a><a href="https://github.com/jason06286" target="_blank" class="text-white d-block" data-v-44656f1a><i class="bi bi-github" data-v-44656f1a></i></a></li><li class="mx-3" data-v-44656f1a><a href="mailto:dj4871114@gmail.com" target="_blank" class="text-white d-block" data-v-44656f1a><i class="bi bi-envelope-fill" data-v-44656f1a></i></a></li></ul></div></div></div>',1);Object(a["x"])();var o=n((function(t,e,c,n,o,s){return Object(a["w"])(),Object(a["e"])("footer",null,[r])})),s={};c("abb2");s.render=o,s.__scopeId="data-v-44656f1a";e["a"]=s},3348:function(t,e,c){},"46f5":function(t,e,c){},"49a3":function(t,e,c){},5330:function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),n=(c("7b17"),c("f9d5")),r=c.n(n),o=c("8a14"),s=(c("fe26"),c("e829"),c("7bb1")),i=c("3aa8"),l=c("cbdf"),u=c("9457");function b(t,e,c,n,r,o){var s=Object(a["F"])("router-view");return Object(a["w"])(),Object(a["e"])(s)}var d=c("f5af"),f=c.n(d),p={setup:function(){return Object(a["t"])((function(){f.a.init()})),{}}};c("d57d");p.render=b;var v=p,j=(c("d3b7"),c("3ca3"),c("ddb0"),c("6c02")),O=c("90ef"),h=c.n(O),m=Object(a["U"])("data-v-b271a820");Object(a["z"])("data-v-b271a820");var g={class:"bg-star"},k=Object(a["i"])("section",null,[Object(a["i"])("div",{class:"container"},[Object(a["i"])("div",{class:"py-5 d-flex align-items-center justify-content-center flex-column"},[Object(a["i"])("h2",{class:"pb-3 mb-3 border-bottom border-3 border-orange"}," 關於我們 "),Object(a["i"])("p",{class:"text-center about"},[Object(a["h"])(" 宇宙能源匱乏，外星人肆意掠奪，地球生存危在旦夕… "),Object(a["i"])("br"),Object(a["h"])(" 由各國頂尖科學家集結研發，透過能量轉換原則， "),Object(a["i"])("br"),Object(a["h"])(" 使能量透過能量石轉移到人體，以利人人擁有能量抵禦外敵。"),Object(a["i"])("br"),Object(a["h"])(" 能量石分成三大類，精礦、精鋼與精石， "),Object(a["i"])("br"),Object(a["h"])(" 各自蘊含其能力，又以精石最為稀有。 ")])])])],-1),w={class:"container"},y=Object(a["i"])("div",{class:"d-flex justify-content-center"},[Object(a["i"])("h2",{class:"pb-3 mb-3 border-bottom border-3 border-orange d-inline-block"}," 商品分類 ")],-1),x={class:"mb-3 row"},_=Object(a["h"])(" 全部商品 "),B=Object(a["h"])(" 精礦 "),P=Object(a["h"])(" 精鋼 "),D=Object(a["h"])(" 精石 "),C={class:"row bg-coupon"},S=Object(a["i"])("div",{class:"mb-3 mb-lg-0 col-12 col-lg-8"},[Object(a["i"])("p",{class:"mb-0 text-center fs-5"}," 想要更多優惠嗎?玩小遊戲領取優惠 ")],-1),F={class:"col-12 col-lg-4 d-grid"},T=Object(a["h"])("領取優惠 "),I=Object(a["h"])("最新上架"),M=Object(a["g"])('<section class="mt-5" data-v-b271a820><div class="mb-3 d-flex justify-content-center w-100" data-v-b271a820><h2 class="pb-3 border-bottom border-3 border-orange d-inline-block" data-v-b271a820> 使用方法 </h2></div><div class="row g-0" data-v-b271a820><div class="col-12 col-lg-6" data-v-b271a820><div class="bg-steup bg-steup1" data-v-b271a820><div class="bg-content" data-v-b271a820><div data-v-b271a820><h3 data-v-b271a820>步驟一</h3><p data-v-b271a820>拿到貨物時，內容物會有能量石和一組密碼</p></div></div></div></div><div class="col-12 col-lg-6" data-v-b271a820><div class="bg-steup bg-steup2" data-v-b271a820><div class="bg-content" data-v-b271a820><div data-v-b271a820><h3 data-v-b271a820>步驟二</h3><p data-v-b271a820>手握能量石，心中默想著密碼</p></div></div></div></div><div class="col-12 col-lg-6" data-v-b271a820><div class="bg-steup bg-steup3" data-v-b271a820><div class="bg-content" data-v-b271a820><div data-v-b271a820><h3 data-v-b271a820>步驟三</h3><p data-v-b271a820> 此時會感到能量湧進身體，通常為 10 ~ 15 分鐘吸收完成，因人而異 </p></div></div></div></div><div class="col-12 col-lg-6" data-v-b271a820><div class="bg-steup bg-steup4" data-v-b271a820><div class="bg-content" data-v-b271a820><div data-v-b271a820><h3 data-v-b271a820>步驟四</h3><p data-v-b271a820> 吸收完能量石會消失，轉換為能量充斥身體，<br data-v-b271a820> 可以心中默想能量石名稱、形狀，腦中就會浮現該能量石能力 </p></div></div></div></div></div></section>',1),E={class:"container"},z={class:"py-5 d-flex align-items-center justify-content-center flex-column"},L=Object(a["i"])("div",null,[Object(a["i"])("img",{class:"w-100 h-100 d-block",src:h.a,alt:"兩個外星人頭上充滿著問號"})],-1),A=Object(a["i"])("div",{class:"my-3 typewriter"},[Object(a["i"])("p",null,"還不知道適合哪種能量石?")],-1),N=Object(a["h"])("進行測驗");Object(a["x"])();var U=m((function(t,e,c,n,r,o){var s=Object(a["F"])("ToastMessages"),i=Object(a["F"])("BaseNavbar"),l=Object(a["F"])("HomeHeader"),u=Object(a["F"])("BaseCartModal"),b=Object(a["F"])("router-link"),d=Object(a["F"])("BaseSwiper"),f=Object(a["F"])("BaseFooter");return Object(a["w"])(),Object(a["e"])("div",null,[Object(a["i"])(s),Object(a["i"])(i),Object(a["i"])(l),Object(a["i"])(u),Object(a["i"])("div",g,[k,Object(a["i"])("section",null,[Object(a["i"])("div",w,[y,Object(a["i"])("div",x,[Object(a["i"])(b,{class:"py-3 text-center border mb-lg-3 col-lg-3 col-6 fw-bold list",to:"/frontDesk/products"},{default:m((function(){return[_]})),_:1}),Object(a["i"])(b,{class:"py-3 text-center border mb-lg-3 col-lg-3 col-6 fw-bold list",to:"/frontDesk/products"},{default:m((function(){return[B]})),_:1}),Object(a["i"])(b,{class:"py-3 text-center border mb-lg-3 col-lg-3 col-6 fw-bold list",to:"/frontDesk/products"},{default:m((function(){return[P]})),_:1}),Object(a["i"])(b,{class:"py-3 text-center border mb-lg-3 col-lg-3 col-6 fw-bold list",to:"/frontDesk/products"},{default:m((function(){return[D]})),_:1})]),Object(a["i"])("div",C,[S,Object(a["i"])("div",F,[Object(a["i"])(b,{class:"btn btn-primary",to:"/frontDesk/coupon"},{default:m((function(){return[T]})),_:1})])])])]),Object(a["i"])(d,{products:n.products.arr},{default:m((function(){return[I]})),_:1},8,["products"]),M,Object(a["i"])("section",null,[Object(a["i"])("div",E,[Object(a["i"])("div",z,[L,A,Object(a["i"])(b,{to:"/frontDesk/quiz",class:"btn btn-primary btn-lg"},{default:m((function(){return[N]})),_:1})])])])]),Object(a["i"])(f)])})),q=(c("99af"),c("c8ce")),V=c("3324"),H=Object(a["U"])("data-v-13955968");Object(a["z"])("data-v-13955968");var $=Object(a["h"])("命運掌握在自己手裡"),J=Object(a["h"])("你是否幻想過有超能力?");Object(a["x"])();var Y=H((function(t,e,c,n,r,o){var s=Object(a["F"])("swiper-slide"),i=Object(a["F"])("swiper");return Object(a["w"])(),Object(a["e"])(i,{pagination:!0,autoplay:!0,style:{height:"400px"}},{default:H((function(){return[Object(a["i"])(s,{class:"bg-slide1"},{default:H((function(){return[$]})),_:1}),Object(a["i"])(s,{class:"bg-slide2"},{default:H((function(){return[J]})),_:1})]})),_:1})})),G=c("90ea"),W=c("a16a"),K=(c("5f67"),c("6d3b")),Q=c("5dc8"),R=c("d17a");K["a"].use([Q["a"],R["a"]]);var X={components:{Swiper:G["a"],SwiperSlide:W["a"]}};c("6f53");X.render=Y,X.__scopeId="data-v-13955968";var Z=X,tt=c("b441"),et=c("fe86"),ct=c("f367"),at=c("bc3a"),nt=c.n(at),rt=c("cfb9"),ot=c("98e4"),st={components:{BaseNavbar:q["a"],BaseFooter:V["a"],HomeHeader:Z,BaseSwiper:tt["a"],BaseCartModal:et["a"],ToastMessages:ct["a"]},setup:function(){var t=Object(j["d"])(),e=Object(a["A"])({arr:[]}),c=Object(a["A"])({breakpoints:{575:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:30},1190:{slidesPerView:4,spaceBetween:40}}}),n=Object(a["B"])("");function r(){var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/products/all");nt.a.get(t).then((function(t){t.data.success?e.arr=t.data.products:console.error(t.data.message)})).catch((function(t){console.error(t)}))}function o(t){n.value=t.id;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/cart");nt.a.post(e,{data:{product_id:t.id,qty:1}}).then((function(t){t.data.success?(rt["a"].emit("update-cart"),n.value=""):console.error(t.data.message),Object(ot["a"])(t,"購物車新增")})).catch((function(t){console.error(t)}))}function s(e){t.push("/frontDesk/product/".concat(e))}return Object(a["t"])((function(){r()})),{products:e,swiperBreakpoints:c,isLoading:n,addCart:o,forwardingProduct:s}}};c("f9be");st.render=U,st.__scopeId="data-v-b271a820";var it=st,lt=[{path:"/",name:"Home",component:it},{path:"/frontDesk",name:"frontDesk",component:function(){return c.e("chunk-39384154").then(c.bind(null,"57f4"))},children:[{path:"products",component:function(){return c.e("chunk-6c75082c").then(c.bind(null,"653c6"))}},{path:"product/:id",component:function(){return c.e("chunk-5a951387").then(c.bind(null,"e443"))}},{path:"quiz",component:function(){return c.e("chunk-c40a7a00").then(c.bind(null,"2770"))}},{path:"coupon",component:function(){return c.e("chunk-5127f104").then(c.bind(null,"79f9"))}},{path:"carts",component:function(){return c.e("chunk-d1a103ba").then(c.bind(null,"4438"))}},{path:"pay/:id",component:function(){return c.e("chunk-1cdebc2d").then(c.bind(null,"8f32"))}}]},{path:"/login",name:"Login",component:function(){return c.e("chunk-a377b8e2").then(c.bind(null,"32bc"))}},{path:"/dashboard",component:function(){return c.e("chunk-40b9063c").then(c.bind(null,"5c3a"))},children:[{path:"products",component:function(){return c.e("chunk-9bc4e762").then(c.bind(null,"31da"))}},{path:"orders",component:function(){return c.e("chunk-23c97068").then(c.bind(null,"7dd8"))}},{path:"coupon",component:function(){return c.e("chunk-47389066").then(c.bind(null,"4431"))}}]},{path:"/:pathMatch(.*)*",redirect:{name:"Home"}}],ut=Object(j["a"])({history:Object(j["b"])(),routes:lt}),bt=ut;Object(s["e"])("required",i["c"]),Object(s["e"])("email",i["a"]),Object(s["e"])("min",i["b"]),Object(s["d"])({generateMessage:Object(l["a"])({zh_TW:u}),validateOnInput:!0}),Object(l["b"])("zh_TW");var dt=Object(a["d"])(v);dt.use(r.a),dt.use(bt),dt.component("Loading",o["a"]),dt.component("Form",s["c"]),dt.component("Field",s["b"]),dt.component("ErrorMessage",s["a"]),dt.mount("#app")},"6f53":function(t,e,c){"use strict";c("49a3")},"90ef":function(t,e,c){t.exports=c.p+"img/undraw_Faq_re_31cw.03cd77dc.svg"},"98e4":function(t,e,c){"use strict";c("a15b");var a=c("cfb9");e["a"]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(t.data.success)a["a"].emit("push-messages",{style:"success",title:"".concat(e,"成功")});else{var c="string"===typeof t.data.message?[t.data.message]:t.data.message;a["a"].emit("push-messages",{style:"danger",title:"".concat(e,"失敗"),content:c.join("、")})}}},a8e0:function(t,e,c){},abb2:function(t,e,c){"use strict";c("3348")},b167:function(t,e,c){},b441:function(t,e,c){"use strict";c("a4d3"),c("e01a");var a=c("7a23"),n=Object(a["U"])("data-v-81b3ec5e");Object(a["z"])("data-v-81b3ec5e");var r={class:"my-5"},o={class:"container"},s={class:"d-flex justify-content-center"},i={class:"pb-3 mb-3 text-white border-bottom border-3 border-orange d-inline-block"},l={class:"p-1 mb-0 text-white bg-primary position-absolute"},u={class:"content"},b={class:"text-center text-white"},d=Object(a["i"])("div",{class:"d-flex justify-content-center align-items-center w-100"},null,-1);Object(a["x"])();var f=n((function(t,e,c,f,p,v){var j=Object(a["F"])("swiper-slide"),O=Object(a["F"])("swiper");return Object(a["w"])(),Object(a["e"])("section",r,[Object(a["i"])("div",o,[Object(a["i"])("div",s,[Object(a["i"])("h2",i,[Object(a["E"])(t.$slots,"default",{},void 0,!0)])]),Object(a["i"])(O,{autoplay:!0,breakpoints:f.swiperBreakpoints.breakpoints,class:"mb-3"},{default:n((function(){return[(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["D"])(f.props.products,(function(t){return Object(a["w"])(),Object(a["e"])(j,{key:t.id},{default:n((function(){return[Object(a["i"])("div",{class:"img-card",onClick:function(e){return f.forwardingProduct(t.id)}},[Object(a["i"])("p",l,Object(a["I"])(t.category),1),Object(a["i"])("img",{src:t.imageUrl,alt:t.description,class:"image"},null,8,["src","alt"]),Object(a["i"])("div",u,[Object(a["i"])("h3",b,Object(a["I"])(t.title),1),d])],8,["onClick"])]})),_:2},1024)})),128))]})),_:1},8,["breakpoints"])])])})),p=c("6d3b"),v=c("5dc8"),j=c("d17a"),O=c("90ea"),h=c("a16a"),m=(c("5f67"),c("3288"),c("6c02"));p["a"].use([v["a"],j["a"]]);var g={components:{Swiper:O["a"],SwiperSlide:h["a"]},props:{products:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(m["d"])(),c=Object(a["A"])({breakpoints:{575:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:30},1190:{slidesPerView:4,spaceBetween:40}}});function n(t){e.push("/frontDesk/product/".concat(t))}return{props:t,swiperBreakpoints:c,forwardingProduct:n}}};c("cef5");g.render=f,g.__scopeId="data-v-81b3ec5e";e["a"]=g},c33f:function(t,e,c){"use strict";c("a8e0")},c86f:function(t,e,c){},c8ce:function(t,e,c){"use strict";var a=c("7a23"),n=Object(a["U"])("data-v-641b21d3");Object(a["z"])("data-v-641b21d3");var r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},o={class:"container"},s=Object(a["h"])("Superpower Gems"),i=Object(a["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["i"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"py-3 collapse navbar-collapse py-lg-0",id:"navbarNav"},u={class:"text-center text-white ms-lg-5 navbar-nav justify-content-lg-around w-lg-100"},b={class:"mx-md-3 nav-item w-lg-100"},d=Object(a["h"])(" 首頁 "),f={class:"mx-md-3 nav-item w-lg-100"},p=Object(a["h"])(" 所有商品 "),v={class:"mx-md-3 nav-item w-lg-100"},j=Object(a["h"])(" 測驗 "),O={class:"mx-md-3 nav-item w-lg-100"},h=Object(a["h"])(" 優惠券 "),m={class:"mx-md-3 nav-item w-lg-100"},g=Object(a["h"])(" 購物車 "),k={class:"mx-md-3 nav-item w-lg-100"},w=Object(a["h"])(" 進入後台 ");Object(a["x"])();var y=n((function(t,e,c,y,x,_){var B=Object(a["F"])("router-link");return Object(a["w"])(),Object(a["e"])("nav",r,[Object(a["i"])("div",o,[Object(a["i"])(B,{class:"navbar-brand font-Tourney",to:"/"},{default:n((function(){return[s]})),_:1}),i,Object(a["i"])("div",l,[Object(a["i"])("ul",u,[Object(a["i"])("li",b,[Object(a["i"])(B,{class:["nav-link",{active:"/"===y.route.fullPath}],to:"/"},{default:n((function(){return[d]})),_:1},8,["class"])]),Object(a["i"])("li",f,[Object(a["i"])(B,{class:["nav-link",{active:"/frontDesk/products"===y.route.fullPath}],to:"/frontDesk/products"},{default:n((function(){return[p]})),_:1},8,["class"])]),Object(a["i"])("li",v,[Object(a["i"])(B,{class:["nav-link",{active:"/frontDesk/quiz"===y.route.fullPath}],to:"/frontDesk/quiz"},{default:n((function(){return[j]})),_:1},8,["class"])]),Object(a["i"])("li",O,[Object(a["i"])(B,{class:["nav-link",{active:"/frontDesk/coupon"===y.route.fullPath}],to:"/frontDesk/coupon"},{default:n((function(){return[h]})),_:1},8,["class"])]),Object(a["i"])("li",m,[Object(a["i"])(B,{class:["nav-link",{active:"/frontDesk/carts"===y.route.fullPath}],to:"/frontDesk/carts"},{default:n((function(){return[g]})),_:1},8,["class"])]),Object(a["i"])("li",k,[Object(a["i"])(B,{class:["nav-link",{active:"/dashboard/products"===y.route.fullPath}],to:"/dashboard/products"},{default:n((function(){return[w]})),_:1},8,["class"])])])])])])})),x=c("6c02"),_={setup:function(){var t=Object(x["c"])();return{route:t}}};c("de57");_.render=y,_.__scopeId="data-v-641b21d3";e["a"]=_},cc2d:function(t,e,c){},cef5:function(t,e,c){"use strict";c("46f5")},cf5f:function(t,e,c){"use strict";c("ecb1")},cfb9:function(t,e,c){"use strict";var a=c("1344"),n=Object(a["a"])();e["a"]=n},d0ae:function(t,e,c){"use strict";c("cc2d")},d57d:function(t,e,c){"use strict";c("c86f")},de57:function(t,e,c){"use strict";c("5330")},ecb1:function(t,e,c){},f367:function(t,e,c){"use strict";var a=c("7a23"),n=Object(a["U"])("data-v-1f10532a");Object(a["z"])("data-v-1f10532a");var r={class:"toast-container toast-position"};Object(a["x"])();var o=n((function(t,e,c,n,o,s){var i=Object(a["F"])("Toast");return Object(a["w"])(),Object(a["e"])("div",r,[(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["D"])(n.messages.arr,(function(t,e){return Object(a["w"])(),Object(a["e"])(i,{key:e,msg:t},null,8,["msg"])})),128))])})),s={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toastEl"},i={class:"toast-header"},l={class:"me-auto"},u=Object(a["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),b={key:0,class:"toast-body"};function d(t,e,c,n,r,o){return Object(a["w"])(),Object(a["e"])("div",s,[Object(a["i"])("div",i,[Object(a["i"])("span",{class:["bg-".concat(n.props.msg.style),"p-2 rounded me-2 d-inline-block"]},null,2),Object(a["i"])("strong",l,Object(a["I"])(n.props.msg.title),1),u]),n.props.msg.content?(Object(a["w"])(),Object(a["e"])("div",b,Object(a["I"])(n.props.msg.content),1)):Object(a["f"])("",!0)],512)}var f=c("6ea1"),p=c.n(f),v={props:{msg:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(a["B"])(null),c=[];return Object(a["t"])((function(){c=new p.a(e.value,{delay:6e3}),c.show()})),{toastEl:e,toast:c,props:t}}};v.render=d;var j=v,O=c("cfb9"),h={components:{Toast:j},setup:function(){var t=Object(a["A"])({arr:[]});return Object(a["t"])((function(){O["a"].on("push-messages",(function(e){var c=e.style,a=void 0===c?"success":c,n=e.title,r=e.content;t.arr.push({style:a,title:n,content:r})}))})),{messages:t}}};c("d0ae");h.render=o,h.__scopeId="data-v-1f10532a";e["a"]=h},f9be:function(t,e,c){"use strict";c("b167")},fe86:function(t,e,c){"use strict";var a=c("7a23"),n=Object(a["U"])("data-v-0e9f36f8");Object(a["z"])("data-v-0e9f36f8");var r={class:"cart-btn-position"},o=Object(a["i"])("i",{class:"bi bi-cart-fill"},null,-1),s={class:"modal",tabindex:"-1",ref:"cartModal"},i={class:"modal-dialog"},l={class:"modal-content"},u=Object(a["i"])("div",{class:"modal-header"},[Object(a["i"])("h5",{class:"modal-title"},"購物車"),Object(a["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),b={class:"modal-body"},d={key:0,class:"cart-content"},f=Object(a["i"])("p",{class:"mb-0 fs-5"},"購物車內無東西",-1),p=Object(a["h"])("選購商品"),v={key:1,class:"table text-center table-responsive-lg"},j=Object(a["i"])("thead",null,[Object(a["i"])("tr",{class:"table-dark"},[Object(a["i"])("th",{scope:"col"}),Object(a["i"])("th",{scope:"col"},"商品名稱"),Object(a["i"])("th",{scope:"col"},"數量"),Object(a["i"])("th",{scope:"col",class:"text-end"},"小計")])],-1),O={key:0,class:"btn btn-outline-danger btn-sm",type:"button",disabled:""},h=Object(a["i"])("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),m=Object(a["i"])("span",{class:"visually-hidden"},"Loading...",-1),g=Object(a["i"])("i",{class:"bi bi-trash-fill"},null,-1),k={class:"align-middle"},w={class:"align-middle"},y={class:"align-middle text-end"},x={class:"text-danger"},_=Object(a["i"])("td",{colspan:"3",class:"text-end"},"折扣優惠",-1),B={class:"line-through text-end"},P=Object(a["i"])("td",{colspan:"3",class:"text-end"},"總金額",-1),D={class:"text-end"},C={key:2,class:"mb-3 input-group"},S={class:"modal-footer"},F=Object(a["i"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 再逛逛 ",-1);Object(a["x"])();var T=n((function(t,e,c,T,I,M){var E,z,L,A,N,U,q,V,H,$,J=Object(a["F"])("BaseScrollTop"),Y=Object(a["F"])("router-link");return Object(a["w"])(),Object(a["e"])(a["a"],null,[Object(a["i"])("div",r,[Object(a["i"])(J),Object(a["i"])("button",{type:"button",class:"cart-btn",onClick:e[1]||(e[1]=function(){return t.showModal&&t.showModal.apply(t,arguments)})},[o,Object(a["S"])(Object(a["i"])("span",null,Object(a["I"])(null===(E=t.carts.arr)||void 0===E||null===(z=E.carts)||void 0===z?void 0:z.length),513),[[a["O"],null===(L=t.carts.arr)||void 0===L||null===(A=L.carts)||void 0===A?void 0:A.length]])])]),Object(a["i"])("div",s,[Object(a["i"])("div",i,[Object(a["i"])("div",l,[u,Object(a["i"])("div",b,[0===(null===(N=t.carts.arr)||void 0===N||null===(U=N.carts)||void 0===U?void 0:U.length)?(Object(a["w"])(),Object(a["e"])("div",d,[f,Object(a["i"])(Y,{to:"/frontDesk/products",class:"d-block text-orange fs-4",onClick:t.hideModal},{default:n((function(){return[p]})),_:1},8,["onClick"])])):(Object(a["w"])(),Object(a["e"])("table",v,[j,Object(a["i"])("tbody",null,[(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["D"])(t.carts.arr.carts,(function(e){return Object(a["w"])(),Object(a["e"])("tr",{key:e.id},[Object(a["i"])("td",null,[t.isLoading===e.id?(Object(a["w"])(),Object(a["e"])("button",O,[h,m])):(Object(a["w"])(),Object(a["e"])("button",{key:1,type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(c){return t.delProduct(e)}},[g],8,["onClick"]))]),Object(a["i"])("td",k,Object(a["I"])(e.product.title),1),Object(a["i"])("td",w,Object(a["I"])(e.qty),1),Object(a["i"])("td",y," $ "+Object(a["I"])(T.currency(e.total)),1)])})),128))]),Object(a["i"])("tfoot",null,[Object(a["S"])(Object(a["i"])("tr",x,[_,Object(a["i"])("td",B," $ "+Object(a["I"])(T.currency(t.carts.arr.total-t.carts.arr.final_total)),1)],512),[[a["O"],t.carts.arr.total>t.carts.arr.final_total]]),Object(a["i"])("tr",null,[P,Object(a["i"])("td",D," $ "+Object(a["I"])(T.currency(t.carts.arr.final_total)),1)])])])),0!=(null===(q=t.carts.arr)||void 0===q||null===(V=q.carts)||void 0===V?void 0:V.length)?(Object(a["w"])(),Object(a["e"])("div",C,[Object(a["S"])(Object(a["i"])("input",{type:"text",class:"form-control",placeholder:"請輸入優惠券代碼","aria-label":"請輸入優惠券代碼","aria-describedby":"button-addon2","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.coupon=e})},null,512),[[a["N"],t.coupon]]),Object(a["i"])("button",{class:["btn btn-outline-secondary",{disabled:""===t.coupon}],type:"button",id:"button-addon2",onClick:e[3]||(e[3]=function(){return t.useCoupon&&t.useCoupon.apply(t,arguments)})}," 套用優惠券 ",2)])):Object(a["f"])("",!0)]),Object(a["i"])("div",S,[F,Object(a["i"])("button",{type:"button",class:["btn btn-primary",{disabled:0===(null===(H=t.carts.arr)||void 0===H||null===($=H.carts)||void 0===$?void 0:$.length)}],onClick:e[4]||(e[4]=function(){return t.payment&&t.payment.apply(t,arguments)})}," 結帳去 ",2)])])])],512)],64)})),I=c("5530"),M=(c("99af"),Object(a["U"])("data-v-9315da20")),E=M((function(t,e,c,n,r,o){return Object(a["w"])(),Object(a["e"])("button",{type:"button",class:["scroll-btn",{active:n.showScrollTop}],onClick:e[1]||(e[1]=function(){return n.scrollTop&&n.scrollTop.apply(n,arguments)})}," ↑ ",2)})),z={setup:function(){var t=Object(a["B"])(!1);function e(){window.scrollTo({top:0,left:0,behavior:"smooth"})}return Object(a["t"])((function(){window.addEventListener("scroll",(function(){window.scrollY>window.screenY?t.value=!0:t.value=!1}))})),{showScrollTop:t,scrollTop:e}}};c("c33f");z.render=E,z.__scopeId="data-v-9315da20";var L=z,A=c("7c2b"),N=c.n(A),U=c("bc3a"),q=c.n(U),V=c("1336"),H=c("cfb9"),$=c("98e4"),J=c("6c02");function Y(){var t=Object(J["d"])(),e=Object(a["B"])(null),c=null,n=function(){c.show()},r=function(){c.hide()},o=function(){r(),t.push("/frontDesk/carts")};return Object(a["t"])((function(){c=new N.a(e.value)})),{cartModal:e,showModal:n,hideModal:r,payment:o}}function G(){var t=Object(a["A"])({arr:[]}),e=Object(a["B"])(""),c=Object(a["B"])(""),n=function(){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/cart");q.a.get(e).then((function(e){e.data.success?t.arr=e.data.data:console.error(e.data.message)})).catch((function(t){console.error(t)}))},r=function(t){c.value=t.id;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/cart/").concat(t.id);q.a.delete(e).then((function(t){t.data.success?n():console.error(t.data.message),c.value="",Object($["a"])(t,"刪除商品")})).catch((function(t){console.error(t)}))},o=function(){var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/coupon");q.a.post(t,{data:{code:e.value}}).then((function(t){t.data.success?n():console.error(t.data.message),Object($["a"])(t,"套用優惠券")})).catch((function(t){console.error(t)}))};return Object(a["t"])((function(){n(),H["a"].on("update-cart",(function(){n()}))})),{carts:t,coupon:e,isLoading:c,delProduct:r,useCoupon:o}}var W={components:{BaseScrollTop:L},setup:function(){return Object(I["a"])(Object(I["a"])(Object(I["a"])({},Y()),G()),{},{currency:V["a"]})}};c("cf5f");W.render=T,W.__scopeId="data-v-0e9f36f8";e["a"]=W}});
//# sourceMappingURL=app.647c9232.js.map