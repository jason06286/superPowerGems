(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83b5a148"],{"224e":function(t,e,c){"use strict";c("e006")},"241e":function(t,e,c){"use strict";var a=c("7a23"),o=Object(a["U"])("data-v-9ae1be70");Object(a["z"])("data-v-9ae1be70");var n={class:"d-flex align-items-center"},i={class:"overflow-hidden"},r={class:"position-relative btn-container"},l=Object(a["h"])(" 刪除 "),b=Object(a["i"])("i",{class:"bi bi-trash-fill"},null,-1),d=Object(a["h"])(" 確定 "),u=Object(a["i"])("i",{class:"bi bi-question-circle-fill"},null,-1);Object(a["x"])();var s=o((function(t,e,c,o,s,p){return Object(a["w"])(),Object(a["e"])("div",n,[Object(a["i"])("div",i,[Object(a["i"])("div",r,[Object(a["i"])("button",{type:"button",class:["btn btn-outline-darkred",{"btn-sm":o.props.btnSmall}]},[l,b],2),Object(a["i"])("button",{type:"button",class:["position-absolute btn btn-darkred w-100",{"btn-sm":o.props.btnSmall}]},[d,u],2)])])])})),p={props:{btnSmall:{Boolean:Boolean,default:!1}},setup:function(t){return{props:t}}};c("7812");p.render=s,p.__scopeId="data-v-9ae1be70";e["a"]=p},"2d24":function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var a=c("7a23");function o(){return Object(a["m"])("$swal")}},"31da":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o=Object(a["U"])("data-v-529d37a7");Object(a["z"])("data-v-529d37a7");var n={class:"my-2"},i=Object(a["i"])("h4",{class:"pb-3 mb-3 fw-bold border-bottom border-3 border-darkred"}," 產品列表 ",-1),r={class:"text-end"},l={class:"table-responsive-lg"},b={class:"table mt-4 table-dark table-hover"},d=Object(a["i"])("thead",{class:"text-title"},[Object(a["i"])("tr",null,[Object(a["i"])("th",{width:"120"},"分類"),Object(a["i"])("th",null,"產品名稱"),Object(a["i"])("th",{width:"100"},"原價"),Object(a["i"])("th",{width:"100"},"售價"),Object(a["i"])("th",{width:"100"},"是否啟用"),Object(a["i"])("th",{width:"120"},"編輯"),Object(a["i"])("th",{width:"120"},"刪除")])],-1),u={class:"text-content"},s={class:"text-center"},p={class:"text-center"},j={class:"text-center"},O={key:0,class:"text-success"},m={key:1,class:"text-content"},f=Object(a["h"])(" 編輯 "),v=Object(a["i"])("i",{class:"bi bi-pen-fill"},null,-1),g={class:"mt-5 d-flex justify-content-center"},h=Object(a["h"])(" 產品 ");Object(a["x"])();var w=o((function(t,e,c,w,y,P){var k=Object(a["F"])("BaseLoading"),x=Object(a["F"])("BaseDelteButton"),U=Object(a["F"])("BasePagination"),M=Object(a["F"])("BaseProductModal"),_=Object(a["F"])("BaseDeleteModal");return Object(a["w"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(k,{isLoading:t.isLoading},null,8,["isLoading"]),Object(a["i"])("div",n,[i,Object(a["i"])("div",r,[Object(a["i"])("button",{class:"btn btn-darkred",type:"button",onClick:e[1]||(e[1]=function(e){return t.openProductModal({},!0)})}," 新增商品 ")]),Object(a["i"])("div",l,[Object(a["i"])("table",b,[d,Object(a["i"])("tbody",u,[(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["D"])(w.products.arr,(function(e){return Object(a["w"])(),Object(a["e"])("tr",{key:e.id},[Object(a["i"])("td",null,Object(a["I"])(e.category),1),Object(a["i"])("td",null,Object(a["I"])(e.title),1),Object(a["i"])("td",s,Object(a["I"])(w.currency(e.origin_price)),1),Object(a["i"])("td",p,Object(a["I"])(w.currency(e.price)),1),Object(a["i"])("td",j,[e.is_enabled?(Object(a["w"])(),Object(a["e"])("span",O,"啟用")):(Object(a["w"])(),Object(a["e"])("span",m,"未啟用"))]),Object(a["i"])("td",null,[Object(a["i"])("button",{type:"button",class:"btn btn-outline-title btn-sm",onClick:function(c){return t.openProductModal(e,!1)}},[f,v],8,["onClick"])]),Object(a["i"])("td",null,[Object(a["i"])(x,{btnSmall:!0,onClick:function(c){return t.openDeleteModal(e)}},null,8,["onClick"])])])})),128))])])])]),Object(a["i"])("div",g,[Object(a["i"])(U,{pagination:w.pagination,onGetNowpage:t.getProducts},null,8,["pagination","onGetNowpage"])]),Object(a["i"])(M,{ref:"productModal",product:t.tempProduct,newProduct:t.newProduct,onProductStatus:t.productStatus},null,8,["product","newProduct","onProductStatus"]),Object(a["i"])(_,{ref:"productDeleteModal",deleteItem:t.tempProduct.obj,onDeleteItem:t.delProduct},{default:o((function(){return[h]})),_:1},8,["deleteItem","onDeleteItem"])],64)})),y=c("5530"),P=(c("99af"),c("241e")),k=c("dd87"),x=(c("a4d3"),c("e01a"),Object(a["U"])("data-v-1a5e538a"));Object(a["z"])("data-v-1a5e538a");var U={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},M={class:"modal-dialog modal-xl"},_={class:"border-0 modal-content"},B={class:"bg-darkred modal-header"},I={id:"productModalLabel",class:"modal-title text-title"},S={key:0},C={key:1},N=Object(a["i"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),D={class:"modal-body bg-dark"},L={class:"row"},F={class:"col-sm-4"},V={class:"mb-1"},A={class:"my-2 form-group"},J=Object(a["i"])("label",{for:"imageUrl"},"輸入圖片網址",-1),z={class:"my-2 form-group"},T=Object(a["i"])("label",{for:"fileInput"},"或上傳圖片",-1),G={key:0},$={key:1},q={key:2},E={class:"col-sm-8"},Q={class:"form-group"},H=Object(a["i"])("label",{for:"title"},[Object(a["h"])("標題"),Object(a["i"])("span",{class:"text-danger"},"*")],-1),K={class:"row"},R={class:"form-group col-md-6"},W=Object(a["i"])("label",{for:"category"},[Object(a["h"])("分類"),Object(a["i"])("span",{class:"text-danger"},"*")],-1),X={class:"form-group col-md-6"},Y=Object(a["i"])("label",{for:"unit"},[Object(a["h"])("單位"),Object(a["i"])("span",{class:"text-danger"},"*")],-1),Z={class:"row"},tt={class:"form-group col-md-6"},et=Object(a["i"])("label",{for:"origin_price"},[Object(a["h"])("原價"),Object(a["i"])("span",{class:"text-danger"},"*")],-1),ct={class:"form-group col-md-6"},at=Object(a["i"])("label",{for:"price"},[Object(a["h"])("售價"),Object(a["i"])("span",{class:"text-danger"},"*")],-1),ot=Object(a["i"])("hr",null,null,-1),nt={class:"form-group"},it=Object(a["i"])("label",{for:"description"},"產品描述",-1),rt={class:"form-group"},lt=Object(a["i"])("label",{for:"content"},"說明內容",-1),bt={class:"form-group"},dt={class:"form-check"},ut=Object(a["i"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),st={class:"modal-footer bg-dark"},pt=Object(a["i"])("button",{type:"button",class:"btn btn-outline-title","data-bs-dismiss":"modal"}," 取消 ",-1);Object(a["x"])();var jt=x((function(t,e,c,o,n,i){return Object(a["w"])(),Object(a["e"])("div",U,[Object(a["i"])("div",M,[Object(a["i"])("div",_,[Object(a["i"])("div",B,[Object(a["i"])("h5",I,[c.newProduct?(Object(a["w"])(),Object(a["e"])("span",S,"新增產品")):(Object(a["w"])(),Object(a["e"])("span",C,"修改產品"))]),N]),Object(a["i"])("div",D,[Object(a["i"])("div",L,[Object(a["i"])("div",F,[Object(a["i"])("div",V,[Object(a["i"])("div",A,[J,Object(a["S"])(Object(a["i"])("input",{type:"text",id:"imageUrl",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.tempProduct.obj.imageUrl=e})},null,512),[[a["N"],t.tempProduct.obj.imageUrl]])]),Object(a["i"])("div",z,[T,Object(a["i"])("input",{type:"file",id:"fileInput",class:"form-control",ref:"fileInput",onChange:e[2]||(e[2]=function(){return t.uploadFile&&t.uploadFile.apply(t,arguments)})},null,544)]),Object(a["i"])("img",{class:"img-fluid",src:t.tempProduct.obj.imageUrl,alt:"上傳的圖片"},null,8,["src"])]),Array.isArray(t.tempProduct.obj.imagesUrl)?(Object(a["w"])(),Object(a["e"])("div",G,[Object(a["i"])("button",{class:"btn btn-darkred btn-sm d-block w-100",onClick:e[3]||(e[3]=function(){return t.addPicture&&t.addPicture.apply(t,arguments)})}," 新增圖片 ")])):(Object(a["w"])(),Object(a["e"])("div",$,[Object(a["i"])("button",{class:"btn btn-darkred btn-sm d-block w-100",onClick:e[4]||(e[4]=function(){return t.newPicture&&t.newPicture.apply(t,arguments)})}," 新增圖片 ")])),Object(a["i"])("div",null,[Object(a["i"])("button",{class:"btn btn-outline-content btn-sm d-block w-100",onClick:e[5]||(e[5]=function(){return t.delPicture&&t.delPicture.apply(t,arguments)})}," 刪除圖片 ")]),Array.isArray(t.tempProduct.obj.imagesUrl)?(Object(a["w"])(),Object(a["e"])("div",q,[(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["D"])(t.tempProduct.obj.imagesUrl,(function(t){return Object(a["w"])(),Object(a["e"])("img",{class:"my-2 img-fluid",key:t,src:t,alt:"商品的圖片"},null,8,["src"])})),128))])):Object(a["f"])("",!0)]),Object(a["i"])("div",E,[Object(a["i"])("div",Q,[H,Object(a["S"])(Object(a["i"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.tempProduct.obj.title=e})},null,512),[[a["N"],t.tempProduct.obj.title]])]),Object(a["i"])("div",K,[Object(a["i"])("div",R,[W,Object(a["S"])(Object(a["i"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.tempProduct.obj.category=e})},null,512),[[a["N"],t.tempProduct.obj.category]])]),Object(a["i"])("div",X,[Y,Object(a["S"])(Object(a["i"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.tempProduct.obj.unit=e})},null,512),[[a["N"],t.tempProduct.obj.unit]])])]),Object(a["i"])("div",Z,[Object(a["i"])("div",tt,[et,Object(a["S"])(Object(a["i"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[9]||(e[9]=function(e){return t.tempProduct.obj.origin_price=e})},null,512),[[a["N"],t.tempProduct.obj.origin_price,void 0,{number:!0}]])]),Object(a["i"])("div",ct,[at,Object(a["S"])(Object(a["i"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[10]||(e[10]=function(e){return t.tempProduct.obj.price=e})},null,512),[[a["N"],t.tempProduct.obj.price,void 0,{number:!0}]])])]),ot,Object(a["i"])("div",nt,[it,Object(a["S"])(Object(a["i"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[11]||(e[11]=function(e){return t.tempProduct.obj.description=e})},"\n                ",512),[[a["N"],t.tempProduct.obj.description]])]),Object(a["i"])("div",rt,[lt,Object(a["S"])(Object(a["i"])("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[12]||(e[12]=function(e){return t.tempProduct.obj.content=e})},"\n                ",512),[[a["N"],t.tempProduct.obj.content]])]),Object(a["i"])("div",bt,[Object(a["i"])("div",dt,[Object(a["S"])(Object(a["i"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[13]||(e[13]=function(e){return t.tempProduct.obj.is_enabled=e})},null,512),[[a["L"],t.tempProduct.obj.is_enabled,void 0,{number:!0}]]),ut])])])])]),Object(a["i"])("div",st,[pt,Object(a["i"])("button",{type:"button",class:"btn btn-darkred",onClick:e[14]||(e[14]=function(e){return o.emit("productStatus",t.tempProduct.obj)})}," 確認 ")])])])],512)})),Ot=c("bc3a"),mt=c.n(Ot),ft=c("7c2b"),vt=c.n(ft),gt=c("98e4"),ht={props:{product:{type:Object,default:function(){return{}}},newProduct:{type:Boolean,default:function(){return!0}}},emits:["productStatus"],setup:function(t,e){var c=e.emit;function o(){var t=Object(a["B"])(null),e=null,c=function(){e.show()},o=function(){e.hide()};return Object(a["t"])((function(){e=new vt.a(t.value)})),{productModal:t,showProductModal:c,hideProductModal:o}}function n(){var e=Object(a["B"])(null),c=Object(a["A"])({obj:{}});Object(a["Q"])((function(){return t.product.obj}),(function(){c.obj=t.product.obj}));var o=function(){c.obj.imagesUrl=[],c.obj.imagesUrl.push(c.obj.imageUrl),c.obj.imageUrl=""},n=function(){c.obj.imagesUrl.push(c.obj.imageUrl),c.obj.imageUrl=""},i=function(){c.obj.imagesUrl.pop()},r=function(){var t=e.value.files[0],a=new FormData;a.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/upload");mt.a.post(o,a).then((function(t){t.data.success&&(c.obj.imageUrl=t.data.imageUrl),Object(gt["a"])(t,"上傳照片")})).catch((function(t){Object(gt["a"])(t,"上傳照片")}))};return{tempProduct:c,fileInput:e,newPicture:o,addPicture:n,delPicture:i,uploadFile:r}}return Object(y["a"])(Object(y["a"])({emit:c},o()),n())}};c("224e");ht.render=jt,ht.__scopeId="data-v-1a5e538a";var wt=ht,yt=c("6461"),Pt=c("5d10"),kt=c("2d24"),xt=c("1336"),Ut={components:{BaseDelteButton:P["a"],BasePagination:k["a"],BaseProductModal:wt,BaseDeleteModal:yt["a"],BaseLoading:Pt["a"]},setup:function(){var t=Object(a["A"])({arr:[]}),e=Object(a["A"])({obj:{}}),c=Object(a["B"])(null),o=Object(kt["a"])();function n(t,e){o.fire({icon:"success",title:t,text:e,background:"#262833",confirmButtonColor:"#98142b"})}function i(t,e){o.fire({icon:"error",title:t,text:e,background:"#262833",confirmButtonColor:"#98142b"})}function r(){var o=Object(a["B"])(!1),r=function(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;o.value=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/products?page=").concat(c);mt.a.get(a).then((function(c){c.data.success?(t.arr=c.data.products,e.obj=c.data.pagination,o.value=!1):i("Oops...",c.data.message)})).catch((function(){i("Oops...","取得商品資料錯誤")}))},l=function(t){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/product/").concat(t);mt.a.delete(e).then((function(t){t.data.success?(r(),n("刪除","刪除商品成功!")):i("Oops...",t.data.message)})).catch((function(){i("Oops...","刪除商品錯誤")})),c.value.hideDelModal()};return Object(a["t"])((function(){r()})),{isLoading:o,getProducts:r,delProduct:l}}function l(){var t=Object(a["B"])(null),e=Object(a["B"])(!1),o=Object(a["A"])({obj:{imagesUrl:[]}}),l=r(),b=l.getProducts,d=function(c,a){o.obj=JSON.parse(JSON.stringify(c)),e.value=a,t.value.showProductModal()},u=function(t){o.obj=JSON.parse(JSON.stringify(t)),c.value.showDelModal()},s=function(c){o.obj=c;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/product"),r="post";e.value||(a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/product/").concat(c.id),r="put"),mt.a[r](a,{data:o.obj}).then((function(c){c.data.success?(b(),n(e.value?"新增":"修改",e.value?"新增商品成功!":"修改商品成功!")):i("Oops...",c.data.message),t.value.hideProductModal()})).catch((function(){i("Oops...","新增修改錯誤")}))};return{productModal:t,newProduct:e,tempProduct:o,openProductModal:d,openDeleteModal:u,productStatus:s}}return Object(y["a"])(Object(y["a"])({products:t,pagination:e,productDeleteModal:c,currency:xt["a"]},r()),l())}};Ut.render=w,Ut.__scopeId="data-v-529d37a7";e["default"]=Ut},"4b72":function(t,e,c){"use strict";c("7919")},"5d10":function(t,e,c){"use strict";var a=c("7a23"),o=Object(a["U"])("data-v-a6b73326");Object(a["z"])("data-v-a6b73326");var n=Object(a["i"])("section",null,[Object(a["i"])("div",{class:"loader"})],-1);Object(a["x"])();var i=o((function(t,e,c,i,r,l){var b=Object(a["F"])("Loading");return Object(a["w"])(),Object(a["e"])(b,{active:i.attrs.isLoading,"background-color":"black"},{default:o((function(){return[n]})),_:1},8,["active"])})),r={setup:function(t,e){var c=e.attrs;return{attrs:c}}};c("4b72");r.render=i,r.__scopeId="data-v-a6b73326";e["a"]=r},6461:function(t,e,c){"use strict";var a=c("7a23"),o={id:"delModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true"},n={class:"modal-dialog"},i={class:"border-0 modal-content"},r={class:"text-title modal-header bg-darkred"},l={id:"delModalLabel",class:"modal-title"},b=Object(a["h"])("刪除"),d=Object(a["i"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body bg-dark"},s=Object(a["h"])(" 是否刪除 "),p={class:"text-darkred"},j=Object(a["h"])(" 商品(刪除後將無法恢復)。 "),O={class:"modal-footer bg-dark"},m=Object(a["i"])("button",{type:"button",class:"btn btn-outline-title","data-bs-dismiss":"modal"}," 取消 ",-1);function f(t,e,c,f,v,g){return Object(a["w"])(),Object(a["e"])("div",o,[Object(a["i"])("div",n,[Object(a["i"])("div",i,[Object(a["i"])("div",r,[Object(a["i"])("h5",l,[Object(a["i"])("span",null,[b,Object(a["E"])(t.$slots,"default")])]),d]),Object(a["i"])("div",u,[s,Object(a["i"])("strong",p,Object(a["I"])(f.props.deleteItem.title),1),j]),Object(a["i"])("div",O,[m,Object(a["i"])("button",{type:"button",class:"btn btn-darkred",onClick:e[1]||(e[1]=function(t){return f.emit("deleteItem",f.props.deleteItem.id)})}," 確認刪除 ")])])])],512)}var v=c("5530"),g=c("7c2b"),h=c.n(g),w={props:{deleteItem:{type:Object,default:function(){return{}}}},emits:["deleteItem"],setup:function(t,e){var c=e.emit;function o(){var t=Object(a["B"])(null),e=null,c=function(){e.show()},o=function(){e.hide()};return Object(a["t"])((function(){e=new h.a(t.value)})),{delModal:t,showDelModal:c,hideDelModal:o}}return Object(v["a"])({props:t,emit:c},o())}};w.render=f;e["a"]=w},7812:function(t,e,c){"use strict";c("a078")},7919:function(t,e,c){},a078:function(t,e,c){},dd87:function(t,e,c){"use strict";var a=c("7a23"),o=Object(a["U"])("data-v-def117e8");Object(a["z"])("data-v-def117e8");var n={"aria-label":"Page navigation example"},i={class:"pagination"},r=Object(a["i"])("span",{"aria-hidden":"true"},"«",-1),l=Object(a["i"])("span",{"aria-hidden":"true"},"»",-1);Object(a["x"])();var b=o((function(t,e,c,o,b,d){return Object(a["w"])(),Object(a["e"])("nav",n,[Object(a["i"])("ul",i,[Object(a["i"])("li",{class:["page-item",{disabled:!o.props.pagination.obj.has_pre}]},[Object(a["i"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=Object(a["T"])((function(t){return o.emit("getNowpage",o.props.pagination.obj.current_page-1)}),["prevent"]))},[r])],2),(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["D"])(o.props.pagination.obj.total_pages,(function(t){return Object(a["w"])(),Object(a["e"])("li",{class:["page-item",{active:t===o.props.pagination.obj.current_page}],key:t},[Object(a["i"])("a",{class:"page-link",href:"#",onClick:Object(a["T"])((function(e){return o.emit("getNowpage",t)}),["prevent"])},Object(a["I"])(t),9,["onClick"])],2)})),128)),Object(a["i"])("li",{class:["page-item",{disabled:!o.props.pagination.obj.has_next}]},[Object(a["i"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(a["T"])((function(t){return o.emit("getNowpage",o.props.pagination.obj.current_page+1)}),["prevent"]))},[l])],2)])])})),d={props:{pagination:{type:Object,default:function(){return{}}},getProducts:{type:Function,default:function(){}}},emits:["getNowpage"],setup:function(t,e){var c=e.emit;return{props:t,emit:c}}};d.render=b,d.__scopeId="data-v-def117e8";e["a"]=d},e006:function(t,e,c){}}]);
//# sourceMappingURL=chunk-83b5a148.d77b4c71.js.map