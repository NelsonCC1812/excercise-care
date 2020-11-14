(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{136:function(e,t,n){e.exports=n.p+"static/media/menu.c9d61f05.svg"},141:function(e,t,n){e.exports=n(173)},146:function(e,t,n){},147:function(e,t,n){},164:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),c=n(135),o=n.n(c),l=n(73),i=(n(146),n(38)),u=n(33),s=n(136),m=n.n(s),d=(n(147),function(e){var t=e.show,n=e.closeModal,c=e.Component;return Object(a.useEffect)((function(){t&&document.querySelector("html").classList.add("blocked-scroll"),!t&&document.querySelector("html").classList.remove("blocked-scroll")}),[t]),t&&r.a.createElement("div",{className:"modal-container"},r.a.createElement("section",{className:"modal-background",onClick:n}),r.a.createElement("div",{className:"modal-main-wrapper"},r.a.createElement("section",{className:"modal-main"},t&&c&&r.a.createElement(c,{closeModal:n}))))}),h=n(63),f=n(55),p=n(94),g=n(83),b=n.n(g),E=function e(){var t=this;Object(p.a)(this,e),this.loggedInUser=function(){return t.service.get("/isLoggedIn").then((function(e){return e.data}))},this.signup=function(e){var n=e.username,a=e.password;return t.service.post("/signup",{username:n,password:a}).then((function(e){return e.data}))},this.login=function(e){var n=e.username,a=e.password;return t.service.post("/login",{username:n,password:a}).then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=b.a.create({baseURL:"".concat("https://excercise-care.herokuapp.com","/auth"),withCredentials:!0}),this.axiosCancelSource=b.a.CancelToken.source()},v=function(e){var t=e.setTheUser,n=e.closeModal,c=Object(a.useState)({username:"",password:""}),o=Object(i.a)(c,2),l=o[0],u=o[1],s=new E,m=function(e){return u(Object(f.a)(Object(f.a)({},l),{},Object(h.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s.login(l).then((function(e){return e.user?t(e.user):console.log("The user doesnt exist")})).then((function(){return n()})).catch((function(e){return console.log(e)}))}},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",value:l.username,onChange:m,placeholder:"Your username"}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",value:l.password,onChange:m,placeholder:"Write your password here"}),r.a.createElement("button",{type:"submit"},"Submit")))},w=function(e){var t=e.closeModal,n=e.setTheUser,c=Object(a.useState)({username:"",password1:"",password2:""}),o=Object(i.a)(c,2),l=o[0],u=o[1],s=new E,m=function(e){return u(Object(f.a)(Object(f.a)({},l),{},Object(h.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),l.password1!==l.password2)return console.log("Not the same password");s.signup({username:l.username,password:l.password1}).then((function(e){return e.user?n(e.user):console.log("the user already exist")})).then((function(){return t()})).catch((function(e){return console.log(e)}))}},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",value:l.username,placeholder:"Choose your username",onChange:m}),r.a.createElement("label",{htmlFor:"password1"},"Password"),r.a.createElement("input",{type:"password",id:"password1",placeholder:"Write your password",value:l.password1,onChange:m}),r.a.createElement("label",{htmlFor:"password2"},"Repear your password"),r.a.createElement("input",{type:"password",id:"password2",placeholder:"The same password",value:l.password2,onChange:m}),r.a.createElement("button",{type:"submit"},"Submit")))},O=(n(164),function(e){var t=e.loggedInUser,n=e.setTheUser,c=e.logout,o=Object(a.useState)(!1),u=Object(i.a)(o,2),s=u[0],h=u[1],f=Object(a.useState)(!1),p=Object(i.a)(f,2),g=p[0],b=p[1];return Object(a.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){e<window.pageYOffset+.1?document.getElementsByClassName("navbar")[0].classList.add("uphidden"):e>window.pageYOffset-.1&&document.getElementsByClassName("navbar")[0].classList.remove("uphidden"),e=window.pageYOffset}})),Object(a.useEffect)((function(){g&&document.querySelector("body").classList.add("blocked-scroll"),!g&&document.querySelector("body").classList.remove("blocked-scroll")}),[g]),r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(l.b,{to:"/home",className:"home-link",onClick:function(){return b(!1)}},"CareExpand"),r.a.createElement("figure",null,r.a.createElement("img",{className:"menu-img ".concat(g?"opened-menu":""),src:m.a,alt:"menu",onClick:function(){return b(!g)}}))),r.a.createElement("nav",{className:"nav-links ".concat(g?"show-menu":"")},r.a.createElement("ul",null,r.a.createElement("li",null,t?r.a.createElement(l.b,{to:"/showPatients",className:"link",onClick:function(){return b(!1)}}," Patients"):r.a.createElement("button",{className:"link btn-link",onClick:function(){h("login"),b(!1)}},"Login")),r.a.createElement("li",null,t?r.a.createElement("button",{className:"link btn-link",onClick:function(){c(),b(!1)}},"Logout"):r.a.createElement("button",{className:"link btn-link",onClick:function(){h("signup"),b(!1)}},"Signup"))))),s&&r.a.createElement(d,{show:s,closeModal:function(){return h(!1)},Component:"login"===s?function(){return r.a.createElement(v,{closeModal:function(){return h(!1)},setTheUser:n})}:function(){return r.a.createElement(w,{closeModal:function(){return h(!1)},setTheUser:n})}}))}),y=function(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"To start please login or signup"),r.a.createElement("p",null,"Heroku server shutdowns every 30 min, so the application will charge very slow first time, after that, it will load very fast."))},j=function(e){var t=e.name,n=e._id;return r.a.createElement("article",{style:{padding:"5px 10px",backgroundColor:"#999"}},r.a.createElement(l.b,{to:"/showPatients/".concat(n)},t))},k=function e(){var t=this;Object(p.a)(this,e),this.newPatient=function(e){return t.service.post("/newPatient",e).then((function(e){return e.data}))},this.getPatient=function(e){return t.service.get("/getPatient/"+e).then((function(e){return e.data}))},this.getAllPatiens=function(){return t.service.get("/getAllPatients").then((function(e){return e.data}))},this.service=b.a.create({baseURL:"".concat("https://excercise-care.herokuapp.com","/patient"),withCredentials:!0})},C=function(e){var t=e.closeModal,n=e.setPatients,c=Object(a.useState)({name:"",age:0,gender:""}),o=Object(i.a)(c,2),l=o[0],u=o[1],s=new k,m=function(e){return u(Object(f.a)(Object(f.a)({},l),{},Object(h.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),l.name?l.age<=0?console.log("invalid-age"):"male"!==l.gender&&"female"!==l.gender&&"other"!==l.gender?console.log("invalid-gender"):void s.newPatient(l).then((function(e){return e.data})).then((function(e){return n(e)})).then((function(){return t()})).catch((function(e){return console.log(e)})):console.log("no-name")}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{id:"name",type:"text",value:l.name,onChange:m})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"age"},"Age"),r.a.createElement("input",{id:"age",type:"number",value:l.age,onChange:m})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"gender"},"Gender"),r.a.createElement("input",{id:"gender",type:"text",value:l.gender,onChange:m})),r.a.createElement("button",{type:"submit"},"Submit")))},S=function(e){e.loggedInUser;var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),s=u[0],m=u[1],h=new k;return Object(a.useEffect)((function(){h.getAllPatiens().then((function(e){return e.data?o(e.data):o(!1)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("section",null,c?c.map((function(e){return r.a.createElement(j,Object.assign({key:e._id},e))})):!1===c?"You dont have patients":"Loading",r.a.createElement("button",{onClick:function(){return m(!0)}},"Create a new patient"),s&&r.a.createElement(d,{show:s,Component:function(){return r.a.createElement(C,{setPatients:o,closeModal:function(){return m(!1)}})},closeModal:function(){return m(!1)}}))},x=function e(){var t=this;Object(p.a)(this,e),this.newSurvey=function(e){return t.service.post("/newSurvey",e).then((function(e){return e.data}))},this.service=b.a.create({baseURL:"".concat("https://excercise-care.herokuapp.com","/mbiSurvey"),withCredentials:!0})},P=function(e){var t=e.patientId,n=e.setPatient,c=Object(a.useState)({weight:0,height:0,mbi:0,system:"is"}),o=Object(i.a)(c,2),l=o[0],u=o[1],s=new x,m=function(e){var t;return u(Object(f.a)(Object(f.a)({},l),{},(t={},Object(h.a)(t,e.target.id,e.target.value),Object(h.a)(t,"mbi",function(e){var t=e.weight,n=e.height,a=e.system;return t/(n*n)*("is"===(void 0===a?"is":a)?1:703)}(l)),t)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s.newSurvey(Object(f.a)({patientId:t},l)).then((function(e){return n(e.data)})).then((function(){return u({weight:0,height:0,mbi:0})})).catch((function(e){return console.log(e)}))}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"weight"},"Weight"),r.a.createElement("input",{id:"weight",type:"number",value:l.weight,onChange:m,placeholder:"Weight"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"height"},"Height"),r.a.createElement("input",{id:"height",type:"number",value:l.height,onChange:m,placeholder:"Height"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"system"},"System"),r.a.createElement("select",{id:"system"},r.a.createElement("option",{defaultValue:!0,value:"is"},"SI"),r.a.createElement("option",{value:"cgs"},"CGS"))),r.a.createElement("div",null,r.a.createElement("p",null,"MBI: ",l.mbi)),r.a.createElement("button",{type:"submit"},"Submit")))},N=n(125),I=n(102),U=n(138);N.b(U.a);var F=function(e){var t=e.data;return Object(a.useEffect)((function(){if(t){var e=N.a("chartdiv",I.d),n=t.map((function(e){return{date:new Date(e.createdAt),mbi:e.mbi}})),a=e.xAxes.push(new I.a);a.dataFields.category="date",a.title.text="Date",e.yAxes.push(new I.c).title.text="MBI";var r=e.series.push(new I.b);return r.dataFields.valueY="mbi",r.dataFields.dateX="date",e.data=n,function(){e&&e.dispose()}}}),[t]),t?r.a.createElement("div",{id:"chartdiv",style:{width:"100%",height:"500px"}}):r.a.createElement("p",null,"'Loading'")},L=function(e){var t=e.match,n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],l=c[1];Object(a.useEffect)((function(){u.getPatient(t.params.patientId).then((function(e){return l(e.data)})).catch((function(e){return e}))}),[]);var u=new k;return r.a.createElement("section",{style:{display:"flex"}},r.a.createElement(P,{setPatient:l,patientId:t.params.patientId}),o&&r.a.createElement(F,{data:o.history}))};n(172);function M(){var e=new E,t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),m=(s[0],s[1]),d=(Object(a.useCallback)((function(){return m("")}),[]),Object(a.useCallback)((function(){e.loggedInUser().then((function(e){return o(e.user)})).catch((function(){return m("An error has occurred")}))}),[]));return Object(a.useEffect)((function(){return d()}),[d]),r.a.createElement("div",null,r.a.createElement(O,{loggedInUser:c,setTheUser:o,logout:function(){e.logout().then((function(e){return o(null)})).catch((function(e){return e}))}}),r.a.createElement("div",{style:{marginTop:"10vh"}},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/home",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(u.b,{exact:!0,path:"/showPatients",render:function(){return c?r.a.createElement(S,null):r.a.createElement(u.a,{to:"/home"})}}),r.a.createElement(u.b,{path:"/showPatients/:patientId",render:function(e){return c?r.a.createElement(L,e):r.a.createElement(u.a,{to:"/home"})}}),r.a.createElement(u.a,{to:"/home"}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[141,1,4]]]);
//# sourceMappingURL=main.a0759cee.chunk.js.map