(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[12],{449:function(e,s,t){"use strict";var a=t(450),r=t.n(a),n=t(17),i=t(451).a(),c=t(29),o=t(255),l=r.a.create({baseURL:n.a,timeout:6e4}),u="/auth/login";l.interceptors.request.use((function(e){var s=localStorage.getItem(c.b);return s&&(e.headers.authorization=s),s||e.headers["public-request"]||(i.push(u),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var s={message:""};return 400!==e.response.status&&403!==e.response.status||(s.message="Authentication Fail",s.description="Please login again",localStorage.removeItem(c.b),i.push(u),window.location.reload()),404===e.response.status&&(s.message="Not Found"),500===e.response.status&&(s.message="Internal Server Error"),508===e.response.status&&(s.message="Time Out"),o.a.error(s),Promise.reject(e)}));var m=l,d={login:function(e){return m({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return m({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};s.a=d},458:function(e,s,t){"use strict";var a=t(7),r=t(0),n=t(38),i=t(438),c=t(511),o=t(508),l=t(510),u=t(424),m=t(102),d=t(52),j=t(41),h=t(453),g=t(449),b=t(2),p={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,t){return t&&s("password")!==t?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},x={showAuthMessage:d.c,hideAuthMessage:d.b,showLoading:d.d,authenticated:d.a};s.a=Object(n.b)((function(e){var s=e.auth;return{loading:s.loading,message:s.message,showMessage:s.showMessage,token:s.token,redirect:s.redirect}}),x)((function(e){var s=e.showLoading,t=e.token,n=e.loading,x=e.redirect,f=e.message,O=e.showMessage,v=e.hideAuthMessage,w=e.authenticated,y=e.allowRedirect,P=o.a.useForm(),N=Object(a.a)(P,1)[0],k=Object(j.g)();return Object(r.useEffect)((function(){null!==t&&y&&k.push(x),O&&setTimeout((function(){v()}),3e3)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(b.jsx)(l.a,{type:"error",showIcon:!0,message:f})}),Object(b.jsxs)(o.a,{form:N,layout:"vertical",name:"register-form",onFinish:function(){N.validateFields().then((function(e){s();g.a.signUp(e).then((function(e){w("fakeToken")})).then((function(e){Object(d.c)(e)}))})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(b.jsx)(o.a.Item,{name:"email",label:"Email",rules:p.email,hasFeedback:!0,children:Object(b.jsx)(u.a,{prefix:Object(b.jsx)(i.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,children:Object(b.jsx)(u.a.Password,{prefix:Object(b.jsx)(c.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"confirm",label:"ConfirmPassword",rules:p.confirm,hasFeedback:!0,children:Object(b.jsx)(u.a.Password,{prefix:Object(b.jsx)(c.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{children:Object(b.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:n,children:"Sign Up"})})]})]})}))},502:function(e,s,t){"use strict";t.r(s);var a=t(3),r=(t(0),t(458)),n=t(470),i=t(471),c=t(38),o=t(2),l={backgroundImage:"url(".concat("${process.env.PUBLIC_URL}/img/others${process.env.PUBLIC_URL}/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};s.default=function(e){var s=Object(c.c)((function(e){return e.theme.currentTheme}));return Object(o.jsx)("div",{className:"h-100 ".concat("light"===s?"bg-white":""),children:Object(o.jsxs)(n.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(o.jsx)(i.a,{xs:20,sm:20,md:24,lg:16,children:Object(o.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(o.jsx)(n.a,{justify:"center",children:Object(o.jsxs)(i.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(o.jsx)("h1",{children:"Sign Up"}),Object(o.jsxs)("p",{children:["Already have an account? ",Object(o.jsx)("a",{href:"/auth/login-2",children:"Sign In"})]}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsx)(r.a,Object(a.a)({},e))})]})})})}),Object(o.jsx)(i.a,{xs:0,sm:0,md:0,lg:8,children:Object(o.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(o.jsx)("div",{className:"text-right",children:Object(o.jsx)("img",{src:"${process.env.PUBLIC_URL}/img/logo-white.png",alt:"logo"})}),Object(o.jsx)(n.a,{justify:"center",children:Object(o.jsxs)(i.a,{xs:0,sm:0,md:0,lg:20,children:[Object(o.jsx)("img",{className:"img-fluid mb-5",src:"${process.env.PUBLIC_URL}/img/others${process.env.PUBLIC_URL}/img-19.png",alt:""}),Object(o.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(o.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(o.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(o.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(o.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=12.7865e95d.chunk.js.map