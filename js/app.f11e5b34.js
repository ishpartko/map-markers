(function(e){function t(t){for(var r,c,o=t[0],s=t[1],u=t[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/map-markers/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1555:function(e,t,n){},"452c":function(e,t,n){},"4ec4":function(e,t,n){"use strict";var r=n("bb47"),a=n.n(r);a.a},5265:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[e.isEdit?[n("CreateMapTree",{on:{back:e.onClickBack}})]:[n("MapTree",{staticClass:"app-map-tree"}),n("Map",{staticClass:"app-map",attrs:{"markers-type":e.markersType}}),n("SavedMapTree",{staticClass:"saved-map-tree"})],n("MenuPanel",{attrs:{"is-map-edit":e.isEdit},on:{"on-toggle-edit":e.toggleEdit,"on-change-markers-type":e.changeMarkersType}})],2)},i=[],c=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"map",staticClass:"map"}),n("button",{on:{click:e.onClickSave}},[e._v(" Сохранить маркеры в дерево ")])])},s=[],u=(n("d81d"),n("d3b7"),n("07ac"),n("3ca3"),n("ddb0"),n("e11e")),l=n.n(u),p=n("5aec");delete l.a.Icon.Default.prototype._getIconUrl,l.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var f=l.a.tileLayer,d=l.a.map,m=l.a.marker,h=(p["a"].Nominatim,n("db22")),b=n.n(h),O=(n("6cc5"),n("bc59")),v="pk.eyJ1IjoiaXNocGFydGtvIiwiYSI6ImNrM25jdjYzbjFqMGMzZXJrMXpkOWFkOHMifQ.J7fINBkSi_1_QEogEdHr6g",y=(n("26e9"),n("fb6a"),n("ec41")),g=3,j=function(e){var t=e.reverse().slice(0,g);return{countryName:Object(y["a"])(t,"[0].text","Нет Страны"),regionName:Object(y["a"])(t,"[1].text","Нет Области"),cityName:Object(y["a"])(t,"[2].text","Нет Города")}},k=function(e,t){var n=e.id,r=e.position,a=j(t);return{id:n,title:a.cityName,position:r,isSaved:!1,isShowOnMap:!1,context:a}},M={position:[54.01713952011128,34.60835549517637],zoom:7,id:"mapbox/streets-v11"},P={data:function(){return{mainMap:null,points:{}}},mounted:function(){var e=this;this.mainMap=d(this.$refs.map,{center:M.position,zoom:M.zoom}),f("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:"",maxZoom:18,minZoom:4,id:M.id,accessToken:v}).addTo(this.mainMap),this.mainMap.on("click",(function(t){e.addPoint(t.latlng)}))},methods:{getNewId:function(){return b()("1234567890abcdefghigklmno",4)},addPoint:function(e){var t=this,n={id:this.getNewId(),position:e};r["a"].set(this.points,n.id,n);var a=m(e).addTo(this.mainMap);a.on("click",(function(){t.mainMap.removeLayer(a);var e=Object(O["a"])(t.points,n.id);e&&r["a"].delete(t.points,n.id)}))},createPlacesFromApi:function(){var e=this;return new Promise((function(t){var n=Object.values(e.points).map((function(t){return new Promise((function(n,r){e.$store.dispatch("getPlaceContextFromApi",t).then((function(e){n(k(t,e))})).catch((function(e){r(e)}))}))}));Promise.all(n).then((function(e){var n={};e.forEach((function(e){n[e.id]=e})),t(n)}))}))},onClickSave:function(){var e=this;this.createPlacesFromApi().then((function(t){e.$store.commit("places",t),e.$emit("back")}))}}},w=P,S=(n("8fd0"),n("2877")),T=Object(S["a"])(w,o,s,!1,null,"1ae3858b",null),_=T.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"map",staticClass:"map"})},E=[],C=(n("45fc"),n("a9e3"),n("2f62")),D={default:{title:"Сохранить при наведении",value:1},allowDrag:{title:"Сохранить при клике ЛКМ + Разрешить перетаскивание",value:2}};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={props:{markersType:{type:[String,Number],required:!0,validator:function(e){return Object.values(D).some((function(t){return t.value===e}))}}},data:function(){return{mainMap:null,markersOnMap:{}}},computed:$({},Object(C["b"])({mapMarkers:"mapMarkers",places:"places"}),{onSelectListeners:function(){switch(this.markersType){case D.allowDrag.value:return"click";case D.default.value:default:return"mouseover click"}}}),watch:{mapMarkers:function(e){var t=this;null!==e&&e.forEach((function(e){t.addMarker(e)}))},markersType:function(e){this.changeMarkersType(e)}},mounted:function(){this.mainMap=d(this.$refs.map,{center:M.position,zoom:M.zoom}),this.mainMap.on("contextmenu",(function(){})),f("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:"",maxZoom:18,id:M.id,accessToken:v}).addTo(this.mainMap)},methods:{changeMarkerType:function(e){this.updateMarkerListeners({id:e})},changeMarkersType:function(){var e=this;Object.keys(this.markersOnMap).forEach((function(t){e.changeMarkerType(t)}))},deleteMarker:function(e){var t=e.id;this.mainMap.removeLayer(this.markersOnMap[t]),r["a"].delete(this.markersOnMap,t)},updateMarkerListeners:function(e){var t=this,n=e.id;this.markersOnMap[n].clearAllEventListeners(),this.markersOnMap[n].on(this.onSelectListeners,(function(e){var n=Object(y["a"])(e.target,"options.id",null);t.$store.commit("saveMapMarker",{id:n}),t.deleteMarker({id:n})})),this.markersType===D.allowDrag.value&&this.markersOnMap[n].on("dragend",(function(e){var n=e.target,r=Object(y["a"])(n,"options.id",null),a=n.getLatLng();n.setLatLng(a,{id:r,draggable:"true"}),n.bindPopup(a),n.update();var i=$({},t.places[r],{position:a});t.$store.dispatch("getPlaceContextFromApi",i).then((function(e){var n=j(e),r=$({},i,{context:n});t.$store.commit("updateSinglePlace",r)}))}))},addMarker:function(e){Object(O["a"])(this.markersOnMap,e.id)||(this.markersOnMap[e.id]=m(e.position,{draggable:"true",id:e.id}),this.updateMarkerListeners({id:e.id}),this.markersOnMap[e.id].addTo(this.mainMap))}}},L=I,F=(n("5c9d"),Object(S["a"])(L,x,E,!1,null,"25be0c82",null)),z=F.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map-tree-wrapper"},[e.tree?n("ul",{staticClass:"map-tree"},e._l(e.tree,(function(t,r){return n("TreeListItem",{key:r,attrs:{place:t},on:{selected:e.onSelected}})})),1):e._e()])},A=[],H=(n("13d5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.place?n("li",{staticClass:"tree-list-item",on:{click:function(t){return t.stopPropagation(),e.onSelected(e.place)}}},[n("span",{staticClass:"tree-list-item-title",class:{"tree-list-item_selected":e.isNeedToHightlight}},[e._v(" "+e._s(e.placeTitle)+" ")]),e.place.children?n("ul",e._l(e.place.children,(function(t,r){return n("TreeListItem",{key:r,attrs:{place:t},on:{selected:e.onSelected}})})),1):e._e()]):e._e()}),B=[],V=n("53ca"),q=n("d4ec"),U=n("bee2"),Z=function(){function e(){Object(q["a"])(this,e)}return Object(U["a"])(e,null,[{key:"isValid",value:function(e){var t=!0;return this.hasChildren(e)&&(t=this.isChildrenValid(e.children)),e.hasOwnProperty("title")&&t}},{key:"hasChildren",value:function(e){return e.hasOwnProperty("children")}},{key:"isChildrenValid",value:function(e){return"object"===Object(V["a"])(e)}}]),e}(),G={name:"TreeListItem",props:{place:{type:Object,required:!0,validator:function(e){return Z.isValid(e)}}},computed:{placeTitle:function(){return Object(y["a"])(this.place,"title",!1)||Object(y["a"])(this.place,"context[2]",!1)},isNeedToHightlight:function(){return Object(y["a"])(this.place,"isSaved",!1)||Object(y["a"])(this.place,"isShowOnMap",!1)}},methods:{onSelected:function(e){this.$emit("selected",e)}}},X=G,Q=(n("759f"),Object(S["a"])(X,H,B,!1,null,"4a0facd6",null)),Y=Q.exports,R=n("a1a3");function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee={components:{TreeListItem:Y},computed:K({},Object(C["b"])({places:"places"}),{tree:function(){return this.createTreeFromPlaces(this.places)}}),methods:{onSelected:function(e){this.$store.commit("addMapMarkers",e)},getHashCode:function(e){var t,n,r=0;if(0===e.length)return r;for(t=0;t<e.length;t++)n=e.charCodeAt(t),r=(r<<5)-r+n,r|=0;return r},createTreeItem:function(e){return Object(c["a"])({},this.getHashCode(e.context.countryName),{title:e.context.countryName,children:Object(c["a"])({},this.getHashCode(e.context.regionName),{title:e.context.regionName,children:Object(c["a"])({},this.getHashCode(e.context.cityName),e)})})},createTreeFromPlaces:function(e){var t=this;return Object.values(e).reduce((function(e,n){var r=t.createTreeItem(K({},n));return Object(R["a"])(r,e)}),{})}}},te=ee,ne=(n("8277"),Object(S["a"])(te,J,A,!1,null,null,null)),re=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.savedPlaces,(function(t){return n("li",{key:t.id,staticClass:"saved-list-item",on:{click:function(n){return e.onClickDelete(t)}}},[e._v(" "+e._s(t.context.countryName+" => "+t.context.regionName+" => "+t.context.cityName)+" ")])})),0)},ie=[];function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se={computed:oe({},Object(C["b"])({savedPlaces:"savedPlaces"})),methods:{onClickDelete:function(e){this.$store.commit("unSaveMapMarker",e)}}},ue=se,le=(n("c369"),Object(S["a"])(ue,ae,ie,!1,null,null,null)),pe=le.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-panel-wrapper"},[n("button",{on:{click:function(t){e.isShowMenu=!e.isShowMenu}}},[e._v(" Показать/Спрятать меню ")]),e.isShowMenu?n("section",{staticClass:"menu-panel"},[n("button",{staticClass:"menu-panel-controll menu-panel-button",on:{click:e.toggleEdit}},[e._v(" "+e._s(e.editButtonText)+" ")]),e.isMapEdit?e._e():n("span",{staticClass:"menu-panel-controll"},[e._v(" Управление маркерами: "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.markersType,expression:"markersType"}],staticClass:"menu-panel-controll-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.markersType=t.target.multiple?n:n[0]}}},e._l(e.markersTypeNames,(function(t,r){return n("option",{key:r,domProps:{value:t.value}},[e._v(" "+e._s(t.title)+" ")])})),0)])]):e._e()])},de=[],me={props:{isMapEdit:{type:Boolean,required:!0}},data:function(){return{markersTypeData:D.default.value,isShowMenu:!1}},computed:{markersTypeNames:function(){return D},editButtonText:function(){return this.isMapEdit?"Вернуться к дереву":"Задать точки"},markersType:{get:function(){return this.markersTypeData},set:function(e){this.markersTypeData=e,this.$emit("on-change-markers-type",e)}}},methods:{toggleEdit:function(){this.$emit("on-toggle-edit")}}},he=me,be=(n("e3e6"),Object(S["a"])(he,fe,de,!1,null,"4a5944ae",null)),Oe=be.exports,ve=function(e){return JSON.parse(JSON.stringify(e))},ye=function(e){return JSON.parse(e)},ge=function(e){return JSON.stringify(e)},je=function(){try{var e=localStorage.getItem("places");if(e)return ye(e)}catch(t){localStorage.removeItem("places")}},ke=function(e){try{localStorage.setItem("places",ge(ve(e)))}catch(t){throw new Error(t)}};function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var we={name:"app",components:{Map:z,MapTree:re,SavedMapTree:pe,CreateMapTree:_,MenuPanel:Oe},computed:Pe({},Object(C["b"])({places:"places"})),data:function(){return{isEdit:!0,markersType:D.default.value}},created:function(){this.init()},methods:{init:function(){var e=je();e&&this.$store.commit("places",e),this.isEdit=0===Object.keys(this.places).length},onClickBack:function(){ke(this.places),this.isEdit=!1},toggleEdit:function(){this.isEdit=!this.isEdit},changeMarkersType:function(e){this.markersType=e}},watch:{places:function(){this.isEdit=!1}}},Se=we,Te=(n("4ec4"),n("b0a0"),Object(S["a"])(Se,a,i,!1,null,"36a53a6c",null)),_e=Te.exports,xe=(n("99af"),function(e){if(Z.isValid(e)){var t=[],n=function e(n){if(Z.hasChildren(n))for(var r=0,a=Object.values(n.children);r<a.length;r++){var i=a[r];e(i)}else t.push(n)};return n(e),t}}),Ee=n("6740"),Ce=n("bc3a"),De=n.n(Ce);function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}r["a"].use(C["a"]);var Ie=new C["a"].Store({state:{places:{}},mutations:{places:function(e,t){e.places=$e({},t)},updateSinglePlace:function(e,t){Object(O["a"])(e.places,t.id)&&r["a"].set(e.places,t.id,t)},addMapMarkers:function(e,t){var n=xe(t);e.places=$e({},e.places,{},n.reduce((function(e,t){return t.isSaved?e:$e({},e,Object(c["a"])({},t.id,$e({},t,{isShowOnMap:!0})))}),{}))},saveMapMarker:function(e,t){var n=t.id;r["a"].set(e.places,n,$e({},e.places[n],{isSaved:!0,isShowOnMap:!1}))},unSaveMapMarker:function(e,t){r["a"].set(e.places,t.id,$e({},e.places[t.id],{isSaved:!1}))}},getters:{places:function(e){return e.places},savedPlaces:function(e,t){return Object(Ee["a"])(t.places,(function(e){return Object(y["a"])(e,"isSaved",!1)}))},mapMarkers:function(e,t){return Object(Ee["a"])(t.places,(function(e){return Object(y["a"])(e,"isShowOnMap",!1)}))}},actions:{getPlaceContextFromApi:function(e,t){return new Promise((function(e,n){De.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(t.position.lng,",").concat(t.position.lat,".json"),{params:{access_token:v}}).then((function(t){e(Object(y["a"])(t,"data.features[0].context",[]))})).catch((function(e){n(e)}))}))}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:Ie,render:function(e){return e(_e)}}).$mount("#app")},"5c9d":function(e,t,n){"use strict";var r=n("fb90"),a=n.n(r);a.a},"61d4":function(e,t,n){},"759f":function(e,t,n){"use strict";var r=n("ab97"),a=n.n(r);a.a},8277:function(e,t,n){"use strict";var r=n("1555"),a=n.n(r);a.a},"8fd0":function(e,t,n){"use strict";var r=n("61d4"),a=n.n(r);a.a},ab97:function(e,t,n){},b0a0:function(e,t,n){"use strict";var r=n("452c"),a=n.n(r);a.a},bb47:function(e,t,n){},c369:function(e,t,n){"use strict";var r=n("5265"),a=n.n(r);a.a},d18a:function(e,t,n){},e3e6:function(e,t,n){"use strict";var r=n("d18a"),a=n.n(r);a.a},fb90:function(e,t,n){}});
//# sourceMappingURL=app.f11e5b34.js.map