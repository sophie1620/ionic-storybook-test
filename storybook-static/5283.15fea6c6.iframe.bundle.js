/*! For license information please see 5283.15fea6c6.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[5283,7955,1950],{"./node_modules/@ionic/core/dist/esm-es5/dir-912e3e13.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{i:()=>isRTL});var isRTL=function(r){return r&&""!==r.dir?"rtl"===r.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())}},"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_segment:()=>Segment,ion_segment_button:()=>SegmentButton});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-2d388930.js"),_dir_912e3e13_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/dir-912e3e13.js"),_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/theme-17531cdf.js"),_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/ionic-global-b3fc28dd.js"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),Segment=function(){function t(t){var e=this;(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.ionChange=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionChange",7),this.ionSelect=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionSelect",7),this.ionStyle=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionStyle",7),this.onClick=function(t){var o=t.target,n=e.checked;"ION-SEGMENT"!==o.tagName&&(e.value=o.value,o!==n&&e.emitValueChange(),!e.scrollable&&e.swipeGesture||(n?e.checkButton(n,o):e.setCheckedClasses()))},this.getSegmentButton=function(t){var o,n,i=e.getButtons().filter((function(t){return!t.disabled})),r=i.findIndex((function(t){return t===document.activeElement}));switch(t){case"first":return i[0];case"last":return i[i.length-1];case"next":return null!==(o=i[r+1])&&void 0!==o?o:i[0];case"previous":return null!==(n=i[r-1])&&void 0!==n?n:i[i.length-1];default:return null}},this.activated=!1,this.color=void 0,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.value=void 0,this.selectOnFocus=!1}return t.prototype.colorChanged=function(t,e){(void 0===e&&void 0!==t||void 0!==e&&void 0===t)&&this.emitStyle()},t.prototype.swipeGestureChanged=function(){this.gestureChanged()},t.prototype.valueChanged=function(t){if(this.ionSelect.emit({value:t}),this.scrollable){var o=this.getButtons().find((function(e){return e.value===t}));void 0!==o&&o.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}},t.prototype.disabledChanged=function(){this.gestureChanged();for(var e=0,o=this.getButtons();e<o.length;e++){o[e].disabled=this.disabled}},t.prototype.gestureChanged=function(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)},t.prototype.connectedCallback=function(){this.emitStyle()},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var t,e=this;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(o){switch(o.label){case 0:return this.setCheckedClasses(),t=this,[4,Promise.resolve().then(__webpack_require__.bind(__webpack_require__,"./node_modules/@ionic/core/dist/esm-es5/index-ff313b19.js"))];case 1:return t.gesture=o.sent().createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:function(t){return e.onStart(t)},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.gestureChanged(),this.disabled&&this.disabledChanged(),[2]}}))}))},t.prototype.onStart=function(t){this.valueBeforeGesture=this.value,this.activate(t)},t.prototype.onMove=function(t){this.setNextIndex(t)},t.prototype.onEnd=function(t){this.setActivated(!1),this.setNextIndex(t,!0),t.event.stopImmediatePropagation();var e=this.value;void 0!==e&&this.valueBeforeGesture!==e&&this.emitValueChange(),this.valueBeforeGesture=void 0},t.prototype.emitValueChange=function(){var t=this.value;this.ionChange.emit({value:t})},t.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))},Object.defineProperty(t.prototype,"checked",{get:function(){var t=this;return this.getButtons().find((function(e){return e.value===t.value}))},enumerable:!1,configurable:!0}),t.prototype.setActivated=function(t){this.getButtons().forEach((function(e){t?e.classList.add("segment-button-activated"):e.classList.remove("segment-button-activated")})),this.activated=t},t.prototype.activate=function(t){var e=this,o=t.event.target,i=this.getButtons().find((function(t){return t.value===e.value}));"ION-SEGMENT-BUTTON"===o.tagName&&(i||(this.value=o.value,this.setCheckedClasses()),this.value===o.value&&this.setActivated(!0))},t.prototype.getIndicator=function(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")},t.prototype.checkButton=function(t,e){var o=this.getIndicator(t),n=this.getIndicator(e);if(null!==o&&null!==n){var i=o.getBoundingClientRect(),r=n.getBoundingClientRect(),a=i.width/r.width,s=i.left-r.left,c="translate3d(".concat(s,"px, 0, 0) scaleX(").concat(a,")");(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.w)((function(){n.classList.remove("segment-button-indicator-animated"),n.style.setProperty("transform",c),n.getBoundingClientRect(),n.classList.add("segment-button-indicator-animated"),n.style.setProperty("transform","")})),this.value=e.value,this.setCheckedClasses()}},t.prototype.setCheckedClasses=function(){for(var t=this,e=this.getButtons(),n=e.findIndex((function(e){return e.value===t.value}))+1,i=0,r=e;i<r.length;i++){r[i].classList.remove("segment-button-after-checked")}n<e.length&&e[n].classList.add("segment-button-after-checked")},t.prototype.setNextIndex=function(t,e){var o=this;void 0===e&&(e=!1);var c,l,n=(0,_dir_912e3e13_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el),i=this.activated,r=this.getButtons(),a=r.findIndex((function(t){return t.value===o.value})),s=r[a];if(-1!==a){var d=s.getBoundingClientRect(),u=d.left,h=d.width,g=t.currentX,b=d.top+d.height/2,v=this.el.getRootNode().elementFromPoint(g,b);if(i&&!e){if(n?g>u+h:g<u)(k=a-1)>=0&&(l=k);else if(n?g<u:g>u+h){var k;if(i&&!e)(k=a+1)<r.length&&(l=k)}void 0===l||r[l].disabled||(c=r[l])}if(!i&&e&&(c=v),null!=c){if("ION-SEGMENT"===c.tagName)return!1;s!==c&&this.checkButton(s,c)}return!0}},t.prototype.emitStyle=function(){this.ionStyle.emit({segment:!0})},t.prototype.onKeyDown=function(t){var n,e=(0,_dir_912e3e13_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el),o=this.selectOnFocus;switch(t.key){case"ArrowRight":t.preventDefault(),n=e?this.getSegmentButton("previous"):this.getSegmentButton("next");break;case"ArrowLeft":t.preventDefault(),n=e?this.getSegmentButton("next"):this.getSegmentButton("previous");break;case"Home":t.preventDefault(),n=this.getSegmentButton("first");break;case"End":t.preventDefault(),n=this.getSegmentButton("last");break;case" ":case"Enter":t.preventDefault(),n=document.activeElement,o=!0}if(n){if(o){var i=this.checked;this.checkButton(i||n,n),n!==i&&this.emitValueChange()}n.setFocus()}},t.prototype.render=function(){var t,e=(0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"tablist",onClick:this.onClick,class:(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color,(t={},t[e]=!0,t["in-toolbar"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar",this.el),t["in-toolbar-color"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar[color]",this.el),t["segment-activated"]=this.activated,t["segment-disabled"]=this.disabled,t["segment-scrollable"]=this.scrollable,t))},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),t}();Segment.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(-webkit-min-content, 1fr);grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(-webkit-min-content, 1fr);grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent;grid-auto-columns:minmax(auto, 360px)}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"};var ids=0,SegmentButton=function(){function t(t){var e=this;(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.segmentEl=null,this.inheritedAttributes={},this.updateStyle=function(){(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.i)(e)},this.updateState=function(){var t=e.segmentEl;t&&(e.checked=t.value===e.value,t.disabled&&(e.disabled=!0))},this.checked=!1,this.disabled=!1,this.layout="icon-top",this.type="button",this.value="ion-sb-"+ids++}return t.prototype.valueChanged=function(){this.updateState()},t.prototype.connectedCallback=function(){var t=this.segmentEl=this.el.closest("ion-segment");t&&(this.updateState(),(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_5__.a)(t,"ionSelect",this.updateState),(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_5__.a)(t,"ionStyle",this.updateStyle))},t.prototype.disconnectedCallback=function(){var t=this.segmentEl;t&&((0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_5__.b)(t,"ionSelect",this.updateState),(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_5__.b)(t,"ionStyle",this.updateStyle),this.segmentEl=null)},t.prototype.componentWillLoad=function(){this.inheritedAttributes=Object.assign({},(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_5__.k)(this.el,["aria-label"]))},Object.defineProperty(t.prototype,"hasLabel",{get:function(){return!!this.el.querySelector("ion-label")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasIcon",{get:function(){return!!this.el.querySelector("ion-icon")},enumerable:!1,configurable:!0}),t.prototype.setFocus=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var t;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(e){return void 0!==(t=this.nativeEl)&&t.focus(),[2]}))}))},t.prototype.render=function(){var t,e=this,o=this,n=o.checked,i=o.type,r=o.disabled,a=o.hasIcon,s=o.hasLabel,c=o.layout,l=o.segmentEl,d=(0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(t={},t[d]=!0,t["in-toolbar"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar",this.el),t["in-toolbar-color"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar[color]",this.el),t["in-segment"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-segment",this.el),t["in-segment-color"]=void 0!==(null==l?void 0:l.color),t["segment-button-has-label"]=s,t["segment-button-has-icon"]=a,t["segment-button-has-label-only"]=s&&!a,t["segment-button-has-icon-only"]=a&&!s,t["segment-button-disabled"]=r,t["segment-button-checked"]=n,t["segment-button-layout-".concat(c)]=!0,t["ion-activatable"]=!0,t["ion-activatable-instant"]=!0,t["ion-focusable"]=!0,t)},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",Object.assign({"aria-selected":n?"true":"false",role:"tab",ref:function(t){return e.nativeEl=t},type:i,class:"button-native",part:"native",disabled:r},this.inheritedAttributes),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"button-inner"},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),"md"===d&&(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",null)),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{part:"indicator",class:{"segment-button-indicator":!0,"segment-button-indicator-animated":!0}},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{part:"indicator-background",class:"segment-button-indicator-background"})))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:!1,configurable:!0}),t}();SegmentButton.style={ios:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;grid-row:1;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;line-height:22px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color, #fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}.segment-button-indicator{-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;left:0;right:0;top:0;bottom:0}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:var(--ion-color-contrast)}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}',md:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;grid-row:1;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;line-height:22px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}'}},"./node_modules/@ionic/core/dist/esm-es5/theme-17531cdf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),hostContext=function(r,t){return null!==t.closest(r)},createColorClasses=function(r,t){var n;return"string"==typeof r&&r.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(r)]=!0,n),t):t},getClassMap=function(r){var t={};return function(r){return void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter((function(r){return null!=r})).map((function(r){return r.trim()})).filter((function(r){return""!==r})):[]}(r).forEach((function(r){return t[r]=!0})),t},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(r,t,n,e){return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.mG)(void 0,void 0,void 0,(function(){var o;return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Jh)(this,(function(a){return null!=r&&"#"!==r[0]&&!SCHEME.test(r)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(r,n,e)]):[2,!1]}))}))}}}]);