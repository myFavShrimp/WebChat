(function(e){function t(t){for(var c,o,a=t[0],l=t[1],u=t[2],b=0,f=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);i&&i(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},s={app:0},r=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var i=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05d9":function(e,t,n){"use strict";n("b6e5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),s={class:"body flex flex-col w-full h-screen bg-gray-100 overflow-hidden"},r={class:"flex items-center justify-center w-full space-x-8 bg-white shadow-2xl"},o=Object(c["g"])("div",{class:"flex items-center space-x-2 ml-4"},[Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"my-4 feather feather-message-circle"},[Object(c["g"])("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})]),Object(c["g"])("h1",{class:"font-bold my-6 hidden sm:block"},"WebChat")],-1),a={key:0,class:"nav space-x-4 my-6 w-max"},l=Object(c["f"])("Chat"),u=Object(c["f"])("My History"),i=Object(c["g"])("a",null,"|",-1),b={class:"w-full h-full flex-shrink"};function f(e,t,n,f,d,g){var p=Object(c["w"])("router-link"),m=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",s,[Object(c["g"])("div",r,[o,f.loggedIn?(Object(c["p"])(),Object(c["d"])("div",a,[Object(c["g"])(p,{to:{name:"Chat"}},{default:Object(c["E"])((function(){return[l]})),_:1}),Object(c["g"])(p,{to:{name:"History"}},{default:Object(c["E"])((function(){return[u]})),_:1}),i,Object(c["g"])("button",{onClick:t[1]||(t[1]=function(){return f.logoutClicked&&f.logoutClicked.apply(f,arguments)}),class:"btn btn-error btn-active btn-sm"},"Logout")])):Object(c["e"])("",!0)]),Object(c["g"])("div",b,[Object(c["g"])(m)])])}n("b0c0");var d=n("6c02"),g=n("5502"),p=n("1da1"),m=(n("96cf"),n("d3b7"),"./api");function j(e){return e.length<3?"":"Bearer ".concat(e)}var h={apiAddress:m,post:function(e){var t=arguments;return Object(p["a"])(regeneratorRuntime.mark((function n(){var c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.length>1&&void 0!==t[1]?t[1]:{},s=t.length>2&&void 0!==t[2]?t[2]:"",n.next=4,fetch("".concat(m).concat(e),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:j(s)},body:JSON.stringify(c)});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},get:function(e){var t=arguments;return Object(p["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.length>1&&void 0!==t[1]?t[1]:"",n.next=3,fetch("".concat(m).concat(e),{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:j(c)}});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}},O={name:"Chat",components:{},setup:function(){var e=Object(d["d"])(),t=Object(g["b"])(),n=Object(c["b"])((function(){return t.state.accessToken})),s=Object(c["b"])((function(){return n.value.length>3})),r=Object(c["b"])((function(){return Object(d["c"])().name}));function o(){var s=Object(c["b"])((function(){return t.state.socket}));s.value.disconnect(),h.post("/auth/logout",{},n.value),setTimeout((function(){t.commit("accessToken","")}),50),e.push({name:"Login"})}return{logoutClicked:o,currentRoute:r,loggedIn:s}}};n("05d9");O.render=f;var v=O,x={class:"flex h-full w-full justify-center py-4 px-2 sm:px-4 md:px-0"},y={class:"flex flex-col bg-white w-full md:w-1/2 h-full rounded-xl px-8 py-2"},w={class:"w-full border-b flex items-stretch justify-start space-x-4"},k=Object(c["g"])("h1",{class:"pl-4 font-bold text-xl my-2"}," Chat ",-1),C={class:"pl-4 text-xl my-2 text-red-500"},M={id:"scrolling-element",class:"w-full h-full relative overflow-y-auto my-2"},T={id:"scrolled-element",class:"w-full absolute space-y-2"},I={class:"w-full h-12 flex justify-items-stretch space-x-2"},S={class:"btn-group flex-grow flex-shrink-0"},_=Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-delete"},[Object(c["g"])("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),Object(c["g"])("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),Object(c["g"])("line",{x1:"12",y1:"9",x2:"18",y2:"15"})],-1),H=Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-send"},[Object(c["g"])("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),Object(c["g"])("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})],-1);function B(e,t,n,s,r,o){var a=Object(c["w"])("Message");return Object(c["p"])(),Object(c["d"])("div",x,[Object(c["g"])("div",y,[Object(c["g"])("div",w,[k,Object(c["F"])(Object(c["g"])("h1",C," Can't establish connection to chat. ",512),[[c["C"],!s.socketConnected]])]),Object(c["g"])("div",M,[Object(c["g"])("div",T,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.messages,(function(e){return Object(c["p"])(),Object(c["d"])(a,{key:e.id,message:e},null,8,["message"])})),128))])]),Object(c["g"])("div",I,[Object(c["F"])(Object(c["g"])("input",{onKeyup:t[1]||(t[1]=Object(c["G"])((function(){return s.sendMessage&&s.sendMessage.apply(s,arguments)}),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.messageInput=e}),type:"text",placeholder:"Send Message",class:"input input-primary input-bordered w-full flex-shrink"},null,544),[[c["B"],s.messageInput]]),Object(c["g"])("div",S,[Object(c["g"])("button",{onClick:t[3]||(t[3]=function(){return s.clearMessageInput&&s.clearMessageInput.apply(s,arguments)}),class:"btn btn-outline btn-md"},[_]),Object(c["g"])("button",{onClick:t[4]||(t[4]=function(){return s.sendMessage&&s.sendMessage.apply(s,arguments)}),class:"btn btn-outline btn-md btn-active"},[H])])])])])}var L=Object(c["H"])("data-v-1d64dda6");Object(c["s"])("data-v-1d64dda6");var P={class:"m-2 px-0.5 mb-1.5"},E={class:"p-1 bg-gray-200"},R={class:"flex justify-between text-sm sm:text-base font-semibold px-2 space-x-4"};Object(c["q"])();var z=L((function(e,t,n,s,r,o){return Object(c["p"])(),Object(c["d"])("div",{class:["w-full flex",{"justify-end":s.fromSelf,"justify-start":!s.fromSelf}]},[Object(c["g"])("div",{class:["bg-gray-100 max-w-max flex flex-col overflow-hidden",{"message-r":s.fromSelf,"message-l":!s.fromSelf}]},[Object(c["g"])("div",P,[Object(c["g"])("p",null,Object(c["y"])(s.text),1)]),Object(c["g"])("div",E,[Object(c["g"])("div",R,[Object(c["g"])("p",null,Object(c["y"])(s.username),1),Object(c["g"])("p",null,Object(c["y"])(s.time),1)])])],2)],2)})),F=(n("ac1f"),n("5319"),{name:"Message",props:{message:Object},setup:function(e){var t=Object(g["b"])(),n=Object(c["b"])((function(){return t.state.username})),s=Object(c["z"])(e.message),r=s.text,o=s.created_on,a=s.username,l=Object(c["b"])((function(){var e=new Date(1e3*o.value);return e.toLocaleString().replace(",","")}));return{text:r,time:l,username:a,fromSelf:n.value===a.value}}});F.render=z,F.__scopeId="data-v-1d64dda6";var A=F,N=n("8e27"),U={name:"Chat",components:{Message:A},setup:function(){var e=Object(g["b"])(),t=Object(d["d"])(),n=Object(c["b"])((function(){return e.state.accessToken}));if(!(n.value.length<3)){e.dispatch("getMessages");var s=Object(c["b"])((function(){return e.state.messages})),r=Object(c["u"])(""),o=Object(c["b"])((function(){return e.state.socket})),a=Object(c["b"])((function(){return e.state.socketConnected}));return null!==o.value&&o.value.connected?setTimeout(l,50):(e.commit("socket",Object(N["io"])({extraHeaders:{Authorization:n.value}})),o.value.on("accepted",(function(){e.commit("socketConnected",!0),l()})),o.value.on("refused",(function(){e.commit("socketConnected",!1)})),o.value.on("message",(function(t){var n=u();e.commit("addMessage",t),n&&setTimeout(l,50)}))),{messages:s,socketConnected:a,messageInput:r,sendMessage:b,clearMessageInput:i}}function l(){document.getElementById("scrolling-element").scrollTop=document.getElementById("scrolled-element").offsetHeight}function u(){var e=document.getElementById("scrolling-element"),t=document.getElementById("scrolled-element");return Math.round(e.scrollTop/(t.offsetHeight-e.offsetHeight)*100)/100===1}function i(){r.value=""}function b(){o.value.emit("message",r.value),i()}t.push({name:"Login"})}};U.render=B;var V=U,G={class:"flex h-full w-full justify-center py-4 px-2 sm:px-4 md:px-0"},J={class:"flex flex-col bg-white w-full md:w-1/2 h-full rounded-xl px-8 py-2"},K=Object(c["g"])("div",{class:"w-full border-b flex items-stretch justify-start"},[Object(c["g"])("h1",{class:"pl-4 font-bold text-xl my-2"}," History ")],-1),q={class:"w-full h-full relative overflow-y-auto my-2"},D={class:"w-full absolute space-y-2"};function W(e,t,n,s,r,o){var a=Object(c["w"])("Message");return Object(c["p"])(),Object(c["d"])("div",G,[Object(c["g"])("div",J,[K,Object(c["g"])("div",q,[Object(c["g"])("div",D,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(s.messageHistory,(function(e){return Object(c["p"])(),Object(c["d"])(a,{key:e.id,message:e},null,8,["message"])})),128))])])])])}n("4de4");var Q={name:"History",components:{Message:A},setup:function(){var e=Object(g["b"])(),t=Object(d["d"])(),n=Object(c["b"])((function(){return e.state.username})),s=Object(c["b"])((function(){return e.state.messages.filter((function(e){return e.username===n.value}))})),r=Object(c["b"])((function(){return e.state.accessToken}));return r.value.length<3&&t.push({name:"Login"}),{messageHistory:s}}};Q.render=W;var X=Q,Y={class:"flex h-full w-full justify-center py-4 px-2 sm:px-4 md:px-0"},Z={class:"flex flex-col bg-white w-full md:w-96 h-60 rounded-xl px-8 py-2 shadow-2xl"},$=Object(c["g"])("div",{class:"w-full border-b flex items-stretch justify-start"},[Object(c["g"])("h1",{class:"pl-4 font-bold text-xl my-2"}," Login ")],-1),ee={class:"w-full h-full flex flex-col justify-items-stretch mt-4"},te={class:"form-control w-full h-full"},ne=Object(c["g"])("label",{class:"label"},[Object(c["g"])("span",{class:"label-text"},"Pick a username to start chatting")],-1),ce={class:"flex justify-end"},se=Object(c["g"])("p",{class:"mr-2"},"Start Chatting",-1),re=Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-log-in"},[Object(c["g"])("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),Object(c["g"])("polyline",{points:"10 17 15 12 10 7"}),Object(c["g"])("line",{x1:"15",y1:"12",x2:"3",y2:"12"})],-1);function oe(e,t,n,s,r,o){return Object(c["p"])(),Object(c["d"])("div",Y,[Object(c["g"])("div",Z,[$,Object(c["g"])("div",ee,[Object(c["g"])("div",te,[ne,Object(c["F"])(Object(c["g"])("input",{onKeyup:t[1]||(t[1]=Object(c["G"])((function(){return s.loginClicked&&s.loginClicked.apply(s,arguments)}),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.inputName=e}),type:"text",placeholder:"username",class:"input bg-gray-100"},null,544),[[c["B"],s.inputName]]),Object(c["g"])("div",ce,[Object(c["g"])("button",{onClick:t[3]||(t[3]=function(){return s.loginClicked&&s.loginClicked.apply(s,arguments)}),class:"btn btn-primary btn-md w-max mt-4"},[se,re])])])])])])}var ae={name:"Login",components:{},setup:function(){var e=Object(d["d"])(),t=Object(g["b"])(),n=Object(c["u"])("");function s(){console.log(n.value),h.post("/auth/login",{username:n.value}).then((function(e){return e.json()})).then((function(c){console.log(c.access_token),t.commit("accessToken",c.access_token),t.commit("username",n.value),e.push({name:"Chat"})}))}return{loginClicked:s,inputName:n}}};ae.render=oe;var le=ae,ue=[{path:"/",name:"Chat",component:V},{path:"/history",name:"History",component:X},{path:"/login",name:"Login",component:le}],ie=Object(d["a"])({history:Object(d["b"])(),routes:ue}),be=ie,fe=(n("4e82"),Object(g["a"])({state:{messages:[],accessToken:"",username:"",socket:null,socketConnected:!1},getters:{accessTokenValid:function(e){return e.accessToken}},mutations:{messages:function(e,t){e.messages=t},addMessage:function(e,t){e.messages.push(t)},loggedIn:function(e,t){e.loggedIn=t},accessToken:function(e,t){e.accessToken=t},username:function(e,t){e.username=t},socket:function(e,t){e.socket=t},socketConnected:function(e,t){e.socketConnected=t}},actions:{getMessages:function(e){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.state.accessToken.length<3)){t.next=2;break}return t.abrupt("return");case 2:h.get("/messages/all",e.state.accessToken).then((function(e){return e.json()})).then((function(t){console.log(t),e.state.messages=t.items.sort((function(e,t){return e.created_on>t.created_on?1:-1}))}));case 3:case"end":return t.stop()}}),t)})))()}},modules:{}}));n("ba8c");Object(c["c"])(v).use(fe).use(be).mount("#app")},b6e5:function(e,t,n){},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.js.map