(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),i=c.n(s),r=(c(11),c(3)),j=c.n(r),o=c(6),l=c(4),h=(c(13),c(0)),u=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),r=i[0],u=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&units=metric&appid=666a205b93d5cea801b1a4f4b70c3d51"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,console.log(n),a(n.main);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Check weather in your city.."})}),Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("div",{className:"inputData",children:Object(h.jsx)("input",{type:"search",placeholder:"Tap to search...",className:"inputField",value:r,onChange:function(e){u(e.target.value)}})}),c?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("h2",{className:"location",children:[Object(h.jsx)("i",{className:"fas fa-search-location"}),r]}),Object(h.jsxs)("h1",{className:"temp",children:[c.temp,"\xb0Cel"]}),Object(h.jsxs)("h3",{className:"tempmin_max",children:["Min : ",c.temp_min,"\xb0Cel | Max : ",c.temp_max,"\xb0Cel"]})]}),Object(h.jsx)("div",{className:"wave -one"}),Object(h.jsx)("div",{className:"wave -two"}),Object(h.jsx)("div",{className:"wave -three"})]}):Object(h.jsx)("p",{className:"errorMsg",children:"No data found"})]})]})};c(15);var d=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(u,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.0183f029.chunk.js.map