/*! For license information please see 6310.ec46480f.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[6310,3826,645,1342,7951],{"./node_modules/@ionic/core/dist/esm-es5/capacitor-b4979570.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-7a14ecec.js"),getCapacitor=function(){if(void 0!==_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"./node_modules/@ionic/core/dist/esm-es5/index-746a238e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{I:()=>ION_CONTENT_CLASS_SELECTOR,a:()=>findIonContent,b:()=>ION_CONTENT_ELEMENT_SELECTOR,c:()=>scrollByPoint,d:()=>disableContentScrollY,f:()=>findClosestIonContent,g:()=>getScrollElement,i:()=>isIonContent,p:()=>printIonContentErrorMsg,r:()=>resetContentScrollY,s:()=>scrollToTop});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-595d62c9.js"),ION_CONTENT_ELEMENT_SELECTOR="ion-content",ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host",ION_CONTENT_SELECTOR="".concat(ION_CONTENT_ELEMENT_SELECTOR,", ").concat(ION_CONTENT_CLASS_SELECTOR),isIonContent=function(r){return"ION-CONTENT"===r.tagName},getScrollElement=function(r){return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.mG)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Jh)(this,(function(n){switch(n.label){case 0:return isIonContent(r)?[4,new Promise((function(n){return(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__.c)(r,n)}))]:[3,2];case 1:return n.sent(),[2,r.getScrollElement()];case 2:return[2,r]}}))}))},findIonContent=function(r){var n=r.querySelector(ION_CONTENT_CLASS_SELECTOR);return n||r.querySelector(ION_CONTENT_SELECTOR)},findClosestIonContent=function(r){return r.closest(ION_CONTENT_SELECTOR)},scrollToTop=function(r,n){return isIonContent(r)?r.scrollToTop(n):Promise.resolve(r.scrollTo({top:0,left:0,behavior:n>0?"smooth":"auto"}))},scrollByPoint=function(r,n,o,t){return isIonContent(r)?r.scrollByPoint(n,o,t):Promise.resolve(r.scrollBy({top:o,left:n,behavior:t>0?"smooth":"auto"}))},printIonContentErrorMsg=function(r){return(0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_2__.b)(r,ION_CONTENT_ELEMENT_SELECTOR)},disableContentScrollY=function(r){if(isIonContent(r)){var n=r,o=n.scrollY;return n.scrollY=!1,o}return r.style.setProperty("overflow","hidden"),!0},resetContentScrollY=function(r,n){isIonContent(r)?r.scrollY=n:r.style.removeProperty("overflow")}},"./node_modules/@ionic/core/dist/esm-es5/input-shims-d78a3c77.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{startInputShims:()=>startInputShims});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_index_746a238e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-746a238e.js"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),_keyboard_b063f012_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/keyboard-b063f012.js"),_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-7a14ecec.js"),cloneMap=(__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/capacitor-b4979570.js"),new WeakMap),relocateInput=function(e,t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=!1),cloneMap.has(e)!==n&&(n?addClone(e,t,r,o):removeClone(e,t))},addClone=function(e,t,n,r){void 0===r&&(r=!1);var o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,r&&(i.disabled=!0),o.appendChild(i),cloneMap.set(e,i);var u="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(u,"px,").concat(n,"px,0) scale(0)")},removeClone=function(e,t){var n=cloneMap.get(e);n&&(cloneMap.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},SKIP_SELECTOR="input, textarea, [no-blur], [contenteditable]",calcScrollData=function(e,t,n,r){var o=e.top,i=e.bottom,a=t.top,s=a+15,d=Math.min(t.bottom,r-n)-50-i,c=s-o,v=Math.round(d<0?-d:c>0?-c:0),f=Math.min(v,o-a),m=Math.abs(f)/.3;return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(o-s)}},setScrollPadding=function(e,t,n){var r=e.$ionPaddingTimer;r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset","".concat(t,"px")):e.$ionPaddingTimer=setTimeout((function(){e.style.setProperty("--keyboard-offset","0px"),n&&n()}),120)},setClearScrollPaddingListener=function(e,t,n){e.addEventListener("focusout",(function(){t&&setScrollPadding(t,0,n)}),{once:!0})},currentPadding=0,setManualFocus=function(e){document.activeElement!==e&&(e.setAttribute("data-ionic-skip-scroll-assist","true"),e.focus())},jsSetFocus=function(e,t,n,r,o,i,a,u,s){return void 0===a&&(a=!1),void 0===u&&(u=0),void 0===s&&(s=!0),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.mG)(void 0,void 0,void 0,(function(){var l,d,c,v,f,S;return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Jh)(this,(function(m){switch(m.label){case 0:return n||r?(l=function(e,t,n,r){var o,i=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return calcScrollData(i.getBoundingClientRect(),t.getBoundingClientRect(),n,r)}(e,n||r,o,u),n&&Math.abs(l.scrollAmount)<4?(setManualFocus(t),i&&null!==n&&(setScrollPadding(n,currentPadding),setClearScrollPaddingListener(t,n,(function(){return currentPadding=0}))),[2]):(relocateInput(e,t,!0,l.inputSafeY,a),setManualFocus(t),(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.r)((function(){return e.click()})),i&&n&&(currentPadding=l.scrollPadding,setScrollPadding(n,currentPadding)),"undefined"==typeof window?[3,3]:(c=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.mG)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Jh)(this,(function(r){switch(r.label){case 0:return void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",c),n?[4,(0,_index_746a238e_js__WEBPACK_IMPORTED_MODULE_0__.c)(n,0,l.scrollAmount,l.scrollDuration)]:[3,2];case 1:r.sent(),r.label=2;case 2:return relocateInput(e,t,!1,l.inputSafeY),setManualFocus(t),i&&setClearScrollPaddingListener(t,n,(function(){return currentPadding=0})),[2]}}))}))},v=function(){window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",c)},n?[4,(0,_index_746a238e_js__WEBPACK_IMPORTED_MODULE_0__.g)(n)]:[3,2]))):[2];case 1:if(f=m.sent(),S=f.scrollHeight-f.clientHeight,s&&l.scrollAmount>S-f.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",c),d=setTimeout(c,1e3),[2];m.label=2;case 2:c(),m.label=3;case 3:return[2]}}))}))},startInputShims=function(e,t){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.mG)(void 0,void 0,void 0,(function(){var n,r,o,i,a,u,s,l,d,c,v,f,S,m,L,p,E;return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Jh)(this,(function(_){switch(_.label){case 0:return n=document,r="ios"===t,o="android"===t,i=e.getNumber("keyboardHeight",290),a=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",r),s=e.getBoolean("inputBlurring",r),l=e.getBoolean("scrollPadding",!0),d=Array.from(n.querySelectorAll("ion-input, ion-textarea")),c=new WeakMap,v=new WeakMap,[4,_keyboard_b063f012_js__WEBPACK_IMPORTED_MODULE_1__.K.getResizeMode()];case 1:for(f=_.sent(),S=function(e){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.mG)(void 0,void 0,void 0,(function(){var t,n,r,s,d;return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Jh)(this,(function(m){switch(m.label){case 0:return[4,new Promise((function(t){return(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.c)(e,t)}))];case 1:return m.sent(),t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),r=(0,_index_746a238e_js__WEBPACK_IMPORTED_MODULE_0__.f)(e),s=r?null:e.closest("ion-footer"),n?(r&&u&&!c.has(e)&&(d=function(e,t,n){if(!n||!t)return function(){};var r=function(n){(function(e){return e===e.getRootNode().activeElement})(t)&&relocateInput(e,t,n)},o=function(){return relocateInput(e,t,!1)},i=function(){return r(!0)},a=function(){return r(!1)};return(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.a)(n,"ionScrollStart",i),(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.a)(n,"ionScrollEnd",a),t.addEventListener("blur",o),function(){(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.b)(n,"ionScrollStart",i),(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.b)(n,"ionScrollEnd",a),t.removeEventListener("blur",o)}}(e,n,r),c.set(e,d)),"date"===n.type||"datetime-local"===n.type||!r&&!s||!a||v.has(e)||(d=function(e,t,n,r,o,i,a,u){void 0===u&&(u=!1);var s=i&&(void 0===a||a.mode===_keyboard_b063f012_js__WEBPACK_IMPORTED_MODULE_1__.a.None),l=!1,d=void 0!==_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w?_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w.innerHeight:0,c=function(o){!1!==l?jsSetFocus(e,t,n,r,o.detail.keyboardHeight,s,u,d,!1):l=!0},v=function(){l=!1,null===_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w||void 0===_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w||_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w.removeEventListener("ionKeyboardDidShow",c),e.removeEventListener("focusout",v,!0)},f=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.mG)(void 0,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Jh)(this,(function(i){return t.hasAttribute("data-ionic-skip-scroll-assist")?(t.removeAttribute("data-ionic-skip-scroll-assist"),[2]):(jsSetFocus(e,t,n,r,o,s,u,d),null===_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w||void 0===_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w||_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w.addEventListener("ionKeyboardDidShow",c),e.addEventListener("focusout",v,!0),[2])}))}))};return e.addEventListener("focusin",f,!0),function(){e.removeEventListener("focusin",f,!0),null===_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w||void 0===_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w||_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_2__.w.removeEventListener("ionKeyboardDidShow",c),e.removeEventListener("focusout",v,!0)}}(e,n,r,s,i,l,f,o),v.set(e,d)),[2]):[2]}}))}))},m=function(e){var t;u&&((t=c.get(e))&&t(),c.delete(e));a&&((t=v.get(e))&&t(),v.delete(e))},s&&function(){var e=!0,t=!1,n=document,r=function(){t=!0},o=function(){e=!0},i=function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(SKIP_SELECTOR)){var i=r.target;i!==o&&(i.matches(SKIP_SELECTOR)||i.closest(SKIP_SELECTOR)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}};(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",i,!1)}(),L=0,p=d;L<p.length;L++)E=p[L],S(E);return n.addEventListener("ionInputDidLoad",(function(e){S(e.detail)})),n.addEventListener("ionInputDidUnload",(function(e){m(e.detail)})),[2]}}))}))}},"./node_modules/@ionic/core/dist/esm-es5/keyboard-b063f012.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{K:()=>Keyboard,a:()=>KeyboardResize});var ExceptionCode,e,KeyboardResize,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/capacitor-b4979570.js");(e=ExceptionCode||(ExceptionCode={})).Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"}(KeyboardResize||(KeyboardResize={}));var Keyboard={getEngine:function(){var e=(0,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(null==e?void 0:e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode:function(){var e=this.getEngine();return(null==e?void 0:e.getResizeMode)?e.getResizeMode().catch((function(e){if(e.code!==ExceptionCode.Unimplemented)throw e})):Promise.resolve(void 0)}}}}]);