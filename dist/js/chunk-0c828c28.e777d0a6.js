(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c828c28"],{"16c2":function(e,t,n){"use strict";n("7719")},"241e":function(e,t,n){"use strict";var o=n("7a23"),a=Object(o["U"])("data-v-66401ec8");Object(o["z"])("data-v-66401ec8");var c={class:"d-flex align-items-center"},i={class:"overflow-hidden"},l={class:"position-relative btn-container"},s=Object(o["h"])(" 刪除 "),u=Object(o["i"])("i",{class:"bi bi-trash-fill"},null,-1),b=Object(o["h"])(" 確定 "),r=Object(o["i"])("i",{class:"bi bi-question-circle-fill"},null,-1);Object(o["x"])();var d=a((function(e,t,n,a,d,p){return Object(o["w"])(),Object(o["e"])("div",c,[Object(o["i"])("div",i,[Object(o["i"])("div",l,[Object(o["i"])("button",{type:"button",class:["btn btn-outline-danger",{"btn-sm":a.props.btnSmall}]},[s,u],2),Object(o["i"])("button",{type:"button",class:["position-absolute btn btn-danger w-100",{"btn-sm":a.props.btnSmall}]},[b,r],2)])])])})),p={props:{btnSmall:{Boolean:Boolean,default:!1}},setup:function(e){return{props:e}}};n("2e33");p.render=d,p.__scopeId="data-v-66401ec8";t["a"]=p},"2d24":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("7a23");function a(){return Object(o["m"])("$swal")}},"2e33":function(e,t,n){"use strict";n("6d79")},4431:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"my-2"},c=Object(o["i"])("h2",{class:"pb-3 mb-3 fw-bold border-bottom border-3 border-orange"}," 優惠券 ",-1),i={class:"text-end"},l={class:"table-responsive-lg"},s={class:"table mt-4 table-hover"},u=Object(o["i"])("thead",null,[Object(o["i"])("tr",null,[Object(o["i"])("th",null,"優惠券名稱"),Object(o["i"])("th",null,"優惠"),Object(o["i"])("th",null,"到期時間"),Object(o["i"])("th",null,"折扣碼"),Object(o["i"])("th",null,"是否啟用"),Object(o["i"])("th",null,"編輯"),Object(o["i"])("th",null,"刪除")])],-1),b={class:"text-center"},r={class:"text-center"},d={class:"text-center"},p={class:"text-center"},j={key:0,class:"text-success"},O={key:1,class:"text-secondary"},f=Object(o["h"])(" 編輯 "),m=Object(o["i"])("i",{class:"bi bi-pen-fill"},null,-1),v={class:"mt-5 d-flex justify-content-center"},g=Object(o["h"])(" 優惠券 ");function h(e,t,n,h,y,w){var x=Object(o["F"])("BaseLoading"),C=Object(o["F"])("BaseDelteButton"),_=Object(o["F"])("BasePagination"),M=Object(o["F"])("BaseCouponModal"),k=Object(o["F"])("BaseDeleteCouponModal");return Object(o["w"])(),Object(o["e"])(o["a"],null,[Object(o["i"])(x,{isLoading:e.isLoading},null,8,["isLoading"]),Object(o["i"])("div",a,[c,Object(o["i"])("div",i,[Object(o["i"])("button",{class:"text-white btn btn-orange",type:"button",onClick:t[1]||(t[1]=function(t){return e.openCouponModal({},!0)})}," 新增優惠券 ")]),Object(o["i"])("div",l,[Object(o["i"])("table",s,[u,Object(o["i"])("tbody",null,[(Object(o["w"])(!0),Object(o["e"])(o["a"],null,Object(o["D"])(h.coupons.arr,(function(t){return Object(o["w"])(),Object(o["e"])("tr",{key:t.id},[Object(o["i"])("td",null,Object(o["I"])(t.title),1),Object(o["i"])("td",b,Object(o["I"])(t.percent)+"%",1),Object(o["i"])("td",r,Object(o["I"])(h.formatDate(t.due_date)),1),Object(o["i"])("td",d,Object(o["I"])(t.code),1),Object(o["i"])("td",p,[t.is_enabled?(Object(o["w"])(),Object(o["e"])("span",j,"啟用")):(Object(o["w"])(),Object(o["e"])("span",O,"未啟用"))]),Object(o["i"])("td",null,[Object(o["i"])("button",{type:"button",class:"btn btn-orange btn-sm",onClick:function(n){return e.openCouponModal(t,!1)}},[f,m],8,["onClick"])]),Object(o["i"])("td",null,[Object(o["i"])(C,{btnSmall:!0,onClick:function(n){return e.openDeleteModal(t)}},null,8,["onClick"])])])})),128))])])])]),Object(o["i"])("div",v,[Object(o["i"])(_,{pagination:e.pagination,onGetNowpage:e.getCoupons},null,8,["pagination","onGetNowpage"])]),Object(o["i"])(M,{ref:"couponModal",coupon:e.tempCoupon,newCoupon:e.newCoupon,onCouponStatus:e.couponStatus},null,8,["coupon","newCoupon","onCouponStatus"]),Object(o["i"])(k,{ref:"couponDeleteModal",deleteItem:e.tempCoupon.obj,onDeleteItem:e.delCoupon},{default:Object(o["R"])((function(){return[g]})),_:1},8,["deleteItem","onDeleteItem"])],64)}var y=n("5530"),w=(n("99af"),n("241e")),x=n("dd87"),C=Object(o["U"])("data-v-6aed2e8f");Object(o["z"])("data-v-6aed2e8f");var _={id:"couponModal",ref:"couponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},M={class:"modal-dialog"},k={class:"border-0 modal-content"},B={class:"text-white bg-primary modal-header"},D={id:"couponModalLabel",class:"modal-title"},I={key:0},S={key:1},N=Object(o["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),L={class:"modal-body"},U={class:"row"},F={class:"col-sm-12"},J={class:"form-group"},P=Object(o["i"])("label",{for:"title"},[Object(o["h"])("標題 "),Object(o["i"])("span",{class:"text-danger"},"*")],-1),V={class:"row"},z={class:"form-group col-md-6"},A=Object(o["i"])("label",{for:"percent"},[Object(o["h"])("優惠"),Object(o["i"])("span",{class:"text-danger"},"*")],-1),E={class:"form-group col-md-6"},T=Object(o["i"])("label",{for:"due_date"},[Object(o["h"])("到期時間"),Object(o["i"])("span",{class:"text-danger"},"*")],-1),G={class:"col-12"},$={class:"form-group col-12"},q=Object(o["i"])("label",{for:"code"},[Object(o["h"])("折扣碼"),Object(o["i"])("span",{class:"text-danger"},"*")],-1),Q=Object(o["i"])("hr",null,null,-1),R={class:"form-group"},H={class:"form-check"},K=Object(o["i"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),W={class:"modal-footer"},X=Object(o["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);Object(o["x"])();var Y=C((function(e,t,n,a,c,i){return Object(o["w"])(),Object(o["e"])("div",_,[Object(o["i"])("div",M,[Object(o["i"])("div",k,[Object(o["i"])("div",B,[Object(o["i"])("h5",D,[n.newCoupon?(Object(o["w"])(),Object(o["e"])("span",I,"新增優惠券")):(Object(o["w"])(),Object(o["e"])("span",S,"修改優惠券"))]),N]),Object(o["i"])("div",L,[Object(o["i"])("div",U,[Object(o["i"])("div",F,[Object(o["i"])("div",J,[P,Object(o["S"])(Object(o["i"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入優惠券名稱","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.tempCoupon.obj.title=e})},null,512),[[o["N"],a.tempCoupon.obj.title]])]),Object(o["i"])("div",V,[Object(o["i"])("div",z,[A,Object(o["S"])(Object(o["i"])("input",{id:"percent ",type:"number",min:"0",max:"100",class:"form-control",placeholder:"請輸入優惠(0-100)","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.tempCoupon.obj.percent=e})},null,512),[[o["N"],a.tempCoupon.obj.percent,void 0,{number:!0}]])]),Object(o["i"])("div",E,[T,Object(o["S"])(Object(o["i"])("input",{id:"due_date",type:"date",class:"form-control",min:a.today,placeholder:"請選擇時間","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.tempCoupon.obj.due_date=e})},null,8,["min"]),[[o["N"],a.tempCoupon.obj.due_date]])])]),Object(o["i"])("div",G,[Object(o["i"])("div",$,[q,Object(o["S"])(Object(o["i"])("input",{id:"code",type:"text",class:"form-control",placeholder:"請輸入折扣碼","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.tempCoupon.obj.code=e})},null,512),[[o["N"],a.tempCoupon.obj.code]])])]),Q,Object(o["i"])("div",R,[Object(o["i"])("div",H,[Object(o["S"])(Object(o["i"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.tempCoupon.obj.is_enabled=e})},null,512),[[o["L"],a.tempCoupon.obj.is_enabled,void 0,{number:!0}]]),K])])])])]),Object(o["i"])("div",W,[X,Object(o["i"])("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=function(e){return a.emit("couponStatus",a.tempCoupon.obj)})}," 確認 ")])])])],512)})),Z=n("7c2b"),ee=n.n(Z),te=n("1336"),ne={props:{coupon:{type:Object,default:function(){return{}}},newCoupon:{type:Boolean,default:function(){return!0}}},emits:["couponStatus"],setup:function(e,t){var n=t.emit;function a(){var e=Object(o["B"])(null),t=null,n=function(){t.show()},a=function(){t.hide()};return Object(o["t"])((function(){t=new ee.a(e.value)})),{couponModal:e,showCouponModal:n,hideCouponModal:a}}var c=Object(o["A"])({obj:{}}),i=Object(te["b"])(Date.now()/1e3);return Object(o["Q"])((function(){return e.coupon.obj}),(function(){c.obj=Object(y["a"])(Object(y["a"])({},e.coupon.obj),{},{due_date:Object(te["b"])(e.coupon.obj.due_date)})})),Object(y["a"])({tempCoupon:c,today:i,emit:n,props:e},a())}};ne.render=Y,ne.__scopeId="data-v-6aed2e8f";var oe=ne,ae=n("6461"),ce=n("5d10"),ie=n("bc3a"),le=n.n(ie),se=n("2d24"),ue={components:{BaseDelteButton:w["a"],BasePagination:x["a"],BaseCouponModal:oe,BaseDeleteCouponModal:ae["a"],BaseLoading:ce["a"]},setup:function(){var e=Object(o["B"])(null),t=Object(se["a"])(),n=Object(o["A"])({arr:[]}),a=function(e,n){t.fire({icon:"success",title:e,text:n})},c=function(e,n){t.fire({icon:"error",title:e,text:n})};function i(){var t=Object(o["A"])({obj:{}}),i=Object(o["B"])(!1),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;i.value=!0;var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/coupons?page=").concat(e);le.a.get(o).then((function(e){e.data.success?(n.arr=e.data.coupons,t.obj=e.data.pagination,i.value=!1):console.error=function(){throw new Error(e.data.message)}})).catch((function(e){console.error=function(){throw new Error(e)}}))},s=function(t){var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/coupon/").concat(t);le.a.delete(n).then((function(t){t.data.success?(l(),a("刪除優惠券","刪除優惠券成功!")):c("Oops...",t.data.message),e.value.hideDelModal()})).catch((function(e){console.error=function(){throw new Error(e)}}))};return Object(o["t"])((function(){l()})),{pagination:t,isLoading:i,getCoupons:l,delCoupon:s}}function l(){var t=Object(o["B"])(null),n=Object(o["A"])({obj:{}}),l=Object(o["B"])(!1),s=i(),u=s.getCoupons,b=function(t){n.obj=JSON.parse(JSON.stringify(t)),e.value.showDelModal()},r=function(e,o){n.obj=JSON.parse(JSON.stringify(e)),l.value=o,t.value.showCouponModal()},d=function(e){var o;n.obj=Object(y["a"])(Object(y["a"])({},e),{},{due_date:new Date(e.due_date).getTime()/1e3,is_enabled:null!==(o=e.is_enabled)&&void 0!==o?o:0});var i="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/coupon"),s="post";l.value||(i="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/coupon/").concat(e.id),s="put"),le.a[s](i,{data:n.obj}).then((function(e){e.data.success?(u(),a(l.value?"新增":"修改",l.value?"新增優惠券成功!":"修改優惠券成功!")):c("Oops...",e.data.message),t.value.hideCouponModal()})).catch((function(e){console.error(e)}))};return{couponModal:t,tempCoupon:n,newCoupon:l,openDeleteModal:b,openCouponModal:r,couponStatus:d}}return Object(y["a"])(Object(y["a"])(Object(y["a"])({},l()),i()),{},{formatDate:te["b"],couponDeleteModal:e,coupons:n})}};ue.render=h;t["default"]=ue},"5d10":function(e,t,n){"use strict";var o=n("7a23"),a=Object(o["U"])("data-v-e7dc2c3c");Object(o["z"])("data-v-e7dc2c3c");var c=Object(o["i"])("div",{class:"loadingio-spinner"},[Object(o["i"])("div",{class:"loadingio-inner"},[Object(o["i"])("div",{style:{left:"21px",top:"21px","animation-delay":"0s"}}),Object(o["i"])("div",{style:{left:"75px",top:"21px","animation-delay":"0.125s"}}),Object(o["i"])("div",{style:{left:"129px",top:"21px","animation-delay":"0.25s"}}),Object(o["i"])("div",{style:{left:"21px",top:"75px","animation-delay":"0.875s"}}),Object(o["i"])("div",{style:{left:"129px",top:"75px","animation-delay":"0.375s"}}),Object(o["i"])("div",{style:{left:"21px",top:"129px","animation-delay":"0.75s"}}),Object(o["i"])("div",{style:{left:"75px",top:"129px","animation-delay":"0.625s"}}),Object(o["i"])("div",{style:{left:"129px",top:"129px","animation-delay":"0.5s"}})])],-1);Object(o["x"])();var i=a((function(e,t,n,i,l,s){var u=Object(o["F"])("Loading");return Object(o["w"])(),Object(o["e"])(u,{active:i.attrs.isLoading},{default:a((function(){return[c]})),_:1},8,["active"])})),l={setup:function(e,t){var n=t.attrs;return{attrs:n}}};n("16c2");l.render=i,l.__scopeId="data-v-e7dc2c3c";t["a"]=l},"5fbc":function(e,t,n){"use strict";n("7a87")},6461:function(e,t,n){"use strict";var o=n("7a23"),a={id:"delModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true"},c={class:"modal-dialog"},i={class:"border-0 modal-content"},l={class:"text-white modal-header bg-danger"},s={id:"delModalLabel",class:"modal-title"},u=Object(o["h"])("刪除"),b=Object(o["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),r={class:"modal-body"},d=Object(o["h"])(" 是否刪除 "),p={class:"text-danger"},j=Object(o["h"])(" 商品(刪除後將無法恢復)。 "),O={class:"modal-footer"},f=Object(o["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function m(e,t,n,m,v,g){return Object(o["w"])(),Object(o["e"])("div",a,[Object(o["i"])("div",c,[Object(o["i"])("div",i,[Object(o["i"])("div",l,[Object(o["i"])("h5",s,[Object(o["i"])("span",null,[u,Object(o["E"])(e.$slots,"default")])]),b]),Object(o["i"])("div",r,[d,Object(o["i"])("strong",p,Object(o["I"])(m.props.deleteItem.title),1),j]),Object(o["i"])("div",O,[f,Object(o["i"])("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=function(e){return m.emit("deleteItem",m.props.deleteItem.id)})}," 確認刪除 ")])])])],512)}var v=n("5530"),g=n("7c2b"),h=n.n(g),y={props:{deleteItem:{type:Object,default:function(){return{}}}},emits:["deleteItem"],setup:function(e,t){var n=t.emit;function a(){var e=Object(o["B"])(null),t=null,n=function(){t.show()},a=function(){t.hide()};return Object(o["t"])((function(){t=new h.a(e.value)})),{delModal:e,showDelModal:n,hideDelModal:a}}return Object(v["a"])({props:e,emit:n},a())}};y.render=m;t["a"]=y},"6d79":function(e,t,n){},7719:function(e,t,n){},"7a87":function(e,t,n){},dd87:function(e,t,n){"use strict";var o=n("7a23"),a=Object(o["U"])("data-v-79cc22fc");Object(o["z"])("data-v-79cc22fc");var c={"aria-label":"Page navigation example"},i={class:"pagination"},l=Object(o["i"])("span",{"aria-hidden":"true"},"«",-1),s=Object(o["i"])("span",{"aria-hidden":"true"},"»",-1);Object(o["x"])();var u=a((function(e,t,n,a,u,b){return Object(o["w"])(),Object(o["e"])("nav",c,[Object(o["i"])("ul",i,[Object(o["i"])("li",{class:["page-item",{disabled:!a.props.pagination.obj.has_pre}]},[Object(o["i"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(o["T"])((function(e){return a.emit("getNowpage",a.props.pagination.obj.current_page-1)}),["prevent"]))},[l])],2),(Object(o["w"])(!0),Object(o["e"])(o["a"],null,Object(o["D"])(a.props.pagination.obj.total_pages,(function(e){return Object(o["w"])(),Object(o["e"])("li",{class:["page-item",{active:e===a.props.pagination.obj.current_page}],key:e},[Object(o["i"])("a",{class:"page-link",href:"#",onClick:Object(o["T"])((function(t){return a.emit("getNowpage",e)}),["prevent"])},Object(o["I"])(e),9,["onClick"])],2)})),128)),Object(o["i"])("li",{class:["page-item",{disabled:!a.props.pagination.obj.has_next}]},[Object(o["i"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(o["T"])((function(e){return a.emit("getNowpage",a.props.pagination.obj.current_page+1)}),["prevent"]))},[s])],2)])])})),b={props:{pagination:{type:Object,default:function(){return{}}},getProducts:{type:Function,default:function(){}}},emits:["getNowpage"],setup:function(e,t){var n=t.emit;return{props:e,emit:n}}};n("5fbc");b.render=u,b.__scopeId="data-v-79cc22fc";t["a"]=b}}]);
//# sourceMappingURL=chunk-0c828c28.e777d0a6.js.map