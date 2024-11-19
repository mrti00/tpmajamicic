import{r as mt,c as bt,a as gt,G as Z}from"./index-DSJs8J4a.js";var ut={exports:{}};(function(Q,wt){(function(tt,Y){Q.exports=Y(mt)})(typeof self<"u"?self:bt,tt=>(()=>{var Y={7403:(e,o,t)=>{t.d(o,{default:()=>H});var r=t(4087),i=t.n(r);const a=function(x){return new RegExp(/<[a-z][\s\S]*>/i).test(x)},n=function(x,h){return Math.floor(Math.random()*(h-x+1))+x};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",p="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",v="CALL_FUNCTION",y="ADD_HTML_TAG_ELEMENT",d="CHANGE_DELETE_SPEED",g="CHANGE_DELAY",_="CHANGE_CURSOR",E="PASTE_STRING",S="HTML_TAG";function O(x){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},O(x)}function m(x,h){var T=Object.keys(x);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(x);h&&(j=j.filter(function(F){return Object.getOwnPropertyDescriptor(x,F).enumerable})),T.push.apply(T,j)}return T}function w(x){for(var h=1;h<arguments.length;h++){var T=arguments[h]!=null?arguments[h]:{};h%2?m(Object(T),!0).forEach(function(j){A(x,j,T[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(T)):m(Object(T)).forEach(function(j){Object.defineProperty(x,j,Object.getOwnPropertyDescriptor(T,j))})}return x}function C(x){return function(h){if(Array.isArray(h))return N(h)}(x)||function(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}(x)||function(h,T){if(h){if(typeof h=="string")return N(h,T);var j=Object.prototype.toString.call(h).slice(8,-1);return j==="Object"&&h.constructor&&(j=h.constructor.name),j==="Map"||j==="Set"?Array.from(h):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?N(h,T):void 0}}(x)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function N(x,h){(h==null||h>x.length)&&(h=x.length);for(var T=0,j=new Array(h);T<h;T++)j[T]=x[T];return j}function P(x,h){for(var T=0;T<h.length;T++){var j=h[T];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(x,I(j.key),j)}}function A(x,h,T){return(h=I(h))in x?Object.defineProperty(x,h,{value:T,enumerable:!0,configurable:!0,writable:!0}):x[h]=T,x}function I(x){var h=function(T,j){if(O(T)!=="object"||T===null)return T;var F=T[Symbol.toPrimitive];if(F!==void 0){var s=F.call(T,"string");if(O(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}(x);return O(h)==="symbol"?h:String(h)}const H=function(){function x(j,F){var s=this;if(function(b,L){if(!(b instanceof L))throw new TypeError("Cannot call a class as a function")}(this,x),A(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),A(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),A(this,"setupWrapperElement",function(){s.state.elements.container&&(s.state.elements.wrapper.className=s.options.wrapperClassName,s.state.elements.cursor.className=s.options.cursorClassName,s.state.elements.cursor.innerHTML=s.options.cursor,s.state.elements.container.innerHTML="",s.state.elements.container.appendChild(s.state.elements.wrapper),s.state.elements.container.appendChild(s.state.elements.cursor))}),A(this,"start",function(){return s.state.eventLoopPaused=!1,s.runEventLoop(),s}),A(this,"pause",function(){return s.state.eventLoopPaused=!0,s}),A(this,"stop",function(){return s.state.eventLoop&&((0,r.cancel)(s.state.eventLoop),s.state.eventLoop=null),s}),A(this,"pauseFor",function(b){return s.addEventToQueue(l,{ms:b}),s}),A(this,"typeOutAllStrings",function(){return typeof s.options.strings=="string"?(s.typeString(s.options.strings).pauseFor(s.options.pauseFor),s):(s.options.strings.forEach(function(b){s.typeString(b).pauseFor(s.options.pauseFor).deleteAll(s.options.deleteSpeed)}),s)}),A(this,"typeString",function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(b))return s.typeOutHTMLString(b,L);if(b){var z=(s.options||{}).stringSplitter,k=typeof z=="function"?z(b):b.split("");s.typeCharacters(k,L)}return s}),A(this,"pasteString",function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(b)?s.typeOutHTMLString(b,L,!0):(b&&s.addEventToQueue(E,{character:b,node:L}),s)}),A(this,"typeOutHTMLString",function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,z=arguments.length>2?arguments[2]:void 0,k=function(G){var B=document.createElement("div");return B.innerHTML=G,B.childNodes}(b);if(k.length>0)for(var M=0;M<k.length;M++){var R=k[M],U=R.innerHTML;R&&R.nodeType!==3?(R.innerHTML="",s.addEventToQueue(y,{node:R,parentNode:L}),z?s.pasteString(U,R):s.typeString(U,R)):R.textContent&&(z?s.pasteString(R.textContent,L):s.typeString(R.textContent,L))}return s}),A(this,"deleteAll",function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return s.addEventToQueue(p,{speed:b}),s}),A(this,"changeDeleteSpeed",function(b){if(!b)throw new Error("Must provide new delete speed");return s.addEventToQueue(d,{speed:b}),s}),A(this,"changeDelay",function(b){if(!b)throw new Error("Must provide new delay");return s.addEventToQueue(g,{delay:b}),s}),A(this,"changeCursor",function(b){if(!b)throw new Error("Must provide new cursor");return s.addEventToQueue(_,{cursor:b}),s}),A(this,"deleteChars",function(b){if(!b)throw new Error("Must provide amount of characters to delete");for(var L=0;L<b;L++)s.addEventToQueue(c);return s}),A(this,"callFunction",function(b,L){if(!b||typeof b!="function")throw new Error("Callback must be a function");return s.addEventToQueue(v,{cb:b,thisArg:L}),s}),A(this,"typeCharacters",function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(z){s.addEventToQueue(u,{character:z,node:L})}),s}),A(this,"removeCharacters",function(b){if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(){s.addEventToQueue(c)}),s}),A(this,"addEventToQueue",function(b,L){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.addEventToStateProperty(b,L,z,"eventQueue")}),A(this,"addReverseCalledEvent",function(b,L){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.options.loop?s.addEventToStateProperty(b,L,z,"reverseCalledEvents"):s}),A(this,"addEventToStateProperty",function(b,L){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2],k=arguments.length>3?arguments[3]:void 0,M={eventName:b,eventArgs:L||{}};return s.state[k]=z?[M].concat(C(s.state[k])):[].concat(C(s.state[k]),[M]),s}),A(this,"runEventLoop",function(){s.state.lastFrameTime||(s.state.lastFrameTime=Date.now());var b=Date.now(),L=b-s.state.lastFrameTime;if(!s.state.eventQueue.length){if(!s.options.loop)return;s.state.eventQueue=C(s.state.calledEvents),s.state.calledEvents=[],s.options=w({},s.state.initialOptions)}if(s.state.eventLoop=i()(s.runEventLoop),!s.state.eventLoopPaused){if(s.state.pauseUntil){if(b<s.state.pauseUntil)return;s.state.pauseUntil=null}var z,k=C(s.state.eventQueue),M=k.shift();if(!(L<=(z=M.eventName===f||M.eventName===c?s.options.deleteSpeed==="natural"?n(40,80):s.options.deleteSpeed:s.options.delay==="natural"?n(120,160):s.options.delay))){var R=M.eventName,U=M.eventArgs;switch(s.logInDevMode({currentEvent:M,state:s.state,delay:z}),R){case E:case u:var G=U.character,B=U.node,ot=document.createTextNode(G),V=ot;s.options.onCreateTextNode&&typeof s.options.onCreateTextNode=="function"&&(V=s.options.onCreateTextNode(G,ot)),V&&(B?B.appendChild(V):s.state.elements.wrapper.appendChild(V)),s.state.visibleNodes=[].concat(C(s.state.visibleNodes),[{type:"TEXT_NODE",character:G,node:V}]);break;case c:k.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case l:var ct=M.eventArgs.ms;s.state.pauseUntil=Date.now()+parseInt(ct);break;case v:var at=M.eventArgs,pt=at.cb,lt=at.thisArg;pt.call(lt,{elements:s.state.elements});break;case y:var it=M.eventArgs,q=it.node,J=it.parentNode;J?J.appendChild(q):s.state.elements.wrapper.appendChild(q),s.state.visibleNodes=[].concat(C(s.state.visibleNodes),[{type:S,node:q,parentNode:J||s.state.elements.wrapper}]);break;case p:var ft=s.state.visibleNodes,X=U.speed,$=[];X&&$.push({eventName:d,eventArgs:{speed:X,temp:!0}});for(var st=0,vt=ft.length;st<vt;st++)$.push({eventName:f,eventArgs:{removingCharacterNode:!1}});X&&$.push({eventName:d,eventArgs:{speed:s.options.deleteSpeed,temp:!0}}),k.unshift.apply(k,$);break;case f:var dt=M.eventArgs.removingCharacterNode;if(s.state.visibleNodes.length){var K=s.state.visibleNodes.pop(),ht=K.type,W=K.node,yt=K.character;s.options.onRemoveNode&&typeof s.options.onRemoveNode=="function"&&s.options.onRemoveNode({node:W,character:yt}),W&&W.parentNode.removeChild(W),ht===S&&dt&&k.unshift({eventName:f,eventArgs:{}})}break;case d:s.options.deleteSpeed=M.eventArgs.speed;break;case g:s.options.delay=M.eventArgs.delay;break;case _:s.options.cursor=M.eventArgs.cursor,s.state.elements.cursor.innerHTML=M.eventArgs.cursor}s.options.loop&&(M.eventName===f||M.eventArgs&&M.eventArgs.temp||(s.state.calledEvents=[].concat(C(s.state.calledEvents),[M]))),s.state.eventQueue=k,s.state.lastFrameTime=b}}}),j)if(typeof j=="string"){var nt=document.querySelector(j);if(!nt)throw new Error("Could not find container element");this.state.elements.container=nt}else this.state.elements.container=j;F&&(this.options=w(w({},this.options),F)),this.state.initialOptions=w({},this.options),this.init()}var h,T;return h=x,(T=[{key:"init",value:function(){var j,F;this.setupWrapperElement(),this.addEventToQueue(_,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(F=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(F),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&P(h.prototype,T),Object.defineProperty(h,"prototype",{writable:!1}),x}()},8552:(e,o,t)=>{var r=t(852)(t(5639),"DataView");e.exports=r},1989:(e,o,t)=>{var r=t(1789),i=t(401),a=t(7667),n=t(1327),u=t(1866);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var v=p[f];this.set(v[0],v[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},8407:(e,o,t)=>{var r=t(7040),i=t(4125),a=t(2117),n=t(7518),u=t(4705);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var v=p[f];this.set(v[0],v[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},7071:(e,o,t)=>{var r=t(852)(t(5639),"Map");e.exports=r},3369:(e,o,t)=>{var r=t(4785),i=t(1285),a=t(6e3),n=t(9916),u=t(5265);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var v=p[f];this.set(v[0],v[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},3818:(e,o,t)=>{var r=t(852)(t(5639),"Promise");e.exports=r},8525:(e,o,t)=>{var r=t(852)(t(5639),"Set");e.exports=r},8668:(e,o,t)=>{var r=t(3369),i=t(619),a=t(2385);function n(u){var c=-1,p=u==null?0:u.length;for(this.__data__=new r;++c<p;)this.add(u[c])}n.prototype.add=n.prototype.push=i,n.prototype.has=a,e.exports=n},6384:(e,o,t)=>{var r=t(8407),i=t(7465),a=t(3779),n=t(7599),u=t(4758),c=t(4309);function p(f){var l=this.__data__=new r(f);this.size=l.size}p.prototype.clear=i,p.prototype.delete=a,p.prototype.get=n,p.prototype.has=u,p.prototype.set=c,e.exports=p},2705:(e,o,t)=>{var r=t(5639).Symbol;e.exports=r},1149:(e,o,t)=>{var r=t(5639).Uint8Array;e.exports=r},577:(e,o,t)=>{var r=t(852)(t(5639),"WeakMap");e.exports=r},4963:e=>{e.exports=function(o,t){for(var r=-1,i=o==null?0:o.length,a=0,n=[];++r<i;){var u=o[r];t(u,r,o)&&(n[a++]=u)}return n}},4636:(e,o,t)=>{var r=t(2545),i=t(5694),a=t(1469),n=t(4144),u=t(5776),c=t(6719),p=Object.prototype.hasOwnProperty;e.exports=function(f,l){var v=a(f),y=!v&&i(f),d=!v&&!y&&n(f),g=!v&&!y&&!d&&c(f),_=v||y||d||g,E=_?r(f.length,String):[],S=E.length;for(var O in f)!l&&!p.call(f,O)||_&&(O=="length"||d&&(O=="offset"||O=="parent")||g&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||u(O,S))||E.push(O);return E}},2488:e=>{e.exports=function(o,t){for(var r=-1,i=t.length,a=o.length;++r<i;)o[a+r]=t[r];return o}},2908:e=>{e.exports=function(o,t){for(var r=-1,i=o==null?0:o.length;++r<i;)if(t(o[r],r,o))return!0;return!1}},8470:(e,o,t)=>{var r=t(7813);e.exports=function(i,a){for(var n=i.length;n--;)if(r(i[n][0],a))return n;return-1}},8866:(e,o,t)=>{var r=t(2488),i=t(1469);e.exports=function(a,n,u){var c=n(a);return i(a)?c:r(c,u(a))}},4239:(e,o,t)=>{var r=t(2705),i=t(9607),a=t(2333),n=r?r.toStringTag:void 0;e.exports=function(u){return u==null?u===void 0?"[object Undefined]":"[object Null]":n&&n in Object(u)?i(u):a(u)}},9454:(e,o,t)=>{var r=t(4239),i=t(7005);e.exports=function(a){return i(a)&&r(a)=="[object Arguments]"}},939:(e,o,t)=>{var r=t(2492),i=t(7005);e.exports=function a(n,u,c,p,f){return n===u||(n==null||u==null||!i(n)&&!i(u)?n!=n&&u!=u:r(n,u,c,p,a,f))}},2492:(e,o,t)=>{var r=t(6384),i=t(7114),a=t(8351),n=t(6096),u=t(4160),c=t(1469),p=t(4144),f=t(6719),l="[object Arguments]",v="[object Array]",y="[object Object]",d=Object.prototype.hasOwnProperty;e.exports=function(g,_,E,S,O,m){var w=c(g),C=c(_),N=w?v:u(g),P=C?v:u(_),A=(N=N==l?y:N)==y,I=(P=P==l?y:P)==y,H=N==P;if(H&&p(g)){if(!p(_))return!1;w=!0,A=!1}if(H&&!A)return m||(m=new r),w||f(g)?i(g,_,E,S,O,m):a(g,_,N,E,S,O,m);if(!(1&E)){var x=A&&d.call(g,"__wrapped__"),h=I&&d.call(_,"__wrapped__");if(x||h){var T=x?g.value():g,j=h?_.value():_;return m||(m=new r),O(T,j,E,S,m)}}return!!H&&(m||(m=new r),n(g,_,E,S,O,m))}},8458:(e,o,t)=>{var r=t(3560),i=t(5346),a=t(3218),n=t(346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,p=Object.prototype,f=c.toString,l=p.hasOwnProperty,v=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(y){return!(!a(y)||i(y))&&(r(y)?v:u).test(n(y))}},8749:(e,o,t)=>{var r=t(4239),i=t(1780),a=t(7005),n={};n["[object Float32Array]"]=n["[object Float64Array]"]=n["[object Int8Array]"]=n["[object Int16Array]"]=n["[object Int32Array]"]=n["[object Uint8Array]"]=n["[object Uint8ClampedArray]"]=n["[object Uint16Array]"]=n["[object Uint32Array]"]=!0,n["[object Arguments]"]=n["[object Array]"]=n["[object ArrayBuffer]"]=n["[object Boolean]"]=n["[object DataView]"]=n["[object Date]"]=n["[object Error]"]=n["[object Function]"]=n["[object Map]"]=n["[object Number]"]=n["[object Object]"]=n["[object RegExp]"]=n["[object Set]"]=n["[object String]"]=n["[object WeakMap]"]=!1,e.exports=function(u){return a(u)&&i(u.length)&&!!n[r(u)]}},280:(e,o,t)=>{var r=t(5726),i=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(n){if(!r(n))return i(n);var u=[];for(var c in Object(n))a.call(n,c)&&c!="constructor"&&u.push(c);return u}},2545:e=>{e.exports=function(o,t){for(var r=-1,i=Array(o);++r<o;)i[r]=t(r);return i}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var r=t(5639)["__core-js_shared__"];e.exports=r},7114:(e,o,t)=>{var r=t(8668),i=t(2908),a=t(4757);e.exports=function(n,u,c,p,f,l){var v=1&c,y=n.length,d=u.length;if(y!=d&&!(v&&d>y))return!1;var g=l.get(n),_=l.get(u);if(g&&_)return g==u&&_==n;var E=-1,S=!0,O=2&c?new r:void 0;for(l.set(n,u),l.set(u,n);++E<y;){var m=n[E],w=u[E];if(p)var C=v?p(w,m,E,u,n,l):p(m,w,E,n,u,l);if(C!==void 0){if(C)continue;S=!1;break}if(O){if(!i(u,function(N,P){if(!a(O,P)&&(m===N||f(m,N,c,p,l)))return O.push(P)})){S=!1;break}}else if(m!==w&&!f(m,w,c,p,l)){S=!1;break}}return l.delete(n),l.delete(u),S}},8351:(e,o,t)=>{var r=t(2705),i=t(1149),a=t(7813),n=t(7114),u=t(8776),c=t(1814),p=r?r.prototype:void 0,f=p?p.valueOf:void 0;e.exports=function(l,v,y,d,g,_,E){switch(y){case"[object DataView]":if(l.byteLength!=v.byteLength||l.byteOffset!=v.byteOffset)return!1;l=l.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(l.byteLength!=v.byteLength||!_(new i(l),new i(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+l,+v);case"[object Error]":return l.name==v.name&&l.message==v.message;case"[object RegExp]":case"[object String]":return l==v+"";case"[object Map]":var S=u;case"[object Set]":var O=1&d;if(S||(S=c),l.size!=v.size&&!O)return!1;var m=E.get(l);if(m)return m==v;d|=2,E.set(l,v);var w=n(S(l),S(v),d,g,_,E);return E.delete(l),w;case"[object Symbol]":if(f)return f.call(l)==f.call(v)}return!1}},6096:(e,o,t)=>{var r=t(8234),i=Object.prototype.hasOwnProperty;e.exports=function(a,n,u,c,p,f){var l=1&u,v=r(a),y=v.length;if(y!=r(n).length&&!l)return!1;for(var d=y;d--;){var g=v[d];if(!(l?g in n:i.call(n,g)))return!1}var _=f.get(a),E=f.get(n);if(_&&E)return _==n&&E==a;var S=!0;f.set(a,n),f.set(n,a);for(var O=l;++d<y;){var m=a[g=v[d]],w=n[g];if(c)var C=l?c(w,m,g,n,a,f):c(m,w,g,a,n,f);if(!(C===void 0?m===w||p(m,w,u,c,f):C)){S=!1;break}O||(O=g=="constructor")}if(S&&!O){var N=a.constructor,P=n.constructor;N==P||!("constructor"in a)||!("constructor"in n)||typeof N=="function"&&N instanceof N&&typeof P=="function"&&P instanceof P||(S=!1)}return f.delete(a),f.delete(n),S}},1957:(e,o,t)=>{var r=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=r},8234:(e,o,t)=>{var r=t(8866),i=t(9551),a=t(3674);e.exports=function(n){return r(n,a,i)}},5050:(e,o,t)=>{var r=t(7019);e.exports=function(i,a){var n=i.__data__;return r(a)?n[typeof a=="string"?"string":"hash"]:n.map}},852:(e,o,t)=>{var r=t(8458),i=t(7801);e.exports=function(a,n){var u=i(a,n);return r(u)?u:void 0}},9607:(e,o,t)=>{var r=t(2705),i=Object.prototype,a=i.hasOwnProperty,n=i.toString,u=r?r.toStringTag:void 0;e.exports=function(c){var p=a.call(c,u),f=c[u];try{c[u]=void 0;var l=!0}catch{}var v=n.call(c);return l&&(p?c[u]=f:delete c[u]),v}},9551:(e,o,t)=>{var r=t(4963),i=t(479),a=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols,u=n?function(c){return c==null?[]:(c=Object(c),r(n(c),function(p){return a.call(c,p)}))}:i;e.exports=u},4160:(e,o,t)=>{var r=t(8552),i=t(7071),a=t(3818),n=t(8525),u=t(577),c=t(4239),p=t(346),f="[object Map]",l="[object Promise]",v="[object Set]",y="[object WeakMap]",d="[object DataView]",g=p(r),_=p(i),E=p(a),S=p(n),O=p(u),m=c;(r&&m(new r(new ArrayBuffer(1)))!=d||i&&m(new i)!=f||a&&m(a.resolve())!=l||n&&m(new n)!=v||u&&m(new u)!=y)&&(m=function(w){var C=c(w),N=C=="[object Object]"?w.constructor:void 0,P=N?p(N):"";if(P)switch(P){case g:return d;case _:return f;case E:return l;case S:return v;case O:return y}return C}),e.exports=m},7801:e=>{e.exports=function(o,t){return o==null?void 0:o[t]}},1789:(e,o,t)=>{var r=t(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var r=t(4536),i=Object.prototype.hasOwnProperty;e.exports=function(a){var n=this.__data__;if(r){var u=n[a];return u==="__lodash_hash_undefined__"?void 0:u}return i.call(n,a)?n[a]:void 0}},1327:(e,o,t)=>{var r=t(4536),i=Object.prototype.hasOwnProperty;e.exports=function(a){var n=this.__data__;return r?n[a]!==void 0:i.call(n,a)}},1866:(e,o,t)=>{var r=t(4536);e.exports=function(i,a){var n=this.__data__;return this.size+=this.has(i)?0:1,n[i]=r&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,r){var i=typeof t;return!!(r=r??9007199254740991)&&(i=="number"||i!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<r}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var r,i=t(4429),a=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(n){return!!a&&a in n}},5726:e=>{var o=Object.prototype;e.exports=function(t){var r=t&&t.constructor;return t===(typeof r=="function"&&r.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var r=t(8470),i=Array.prototype.splice;e.exports=function(a){var n=this.__data__,u=r(n,a);return!(u<0||(u==n.length-1?n.pop():i.call(n,u,1),--this.size,0))}},2117:(e,o,t)=>{var r=t(8470);e.exports=function(i){var a=this.__data__,n=r(a,i);return n<0?void 0:a[n][1]}},7518:(e,o,t)=>{var r=t(8470);e.exports=function(i){return r(this.__data__,i)>-1}},4705:(e,o,t)=>{var r=t(8470);e.exports=function(i,a){var n=this.__data__,u=r(n,i);return u<0?(++this.size,n.push([i,a])):n[u][1]=a,this}},4785:(e,o,t)=>{var r=t(1989),i=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||i),string:new r}}},1285:(e,o,t)=>{var r=t(5050);e.exports=function(i){var a=r(this,i).delete(i);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var r=t(5050);e.exports=function(i){return r(this,i).get(i)}},9916:(e,o,t)=>{var r=t(5050);e.exports=function(i){return r(this,i).has(i)}},5265:(e,o,t)=>{var r=t(5050);e.exports=function(i,a){var n=r(this,i),u=n.size;return n.set(i,a),this.size+=n.size==u?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(i,a){r[++t]=[a,i]}),r}},4536:(e,o,t)=>{var r=t(852)(Object,"create");e.exports=r},6916:(e,o,t)=>{var r=t(5569)(Object.keys,Object);e.exports=r},1167:(e,o,t)=>{e=t.nmd(e);var r=t(1957),i=o&&!o.nodeType&&o,a=i&&e&&!e.nodeType&&e,n=a&&a.exports===i&&r.process,u=function(){try{return a&&a.require&&a.require("util").types||n&&n.binding&&n.binding("util")}catch{}}();e.exports=u},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(r){return o(t(r))}}},5639:(e,o,t)=>{var r=t(1957),i=typeof self=="object"&&self&&self.Object===Object&&self,a=r||i||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(i){r[++t]=i}),r}},7465:(e,o,t)=>{var r=t(8407);e.exports=function(){this.__data__=new r,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,r=t.delete(o);return this.size=t.size,r}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var r=t(8407),i=t(7071),a=t(3369);e.exports=function(n,u){var c=this.__data__;if(c instanceof r){var p=c.__data__;if(!i||p.length<199)return p.push([n,u]),this.size=++c.size,this;c=this.__data__=new a(p)}return c.set(n,u),this.size=c.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var r=t(9454),i=t(7005),a=Object.prototype,n=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(p){return i(p)&&n.call(p,"callee")&&!u.call(p,"callee")};e.exports=c},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var r=t(3560),i=t(1780);e.exports=function(a){return a!=null&&i(a.length)&&!r(a)}},4144:(e,o,t)=>{e=t.nmd(e);var r=t(5639),i=t(5062),a=o&&!o.nodeType&&o,n=a&&e&&!e.nodeType&&e,u=n&&n.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||i;e.exports=c},8446:(e,o,t)=>{var r=t(939);e.exports=function(i,a){return r(i,a)}},3560:(e,o,t)=>{var r=t(4239),i=t(3218);e.exports=function(a){if(!i(a))return!1;var n=r(a);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var r=t(8749),i=t(1717),a=t(1167),n=a&&a.isTypedArray,u=n?i(n):r;e.exports=u},3674:(e,o,t)=>{var r=t(4636),i=t(280),a=t(8612);e.exports=function(n){return a(n)?r(n):i(n)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,r,i,a,n;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,i=(o=function(){var u;return 1e9*(u=t())[0]+u[1]})(),n=1e9*process.uptime(),a=i-n):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var r=t(75),i=typeof window>"u"?t.g:window,a=["moz","webkit"],n="AnimationFrame",u=i["request"+n],c=i["cancel"+n]||i["cancelRequest"+n],p=0;!u&&p<a.length;p++)u=i[a[p]+"Request"+n],c=i[a[p]+"Cancel"+n]||i[a[p]+"CancelRequest"+n];if(!u||!c){var f=0,l=0,v=[];u=function(y){if(v.length===0){var d=r(),g=Math.max(0,16.666666666666668-(d-f));f=g+d,setTimeout(function(){var _=v.slice(0);v.length=0;for(var E=0;E<_.length;E++)if(!_[E].cancelled)try{_[E].callback(f)}catch(S){setTimeout(function(){throw S},0)}},Math.round(g))}return v.push({handle:++l,callback:y,cancelled:!1}),l},c=function(y){for(var d=0;d<v.length;d++)v[d].handle===y&&(v[d].cancelled=!0)}}e.exports=function(y){return u.call(i,y)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(y){y||(y=i),y.requestAnimationFrame=u,y.cancelAnimationFrame=c}},8156:e=>{e.exports=tt}},et={};function D(e){var o=et[e];if(o!==void 0)return o.exports;var t=et[e]={id:e,loaded:!1,exports:{}};return Y[e].call(t.exports,t,t.exports,D),t.loaded=!0,t.exports}D.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return D.d(o,{a:o}),o},D.d=(e,o)=>{for(var t in o)D.o(o,t)&&!D.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},D.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),D.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),D.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var rt={};return(()=>{D.d(rt,{default:()=>v});var e=D(8156),o=D.n(e),t=D(7403),r=D(8446),i=D.n(r);function a(y){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},a(y)}function n(y,d){for(var g=0;g<d.length;g++){var _=d[g];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(y,f(_.key),_)}}function u(y,d){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,_){return g.__proto__=_,g},u(y,d)}function c(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function p(y){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)},p(y)}function f(y){var d=function(g,_){if(a(g)!=="object"||g===null)return g;var E=g[Symbol.toPrimitive];if(E!==void 0){var S=E.call(g,"string");if(a(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(y);return a(d)==="symbol"?d:String(d)}var l=function(y){(function(m,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(w&&w.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),w&&u(m,w)})(O,y);var d,g,_,E,S=(_=O,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var m,w=p(_);if(E){var C=p(this).constructor;m=Reflect.construct(w,arguments,C)}else m=w.apply(this,arguments);return function(N,P){if(P&&(a(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(N)}(this,m)});function O(){var m,w,C,N;(function(H,x){if(!(H instanceof x))throw new TypeError("Cannot call a class as a function")})(this,O);for(var P=arguments.length,A=new Array(P),I=0;I<P;I++)A[I]=arguments[I];return w=c(m=S.call.apply(S,[this].concat(A))),N={instance:null},(C=f(C="state"))in w?Object.defineProperty(w,C,{value:N,enumerable:!0,configurable:!0,writable:!0}):w[C]=N,m}return d=O,(g=[{key:"componentDidMount",value:function(){var m=this,w=new t.default(this.typewriter,this.props.options);this.setState({instance:w},function(){var C=m.props.onInit;C&&C(w)})}},{key:"componentDidUpdate",value:function(m){i()(this.props.options,m.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var m=this,w=this.props.component;return o().createElement(w,{ref:function(C){return m.typewriter=C},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&n(d.prototype,g),Object.defineProperty(d,"prototype",{writable:!1}),O}(e.Component);l.defaultProps={component:"div"};const v=l})(),rt.default})())})(ut);var _t=ut.exports;const jt=gt(_t);function Et(Q){return Z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M208 25C106.8 25 25 106.8 25 208s81.8 183 183 183 183-81.8 183-183S309.2 25 208 25zm121.3 22.81c21 15.91 38.7 35.83 52.1 58.59 49.1 41.7 93.4 100.9 92 179.2-.6 34.4-7.3 75.5-19.4 110.3-12.1 34.7-30.1 62.3-49.7 71.7-3.9 1.8-9.5 2.2-17.5.6-8-1.7-17.9-5.3-29.3-10-22.7-9.5-51.2-23.4-84.2-33.5-66.2-20.1-152-24.2-247.5 50.6l11.1 14.2c91.2-71.5 168.3-66.7 231.1-47.6 31.4 9.6 59 23 82.6 32.9 11.7 4.9 22.5 8.9 32.6 11 10.1 2.1 20 2.3 28.9-2 27.5-13.1 46-45.1 58.9-82 12.9-36.9 19.8-79.5 20.4-115.8 1.6-92.8-55.5-160.5-111.9-204.3-17.2-13.42-34.5-24.69-50.2-33.89zM208 52c16 0 32 4 48 12 0 32-32 80-48 80s-48-48-48-80c16-8 32-12 48-12zM107.4 94.4c27.7 16 53.3 67.7 45.4 81.6-8.1 13.8-65.6 17.5-93.33 1.5 2.14-35.7 18.13-63.4 47.93-83.1zm201.2 0c29.9 19.7 45.9 47.4 48 83.1-27.7 16-85.3 12.3-93.3-1.5-8-13.9 17.6-65.6 45.3-81.6zM208 167c22.5 0 41 18.5 41 41s-18.5 41-41 41-41-18.5-41-41 18.5-41 41-41zm0 18c-12.8 0-23 10.2-23 23s10.2 23 23 23 23-10.2 23-23-10.2-23-23-23zm-98.1 42.8c20.3.2 38.6 4.7 42.9 12 7.9 13.9-17.7 65.6-45.4 81.6-29.83-19.7-45.83-47.4-47.97-83.1 12.97-7.5 32.52-10.7 50.47-10.5zm196.2 0c18-.2 37.5 3 50.5 10.5-2.1 35.7-18.1 63.4-48 83.1-27.7-16-53.3-67.7-45.3-81.6 4.3-7.3 22.5-11.8 42.8-12zM208 271.7c16 .1 48 48.1 48 80.1-32 16-64 16-96 0 0-32 32-80 48-80.1z"},child:[]}]})(Q)}function Ot(Q){return Z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M327.027 65.816L229.79 128.23l9.856 5.397 86.51-55.53 146.735 83.116-84.165 54.023 4.1 2.244v6.848l65.923-42.316 13.836 7.838-79.76 51.195v11.723l64.633-41.487 15.127 8.57-79.76 51.195v11.723l64.633-41.487 15.127 8.57-79.76 51.195v11.723l100.033-64.21-24.828-14.062 24.827-15.937-24.828-14.064 24.827-15.937-23.537-13.333 23.842-15.305-166.135-94.106zm31.067 44.74c-21.038 10.556-49.06 12.342-68.79 4.383l-38.57 24.757 126.903 69.47 36.582-23.48c-14.41-11.376-13.21-28.35 2.942-41.67l-59.068-33.46zM227.504 147.5l-70.688 46.094 135.61 78.066 1.33-.85c2.5-1.61 6.03-3.89 10.242-6.613 8.42-5.443 19.563-12.66 30.674-19.86 16.002-10.37 24.248-15.72 31.916-20.694L227.504 147.5zm115.467 1.17a8.583 14.437 82.068 0 1 .003 0 8.583 14.437 82.068 0 1 8.32 1.945 8.583 14.437 82.068 0 1-.87 12.282 8.583 14.437 82.068 0 1-20.273 1.29 8.583 14.437 82.068 0 1 .87-12.28 8.583 14.437 82.068 0 1 11.95-3.237zm-218.423 47.115L19.143 263.44l23.537 13.333-23.842 15.305 24.828 14.063-24.828 15.938 24.828 14.063-24.828 15.938 166.135 94.106L285.277 381.8V370.08l-99.433 63.824L39.11 350.787l14.255-9.15 131.608 74.547L285.277 351.8V340.08l-99.433 63.824L39.11 320.787l14.255-9.15 131.608 74.547L285.277 321.8V310.08l-99.433 63.824L39.11 290.787l13.27-8.52 132.9 75.28 99.997-64.188v-5.05l-5.48-3.154-93.65 60.11-146.73-83.116 94.76-60.824-9.63-5.543zm20.46 11.78l-46.92 30.115c14.41 11.374 13.21 28.348-2.942 41.67l59.068 33.46c21.037-10.557 49.057-12.342 68.787-4.384l45.965-29.504-123.96-71.358zm229.817 32.19c-8.044 5.217-15.138 9.822-30.363 19.688-11.112 7.203-22.258 14.42-30.69 19.873-4.217 2.725-7.755 5.01-10.278 6.632-.09.06-.127.08-.215.137v85.924l71.547-48.088v-84.166zm-200.99 17.48a8.583 14.437 82.068 0 1 8.32 1.947 8.583 14.437 82.068 0 1-.87 12.28 8.583 14.437 82.068 0 1-20.27 1.29 8.583 14.437 82.068 0 1 .87-12.28 8.583 14.437 82.068 0 1 11.95-3.236z"},child:[]}]})(Q)}function Tt(Q){return Z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M249.938 18.53c-2.33-.006-4.65.036-7 .157v-.03c-18.72.97-37.354 4.835-53.782 11.5-5.895 9.737-7.003 18.63-3.22 31.655 2.543 8.748 7.697 19.177 15.69 31.594 9.697-6.747 25.94-10.26 42.468-10.5 17.92-.258 36.14 3.24 46.53 10.594 7.038-11.94 11.675-22.136 14.063-30.844C308.813 47.62 307.18 37.386 300 26l.47-.28c-13.496-4.296-28.377-6.64-43.533-7.032-2.342-.094-4.67-.15-7-.157zM324 36.157c2.096 9.886 1.745 20.437-1.28 31.47-4.985 18.167-16.32 38.006-34 62.655l-32.283 47.564-76.843 114.187-.313-.217-67.155 98.875 24.53-1.157-16.936 47.876 45.53-26.28-29.78 65.437 36.218-22.782 7 37.376 52.28-110.094-.405-.187L295.5 244.687l4.313-9 47.062-98.437C370.188 88.162 354.93 54.713 324 36.156zM165.72 42.78c-30.64 21.468-44.758 56.84-18.564 104.97L195 235.688l42.72-63.47-38-47.25c-2.668-3.34-4.54-6.492-5.69-9.437C180.9 97.14 172.23 81.58 168 67.03c-2.433-8.37-3.142-16.496-2.28-24.25zm142.75 218.126l-46.595 97.72 71.594 131.937 4.842-36.157 37.907 7.406-25.47-47.375 58.875 24.782-32.656-57.408 23.655-5.718-92.156-115.188z"},child:[]}]})(Q)}export{Ot as G,jt as T,Tt as a,Et as b};