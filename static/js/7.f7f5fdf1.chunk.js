(this["webpackJsonpshuumatsu-no-valkyrie-mangasite"]=this["webpackJsonpshuumatsu-no-valkyrie-mangasite"]||[]).push([[7],{117:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a(31),s=a(88),u=a.n(s);var i=function(e,t){var a;clearTimeout(a),a=setTimeout(e,t)},o=a(30),l=a(19),h=a(13),j=(a(117),a(2));function f(e,t){return e[2]<t[2]?1:e[2]>t[2]?-1:0}t.default=function(e){var t=e.setShowSearch,a=Object(c.useContext)(h.a),s=a.siteMetadata,b=a.mocks,d=Object(c.useState)(!1),m=Object(n.a)(d,2),v=m[0],g=m[1],O=Object(c.useState)([]),p=Object(n.a)(O,2),k=p[0],x=p[1],N=Object(c.useRef)(null);Object(c.useEffect)((function(){v||fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/mangaNames.json").then((function(e){return e.json()})).then((function(e){return g(e)}))}),[]),Object(c.useEffect)((function(){N&&N.current&&N.current.focus()}),[N,v]);return Object(j.jsx)("div",{className:"search-container ".concat(!v&&"search-loader-container"),children:v?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"search-input-container",children:[Object(j.jsx)(l.a,{icon:Object(j.jsx)(u.a,{alt:""}),name:"back",click:function(){return t(!1)}}),Object(j.jsx)("input",{className:"search-input",placeholder:'"Tonikaku", "Shingeki", "Boku", etc',onChange:function(e){return i((function(){var t=e.target.value.toLowerCase();if(e.target.value.length>3){for(var a=t.split(" ").filter((function(e){return e.length>3})),c=[],r=0;r<v.length;r++){var s=v[r],u=Object(n.a)(s,2),i=u[0],o=u[1];if(o&&i){for(var l=0,h=0;h<a.length;h++){var j=a[h];o.toLowerCase().includes(j)&&(l+=1)}l>0&&c.push([i,o,l])}else console.error("serie absent values: ",s)}var b=c.sort(f);x(b)}0===e.target.value.length&&0!==k.length&&x([])}),750)},ref:N})]}),Object(j.jsx)("div",{className:"search-results-container",children:k.map((function(e){var t=Object(n.a)(e,2),a=t[0],c=t[1],u=o.find((function(e){return e.name===c}))||{};return Object(j.jsxs)(r.a,{className:"search-result",to:Object(h.d)(s.lang,a,u.subdomain),children:[Object(j.jsx)("img",{src:b&&b.descriptionImg?b.descriptionImg:"".concat(s.storage.fullPath).concat(a,"/description/1.jpg"),alt:"",className:"lazy search-result-img"}),Object(j.jsx)("h4",{children:c})]})}))})]}):Object(j.jsx)("div",{className:"loader",style:{marginTop:0}})})}},88:function(e,t,a){"use strict";var n=a(14),c=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(0)),s=(0,n(a(16)).default)(r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=s}}]);