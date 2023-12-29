(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s,a=c(4),n=c.n(a),l=c(2),i=c(1);c(9),c(10);!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var d=c(0),o=function(e){var t,c=e.todos,a=e.filter,n=e.title,l=e.iconId,i=e.setIsModalOpen,o=e.setTodoCard,r=e.setIconId;switch(a){case s.active:t=c.filter((function(e){return!e.completed}));break;case s.completed:t=c.filter((function(e){return e.completed}));break;default:t=c}var j=t.filter((function(e){return e.title.trim().toLowerCase().includes(n.trim().toLowerCase())})),b=function(e){o(e),i(!0),r(e.id)};return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:n.trim().length>0?j.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return b(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far ".concat(e.id!==l?"fa-eye":"fa-eye-slash")})})})})]},e.id)})):t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return b(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far ".concat(e.id!==l?"fa-eye":"fa-eye-slash")})})})})]},e.id)}))})]})},r=function(e){var t=e.input,c=e.setInput,a=e.selectedButton,n=e.setSelectedButton;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{value:a,onChange:function(e){return function(e){n(e.target.value)}(e)},"data-cy":"statusSelect",children:[Object(d.jsx)("option",{value:s.all,children:"All"}),Object(d.jsx)("option",{value:s.active,children:"Active"}),Object(d.jsx)("option",{value:s.completed,children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{value:t,onChange:function(e){return function(e){c(e.target.value)}(e)},"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t.trim()&&Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")},children:"."})})]})]})},j=(c(12),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),b=function(e){var t=e.todoCard,c=e.setIsModalOpen,s=e.setIconId,a=Object(i.useState)(),n=Object(l.a)(a,2),o=n[0],r=n[1],b=Object(i.useState)(!1),u=Object(l.a)(b,2),h=u[0],m=u[1];Object(i.useEffect)((function(){m(!0),setTimeout((function(){return fetch("https://mate-academy.github.io/"+"react_dynamic-list-of-todos/api/users/".concat(null===t||void 0===t?void 0:t.userId,".json")).then((function(e){return e.json()})).then((function(e){r(e)})).finally((function(){return m(!1)}))}),300)}),[t]);return Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),h?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(j,{})}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===t||void 0===t?void 0:t.id]}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(!1),s(0)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===o||void 0===o?void 0:o.email),children:null===o||void 0===o?void 0:o.name},null===t||void 0===t?void 0:t.userId)]})]})]})]})};var u=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),u=Object(l.a)(n,2),h=u[0],m=u[1],O=Object(i.useState)(s.all),x=Object(l.a)(O,2),f=x[0],p=x[1],v=Object(i.useState)(""),N=Object(l.a)(v,2),y=N[0],g=N[1],I=Object(i.useState)(),k=Object(l.a)(I,2),C=k[0],S=k[1],w=Object(i.useState)(!1),B=Object(l.a)(w,2),T=B[0],_=B[1],E=Object(i.useState)(0),L=Object(l.a)(E,2),M=L[0],A=L[1];return Object(i.useEffect)((function(){m(!0),setTimeout((function(){fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api/todos.json").then((function(e){return e.json()})).then((function(e){a(e)})).finally((function(){return m(!1)}))}),300)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(r,{input:y,setInput:g,selectedButton:f,setSelectedButton:p})}),Object(d.jsxs)("div",{className:"block",children:[h&&Object(d.jsx)(j,{}),!h&&c.length>0&&Object(d.jsx)(o,{title:y,todos:c,filter:f,iconId:M,setIsModalOpen:_,setTodoCard:S,setIconId:A})]})]})})}),T&&Object(d.jsx)(b,{todoCard:C,setIsModalOpen:_,setIconId:A})]})};n.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d38e5e29.chunk.js.map