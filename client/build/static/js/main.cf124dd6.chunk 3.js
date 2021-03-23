(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,a,t){e.exports=t(82)},53:function(e,a,t){},55:function(e,a,t){},73:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(34),c=t.n(l),o=(t(53),t(2)),s=(t(54),t(55),t(9)),m=t(1),i=t(4),u=t.n(i),d={saveUser:function(e){return u.a.post("/api/user",e)},getUser:function(e){return u.a.post("/api/user/login",e)},sendResetEmail:function(e){return u.a.put("/api/user/sendResetEmail",e)},getUserByToken:function(e){return u.a.get("/api/user/getByToken/"+e)},updateUser:function(e){return u.a.put("/api/user/updatePassword",e)},logoutUser:function(e){return u.a.get("/api/user/logout",e)},saveFood:function(e){return u.a.post("/api/food",e)},getFood:function(){return u()({method:"get",url:"/api/food",headers:{}})},getAllGrocery:function(){return u.a.get("/api/food/get-all/grocery")},addGrocery:function(e){return u.a.put("/api/user/grocery-item/"+e)},addFridge:function(e){return u.a.post("/api/fridge",e)},userFridge:function(){return u.a.get("/api/fridge")},updateFridge:function(e){return u.a.get("/api/fridge/"+e)},removeGrocery:function(e){return u.a.delete("/api/user/delete/"+e)}};function p(e){var a=Object(n.useState)({email:"",password:""}),t=Object(o.a)(a,2),l=t[0];t[1];return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",null,r.a.createElement("h3",null,"Sign In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{id:"email",type:"email",className:"form-control",placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{id:"password",type:"password",className:"form-control",placeholder:"Enter password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault();var a=document.querySelector("#email").value.trim(),t=document.querySelector("#password").value.trim();d.getUser({email:a,password:t}).then(function(e){console.log(e),console.log(l.email),e.data.isAuthenticated&&window.location.replace("/home")}).catch(function(e){console.log(e),alert("Try again!")})},className:"btn btn-primary btn-block"},"Submit"),r.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",r.a.createElement("a",{href:"./"},"password?"),"Need to ",r.a.createElement("a",{href:"./sign-up"},"sign up?")))))}var f=t(11),E=t(17);var v=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),a=Object(o.a)(e,2),t=a[0],l=a[1];function c(e){var a=e.target,n=a.name,r=a.value;l(Object(E.a)({},t,Object(f.a)({},n,r)))}return Object(n.useEffect)(function(){},[]),r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",null,r.a.createElement("h3",null,"Sign Up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First name"),r.a.createElement("input",{onChange:c,name:"firstName",type:"text",className:"form-control",value:t.firstName,placeholder:"First name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last name"),r.a.createElement("input",{onChange:c,name:"lastName",type:"text",className:"form-control",value:t.lastName,placeholder:"Last name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{onChange:c,name:"email",type:"email",className:"form-control",value:t.email,placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:c,name:"password",type:"password",className:"form-control",value:t.password,placeholder:"Enter password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),t.firstName&&t.lastName&&t.email&&t.password&&d.saveUser({firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password}).then(function(){window.location.replace("/home")}).catch(function(e){console.log(e)})}},"Sign Up"),r.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",r.a.createElement("a",{href:"./sign-in"},"sign in?")))))},g=t(19),b=(t(73),t(35)),h=t(42);function N(e){var a=e.id,t=e.message,n=e.deleteItem,l=e.moveItem;return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"deleteButton"},r.a.createElement(b.a,{onClick:function(){return n(a)}})),r.a.createElement("div",{className:"foodName"},r.a.createElement("p",null,t,r.a.createElement(h.a,{className:"fridgeButton",onClick:function(){return l(a)}}))))}var w=r.a.createContext(null);function y(){var e=r.a.useContext(w),a=Object(o.a)(e.grocery,2),t=a[0],l=(a[1],r.a.useContext(w)),c=Object(o.a)(l.list,2),s=c[0],m=c[1],i=r.a.useContext(w),u=Object(o.a)(i.getData,1)[0];console.log("88888888888888groc",t),Object(n.useEffect)(function(){u()},[]),Object(n.useEffect)(function(){console.log("****rerendering")},[s]);var p=function(e,a,t){var n=Object(g.a)(s);m(n.filter(function(a){return a._id!==e}));var r=(new Date).getTime(),l=r+24*t*60*60*1e3;d.addFridge({product:a,purchaseDate:r,expirationDate:l}).then(function(e){}).catch(function(e){console.log(e)})},f=function(e){var a=Object(g.a)(s);m(a.filter(function(a){return a._id!==e})),d.removeGrocery(e).then(function(e){console.log(e)}).catch(function(e){console.log(e)})};return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("div",null,r.a.createElement("h2",null,"Add items to your grocery list!"),r.a.createElement("form",null,r.a.createElement("div",{className:"list container"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{id:"input",type:"text",className:"input form-control",placeholder:"Grocery Item"}),r.a.createElement("button",{id:"addButton",className:"btn btn-success",onClick:function(e){!function(e){e.preventDefault();var a=document.querySelector("#input").value.toLowerCase(),n=Object(g.a)(s);t.map(function(e){e.product.toLowerCase()===a&&(n.push(e),d.addGrocery(e._id).then(function(e){}).catch(function(e){console.log(e)})),document.querySelector("#input").value=""}),m(n)}(e)}},"ADD")))),r.a.createElement("div",null,function(){var e=null;return s.length>0&&(e=s.map(function(e){return r.a.createElement(N,{key:e._id,message:e.product,deleteItem:function(){return f(e._id)},moveItem:function(){return p(e._id,e.product,e.shelfLife)}})})),e}()),r.a.createElement("hr",null))))}function j(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null,"Fridge")))))))}var O=t(43),k=t(44),C=t(46),x=t(45),F=t(47),S=t(21),D=t.n(S);D.a.globalFormat="MMM D, YYYY";var U=function(e){function a(){return Object(O.a)(this,a),Object(C.a)(this,Object(x.a)(a).apply(this,arguments))}return Object(F.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement(D.a,{local:!0})}}]),a}(r.a.Component);function _(){d.logoutUser({}).then(function(e){window.location.replace("/sign-in")}).catch(function(e){console.log(e)})}function A(){var e=r.a.useContext(w),a=Object(o.a)(e.grocery,2),t=(a[0],a[1],r.a.useContext(w)),n=Object(o.a)(t.list,2);n[0],n[1];return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{className:"navbar-brand",to:"/sign-in"},"FreshFridge"),r.a.createElement("div",{className:"date"},r.a.createElement(U,null)),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/sign-in",onClick:_},"Logout")))))),r.a.createElement("div",{className:"date"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(y,null)),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(j,null))))}var B=function(){var e=Object(n.useState)({_id:""}),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(m.g)().token;return Object(n.useEffect)(function(){d.getUserByToken(c).then(function(e){l({_id:e.data})}).catch(function(e){return console.log(e)})},[]),r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",null,r.a.createElement("h3",null,"Reset Your Password"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(e){var a=e.target,n=a.name,r=a.value;l(Object(E.a)({},t,Object(f.a)({},n,r)))},name:"password",type:"password",className:"form-control",value:t.password,placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),t.password&&d.updateUser({_id:t._id,password:t.password}).then(function(){window.location.replace("/sign-in")}).catch(function(e){console.log(e)})}},"Reset Password"))))};var G=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),m=s[0],i=s[1];return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("form",null,r.a.createElement("h3",null,"Verify Your Email"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(e){var a=e.target.value;l(a)},name:"email",type:"text",className:"form-control",value:t,placeholder:"email"})),m?r.a.createElement("p",null,m):null,r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){e.preventDefault(),t&&d.sendResetEmail({email:t}).then(function(e){e.data.message.msgError||(i("Email Sent!"),console.log(m))}).catch(function(e){console.log(e)})}},"Verify Email"))))};var I=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),u=i[0],f=i[1],E=Object(n.useState)(!1),g=Object(o.a)(E,2),b=g[0],h=g[1];Object(n.useEffect)(function(){N()},[]);var N=function(){d.getFood().then(function(e){l(e.data),d.getAllGrocery().then(function(e){f(e.data.foods),console.log(u)}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},y={grocery:[t,l],list:[u,f],getData:[N]};return r.a.createElement(w.Provider,{value:y},r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{className:"navbar-brand",to:"/sign-in"},"FreshFridge"),r.a.createElement("div",{className:"date"},r.a.createElement(U,null)),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/sign-in"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/sign-up"},"Sign up")))))),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},b?r.a.createElement(m.a,{to:"/home"}):r.a.createElement(p,{setAuth:h})),r.a.createElement(m.b,{path:"/sign-in"},b?r.a.createElement(m.a,{to:"/home"}):r.a.createElement(p,{setAuth:h})),r.a.createElement(m.b,{path:"/sign-up",component:v}),r.a.createElement(m.b,{path:"/home",component:A}),r.a.createElement(m.b,{exact:!0,path:"/resetpass",component:G}),r.a.createElement(m.b,{exact:!0,path:"/resetpass/:token"},r.a.createElement(B,null))))))};c.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.cf124dd6.chunk.js.map