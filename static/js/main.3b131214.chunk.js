(this["webpackJsonpsample-project"]=this["webpackJsonpsample-project"]||[]).push([[0],{66:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s(18),a=s.n(n),i=(s(66),s(15)),r=(s(70),s(71),s(72),s(100)),l=s(23),o=Object(l.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),j=o.actions,d=j.login,u=j.logout,b=function(e){return e.user.user},h=o.reducer,p=s(3);var O=function(e){var t=e.avatar,s=e.Icon,c=e.title,n=e.onClick,a=Object(i.c)(b);return Object(p.jsxs)("div",{onClick:n,className:"headerOption",children:[s&&Object(p.jsx)(s,{className:"headerOption_icon"}),t&&Object(p.jsx)(r.a,{className:"headerOption_icon",children:null===a||void 0===a?void 0:a.email[0]}),Object(p.jsx)("h3",{className:"headerOption_title",children:c})]})},m=s(43),x=s.n(m),f=s(44),v=s.n(f),g=s(45),N=s.n(g),y=s(46),_=s.n(y),w=s(47),I=s.n(w),k=s(48),C=s.n(k),S=s(27),U=S.a.initializeApp({apiKey:"AIzaSyDkH39fAZ4-lnPxdeI0azKR31rEr3wnVcU",authDomain:"linkedin-clone-dda92.firebaseapp.com",projectId:"linkedin-clone-dda92",storageBucket:"linkedin-clone-dda92.appspot.com",messagingSenderId:"456305694757",appId:"1:456305694757:web:8d7fce00471f675348c7cc"}).firestore(),R=S.a.auth();var E=function(){var e=Object(i.b)();return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("div",{className:"header_left",children:[Object(p.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",alt:""}),Object(p.jsxs)("div",{className:"header_search",children:[Object(p.jsx)(x.a,{}),Object(p.jsx)("input",{type:"text",placeholder:"Search"})]})]}),Object(p.jsxs)("div",{className:"header_right",children:[Object(p.jsx)(O,{Icon:v.a,title:"Home"}),Object(p.jsx)(O,{Icon:N.a,title:"My Network"}),Object(p.jsx)(O,{Icon:_.a,title:"Jobs"}),Object(p.jsx)(O,{Icon:I.a,title:"Messaging"}),Object(p.jsx)(O,{Icon:C.a,title:"Notifications"}),Object(p.jsx)(O,{avatar:!0,title:"me",onClick:function(){e(u()),R.signOut()}})]})]})},B=(s(80),Object(l.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}})),A=B.actions,L=(A.login,A.logout,function(e){return e.user.user});B.reducer;var P=function(){var e=Object(i.c)(L),t=function(e){return Object(p.jsxs)("div",{className:"sidebar_recentItem",children:[Object(p.jsx)("span",{className:"sidebar_hash",children:"#"}),Object(p.jsx)("p",{children:e})]})};return Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsxs)("div",{className:"sidebar_top",children:[Object(p.jsx)("img",{src:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",alt:""}),Object(p.jsx)(r.a,{src:e.photoUrl,className:"sidebar_avatar",children:e.email[0]}),Object(p.jsx)("h2",{children:e.displayName}),Object(p.jsx)("h4",{children:e.email})]}),Object(p.jsxs)("div",{className:"sidebar_stats",children:[Object(p.jsxs)("div",{className:"sidebar_stat",children:[Object(p.jsx)("p",{children:"Who viewed you"}),Object(p.jsx)("p",{className:"sidebar_statNumber",children:"2,555"})]}),Object(p.jsxs)("div",{className:"sidebar_stat",children:[Object(p.jsx)("p",{children:"Views on post"}),Object(p.jsx)("p",{className:"sidebar_statNumber",children:"2,444"})]})]}),Object(p.jsxs)("div",{className:"sidebar_bottom",children:[Object(p.jsx)("p",{children:"Recent"}),t("reactjs"),t("programming"),t("softwareengineering"),t("design"),t("developer")]})]})},D=s(20);s(81),s(82);var V=function(e){var t=e.Icon,s=e.title,c=e.color;return Object(p.jsxs)("div",{className:"inputOption",children:[Object(p.jsx)(t,{style:{color:c}}),Object(p.jsx)("h4",{children:s})]})},M=(s(83),s(49)),W=s.n(M),H=s(50),F=s.n(H),J=s(51),T=s.n(J),z=s(52),K=s.n(z),Z=Object(c.forwardRef)((function(e,t){var s=e.name,c=e.description,n=e.message,a=e.photoUrl;return Object(p.jsxs)("div",{ref:t,className:"post",children:[Object(p.jsxs)("div",{className:"post_header",children:[Object(p.jsx)(r.a,{src:a,children:s[0]}),Object(p.jsxs)("div",{className:"post_info",children:[Object(p.jsx)("h2",{children:s}),Object(p.jsx)("p",{children:c})]})]}),Object(p.jsx)("div",{className:"post_body",children:Object(p.jsx)("p",{children:n})}),Object(p.jsxs)("div",{className:"post_button",children:[Object(p.jsx)(V,{Icon:W.a,title:"Like",color:"gray"}),Object(p.jsx)(V,{Icon:F.a,title:"Comment",color:"gray"}),Object(p.jsx)(V,{Icon:T.a,title:"Share",color:"gray"}),Object(p.jsx)(V,{Icon:K.a,title:"Send",color:"gray"})]})]})})),q=s(53),X=s.n(q),G=s(54),$=s.n(G),Q=s(55),Y=s.n(Q),ee=s(56),te=s.n(ee),se=s(57),ce=s.n(se),ne=s(58);var ae=function(){var e=Object(c.useState)(""),t=Object(D.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)([]),r=Object(D.a)(a,2),l=r[0],o=r[1],j=Object(i.c)(b);return Object(c.useEffect)((function(){U.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(p.jsxs)("div",{className:"feed",children:[Object(p.jsxs)("div",{className:"feed_inputContainer",children:[Object(p.jsxs)("div",{className:"feed_input",children:[Object(p.jsx)(X.a,{}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),U.collection("posts").add({name:j.displayName,description:j.email,message:s,photoUrl:j.photoUrl||"",timestamp:S.a.firestore.FieldValue.serverTimestamp()}),n("")},type:"submit",children:"Send"})]})]}),Object(p.jsxs)("div",{className:"feed_inputOptions",children:[Object(p.jsx)(V,{Icon:$.a,title:"Photo",color:"#70B5F9"}),Object(p.jsx)(V,{Icon:Y.a,title:"Video",color:"#E7A33E"}),Object(p.jsx)(V,{Icon:te.a,title:"Event",color:"#C0CBCD"}),Object(p.jsx)(V,{Icon:ce.a,title:"Write Article",color:"#7FC15E"})]})]}),Object(p.jsx)(ne.a,{children:l.map((function(e){var t=e.id,s=e.data,c=s.name,n=s.description,a=s.message,i=s.photoUrl;return Object(p.jsx)(Z,{name:c,description:n,message:a,photoUrl:i},t)}))})]})};s(84);var ie=function(){var e=Object(c.useState)(""),t=Object(D.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),r=Object(D.a)(a,2),l=r[0],o=r[1],j=Object(c.useState)(""),u=Object(D.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(""),m=Object(D.a)(O,2),x=m[0],f=m[1],v=Object(i.b)();return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("img",{src:"https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=g_lR0Vks",alt:""}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)},placeholder:"Full Name (required if registering)"}),Object(p.jsx)("input",{type:"text",value:x,onChange:function(e){return f(e.target.value)},placeholder:"Profile Pic URL (optional)"}),Object(p.jsx)("input",{type:"email",value:s,onChange:function(e){return n(e.target.value)},placeholder:"Email"}),Object(p.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},placeholder:"Password"}),Object(p.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),R.signInWithEmailAndPassword(s,l).then((function(e){v(d({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.photoUrl}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(p.jsxs)("p",{children:["Not a member?"," ",Object(p.jsx)("span",{className:"login_register",onClick:function(){if(!b)return alert("Please enter a full name");R.createUserWithEmailAndPassword(s,l).then((function(e){e.user.updateProfile({displayName:b,photoUrl:x}).then((function(){v(d({email:e.user.email,uid:e.user.uid,displayName:b,photoUrl:x}))}))})).catch((function(e){return alert(e)}))},children:"Register Now"})]})]})},re=(s(85),s(60)),le=s.n(re),oe=s(59),je=s.n(oe);var de=function(){var e=function(e,t){return Object(p.jsxs)("div",{className:"widgets_article",children:[Object(p.jsx)("div",{className:"widgets_articleLeft",children:Object(p.jsx)(je.a,{})}),Object(p.jsxs)("div",{className:"widgets_articleRight",children:[Object(p.jsx)("h4",{children:e}),Object(p.jsx)("p",{children:t})]})]})};return Object(p.jsxs)("div",{className:"widgets",children:[Object(p.jsxs)("div",{className:"widgets_header",children:[Object(p.jsx)("h2",{children:"LinkedIn News"}),Object(p.jsx)(le.a,{})]}),e("Naresh React is back","Top news - 9999 readers"),e("CoronaVirus: UK updates","Top news-886 readers"),e("Bitcoin Breaks $22k","Crypto-8000 readers"),e("Is Redux too good?","Code- 123 readers"),e("Naresh React launched?!","Top news-6983 readers")]})};var ue=function(){var e=Object(i.c)(b),t=Object(i.b)();return Object(c.useEffect)((function(){R.onAuthStateChanged((function(e){t(e?d({email:e.email,uid:e.uid,displayName:e.displayName,photoURL:e.photoURL}):u())}))}),[]),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(E,{}),e?Object(p.jsxs)("div",{className:"app_body",children:[Object(p.jsx)(P,{}),Object(p.jsx)(ae,{}),Object(p.jsx)(de,{})]}):Object(p.jsx)(ie,{})]})},be=Object(l.a)({reducer:{user:h}});a.a.render(Object(p.jsx)(i.a,{store:be,children:Object(p.jsx)(ue,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.3b131214.chunk.js.map