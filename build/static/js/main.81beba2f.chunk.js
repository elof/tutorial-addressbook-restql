(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/macrometa-white-transparent.fe9af029.png"},103:function(e,t,a){e.exports=a.p+"static/media/circle_spinner.25ef2804.gif"},118:function(e,t,a){e.exports=a(303)},123:function(e,t,a){},126:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),o=a.n(r),l=(a(123),a(38)),i=a(37),c=a(99),d=a(100),u=a(116),m=a(101),h=a(117),f=a(15),p=a(17),E=a.n(p),b=a(102),g=a.n(b),v=a(103),y=a.n(v),S=a(22),k=a.n(S),N=a(23),x=a.n(N),O=a(110),w=a.n(O),C=a(112),T=a.n(C),j=a(18),F=a.n(j),M=a(111),R=a.n(M),D=a(70),U=a.n(D),P=a(36),A=a.n(P),I=a(113),_=a.n(I),H=a(114),J=a.n(H),W=a(51),z=a.n(W),L=a(53),q=a.n(L),V=a(50),B=a.n(V),Q=a(106),G=a.n(Q),K=a(52),Y=a.n(K),$=a(109),X=a.n($),Z=a(107),ee=a.n(Z),te=a(108),ae=a.n(te),ne={global:"try.macrometa.io",Dalles:"try1-us-west1.prod.macrometa.io",Ashburn:"try1-us-east4.prod.macrometa.io",Frankfurt:"try1-europe-west3.prod.macrometa.io",Mumbai:"try1-asia-south1.prod.macrometa.io"},se=(a(115),a(104),function(e){return Object.keys(e).reduce(function(t,a){var n={label:a.split("_").reduce(function(e,t){return e+t.toUpperCase()+" "},""),value:e[a]};return t.push(n),t},[])}),re=(a(126),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormChange=function(e){return function(t){a.setState(Object(i.a)({},e,t.target.value))}},a.state={shouldShowModal:!1,showSnackbar:!1,isEdit:!1,snackbarText:"",firstName:"",lastName:"",emailAddress:"",firstNameHasError:!1,lastNameHasError:!1,emailAddressHasError:!1,data:[],isLoading:!0,lastEditElem:null,selectedRegionUrl:"",selectedRegionName:"",regionModal:!1,availableRegions:se(ne),baseUrl:"",wsUrl:"",producerUrl:"",loginModal:!0,tenant:"demo",fabric:"_system",username:"root",password:"demo"},a.onFabPressed=a.onFabPressed.bind(Object(f.a)(Object(f.a)(a))),a.handleFormChange=a.handleFormChange.bind(Object(f.a)(Object(f.a)(a))),a.onSavePressed=a.onSavePressed.bind(Object(f.a)(Object(f.a)(a))),a.resetModalData=a.resetModalData.bind(Object(f.a)(Object(f.a)(a))),a.fetchData=a.fetchData.bind(Object(f.a)(Object(f.a)(a))),a.onTextInputFocus=a.onTextInputFocus.bind(Object(f.a)(Object(f.a)(a))),a.connection=void 0,a.producer=void 0,a.jwtToken=void 0,a.fabric=void 0,a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillUnmount",value:function(){}},{key:"login",value:function(){var e=this,t=this,a={tenant:this.state.tenant,username:this.state.username,password:this.state.password},n="https://".concat(this.state.selectedRegionUrl,"/_tenant/").concat(this.state.tenant,"/_fabric/").concat(this.state.fabric,"/_open/auth");E.a.ajax({url:n,method:"POST",data:JSON.stringify(a),dataType:"json",success:function(a){e.jwtToken=a.jwt,e.ajaxSetup(),e.saveQueries();var n=e.createCollection();E.a.when(n).done(function(e){t.sleep(3e3),t.fetchData()})},error:function(){return e.handleSnackbar("Auth failed.")}})}},{key:"ajaxSetup",value:function(){E.a.ajaxSetup({headers:{Authorization:"bearer ".concat(this.jwtToken)}})}},{key:"createCollection",value:function(){var e=this,t=!1,a="https://".concat(this.state.selectedRegionUrl,"/_tenant/").concat(this.state.tenant,"/_fabric/").concat(this.state.fabric,"/collection");return E.a.ajax({type:"GET",contentType:"text/plain",processData:!1,cache:!1,url:a,success:function(a){for(var n=a.result,s=0;s<n.length;s++){if("addresses"===n[s].name){t=!0,console.log("Collection exists");break}t=!1}!1===t&&e.collection()}})}},{key:"sleep",value:function(e,t){return new Promise(function(){return setTimeout(t,e)})}},{key:"collection",value:function(){var e="https://".concat(this.state.selectedRegionUrl,"/_tenant/").concat(this.state.tenant,"/_fabric/").concat(this.state.fabric,"/collection");E.a.ajax({type:"POST",contentType:"text/plain",processData:!1,cache:!1,url:e,data:JSON.stringify({name:"addresses"}),success:function(e){console.log("Collection Created")}})}},{key:"saveQueries",value:function(){var e=this.state.baseUrl,t=this,a=E.a.ajax({type:"POST",contentType:"text/plain",processData:!1,cache:!1,url:e,data:JSON.stringify({query:{name:"Read",parameter:{},value:"FOR entry IN addresses RETURN entry"}})}),n=E.a.ajax({type:"POST",contentType:"text/plain",processData:!1,cache:!1,url:e,data:JSON.stringify({query:{name:"Remove",parameter:{},value:"REMOVE @_key IN addresses"}}),error:function(e){console.log("Error:",e)}}),s=E.a.ajax({type:"POST",contentType:"text/plain",processData:!1,cache:!1,url:e,data:JSON.stringify({query:{name:"Update",parameter:{},value:"UPDATE @_key WITH { firstname:@firstName, lastname:@lastName, email:@email} IN addresses"}})});E.a.when(a,s,n).done(function(e,a,n){t.fetchData()})}},{key:"initWebSocket",value:function(){var e=this,t=this.state,a=t.wsUrl,n=t.producerUrl;this.connection=new WebSocket(a),this.connection.onmessage=this.onSocketMessageReceived,this.connection.onopen=function(){return console.log("WS connection established")},this.connection.onerror=function(){return console.log("Failed to establish WS connection")},this.connection.onclose=function(){return console.log("Closing WS connection")},this.producer=new WebSocket(n),this.producer.onopen=function(){setInterval(function(){e.producer.send(JSON.stringify({payload:"noop"}))},3e4)}}},{key:"fetchData",value:function(e){var t=this,a=this.state.baseUrl;a+="/execute/Read",this.setState({isLoading:!1},function(){return E.a.ajax({type:"POST",contentType:"text/plain",processData:!1,cache:!1,url:a,data:JSON.stringify({}),success:function(e){t.setState({isLoading:!1,data:e.result});var a=t.fetchData();E.a.when(a).done(function(e){t.sleep(1e4)})},error:function(e){t.setState({isLoading:!1}),t.handleSnackbar("Could not fetch data"),console.log("Error:",e)}})})}},{key:"onFabPressed",value:function(){this.setState({shouldShowModal:!0})}},{key:"resetModalData",value:function(){console.log(this.state.shouldShowModal),this.setState({lastEditElem:void 0,shouldShowModal:!1,isEdit:!1,firstName:"",lastName:"",emailAddress:"",firstNameHasError:!1,lastNameHasError:!1,emailAddressHasError:!1})}},{key:"validate",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.emailAddress,s={};return this.state.isEdit?this.state.lastEditElem.email.trim()||(s.emailAddressHasError=!0):(t.trim()||(s.firstNameHasError=!0),a.trim()||(s.lastNameHasError=!0),n.trim()||(s.emailAddressHasError=!0)),s}},{key:"onSavePressed",value:function(){var e=this,t=this.state.baseUrl,a=this.validate();if(0===Object.keys(a).length){var n="Contact details added successfully",s="Contact details could not be added",r=this.state,o=r.firstName,i=r.lastName,c=r.emailAddress,d=r.isEdit,u='INSERT { "firstname":"'.concat(o,'", "lastname":"').concat(i,'", "email":"').concat(c,'" } INTO addresses'),m=JSON.stringify({query:u});if(d){t=t+"/execute/"+"Update";var h=this.state.lastEditElem;u={_key:h._key,firstName:h.firstname,lastName:h.lastname,email:h.email},m=JSON.stringify({bindVars:u}),n="Contact details updated successfully",s="Contact details could not be updated"}else t="https://".concat(this.state.selectedRegionUrl,"/_tenant/").concat(this.state.tenant,"/_fabric/").concat(this.state.fabric,"/cursor");console.log("URL",t),E.a.ajax({type:"POST",contentType:"text/plain",processData:!1,cache:!1,url:t,data:m,success:function(){e.handleSnackbar(n),e.resetModalData(),e.fetchData()},error:function(t){e.handleSnackbar(s),e.resetModalData(),console.log("Error:",t)}})}else this.setState(Object(l.a)({},a))}},{key:"onTextInputFocus",value:function(e){this.state["".concat(e,"HasError")]&&this.setState(Object(i.a)({},"".concat(e,"HasError"),!1))}},{key:"onEditPressed",value:function(e){e&&this.setState({shouldShowModal:!0,isEdit:!0,lastEditElem:e})}},{key:"onRemovePressed",value:function(e){var t=this,a=this.state.baseUrl;a+="/execute/Remove";var n='{"_key": "'.concat(e._key,'"}');e&&this.setState({lastEditElem:e},function(){E.a.ajax({type:"POST",contentType:"text/plain",processData:!1,cache:!1,url:a,data:JSON.stringify({bindVars:JSON.parse(n)}),success:function(){t.handleSnackbar("Contact details removed successfully"),t.resetModalData(),t.fetchData()},error:function(e){t.handleSnackbar("Contact details could not be removed"),t.resetModalData(),console.log("Error:",e)}})})}},{key:"handleSnackbar",value:function(e){var t=this;this.setState({showSnackbar:!0,snackbarText:e},function(){setTimeout(function(){t.setState({showSnackbar:!1,snackbarText:""})},2e3)})}},{key:"renderDialogContent",value:function(){var e=this,t=this.state.lastEditElem||{},a=t.firstname,n=t.lastname,r=t.email;return s.a.createElement(B.a,null,s.a.createElement(G.a,null,this.state.isEdit?"Fill in the fields to be updated.":"Provide all the details to add a new contact."),s.a.createElement(x.a,{onFocus:function(){return e.onTextInputFocus("firstName")},required:!this.state.isEdit,error:this.state.firstNameHasError,style:{display:"block"},label:"First Name",value:this.state.isEdit?a:this.state.firstName,onChange:function(t){if(e.state.isEdit){var a=Object(l.a)({},e.state.lastEditElem);a.firstname=t.target.value,e.setState({lastEditElem:a})}else e.handleFormChange("firstName")(t)},margin:"normal"}),s.a.createElement(x.a,{onFocus:function(){return e.onTextInputFocus("lastName")},required:!this.state.isEdit,error:this.state.lastNameHasError,style:{display:"block"},label:"Last Name",value:this.state.isEdit?n:this.state.lastName,onChange:function(t){if(e.state.isEdit){var a=Object(l.a)({},e.state.lastEditElem);a.lastname=t.target.value,e.setState({lastEditElem:a})}else e.handleFormChange("lastName")(t)},margin:"normal"}),s.a.createElement(x.a,{onFocus:function(){return e.onTextInputFocus("emailAddress")},required:!0,error:this.state.emailAddressHasError,style:{display:"block"},label:"Email",value:this.state.isEdit?r:this.state.emailAddress,onChange:function(t){if(e.state.isEdit){var a=Object(l.a)({},e.state.lastEditElem);a.email=t.target.value,e.setState({lastEditElem:a})}else e.handleFormChange("emailAddress")(t)},margin:"normal"}))}},{key:"handleModalClose",value:function(){var e,t,a,n=this,s=this.state.selectedRegionUrl;this.setState({regionModal:!1,baseUrl:(e=s,t=this.state.tenant,a=this.state.fabric,"https://".concat(e,"/_tenant/").concat(t,"/_fabric/").concat(a,"/restql"))},function(){n.login()})}},{key:"renderRegionModal",value:function(){var e=this,t=this.state,a=t.regionModal,n=t.availableRegions,r=t.selectedRegionUrl;return s.a.createElement(z.a,{fullWidth:!0,open:a},s.a.createElement(Y.a,{id:"form-dialog-title"},"Select Region:"),s.a.createElement(B.a,null,s.a.createElement(ee.a,{onChange:function(t){var a=t.target.value,s=n.find(function(e){return e.value===a}).label;e.setState({selectedRegionUrl:a,selectedRegionName:s})},value:r},n.map(function(e){return s.a.createElement(ae.a,{key:e.label,value:e.value,control:s.a.createElement(X.a,null),label:e.label})}))),s.a.createElement(q.a,null,s.a.createElement(k.a,{disabled:!r,onClick:function(){return e.handleModalClose()},size:"small",variant:"text",color:"primary"},s.a.createElement("span",{className:"actions"},"CONFIRM"))))}},{key:"renderLoginModal",value:function(){var e=this,t=this.state.loginModal;return s.a.createElement(z.a,{fullWidth:!0,open:t},s.a.createElement(Y.a,{id:"form-dialog-title"}," Enter Tenant and Fabric:"),s.a.createElement(B.a,null,s.a.createElement(x.a,{onFocus:function(){return e.onTextInputFocus("tenant")},style:{display:"block"},label:"Tenant",defaultValue:this.state.tenant,onChange:function(t){var a=t.target.value;e.setState({tenant:a})},margin:"normal"}),s.a.createElement(x.a,{onFocus:function(){return e.onTextInputFocus("fabric")},style:{display:"block"},label:"Fabric ",defaultValue:this.state.fabric,onChange:function(t){var a=t.target.value;e.setState({fabric:a})},margin:"normal"}),s.a.createElement(x.a,{onFocus:function(){return e.onTextInputFocus("username")},style:{display:"block"},label:"User ",defaultValue:this.state.username,onChange:function(t){var a=t.target.value;e.setState({username:a})},margin:"normal"}),s.a.createElement(x.a,{type:"password",onFocus:function(){return e.onTextInputFocus("password")},style:{display:"block"},label:"Password ",defaultValue:this.state.password,onChange:function(t){var a=t.target.value;e.setState({password:a})},margin:"normal"})),s.a.createElement(q.a,null,s.a.createElement(k.a,{onClick:function(){return e.setState({loginModal:!1,regionModal:!0})},size:"small",variant:"text",color:"primary"},s.a.createElement("span",{className:"actions"},"CONFIRM"))))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.selectedRegionName;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:g.a,alt:"logo",style:{height:"100px"}}),s.a.createElement("h1",{className:"App-title"},"Address book is connected to ",n)),this.renderLoginModal(),this.renderRegionModal(),s.a.createElement(A.a,null,s.a.createElement(w.a,null,s.a.createElement(R.a,null,s.a.createElement(U.a,null,s.a.createElement(F.a,null,"KEY"),s.a.createElement(F.a,null,"First Name"),s.a.createElement(F.a,null,"Last Name"),s.a.createElement(F.a,null,"Email"),s.a.createElement(F.a,{style:{paddingLeft:"40px"}},"Actions"))),s.a.createElement(T.a,null,a.map(function(t){return s.a.createElement(U.a,{key:Math.random()},s.a.createElement(F.a,{component:"th",scope:"row"},t._key),s.a.createElement(F.a,null,t.firstname),s.a.createElement(F.a,null,t.lastname),s.a.createElement(F.a,null,t.email),s.a.createElement(F.a,null,s.a.createElement("div",null,s.a.createElement(k.a,{onClick:function(){e.onEditPressed(t)},size:"small",variant:"text",color:"primary"},s.a.createElement("span",{style:{fontSize:"10px"}},"Edit")),s.a.createElement(k.a,{onClick:function(){e.onRemovePressed(t)},size:"small",variant:"text",color:"secondary"},s.a.createElement("span",{style:{fontSize:"10px"}},"Remove")))))})))),s.a.createElement(_.a,{onClick:this.onFabPressed,style:{position:"fixed",bottom:"70px",right:"70px"},size:"large",color:"primary"},s.a.createElement("span",{style:{fontSize:"30px"}},"+")),s.a.createElement(z.a,{onClose:this.resetModalData,open:this.state.shouldShowModal},s.a.createElement("h1",null,this.state.shouldShowModal),s.a.createElement(Y.a,{id:"form-dialog-title"},this.state.isEdit?"Edit contact details":"Add contact details"),this.renderDialogContent(),s.a.createElement(q.a,null,s.a.createElement(k.a,{onClick:function(){e.onSavePressed()},size:"small",variant:"text",color:"primary"},s.a.createElement("span",{className:"actions"},this.state.isEdit?"UPDATE":"SAVE")),s.a.createElement(k.a,{onClick:this.resetModalData,size:"small",variant:"text",color:"secondary"},s.a.createElement("span",{className:"actions"},"DISCARD")))),s.a.createElement(J.a,{open:this.state.showSnackbar,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement("span",{id:"message-id"},this.state.snackbarText)}),this.state.isLoading&&s.a.createElement("img",{src:y.a,alt:"logo",className:"spinner"}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,2,1]]]);
//# sourceMappingURL=main.81beba2f.chunk.js.map