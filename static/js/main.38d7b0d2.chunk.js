(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var c=n(3),s=n(5),i=n.n(s),a=n(16),r=n.n(a),o=n(15),u=(n(22),n(28)),b=n(27),j=n(26);var l=function(){var t=Object(s.useState)(0),e=Object(o.a)(t,2),n=e[0],i=e[1],a=Object(s.useState)("reset"),r=Object(o.a)(a,2),l=r[0],O=r[1];return Object(s.useEffect)((function(){var t=new u.a;return Object(b.a)(700).pipe(Object(j.a)(t)).subscribe((function(){"start"===l&&i((function(t){return t+1e3}))})),function(){return t.next()}}),[l]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"time",children:[" ",new Date(n).toISOString().slice(11,19)]}),Object(c.jsxs)("div",{className:"buttonsContainer",children:[Object(c.jsx)("button",{className:"btn startBtn",onClick:function(){O("start")},children:"start"}),Object(c.jsx)("button",{className:"btn waitBtn",onClick:function(){O("wait")},children:"Wait"}),Object(c.jsx)("button",{className:"btn stopBtn",onClick:function(){O("stop"),i(0)},children:"stop"}),Object(c.jsx)("button",{className:"btn resetBtn",onClick:function(){O("reset"),i(0)},children:"Reset"})]})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),i(t),a(t)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.38d7b0d2.chunk.js.map