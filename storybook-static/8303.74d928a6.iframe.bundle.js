/*! For license information please see 8303.74d928a6.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[8303,3826],{"./node_modules/@ionic/core/dist/esm-es5/capacitor-b4979570.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-7a14ecec.js"),getCapacitor=function(){if(void 0!==_index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_7a14ecec_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"./node_modules/@ionic/core/dist/esm-es5/haptic-6447af60.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{I:()=>ImpactStyle,a:()=>hapticSelectionStart,b:()=>hapticSelectionChanged,c:()=>hapticSelection,d:()=>hapticImpact,h:()=>hapticSelectionEnd});var ImpactStyle,i,NotificationType,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/capacitor-b4979570.js");(i=ImpactStyle||(ImpactStyle={})).Heavy="HEAVY",i.Medium="MEDIUM",i.Light="LIGHT",function(i){i.Success="SUCCESS",i.Warning="WARNING",i.Error="ERROR"}(NotificationType||(NotificationType={}));var HapticEngine={getEngine:function(){var i=window.TapticEngine;if(i)return i;var t=(0,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__.g)();return(null==t?void 0:t.isPluginAvailable("Haptics"))?t.Plugins.Haptics:void 0},available:function(){if(!this.getEngine())return!1;var t=(0,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__.g)();return"web"!==(null==t?void 0:t.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate},isCordova:function(){return void 0!==window.TapticEngine},isCapacitor:function(){return void 0!==(0,_capacitor_b4979570_js__WEBPACK_IMPORTED_MODULE_0__.g)()},impact:function(i){var t=this.getEngine();if(t){var e=this.isCapacitor()?i.style:i.style.toLowerCase();t.impact({style:e})}},notification:function(i){var t=this.getEngine();if(t){var e=this.isCapacitor()?i.type:i.type.toLowerCase();t.notification({type:e})}},selection:function(){var i=this.isCapacitor()?ImpactStyle.Light:"light";this.impact({style:i})},selectionStart:function(){var i=this.getEngine();i&&(this.isCapacitor()?i.selectionStart():i.gestureSelectionStart())},selectionChanged:function(){var i=this.getEngine();i&&(this.isCapacitor()?i.selectionChanged():i.gestureSelectionChanged())},selectionEnd:function(){var i=this.getEngine();i&&(this.isCapacitor()?i.selectionEnd():i.gestureSelectionEnd())}},hapticAvailable=function(){return HapticEngine.available()},hapticSelection=function(){hapticAvailable()&&HapticEngine.selection()},hapticSelectionStart=function(){hapticAvailable()&&HapticEngine.selectionStart()},hapticSelectionChanged=function(){hapticAvailable()&&HapticEngine.selectionChanged()},hapticSelectionEnd=function(){hapticAvailable()&&HapticEngine.selectionEnd()},hapticImpact=function(i){hapticAvailable()&&HapticEngine.impact(i)}}}]);