(this.webpackJsonpshoptimize=this.webpackJsonpshoptimize||[]).push([[0],{43:function(e,t,n){e.exports=n(72)},48:function(e,t,n){},49:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),i=n.n(o),c=(n(48),n(49),n(11)),l=n(34),u=n(36),s=n(13);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={authenticated:!1,loading:!1};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={loading:!1,errors:null},y=[u.a],b=Object(c.combineReducers)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return h({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return f;case"SET_USER":return h({authenticated:!0,loading:!1},t.payload);case"LOADING_USER":return h({},e,{loading:!0});default:return e}},uiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return p({},e,{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return p({},e,{loading:!1,errors:null});case"LOADING_UI":return p({},e,{loading:!0});case"STOP_LOADING_UI":return p({},e,{loading:!1});default:return e}}}),E=Object(l.composeWithDevTools)(c.applyMiddleware.apply(void 0,y)),m=Object(c.createStore)(b,{},E),O=n(15),w=n(12),j=n(10),S=n(37),k=(Object(O.b)((function(e){return{auth:e.authReducer}}))((function(e){var t=e.component,n=e.auth,r=Object(S.a)(e,["component","auth"]);return a.a.createElement(j.b,Object.assign({},r,{render:function(e){return n.loading?a.a.createElement("div",null,"loading..."):n.isAuthenticated?a.a.createElement(t,e):a.a.createElement(j.a,{to:"/dashboard"})}}))})),n(16)),A=n.n(k);var P="https://asia-northeast1-shoptimizeprime.cloudfunctions.net/api",C={signup:function(e){return function(t){console.log(e),console.log(P);t({type:"LOADING_UI"}),A.a.post("".concat(P,"/signup"),e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}}},D=Object(O.b)((function(e){return{user:e.user,UI:e.UI}}),C)((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Home Page"),a.a.createElement(w.b,{to:"/shoptimize/floormap"},"floormap"))})),L=n(9),R=n(14),T=n(41),_=n(39),I=n(42),N=4,x=function(e){return Math.floor((window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight)/e)},U=N*x(N),M=4*x(N),z=n(40),W=x(N),q=function(e,t){return Math.floor(Number(e)/W)+Math.floor(Number(t)/W)*N},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?{x:Number(e)%N,y:Math.floor(e/N)}:{x:Number(e)%N*W,y:Math.floor(Number(e)/N)*W}},G=function(){return q(W*N-W,4*W-W)},F=function(e,t,n){for(var r=[],a=H(e),o=a.x,i=a.y,c=o;c<o+t;c+=W)for(var l=i;l<i+n;l+=W){var u=q(c,l);r.push(u)}return r},V=function(e,t,n){var r=t,a=N,o=G(),i=[N-1,4*N-N],c=Object(z.a)(i,2),l=c[0],u=c[1];0===r?(e.addEdge(r,r+1,n),e.addEdge(r,r+a,n)):r===l?(e.addEdge(r,r+a,n),e.addEdge(r,r-1,n)):r===o?(e.addEdge(r,r-a,n),e.addEdge(r,r-1,n)):r===u?(e.addEdge(r,r-a,n),e.addEdge(r,r+1,n)):r>0&&r<l?(e.addEdge(r,r+1,n),e.addEdge(r,r+a,n),e.addEdge(r,r-1,n)):r!==l&&r!==o&&(r+1)%N===0?(e.addEdge(r,r-a,n),e.addEdge(r,r+a,n),e.addEdge(r,r-1,n)):r>u&&r<o?(e.addEdge(r,r-a,n),e.addEdge(r,r+1,n),e.addEdge(r,r-1,n)):0!==r&&r!==u&&r%N===0?(e.addEdge(r,r-a,n),e.addEdge(r,r+1,n),e.addEdge(r,r+a,n)):(e.addEdge(r,r-a,n),e.addEdge(r,r+1,n),e.addEdge(r,r+a,n),e.addEdge(r,r-1,n))},B=function(){function e(){Object(L.a)(this,e),this.adjacencyList={},this.wallArr=new Array(G()+1).fill(1)}return Object(R.a)(e,[{key:"addVertex",value:function(e){var t=String(e);this.adjacencyList[t]||(this.adjacencyList[t]=[])}},{key:"addEdge",value:function(e,t,n){console.log(this.wallArr);var r=String(e),a=String(t);this._addWallEdge(r,a,n)}},{key:"_addWallEdge",value:function(e,t,n){1===this.wallArr[e]&&1===this.wallArr[t]&&this._addEdge(e,t,n)}},{key:"_addEdge",value:function(e,t,n){this.adjacencyList[e].push({node:t,weight:n}),this.adjacencyList[t].push({node:e,weight:n})}}]),e}(),J=function e(t,n){Object(L.a)(this,e),this.value=t,this.priority=n},K=function(){function e(){Object(L.a)(this,e),this.values=[]}return Object(R.a)(e,[{key:"enqueue",value:function(e,t){var n=new J(e,t);this.values.push(n),this.bubbleUp()}},{key:"bubbleUp",value:function(){for(var e=this.values.length-1,t=this.values[e];e>0;){var n=Math.floor((e-1)/2),r=this.values[n];if(t.priority>=r.priority)break;this.values[n]=t,this.values[e]=r,e=n}}},{key:"dequeue",value:function(){var e=this.values[0],t=this.values.pop();return this.values.length>0&&(this.values[0]=t,this.bubbleDown()),e}},{key:"bubbleDown",value:function(){for(var e=0,t=this.values.length,n=this.values[0];this.values;){var r=2*e+1,a=2*e+2,o=void 0,i=void 0,c=null;if(r<t&&(o=this.values[r]).priority<n.priority&&(c=r),a<t&&(i=this.values[a],(null===c&&i.priority<n.priority||null!==c&&i.priority<o.priority)&&(c=a)),null===c)break;this.values[e]=this.values[c],this.values[c]=n,e=c}}}]),e}();var Y,$,Q=function(e,t,n){var r,a=new K,o={},i={},c=[],l=String(e),u=String(t);for(Object.keys(n.adjacencyList).forEach((function(e){console.log(typeof e),e===l?(o[e]=0,a.enqueue(e,0)):(o[e]=1/0,a.enqueue(e,1/0)),i[e]=null}));a.values.length;){if(r=a.dequeue().value,console.log("currentKey",r),r===u){for(;i[r];)c.push(r),r=i[r];break}if(r||o[r]!==1/0)for(var s=0;s<n.adjacencyList[r].length;s++){var d=n.adjacencyList[r][s],h=o[r]+d.weight,f=d.node;h<o[d.node]&&(o[f]=h,i[f]=r,a.enqueue(f,h))}}return c=c.concat(r).reverse()},X={root:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},Z=function(e){function t(){var e;return Object(L.a)(this,t),(e=Object(T.a)(this,Object(_.a)(t).call(this))).fillColor=function(t,n){var r=e.state.tileSize,a=H(t),o=a.x,i=a.y;Y.beginPath(),Y.rect(o,i,r,r),Y.fillStyle=n,Y.fill()},e.drawLayout=function(){for(var t=0;t<$.wallArr.length;t++)$.addVertex(t),5===$.wallArr[t]?e.fillColor(t,"green"):1===$.wallArr[t]&&e.fillColor(t,"grey")},e.linkConnections=function(){for(var e=0;e<$.wallArr.length;e++)V($,e,5)},e.addCategory=function(t,n,r){var a=e.state.tileSize,o=F(t,n*a,r*a);console.log(o);for(var i=0;i<o.length;i++)$.wallArr[o[i]]=5},e.addMapCategories=function(){e.addCategory(4,1,2),e.addCategory(10,1,2)},e.state={tileSize:x(N)},e}return Object(I.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas;Y=e.getContext("2d"),$=new B,this.addMapCategories(),this.drawLayout(),this.linkConnections(),console.log($.adjacencyList);var t=Q(12,3,$);console.log(t)}},{key:"setStateAsync",value:function(e){var t=this;return new Promise((function(n){t.setState(e,n)}))}},{key:"render",value:function(){return a.a.createElement("div",{style:X.root},a.a.createElement("canvas",{ref:"canvas",width:U,height:M},"Your browser doesn't support the HTML5 CANVAS tag."))}}]),t}(a.a.Component),ee=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,null))},te="shoptimize",ne=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j.b,{exact:!0,path:"/",component:D}),a.a.createElement(j.b,{exact:!0,path:"/".concat(te),component:D}),a.a.createElement(j.b,{exact:!0,path:"/".concat(te,"/floormap"),component:ee}))};var re=function(){return a.a.createElement(O.a,{store:m},a.a.createElement(w.a,null,a.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e42ef1cd.chunk.js.map