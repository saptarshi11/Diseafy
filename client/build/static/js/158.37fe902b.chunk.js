"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[158],{3321:function(e,n,s){s(2791);var t=s(184);n.Z=function(){return(0,t.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,s){s.d(n,{Z:function(){return l}});s(2791);var t=s(6355),i=s(3495),r=s(1087),o=s(184),l=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-links",children:[(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/doctors",children:"Doctors"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/appointments",children:"Appointments"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/notifications",children:"Notifications"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.fO,{to:"/#contact",children:"Contact Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.OL,{to:"/profile",children:"Profile"})})]})]}),(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("h3",{children:"Social links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"facebook",children:(0,o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.tBk,{})})}),(0,o.jsx)("li",{className:"youtube",children:(0,o.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.V2E,{})})}),(0,o.jsx)("li",{className:"instagram",children:(0,o.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(t.Zf_,{})})})]})]})]}),(0,o.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,o.jsx)("a",{href:"https://github.com/saptarshi11/Diseafy",target:"_blank",rel:"noreferrer",children:"Diseafy.io"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,s){s.d(n,{Z:function(){return m}});var t=s(9439),i=s(2791),r=s(7689),o=s(1087),l=s(3495),a=s(9434),c=s(5318),d=s(3853),u=s(1213),h=s(456),x=s(184),m=function(){var e=(0,i.useState)(!1),n=(0,t.Z)(e,2),s=n[0],m=n[1],j=(0,a.I0)(),p=(0,r.s0)(),f=(0,i.useState)(localStorage.getItem("token")||""),v=(0,t.Z)(f,2),g=v[0],N=(v[1],(0,i.useState)(localStorage.getItem("token")?(0,h.Z)(localStorage.getItem("token")):"")),k=(0,t.Z)(N,2),b=k[0];k[1];return console.log(b),(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:s?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(o.OL,{to:"/",children:"Diseafy.io"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),g&&b.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!b.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),!b.isDoctor&&(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{to:"/profile",children:"Profile"})})]}),g?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:function(){j((0,c.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!s&&(0,x.jsx)(d.cur,{className:"menu-open",onClick:function(){m(!0)}}),s&&(0,x.jsx)(u.ySC,{className:"menu-close",onClick:function(){m(!1)}})]})]})}},3158:function(e,n,s){s.r(n),s.d(n,{default:function(){return Z}});var t=s(4165),i=s(5861),r=s(9439),o=s(2791),l=s(7689),a=s(4942),c=s(1413),d=s(3263),u=s(3402),h=s(4373),x=s(184),m=function(e){var n=e.setModalOpen,s=e.ele,l=(0,o.useState)({date:"",time:""}),m=(0,r.Z)(l,2),j=m[0],p=m[1],f=function(e){var n=e.target,s=n.name,t=n.value;return p((0,c.Z)((0,c.Z)({},j),{},(0,a.Z)({},s,t)))},v=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(i){var r,o,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),e.prev=1,e.next=4,u.ZP.promise(d.Z.post("/appointment/bookappointment",{doctorId:null===s||void 0===s||null===(r=s.userId)||void 0===r?void 0:r._id,date:j.date,time:j.time,doctorname:"".concat(null===s||void 0===s||null===(o=s.userId)||void 0===o?void 0:o.firstname," ").concat(null===s||void 0===s||null===(l=s.userId)||void 0===l?void 0:l.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 4:n(!1),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"modal flex-center",children:(0,x.jsxs)("div",{className:"modal__content",children:[(0,x.jsx)("h2",{className:"page-heading",children:"Book Appointment"}),(0,x.jsx)(h.QAE,{onClick:function(){n(!1)},className:"close-btn"}),(0,x.jsx)("div",{className:"register-container flex-center book",children:(0,x.jsxs)("form",{className:"register-form",children:[(0,x.jsx)("input",{type:"date",name:"date",className:"form-input",value:j.date,onChange:f}),(0,x.jsx)("input",{type:"time",name:"time",className:"form-input",value:j.time,onChange:f}),(0,x.jsx)("button",{type:"submit",className:"btn form-btn",onClick:v,children:"book"})]})})]})})})},j=function(e){var n,s,t,i,a=e.ele,c=(0,l.s0)(),d=(0,o.useState)(!1),u=(0,r.Z)(d,2),h=u[0],j=u[1],p=(0,o.useState)(localStorage.getItem("token")||""),f=(0,r.Z)(p,2),v=f[0];f[1];return(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-img flex-center",children:(0,x.jsx)("img",{src:(null===a||void 0===a||null===(n=a.userId)||void 0===n?void 0:n.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:"profile"})}),(0,x.jsxs)("h3",{className:"card-name",children:["Dr. ",(null===a||void 0===a||null===(s=a.userId)||void 0===s?void 0:s.firstname)+" "+(null===a||void 0===a||null===(t=a.userId)||void 0===t?void 0:t.lastname)]}),(0,x.jsxs)("p",{className:"specialization",children:[(0,x.jsx)("strong",{children:"Specialization: "}),null===a||void 0===a?void 0:a.specialization]}),(0,x.jsxs)("p",{className:"experience",children:[(0,x.jsx)("strong",{children:"Experience: "}),null===a||void 0===a?void 0:a.experience,"yrs"]}),(0,x.jsxs)("p",{className:"fees",children:[(0,x.jsx)("strong",{children:"Fees per consultation: "}),"$ ",null===a||void 0===a?void 0:a.fees]}),(0,x.jsxs)("p",{className:"phone",children:[(0,x.jsx)("strong",{children:"Phone: "}),null===a||void 0===a||null===(i=a.userId)||void 0===i?void 0:i.mobile]}),(0,x.jsx)("button",{className:"btn appointment-btn",onClick:function(){""===v&&c("/login"),j(!0)},children:"Book Appointment"}),h&&(0,x.jsx)(m,{setModalOpen:j,ele:a})]})},p=s(6794),f=s(3841),v=s(4971),g=s(3200),N=s(9434),k=s(5318),b=s(3321),Z=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),s=n[0],l=n[1],a=(0,N.I0)(),c=(0,N.v9)((function(e){return e.root})).loading,d=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((0,k.K4)(!0)),e.next=3,(0,v.Z)("/doctor/getalldoctors");case 3:n=e.sent,l(n),a((0,k.K4)(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){d()}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f.Z,{}),c&&(0,x.jsx)(g.Z,{}),!c&&(0,x.jsxs)("section",{className:"container doctors",children:[(0,x.jsx)("h2",{className:"page-heading",children:"Our Doctors"}),s.length>0?(0,x.jsx)("div",{className:"doctors-card-container",children:s.map((function(e){return(0,x.jsx)(j,{ele:e},e._id)}))}):(0,x.jsx)(b.Z,{})]}),(0,x.jsx)(p.Z,{})]})}}}]);
//# sourceMappingURL=158.37fe902b.chunk.js.map