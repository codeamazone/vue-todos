(function(e){function t(t){for(var r,a,u=t[0],c=t[1],i=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,i||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,u=1;u<o.length;u++){var c=o[u];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={app:0},s=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"0c23":function(e,t,o){"use strict";o("dff1")},1266:function(e,t,o){},"3e08":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("e792"),o("0cdd");var r=o("2b0e"),n=(o("d3b7"),o("bc3a")),s=o.n(n),a={baseURL:"https://videostore.goldenacker.de",withCredentials:!0},u=s.a.create(a);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=u,window.axios=u,Object.defineProperties(e.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},r["default"].use(Plugin);Plugin;var c=o("ecee"),i=o("c074"),l=o("ad3d");c["c"].add(i["a"]),r["default"].component("font-awesome-icon",l["a"]);var d=o("5f5b");o("ab8b"),o("2dd8");r["default"].use(d["a"]);var f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{staticClass:"page-item",attrs:{to:"/"}},[e._v("Home")]),o("router-link",{staticClass:"page-item",attrs:{to:"/todos"}},[e._v("Todos ("+e._s(e.todos.length)+")")]),e.user?o("a",{staticClass:"link font-weight-bold",on:{click:e.logout}},[e._v("Logout ("+e._s(e.user.name)+")")]):o("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),o("router-view")],1)},m=[],p=o("2f62"),g={name:"App",created:function(){this.$store.dispatch("todos/all")},computed:Object(p["c"])({user:"auth/user",todos:"todos/allTodos"}),methods:Object(p["b"])({logout:"auth/logout"})},v=g,h=(o("034f"),o("2877")),b=Object(h["a"])(v,f,m,!1,null,null,null),_=b.exports,E=o("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),r("Home",{attrs:{msg:"Willkommen auf unseren Todos"}})],1)},x=[],T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v(e._s(e.msg))])])},k=[],j={name:"Home",props:{msg:String}},y=j,O=(o("0c23"),Object(h["a"])(y,T,k,!1,null,"3be64d9d",null)),P=O.exports,S={name:"HomePage",components:{Home:P}},A=S,$=Object(h["a"])(A,w,x,!1,null,null,null),L=$.exports,I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Todos")},C=[],M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("Todos")]),o("AddTodo"),o("hr"),o("Todo",{attrs:{todos:e.todos}})],1)},U=[],H=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo.text,expression:"newTodo.text"}],staticClass:"w-50",attrs:{placeholder:"Todo Text",required:""},domProps:{value:e.newTodo.text},on:{input:function(t){t.target.composing||e.$set(e.newTodo,"text",t.target.value)}}}),o("button",{staticClass:"btn-sm btn-info ml-2",on:{click:function(t){return e.add(e.newTodo)}}},[o("font-awesome-icon",{attrs:{icon:"plus-square"}}),e._v(" Add ")],1),o("AlertMsg",{attrs:{errors:e.errors}})],1)},q=[],N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.errors?o("b-alert",{attrs:{show:"",fade:""}},e._l(e.errors,(function(t,r){return o("div",{key:r},[Array.isArray(t)?o("span",[e._v(e._s(t[0]))]):o("span",[e._v(e._s(t))])])})),0):e._e()},J=[],z={name:"AlertMsg",props:["errors"]},B=z,D=Object(h["a"])(B,N,J,!1,null,null,null),K=D.exports,R={name:"AddTodo",components:{AlertMsg:K},data:function(){return{newTodo:{done:0,text:null}}},computed:Object(p["c"])({errors:"todos/getStoreErrors"}),methods:Object(p["b"])({add:"todos/add"})},V=R,W=Object(h["a"])(V,H,q,!1,null,"6be67336",null),F=W.exports,G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("AlertMsg",{attrs:{errors:e.errors}}),e.todos&&e.todos.length>0?o("ul",e._l(e.todos,(function(t){return o("li",{key:t.id},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"item.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.done)?e._i(t.done,null)>-1:t.done},on:{change:[function(o){var r=t.done,n=o.target,s=!!n.checked;if(Array.isArray(r)){var a=null,u=e._i(r,a);n.checked?u<0&&e.$set(t,"done",r.concat([a])):u>-1&&e.$set(t,"done",r.slice(0,u).concat(r.slice(u+1)))}else e.$set(t,"done",s)},function(o){return e.update(t)}]}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"item.text"}],class:{done:t.done},attrs:{name:"todo"},domProps:{value:t.text},on:{change:function(o){return e.update(t)},input:function(o){o.target.composing||e.$set(t,"text",o.target.value)}}}),o("b-button",{staticClass:"btn-sm btn-danger float-right m-0 py-0 px-1",on:{click:function(o){return e.remove(t)}}},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)],1)})),0):o("h5",[e._v("Keine Todos vorhanden")])],1)},Q=[],X={name:"Todo",components:{AlertMsg:K},props:["todos"],computed:Object(p["c"])({errors:"todos/getUpdateErrors"}),methods:Object(p["b"])({update:"todos/update",remove:"todos/remove"})},Y=X,Z=(o("9ee5"),Object(h["a"])(Y,G,Q,!1,null,"32646d68",null)),ee=Z.exports,te={name:"Todos",components:{Todo:ee,AddTodo:F},computed:Object(p["c"])({todos:"todos/allTodos"})},oe=te,re=Object(h["a"])(oe,M,U,!1,null,"d6e8fdea",null),ne=re.exports,se={name:"TodosPage",components:{Todos:ne}},ae=se,ue=Object(h["a"])(ae,I,C,!1,null,"0f66106a",null),ce=ue.exports,ie=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Login")},le=[],de=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",[e._v("Login")]),o("b-form",{on:{submit:function(e){e.preventDefault()}}},[o("b-form-group",[o("label",[e._v("Email")]),o("b-input",{attrs:{type:"email",placeholder:"Email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),o("b-form-group",[o("label",[e._v("Passwort")]),o("b-input",{attrs:{type:"password",placeholder:"Passwort",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),o("b-button",{on:{click:function(t){return e.login(e.user)}}},[e._v("Login")])],1)],1)},fe=[],me={name:"Login",data:function(){return{user:{email:null,password:null}}},methods:Object(p["b"])({login:"auth/login"})},pe=me,ge=(o("64af"),Object(h["a"])(pe,de,fe,!1,null,"6dcaebba",null)),ve=ge.exports,he={name:"LoginPage",components:{Login:ve}},be=he,_e=Object(h["a"])(be,ie,le,!1,null,"1a075870",null),Ee=_e.exports;r["default"].use(E["a"]);var we=[{path:"/",name:"HomePage",component:L},{path:"/todos",name:"TodosPage",component:ce},{path:"/login",name:"LoginPage",component:Ee}],xe=new E["a"]({routes:we}),Te=xe,ke=(o("d81d"),o("4de4"),{handleErrors:function(e){if(e.response){var t=e.response;switch(t.status){case 401:alert(e.response.data.message),location.href="/#/login";break;default:alert(e.response.data.message);break}}console.error(e)}}),je=ke,ye=(o("b0c0"),"/api/login"),Oe=r["default"].axios,Pe={user:null,errors:null},Se={user:function(e){return localStorage.getItem("token")&&(e.user={name:localStorage.getItem("name"),email:localStorage.getItem("email"),token:localStorage.getItem("token")}),e.user},errors:function(e){return e.errors}},Ae={login:function(e,t){var o=e.commit;Oe.post(ye,t).then((function(e){if(200!==e.status)return je.handleErrors(e.response.errors),void o("setErrors",e.response.errors);var r=e.data.name,n=e.data.email,s=e.data.token;localStorage.setItem("name",r),localStorage.setItem("email",n),localStorage.setItem("token",s),o("unsetErrors"),o("setLogin",t)})).catch((function(e){je.handleErrors(e),o("setErrors",e)}))},logout:function(e){var t=e.commit;localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("token"),t("setLogout"),t("unsetErrors")},test:function(e){var t=e.commit;t("unsetErrors")}},$e={setLogin:function(e,t){return e.user=t},setLogout:function(e){return e.user=null},setErrors:function(e,t){return e.errors=t},unsetErrors:function(e){return e.errors=null}},Le={namespaced:!0,state:Pe,getters:Se,actions:Ae,mutations:$e},Ie="/api/todos",Ce=r["default"].axios,Me={todos:null,storeErrors:null,updateErrors:null},Ue={allTodos:function(e){return e.todos},getStoreErrors:function(e){return e.storeErrors},getUpdateErrors:function(e){return e.updateErrors}},He={_checkAuth:function(){Le.state.user&&(Ce.defaults.headers.common["Authorization"]="Bearer "+Le.state.user.token)},all:function(e){var t=e.commit;Ce.get(Ie).then((function(e){t("setTodos",e.data.data)})).catch((function(e){je.handleErrors(e)}))},add:function(e,t){var o=e.commit;He._checkAuth(),Ce.post(Ie,t).then((function(e){e.data.error?o("setStoreErrors",e.data.error):(o("unsetStoreErrors"),o("addTodo",e.data.data))})).catch((function(e){je.handleErrors(e),o("setStoreErrors",e)}))},update:function(e,t){var o=e.commit;He._checkAuth(),Ce.put(Ie+"/"+t.id,t).then((function(e){e.data.error?o("setUpdateErrors",e.data.error):(o("unsetUpdateErrors"),o("updateTodo",e.data.data))})).catch((function(e){je.handleErrors(e),o("setUpdateErrors",e)}))},remove:function(e,t){var o=e.commit;He._checkAuth(),Ce.delete(Ie+"/"+t.id).then((function(e){e.data.data&&o("removeTodo",t)})).catch((function(e){je.handleErrors(e)}))}},qe={setTodos:function(e,t){return e.todos=t},addTodo:function(e,t){return e.todos.unshift(t)},updateTodo:function(e,t){return e.todos=e.todos.map((function(e){return e===t?t:e}))},removeTodo:function(e,t){return e.todos=e.todos.filter((function(e){return e!==t}))},setStoreErrors:function(e,t){return e.storeErrors=t},unsetStoreErrors:function(e){return e.storeErrors=null},setUpdateErrors:function(e,t){return e.updateErrors=t},unsetUpdateErrors:function(e){return e.updateErrors=null}},Ne={namespaced:!0,state:Me,getters:Ue,actions:He,mutations:qe};r["default"].use(p["a"]);var Je=new p["a"].Store({modules:{todos:Ne,auth:Le}}),ze=Je;r["default"].config.productionTip=!1,new r["default"]({router:Te,store:ze,render:function(e){return e(_)}}).$mount("#app")},"64af":function(e,t,o){"use strict";o("1266")},"85ec":function(e,t,o){},"9ee5":function(e,t,o){"use strict";o("3e08")},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},dff1:function(e,t,o){}});
//# sourceMappingURL=app.b6297656.js.map