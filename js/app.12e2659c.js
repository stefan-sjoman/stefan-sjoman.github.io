(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"22bd":function(t,e,a){},5375:function(t,e,a){"use strict";a("5625")},5625:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{class:this.$root.$data.headerPosition,on:{click:t.setHeaderPosition}},[a("router-link",{staticClass:"heading-link",attrs:{to:"/"}},[a("h1",[t._v("STEFAN SJÖMAN")])])],1),a("nav",[a("ul",[a("li",[a("router-link",{staticClass:"fade-in",attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),a("li",[a("router-link",{staticClass:"fade-in",attrs:{to:"/education"}},[t._v("Education")])],1),a("li",[a("router-link",{staticClass:"fade-in",attrs:{to:"/experience"}},[t._v("Experience")])],1)])]),a("main",[a("router-view")],1)])},i=[],s={methods:{setHeaderPosition:function(){this.$root.$data.headerPosition="header-middle"}}},o=s,c=(a("5c0b"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,null,null),d=l.exports,u=a("8c4f"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"portfolio-frame fade-in"},[a("a",{staticClass:"project-btn",attrs:{href:"",target:"_blank"}},[t._v("Beer Project")]),a("a",{staticClass:"project-btn",attrs:{href:"",target:"_blank"}},[t._v("Insurance Project")]),a("a",{staticClass:"project-btn",attrs:{href:"",target:"_blank"}},[t._v("eDice")]),a("a",{staticClass:"project-btn",attrs:{href:"",target:"_blank"}},[t._v("Yokohama Sushi")])])}],p={created:function(){this.$root.$data.headerPosition="header-top"}},b=p,h=(a("5974"),Object(c["a"])(b,v,f,!1,null,null,null)),_=h.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"education-frame fade-in"},[a("section",{staticClass:"table"},[a("div",{staticClass:"table-header"},[t._v("It-Högskolan")]),a("div",{staticClass:"table-description"},[t._v("Front-End Development")]),a("div",{staticClass:"table-date"},[t._v("Aug 2020 - Pågående")]),a("div",{staticClass:"table-header"},[t._v("Komvux")]),a("div",{staticClass:"table-description"},[t._v("Datorteknik 1a, Dator- och nätverksteknik, Gränssnittsdesign, Matematik 2c, Programmering 1 & 2, Webbutveckling 1 & 2, Webbserver-programmering 1")]),a("div",{staticClass:"table-date"},[t._v("Aug 2019 - Jun 2020")]),a("div",{staticClass:"table-header"},[t._v("Grönlunds Yrkesutbildningar")]),a("div",{staticClass:"table-description"},[t._v("Yrkesförarutbildning")]),a("div",{staticClass:"table-date"},[t._v("Jun 2012 - Dec 2012")]),a("div",{staticClass:"table-header"},[t._v("Körkort")]),a("div",{staticClass:"table-description"},[t._v("Behörigheter BE CE")]),a("div",{staticClass:"table-date"})])])}],g={created:function(){this.$root.$data.headerPosition="header-top"}},k=g,P=(a("f750"),Object(c["a"])(k,m,C,!1,null,null,null)),j=P.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"experience-frame fade-in"},[a("section",{staticClass:"table"},[a("div",{staticClass:"table-header"},[t._v("Svevia AB")]),a("div",{staticClass:"table-description"},[t._v("Yrkesarbetare Trafikanordningar, Tunneltvätt och Drift")]),a("div",{staticClass:"table-date"},[t._v("Apr 2015 - Pågående")]),a("div",{staticClass:"table-header"},[t._v("Mankan Entreprenad")]),a("div",{staticClass:"table-description"},[t._v("Kranbilschaufför. Arbetade för underentreprenör med allt inom vägarbete hos Svevia och Bäckström AB.")]),a("div",{staticClass:"table-date"},[t._v("Jun 2013 – Apr 2015")]),a("div",{staticClass:"table-header"},[t._v("TÅV AB")]),a("div",{staticClass:"table-description"},[t._v("Kranbilschaufför. Arbetade med att tömma återvinningsbehållare med kranbil.")]),a("div",{staticClass:"table-date"},[t._v("Jan 2013 – Jun 2013")]),a("div",{staticClass:"table-header"},[t._v("Kompetenser")]),a("div",{staticClass:"table-description"},[t._v(" HTML, CSS, JavaScript, Vue, Java, Figma, Adobe XD, Agilt arbete, Musikproduktion, Cubase, Photoshop")]),a("div",{staticClass:"table-date"})])])}],x={created:function(){this.$root.$data.headerPosition="header-top"}},E=x,O=(a("5375"),Object(c["a"])(E,$,y,!1,null,null,null)),w=O.exports;r["a"].use(u["a"]);var A=[{path:"/portfolio",name:"Portfolio",component:_},{path:"/education",name:"Education",component:j},{path:"/experience",name:"Experience",component:w}],S=new u["a"]({routes:A}),J=S;r["a"].config.productionTip=!1,new r["a"]({data:function(){return{headerPosition:"header-middle"}},router:J,render:function(t){return t(d)}}).$mount("#app")},5974:function(t,e,a){"use strict";a("22bd")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},d757:function(t,e,a){},f750:function(t,e,a){"use strict";a("d757")}});
//# sourceMappingURL=app.12e2659c.js.map