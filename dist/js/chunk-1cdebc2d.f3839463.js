(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cdebc2d"],{"2c4a":function(t,e,c){"use strict";c("ed48")},"8f32":function(t,e,c){"use strict";c.r(e);c("b0c0");var r=c("7a23"),a=Object(r["U"])("data-v-49fc629c");Object(r["z"])("data-v-49fc629c");var n={class:"container bg-white",style:{"min-height":"calc(100vh - 112px)"}},o={class:"py-5"},s={key:0,class:"paySuccess"},i=Object(r["i"])("p",null,"已完成付款，感謝您的訂購!!",-1),b=Object(r["i"])("h2",{class:"pb-2 mb-3 border-3 border-bottom border-orange"},"訂單明細",-1),l={class:"table text-center table-responsive-lg"},d=Object(r["i"])("thead",null,[Object(r["i"])("tr",{class:"table-dark"},[Object(r["i"])("th",{scope:"col"},"商品名稱"),Object(r["i"])("th",{scope:"col",width:"120"},"數量"),Object(r["i"])("th",{scope:"col",class:"text-end"},"小計")])],-1),j={class:"align-middle"},u={class:"align-middle"},O={class:"align-middle text-end"},p=Object(r["i"])("td",{colspan:"2",class:"text-end"},"總金額",-1),f={class:"text-end"},h=Object(r["i"])("h2",{class:"pb-2 mb-3 border-3 border-bottom border-orange"},"訂單資訊",-1),y={key:1,class:"table"},w={class:"text-secondary"},g=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"Email",-1),m=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"收件人名稱",-1),v=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"收件人電話",-1),k=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"收件人地址",-1),x=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"訂單編號",-1),I=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"付款狀態",-1),_={key:0,class:"text-success"},L={key:1,class:"text-danger"},P={key:2,class:"d-flex justify-content-end"},D=Object(r["h"])("繼續購物"),F={key:0,class:"spinner-grow text-dark spinner-grow-sm",role:"status"},J=Object(r["i"])("span",{class:"visually-hidden"},"Loading...",-1),S=Object(r["h"])(" 確認付款 ");Object(r["x"])();var $=a((function(t,e,c,$,q,z){var A=Object(r["F"])("router-link");return Object(r["w"])(),Object(r["e"])("div",n,[Object(r["i"])("div",o,[$.order.arr.is_paid?(Object(r["w"])(),Object(r["e"])("div",s,[i])):Object(r["f"])("",!0),b,Object(r["i"])("table",l,[d,Object(r["i"])("tbody",null,[(Object(r["w"])(!0),Object(r["e"])(r["a"],null,Object(r["D"])($.order.arr.products,(function(t){return Object(r["w"])(),Object(r["e"])("tr",{key:t.id},[Object(r["i"])("td",j,Object(r["I"])(t.product.title),1),Object(r["i"])("td",u,Object(r["I"])(t.qty),1),Object(r["i"])("td",O," $ "+Object(r["I"])($.currency(t.final_total)),1)])})),128))]),Object(r["i"])("tfoot",null,[Object(r["i"])("tr",null,[p,Object(r["i"])("td",f,"$ "+Object(r["I"])($.currency($.order.arr.total)),1)])])]),h,$.order.arr.user?(Object(r["w"])(),Object(r["e"])("table",y,[Object(r["i"])("tbody",w,[Object(r["i"])("tr",null,[g,Object(r["i"])("td",null,Object(r["I"])($.order.arr.user.email),1)]),Object(r["i"])("tr",null,[m,Object(r["i"])("td",null,Object(r["I"])($.order.arr.user.name),1)]),Object(r["i"])("tr",null,[v,Object(r["i"])("td",null,Object(r["I"])($.order.arr.user.tel),1)]),Object(r["i"])("tr",null,[k,Object(r["i"])("td",null,Object(r["I"])($.order.arr.user.address),1)]),Object(r["i"])("tr",null,[x,Object(r["i"])("td",null,Object(r["I"])($.order.arr.id),1)]),Object(r["i"])("tr",null,[I,$.order.arr.is_paid?(Object(r["w"])(),Object(r["e"])("td",_,"已付款")):(Object(r["w"])(),Object(r["e"])("td",L,"未付款"))])])])):Object(r["f"])("",!0),$.order.arr.is_paid?Object(r["f"])("",!0):(Object(r["w"])(),Object(r["e"])("div",P,[Object(r["i"])(A,{type:"button",class:"btn btn-secondary me-3",to:"/frontDesk/products"},{default:a((function(){return[D]})),_:1}),Object(r["i"])("button",{class:["btn btn-orange",{disabled:"pay"===$.isLoading}],type:"button",onClick:e[1]||(e[1]=function(){return $.confirmPay&&$.confirmPay.apply($,arguments)})},["pay"===$.isLoading?(Object(r["w"])(),Object(r["e"])("div",F,[J])):Object(r["f"])("",!0),S],2)]))])])})),q=(c("99af"),c("bc3a")),z=c.n(q),A=c("1336"),B=c("6c02"),C={setup:function(){var t=Object(B["c"])(),e=Object(r["A"])({arr:[]}),c=Object(r["B"])("");function a(){var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/order/").concat(t.params.id);z.a.get(c).then((function(t){t.data.success?e.arr=t.data.order:console.error(t.data.message)})).catch((function(t){console.error(t)}))}function n(){c.value="pay";var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/pay/").concat(t.params.id);z.a.post(e).then((function(t){t.data.success?a():console.error(t.data.message),c.value=""})).catch((function(t){console.error(t)}))}return Object(r["t"])((function(){a()})),{order:e,isLoading:c,currency:A["a"],confirmPay:n}}};c("2c4a");C.render=$,C.__scopeId="data-v-49fc629c";e["default"]=C},b0c0:function(t,e,c){var r=c("83ab"),a=c("9bf2").f,n=Function.prototype,o=n.toString,s=/^\s*function ([^ (]*)/,i="name";r&&!(i in n)&&a(n,i,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},ed48:function(t,e,c){}}]);
//# sourceMappingURL=chunk-1cdebc2d.f3839463.js.map