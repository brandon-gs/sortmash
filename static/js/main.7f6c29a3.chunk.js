(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),u=n(1),c=n(12),l=n.n(c),s=function(){var e=Object(u.c)((function(e){return e})),t=e.array,n=e.swappers,r=e.sorted,o=e.pivot,i=e.bubbleSort,c=e.mergeSort,s=e.quickSort,h=e.heapSort,f=e.cocktailSort,p=e.insertionSort,g=Math.floor(l()(document).width()/(3*t.length)),v="".concat(g,"px"),m=t.length<5?10:t.length<8?8:t.length<11?6:t.length<20?4:t.length<50?3.5:t.length<100?3:t.length<130?2.5:2,d="".concat(m,"px"),y=g>20?"white":"transparent",E="".concat(g>70?20:g>60?18:g>50?16:g>40?14:g>30?12:g>20?10:8,"px");return a.a.createElement("div",{id:"bodyContainer"},t.length?t.map((function(e,t){var u=n.includes(t)?"rgba(214, 48, 49,0.8)":i.includes(t)||s.includes(t)||h.includes(t)||c.includes(t)||f.includes(t)||p.includes(t)?"rgba(106, 176, 76,0.8)":o===t?"rgba(237, 234, 59, 0.8)":r.includes(t)?"rgba(108, 92, 231,1.0)":"rgba(0, 168, 255,0.8)";return a.a.createElement("div",{className:"arrayElement",key:t,style:{height:"".concat(3*e,"px"),width:v,marginLeft:d,marginRigh:d,backgroundColor:u,color:y,fontSize:E}},e)})):null)},h=n(6),f=function(e){return{type:"SET_ARRAY",array:e}},p=function(e){return{type:"SET_SORTED",sorted:e}},g=function(e){return{type:"SET_RUNNING",isRunning:e}},v=function(e){return{type:"SET_SWAPPERS",swappers:e}},m=function(e){return{type:"SET_BUBBLE",array:e}},d=function(e){return{type:"SET_HEAP",array:e}},y=function(e){return{type:"SET_MERGE",array:e}},E=function(e){return{type:"SET_QUICK",array:e}},b=function(e){return{type:"SET_PIVOT",pivot:e}},S=function(e){return{type:"SET_COCKTAIL",array:e}},T={setArray:f,setAlgorithm:function(e){return{type:"SET_ALGORITHM",algorithm:e}},setSorted:p,setRunning:g,setSwappers:v,setBubble:m,setHeap:d,setMerge:y,setQuick:E,setPivot:b,setCocktail:S,setInsertion:function(e){return{type:"SET_INSERTION",array:e}}};function w(e,t,n,r){if(!(t>=Math.floor(n/2))){var a,o=2*t+1,i=2*t+2<n?2*t+2:null;if(i?(r.push([t,o,i]),a=e[o]>e[i]?o:i):(r.push([t,o]),a=o),e[t]<e[a]){var u=e[a];e[a]=e[t],e[t]=u,r.push([t,a,!0]),r.push(e.slice(0)),r.push([]),w(e,a,n,r)}}}var _=function(e,t,n){var r=e.slice(0),a=[];!function(e,t){var n=Math.floor(e.length/2);for(;n>=0;)w(e,n,e.length,t),n--}(r,a);for(var o=r.length-1;o>0;){a.push([0,o]);var i=r[o];r[o]=r[0],r[0]=i,a.push([0,o,!0]),a.push(r.slice(0)),a.push([]),a.push([!0,o]),w(r,0,o,a),o--}return a.push([!0,o]),function e(t,n,r,a){if(!t.length)return n(d(r.map((function(e,t){return t})))),void setTimeout((function(){n(d([])),n(g(!1))}),900);var o=t[0].length>3?f:3===t[0].length&&"boolean"===typeof t[0][2]||!t[0].length?v:2===t[0].length&&"boolean"===typeof t[0][0]?p:d;n(o(t.shift())),setTimeout((function(){e(t,n,r,a)}),a)}(a,t,r,n),r};var k=function(e,t,n){var r=e.slice(0),a=[],o=function e(t,n,r,a,o){if(1===t.length)return t;var i=Math.floor(t.length/2),u=t.slice(0,i),c=t.slice(i),l=Math.floor((a+1+r)/2),s=e(u,n,r,l-1,o),h=e(c,n,l,a,o),f=!1;s.length+h.length===o.array.length&&(f=!0);return function(e,t,n,r,a,o,i){var u=[],c=a;for(;e.length&&t.length;)n.push([e[0][1],t[0][1]]),e[0][0]<=t[0][0]?(c++,u.push(e.shift())):(n.push([e[0][1],t[0][1],!0]),t[0][1]=c++,u.push(t.shift()),e.forEach((function(e){return e[1]++})),r.array=0===a?u.map((function(e){return e[0]})).concat(e.map((function(e){return e[0]}))).concat(t.map((function(e){return e[0]}))).concat(r.array.slice(o+1)):r.array.slice(0,a).concat(u.map((function(e){return e[0]}))).concat(e.map((function(e){return e[0]}))).concat(t.map((function(e){return e[0]}))).concat(r.array.slice(o+1)),n.push(r.array.concat([c-1,c])),n.push([])),i&&n.push([!0,c-1]);return u.concat(e).concat(t)}(s,h,n,o,r,a,f)}(r.map((function(e,t){return[e,t]})),a,0,r.length-1,{array:r.slice(0)});!function e(t,n,r,a){if(!t.length)return n(y(r.map((function(e,t){return t})))),void setTimeout((function(){n(y([])),n(p(r.map((function(e,t){return t})))),n(g(!1))}),900);var o=t[0].length>3?f:3===t[0].length&&"boolean"===typeof t[0][2]||0===t[0].length?v:2===t[0].length&&"boolean"===typeof t[0][0]?p:y;if(o===f){var i=t.shift();n(o(i.slice(0,i.length-2))),n(v([])),n(y([])),n(v([i[i.length-2],i[i.length-1]])),n(y([i[i.length-2],i[i.length-1]]))}else n(o(t.shift()));setTimeout((function(){e(t,n,r,a)}),a)}(a,t,o,n)};var N=function(e,t,n){var r=e.slice(0),a=[];return function e(t,n,r,a){if(n>=r)return void a.push([!0,n]);var o=n,i=n+1,u=r;a.push(o),a.push([i,u]);for(;u>=i;){if(t[u]<t[o]&&t[i]>t[o]){a.push([i,u,!0]);var c=t[u];t[u]=t[i],t[i]=c,a.push(t.slice(0)),a.push([])}t[u]>=t[o]&&u--,t[i]<=t[o]&&i++,u>=i&&a.push([i,u])}if(a.push([o,u]),o!==u){var l=t[u];t[u]=t[o],t[o]=l,a.push([o,u,!0]),a.push(t.slice(0)),a.push([]),a.push([!0,u])}e(t,n,u-1,a),e(t,u+1,r,a)}(r,0,r.length-1,a),function e(t,n,r,a){if(!t.length)return n(b(null)),n(E(r.map((function(e,t){return t})))),void setTimeout((function(){n(E([])),n(g(!1))}),900);var o=t[0]instanceof Array?t[0].length>3?f:2!==t[0].length?v:2===t[0].length&&"boolean"===typeof t[0][0]?p:E:b;n(o(t.shift())),o===b&&n(E(t.shift()));setTimeout((function(){e(t,n,r,a)}),a)}(a,t,r,n),r};var O=function(e,t,n){for(var r=e.slice(0),a=[],o=!1,i=0,u=0;!o;){for(var c=i;c<r.length-1-u;c++)if(a.push([c,c+1]),r[c]>r[c+1]){a.push([c,c+1,!0]);var l=r[c];r[c]=r[c+1],r[c+1]=l,o=!1,a.push(r.slice(0)),a.push([])}if(a.push([!0,r.length-1-u]),u++,o)break;o=!0;for(var s=r.length-1-u;s>i;s--)if(a.push([s,s-1]),r[s-1]>r[s]){a.push([s,s-1,!0]);var h=r[s];r[s]=r[s-1],r[s-1]=h,o=!1,a.push(r.slice(0)),a.push([])}a.push([!0,i]),i++}!function e(t,n,r,a){if(!t.length)return n(S(r.map((function(e,t){return t})))),void setTimeout((function(){n(S([])),n(p(r.map((function(e,t){return t})))),n(g(!1))}),900);var o=t[0].length>3?f:3===t[0].length||0===t[0].length?v:2===t[0].length&&"boolean"===typeof t[0][0]?p:S;n(o(t.shift())),setTimeout((function(){e(t,n,r,a)}),a)}(a,t,r,n)};var R=function(e,t,n){for(var r=e.slice(0),a=[],o=!1,i=0;!o;){o=!0;for(var u=0;u<r.length-1-i;u++)if(a.push([u,u+1]),r[u]>r[u+1]){a.push([u,u+1,!0]);var c=r[u];r[u]=r[u+1],r[u+1]=c,o=!1,a.push(r.slice(0)),a.push([])}a.push([!0,r.length-1-i]),i++}return function e(t,n,r,a){if(!t.length)return n(m(r.map((function(e,t){return t})))),void setTimeout((function(){n(m([])),n(p(r.map((function(e,t){return t})))),n(g(!1))}),900);var o=t[0].length>3?f:3===t[0].length||0===t[0].length?v:2===t[0].length&&"boolean"===typeof t[0][0]?p:m;n(o(t.shift())),setTimeout((function(){e(t,n,r,a)}),a)}(a,t,r,n),r},A=function(e){var t=e.algorithm,n=e.children,r=Object(u.b)(),o=Object(u.c)((function(e){return e})),i=o.array,c=o.isRunning,l=570-Math.pow(i.length,2)>0?570-Math.pow(i.length,2):0,s=c?"rgba(214, 29, 29, 1)":"white",h=c?"not-allowed":"pointer";return a.a.createElement("div",{className:"menu__item",style:{cursor:h},onClick:c?null:function(){!function(e,t,n){var a="bubble"===e?R:"hope"===e?_:"merge"===e?k:"quick"===e?N:"cocktail"===e?O:null;r(T.setSorted([])),r(T.setRunning(!0)),a(t,r,n)}(t,i,l)}},a.a.createElement("div",{className:"menu__link",style:{color:s}},n))},I=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})).isRunning,n=function(t){for(var n=[];n.length<t;)n.push(Math.floor(200*Math.random())+10);e(T.setArray(n)),e(T.setSorted([]))},o=Object(r.useState)("menu--show"),i=Object(h.a)(o,2),c=i[0],l=i[1],s=Object(r.useState)(!0),f=Object(h.a)(s,2),p=f[0],g=f[1],v=Object(r.useState)(50),m=Object(h.a)(v,2),d=m[0],y=m[1];Object(r.useEffect)((function(){p&&(n(d),g(!1))}),[]);var E=t?"rgba(214, 29, 29, 1)":"white",b=t?"not-allowed":"pointer";return a.a.createElement("header",{className:"header"},a.a.createElement("div",{className:"top-bar"},a.a.createElement("div",{onClick:function(){return l("menu"===c?"menu--show":"menu")},className:"icon-menu"},a.a.createElement("div",{className:"icon-menu__bar"}))),a.a.createElement("nav",null,a.a.createElement("div",{className:c},a.a.createElement("div",{className:"menu__item",style:{cursor:b},onClick:function(){return t?null:n(d)}},a.a.createElement("div",{className:"menu__link",style:{color:E}},"Generate new Array")),a.a.createElement("div",{className:"menu__item",style:{cursor:b}},a.a.createElement("div",{className:"menu__link",style:{color:E}},"Change Array Size & Sorting speed",a.a.createElement("input",{className:"range",type:"range",min:"4",value:d,max:"100",disabled:t?"disabled":null,onChange:function(e){n(e.target.value),y(e.target.value)}}))),a.a.createElement(A,{algorithm:"hope"},"Hope sort"),a.a.createElement(A,{algorithm:"merge"},"Merge sort"),a.a.createElement(A,{algorithm:"quick"},"Quick sort"),a.a.createElement(A,{algorithm:"cocktail"},"Cocktail sort"),a.a.createElement(A,{algorithm:"bubble"},"Bubble sort"))))};var C=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(I,null),a.a.createElement(s,null))},M=n(4),j=[],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARRAY":return t.array;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bubbleSort",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALGORITHM":return t.algorithm;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RUNNING":return t.isRunning;default:return e}},L=[],x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SWAPPERS":return t.swappers.length?e.concat(t.swappers):[];default:return e}},H=[],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORTED":return t.sorted.length?e.concat(t.sorted):[];default:return e}},q=[],K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BUBBLE":return t.array;default:return e}},Q=[],W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HEAP":return t.array;default:return e}},z=[],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MERGE":return t.array;default:return e}},J=[],V=[],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COCKTAIL":return t.array;default:return e}},$=[],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INSERTION":return t.array;default:return e}},X=Object(M.b)({algorithm:P,array:B,isRunning:G,swappers:x,sorted:U,bubbleSort:K,heapSort:W,mergeSort:D,quickSort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUICK":return t.array;default:return e}},cocktailSort:Y,insertionSort:F,pivot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PIVOT":return t.pivot;default:return e}}}),Z=Object(M.c)(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(u.a,{store:Z},a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.7f6c29a3.chunk.js.map