webpackJsonp([1],{0:function(e,t){},IBs7:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{},[s("div",{staticClass:"jumbotron page-head"},[s("h1",[e._v("BOOK STORE")]),e._v(" "),s("p",[e._v("Here you find all the IT books")]),e._v(" "),e.userLoggedIn?s("div",{},[s("span",[e._v(e._s(e._f("capitalize")(e.userName)))]),s("span",{staticClass:"glyphicon glyphicon-log-out",on:{click:e.logout}})]):e._e()])]),e._v(" "),s("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App",data:function(){return{}},computed:{userName:function(){return this.$store.state.userName},userLoggedIn:function(){return this.$store.state.isUserLogged}},mounted:function(){this.$store.commit("checkUser",null!=this.$localStorage.get("userLoggedIn")&&this.$localStorage.get("userLoggedIn")),this.$store.commit("setUserName",null!=this.$localStorage.get("userName")?this.$localStorage.get("userName"):"")},methods:{logout:function(){this.$localStorage.remove("userLoggedIn"),this.$localStorage.remove("userName"),this.$store.commit("setUserName",""),this.$store.commit("checkUser",!1),this.$router.push("/")}}},n,!1,function(e){s("IBs7")},null,null).exports,r=s("/ocq"),i={name:"Login",data:function(){return{userName:"",pass:"",googleSignInParams:{client_id:"333417956734-6dnsm5fq55eju99flciurghktt87ngrb.apps.googleusercontent.com"}}},computed:{},methods:{login:function(e){"anjana"===this.userName&&"1234"===this.pass&&this.onLoginSuccess(this,this.userName)},openFbLoginDialog:function(){FB.login(this.checkLoginState,{scope:"email"})},checkLoginState:function(e){var t=this;"connected"===e.status?FB.api("/me",{fields:"name,email"},function(e){t.onLoginSuccess(t,e.name)}):e.status},onSignInSuccess:function(e){var t=e.getBasicProfile();console.log(t),this.onLoginSuccess(this,t.ig)},onSignInError:function(e){console.log("OH NOES",e)},onLoginSuccess:function(e,t){e.$store.commit("setUserName",t),e.$localStorage.set("userName",t),e.$localStorage.set("userLoggedIn",!0),e.$store.commit("checkUser",!0),e.$router.push("/book-list")}},components:{}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-page"},[a("div",{staticClass:"form"},[a("form",{staticClass:"login-form"},[a("div",{staticStyle:{width:"100px"}}),e._v(" "),a("div",{on:{click:e.openFbLoginDialog}},[a("img",{attrs:{src:s("pUJY"),height:"50",width:"50"}}),e._v("Sign in with Facebook")]),e._v(" "),a("g-signin-button",{attrs:{params:e.googleSignInParams},on:{success:e.onSignInSuccess,error:e.onSignInError}},[e._v("\n    Sign in with Google\n  ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}}),e._v(" "),a("button",{staticClass:"login-btn",on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v("login")]),e._v(" "),e._m(0)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"message"},[this._v("Not registered? "),t("a",{attrs:{href:"/register"}},[this._v("Create an account")])])}]};var c=s("VU/8")(i,l,!1,function(e){s("am2w")},null,null).exports,u={props:["msg"],mixins:[{data:function(){return{message:"hello",foo:"abc"}}}],data:function(){return{message:""}},methods:{changeMessage:function(e){this.message=e.target.value,this.$emit("messageChanged",this.message)}},created:function(){console.log(this.$data)},directives:{focus:{inserted:function(e){}}},filters:{capitalize:function(e){return e?(e=e.toString()).charAt(0).toUpperCase()+e.slice(1):""}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},domProps:{value:this.msg},on:{input:this.changeMessage}}),this._v(" "),t("p",[this._v(this._s(this._f("capitalize")(this.message)))])])},staticRenderFns:[]},d={data:function(){return{id:this.$route.params.id,message:"hey how are you"}},components:{"input-box":s("VU/8")(u,m,!1,null,null,null).exports}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v(e._s(e.message))]),e._v(" "),s("p",[e._v("MessageId:"+e._s(e.id))]),e._v(" "),s("input-box",{attrs:{msg:e.message},on:{messageChanged:function(t){e.message=t}}})],1)},staticRenderFns:[]},v=s("VU/8")(d,h,!1,null,null,null).exports,p=s("fnV0"),f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"left-nav"},[s("h3",[e._v("Subject")]),e._v(" "),s("ul",{staticClass:"nav nav-pills nav-stacked"},e._l(e.subjects,function(t,a){return s("li",{key:t,staticClass:"subj",class:{active:e.isActive==a}},[s("a",{on:{click:function(s){e.getBooks(t,a)}}},[e._v(e._s(e._f("capitalize")(t)))])])})),e._v(" "),s("button",{staticClass:"btn btn-success chart-btn",on:{click:e.showChart}},[e._v("show chart")])])},staticRenderFns:[]};var g={data:function(){return{}},computed:{books:function(){return console.log("computed----------------"),this.$store.state.books?this.$store.state.books:JSON.parse(this.$localStorage.get("books"))}},beforeMount:function(){console.log("before mount ----------------")},beforeUpdate:function(){console.log("before update----------------------")},updated:function(){console.log("updated------------------------------")},methods:{showDetails:function(e){this.$router.push({name:"BookDetail",params:{bookId:e.ID}})}}},j={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("Books")]),e._v(" "),null!=e.books?s("div",{staticClass:"book-list-div"},e._l(e.books,function(t){return s("div",{key:t.ID,staticClass:"col-md-4"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile-content"},[s("img",{staticClass:"img",attrs:{src:t.Image}}),e._v(" "),s("h4",{staticClass:"title"},[e._v(e._s(t.Title))]),e._v(" "),s("p",{staticClass:"desc"},[e._v(e._s(t.Description))]),e._v(" "),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn",on:{click:function(s){e.showDetails(t)}}},[e._v("See Detail")])])])])])})):e._e(),e._v(" "),null==e.books?s("div",[s("h2",[e._v("Please select the subject")])]):e._e()])},staticRenderFns:[]},b={name:"BookList",data:function(){return{}},computed:{},methods:{},components:{"left-side-nav":s("VU/8")({data:function(){return{subjects:["php","java","bootstrap","css3","jquery","javascript","node","angular","python"],isActive:this.$localStorage.get("subjectIndex")?this.$localStorage.get("subjectIndex"):0}},methods:{getBooks:function(e,t){this.isActive=t,this.$store.dispatch({type:"getBooks",subject:e}),this.$router.push({name:"Book",params:{sub:e}}),this.$localStorage.set("subjectIndex",t)},showChart:function(){this.$router.push("/chart")}}},f,!1,function(e){s("wKbM")},null,null).exports,"right-side-comp":s("VU/8")(g,j,!1,null,null,null).exports}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"col-md-3 left-block"},[t("left-side-nav")],1),this._v(" "),t("div",{staticClass:"col-md-9 right-block"},[t("right-side-comp")],1)])},staticRenderFns:[]};var C=s("VU/8")(b,_,!1,function(e){s("dsZX")},null,null).exports,k=s("UlOv"),U=k.b.reactiveProp,N={extends:k.a,mixins:[U],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},w=s("VU/8")(N,null,!1,null,null,null).exports,O=s("s1YI"),x=s.n(O),R={components:{LineChart:w},data:function(){return{dataCollection:null}},mounted:function(){this.fillData()},methods:{fillData:function(){this.dataCollection={labels:this.getLabels(),datasets:[{label:"Word Count",backgroundColor:"#f87979",data:this.getGraphData()}]}},getLabels:function(){for(var e=[],t=0;t<x.a.data.length;t++)e.push(x.a.data[t].first_name);return e},getGraphData:function(){for(var e=[],t=0;t<x.a.data.length;t++)e.push(x.a.data[t].WORD_COUNT);return e}}},E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"small"},[t("line-chart",{attrs:{"chart-data":this.dataCollection}})],1)},staticRenderFns:[]};var D=s("VU/8")(R,E,!1,function(e){s("sb4A")},null,null).exports,S={data:function(){return{book:""}},mounted:function(){this.getBookDetail()},methods:{getBookDetail:function(){for(var e=JSON.parse(this.$localStorage.get("books")),t=this.$route.params.bookId,s=0;s<e.length;s++)t===e[s].ID&&(this.book=e[s])}}},W={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row book-detail"},[s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:e.book.Image}})]),e._v(" "),s("div",{staticClass:"col-md-8"},[s("h1",[e._v(e._s(e.book.Title))]),e._v(" "),s("p",[e._v(e._s(e.book.Description))])]),e._v(" "),s("router-link",{attrs:{to:{name:"Book",params:{sub:"php"}}}},[e._v("Go to all Books")])],1)])},staticRenderFns:[]};var y=s("VU/8")(S,W,!1,function(e){s("w2vP")},null,null).exports;console.log(3109*"string");var B={data:function(){return{name:null,email:null,phone:null,address:null}},created:function(){},methods:{validateBeforeSubmit:function(){var e=this.name;this.$validator.validateAll().then(function(){console.log(e)},function(){console.log(e)})}}},z={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contact-form"},[s("h1",[e._v("Contact us")]),e._v(" "),s("form",{staticClass:"form-horizontal form",on:{submit:function(t){return t.preventDefault(),e.validateBeforeSubmit(t)}}},[s("div",{staticClass:"form-group text-left"},[s("label",{staticClass:"control-label col-md-3 col-sm-4",attrs:{for:"name"}},[e._v("Name:")]),e._v(" "),s("div",{staticClass:"col-md-9 col-sm-8",class:{"has-error":e.errors.has("name")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required|alpha|min:3",expression:"'required|alpha|min:3'"}],staticClass:"form-control",class:{input:!0,"has-error":e.errors.has("name")},attrs:{name:"name",type:"text",id:"name",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help-block error text-danger"},[e._v(e._s(e.errors.first("name")))])])]),e._v(" "),s("div",{staticClass:"form-group text-left"},[s("label",{staticClass:"control-label col-md-3 col-sm-4",attrs:{for:"email"}},[e._v("E-Mail:")]),e._v(" "),s("div",{staticClass:"col-md-9 col-sm-8",class:{"has-error":e.errors.has("email")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{input:!0,"has-error":e.errors.has("email")},attrs:{name:"email",type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"help-block error text-danger"},[e._v(e._s(e.errors.first("email")))])])]),e._v(" "),s("div",{staticClass:"form-group text-left"},[s("label",{staticClass:"control-label col-md-3 col-sm-4",attrs:{for:"phone"}},[e._v("Phone No:")]),e._v(" "),s("div",{staticClass:"col-md-9 col-sm-8",class:{"has-error":e.errors.has("phone")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:"required|numeric|min:10|max:10",expression:"'required|numeric|min:10|max:10'"}],staticClass:"form-control",class:{input:!0,"has-error":e.errors.has("phone")},attrs:{name:"phone",type:"text",placeholder:"Phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"help-block error text-danger"},[e._v(e._s(e.errors.first("phone")))])])]),e._v(" "),s("div",{staticClass:"form-group text-left"},[s("label",{staticClass:"control-label col-md-3 col-sm-4",attrs:{for:"address"}},[e._v("Address:")]),e._v(" "),s("div",{staticClass:"col-md-9 col-sm-8",class:{"has-error":e.errors.has("address")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{input:!0,"has-error":e.errors.has("address")},attrs:{name:"address",type:"text",placeholder:"Address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("address"),expression:"errors.has('address')"}],staticClass:"help-block error text-danger"},[e._v(e._s(e.errors.first("address")))])])]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group text-center"},[t("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Send"}})])}]};var A=s("VU/8")(B,z,!1,function(e){s("lLYm")},null,null).exports;a.a.use(r.a);var F=new r.a({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:c,meta:{authRequired:!1}},{path:"/chart",name:"Chart",component:D,meta:{authRequired:!0}},{path:"/message/:id",name:"Message",component:v,meta:{authRequired:!1}},{path:"/register",name:"Register",component:p.default,meta:{authRequired:!1}},{path:"/book-list",name:"BookList",meta:{authRequired:!0},component:C},{path:"/book-list/:sub",name:"Book",meta:{authRequired:!0},component:C},{path:"/book-list/:bookId",name:"BookDetail",component:y,meta:{authRequired:!0}},{path:"/contact-us",name:"ContactUs",component:A,meta:{authRequired:!0}}],mode:"history"}),V=s("mvHQ"),T=s.n(V),I=s("NYxO");a.a.use(I.a);var q=new I.a.Store({state:{userName:"",isUserLogged:!1,books:null},mutations:{setUserName:function(e,t){e.userName=t},checkUser:function(e,t){e.isUserLogged=t},booklist:function(e,t){e.books=t}},actions:{getBooks:function(e,t){a.a.http.get("https://it-ebooks-api.info/v1/search/"+t.subject).then(function(t){a.a.localStorage.set("books",T()(t.body.Books)),e.commit("booklist",t.body.Books)})}}}),P=s("UnSZ"),L=s.n(P),Q=s("8+8L"),J=s("sUu7"),H=s("fSYm"),M=s.n(H);a.a.use(M.a),a.a.use(L.a),a.a.use(Q.a),a.a.use(J.a),F.beforeEach(function(e,t,s){var n=a.a.localStorage.get("userLoggedIn");if(F.options.routes.forEach(function(t){if(e.matched[0].path===t.path&&e.meta.authRequired)return n?s():s("/login")}),"Login"===e.name&&null===t.name&&n)return s("/book-list");s()}),a.a.config.productionTip=!1,a.a.filter("capitalize",function(e){return e?(e=e.toString()).charAt(0).toUpperCase()+e.slice(1):""}),new a.a({el:"#app",router:F,store:q,components:{App:o},template:"<App/>"})},Sf8j:function(e,t){},am2w:function(e,t){},dsZX:function(e,t){},fnV0:function(e,t,s){"use strict";var a=s("ftJ5"),n=s.n(a),o=s("w5+b");var r=function(e){s("Sf8j")},i=s("VU/8")(n.a,o.a,!1,r,null,null);t.default=i.exports},ftJ5:function(e,t){},lLYm:function(e,t){},pUJY:function(e,t){e.exports="data:image/png;base64,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"},s1YI:function(e,t){e.exports={data:[{WORD_COUNT:29877,first_name:"bell"},{WORD_COUNT:21909,first_name:"brooks"},{WORD_COUNT:28544,first_name:"brown"},{WORD_COUNT:15935,first_name:"chrishaydon"},{WORD_COUNT:21246,first_name:"cooper"},{WORD_COUNT:21242,first_name:"daniel"},{WORD_COUNT:23903,first_name:"david"},{WORD_COUNT:24562,first_name:"james"},{WORD_COUNT:19251,first_name:"jenny09"},{WORD_COUNT:21243,first_name:"john"},{WORD_COUNT:22571,first_name:"maria"},{WORD_COUNT:19255,first_name:"mark"},{WORD_COUNT:23240,first_name:"michael"},{WORD_COUNT:17927,first_name:"mike"},{WORD_COUNT:25229,first_name:"miller"},{WORD_COUNT:21911,first_name:"morgan"},{WORD_COUNT:18591,first_name:"morris"},{WORD_COUNT:23904,first_name:"paul"},{WORD_COUNT:19921,first_name:"rivera"},{WORD_COUNT:19920,first_name:"rogers"},{WORD_COUNT:22566,first_name:"ross"},{WORD_COUNT:23898,first_name:"sanders"},{WORD_COUNT:17924,first_name:"smith"},{WORD_COUNT:2,first_name:"Test User"},{WORD_COUNT:21247,first_name:"wright"}]}},sb4A:function(e,t){},uslO:function(e,t,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(e){return s(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="uslO"},w2vP:function(e,t){},"w5+b":function(e,t,s){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-page"},[t("div",{staticClass:"form"},[t("form",{staticClass:"register-form"},[t("input",{attrs:{type:"text",placeholder:"name"}}),this._v(" "),t("input",{attrs:{type:"password",placeholder:"password"}}),this._v(" "),t("input",{attrs:{type:"text",placeholder:"email address"}}),this._v(" "),t("button",{staticClass:"login-btn"},[this._v("create")]),this._v(" "),t("p",{staticClass:"message"},[this._v("Already registered? "),t("a",{attrs:{href:"/"}},[this._v("Sign In")])])])])])}]};t.a=a},wKbM:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.cd27e7d447d268b62e11.js.map