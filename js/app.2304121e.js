(function(){"use strict";var n={9442:function(n,t,o){var e=o(7195),r=function(){var n=this,t=n._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],i={name:"ParenT",components:{},data(){return{render:0}},methods:{rendeDom(){this.render++}}},c=i,l=o(1001),h=(0,l.Z)(c,r,u,!1,null,null,null),a=h.exports,f=o(2241),s=function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v("Home")]),t("button",{on:{click:function(t){return n.changeRoute("child-one")}}},[n._v("Go to Child one")]),t("button",{on:{click:function(t){return n.changeRoute("child-two")}}},[n._v("Go to Child two")])])},d=[],p=(o(7658),{name:"HomePage",methods:{changeRoute(n){console.log("path",n),this.$router.push({path:`/${n}`})}}}),v=p,m=(0,l.Z)(v,s,d,!1,null,null,null),g=m.exports,b=function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v("Child one")]),t("button",{on:{click:function(t){return n.changeRoute("/child-two")}}},[n._v("Go to Child two")]),t("button",{on:{click:function(t){return n.changeRoute("/")}}},[n._v("Go to Home")])])},_=[],w={name:"ChildOnes",methods:{changeRoute(n){console.log("path",n),this.$router.push({path:n})}}},O=w,C=(0,l.Z)(O,b,_,!1,null,null,null),k=C.exports,y=function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v("Child Two")]),t("button",{on:{click:function(t){return n.changeRoute("/child-one")}}},[n._v("Go to Child one")]),t("button",{on:{click:function(t){return n.changeRoute("/")}}},[n._v("Go to Home")])])},R=[],Z={name:"ChildTwo",methods:{changeRoute(n){console.log("path",n),this.$router.push({path:n})}}},x=Z,P=(0,l.Z)(x,y,R,!1,null,null,null),j=P.exports;e.ZP.use(f.Z);const G=[{path:"/",name:"Home",component:g},{path:"/home",name:"Home",component:g},{path:"/child-one",name:"ChildOne",component:k},{path:"/child-two",name:"ChildOne",component:j}];var H=new f.Z({routes:G,mode:"history"});e.ZP.config.productionTip=!1,new e.ZP({router:H,render:n=>n(a)}).$mount("#app")}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var u=t[e]={exports:{}};return n[e](u,u.exports,o),u.exports}o.m=n,function(){var n=[];o.O=function(t,e,r,u){if(!e){var i=1/0;for(a=0;a<n.length;a++){e=n[a][0],r=n[a][1],u=n[a][2];for(var c=!0,l=0;l<e.length;l++)(!1&u||i>=u)&&Object.keys(o.O).every((function(n){return o.O[n](e[l])}))?e.splice(l--,1):(c=!1,u<i&&(i=u));if(c){n.splice(a--,1);var h=r();void 0!==h&&(t=h)}}return t}u=u||0;for(var a=n.length;a>0&&n[a-1][2]>u;a--)n[a]=n[a-1];n[a]=[e,r,u]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,u,i=e[0],c=e[1],l=e[2],h=0;if(i.some((function(t){return 0!==n[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(l)var a=l(o)}for(t&&t(e);h<i.length;h++)u=i[h],o.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return o.O(a)},e=self["webpackChunkemo"]=self["webpackChunkemo"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(9442)}));e=o.O(e)})();
//# sourceMappingURL=app.2304121e.js.map