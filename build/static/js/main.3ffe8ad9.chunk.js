(this["webpackJsonpjob-search"]=this["webpackJsonpjob-search"]||[]).push([[0],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),s=a.n(r),o=a(29),i=a(9),j=a(11),l=a(17),b=a.n(l),h="make-request",d="get-data",x="error",u="update-has-next-page",O="https://mycorsproxyserver.herokuapp.com/https://jobs.github.com/positions.json";function m(e,t){switch(t.type){case h:return{loading:!0,jobs:[]};case d:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case x:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case u:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}}var g,p,y,f=a(179),v=a(30),k=a(19),w=a(1);p=y=k.c.svg(g||(g=Object(v.a)(["\n    position: absolute;\n    top: 2rem;\n    right: 0.5rem;\n"])));var N,C=function(e){var t=e.theme,a=e.toggleTheme;return console.log(t),Object(w.jsx)("div",{onClick:a,children:"light"===t?Object(w.jsx)(y,{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#212121",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-moon",children:Object(w.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}):Object(w.jsxs)(p,{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-sun",children:[Object(w.jsx)("circle",{cx:"12",cy:"12",r:"5"}),Object(w.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),Object(w.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),Object(w.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Object(w.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Object(w.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"})," ",Object(w.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),Object(w.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Object(w.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})})},P=Object(k.b)(N||(N=Object(v.a)(["\n    body {\n        background: ",";\n        color: ",";\n        transition: all .5s linear\n    }\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),T={body:"light gray",text:"#121212"},L={body:"#121212",text:"light gray"},S=a(182),_=a(177),B=a(178),D=a(180),I=a(43),F=a.n(I);a(173);function E(e){var t=e.job,a=Object(n.useState)(!1),c=Object(j.a)(a,2),r=c[0],s=c[1];return Object(w.jsx)("div",{children:Object(w.jsx)(S.a,{className:"mb-3",children:Object(w.jsxs)(S.a.Body,{children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)(S.a.Title,{children:[t.title," - ",Object(w.jsx)("span",{className:"text-muted font-weight-light",children:t.company})]}),Object(w.jsx)(S.a.Subtitle,{className:"text-muted mb-2",children:new Date(t.created_at).toLocaleDateString()}),Object(w.jsx)(_.a,{pill:!0,variant:"secondary",className:"mr-2",children:t.type}),Object(w.jsx)(_.a,{pill:!0,variant:"secondary",children:t.location}),Object(w.jsx)("div",{style:{wordBreak:"break-all "},children:Object(w.jsx)(F.a,{source:t.how_to_apply})})]}),Object(w.jsx)("img",{className:"d-none d-md-block",height:"50",alt:t.company,src:t.company_logo})]}),Object(w.jsx)(S.a.Text,{children:Object(w.jsx)(B.a,{onClick:function(){return s((function(e){return!e}))},variant:"primary",children:r?"Hide Details":"View Details"})}),Object(w.jsx)(D.a,{in:r,children:Object(w.jsx)("div",{className:"mt-4",children:Object(w.jsx)(F.a,{source:t.description})})})]})})})}var G=a(183);var J=function(e){var t=e.page,a=e.setPage,n=e.hasNextPage;function c(e){a((function(t){return t+e}))}return Object(w.jsxs)(G.a,{children:[1!==t&&Object(w.jsx)(G.a.Prev,{onClick:function(){return c(-1)}}),1!==t&&Object(w.jsx)(G.a.Item,{onClick:function(){return a(1)},children:"1"}),t>2&&Object(w.jsx)(G.a.Ellipsis,{}),t>2&&Object(w.jsx)(G.a.Item,{onClick:function(){return c(-1)},children:t-1}),Object(w.jsx)(G.a.Item,{active:!0,children:t}),n&&Object(w.jsx)(G.a.Item,{onClick:function(){return c(1)},children:t+1}),n&&Object(w.jsx)(G.a.Next,{onClick:function(){return c(1)}})]})},M=a(181),R=a(73);var W=function(e){var t=e.params,a=e.onParamChange;return Object(w.jsx)(M.a,{className:"mb-4",children:Object(w.jsxs)(M.a.Row,{className:"align-items-end",children:[Object(w.jsxs)(M.a.Group,{as:R.a,children:[Object(w.jsx)(M.a.Label,{children:"Description"}),Object(w.jsx)(M.a.Control,{onChange:a,value:t.description,name:"description",type:"text"})]}),Object(w.jsxs)(M.a.Group,{as:R.a,children:[Object(w.jsx)(M.a.Label,{children:"Location"}),Object(w.jsx)(M.a.Control,{onChange:a,value:t.location,name:"location",type:"text"})]}),Object(w.jsx)(M.a.Group,{as:R.a,xs:"auto",className:"ml-2",children:Object(w.jsx)(M.a.Check,{onChange:a,value:t.full_time,name:"full_time",id:"full_time",label:"Only Full Time",className:"mb-2"})})]})})};var q=function(){var e=function(){var e=Object(n.useState)("dark"),t=Object(j.a)(e,2),a=t[0],c=t[1];return[a,function(){c("dark"===a?"light":"dark")}]}(),t=Object(j.a)(e,2),a=t[0],c=t[1],r="light"===a?T:L,s=Object(n.useState)({}),l=Object(j.a)(s,2),g=l[0],p=l[1],y=Object(n.useState)(1),v=Object(j.a)(y,2),N=v[0],S=v[1],_=function(e,t){var a=Object(n.useReducer)(m,{jobs:[],loading:!0}),c=Object(j.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var a=b.a.CancelToken.source();s({type:h}),b.a.get(O,{responseType:"json",cancelToken:a.token,params:Object(i.a)({markdown:!0,page:t},e)}).then((function(e){s({type:d,payload:{jobs:e.data}})})).catch((function(e){b.a.isCancel(e)||s({type:x,payload:{error:e}})}));var n=b.a.CancelToken.source();return b.a.get(O,{responseType:"json",cancelToken:n.token,params:Object(i.a)({markdown:!0,page:t+1},e)}).then((function(e){s({type:u,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){b.a.isCancel(e)||s({type:x,payload:{error:e}})})),function(){a.cancel(),n.cancel()}}),[e,t]),r}(g,N),B=_.jobs,D=_.loading,I=_.error,F=_.hasNextPage;return Object(w.jsx)(k.a,{theme:r,children:Object(w.jsxs)(f.a,{className:"my-5",children:[Object(w.jsx)(P,{}),Object(w.jsx)(C,{theme:a,toggleTheme:c}),Object(w.jsx)("center",{children:Object(w.jsx)("h1",{className:"mb-4",children:"Github Jobs"})}),Object(w.jsx)(W,{params:g,onParamChange:function(e){var t=e.target.name,a=e.target.value;S(1),p((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},t,a))}))}}),Object(w.jsx)(J,{page:N,setPage:S,hasNextPage:F}),D&&Object(w.jsx)("h1",{children:"Loading..."}),I&&Object(w.jsx)("h1",{children:"Error. Try refreshing."}),B.map((function(e){return Object(w.jsx)(E,{job:e},e.id)})),Object(w.jsx)(J,{page:N,setPage:S,hasNextPage:F})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(q,{})}),document.getElementById("root")),z()}},[[175,1,2]]]);
//# sourceMappingURL=main.3ffe8ad9.chunk.js.map