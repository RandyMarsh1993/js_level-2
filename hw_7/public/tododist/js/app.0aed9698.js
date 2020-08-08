(function(e){function t(t){for(var o,r,a=t[0],c=t[1],s=t[2],l=0,d=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==i[a]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-70615e78":"a13df171"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-70615e78":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-70615e78":"8e17b226"}[e]+".css",i=c.p+o,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var s=u[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===i))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){s=d[a],l=s.getAttribute("data-href");if(l===o||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||i,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],p.parentNode.removeChild(p),n(u)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"0d3f":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",e._l(e.todos,(function(t,o){return n("TodoItem",{key:t.id,attrs:{todo:t,index:o},on:{remove_todo:e.removeTodo}})})),1)])},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("span",{class:{done:e.todo.completed}},[n("input",{attrs:{type:"checkbox"},on:{change:function(t){e.todo.completed=!e.todo.completed}}}),n("strong",[e._v(e._s(e.index+1))]),e._v(" "+e._s(e._f("uppercase")(e.todo.title))+" ")]),n("button",{staticClass:"removeBtn",on:{click:function(t){return e.$emit("remove_todo",e.todo.id)}}},[e._v("×")])])},u=[],a=(n("a9e3"),{props:{todo:{type:Object,required:!0},index:Number},filters:{uppercase:function(e){return e.toUpperCase()}}}),c=a,s=(n("64d0"),n("2877")),l=Object(s["a"])(c,i,u,!1,null,"53e15e6d",null),d=l.exports,p={props:["todos"],components:{TodoItem:d},methods:{removeTodo:function(e){this.$emit("remove_todo",e)}}},f=p,m=(n("a4e1"),Object(s["a"])(f,o,r,!1,null,"7505934e",null));t["a"]=m.exports},"2a7e":function(e,t,n){},"387d":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Create")])])},r=[],i=(n("498a"),{data:function(){return{title:""}},methods:{onSubmit:function(){if(this.title.trim()){var e={id:Date.now(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}}}),u=i,a=(n("a49a"),n("2877")),c=Object(a["a"])(u,o,r,!1,null,"5b362d4e",null);t["a"]=c.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Todo application")]),n("hr"),n("router-view")],1)},i=[],u=(n("4de4"),n("d3b7"),n("0d3f")),a=n("387d"),c={name:"App",data:function(){return{todos:[{id:1,title:"Выучить JavaScript",completed:!1},{id:2,title:"Выучить VueJS",completed:!1},{id:3,title:"Сделать что-нибудь крутое",completed:!1}]}},mounted:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=3").then((function(e){return e.json()})).then((function(t){e.todos=t}))},methods:{removeTodo:function(e){this.todos=this.todos.filter((function(t){return t.id!==e}))},addTodo:function(e){this.todos.push(e)}},components:{TodoList:u["a"],AddTodo:a["a"]}},s=c,l=(n("034f"),n("2877")),d=Object(l["a"])(s,r,i,!1,null,null,null),p=d.exports,f=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Home page")]),n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non nesciunt aut autem atque ipsum ratione inventore rem delectus quaerat.")]),n("router-link",{attrs:{to:"/todos"}},[e._v("Todos")])],1)},h=[],v={},b=Object(l["a"])(v,m,h,!1,null,null,null),g=b.exports;o["a"].use(f["a"]);var y=new f["a"]({mode:"history",routes:[{path:"/",component:g},{path:"/todos",component:function(){return n.e("chunk-70615e78").then(n.bind(null,"75cf"))}}]});o["a"].config.productionTip=!1,new o["a"]({router:y,render:function(e){return e(p)}}).$mount("#app")},"5c2f":function(e,t,n){},"64d0":function(e,t,n){"use strict";var o=n("9bd7"),r=n.n(o);r.a},"85ec":function(e,t,n){},"9bd7":function(e,t,n){},a49a:function(e,t,n){"use strict";var o=n("5c2f"),r=n.n(o);r.a},a4e1:function(e,t,n){"use strict";var o=n("2a7e"),r=n.n(o);r.a}});
//# sourceMappingURL=app.0aed9698.js.map