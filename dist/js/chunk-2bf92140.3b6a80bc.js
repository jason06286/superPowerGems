(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf92140"],{"80c1":function(t,e,c){"use strict";c("8776")},8776:function(t,e,c){},"8f32":function(t,e,c){"use strict";c.r(e);c("b0c0");var r=c("7a23"),n=Object(r["U"])("data-v-f32791e6");Object(r["z"])("data-v-f32791e6");var o=Object(r["i"])("div",{class:"bg-dark",style:{height:"68px"}},null,-1),a={class:"container",style:{"min-height":"calc(100vh - 212px)"}},i={class:"py-5"},s={key:0,class:"paySuccess"},l=Object(r["i"])("p",null,"已完成付款，感謝您的訂購!!",-1),b=Object(r["i"])("h4",{class:"pb-2 mb-3 border-2 border-bottom border-darkred"},"訂單明細",-1),d={class:"table text-center table-responsive-lg text-content"},u=Object(r["i"])("thead",null,[Object(r["i"])("tr",null,[Object(r["i"])("th",{scope:"col"},"商品名稱"),Object(r["i"])("th",{scope:"col",width:"120"},"數量"),Object(r["i"])("th",{scope:"col",class:"text-end"},"小計")])],-1),j={class:"align-middle"},O={class:"align-middle"},p={class:"align-middle text-end"},f=Object(r["i"])("td",{colspan:"2",class:"text-end"},"總金額",-1),h={class:"text-end"},w=Object(r["i"])("h4",{class:"pb-2 mb-3 border-2 border-bottom border-darkred"},"訂單資訊",-1),m={key:1,class:"table text-content"},y=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"Email",-1),g=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"收件人名稱",-1),v=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"收件人電話",-1),k=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"收件人地址",-1),x=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"訂單編號",-1),I=Object(r["i"])("th",{scope:"row",class:"font-weight-normal"},"付款狀態",-1),_={key:0,class:"text-success"},E={key:1,class:"text-danger"},L={key:2,class:"d-flex justify-content-end"},D=Object(r["h"])("繼續購物"),P={key:0,class:"spinner-grow spinner-grow-sm",role:"status"},F=Object(r["i"])("span",{class:"visually-hidden"},"Loading...",-1),J=Object(r["h"])(" 確認付款 ");Object(r["x"])();var S=n((function(t,e,c,S,T,$){var q=Object(r["F"])("router-link");return Object(r["w"])(),Object(r["e"])(r["a"],null,[o,Object(r["i"])("div",a,[Object(r["i"])("div",i,[S.order.arr.is_paid?(Object(r["w"])(),Object(r["e"])("div",s,[l])):Object(r["f"])("",!0),b,Object(r["i"])("table",d,[u,Object(r["i"])("tbody",null,[(Object(r["w"])(!0),Object(r["e"])(r["a"],null,Object(r["D"])(S.order.arr.products,(function(t){return Object(r["w"])(),Object(r["e"])("tr",{key:t.id},[Object(r["i"])("td",j,Object(r["I"])(t.product.title),1),Object(r["i"])("td",O,Object(r["I"])(t.qty),1),Object(r["i"])("td",p," $ "+Object(r["I"])(S.currency(t.final_total)),1)])})),128))]),Object(r["i"])("tfoot",null,[Object(r["i"])("tr",null,[f,Object(r["i"])("td",h,"$ "+Object(r["I"])(S.currency(S.order.arr.total)),1)])])]),w,S.order.arr.user?(Object(r["w"])(),Object(r["e"])("table",m,[Object(r["i"])("tbody",null,[Object(r["i"])("tr",null,[y,Object(r["i"])("td",null,Object(r["I"])(S.order.arr.user.email),1)]),Object(r["i"])("tr",null,[g,Object(r["i"])("td",null,Object(r["I"])(S.order.arr.user.name),1)]),Object(r["i"])("tr",null,[v,Object(r["i"])("td",null,Object(r["I"])(S.order.arr.user.tel),1)]),Object(r["i"])("tr",null,[k,Object(r["i"])("td",null,Object(r["I"])(S.order.arr.user.address),1)]),Object(r["i"])("tr",null,[x,Object(r["i"])("td",null,Object(r["I"])(S.order.arr.id),1)]),Object(r["i"])("tr",null,[I,S.order.arr.is_paid?(Object(r["w"])(),Object(r["e"])("td",_,"已付款")):(Object(r["w"])(),Object(r["e"])("td",E,"未付款"))])])])):Object(r["f"])("",!0),S.order.arr.is_paid?Object(r["f"])("",!0):(Object(r["w"])(),Object(r["e"])("div",L,[Object(r["i"])(q,{type:"button",class:"btn btn-outline-title me-3",to:"/frontDesk/products"},{default:n((function(){return[D]})),_:1}),Object(r["i"])("button",{class:["btn btn-darkred",{disabled:"pay"===S.isLoading}],type:"button",onClick:e[1]||(e[1]=function(){return S.confirmPay&&S.confirmPay.apply(S,arguments)})},["pay"===S.isLoading?(Object(r["w"])(),Object(r["e"])("div",P,[F])):Object(r["f"])("",!0),J],2)]))])])],64)})),T=(c("99af"),c("bc3a")),$=c.n(T),q=c("1336"),z=c("6c02"),A={setup:function(){var t=Object(z["c"])(),e=Object(z["d"])(),c=Object(r["A"])({arr:[]}),n=Object(r["B"])(""),o=null;function a(){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/order/").concat(t.params.id);$.a.get(e).then((function(t){t.data.success?c.arr=t.data.order:console.error=function(){throw new Error(t.data.message)}})).catch((function(t){console.error=function(){throw new Error(t)}}))}function i(){n.value="pay";var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/pay/").concat(t.params.id);$.a.post(c).then((function(t){t.data.success?(a(),o=setTimeout((function(){e.push("/frontDesk/products")}),3e3)):console.error=function(){throw new Error(t.data.message)},n.value=""})).catch((function(t){console.error=function(){throw new Error(t)}}))}return Object(r["t"])((function(){a()})),Object(r["u"])((function(){clearTimeout(o)})),{order:c,isLoading:n,currency:q["a"],confirmPay:i}}};c("80c1");A.render=S,A.__scopeId="data-v-f32791e6";e["default"]=A},b0c0:function(t,e,c){var r=c("83ab"),n=c("9bf2").f,o=Function.prototype,a=o.toString,i=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&n(o,s,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-2bf92140.3b6a80bc.js.map