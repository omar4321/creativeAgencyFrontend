(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},131:function(e,a,t){},134:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(21),r=t.n(c),m=t(8),s=(t(82),t(7)),o=t(11),i=t(9),u=t.n(i),d=t(151),E=t(152);t(99);function p(){var e,a=Object(l.useState)(),t=Object(m.a)(a,2),c=t[0],r=t[1];(Object(l.useEffect)((function(){u.a.get("https://polar-dawn-10321.herokuapp.com/getClientFeedback").then((function(e){r(e.data)}))}),[c]),c)&&(e=c.slice(0,3));return n.a.createElement(d.a,null,n.a.createElement(E.a,{className:"pt-3 pb-5 mb-5"},n.a.createElement("div",{className:"col-sm-12 my-5 py-1  text-center Heading"},n.a.createElement("h1",null,"Clients ",n.a.createElement("span",null,"Feedback"))),e?0===e.length?n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("img",{src:"https://s8.gifyu.com/images/Infinity-0.9s-211px.gif",alt:"preloader"})):e.map((function(e){return n.a.createElement("div",{key:e._id,className:"col-lg-4 col-md-6 clientFeedback mb-4"},n.a.createElement("div",{className:"clientFeedBackContainer p-3"},n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(E.a,{className:"align-items-center justify-content-center"},n.a.createElement("div",{className:"col-sm-4 clientImg"},n.a.createElement("img",{style:{borderRadius:"50%"},src:e.img,alt:"customer-3"})),n.a.createElement("div",{className:"col-sm-8 clientInfo text-left"},n.a.createElement("h5",null,e.name),n.a.createElement("h6",null,e.designationAndCompanyName)))),n.a.createElement("div",{className:"col-sm-12 mt-2"},n.a.createElement("p",null,e.feedback)))))})):null,n.a.createElement("div",{className:"col-sm-12 my-4 text-right"},n.a.createElement(s.b,{to:"/allClientFeedback",className:"seeAll"},"see all"))))}t(104);function g(){return n.a.createElement(d.a,null,n.a.createElement(E.a,{className:"align-items-center my-5 py-5 justify-content-center client"},n.a.createElement("div",{className:"col-md-2"},n.a.createElement("img",{src:"https://i.ibb.co/Tt6YdSL/uber.png",alt:"uber"})),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("img",{src:"https://i.ibb.co/dP3qx4n/slack.png",alt:"slack"})),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("img",{src:"https://i.ibb.co/QHkHVSx/netflix.png",alt:"netflix"})),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("img",{src:"https://i.ibb.co/QbX4qTC/google.png",alt:"google"})),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("img",{src:"https://i.ibb.co/B2Mmmjq/airbnb.png",alt:"airbnb"}))))}var b=t(154),f=t(66),v=t(153);function N(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,null,n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Email address"),n.a.createElement(b.a.Control,{type:"email",placeholder:"Enter email"})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Your name / company\u2019s name"),n.a.createElement(b.a.Control,{type:"text",placeholder:"Enter you name or company's name"})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Your Message"),n.a.createElement("textarea",{className:"form-control",placeholder:"Enter your message",rows:"3"})),n.a.createElement(v.a,{type:"submit",className:"commonBtn"},"Send")))}function h(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Let us handle your project, professionally."),n.a.createElement("p",null,"With well written codes, we build amazing apps for all platforms, mobile and web apps in general."))}function y(){return n.a.createElement(d.a,null,n.a.createElement(E.a,{className:"mt-5 py-5"},n.a.createElement("div",{className:"col-sm-12 col-md-5"},n.a.createElement(h,null)),n.a.createElement("div",{className:"col-sm-12 col-md-7"},n.a.createElement(N,null))))}function j(){var e=(new Date).getFullYear();return n.a.createElement(d.a,{className:"text-center py-3"},n.a.createElement("div",{className:"con-sm-12"},"copyright Orange labs ",e))}var O=t(25);t(113);function k(){return n.a.createElement(d.a,null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-7 heroBanner mobile d-flex align-items-center justify-content-center"},n.a.createElement("img",{src:"https://i.ibb.co/CmqRHq1/Frame.png",alt:"banner"})),n.a.createElement("div",{className:"col-md-5 heroText col-sm-12 d-flex align-items-center justify-content-center"},n.a.createElement("div",null,n.a.createElement("h1",{className:"mb-3"},"Let\u2019s Grow Your Brand To The Next Level"),n.a.createElement("p",{className:"mb-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "),n.a.createElement(O.Link,{to:"services",smooth:!0,duration:1e3},n.a.createElement(v.a,{className:"hireBtn commonBtn"},"Hire Us")))),n.a.createElement("div",{className:"col-md-7 desktop heroBanner d-flex align-items-center justify-content-center"},n.a.createElement("img",{src:"https://i.ibb.co/CmqRHq1/Frame.png",alt:"banner"}))))}var C=t(155),x=t(156);t(114);function S(){var e=Object(l.useContext)(se),a=e.userInfo,t=e.setUserInfo;return n.a.createElement(d.a,null,n.a.createElement(C.a,{expand:"md",className:"navBar"},n.a.createElement(s.b,{to:"/",className:"logo"},n.a.createElement("img",{src:"https://i.ibb.co/t445Mcy/logo.png",alt:"LOGO"})),n.a.createElement(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(C.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(x.a,{className:"ml-auto navMenu d-flex align-items-center justify-content-center"},n.a.createElement(s.b,{to:"/",className:"mr-4 navMenuList"},"Home"),n.a.createElement(O.Link,{to:"workBackground",className:"mr-4 navMenuList",smooth:!0,duration:1e3},"Our Portfolio"),n.a.createElement(s.b,{to:"/ourTeam",className:"mr-4 navMenuList"},"Our Team"),n.a.createElement(O.Link,{to:"FooterSection",smooth:!0,duration:1e3,className:"mr-4 navMenuList"},"Contact Us"),a.email.length>0?n.a.createElement(v.a,{onClick:function(){t({email:"",img:"",name:""})},style:{cursor:"pointer"},className:"commonBtn mr-3"},"Log Out"):n.a.createElement(s.b,{to:"/order"},n.a.createElement(v.a,{className:"loginBtn commonBtn mr-3"},"Login"))))))}t(115);function F(){var e,a=Object(l.useState)(),t=Object(m.a)(a,2),c=t[0],r=t[1];(Object(l.useEffect)((function(){u.a.get("https://polar-dawn-10321.herokuapp.com/getServices").then((function(e){return r(e.data)}))}),[]),c)&&(e=c.slice(0,6));return n.a.createElement(d.a,null,n.a.createElement(E.a,{className:"services my-5 align-items-center justify-content-center",id:"services"},n.a.createElement("div",{className:"col-sm-12 my-5 Heading text-center"},n.a.createElement("h1",null,"Provide awesome ",n.a.createElement("span",null,"services"))),n.a.createElement("div",{className:"col-sm-12 my-5 py-2"},n.a.createElement(E.a,null,e?e.map((function(e){return n.a.createElement("div",{className:"col-md-4 servicesItem text-center",key:e._id},n.a.createElement(s.b,{to:{pathname:"/order/".concat(e.title),search:"?sort=".concat(e.image.img)}},n.a.createElement(E.a,{className:"my-3 align-items-center justify-content-center"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("img",{src:"data:image/png;base64,".concat(e.image.img),alt:"".concat(e.title)})),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("h5",null,e.title)),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("p",null,e.description)))))})):n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("img",{src:"https://s8.gifyu.com/images/Infinity-0.9s-211px.gif",alt:"preloader"}))),n.a.createElement("div",{className:"col-sm-12 my-5  d-flex align-items-center justify-content-end"},n.a.createElement(s.b,{className:"seeAll ",to:"/allServices"},"see all")))))}var w=t(72),M=t.n(w);t(131),t(132),t(133);function L(){var e={dots:!0,infinite:!0,speed:300,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:767,settings:{arrows:!1,slidesToShow:1}},{breakpoint:575,settings:{arrows:!1,slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1}}]};return n.a.createElement("div",{className:"workBackground",id:"workBackground"},n.a.createElement(d.a,{className:"my-5 py-5 text-center"},n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-sm-12 my-5 Heading"},n.a.createElement("h1",null,"Here are some of ",n.a.createElement("span",null,"our works"))),n.a.createElement("div",{className:"col-sm-12 py-5"},n.a.createElement(M.a,e,n.a.createElement("div",{className:"img col-sm-12"},n.a.createElement("img",{src:"https://i.ibb.co/Jptp27W/carousel-1.png",alt:"carousel-1"})),n.a.createElement("div",{className:"img col-sm-12"},n.a.createElement("img",{src:"https://i.ibb.co/hZQG5hy/carousel-2.png",alt:"carousel-2"})),n.a.createElement("div",{className:"img col-sm-12"},n.a.createElement("img",{src:"https://i.ibb.co/J74jhRL/carousel-3.png",alt:"carousel-3"})),n.a.createElement("div",{className:"img col-sm-12"},n.a.createElement("img",{src:"https://i.ibb.co/2MKGz7c/carousel-4.png",alt:"carousel-4"})),n.a.createElement("div",{className:"img col-sm-12"},n.a.createElement("img",{src:"https://i.ibb.co/nC5TXtv/carousel-5.png",alt:"carousel-5"})))))))}t(134);function I(){return document.body.style.backgroundColor="#fff",n.a.createElement("div",null,n.a.createElement("div",{className:"LandingSite"},n.a.createElement(S,null),n.a.createElement(k,null)),n.a.createElement(g,null),n.a.createElement(F,null),n.a.createElement(L,null),n.a.createElement(p,null),n.a.createElement("div",{className:"FooterSection",id:"FooterSection"},n.a.createElement(y,null),n.a.createElement(j,null)))}var D=t(3),A=t(27),P=(t(137),{apiKey:"".concat("AIzaSyB6Oeu1o8NP5GSW90jjo_aMeA9o03oTzHE"),authDomain:"".concat("creative-agency-13260",".firebaseapp.com"),databaseURL:"https://".concat("creative-agency-13260",".firebaseio.com"),projectId:"".concat("creative-agency-13260"),storageBucket:"".concat("creative-agency-13260",".appspot.com"),messagingSenderId:"".concat("215587236484"),appId:"".concat("1:215587236484:web:67d49ab834746af5d3f0d1")});function B(){document.body.style.backgroundColor="#fff";var e=Object(l.useContext)(se),a=e.userInfo,t=e.setUserInfo,c=Object(o.g)(),r=(Object(o.h)().state||{from:{pathname:"/"}}).from;return n.a.createElement(d.a,null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement(s.b,{to:"/"},n.a.createElement("img",{src:"https://i.ibb.co/t445Mcy/logo.png",className:"pt-3",style:{width:"120px"},alt:"logo"}))),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"my-5 d-flex justify-content-center align-items-center p-3",style:{border:"2px solid #ABABAB",height:"50vh"}},n.a.createElement(E.a,{className:"justify-content-center align-items-center"},n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("p",{className:"error"},a.signupError)),n.a.createElement(v.a,{onMouseEnter:function(){t(Object(D.a)(Object(D.a)({},a),{},{signupError:""}))},onClick:function(){return function(){t(Object(D.a)(Object(D.a)({},a),{},{signupError:""}));var e=new A.auth.GoogleAuthProvider;A.auth().signInWithPopup(e).then((function(e){var l=Object(D.a)({},a);l.signupError="",t(l);var n=e.user,m=n.displayName,s=n.email,o=n.photoURL;t({isLogin:!0,name:m,email:s,img:o}),sessionStorage.setItem("email",s,"img",o),c.replace(r)})).catch((function(e){var l=e.message;t({isLogin:!1}),t(Object(D.a)(Object(D.a)({},a),{},{signupError:l}))}))}()},style:{backgroundColor:"#fff",border:"2px solid #ABABAB",color:"#000"},className:"px-5  d-flex justify-content-center align-items-center"},n.a.createElement("img",{src:"https://i.ibb.co/jRKzCQ5/Group-573.png",className:"mx-5",alt:"Google"}),n.a.createElement("span",null,"Continue with Google")))))))}0===A.apps.length&&A.initializeApp(P);var q=t(76),T=function(e){var a=e.children,t=Object(q.a)(e,["children"]),c=Object(l.useContext)(se).userInfo;return n.a.createElement(o.b,Object.assign({},t,{render:function(e){var t=e.location;return!0===c.isLogin&&c.email.length>0?a:n.a.createElement(o.a,{to:{pathname:"/loginForm",state:{from:t}}})}}))};function U(){var e=Object(l.useState)(),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){u.a.get("https://polar-dawn-10321.herokuapp.com/getServices").then((function(e){c(e.data)}))}),[]),n.a.createElement("div",null,n.a.createElement(S,null),n.a.createElement(d.a,null,n.a.createElement(E.a,null,t?t.map((function(e){return n.a.createElement("div",{className:"col-md-4 servicesItem text-center",key:e._id},n.a.createElement(s.b,{to:{pathname:"/order/".concat(e.title),search:"?sort=".concat(e.image.img)}},n.a.createElement(E.a,{className:"my-3 align-items-center justify-content-center"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("img",{src:"data:image/png;base64,".concat(e.image.img),alt:"".concat(e.title)})),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("h5",null,e.title)),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("p",null,e.description)))))})):n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("img",{src:"https://s8.gifyu.com/images/Infinity-0.9s-211px.gif",alt:"preloader"})))))}function R(){var e=Object(l.useState)(),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){u.a.get("https://polar-dawn-10321.herokuapp.com/getClientFeedback").then((function(e){c(e.data)}))}),[t]),n.a.createElement(n.a.Fragment,null,n.a.createElement(S,null),n.a.createElement(d.a,null,n.a.createElement(E.a,null,t?0===t.length?n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("img",{src:"https://s8.gifyu.com/images/Infinity-0.9s-211px.gif",alt:"preloader"})):t.map((function(e){return n.a.createElement("div",{key:e._id,className:"col-lg-4 col-md-6 clientFeedback mb-4"},n.a.createElement("div",{className:"clientFeedBackContainer p-3"},n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(E.a,{className:"align-items-center justify-content-center"},n.a.createElement("div",{className:"col-sm-4 clientImg"},n.a.createElement("img",{style:{borderRadius:"50%"},src:e.img,alt:"customer-3"})),n.a.createElement("div",{className:"col-sm-8 clientInfo text-left"},n.a.createElement("h5",null,e.name),n.a.createElement("h6",null,e.designationAndCompanyName)))),n.a.createElement("div",{className:"col-sm-12 mt-2"},n.a.createElement("p",null,e.feedback)))))})):null)))}function G(){return n.a.createElement("div",{style:{backgroundColor:"#fbd062",height:"100vh",display:"flex",alignItems:"center"}},n.a.createElement(d.a,{style:{position:"relative"}},n.a.createElement("div",{className:"col-sm-12 d-flex align-items-center justify-content-center"},n.a.createElement("h1",null,"Sorry, Not fond!"))))}var H=t(45),_=(t(140),t(73)),Y=t.n(_),z=t(74),W=t.n(z),V=t(75),J=t.n(V),Q=(t(141),t(19)),K=t(20);t(144);function X(){var e=Object(l.useContext)(se).userInfo,a=Object(l.useState)(),t=Object(m.a)(a,2),c=t[0],r=t[1],o=e.email;return Object(l.useEffect)((function(){u.a.get("https://polar-dawn-10321.herokuapp.com/getAdminInfo?email="+o).then((function(e){var a=e.data;r({adminData:a})}))}),[]),n.a.createElement("div",{style:{height:"100vh",backgroundColor:"#fff",marginTop:"-16px"},className:"slider"},n.a.createElement("div",{className:"col-md-12 pl-5 mt-3 sliderContainer"},n.a.createElement(E.a,null,n.a.createElement("div",{className:" col-md-12 ml-2 mt-4 "},n.a.createElement(s.b,{to:"/"},n.a.createElement("img",{style:{width:"120px"},src:"https://i.ibb.co/t445Mcy/logo.png",alt:"LOGO"}))),n.a.createElement("div",{className:"col-md-12 sliderMenuContainer my-5"},n.a.createElement("ul",{className:"my-5"},c?0!==c.adminData.length?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"my-4 col-sm-12 col-5 p-1 sliderMenu"},n.a.createElement(s.b,{to:"/allServiceList"},n.a.createElement(Q.a,{icon:K.b,className:"mr-3"}),"All Services")),n.a.createElement("li",{className:"my-4 col-sm-12 col-5 p-1 sliderMenu"},n.a.createElement(s.b,{to:"/addService"},n.a.createElement(Q.a,{icon:K.c,className:"mr-3"}),"Add Services")),n.a.createElement("li",{className:"my-4 col-sm-12 col-5 p-1 sliderMenu"},n.a.createElement(s.b,{to:"/makeAdmin"},n.a.createElement(Q.a,{icon:K.e,className:"mr-3"}),"Make Admin")),n.a.createElement("li",{className:"my-4 col-sm-12 col-5 p-1 sliderMenu"},n.a.createElement(s.b,{to:"/serviceList"},n.a.createElement(Q.a,{icon:K.b,className:"mr-3"}),"Service List")),n.a.createElement("li",{className:"my-4 col-sm-12 col-5 p-1 sliderMenu"},n.a.createElement(s.b,{to:"/order"},n.a.createElement(Q.a,{icon:K.d,className:"mr-3"}),"Order"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"my-4 col-sm-12 col-5 p-1 sliderMenu"},n.a.createElement(s.b,{to:"/order"},n.a.createElement(Q.a,{icon:K.d,className:"mr-3"}),"Order")),n.a.createElement("li",{className:"my-4 col-sm-12 col-5 p-1 sliderMenu"},n.a.createElement(s.b,{to:"/serviceList"},n.a.createElement(Q.a,{icon:K.b,className:"mr-3"}),"Service List")),n.a.createElement("li",{className:"my-4 col-sm-12 col-5 p-1 sliderMenu"},n.a.createElement(s.b,{to:"/feedback"},n.a.createElement(Q.a,{icon:K.a,className:"mr-3"}),"Feedback"))):null)))))}function Z(e){var a=Object(l.useContext)(se).userInfo;return n.a.createElement("div",{className:"col-md-12 pt-4",style:{backgroundColor:"#fff"}},n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-8 col-8 col-sm-8 pl-5"},n.a.createElement("p",null,e.pageName.name)),n.a.createElement("div",{className:"col-md-4 col-4 col-sm-4 text-right pr-5"},a.name.length>0?n.a.createElement("p",null,a.name):n.a.createElement("p",null,"Shakib (default Name)"))))}t(145);function $(){document.body.style.backgroundColor="#e5e5e5";var e=Object(l.useContext)(me),a=e.message,t=e.setMessage,c=Object(l.useState)([]),r=Object(m.a)(c,2),s=r[0],o=r[1],i=Object(l.useState)({title:"",description:""}),d=Object(m.a)(i,2),p=d[0],g=d[1],N=new FormData;s.length>0&&(N.append("file",s[0].file),N.append("title",p.title),N.append("description",p.description));var h=function(e){t(Object(D.a)(Object(D.a)({},a),{},{success:"",error:""})),"title"===e.target.name?g(Object(D.a)(Object(D.a)({},p),{},{title:e.target.value})):"description"===e.target.name&&g(Object(D.a)(Object(D.a)({},p),{},{description:e.target.value}))};return n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-4 col-sm-5 col-lg-3 pr-0"},n.a.createElement(X,null)),n.a.createElement("div",{className:"col-md-8 col-sm-7 col-lg-9"},n.a.createElement(E.a,{className:"addServicesForm"},n.a.createElement(Z,{pageName:{name:"AddService"}}),n.a.createElement("div",{className:"col-md-12 my-5 dashboardContainer",style:{backgroundColor:"#e5e5e5"}},a.success.length>0?n.a.createElement("p",{className:"success"},a.success):n.a.createElement("p",{className:"error"},a.error),n.a.createElement(b.a,{onSubmit:function(e){var l=document.querySelector(".title"),n=document.querySelector(".description");e.preventDefault(),u.a.post("https://polar-dawn-10321.herokuapp.com/addServices",N,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t(Object(D.a)(Object(D.a)({},a),{},{success:"file Uploaded successfully",error:""})),o([]),l.value="",n.value=""})).catch((function(e){t(Object(D.a)(Object(D.a)({},a),{},{success:"",error:"Sorry, Unable to upload please try again"})),o([]),l.value="",n.value=""}))},className:"addServiceForm my-5"},n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-6"},n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Service Title"),n.a.createElement(b.a.Control,{onChange:h,required:!0,type:"text",className:"title",style:{height:"45px"},name:"title",placeholder:"Enter title"})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Description"),n.a.createElement("textarea",{required:!0,onChange:h,className:"form-control description",name:"description",placeholder:"Enter description",rows:"3"}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Icon"),n.a.createElement(H.FilePond,{files:s,required:!0,allowFileEncode:!0,onupdatefiles:o,allowMultiple:!1,maxFiles:3,name:"files",labelIdle:"Drag & Drop your photo"}))),n.a.createElement("div",{className:" addServiceBtn mt-5 pr-5 col-sm-12 d-flex align-items-center justify-content-end"},n.a.createElement(v.a,{className:"commonBtn",type:"submit"},"Add Service")))))))))}function ee(e){var a=e.serviceListData,t=e.update;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,0===a.length?n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("img",{src:"https://s8.gifyu.com/images/Infinity-0.9s-211px.gif",alt:"preloader"})):a.map((function(e){return n.a.createElement("div",{key:e._id,className:"dashboardContainer services p-2",style:{fontSize:"0.8em",backgroundColor:"#fff",borderRadius:"15px"}},n.a.createElement(E.a,{className:"text-center align-items-center justify-content-center"},n.a.createElement("div",{className:"col-4"},n.a.createElement("p",null,"Name")),n.a.createElement("div",{className:"col-8"},n.a.createElement("p",null,"Shakib")),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",null,"Email")),n.a.createElement("div",{className:"col-8"},n.a.createElement("p",null,"Shihabunshakib9346@gmail.com")),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",null,"Service")),n.a.createElement("div",{className:"col-8"},n.a.createElement("p",null,"Web Design")),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",null,"Product detail")),n.a.createElement("div",{className:"col-8"},n.a.createElement("p",null,"hello hello hello hello hello hello hello hello hello hello hello")),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",null,"Status")),n.a.createElement("div",{className:"col-8"},n.a.createElement(b.a,null,n.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect1"},e.ispending?n.a.createElement("select",{id:"exampleForm.ControlSelect1",className:"form-control form-control-sm",onChange:function(){return t(e._id,e.ispending)},style:{backgroundColor:"#ffe3e3",color:"#FF4545"},value:"Pending"},n.a.createElement("option",{value:"Pending",style:{backgroundColor:"#fff",color:"#000"}},"Pending"),n.a.createElement("option",{style:{backgroundColor:"#fff",color:"#000"}},"Done")):n.a.createElement("select",{id:"exampleForm.ControlSelect1",className:"form-control form-control-sm",onChange:function(){return t(e._id,e.ispending)},style:{backgroundColor:"#c6ffe0",color:"#009444"},value:"Done"},n.a.createElement("option",{value:"Done",style:{backgroundColor:"#fff",color:"#000"}},"Done"),n.a.createElement("option",{value:!0,style:{backgroundColor:"#fff",color:"#000"}},"Pending")))))))}))))}Object(H.registerPlugin)(W.a,J.a,Y.a);t(146);function ae(){document.body.style.backgroundColor="#e5e5e5";var e=Object(l.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1];Object(l.useEffect)((function(){u.a.get("https://polar-dawn-10321.herokuapp.com/getOrder").then((function(e){c(e.data)}))}),[t]);var r=!1,s=function(e,a){!1===a?r=!0:!0===a&&(r=!1);var t={statusInfo:r};u.a.patch("https://polar-dawn-10321.herokuapp.com/editStatus/".concat(e),t)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-3 col-sm-4 col-lg-3 pr-0"},n.a.createElement(X,null)),n.a.createElement("div",{className:"col-md-9 desktop col-sm-8 col-lg-9"},n.a.createElement(E.a,{className:"addServicesForm"},n.a.createElement(Z,{pageName:{name:"All Service List"}}),n.a.createElement("div",{className:"col-md-12 my-1 mr-5 dashboardContainer",style:{backgroundColor:"#e5e5e5",height:"88vh",overflowY:"scroll"}},n.a.createElement(E.a,{className:"servicesHeading p-2 mt-2 text-center",style:{backgroundColor:"#fff",borderRadius:"10px"}},n.a.createElement("div",{className:"col-md-2"},n.a.createElement("p",null,"Name")),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("p",null,"Email")),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("p",null,"Service")),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("p",null,"Project Details")),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("p",null,"Status"))),0===t.length?n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("img",{src:"https://s8.gifyu.com/images/Infinity-0.9s-211px.gif",alt:"preloader"})):t.map((function(e){return n.a.createElement(E.a,{key:e._id,className:"p-2 my-2 text-center",style:{fontSize:"0.89em"}},n.a.createElement("div",{className:"col-md-2"},n.a.createElement("p",null,e.name)),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("p",null,e.email)),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("p",null,e.serviceName)),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("p",null,e.projectDetail)),n.a.createElement("div",{className:"col-md-2"},n.a.createElement(b.a,null,n.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect1"},e.ispending?n.a.createElement("select",{id:"exampleForm.ControlSelect1",className:"form-control form-control-sm",onChange:function(){return s(e._id,e.ispending)},style:{backgroundColor:"#ffe3e3",color:"#FF4545"},value:"Pending"},n.a.createElement("option",{value:"Pending",style:{backgroundColor:"#fff",color:"#000"}},"Pending"),n.a.createElement("option",{style:{backgroundColor:"#fff",color:"#000"}},"Done")):n.a.createElement("select",{id:"exampleForm.ControlSelect1",className:"form-control form-control-sm",onChange:function(){return s(e._id,e.ispending)},style:{backgroundColor:"#c6ffe0",color:"#009444"},value:"Done"},n.a.createElement("option",{value:"Done",style:{backgroundColor:"#fff",color:"#000"}},"Done"),n.a.createElement("option",{value:!0,style:{backgroundColor:"#fff",color:"#000"}},"Pending"))))))}))))),n.a.createElement("div",{className:"mobile col-md-9 col-sm-8 col-lg-9 dashboardContainer"},n.a.createElement(ee,{update:s,serviceListData:t})))))}t(147);function te(){document.body.style.backgroundColor="#e5e5e5";var e=window.location.search.slice(6),a=Object(o.i)().title,t=Object(l.useContext)(se),c=t.userInfo,r=t.setUserInfo,s=Object(l.useState)({name:c.name,email:c.email,serviceName:a,projectDetail:"",price:0,img:e}),i=Object(m.a)(s,2),d=i[0],p=i[1],g=function(e){r(Object(D.a)(Object(D.a)({},c),{},{successMessage:"",errorMessage:""})),"Project Details"===e.target.name?p(Object(D.a)(Object(D.a)({},d),{},{projectDetail:e.target.value})):"Price"===e.target.name?p(Object(D.a)(Object(D.a)({},d),{},{price:e.target.value})):"Email"===e.target.name?p(Object(D.a)(Object(D.a)({},d),{},{email:e.target.value})):"Service Name"===e.target.name?p(Object(D.a)(Object(D.a)({},d),{},{serviceName:e.target.value})):"Name"===e.target.name&&p(Object(D.a)(Object(D.a)({},d),{},{name:e.target.value}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-4 col-sm-5 col-lg-3 pr-0"},n.a.createElement(X,null)),n.a.createElement("div",{className:"col-md-8 col-sm-7 col-lg-9"},n.a.createElement(E.a,null,n.a.createElement(Z,{pageName:{name:"Order"}}),n.a.createElement(b.a,{onSubmit:function(e){document.body.style.backgroundColor="#e5e5e5",e.preventDefault();var a=document.querySelector(".projectDetails"),t=document.querySelector(".Price"),l=document.querySelector(".Name"),n=document.querySelector(".Email"),m=document.querySelector(".ServiceName");u.a.post("https://polar-dawn-10321.herokuapp.com/addOrder",d).then((function(e){r(Object(D.a)(Object(D.a)({},c),{},{successMessage:"file Uploaded successfully",errorMessage:""})),a.value="",t.value="",l.value="",n.value="",m.value=""})).catch((function(e){r(Object(D.a)(Object(D.a)({},c),{},{successMessage:"",errorMessage:"Sorry, Unable to upload please try again"})),a.value="",t.value="",l.value="",n.value="",m.value=""}))}},n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-10 col-lg-8 mt-4 mb-1 mx-5"},n.a.createElement("p",{style:c.successMessage?{animation:"FadeAnimation 1s ease-in 2s forwards"}:null,className:"success"},c.successMessage),n.a.createElement("p",{style:c.errorMessage?{animation:"FadeAnimation 1s ease-in 2s forwards"}:null,className:"error"},c.errorMessage)),n.a.createElement("div",{className:"col-md-10 col-lg-12 my-1 mx-5"},n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Name"),n.a.createElement(b.a.Control,{onChange:g,defaultValue:c.name,required:!0,type:"text",className:"Name",name:"Name",placeholder:"Your Name"})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Email"),n.a.createElement(b.a.Control,{onChange:g,defaultValue:c.email,required:!0,type:"Email",className:"Email",name:"Email",placeholder:"Your Email"})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Service Name"),n.a.createElement(b.a.Control,{onChange:g,defaultValue:a,required:!0,type:"text",className:"ServiceName",name:"Service Name",placeholder:"Service Name"})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Project Details"),n.a.createElement("textarea",{onChange:g,required:!0,className:"form-control projectDetails",name:"Project Details",placeholder:"Enter Project Details",rows:"3"})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Price"),n.a.createElement(b.a.Control,{onChange:g,required:!0,type:"number",className:"Price",name:"Price",placeholder:"Enter Price"})),n.a.createElement(v.a,{type:"submit",className:"commonBtn px-4"},"Submit")))))))))}function le(){var e=Object(l.useContext)(se).userInfo,a=Object(l.useState)([]),t=Object(m.a)(a,2),c=t[0],r=t[1],s=e.email;return Object(l.useEffect)((function(){u.a.get("https://polar-dawn-10321.herokuapp.com/getSingleUserOrder?email="+s).then((function(e){r(e.data)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-4 col-sm-5 col-lg-3 pr-0"},n.a.createElement(X,null)),n.a.createElement("div",{className:"col-md-8 col-sm-7 col-lg-9 p-0"},n.a.createElement(Z,{pageName:{name:"Order"}}),n.a.createElement("div",{className:"dashboardItemContainer col-md-12 p-5",style:{height:"90vh",overflowY:"scroll"}},n.a.createElement(E.a,{className:"align-items-center justify-content-center"},0===c.length?n.a.createElement("div",{className:"col-sm-12 text-center"},n.a.createElement("img",{src:"https://s8.gifyu.com/images/Infinity-0.9s-211px.gif",alt:"preloader"})):c.map((function(e){return n.a.createElement("div",{className:"col-lg-5 p-3 mx-2 mb-3",key:e._id,style:{backgroundColor:"#fff",borderRadius:"10px"}},n.a.createElement(E.a,{className:"align-items-center justify-content-center"},n.a.createElement("div",{className:"col-md-4 col-4"},n.a.createElement("img",{style:{width:"70px"},src:"data:image/png;base64,".concat(e.img),alt:"".concat(e.serviceName)})),n.a.createElement("div",{className:"col-md-8 col-8 d-flex justify-content-end align-items-center"},n.a.createElement("p",{style:!0===e.ispending?{backgroundColor:"#FFE3E3",color:"#FF4545",borderRadius:"15px"}:{backgroundColor:"#C6FFE0",color:"#009444",borderRadius:"15px"},className:"p-3"},!0===e.ispending?n.a.createElement("span",null,"pending"):n.a.createElement("span",null,"Done"))),n.a.createElement("div",{className:"col-md-12 mt-3"},n.a.createElement("h4",null,"web Design")),n.a.createElement("div",{className:"col-md-12 mt-1"},n.a.createElement("p",null,"We craft stunning and amazing web UI, using a well drrafted UX to fit your product."))))}))))))))}function ne(){document.body.style.backgroundColor="#e5e5e5";var e=Object(l.useContext)(se),a=e.userInfo,t=e.setUserInfo,c=Object(l.useState)({img:a.img,name:a.name,designationAndCompanyName:"",feedback:""}),r=Object(m.a)(c,2),s=r[0],o=r[1],i=function(e){t(Object(D.a)(Object(D.a)({},a),{},{successMessage:"",errorMessage:""})),"Designation"===e.target.name?o(Object(D.a)(Object(D.a)({},s),{},{designationAndCompanyName:e.target.value})):"Feedback"===e.target.name?o(Object(D.a)(Object(D.a)({},s),{},{feedback:e.target.value})):"Name"===e.target.name&&o(Object(D.a)(Object(D.a)({},s),{},{name:e.target.value}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-4 col-sm-5 col-lg-3 pr-0"},n.a.createElement(X,null)),n.a.createElement("div",{className:"col-md-8 col-sm-7 col-lg-9"},n.a.createElement(E.a,null,n.a.createElement(Z,{pageName:{name:"Feedback"}}),n.a.createElement(b.a,{onSubmit:function(e){var l=document.querySelector(".designation"),n=document.querySelector(".feedback");e.preventDefault(),u.a.post("https://polar-dawn-10321.herokuapp.com/sendClientFeedback",s).then((function(){t(Object(D.a)(Object(D.a)({},a),{},{successMessage:"Feedback submit successfully"})),l.value="",n.value=""})).catch((function(){t(Object(D.a)(Object(D.a)({},a),{},{errorMessage:"Can not submit feedback. Try again later"}))}))},style:{height:"86vh"}},n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-10 col-lg-8 mt-4 mb-1 mx-5"},n.a.createElement("p",{style:a.successMessage?{animation:"FadeAnimation 1s ease-in 2s forwards"}:null,className:"success"},a.successMessage),n.a.createElement("p",{style:a.errorMessage?{animation:"FadeAnimation 1s ease-in 2s forwards"}:null,className:"error"},a.errorMessage)),n.a.createElement("div",{className:"col-md-10 col-lg-12 my-1 mx-5"},n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Name"),n.a.createElement(b.a.Control,{defaultValue:a.name,onChange:i,required:!0,type:"text",className:"text",name:"Name",placeholder:"Enter name"})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null," Designation ,Company\u2019s name"),n.a.createElement(b.a.Control,{required:!0,onChange:i,type:"text",className:"designation ",name:"Designation",placeholder:"Enter Designation , Company\u2019s name "})),n.a.createElement(f.a,null,n.a.createElement(b.a.Label,null,"Your Feedback"),n.a.createElement("textarea",{required:!0,onChange:i,className:"form-control feedback",name:"Feedback",placeholder:"Enter Feedback",rows:"3"})),n.a.createElement(v.a,{type:"submit",className:"mt-5 px-5 commonBtn "},"Submit")))))))))}t(148);function ce(){document.body.style.backgroundColor="#e5e5e5";var e=Object(l.useContext)(se),a=e.userInfo,t=e.setUserInfo,c=Object(l.useState)({email:""}),r=Object(m.a)(c,2),s=r[0],o=r[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"col-md-4 col-sm-5 col-lg-3 pr-0"},n.a.createElement(X,null)),n.a.createElement("div",{className:"col-md-8 col-sm-7 col-lg-9 p-0"},n.a.createElement(Z,{pageName:{name:"Make Admin"}}),n.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),u.a.post("https://polar-dawn-10321.herokuapp.com/addAdmin",s).then((function(){t(Object(D.a)(Object(D.a)({},a),{},{successMessage:"Make admin Successfully"}))})).catch((function(){t(Object(D.a)(Object(D.a)({},a),{},{errorMessage:"Can not make admin. Please Try again later"}))}))},className:"makeAdminForm",style:{height:"67vh"}},n.a.createElement(f.a,{className:"px-5 my-5"},n.a.createElement("p",{style:a.successMessage?{animation:"FadeAnimation 1s ease-in 2s forwards"}:null,className:"success"},a.successMessage),n.a.createElement("p",{style:a.errorMessage?{animation:"FadeAnimation 1s ease-in 2s forwards"}:null,className:"error"},a.errorMessage),n.a.createElement(b.a.Label,null,"Email"),n.a.createElement("div",{className:"d-flex emailContainer justify-content-center align-items-center"},n.a.createElement(b.a.Control,{onChange:function(e){"Email"===e.target.name&&(o(Object(D.a)(Object(D.a)({},s),{},{email:e.target.value})),a.successMessage="",a.errorMessage="")},required:!0,type:"email",className:" email",name:"Email",placeholder:"Enter email"}),n.a.createElement(v.a,{type:"submit",className:"mx-3 adminBtn commonBtn"},"Make Admin"))))))))}function re(){return document.body.style.backgroundColor="#fbd062",n.a.createElement("div",null,n.a.createElement(S,null),n.a.createElement(d.a,null,n.a.createElement("div",{className:"col-sm-12 text-center my-5"},n.a.createElement("h1",null,"This Page is Under Development"))))}var me=Object(l.createContext)(),se=Object(l.createContext)();var oe=function(){var e=Object(l.useState)({isLogin:!1,name:"",email:"",img:""}),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)({error:"",success:""}),i=Object(m.a)(r,2),u=i[0],d=i[1];return n.a.createElement(se.Provider,{value:{userInfo:t,setUserInfo:c}},n.a.createElement(me.Provider,{value:{message:u,setMessage:d}},n.a.createElement(s.a,null,n.a.createElement(o.d,null,n.a.createElement(o.b,{exact:!0,path:"/"},n.a.createElement(I,null)),n.a.createElement(o.b,{exact:!0,path:"/home"},n.a.createElement(I,null)),n.a.createElement(o.b,{path:"/loginForm"},n.a.createElement(B,null)),n.a.createElement(o.b,{path:"/allClientFeedback"},n.a.createElement(R,null)),n.a.createElement(o.b,{path:"/allServices"},n.a.createElement(U,null)),n.a.createElement(o.b,{path:"/ourTeam"},n.a.createElement(re,null)),n.a.createElement(T,{path:"/addService"},n.a.createElement($,null)),n.a.createElement(T,{path:"/allServiceList"},n.a.createElement(ae,null)),n.a.createElement(T,{path:"/order/:title"},n.a.createElement(te,null)),n.a.createElement(T,{path:"/order"},n.a.createElement(te,null)),n.a.createElement(T,{path:"/serviceList"},n.a.createElement(le,null)),n.a.createElement(T,{path:"/feedback"},n.a.createElement(ne,null)),n.a.createElement(T,{path:"/makeAdmin"},n.a.createElement(ce,null)),n.a.createElement(o.b,{path:"*"},n.a.createElement(G,null))))))};r.a.render(n.a.createElement(oe,null),document.getElementById("root"))},77:function(e,a,t){e.exports=t(149)},82:function(e,a,t){},99:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.aa17dd20.chunk.js.map