(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={button:"Affairs_button__KUwpb",active:"Affairs_active__wHEVm",name:"Affairs_name__2Tfwt",affair:"Affairs_affair__1uSo8",NIGH:"Affairs_NIGH__cBYAC",MIDDLE:"Affairs_MIDDLE__2lBC6",LOW:"Affairs_LOW__2DBFO"}},,,,function(e,t,n){e.exports={link:"Header_link__3fmL9",activeLink:"Header_activeLink__15Hwp"}},function(e,t,n){e.exports={messageStyle:"Message_messageStyle__2rvY-",imgBlock:"Message_imgBlock__WN52e",gomer:"Message_gomer__EjdCg",window:"Message_window__2ZuZc",message:"Message_message__28mTK",name:"Message_name__1lsB-",time:"Message_time__cOpw5"}},,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2YDaQ",errorInput:"SuperInputText_errorInput__DJYq9",error:"SuperInputText_error__ogfld"}},function(e,t,n){e.exports={default:"SuperButton_default__1Y4uV",red:"SuperButton_red__1kyJb",initialButton:"SuperButton_initialButton__1aqAK",bounce:"SuperButton_bounce__fi0rh"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__YriUC",error:"Greeting_error__2Beat",button:"Greeting_button__173pp"}},function(e,t,n){e.exports={blue:"HW4_blue__25aXq",column:"HW4_column__4VgOQ",testSpanError:"HW4_testSpanError__3cKXu"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2I5Sj",spanClassName:"SuperCheckbox_spanClassName__1-uek"}},,function(e,t,n){e.exports={App:"App_App__353RT"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),i=(n(27),n(20)),o=n.n(i),j=n(10),l=n(2),u=n(9),b=n.n(u),d=n(0);function O(e){return Object(d.jsx)("div",{className:b.a.messageStyle,children:Object(d.jsxs)("div",{className:b.a.imgBlock,children:[Object(d.jsx)("img",{className:b.a.gomer,src:e.avatar,alt:"avatar"}),Object(d.jsxs)("div",{className:b.a.window,children:[Object(d.jsxs)("div",{className:b.a.name,children:[" ",e.name]}),Object(d.jsxs)("div",{className:b.a.message,children:[" ",e.message]}),Object(d.jsxs)("div",{className:b.a.time,children:[" ",e.time]})]})]})})}var x="https://stickers.wiki/static/stickers/homero_maximus10m/file_64991.webp",h="GOMER",m="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",f="22:00";var p=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(O,{avatar:x,name:h,message:m,time:f}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_=n(3),v=n(4),k=n.n(v);function g(e){var t=k.a[e.affair.priority];return Object(d.jsxs)("div",{className:k.a.affair,children:[Object(d.jsxs)("div",{className:k.a.name,children:[" ",e.affair.name]}),Object(d.jsxs)("div",{className:t,children:["  [",e.affair.priority,"]"]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair.id)},className:k.a.button,children:"X"})]})}function N(e){var t=e.data.map((function(t){return Object(d.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t.id)})),n="ALL"===e.filter?k.a.active:k.a.button,a="NIGH"===e.filter?k.a.active:k.a.button,c="MIDDLE"===e.filter?k.a.active:k.a.button,r="LOW"===e.filter?k.a.active:k.a.button;return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{className:n,onClick:function(){e.setFilter("ALL")},children:"All"}),Object(d.jsx)("button",{className:a,onClick:function(){e.setFilter("NIGH")},children:"High"}),Object(d.jsx)("button",{className:c,onClick:function(){e.setFilter("MIDDLE")},children:"Middle"}),Object(d.jsx)("button",{className:r,onClick:function(){e.setFilter("LOW")},children:"Low"})]})}var C=n(30),S=[{id:Object(C.a)(),name:"React ",priority:"NIGH"},{id:Object(C.a)(),name:"anime ",priority:"LOW"},{id:Object(C.a)(),name:"games ",priority:"LOW"},{id:Object(C.a)(),name:"work ",priority:"NIGH"},{id:Object(C.a)(),name:"html & css ",priority:"MIDDLE"}];var w=function(){var e=Object(a.useState)(S),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("ALL"),s=Object(_.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"ALL"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(N,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e.id!==t}))}(n,e))},filter:i})]})},y=n(21),A=n(16),L=n.n(A),I=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=L.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:s}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("button",{className:L.a.button,onClick:a,children:"ADD"}),Object(d.jsx)("span",{children:r})]})},B=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(_.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(_.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"))},addUser:function(){n(s),alert("Hello ".concat(s," !"))},error:l,totalUsers:b})};var E=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(B,{users:n,addUserCallback:function(e){c([].concat(Object(y.a)(n),[{_id:Object(C.a)(),name:e}]))}})]})},D=n(6),H=n(7),M=n(13),T=n.n(M),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(T.a.error," ").concat(i||""),l="".concat(T.a.errorInput," ").concat(r?T.a.errorInput:T.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(D.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},F=n(17),G=n.n(F),J=n(14),P=n.n(J),U=function(e){var t=e.red,n=e.className,a=Object(H.a)(e,["red","className"]),c="".concat(P.a.initialButton," ").concat(t?P.a.red:P.a.default," ").concat(n);return Object(d.jsx)("button",Object(D.a)({className:c},a))},K=n(18),R=n.n(K),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(R.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(D.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:R.a.spanClassName,children:c})]})};var q=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n?"":"-ERROR-",s=function(){r?alert("Enter text..."):alert(n)},i=Object(a.useState)(!1),o=Object(_.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:G.a.column,children:[Object(d.jsx)(W,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(W,{className:G.a.blue}),Object(d.jsx)(U,{children:"default"}),Object(d.jsx)(U,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(U,{disabled:!0,children:"disabled"}),Object(d.jsx)(Y,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(Y,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var V=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{}),Object(d.jsx)(w,{}),Object(d.jsx)(E,{}),Object(d.jsx)(q,{})]})};function X(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})}var Q=function(){return Object(d.jsx)("div",{})},Z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(_.a)(s,2),o=i[0],j=(i[1],c||{}),l=j.children,u=j.onDoubleClick,b=j.className,O=Object(H.a)(j,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",b);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(W,Object(D.a)({autoFocus:!0,onBlur:function(e){t&&t(e)},onEnter:function(){n&&n()}},r)):Object(d.jsx)("span",Object(D.a)(Object(D.a)({onDoubleClick:function(e){u&&u(e)},className:x},O),{},{children:l||r.value}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}$("test",{x:"A",y:1});!function(e,t){var n=t,a=localStorage.getItem(e);null!==a&&(n=JSON.parse(a))}("test",{x:"",y:0});var z=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(Z,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(U,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(d.jsx)(U,{onClick:function(){},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ee=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(z,{})})},te="/pre-junior",ne="/junior",ae="/junior_plus";function ce(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",element:Object(d.jsx)(l.a,{to:te})}),Object(d.jsx)(l.b,{path:te,element:Object(d.jsx)(V,{})}),Object(d.jsx)(l.b,{path:ne,element:Object(d.jsx)(Q,{})}),Object(d.jsx)(l.b,{path:ae,element:Object(d.jsx)(ee,{})}),Object(d.jsx)(l.b,{path:"/*",element:Object(d.jsx)(X,{})})]})})}var re=n(8),se=n.n(re);function ie(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j.b,{to:te,className:function(e){return e.isActive?se.a.activeLink:se.a.link},children:"Pre_Junior "}),Object(d.jsx)(j.b,{to:ne,className:function(e){return e.isActive?se.a.activeLink:se.a.link},children:" Junior "}),Object(d.jsx)(j.b,{to:ae,className:function(e){return e.isActive?se.a.activeLink:se.a.link},children:" Junior Plus "})]})}var oe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ie,{}),Object(d.jsx)(ce,{})]})};var je=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(oe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.ca5043e2.chunk.js.map