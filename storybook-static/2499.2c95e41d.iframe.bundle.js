/*! For license information please see 2499.2c95e41d.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[2499,1950],{"./node_modules/@ionic/core/dist/esm-es5/ion-button_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_button:()=>Button,ion_icon:()=>Icon});var CACHED_MAP,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-2d388930.js"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-595d62c9.js"),_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/theme-17531cdf.js"),_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/ionic-global-b3fc28dd.js"),getNamedUrl=function(o){var t=function(){if("undefined"==typeof window)return new Map;if(!CACHED_MAP){var o=window;o.Ionicons=o.Ionicons||{},CACHED_MAP=o.Ionicons.map=o.Ionicons.map||new Map}return CACHED_MAP}().get(o);return t||(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.j)("svg/".concat(o,".svg"))},getName=function(o,t,n,r,e){return n="ios"===(n&&toLower(n))?"ios":"md",r&&"ios"===n?o=toLower(r):e&&"md"===n?o=toLower(e):(o||!t||isSrc(t)||(o=t),isStr(o)&&(o=toLower(o))),isStr(o)&&""!==o.trim()?""!==o.replace(/[a-z]|-|\d/gi,"")?null:o:null},getSrc=function(o){return isStr(o)&&(o=o.trim(),isSrc(o))?o:null},isSrc=function(o){return o.length>0&&/(\/|\.)/.test(o)},isStr=function(o){return"string"==typeof o},toLower=function(o){return o.toLowerCase()},isRTL=function(o){return o&&""!==o.dir?"rtl"===o.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())},Button=function(){function o(o){var t=this;(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,o),this.ionFocus=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionFocus",7),this.ionBlur=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.formButtonEl=null,this.formEl=null,this.inheritedAttributes={},this.handleClick=function(o){var n=t.el;"button"===t.type?(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_2__.o)(t.href,o,t.routerDirection,t.routerAnimation):(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.n)(n)&&t.submitForm(o)},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()},this.color=void 0,this.buttonType="button",this.disabled=!1,this.expand=void 0,this.fill=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.download=void 0,this.href=void 0,this.rel=void 0,this.shape=void 0,this.size=void 0,this.strong=!1,this.target=void 0,this.type="button",this.form=void 0}return o.prototype.disabledChanged=function(){var o=this.disabled;this.formButtonEl&&(this.formButtonEl.disabled=o)},o.prototype.renderHiddenButton=function(){var o=this.formEl=this.findForm();if(o){var t=this.formButtonEl;if(null!==t&&o.contains(t))return;var n=this.formButtonEl=document.createElement("button");n.type=this.type,n.style.display="none",n.disabled=this.disabled,o.appendChild(n)}},o.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el)},Object.defineProperty(o.prototype,"hasIconOnly",{get:function(){return!!this.el.querySelector('[slot="icon-only"]')},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rippleType",{get:function(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"},enumerable:!1,configurable:!0}),o.prototype.findForm=function(){var o=this.form;if(o instanceof HTMLFormElement)return o;if("string"==typeof o){var t=document.getElementById(o);return t?t instanceof HTMLFormElement?t:((0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_4__.p)('Form with selector: "#'.concat(o,'" could not be found. Verify that the id is attached to a <form> element.'),this.el),null):((0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_4__.p)('Form with selector: "#'.concat(o,'" could not be found. Verify that the id is correct and the form is rendered in the DOM.'),this.el),null)}return void 0!==o?((0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_4__.p)('The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.',this.el),null):this.el.closest("form")},o.prototype.submitForm=function(o){this.formEl&&this.formButtonEl&&(o.preventDefault(),this.formButtonEl.click())},o.prototype.render=function(){var o,t=(0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),n=this,r=n.buttonType,e=n.type,i=n.disabled,a=n.rel,s=n.target,l=n.size,c=n.href,d=n.color,u=n.expand,b=n.hasIconOnly,f=n.shape,p=n.strong,v=n.inheritedAttributes,g=void 0===l&&this.inItem?"small":l,m=void 0===c?"button":"a",y="button"===m?{type:e}:{download:this.download,href:c,rel:a,target:s},k=this.fill;return null==k&&(k=this.inToolbar||this.inListHeader?"clear":"solid"),"button"!==e&&this.renderHiddenButton(),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,{onClick:this.handleClick,"aria-disabled":i?"true":null,class:(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_2__.c)(d,(o={},o[t]=!0,o[r]=!0,o["".concat(r,"-").concat(u)]=void 0!==u,o["".concat(r,"-").concat(g)]=void 0!==g,o["".concat(r,"-").concat(f)]=void 0!==f,o["".concat(r,"-").concat(k)]=!0,o["".concat(r,"-strong")]=p,o["in-toolbar"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-toolbar",this.el),o["in-toolbar-color"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-toolbar[color]",this.el),o["in-buttons"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-buttons",this.el),o["button-has-icon-only"]=b,o["button-disabled"]=i,o["ion-activatable"]=!0,o["ion-focusable"]=!0,o))},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(m,Object.assign({},y,{class:"button-native",part:"native",disabled:i,onFocus:this.onFocus,onBlur:this.onBlur},v),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"button-inner"},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon-only"}),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"start"}),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"end"})),"md"===t&&(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",{type:this.rippleType})))},Object.defineProperty(o.prototype,"el",{get:function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(o,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),o}();Button.style={ios:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:16px;font-weight:500;letter-spacing:0}:host(.in-buttons){font-size:17px;font-weight:400}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:13px}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:0}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}',md:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:20px}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:13px}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:0}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var parser,isValid=function(o){if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(var t=0;t<o.attributes.length;t++){var n=o.attributes[t].name;if(isStr(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(t=0;t<o.childNodes.length;t++)if(!isValid(o.childNodes[t]))return!1}return!0},ioniconContent=new Map,requests=new Map,getSvgContent=function(o,t){var n=requests.get(o);if(!n){if("undefined"==typeof fetch||"undefined"==typeof document)return ioniconContent.set(o,""),Promise.resolve();if(function(o){return o.startsWith("data:image/svg+xml")}(o)&&function(o){return-1!==o.indexOf(";utf8,")}(o)){parser||(parser=new DOMParser);var e=parser.parseFromString(o,"text/html").querySelector("svg");return e&&ioniconContent.set(o,e.outerHTML),Promise.resolve()}n=fetch(o).then((function(n){if(n.ok)return n.text().then((function(n){n&&!1!==t&&(n=function(o){var t=document.createElement("div");t.innerHTML=o;for(var n=t.childNodes.length-1;n>=0;n--)"svg"!==t.childNodes[n].nodeName.toLowerCase()&&t.removeChild(t.childNodes[n]);var r=t.firstElementChild;if(r&&"svg"===r.nodeName.toLowerCase()){var e=r.getAttribute("class")||"";if(r.setAttribute("class",(e+" s-ion-icon").trim()),isValid(r))return t.innerHTML}return""}(n)),ioniconContent.set(o,n||"")}));ioniconContent.set(o,"")})),requests.set(o,n)}return n},Icon=function(){function o(o){(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,o),this.iconName=null,this.inheritedAttributes={},this.isVisible=!1,this.mode=getIonMode(),this.lazy=!1,this.sanitize=!0}return o.prototype.componentWillLoad=function(){this.inheritedAttributes=function(o,t){void 0===t&&(t=[]);var n={};return t.forEach((function(t){o.hasAttribute(t)&&(null!==o.getAttribute(t)&&(n[t]=o.getAttribute(t)),o.removeAttribute(t))})),n}(this.el,["aria-label"])},o.prototype.connectedCallback=function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))},o.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.waitUntilVisible=function(o,t,n){var r=this;if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){var e=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(e.disconnect(),r.io=void 0,n())}),{rootMargin:t});e.observe(o)}else n()},o.prototype.loadIcon=function(){var o=this;if(this.isVisible){var t=function(o){var t=getSrc(o.src);if(t)return t;if(t=getName(o.name,o.icon,o.mode,o.ios,o.md))return getNamedUrl(t);if(o.icon){if(t=getSrc(o.icon))return t;if(t=getSrc(o.icon[o.mode]))return t}return null}(this);t&&(ioniconContent.has(t)?this.svgContent=ioniconContent.get(t):getSvgContent(t,this.sanitize).then((function(){return o.svgContent=ioniconContent.get(t)})))}this.iconName=getName(this.name,this.icon,this.mode,this.ios,this.md)},o.prototype.render=function(){var o,t,n=this,r=n.iconName,e=n.el,i=n.inheritedAttributes,a=this.mode||"md",s=this.flipRtl||r&&(r.indexOf("arrow")>-1||r.indexOf("chevron")>-1)&&!1!==this.flipRtl;return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({role:"img",class:Object.assign(Object.assign((o={},o[a]=!0,o),createColorClasses(this.color)),(t={},t["icon-".concat(this.size)]=!!this.size,t["flip-rtl"]=!!s&&isRTL(e),t))},i),this.svgContent?(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-inner",innerHTML:this.svgContent}):(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-inner"}))},Object.defineProperty(o,"assetsDirs",{get:function(){return["svg"]},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"el",{get:function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(o,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}},enumerable:!1,configurable:!0}),o}(),getIonMode=function(){return"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md"},createColorClasses=function(o){var t;return o?((t={"ion-color":!0})["ion-color-".concat(o)]=!0,t):null};Icon.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},"./node_modules/@ionic/core/dist/esm-es5/theme-17531cdf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),hostContext=function(r,t){return null!==t.closest(r)},createColorClasses=function(r,t){var n;return"string"==typeof r&&r.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(r)]=!0,n),t):t},getClassMap=function(r){var t={};return function(r){return void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter((function(r){return null!=r})).map((function(r){return r.trim()})).filter((function(r){return""!==r})):[]}(r).forEach((function(r){return t[r]=!0})),t},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(r,t,n,e){return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.mG)(void 0,void 0,void 0,(function(){var o;return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Jh)(this,(function(a){return null!=r&&"#"!==r[0]&&!SCHEME.test(r)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(r,n,e)]):[2,!1]}))}))}}}]);