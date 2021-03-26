(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(38),r=n.n(s),i=(n(27),n(2)),o=(n(57),n(11)),l=n(3),u=n(5),j=n.n(u),d=function(e){return j.a.post("/api/user",e)},b=function(e){return j.a.post("/api/user/login",e)},m=function(e){return j.a.put("/api/user/sendResetEmail",e)},h=function(e){return j.a.get("/api/user/getByToken/"+e)},f=function(e){return j.a.put("/api/user/updatePassword",e)},p=function(e){return j.a.get("/api/user/logout",e)},O=function(){return j()({method:"get",url:"/api/food",headers:{}})},x=function(){return j.a.get("/api/food/get-all/grocery")},v=function(e){return j.a.put("/api/user/grocery-item/"+e)},g=function(e){return j.a.post("/api/fridge",e)},N=function(){return j.a.get("/api/fridge")},w=function(e,t){return j.a.put("/api/fridge/"+e,t)},y=function(e){return j.a.put("/api/user/delete/"+e)},C=function(){return j.a.get("/api/user/isUserAuthenticated")},k=n(0);function D(e){var t=Object(c.useState)({email:"",password:""}),n=Object(i.a)(t,2);n[0],n[1];return Object(k.jsx)("div",{className:"auth-wrapper",children:Object(k.jsx)("div",{className:"auth-inner",children:Object(k.jsxs)("form",{children:[Object(k.jsx)("h3",{children:"Sign In"}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Email address"}),Object(k.jsx)("input",{id:"email",type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Password"}),Object(k.jsx)("input",{id:"password",type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(k.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(k.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(k.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var t=document.querySelector("#email").value.trim(),n=document.querySelector("#password").value.trim();b({email:t,password:n}).then((function(e){e.data.isAuthenticated&&window.location.replace("/home")})).catch((function(e){console.log(e),alert("Try again!")}))},className:"btn btn-primary btn-block",children:"Submit"}),Object(k.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(k.jsx)("a",{href:"./resetpass",children:"password?"})," Need to ",Object(k.jsx)("a",{href:"./sign-up",children:"sign up?"})]})]})})})}var E=n(15);var S=function(){var e=Object(c.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(i.a)(e,2),n=t[0],a=t[1];function s(e){var t=e.target,c=t.name,s=t.value;a(Object(E.a)(Object(E.a)({},n),{},{[c]:s}))}return Object(k.jsx)("div",{className:"auth-wrapper",children:Object(k.jsx)("div",{className:"auth-inner",children:Object(k.jsxs)("form",{children:[Object(k.jsx)("h3",{children:"Sign Up"}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"First name"}),Object(k.jsx)("input",{onChange:s,name:"firstName",type:"text",className:"form-control",value:n.firstName,placeholder:"First name"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Last name"}),Object(k.jsx)("input",{onChange:s,name:"lastName",type:"text",className:"form-control",value:n.lastName,placeholder:"Last name"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Email address"}),Object(k.jsx)("input",{onChange:s,name:"email",type:"email",className:"form-control",value:n.email,placeholder:"Enter email"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{children:"Password"}),Object(k.jsx)("input",{onChange:s,name:"password",type:"password",className:"form-control",value:n.password,placeholder:"Enter password"})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),n.firstName&&n.lastName&&n.email&&n.password&&d({firstName:n.firstName,lastName:n.lastName,email:n.email,password:n.password}).then((function(){window.location.replace("/home")})).catch((function(e){}))},children:"Sign Up"}),Object(k.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(k.jsx)("a",{href:"./sign-in",children:"sign in?"})]})]})})})},_=n(14),I=(n(37),n(46)),F=n(39);function A(e){var t=e.id,n=e.message,c=e.deleteItem,a=e.moveItem;return Object(k.jsxs)("div",{className:"item",children:[Object(k.jsx)(F.a,{type:"button",className:"deleteButton",onClick:function(){return c(t)}}),Object(k.jsx)("div",{className:"foodName",children:Object(k.jsxs)("p",{children:[n,Object(k.jsx)(I.a,{type:"button",className:"fridgeButton",onClick:function(){return a(t)}})]})})]})}var L=a.a.createContext({});function B(){var e=a.a.useContext(L),t=Object(i.a)(e.grocery,2),n=t[0],s=(t[1],a.a.useContext(L)),r=Object(i.a)(s.list,2),o=r[0],l=r[1],u=a.a.useContext(L),j=Object(i.a)(u.getData,1)[0],d=a.a.useContext(L),b=Object(i.a)(d.fridgeItem,2),m=(b[0],b[1]),h=Object(c.useState)(Object(k.jsx)("div",{})),f=Object(i.a)(h,2),p=f[0],O=f[1];Object(c.useEffect)((function(){j()}),[]),Object(c.useEffect)((function(){}),[o],p);var x=function(e,t,n){var c=Object(_.a)(o);l(c.filter((function(t){return t._id!==e})));var a=(new Date).getTime();g({product:t,purchaseDate:a,expirationDate:a+24*n*60*60*1e3}).then((function(e){})).catch((function(e){})),y(e).then((function(e){})).catch((function(e){})),N().then((function(e){m(e.data.fridges.filter((function(e){return!e.tossed&&!e.eaten})))})).catch((function(e){}))},w=function(e){var t=Object(_.a)(o);l(t.filter((function(t){return t._id!==e}))),y(e).then((function(e){})).catch((function(e){}))};return Object(k.jsx)("div",{className:"auth-wrapper",children:Object(k.jsx)("div",{className:"auth-inner",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Add items to your grocery list!"}),Object(k.jsxs)("form",{children:[Object(k.jsx)("div",{className:"list container",children:Object(k.jsx)("div",{className:"input-group mb-3",children:Object(k.jsx)(a.a.Fragment,{children:Object(k.jsx)("input",{id:"input",type:"text",className:"input form-control",placeholder:"Grocery Item",onChange:function(e){var t=e.target.value;if(t.length>2){var c=n.filter((function(e){return e.product.toLowerCase().includes(t.toLowerCase())}));c.length?O(Object(k.jsx)("ul",{children:c.map((function(e,t){return Object(k.jsx)("button",{className:"foodCompletionSuggestionButton btn btn-success",onClick:function(e){!function(e){e.preventDefault();var t=Object(_.a)(o);n.map((function(n){n.product===e.target.textContent&&(t.push(n),v(n._id).then((function(e){})).catch((function(e){}))),document.querySelector("#input").value=""})),O(Object(k.jsx)("div",{})),l(t)}(e)},id:e._id,children:e.product},e._id)}))})):O(Object(k.jsx)("div",{children:Object(k.jsx)("em",{children:"No suggestions!"})}))}else O(Object(k.jsx)("div",{}))}})})})}),p]}),Object(k.jsx)("div",{className:"foodList",children:function(){var e=null;return o&&(e=o.map((function(e){return Object(k.jsx)(A,{message:e.product,deleteItem:function(){return w(e._id)},moveItem:function(){return x(e._id,e.product,e.shelfLife)}},e._id)}))),e}()}),Object(k.jsx)("hr",{})]})})})}var P=n(48),Y=n(47);function T(e){var t=e.id,n=e.message,c=e.expDate,a=e.eatItem,s=e.tossItem;return Object(k.jsxs)("div",{className:"item",children:[Object(k.jsx)(Y.a,{type:"button",className:"deleteButton",onClick:function(){return s(t)}}),Object(k.jsx)("div",{className:"foodName",children:Object(k.jsxs)("p",{children:[n,Object(k.jsx)(P.a,{type:"button",className:"fridgeButton",onClick:function(){return a(t)}}),Object(k.jsxs)("span",{className:"expDate",children:[" Exp: ",c]})]})})]})}function R(){var e=Object(c.useContext)(L),t=Object(i.a)(e.list,2),n=t[0],a=(t[1],Object(c.useContext)(L)),s=Object(i.a)(a.fridgeItem,2),r=s[0],o=s[1];function l(e){var t=e.substr(0,10).split("-");return t[1]+"-"+t[2]+"-"+t[0]}Object(c.useEffect)((function(){console.log(r)}),[r]),Object(c.useEffect)((function(){}),[n]),Object(c.useEffect)((function(){N().then((function(e){var t=e.data.fridges.filter((function(e){return!e.tossed&&!e.eaten}));o(t)})).catch((function(e){}))}),[]);return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"auth-wrapper",children:Object(k.jsx)("div",{className:"auth-inner",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Eat or toss items from your Fridge!"}),Object(k.jsx)("div",{className:"foodList",children:function(){if(r.length>0)return r.map((function(e){return Object(k.jsx)(T,{message:e.product,expDate:l(e.expirationDate),tossItem:function(){return function(e){var t=Object(_.a)(r);o(t.filter((function(t){return t._id!==e}))),w(e,{tossed:!0,tossedDate:new Date}).then((function(e){})).catch((function(e){}))}(e._id)},eatItem:function(){return function(e){var t=Object(_.a)(r);o(t.filter((function(t){return t._id!==e}))),w(e,{eaten:!0,eatenDate:new Date}).then((function(e){})).catch((function(e){}))}(e._id)}},e._id)}))}()})]})})})})}var q=n(49),M=n(50),U=n(52),J=n(51),V=n(24),G=n.n(V);G.a.globalFormat="MMM D, YYYY";var z=function(e){Object(U.a)(n,e);var t=Object(J.a)(n);function n(){return Object(q.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){return Object(k.jsx)(G.a,{local:!0})}}]),n}(a.a.Component);function H(){p({}).then((function(e){window.location.replace("/sign-in")})).catch((function(e){}))}function K(){var e=a.a.useContext(L),t=Object(i.a)(e.grocery,2),n=(t[0],t[1],a.a.useContext(L)),c=Object(i.a)(n.list,2);c[0],c[1];return Object(k.jsxs)("div",{className:"auth-wrapper",children:[Object(k.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light fixed-top",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(o.b,{className:"navbar-brand",to:"/sign-in",children:"FreshFridge"}),Object(k.jsx)("div",{className:"date",children:Object(k.jsx)(z,{})}),Object(k.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(k.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(o.b,{className:"nav-link",to:"/sign-in",onClick:H,children:"Logout"})})})})]})}),Object(k.jsx)("div",{className:"date"}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-sm-6",children:Object(k.jsx)(B,{})}),Object(k.jsx)("div",{className:"col-sm-6",children:Object(k.jsx)(R,{})})]})]})}var Q=function(){var e=Object(c.useState)({_id:""}),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(l.g)().token;return Object(c.useEffect)((function(){h(s).then((function(e){a({_id:e.data})})).catch((function(e){console.log(e)}))}),[]),Object(k.jsx)("div",{className:"auth-wrapper",children:Object(k.jsx)("div",{className:"auth-inner",children:Object(k.jsxs)("form",{children:[Object(k.jsx)("h3",{children:"Reset Your Password"}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{onChange:function(e){var t=e.target,c=t.name,s=t.value;a(Object(E.a)(Object(E.a)({},n),{},{[c]:s}))},name:"password",type:"password",className:"form-control",value:n.password,placeholder:"Password"})}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),n.password&&f({_id:n._id,password:n.password}).then((function(){window.location.replace("/sign-in")})).catch((function(e){}))},children:"Reset Password"})]})})})};var W=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(k.jsx)("div",{className:"auth-wrapper",children:Object(k.jsx)("div",{className:"auth-inner",children:Object(k.jsxs)("form",{children:[Object(k.jsx)("h3",{children:"Verify Your Email"}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{onChange:function(e){var t=e.target.value;a(t)},name:"email",type:"text",className:"form-control",value:n,placeholder:"email"})}),o?Object(k.jsx)("p",{children:o}):null,Object(k.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),n&&m({email:n}).then((function(e){e.data.message.msgError||l("Email Sent!")})).catch((function(e){}))},children:"Verify Email"})]})})})};var X=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(i.a)(s,2),u=r[0],j=r[1],d=Object(c.useState)(!1),b=Object(i.a)(d,2),m=b[0],h=b[1],f=Object(c.useState)([]),p=Object(i.a)(f,2),v=p[0],g=p[1];Object(c.useEffect)((function(){C().then((function(e){h(e.data.isAuthenticated),w()})).catch((function(e){return console.log(e)}))}),[m]);var w=function(){O().then((function(e){a(e.data),x().then((function(e){j(e.data.foods),N().then((function(e){g(e.data.fridges.filter((function(e){return!e.tossed&&!e.eaten})))})).catch((function(e){}))})).catch((function(e){}))})).catch((function(e){}))},y={grocery:[n,a],list:[u,j],getData:[w],fridgeItem:[v,g]};return Object(k.jsx)(L.Provider,{value:y,children:Object(k.jsx)(o.a,{children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(o.b,{className:"navbar-brand",to:"/sign-in",children:"FreshFridge"}),Object(k.jsx)("div",{className:"date",children:Object(k.jsx)(z,{})}),Object(k.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(k.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(o.b,{className:"nav-link",to:"/sign-in",children:"Login"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(o.b,{className:"nav-link",to:"/sign-up",children:"Sign up"})})]})})]})}),Object(k.jsxs)(l.d,{children:[Object(k.jsx)(l.b,{exact:!0,path:"/",children:m?Object(k.jsx)(l.a,{to:"/home"}):Object(k.jsx)(D,{setAuth:h})}),Object(k.jsx)(l.b,{path:"/sign-in",children:m?Object(k.jsx)(l.a,{to:"/home"}):Object(k.jsx)(D,{setAuth:h})}),Object(k.jsx)(l.b,{path:"/sign-up",component:S}),Object(k.jsx)(l.b,{path:"/home",children:m?Object(k.jsx)(K,{setAuth:h}):Object(k.jsx)(l.a,{to:"/sign-in"})}),Object(k.jsx)(l.b,{exact:!0,path:"/resetpass",component:W}),Object(k.jsx)(l.b,{exact:!0,path:"/resetpass/:token",children:Object(k.jsx)(Q,{})})]})]})})})};r.a.render(Object(k.jsx)(X,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.4b177d39.chunk.js.map