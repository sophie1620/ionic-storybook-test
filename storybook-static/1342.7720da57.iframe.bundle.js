/*! For license information please see 1342.7720da57.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[1342,3826],{"./node_modules/@ionic/core/dist/esm-es5/capacitor-b4979570.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-7a14ecec.js"),getCapacitor=function(){if(void 0!==_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"./node_modules/@ionic/core/dist/esm-es5/keyboard-b063f012.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{K:()=>Keyboard,a:()=>KeyboardResize});var ExceptionCode,e,KeyboardResize,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/capacitor-b4979570.js");(e=ExceptionCode||(ExceptionCode={})).Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"}(KeyboardResize||(KeyboardResize={}));var Keyboard={getEngine:function(){var e=(0,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(null==e?void 0:e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode:function(){var e=this.getEngine();return(null==e?void 0:e.getResizeMode)?e.getResizeMode().catch((function(e){if(e.code!==ExceptionCode.Unimplemented)throw e})):Promise.resolve(void 0)}}}}]);