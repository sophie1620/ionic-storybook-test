"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[5881],{"./node_modules/@ionic/core/dist/esm-es5/index-f0cc4e14.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{startTapClick:()=>startTapClick});var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-7a14ecec.js"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),startTapClick=function(e){if(void 0!==_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.d){var r,a,i,t=10*-MOUSE_WAIT,n=0,o=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),c=new WeakMap,u=function(e){t=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__.u)(e),E(e)},v=function(){i&&clearTimeout(i),i=void 0,r&&(D(!1),r=void 0)},l=function(e){r||T(getActivatableTarget(e),e)},E=function(e){T(void 0,e)},T=function(e,t){if(!e||e!==r){i&&clearTimeout(i),i=void 0;var n=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__.v)(t),a=n.x,o=n.y;if(r){if(c.has(r))throw new Error("internal error");r.classList.contains(ACTIVATED)||A(r,a,o),D(!0)}if(e){var f=c.get(e);f&&(clearTimeout(f),c.delete(e)),e.classList.remove(ACTIVATED);var u=function(){A(e,a,o),i=void 0};isInstant(e)?u():i=setTimeout(u,ADD_ACTIVATED_DEFERS)}r=e}},A=function(e,t,r){if(n=Date.now(),e.classList.add(ACTIVATED),o){var i=getRippleEffect(e);null!==i&&(p(),a=i.addRipple(t,r))}},p=function(){void 0!==a&&(a.then((function(e){return e()})),a=void 0)},D=function(e){p();var t=r;if(t){var a=CLEAR_STATE_DEFERS-Date.now()+n;if(e&&a>0&&!isInstant(t)){var i=setTimeout((function(){t.classList.remove(ACTIVATED),c.delete(t)}),CLEAR_STATE_DEFERS);c.set(t,i)}else t.classList.remove(ACTIVATED)}};_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("ionGestureCaptured",v),_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("touchstart",(function(e){t=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__.u)(e),l(e)}),!0),_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("touchcancel",u,!0),_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("touchend",u,!0),_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("pointercancel",v,!0),_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("mousedown",(function(e){if(2!==e.button){var n=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__.u)(e)-MOUSE_WAIT;t<n&&l(e)}}),!0),_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("mouseup",(function(e){var n=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__.u)(e)-MOUSE_WAIT;t<n&&E(e)}),!0)}},getActivatableTarget=function(e){if(void 0===e.composedPath)return e.target.closest(".ion-activatable");for(var t=e.composedPath(),n=0;n<t.length-2;n++){var r=t[n];if(!(r instanceof ShadowRoot)&&r.classList.contains("ion-activatable"))return r}},isInstant=function(e){return e.classList.contains("ion-activatable-instant")},getRippleEffect=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},ACTIVATED="ion-activated",ADD_ACTIVATED_DEFERS=100,CLEAR_STATE_DEFERS=150,MOUSE_WAIT=2500}}]);