(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{272:function(t,n,s){},273:function(t,n,s){"use strict";var a=s(9),i={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:(t,{props:{name:n,icon:s,size:i}})=>t("span",{class:"post-tag",attrs:{title:n}},[t(a.a,{class:"post-tag-icon",attrs:{name:s,size:i}}),t("span",{class:"post-tag-name"},[n])])},e=(s(274),s(2)),o=Object(e.a)(i,void 0,void 0,!1,null,null,null);n.a=o.exports},274:function(t,n,s){"use strict";s(272)},300:function(t,n,s){"use strict";s.r(n);var a={name:"Tags",components:{IconTag:s(273).a}},i=s(2),e=Object(i.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"tags"},[t("div",{staticClass:"main-div"},[t("h2",[this._v(this._s(this.$themeConfig.lang.tags))]),this._v(" "),this._l(this.$tags.list,(function(n){return t("RouterLink",{key:n.name,attrs:{to:n.path}},[t("IconTag",{attrs:{icon:"tag",name:n.name}})],1)}))],2)])}),[],!1,null,null,null);n.default=e.exports}}]);