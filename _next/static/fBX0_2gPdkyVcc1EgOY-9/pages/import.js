(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5AJ6":function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o("wx14"),r=o("q1tI"),a=o.n(r),l=o("HR5l");function i(e,t){var o=a.a.memo(a.a.forwardRef((function(t,o){return a.a.createElement(l.a,Object(n.a)({ref:o},t),e)})));return o.muiName=l.a.muiName,o}},hXUn:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/import",function(){return o("zo5G")}])},zo5G:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return f}));var n=o("q1tI"),r=o.n(n),a=o("Ji2X"),l=o("ofer"),i=o("hlFM"),u=o("Z3vd"),s=o("r9w1"),c=o("OrM8"),p=o("iBVQ"),m=r.a.createElement,d=["player","date","item","itemID","itemString","votes","response","class","instance","boss","gear1","gear2","subType","equipLoc","note","logid"];function f(){var e=Object(n.useState)(""),t=e[0],o=e[1];return m(a.a,{maxWidth:"sm"},m(i.a,{my:4},m(l.a,{variant:"h4",component:"h1",gutterBottom:!0},"Import Loot Logs"),m("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var o=t.split("\n"),n=o[0].split(",");n.push("logid"),console.log("importing",o.length,"records with columns",n);for(var r=1;r<o.length;r++){var a=o[r].split(","),l=a[0]+a[1]+a[2];if(a.push(l),a.length===n.length){for(var i='INSERT INTO lootlogs("'+n[0]+'"',u="",s=0;s<n.length;s++){var c=n[s];if(d.indexOf(c)>-1){0!==s&&(i+=', "'+c+'"');var m=a[s];"date"===c&&(m=new Date("20"+m.split("/")[2],m.split("/")[1]-1,m.split("/")[0]).getTime()),u+=(0===s?"":", ")+"'"+(m+"").replace(/'/g,"")+"'"}}i+=")\nVALUES(",i+=u+");";try{p.a.runQuery(i),console.log("query success",i)}catch(f){console.error("query failed",i),console.error("Unable to insert row ",r-1,"error:",f)}}}console.log("import done, export db and save it or browse pages")}},m(s.a,{rows:10,label:"CSV Data",multiline:!0,onChange:function(e){o(e.target.value)},value:t,fullWidth:!0}),m("br",null),m("br",null),m(u.a,{type:"submit",variant:"contained",color:"primary"},"Import")),m("br",null),m("br",null),m(u.a,{onClick:function(){var e=p.a.export(),t=new Blob([e],{type:"application/x-sqlite3"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.download="database.db",o.click()},variant:"contained",color:"primary"},"Export Database"),m("br",null),m("br",null),m(c.a,{href:"/logs",color:"secondary"},"Go to logs page")))}}},[["hXUn",0,2,5,1,3,4,6,8,10,9]]]);