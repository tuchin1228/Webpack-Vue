!function(t){function e(e){for(var n,u,a=e[0],l=e[1],s=e[2],f=0,p=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(c&&c(e);p.length;)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={0:0},i=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Webpack-Vue/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var c=l;i.push([8,1]),r()}({4:function(t,e,r){t.exports=r.p+"assets/image/view.png"},8:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(3),i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("我是Children222")]),this._v(" "),e("img",{attrs:{src:r(4),alt:""}}),this._v(" "),e("div",{staticClass:"box"})])}],u={created:function(){console.log("Arrivals child")}},a=r(0),l=Object(a.a)(u,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),i,!1,null,"16629d86",null).exports;n.a.use(o.a);var s=[{path:"/child",name:"Child",component:l}],c=new o.a({routes:s}),f={data:function(){return{text:"vue-test"}}},p=Object(a.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.text))]),this._v(" "),e("router-link",{attrs:{to:"/child"}},[this._v("go child")]),this._v(" "),e("router-view")],1)}),[],!1,null,"1c920d1a",null).exports;new n.a({el:"#app",render:function(t){return t(p)},router:c})}});