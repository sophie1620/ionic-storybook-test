"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[1316],{"./node_modules/@ionic/core/dist/esm-es5/input.utils-ec063df4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createSlotMutationController,g:()=>getCounterText});var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-7a14ecec.js"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-595d62c9.js"),createSlotMutationController=function(r,e,t){var n,o;void 0!==_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w&&"MutationObserver"in _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w&&(n=new MutationObserver((function(r){for(var n=0,o=r;n<o.length;n++)for(var u=function(r){if(r.nodeType===Node.ELEMENT_NODE&&r.slot===e)return t(),(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_1__.r)((function(){return i(r)})),{value:void 0}},d=0,f=o[n].addedNodes;d<f.length;d++){var v=u(f[d]);if("object"==typeof v)return v.value}})),n.observe(r,{childList:!0}));var i=function(r){var n;o&&(o.disconnect(),o=void 0),o=new MutationObserver((function(r){t();for(var n=0,o=r;n<o.length;n++)for(var a=0,d=o[n].removedNodes;a<d.length;a++){var f=d[a];f.nodeType===Node.ELEMENT_NODE&&f.slot===e&&u()}})),o.observe(null!==(n=r.parentElement)&&void 0!==n?n:r,{subtree:!0,childList:!0})},u=function(){o&&(o.disconnect(),o=void 0)};return{destroy:function(){n&&(n.disconnect(),n=void 0),u()}}},getCounterText=function(r,e,t){var n=null==r?0:r.toString().length,o=defaultCounterFormatter(n,e);if(void 0===t)return o;try{return t(n,e)}catch(r){return(0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_2__.a)("Exception in provided `counterFormatter`.",r),o}},defaultCounterFormatter=function(r,e){return"".concat(r," / ").concat(e)}}}]);