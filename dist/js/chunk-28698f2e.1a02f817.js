(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28698f2e"],{"778b":function(t,e,c){"use strict";c("9dff")},"8f32":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a"),c("b0c0");var r=c("7a23"),i=Object(r["U"])("data-v-72847e6c");Object(r["z"])("data-v-72847e6c");var a=Object(r["i"])("div",{class:"bg-dark",style:{height:"68px"}},null,-1),n={key:0,class:"paySuccess"},s=Object(r["i"])("p",{class:"fw-bold text-title fs-4"},"已完成付款，感謝您的訂購!!",-1),l={class:"text-title"},b={class:"d-flex"},d=Object(r["h"])("前往首頁"),o=Object(r["h"])("前往商店"),j={key:1,class:"container",style:{"min-height":"calc(100vh - 212px)"}},u={class:"py-5"},O={class:"row"},p=Object(r["i"])("div",{class:"col-md-2"},null,-1),f=Object(r["i"])("div",{class:"mb-4 col-md-2 col-12"},[Object(r["i"])("div",{class:"\n              d-flex\n              align-items-center\n              justify-content-center justify-content-lg-start\n              h-100\n            "},[Object(r["i"])("h4",{class:"pb-2 mb-0 border-2 border-bottom border-darkred text-title"}," 確認付款 ")])],-1),m={class:"col-md-6 col-12"},v={class:"mb-4 d-flex justify-content-center justify-content-md-end"},h=Object(r["g"])('<div class="step" data-v-72847e6c><p class="mb-0" data-v-72847e6c>1</p><p class="mb-0" data-v-72847e6c>購物車</p></div><div class="step" data-v-72847e6c><p class="mb-0" data-v-72847e6c>2</p><p class="mb-0" data-v-72847e6c>確認訂單</p></div>',2),g=Object(r["i"])("p",{class:"mb-0"},"3",-1),y=Object(r["i"])("p",{class:"mb-0"},"確認付款",-1),w=Object(r["i"])("div",{class:"col-md-2"},null,-1),x={class:"row"},k=Object(r["i"])("div",{class:"col-md-2"},null,-1),I={class:"p-3 bg-black col-md-8 col-12 p-lg-5"},_={class:"\n              table\n              mb-0\n              text-center\n              table-responsive-lg\n              text-content\n              border-bottom-0\n            "},L=Object(r["i"])("thead",{class:"border-top"},[Object(r["i"])("tr",null,[Object(r["i"])("th",{scope:"col",width:"60"}),Object(r["i"])("th",{scope:"col",width:"120"},"商品名稱"),Object(r["i"])("th",{scope:"col",width:"60"},"數量"),Object(r["i"])("th",{scope:"col",class:"text-end",width:"120"},"小計")])],-1),R={class:"align-middle"},C={class:"align-middle"},D={class:"align-middle"},P={class:"align-middle text-end"},B={class:"text-darkred text-end"},F=Object(r["i"])("td",{class:"border-bottom-0"},null,-1),J={class:"pt-3 border-bottom-0 fs-5",colspan:"3"},S=Object(r["i"])("div",{class:"col-md-2"},null,-1),U={class:"row"},$=Object(r["i"])("div",{class:"col-md-2"},null,-1),q={class:"p-3 bg-black col-md-8 col-12 p-lg-5"},z={key:0,class:"table text-content"},A={class:"border-top"},E=Object(r["i"])("th",{scope:"col",class:"font-weight-normal",width:"200"}," Email ",-1),G=Object(r["i"])("th",{scope:"col",class:"font-weight-normal",width:"200"}," 收件人名稱 ",-1),H=Object(r["i"])("th",{scope:"col",class:"font-weight-normal",width:"200"}," 收件人電話 ",-1),K=Object(r["i"])("th",{scope:"col",class:"font-weight-normal",width:"200"}," 收件人地址 ",-1),M={class:"d-flex justify-content-end"},N=Object(r["h"])("繼續購物"),Q={key:0,class:"spinner-border spinner-border-sm",role:"status"},T=Object(r["i"])("span",{class:"visually-hidden"},"Loading...",-1),V=Object(r["h"])(" 確認付款 "),W=Object(r["i"])("div",{class:"col-md-2"},null,-1);Object(r["x"])();var X=i((function(t,e,c,X,Y,Z){var tt=Object(r["F"])("router-link");return Object(r["w"])(),Object(r["e"])(r["a"],null,[a,X.order.arr.is_paid?(Object(r["w"])(),Object(r["e"])("div",n,[s,Object(r["i"])("p",l,"訂單編號: "+Object(r["I"])(X.order.arr.id),1),Object(r["i"])("div",b,[Object(r["i"])(tt,{to:"/",class:"btn btn-outline-title btn-lg me-3"},{default:i((function(){return[d]})),_:1}),Object(r["i"])(tt,{to:"/frontDesk/products",class:"btn btn-lightred btn-lg"},{default:i((function(){return[o]})),_:1})])])):Object(r["f"])("",!0),X.order.arr.is_paid?Object(r["f"])("",!0):(Object(r["w"])(),Object(r["e"])("div",j,[Object(r["i"])("div",u,[Object(r["i"])("div",O,[p,f,Object(r["i"])("div",m,[Object(r["i"])("div",v,[h,Object(r["i"])("div",{class:["step",{"bg-darkred":!X.isConfirm}]},[g,y],2)])]),w]),Object(r["i"])("div",x,[k,Object(r["i"])("div",I,[Object(r["i"])("table",_,[L,Object(r["i"])("tbody",null,[(Object(r["w"])(!0),Object(r["e"])(r["a"],null,Object(r["D"])(X.order.arr.products,(function(t){return Object(r["w"])(),Object(r["e"])("tr",{key:t.id},[Object(r["i"])("td",R,[Object(r["i"])("img",{src:t.product.imageUrl,alt:t.product.description,class:"img-fluid",style:{heigt:"3rem"}},null,8,["src","alt"])]),Object(r["i"])("td",C,Object(r["I"])(t.product.title),1),Object(r["i"])("td",D,Object(r["I"])(t.qty),1),Object(r["i"])("td",P," $ "+Object(r["I"])(X.currency(t.final_total)),1)])})),128))]),Object(r["i"])("tfoot",null,[Object(r["i"])("tr",B,[F,Object(r["i"])("td",J," 總金額: $ "+Object(r["I"])(X.currency(X.order.arr.total)),1)])])])]),S]),Object(r["i"])("div",U,[$,Object(r["i"])("div",q,[X.order.arr.user?(Object(r["w"])(),Object(r["e"])("table",z,[Object(r["i"])("tbody",A,[Object(r["i"])("tr",null,[E,Object(r["i"])("td",null,Object(r["I"])(X.order.arr.user.email),1)]),Object(r["i"])("tr",null,[G,Object(r["i"])("td",null,Object(r["I"])(X.order.arr.user.name),1)]),Object(r["i"])("tr",null,[H,Object(r["i"])("td",null,Object(r["I"])(X.order.arr.user.tel),1)]),Object(r["i"])("tr",null,[K,Object(r["i"])("td",null,Object(r["I"])(X.order.arr.user.address),1)])])])):Object(r["f"])("",!0),Object(r["i"])("div",M,[Object(r["i"])(tt,{type:"button",class:"btn btn-outline-title me-3",to:"/frontDesk/products"},{default:i((function(){return[N]})),_:1}),Object(r["i"])("button",{class:["btn btn-lightred",{disabled:"pay"===X.isLoading}],type:"button",onClick:e[1]||(e[1]=function(){return X.confirmPay&&X.confirmPay.apply(X,arguments)})},["pay"===X.isLoading?(Object(r["w"])(),Object(r["e"])("div",Q,[T])):Object(r["f"])("",!0),V],2)])]),W])])]))],64)})),Y=c("1da1"),Z=(c("96cf"),c("4ec3")),tt=c("1336"),et=c("98e4"),ct=c("6c02"),rt={setup:function(){var t=Object(ct["c"])(),e=Object(r["A"])({arr:[]}),c=Object(r["B"])(""),i=Object(r["B"])(!1);function a(){return n.apply(this,arguments)}function n(){return n=Object(Y["a"])(regeneratorRuntime.mark((function c(){var r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,Object(Z["u"])(t.params.id);case 2:r=c.sent;try{r.data.success?e.arr=r.data.order:Object(et["a"])(r,"取得訂單")}catch(i){Object(et["a"])(i,"取得訂單")}case 4:case"end":return c.stop()}}),c)}))),n.apply(this,arguments)}function s(){return l.apply(this,arguments)}function l(){return l=Object(Y["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.value="pay",e.prev=1,e.next=4,Object(Z["v"])(t.params.id);case 4:r=e.sent,r.data.success&&(a(),i.value=!0),Object(et["a"])(r,"付款"),c.value="",e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),Object(et["a"])(e.t0,"付款");case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),l.apply(this,arguments)}return Object(r["t"])((function(){a()})),{order:e,isLoading:c,currency:tt["a"],confirmPay:s,isConfirm:i}}};c("778b");rt.render=X,rt.__scopeId="data-v-72847e6c";e["default"]=rt},"9dff":function(t,e,c){},b0c0:function(t,e,c){var r=c("83ab"),i=c("9bf2").f,a=Function.prototype,n=a.toString,s=/^\s*function ([^ (]*)/,l="name";r&&!(l in a)&&i(a,l,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-28698f2e.1a02f817.js.map