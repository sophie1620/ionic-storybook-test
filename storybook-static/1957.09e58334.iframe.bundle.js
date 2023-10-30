/*! For license information please see 1957.09e58334.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[1957,1950],{"./node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_route:()=>Route,ion_route_redirect:()=>RouteRedirect,ion_router:()=>Router,ion_router_link:()=>RouterLink});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-2d388930.js"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/theme-17531cdf.js"),_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/ionic-global-b3fc28dd.js"),Route=function(){function e(e){(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.ionRouteDataChanged=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionRouteDataChanged",7),this.url="",this.component=void 0,this.componentProps=void 0,this.beforeLeave=void 0,this.beforeEnter=void 0}return e.prototype.onUpdate=function(e){this.ionRouteDataChanged.emit(e)},e.prototype.onComponentProps=function(e,t){if(e!==t){var r=e?Object.keys(e):[],n=t?Object.keys(t):[];if(r.length===n.length)for(var i=0,o=r;i<o.length;i++){var a=o[i];if(e[a]!==t[a])return void this.onUpdate(e)}else this.onUpdate(e)}},e.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(e,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),e}(),RouteRedirect=function(){function e(e){(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.ionRouteRedirectChanged=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionRouteRedirectChanged",7),this.from=void 0,this.to=void 0}return e.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},e.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(e,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),e}(),generatePath=function(e){return"/"+e.filter((function(e){return e.length>0})).join("/")},writeSegments=function(e,t,r,n,i,o,a){var s=function(e,t,r){var n=generatePath(e);return t&&(n="#"+n),void 0!==r&&(n+="?"+r),n}((0,tslib__WEBPACK_IMPORTED_MODULE_2__.ev)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.ev)([],parsePath(t).segments,!0),n,!0),r,a);"forward"===i?e.pushState(o,"",s):e.replaceState(o,"",s)},parsePath=function(e){var r,t=[""];if(null!=e){var n=e.indexOf("?");n>-1&&(r=e.substring(n+1),e=e.substring(0,n)),t=e.split("/").map((function(e){return e.trim()})).filter((function(e){return e.length>0})),0===t.length&&(t=[""])}return{segments:t,queryString:r}},writeNavState=function(e,t,r,n,i,o){return void 0===i&&(i=!1),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(void 0,void 0,void 0,(function(){var a,s,u,c;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(f){switch(f.label){case 0:return f.trys.push([0,6,,7]),a=searchNavNode(e),n>=t.length||!a?[2,i]:[4,new Promise((function(e){return(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.c)(a,e)}))];case 1:return f.sent(),s=t[n],[4,a.setRouteId(s.id,s.params,r,o)];case 2:return(u=f.sent()).changed&&(r="root",i=!0),[4,writeNavState(u.element,t,r,n+1,i,o)];case 3:return i=f.sent(),u.markVisible?[4,u.markVisible()]:[3,5];case 4:f.sent(),f.label=5;case 5:return[2,i];case 6:return c=f.sent(),console.error(c),[2,!1];case 7:return[2]}}))}))},readNavState=function(e){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(void 0,void 0,void 0,(function(){var t,r,n,i;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(o){switch(o.label){case 0:t=[],n=e,o.label=1;case 1:return(r=searchNavNode(n))?[4,r.getRouteId()]:[3,3];case 2:return(i=o.sent())?(n=i.element,i.element=void 0,t.push(i),[3,1]):[3,3];case 3:return[2,{ids:t,outlet:r}]}}))}))},OUTLET_SELECTOR=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",searchNavNode=function(e){if(e){if(e.matches(OUTLET_SELECTOR))return e;var t=e.querySelector(OUTLET_SELECTOR);return null!=t?t:void 0}},findRouteRedirect=function(e,t){return t.find((function(t){return function(e,t){var r=t.from;if(void 0===t.to)return!1;if(r.length>e.length)return!1;for(var i=0;i<r.length;i++){var o=r[i];if("*"===o)return!0;if(o!==e[i])return!1}return r.length===e.length}(e,t)}))},matchesIDs=function(e,t){for(var r=Math.min(e.length,t.length),n=0,i=0;i<r;i++){var o=e[i],a=t[i];if(o.id.toLowerCase()!==a.id)break;if(o.params){var s=Object.keys(o.params);if(s.length===a.segments.length)for(var u=s.map((function(e){return":".concat(e)})),c=0;c<u.length&&u[c].toLowerCase()===a.segments[c];c++)n++}n++}return n},matchesSegments=function(e,t){for(var i,r=new RouterSegments(e),n=!1,o=0;o<t.length;o++){var a=t[o].segments;if(""===a[0])n=!0;else{for(var s=0,u=a;s<u.length;s++){var c=u[s],f=r.next();if(":"===c[0]){if(""===f)return null;((i=i||[])[o]||(i[o]={}))[c.slice(1)]=f}else if(f!==c)return null}n=!1}}return!n||n===(""===r.next())?i?t.map((function(e,t){return{id:e.id,segments:e.segments,params:mergeParams(e.params,i[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}})):t:null},mergeParams=function(e,t){return e||t?Object.assign(Object.assign({},e),t):void 0},findChainForSegments=function(e,t){for(var r=null,n=0,i=0,o=t;i<o.length;i++){var a=o[i],s=matchesSegments(e,a);if(null!==s){var u=computePriority(s);u>n&&(n=u,r=s)}}return r},computePriority=function(e){for(var t=1,r=1,n=0,i=e;n<i.length;n++)for(var a=0,s=i[n].segments;a<s.length;a++){var u=s[a];":"===u[0]?t+=Math.pow(1,r):""!==u&&(t+=Math.pow(2,r)),r++}return t},RouterSegments=function(){function e(e){this.segments=e.slice()}return e.prototype.next=function(){return this.segments.length>0?this.segments.shift():""},e}(),readProp=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},readRedirects=function(e){return Array.from(e.children).filter((function(e){return"ION-ROUTE-REDIRECT"===e.tagName})).map((function(e){var t=readProp(e,"to");return{from:parsePath(readProp(e,"from")).segments,to:null==t?void 0:parsePath(t)}}))},readRoutes=function(e){return flattenRouterTree(readRouteNodes(e))},readRouteNodes=function(e){return Array.from(e.children).filter((function(e){return"ION-ROUTE"===e.tagName&&e.component})).map((function(e){var t=readProp(e,"component");return{segments:parsePath(readProp(e,"url")).segments,id:t.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:readRouteNodes(e)}}))},flattenRouterTree=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var i=n[r];flattenNode([],t,i)}return t},flattenNode=function(e,t,r){if(e=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.ev)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.ev)([],e,!0),[{id:r.id,segments:r.segments,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}],!1),0!==r.children.length)for(var n=0,i=r.children;n<i.length;n++){var o=i[n];flattenNode(e,t,o)}else t.push(e)},Router=function(){function e(e){(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.ionRouteWillChange=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return e.prototype.componentWillLoad=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var e,t,r;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(n){switch(n.label){case 0:return[4,searchNavNode(document.body)?Promise.resolve():new Promise((function(e){window.addEventListener("ionNavWillLoad",(function(){return e()}),{once:!0})}))];case 1:return n.sent(),[4,this.runGuards(this.getSegments())];case 2:return!0===(e=n.sent())?[3,5]:"object"!=typeof e?[3,4]:(t=e.redirect,r=parsePath(t),this.setSegments(r.segments,"root",r.queryString),[4,this.writeNavStateRoot(r.segments,"root")]);case 3:n.sent(),n.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:n.sent(),n.label=7;case 7:return[2]}}))}))},e.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.q)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.q)(this.onRoutesChanged.bind(this),100))},e.prototype.onPopState=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var e,t,r;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(n){switch(n.label){case 0:return e=this.historyDirection(),t=this.getSegments(),[4,this.runGuards(t)];case 1:if(!0!==(r=n.sent())){if("object"!=typeof r)return[2,!1];t=parsePath(r.redirect).segments}return[2,this.writeNavStateRoot(t,e)]}}))}))},e.prototype.onBackButton=function(e){var t=this;e.detail.register(0,(function(e){t.back(),e()}))},e.prototype.canTransition=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var e;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.runGuards()];case 1:return!0!==(e=t.sent())?"object"==typeof e?[2,e.redirect]:[2,!1]:[2,!0]}}))}))},e.prototype.push=function(e,t,r){return void 0===t&&(t="forward"),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var n,i,o,a,s;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(u){switch(u.label){case 0:return e.startsWith(".")&&(i=null!==(n=this.previousPath)&&void 0!==n?n:"/",o=new URL(e,"https://host/".concat(i)),e=o.pathname+o.search),a=parsePath(e),[4,this.runGuards(a.segments)];case 1:if(!0!==(s=u.sent())){if("object"!=typeof s)return[2,!1];a=parsePath(s.redirect)}return this.setSegments(a.segments,t,a.queryString),[2,this.writeNavStateRoot(a.segments,t,r)]}}))}))},e.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},e.prototype.printDebug=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(e){return function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));for(var t=function(e){var t=[];e.forEach((function(e){return t.push.apply(t,e.segments)}));var r=e.map((function(e){return e.id}));console.debug("%c ".concat(generatePath(t)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(r.join(", "),")"))},r=0,n=e;r<n.length;r++)t(n[r]);console.groupEnd()}(readRoutes(this.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));for(var t=0,r=e;t<r.length;t++){var n=r[t];n.to&&console.debug("FROM: ","$c ".concat(generatePath(n.from)),"font-weight: bold"," TO: ","$c ".concat(generatePath(n.to.segments)),"font-weight: bold")}console.groupEnd()}(readRedirects(this.el)),[2]}))}))},e.prototype.navChanged=function(e){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var t,r,n,i,o,a;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(s){switch(s.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,readNavState(window.document.body)];case 1:return t=s.sent(),r=t.ids,n=t.outlet,i=readRoutes(this.el),o=function(e,t){for(var r=null,n=0,i=0,o=t;i<o.length;i++){var a=o[i],s=matchesIDs(e,a);s>n&&(r=a,n=s)}return r?r.map((function(t,r){var n;return{id:t.id,segments:t.segments,params:mergeParams(t.params,null===(n=e[r])||void 0===n?void 0:n.params)}})):null}(r,i),o?(a=function(e){for(var t=[],r=0,n=e;r<n.length;r++)for(var i=n[r],o=0,a=i.segments;o<a.length;o++){var s=a[o];if(":"===s[0]){var u=i.params&&i.params[s.slice(1)];if(!u)return null;t.push(u)}else""!==s&&t.push(s)}return t}(o),a?(this.setSegments(a,e),[4,this.safeWriteNavState(n,o,"root",a,null,r.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",r.map((function(e){return e.id}))),[2,!1]);case 2:return s.sent(),[2,!0]}}))}))},e.prototype.onRedirectChanged=function(){var e=this.getSegments();e&&findRouteRedirect(e,readRedirects(this.el))&&this.writeNavStateRoot(e,"root")},e.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getSegments(),"root")},e.prototype.historyDirection=function(){var e,t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));var r=t.history.state,n=this.lastState;return this.lastState=r,r>n||r>=n&&n>0?"forward":r<n?"back":"root"},e.prototype.writeNavStateRoot=function(e,t,r){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var n,i,o,a,s,u,c,f;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(h){return e?(n=readRedirects(this.el),i=findRouteRedirect(e,n),o=null,i&&(a=i.to,s=a.segments,u=a.queryString,this.setSegments(s,t,u),o=i.from,e=s),c=readRoutes(this.el),(f=findChainForSegments(e,c))?[2,this.safeWriteNavState(document.body,f,t,e,o,0,r)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},e.prototype.safeWriteNavState=function(e,t,r,n,i,o,a){return void 0===o&&(o=0),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var s,u,c;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(f){switch(f.label){case 0:return[4,this.lock()];case 1:s=f.sent(),u=!1,f.label=2;case 2:return f.trys.push([2,4,,5]),[4,this.writeNavState(e,t,r,n,i,o,a)];case 3:return u=f.sent(),[3,5];case 4:return c=f.sent(),console.error(c),[3,5];case 5:return s(),[2,u]}}))}))},e.prototype.lock=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var e,t;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(r){switch(r.label){case 0:return e=this.waitPromise,this.waitPromise=new Promise((function(e){return t=e})),void 0===e?[3,2]:[4,e];case 1:r.sent(),r.label=2;case 2:return[2,t]}}))}))},e.prototype.runGuards=function(e,t){return void 0===e&&(e=this.getSegments()),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var r,n,i,o,a,s,u;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(c){switch(c.label){case 0:return void 0===t&&(t=parsePath(this.previousPath).segments),e&&t?(r=readRoutes(this.el),n=findChainForSegments(t,r),(i=n&&n[n.length-1].beforeLeave)?[4,i()]:[3,2]):[2,!0];case 1:return a=c.sent(),[3,3];case 2:a=!0,c.label=3;case 3:return!1===(o=a)||"object"==typeof o?[2,o]:(s=findChainForSegments(e,r),[2,!(u=s&&s[s.length-1].beforeEnter)||u()])}}))}))},e.prototype.writeNavState=function(e,t,r,n,i,o,a){return void 0===o&&(o=0),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var s,u;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(c){switch(c.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(s=this.routeChangeEvent(n,i))&&this.ionRouteWillChange.emit(s),[4,writeNavState(e,t,r,o,!1,a)]);case 1:return u=c.sent(),this.busy=!1,s&&this.ionRouteDidChange.emit(s),[2,u]}}))}))},e.prototype.setSegments=function(e,t,r){this.state++,writeSegments(window.history,this.root,this.useHash,e,t,this.state,r)},e.prototype.getSegments=function(){return function(e,t,r){var n=parsePath(t).segments,i=r?e.hash.slice(1):e.pathname;return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return null;return t.length===e.length?[""]:t.slice(e.length)}(n,parsePath(i).segments)}(window.location,this.root,this.useHash)},e.prototype.routeChangeEvent=function(e,t){var r=this.previousPath,n=generatePath(e);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:t?generatePath(t):null,to:n}},Object.defineProperty(e.prototype,"el",{get:function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!1,configurable:!0}),e}(),RouterLink=function(){function e(e){var t=this;(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.onClick=function(e){(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.o)(t.href,e,t.routerDirection,t.routerAnimation)},this.color=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0}return e.prototype.render=function(){var e,t=(0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),r={href:this.href,rel:this.rel,target:this.target};return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,{onClick:this.onClick,class:(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color,(e={},e[t]=!0,e["ion-activatable"]=!0,e))},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({},r),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))},e}();RouterLink.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},"./node_modules/@ionic/core/dist/esm-es5/theme-17531cdf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),hostContext=function(r,t){return null!==t.closest(r)},createColorClasses=function(r,t){var n;return"string"==typeof r&&r.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(r)]=!0,n),t):t},getClassMap=function(r){var t={};return function(r){return void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter((function(r){return null!=r})).map((function(r){return r.trim()})).filter((function(r){return""!==r})):[]}(r).forEach((function(r){return t[r]=!0})),t},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(r,t,n,e){return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.mG)(void 0,void 0,void 0,(function(){var o;return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Jh)(this,(function(a){return null!=r&&"#"!==r[0]&&!SCHEME.test(r)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(r,n,e)]):[2,!1]}))}))}}}]);