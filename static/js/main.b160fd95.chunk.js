(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(42),s=n.n(i),r=n(12),o=n(13),l=n(14),d=n(15),j=n(2),u=n.n(j),h=n(5),b=n.n(h),O=(n(18),n(10)),p={BASE_URL:"https://tipmanagementnodejs.herokuapp.com/"},m=n(74),x=n(83),v=n(84),f=n(80),y=n(75),g=n(76),w=n(77),S=n(78),k=n(79),E=n(81),N=n(0),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleKeyDown=function(e,t){"Enter"===e.key&&window.location.replace("http://"+window.location.host+t)},a.state={error:null,showDeleteBtn:!1,isLoaded:!1,open:!1,allItems:[],typeUpdate:null,index:null,strSearch:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"componentWillMount",value:function(){console.log("componentWillMount"),this.getAllData(!1)}},{key:"getAllData",value:function(e){var t=this;this.setState({showDeleteBtn:!!e}),fetch(p.BASE_URL+"all-tips?"+new URLSearchParams({dataDeleted:e}),{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,allItems:b.a.isEmpty(e)?[]:e})}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"onDelete",value:function(e,t){fetch(p.BASE_URL+"".concat(t,"/delete/").concat(e,"/"),{method:"POST"}),window.location.replace("http://"+window.location.host)}},{key:"onRestore",value:function(e,t){fetch(p.BASE_URL+"".concat(t,"/restore/").concat(e,"/"),{method:"POST"}),window.location.replace("http://"+window.location.host)}},{key:"setOpen",value:function(e){var t=document.getElementById("collapse".concat(e));"none"===t.style.display?t.style.display="block":t.style.display="none"}},{key:"showAll",value:function(e){var t=e?"block":"none";this.state.allItems.map((function(e){document.getElementById("collapse".concat(e.categoryMaster._id)).style.display=t}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,a=t.isLoaded,c=t.allItems;if(n)return Object(N.jsxs)("div",{children:["Error: ",n.message]});if(a){var i=b.a.isEmpty(c)?null:c.map((function(t){var n=b.a.isNull(t.categoryMaster.deteteTime)||void 0===t.categoryMaster.deteteTime?"not-detete":"deteted";return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"master-category-name ".concat(n),children:["  ",Object(N.jsxs)("button",{className:"buton-transparent",onClick:function(){e.setOpen(t.categoryMaster._id)},children:[Object(N.jsx)(y.a,{})," "]}),t.categoryMaster.name,Object(N.jsx)(O.b,{className:"link-icon",to:"create-category?type=sub&id-parent=".concat(t.categoryMaster._id),children:Object(N.jsx)(g.a,{class:"icon-inlink"})}),Object(N.jsx)(O.b,{className:"link-icon",to:"create-category?type=master&id=".concat(t.categoryMaster._id),children:Object(N.jsx)(w.a,{class:"icon-inlink"})}),e.state.showDeleteBtn&&Object(N.jsx)("button",{className:"buton-transparent",onClick:function(){return e.onDelete(t.categoryMaster._id,"categorymasters")},children:Object(N.jsx)(S.a,{})}),e.state.showDeleteBtn&&b.a.isEqual(n,"deteted")&&Object(N.jsx)("button",{className:"buton-transparent",onClick:function(){return e.onRestore(t.categoryMaster._id,"categorymasters")},children:Object(N.jsx)(k.a,{})})]}),Object(N.jsx)("div",{id:"collapse".concat(t.categoryMaster._id),children:t.subCategory.map((function(t){var n=b.a.isNull(t.deteteTime)||void 0===t.deteteTime?"not-detete":"deteted";return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"sub-category-name ".concat(n),children:[t.name,Object(N.jsx)(O.b,{className:"link-icon",to:"create-tip?id-parent=".concat(t._id),children:Object(N.jsx)(g.a,{class:"icon-inlink"})}),Object(N.jsx)(O.b,{className:"link-icon",to:"create-category?type=sub&id=".concat(t._id),children:Object(N.jsx)(w.a,{class:"icon-inlink"})}),e.state.showDeleteBtn&&Object(N.jsx)("button",{className:"buton-transparent",onClick:function(){return e.onDelete(t._id,"subcategories")},children:Object(N.jsx)(S.a,{})}),e.state.showDeleteBtn&&b.a.isEqual(n,"deteted")&&Object(N.jsx)("button",{className:"buton-transparent",onClick:function(){return e.onRestore(t._id,"subcategories")},children:Object(N.jsx)(k.a,{})})]}),t.note.map((function(n){var a=b.a.isNull(n.deteteTime)||void 0===n.deteteTime?"not-detete":"deteted";return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"tip-detail-name",children:[Object(N.jsx)(O.b,{className:"link-icon ".concat(a),to:"view-tip?id=".concat(n._id),children:n.name}),Object(N.jsx)(O.b,{className:"link-icon",to:"create-tip?id=".concat(n._id,"&id-parent=").concat(t._id),children:Object(N.jsx)(w.a,{class:"icon-inlink"})}),e.state.showDeleteBtn&&Object(N.jsx)("button",{className:"buton-transparent",onClick:function(){return e.onDelete(n._id,"notes")},children:Object(N.jsx)(S.a,{})}),e.state.showDeleteBtn&&b.a.isEqual(a,"deteted")&&Object(N.jsx)("button",{className:"buton-transparent",onClick:function(){return e.onRestore(n._id,"notes")},children:Object(N.jsx)(k.a,{})})]})})}))]})}))})]})}));return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"right-block",children:Object(N.jsxs)(x.a,{className:"mb-3",children:[Object(N.jsx)(v.a,{placeholder:"Search",onChange:function(t){return e.setState({strSearch:t.target.value})},onKeyDown:function(t){return e.handleKeyDown(t,"/search?searchStr=".concat(e.state.strSearch))}}),Object(N.jsx)(f.a,{variant:"outline-secondary",id:"button-addon2",children:Object(N.jsx)(O.b,{to:"search?searchStr=".concat(this.state.strSearch),children:"Search"})})]})}),Object(N.jsx)(f.a,{variant:"success",onClick:function(){return e.showAll(!0)},children:"Show all"}),Object(N.jsx)(f.a,{variant:"success",onClick:function(){return e.showAll(!1)},children:"Close all"}),Object(N.jsx)(f.a,{variant:"success",onClick:function(){return e.getAllData(!0)},children:"Manage Data"}),Object(N.jsx)(f.a,{variant:"success",onClick:function(){return e.getAllData(!1)},children:"Home page"}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"frame",children:i}),Object(N.jsx)("br",{}),Object(N.jsx)("button",{children:Object(N.jsxs)(O.b,{to:"create-category?type=master",children:[Object(N.jsx)(E.a,{}),"New Master Tip"]})})]})}return Object(N.jsx)("div",{children:Object(N.jsx)(m.a,{animation:"border",variant:"primary"})})}}],[{key:"propTypes",get:function(){return{message:u.a.string}}}]),n}(c.a.Component),L=n(22),D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,tipDetail:{},typeUpdate:null,index:null},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search).get("id");this.onGetTip(e)}},{key:"onGetTip",value:function(e){var t=this;fetch(p.BASE_URL+"notes/"+e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,tipDetail:b.a.isEmpty(e)?{}:e})}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.tipDetail,c="http://"+window.location.host;if(t)return Object(N.jsxs)("div",{children:["Error: ",t.message]});if(n){var i=b.a.isEmpty(a)?null:Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"tip-name",children:[" ",a.name," "]}),Object(N.jsxs)("div",{className:"tip-updateTime",children:[" ",a.updateTime," "]}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"tip-contents",dangerouslySetInnerHTML:{__html:a.contents}})]});return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"frame",children:[Object(N.jsx)(L.a,{children:Object(N.jsxs)("a",{href:"".concat(c,"/create-tip?id=").concat(a._id,"&id-parent=").concat(a.idParent),children:["Edit",Object(N.jsx)(w.a,{className:"icon-inlink"})]})}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),i]})})}return Object(N.jsx)("div",{children:"Loading..."})}}],[{key:"propTypes",get:function(){return{message:u.a.string}}}]),n}(c.a.Component),T=n(82),P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={error:null,searchStr:"",isLoaded:!1,open:!1,tips:[],typeUpdate:null,index:null},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),this.setState({searchStr:new URLSearchParams(window.location.search).get("searchStr")},(function(){e.search()}))}},{key:"componentWillMount",value:function(){console.log("componentWillMount")}},{key:"onDelete",value:function(e,t){fetch(p.BASE_URL+"delete-temp?"+new URLSearchParams({type:t,id:e}),{method:"PUT"}),window.location.replace("http://"+window.location.host)}},{key:"search",value:function(){var e=this;fetch(p.BASE_URL+"search?"+new URLSearchParams({strSearch:this.state.searchStr}),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,tips:b.a.isEmpty(t)?[]:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.tips;if(t)return Object(N.jsxs)("div",{children:["Error: ",t.message]});if(n){var c="http://"+window.location.host,i=b.a.isEmpty(a)?null:a.map((function(e){var t=b.a.isNull(e.deleteDate)?"not-detete":"deteted";return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"tip-detail-name",children:[Object(N.jsx)(T.a,{className:"icon-inlink"})," ",Object(N.jsx)("a",{href:"".concat(c,"/view-tip?id=").concat(e.id),className:"link-icon ".concat(t),children:e.name}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]})})}));return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"frame",children:i}),Object(N.jsx)("br",{})]})}return Object(N.jsx)("div",{children:Object(N.jsx)(m.a,{animation:"border",variant:"primary"})})}}],[{key:"propTypes",get:function(){return{message:u.a.string}}}]),n}(c.a.Component),_=n(3),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,index:null,idParent:null,title:null,typeCategory:null,categoryInfo:{}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({index:new URLSearchParams(window.location.search).get("id"),idParent:new URLSearchParams(window.location.search).get("id-parent"),typeCategory:new URLSearchParams(window.location.search).get("type")},(function(){b.a.isNull(e.state.typeCategory)&&window.location.replace("http://"+window.location.host),e.setState({title:(b.a.isNull(e.state.index)?"Create ":"Edit ")+e.state.typeCategory}),b.a.isNull(e.state.index)||e.getCategoryById()}))}},{key:"getCategoryById",value:function(){var e=this,t=p.BASE_URL+("sub"===this.state.typeCategory?"subcategories":"categorymasters")+"/"+this.state.index;fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,categoryInfo:b.a.isEmpty(t)?{}:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"onSave",value:function(){var e=this.state.idParent?this.state.idParent:this.state.typeCategory.idParent;fetch(p.BASE_URL+("sub"===this.state.typeCategory?"subcategories":"categorymasters")+"/save",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:this.state.index,name:this.state.categoryInfo.name,description:this.state.categoryInfo.description,idParent:e,typeCategory:this.state.typeCategory})}).then()}},{key:"handleChange",value:function(e,t){switch(t){case"name":this.setState((function(t){return{categoryInfo:Object(_.a)(Object(_.a)({},t.categoryInfo),{},{name:e.target.value})}}));break;case"description":this.setState((function(t){return{categoryInfo:Object(_.a)(Object(_.a)({},t.categoryInfo),{},{description:e.target.value})}}))}}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{id:"title-edit-type",children:this.state.title}),Object(N.jsx)("div",{className:"frame",children:Object(N.jsxs)("form",{children:[Object(N.jsx)("div",{children:Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"hidden",name:"index",value:this.state.categoryInfo.id,onChange:function(t){e.handleChange(t,"id")}})})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:"Name:"}),Object(N.jsx)("div",{children:Object(N.jsx)("textarea",{className:"input-name",value:this.state.categoryInfo.name,onChange:function(t){e.handleChange(t,"name")}})})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:"Description:"}),Object(N.jsx)("div",{children:Object(N.jsx)("textarea",{className:"input-name",value:this.state.categoryInfo.description,onChange:function(t){e.handleChange(t,"description")}})})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"submit",value:"Save",onClick:function(){return e.onSave()}})})]})]})})]})}}],[{key:"propTypes",get:function(){return{message:u.a.string}}}]),n}(c.a.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},U=n(4),M=n(7),I=n(46),A=n(47),G=n.n(A),F=void 0,J=function(){var e=Object(a.useState)(null),t=Object(M.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),s=Object(M.a)(i,2),r=s[0],o=s[1],l=Object(a.useState)({name:null,id:null,contents:null,idParent:null}),d=Object(M.a)(l,2),j=d[0],u=d[1],h=Object(a.useState)({isGetTipLoaded:!1}),O=Object(M.a)(h,2),m=O[0],x=O[1],v=Object(a.useState)([]),f=Object(M.a)(v,2),y=f[0],g=f[1],w=Object(a.useState)(!0),S=Object(M.a)(w,2),k=(S[0],S[1]);Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("id"),t=new URLSearchParams(window.location.search).get("id-parent");c(e),u((function(e){return Object(_.a)(Object(_.a)({},e),{},{idParent:t})})),b.a.isNull(t)&&window.location.replace("http://"+window.location.host),b.a.isNull(e)||(k(!1),E(e),C())}),[]);var E=function(e){fetch(p.BASE_URL+"notes/"+e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){b.a.isEmpty(e)||u(Object(_.a)(Object(_.a)({},j),{},{id:e.id,name:e.name,contents:e.contents,idParent:e.idParent})),x(Object(_.a)(Object(_.a)({},m),{},{isGetTipLoaded:!0}))}))},C=function(){fetch(p.BASE_URL+"subcategories",{method:"GET"}).then((function(e){return e.json()})).then((function(e){b.a.isEmpty(e)||g(e)}))},L=function(e,t){if(m.isGetTipLoaded||b.a.isNull(n))switch(t){case"name":u((function(t){return Object(_.a)(Object(_.a)({},t),{},{name:e})}));break;case"contents":u((function(t){return Object(_.a)(Object(_.a)({},t),{},{contents:e})}));break;case"idParent":o(e)}},D=b.a.isEmpty(y)?null:y.map((function(e){return Object(N.jsx)("option",{value:"".concat(e.id),children:e.name})}));return Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"frame",children:Object(N.jsxs)("form",{children:[Object(N.jsx)("div",{children:Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"hidden",name:"index",value:j.id,onChange:function(e){L(e.target.value,"id")}})})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:"Name:"}),Object(N.jsx)("div",{children:Object(N.jsx)("textarea",{className:"input-name",value:j.name,onChange:function(e){L(e.target.value,"name")}})})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:"class:"}),Object(N.jsx)("div",{children:Object(N.jsxs)("select",{onChange:function(e){L(e.target.value,"idParent")},children:[Object(N.jsx)("option",{value:""}),D]})})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:"contents:"}),Object(N.jsx)("div",{children:Object(N.jsx)(I.CKEditor,{onReady:function(e){console.log("Editor is ready to use!",e),e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},onError:function(e){e.willEditorRestart&&F.editor.ui.view.toolbar.element.remove()},onChange:function(e,t){var n=t.getData();L(n,"contents")},editor:G.a,data:j.contents})})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"submit",value:"Save",onClick:function(){return function(){var e=b.a.isNull(r)||0===r.length?j.idParent:r;fetch(p.BASE_URL+"notes/save",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:n,name:j.name,contents:j.contents,idParent:e,typeUpdate:b.a.isNull(n)?"insert":"update"})}).then()}()}})})]})]})})})};s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsxs)(O.a,{children:[Object(N.jsx)("div",{children:Object(N.jsx)(O.b,{to:"/",children:"Home"})}),Object(N.jsx)("br",{}),Object(N.jsxs)(U.c,{children:[Object(N.jsx)(U.a,{exact:!0,path:"/",element:Object(N.jsx)(C,{})}),Object(N.jsx)(U.a,{path:"/view-tip",element:Object(N.jsx)(D,{})}),Object(N.jsx)(U.a,{path:"/create-category",element:Object(N.jsx)(R,{})}),Object(N.jsx)(U.a,{path:"/create-tip",element:Object(N.jsx)(J,{})}),Object(N.jsx)(U.a,{path:"/search",element:Object(N.jsx)(P,{})})]})]})}),document.getElementById("root")),B()}},[[73,1,2]]]);
//# sourceMappingURL=main.b160fd95.chunk.js.map