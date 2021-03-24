(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(38),r=n.n(s),i=(n(27),n(2)),o=(n(57),n(11)),l=n(3),j=n(5),u=n.n(j),d=function(e){return u.a.post("/api/user",e)},b=function(e){return u.a.post("/api/user/login",e)},m=function(e){return u.a.put("/api/user/sendResetEmail",e)},h=function(e){return u.a.get("/api/user/getByToken/"+e)},f=function(e){return u.a.put("/api/user/updatePassword",e)},p=function(e){return u.a.get("/api/user/logout",e)},O=function(){return u()({method:"get",url:"/api/food",headers:{}})},x=function(){return u.a.get("/api/food/get-all/grocery")},v=function(e){return u.a.put("/api/user/grocery-item/"+e)},g=function(e){return u.a.post("/api/fridge",e)},N=function(){return u.a.get("/api/fridge")},w=function(e,t){return u.a.put("/api/fridge/"+e,t)},y=function(e){return u.a.put("/api/user/delete/"+e)},C=n(0);function k(e){var t=Object(c.useState)({email:"",password:""}),n=Object(i.a)(t,2);n[0],n[1];return Object(C.jsx)("div",{className:"auth-wrapper",children:Object(C.jsx)("div",{className:"auth-inner",children:Object(C.jsxs)("form",{children:[Object(C.jsx)("h3",{children:"Sign In"}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Email address"}),Object(C.jsx)("input",{id:"email",type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Password"}),Object(C.jsx)("input",{id:"password",type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(C.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(C.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(C.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var t=document.querySelector("#email").value.trim(),n=document.querySelector("#password").value.trim();b({email:t,password:n}).then((function(e){e.data.isAuthenticated&&window.location.replace("/home")})).catch((function(e){alert("Try again!")}))},className:"btn btn-primary btn-block",children:"Submit"}),Object(C.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(C.jsx)("a",{href:"./resetpass",children:"password?"}),"Need to ",Object(C.jsx)("a",{href:"./sign-up",children:"sign up?"})]})]})})})}var E=n(15);var D=function(){var e=Object(c.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(i.a)(e,2),n=t[0],a=t[1];function s(e){var t=e.target,c=t.name,s=t.value;a(Object(E.a)(Object(E.a)({},n),{},{[c]:s}))}return Object(c.useEffect)((function(){}),[]),Object(C.jsx)("div",{className:"auth-wrapper",children:Object(C.jsx)("div",{className:"auth-inner",children:Object(C.jsxs)("form",{children:[Object(C.jsx)("h3",{children:"Sign Up"}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"First name"}),Object(C.jsx)("input",{onChange:s,name:"firstName",type:"text",className:"form-control",value:n.firstName,placeholder:"First name"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Last name"}),Object(C.jsx)("input",{onChange:s,name:"lastName",type:"text",className:"form-control",value:n.lastName,placeholder:"Last name"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Email address"}),Object(C.jsx)("input",{onChange:s,name:"email",type:"email",className:"form-control",value:n.email,placeholder:"Enter email"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Password"}),Object(C.jsx)("input",{onChange:s,name:"password",type:"password",className:"form-control",value:n.password,placeholder:"Enter password"})]}),Object(C.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),n.firstName&&n.lastName&&n.email&&n.password&&d({firstName:n.firstName,lastName:n.lastName,email:n.email,password:n.password}).then((function(){window.location.replace("/home")})).catch((function(e){}))},children:"Sign Up"}),Object(C.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(C.jsx)("a",{href:"./sign-in",children:"sign in?"})]})]})})})},S=n(14),_=(n(37),n(39)),F=n(46);function I(e){var t=e.id,n=e.message,c=e.deleteItem,a=e.moveItem;return Object(C.jsxs)("div",{className:"item",children:[Object(C.jsx)("div",{className:"deleteButton",children:Object(C.jsx)(_.a,{onClick:function(){return c(t)}})}),Object(C.jsx)("div",{className:"foodName",children:Object(C.jsxs)("p",{children:[n,Object(C.jsx)(F.a,{className:"fridgeButton",onClick:function(){return a(t)}})]})})]})}var L=a.a.createContext({});function B(){var e=a.a.useContext(L),t=Object(i.a)(e.grocery,2),n=t[0],s=(t[1],a.a.useContext(L)),r=Object(i.a)(s.list,2),o=r[0],l=r[1],j=a.a.useContext(L),u=Object(i.a)(j.getData,1)[0],d=Object(c.useState)(Object(C.jsx)("div",{})),b=Object(i.a)(d,2),m=b[0],h=b[1];Object(c.useEffect)((function(){u()}),[]),Object(c.useEffect)((function(){}),[o],m);var f=function(e,t,n){var c=Object(S.a)(o);l(c.filter((function(t){return t._id!==e})));var a=(new Date).getTime();g({product:t,purchaseDate:a,expirationDate:a+24*n*60*60*1e3}).then((function(e){})).catch((function(e){})),y(e).then((function(e){window.location.reload()})).catch((function(e){}))},p=function(e){var t=Object(S.a)(o);l(t.filter((function(t){return t._id!==e}))),y(e).then((function(e){})).catch((function(e){}))};return Object(C.jsx)("div",{className:"auth-wrapper",children:Object(C.jsx)("div",{className:"auth-inner",children:Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Add items to your grocery list!"}),Object(C.jsxs)("form",{children:[Object(C.jsx)("div",{className:"list container",children:Object(C.jsx)("div",{className:"input-group mb-3",children:Object(C.jsx)(a.a.Fragment,{children:Object(C.jsx)("input",{id:"input",type:"text",className:"input form-control",placeholder:"Grocery Item",onChange:function(e){var t=e.target.value;if(console.log(t),t.length>2){console.log(n);var c=n.filter((function(e){return e.product.toLowerCase().includes(t.toLowerCase())}));c.length?h(Object(C.jsx)("ul",{children:c.map((function(e,t){return Object(C.jsx)("button",{className:"foodCompletionSuggestionButton btn btn-success",onClick:function(e){!function(e){e.preventDefault();var t=Object(S.a)(o);n.map((function(n){n.product===e.target.textContent&&(t.push(n),v(n._id).then((function(e){})).catch((function(e){}))),document.querySelector("#input").value=""})),h(Object(C.jsx)("div",{})),l(t)}(e)},id:e._id,children:e.product},e._id)}))})):h(Object(C.jsx)("div",{children:Object(C.jsx)("em",{children:"No suggestions!"})}))}else h(Object(C.jsx)("div",{}))}})})})}),m]}),Object(C.jsx)("div",{className:"foodList",children:function(){var e=null;return o&&(console.log(o),e=o.map((function(e){return Object(C.jsx)(I,{message:e.product,deleteItem:function(){return p(e._id)},moveItem:function(){return f(e._id,e.product,e.shelfLife)}},e._id)}))),e}()}),Object(C.jsx)("hr",{})]})})})}var P=n(48),A=n(47);function Y(e){var t=e.id,n=e.message,c=e.expDate,a=e.eatItem,s=e.tossItem;return Object(C.jsxs)("div",{className:"item",children:[Object(C.jsx)("div",{className:"deleteButton",children:Object(C.jsx)(A.a,{onClick:function(){return s(t)}})}),Object(C.jsx)("div",{className:"foodName",children:Object(C.jsxs)("p",{children:[n,Object(C.jsx)(P.a,{className:"fridgeButton",onClick:function(){return a(t)}}),Object(C.jsxs)("span",{className:"expDate",children:[" Exp: ",c]})]})})]})}function T(){var e=Object(c.useContext)(L),t=Object(i.a)(e.list,2),n=t[0],a=(t[1],Object(c.useState)([])),s=Object(i.a)(a,2),r=s[0],o=s[1];function l(e){var t=e.substr(0,10).split("-");return t[1]+"-"+t[2]+"-"+t[0]}Object(c.useEffect)((function(){}),[r]),Object(c.useEffect)((function(){}),[n]),Object(c.useEffect)((function(){N().then((function(e){var t=e.data.fridges.filter((function(e){return!e.tossed&&!e.eaten}));o(t)})).catch((function(e){}))}),[]);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"auth-wrapper",children:Object(C.jsx)("div",{className:"auth-inner",children:Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Eat or toss items from your Fridge!"}),Object(C.jsx)("div",{className:"foodList",children:function(){if(r.length>0)return r.map((function(e){return Object(C.jsx)(Y,{message:e.product,expDate:l(e.expirationDate),tossItem:function(){return function(e){var t=Object(S.a)(r);o(t.filter((function(t){return t._id!==e}))),w(e,{tossed:!0,tossedDate:new Date}).then((function(e){})).catch((function(e){}))}(e._id)},eatItem:function(){return function(e){var t=Object(S.a)(r);o(t.filter((function(t){return t._id!==e}))),w(e,{eaten:!0,eatenDate:new Date}).then((function(e){})).catch((function(e){}))}(e._id)}},e._id)}))}()})]})})})})}var R=n(49),q=n(50),M=n(52),J=n(51),U=n(24),V=n.n(U);V.a.globalFormat="MMM D, YYYY";var G=function(e){Object(M.a)(n,e);var t=Object(J.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(q.a)(n,[{key:"render",value:function(){return Object(C.jsx)(V.a,{local:!0})}}]),n}(a.a.Component);function z(){p({}).then((function(e){window.location.replace("/sign-in")})).catch((function(e){}))}function H(){var e=a.a.useContext(L),t=Object(i.a)(e.grocery,2),n=(t[0],t[1],a.a.useContext(L)),c=Object(i.a)(n.list,2);c[0],c[1];return Object(C.jsxs)("div",{className:"auth-wrapper",children:[Object(C.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light fixed-top",children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(o.b,{className:"navbar-brand",to:"/sign-in",children:"FreshFridge"}),Object(C.jsx)("div",{className:"date",children:Object(C.jsx)(G,{})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(C.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(o.b,{className:"nav-link",to:"/sign-in",onClick:z,children:"Logout"})})})})]})}),Object(C.jsx)("div",{className:"date"}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-6",children:Object(C.jsx)(B,{})}),Object(C.jsx)("div",{className:"col-sm-6",children:Object(C.jsx)(T,{})})]})]})}var K=function(){var e=Object(c.useState)({_id:""}),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(l.g)().token;return Object(c.useEffect)((function(){h(s).then((function(e){a({_id:e.data})})).catch((function(e){console.log(e)}))}),[]),Object(C.jsx)("div",{className:"auth-wrapper",children:Object(C.jsx)("div",{className:"auth-inner",children:Object(C.jsxs)("form",{children:[Object(C.jsx)("h3",{children:"Reset Your Password"}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{onChange:function(e){var t=e.target,c=t.name,s=t.value;a(Object(E.a)(Object(E.a)({},n),{},{[c]:s}))},name:"password",type:"password",className:"form-control",value:n.password,placeholder:"Password"})}),Object(C.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),n.password&&f({_id:n._id,password:n.password}).then((function(){window.location.replace("/sign-in")})).catch((function(e){}))},children:"Reset Password"})]})})})};var Q=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(C.jsx)("div",{className:"auth-wrapper",children:Object(C.jsx)("div",{className:"auth-inner",children:Object(C.jsxs)("form",{children:[Object(C.jsx)("h3",{children:"Verify Your Email"}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{onChange:function(e){var t=e.target.value;a(t)},name:"email",type:"text",className:"form-control",value:n,placeholder:"email"})}),o?Object(C.jsx)("p",{children:o}):null,Object(C.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),n&&m({email:n}).then((function(e){e.data.message.msgError||l("Email Sent!")})).catch((function(e){}))},children:"Verify Email"})]})})})};var W=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(i.a)(s,2),j=r[0],u=r[1],d=Object(c.useState)(!1),b=Object(i.a)(d,2),m=b[0],h=b[1];Object(c.useEffect)((function(){f()}),[]);var f=function(){O().then((function(e){a(e.data),x().then((function(e){u(e.data.foods)})).catch((function(e){}))})).catch((function(e){}))},p={grocery:[n,a],list:[j,u],getData:[f]};return Object(C.jsx)(L.Provider,{value:p,children:Object(C.jsx)(o.a,{children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(o.b,{className:"navbar-brand",to:"/sign-in",children:"FreshFridge"}),Object(C.jsx)("div",{className:"date",children:Object(C.jsx)(G,{})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(C.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(o.b,{className:"nav-link",to:"/sign-in",children:"Login"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(o.b,{className:"nav-link",to:"/sign-up",children:"Sign up"})})]})})]})}),Object(C.jsxs)(l.d,{children:[Object(C.jsx)(l.b,{exact:!0,path:"/",children:m?Object(C.jsx)(l.a,{to:"/home"}):Object(C.jsx)(k,{setAuth:h})}),Object(C.jsx)(l.b,{path:"/sign-in",children:m?Object(C.jsx)(l.a,{to:"/home"}):Object(C.jsx)(k,{setAuth:h})}),Object(C.jsx)(l.b,{path:"/sign-up",component:D}),Object(C.jsx)(l.b,{path:"/home",component:H}),Object(C.jsx)(l.b,{exact:!0,path:"/resetpass",component:Q}),Object(C.jsx)(l.b,{exact:!0,path:"/resetpass/:token",children:Object(C.jsx)(K,{})})]})]})})})};r.a.render(Object(C.jsx)(W,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.ee6ca5ea.chunk.js.map