(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{331:function(t,v,_){"use strict";_.r(v);var a=_(4),i=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"问题-1-浏览器重绘与回流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题-1-浏览器重绘与回流"}},[t._v("#")]),t._v(" "),v("code",[t._v("问题 1：浏览器重绘与回流？")])]),t._v(" "),v("h4",{attrs:{id:"回流-reflow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow"}},[t._v("#")]),t._v(" "),v("code",[t._v("回流（reflow）：")])]),t._v(" "),v("p",[t._v("1、布局引擎会根据各种样式计算每个盒子在页面上的大小与位置。")]),t._v(" "),v("p",[t._v("2、改变元素的位置和尺寸大小都会引发回流\n"),v("img",{attrs:{src:t.$withBase("/assets/img/browser01.png"),alt:""}}),v("br"),t._v(" "),v("code",[t._v("重绘(Repaint):")]),v("br"),t._v(" 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。表现为某些元素的外观被改变。")]),t._v(" "),v("p",[v("code",[t._v("重绘：")]),v("br"),t._v("1、当计算好盒模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制。")]),t._v(" "),v("p",[t._v("2、"),v("code",[t._v("『回流』必定会发生『重绘』，『重绘』不一定会引发『回流』")]),t._v("。\n"),v("img",{attrs:{src:t.$withBase("/assets/img/browser02.png"),alt:""}})]),t._v(" "),v("h4",{attrs:{id:"如何触发重排和重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何触发重排和重绘"}},[t._v("#")]),t._v(" 如何触发重排和重绘？")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("添加、删除、更新DOM节点")])]),t._v(" "),v("li",[v("p",[t._v("通过display: none隐藏一个DOM节点-触发重排和重绘")])]),t._v(" "),v("li",[v("p",[t._v("通过visibility: hidden隐藏一个DOM节点-只触发重绘")])]),t._v(" "),v("li",[v("p",[t._v("移动或者给页面中的DOM节点添加动画")])]),t._v(" "),v("li",[v("p",[t._v("添加一个样式表，调整样式属性")])]),t._v(" "),v("li",[v("p",[t._v("用户行为，例如调整窗口大小，改变字号，或者滚动。")])])]),t._v(" "),v("h4",{attrs:{id:"如何避免重绘或者重排"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何避免重绘或者重排"}},[t._v("#")]),t._v(" 如何避免重绘或者重排？")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("集中改变样式，不要一条一条地修改 DOM 的样式。")])]),t._v(" "),v("li",[v("p",[t._v("不要把 DOM 结点的属性值放在循环里当成循环里的变量。")])]),t._v(" "),v("li",[v("p",[t._v("尽量只修改position：absolute或fixed元素，对其他元素影响不大")])]),t._v(" "),v("li",[v("p",[t._v("提升为合成层")])])]),t._v(" "),v("ul",[v("li",[t._v("优点：")]),t._v(" "),v("li",[v("ul",[v("li",[t._v("合成层的位图，会交由 GPU 合成，比 CPU 处理要快")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("对于 transform 和 opacity 效果，不会触发 layout 和 paint")])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);