(this["webpackJsonpweb-compiler"]=this["webpackJsonpweb-compiler"]||[]).push([[0],{16:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(9),r=n.n(s),o=(n(16),n(3)),i=(n(17),n(18),n(19),n(20),n(21),n(10)),l=n(11),u=n(8),j=n(1);function b(e){var t=e.language,n=e.displayName,c=e.value,s=e.onChange,r=Object(a.useState)(!0),b=Object(o.a)(r,2),p=b[0],d=b[1];return Object(j.jsxs)("div",{className:"editor-container ".concat(p?"":"collapsed"),children:[Object(j.jsxs)("div",{className:"editor-title",children:[n,Object(j.jsx)("button",{type:"button",className:"expand-collapse-btn",onClick:function(){return d((function(e){return!e}))},children:Object(j.jsx)(l.a,{icon:p?u.a:u.b})})]}),Object(j.jsx)(i.Controlled,{onBeforeChange:function(e,t,n){s(n)},value:c,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lintNumbers:!0}})]})}function p(e,t){var n="web-compiler-"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),s=Object(o.a)(c,2),r=s[0],i=s[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,i]}var d=function(){var e=p("html",""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=p("css",""),r=Object(o.a)(s,2),i=r[0],l=r[1],u=p("js",""),d=Object(o.a)(u,2),m=d[0],O=d[1],f=Object(a.useState)(""),h=Object(o.a)(f,2),g=h[0],v=h[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){v("\n      <html>\n          <body>".concat(n,"</body>\n          <style>").concat(i,"</style>\n          <script>").concat(m,"<\/script>\n      </html>\n\n         "))}),250);return function(){return clearTimeout(e)}}),[n,i,m]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"pane top-pane",children:[Object(j.jsx)(b,{language:"xml",displayName:"HTML",value:n,onChange:c}),Object(j.jsx)(b,{language:"css",displayName:"CSS",value:i,onChange:l}),Object(j.jsx)(b,{language:"javascript",displayName:"JS",value:m,onChange:O})]}),Object(j.jsx)("div",{className:"pane",children:Object(j.jsx)("iframe",{srcDoc:g,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d94542f6.chunk.js.map