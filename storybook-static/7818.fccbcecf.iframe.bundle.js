/*! For license information please see 7818.fccbcecf.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[7818,8599,1950],{"./node_modules/@ionic/core/dist/esm-es5/form-controller-ed77647a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createLegacyFormController});var _helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),createLegacyFormController=function(e){var r,a=e;return{hasLegacyControl:function(){if(void 0===r){var e=void 0!==a.label||hasLabelSlot(a),t=a.hasAttribute("aria-label")||a.hasAttribute("aria-labelledby")&&null===a.shadowRoot,l=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_0__.h)(a);r=!0===a.legacy||!e&&!t&&null!==l}return r}}},hasLabelSlot=function(e){return null!==e.shadowRoot&&(!(!NAMED_LABEL_SLOT_COMPONENTS.includes(e.tagName)||null===e.querySelector('[slot="label"]'))||!(!UNNAMED_LABEL_SLOT_COMPONENTS.includes(e.tagName)||""===e.textContent))},NAMED_LABEL_SLOT_COMPONENTS=["ION-RANGE"],UNNAMED_LABEL_SLOT_COMPONENTS=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_radio:()=>Radio,ion_radio_group:()=>RadioGroup});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-2d388930.js"),_form_controller_ed77647a_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/form-controller-ed77647a.js"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-595d62c9.js"),_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/theme-17531cdf.js"),_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/ionic-global-b3fc28dd.js"),Radio=function(){function e(e){var t=this;(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.ionStyle=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionStyle",7),this.ionFocus=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionFocus",7),this.ionBlur=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionBlur",7),this.inputId="ion-rb-".concat(radioButtonIds++),this.radioGroup=null,this.hasLoggedDeprecationWarning=!1,this.updateState=function(){t.radioGroup&&(t.checked=t.radioGroup.value===t.value)},this.onClick=function(){var e=t,r=e.radioGroup,i=e.checked;t.legacyFormController.hasLegacyControl()?t.checked=t.nativeInput.checked:i&&(null==r?void 0:r.allowEmptySelection)?t.checked=!1:t.checked=!0},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()},this.checked=!1,this.buttonTabindex=-1,this.color=void 0,this.name=this.inputId,this.disabled=!1,this.value=void 0,this.labelPlacement="start",this.legacy=void 0,this.justify="space-between",this.alignment="center"}return e.prototype.valueChanged=function(){this.updateState()},e.prototype.setFocus=function(e){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(t){return e.stopPropagation(),e.preventDefault(),this.el.focus(),[2]}))}))},e.prototype.setButtonTabindex=function(e){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(t){return this.buttonTabindex=e,[2]}))}))},e.prototype.connectedCallback=function(){this.legacyFormController=(0,_form_controller_ed77647a_js__WEBPACK_IMPORTED_MODULE_3__.c)(this.el),void 0===this.value&&(this.value=this.inputId);var e=this.radioGroup=this.el.closest("ion-radio-group");e&&(this.updateState(),(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.a)(e,"ionValueChange",this.updateState))},e.prototype.disconnectedCallback=function(){var e=this.radioGroup;e&&((0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.b)(e,"ionValueChange",this.updateState),this.radioGroup=null)},e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.styleChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){var e={"interactive-disabled":this.disabled};this.legacyFormController.hasLegacyControl()&&(e["radio-checked"]=this.checked),this.ionStyle.emit(e)},Object.defineProperty(e.prototype,"hasLabel",{get:function(){return""!==this.el.textContent},enumerable:!1,configurable:!0}),e.prototype.renderRadioControl=function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"radio-icon",part:"container"},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"radio-inner",part:"mark"}),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"radio-ripple"}))},e.prototype.render=function(){return this.legacyFormController.hasLegacyControl()?this.renderLegacyRadio():this.renderRadio()},e.prototype.renderRadio=function(){var e,t=this,r=t.checked,i=t.disabled,a=t.color,o=t.el,n=t.justify,l=t.labelPlacement,s=t.hasLabel,d=t.buttonTabindex,c=t.alignment,p=(0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),m=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_5__.h)("ion-item",o);return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,{onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_5__.c)(a,(e={},e[p]=!0,e["in-item"]=m,e["radio-checked"]=r,e["radio-disabled"]=i,e["radio-justify-".concat(n)]=!0,e["radio-alignment-".concat(c)]=!0,e["radio-label-placement-".concat(l)]=!0,e["ion-activatable"]=!m,e["ion-focusable"]=!m,e)),role:"radio","aria-checked":r?"true":"false","aria-disabled":i?"true":null,tabindex:d},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"radio-wrapper"},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!s}},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"native-wrapper"},this.renderRadioControl())))},e.prototype.renderLegacyRadio=function(){var e,t=this;this.hasLoggedDeprecationWarning||((0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_6__.p)('ion-radio now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-radio>Option Label</ion-radio>\nExample with aria-label: <ion-radio aria-label="Option Label"></ion-radio>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,_index_595d62c9_js__WEBPACK_IMPORTED_MODULE_6__.p)('ion-radio is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new radio syntax.',this.el),this.hasLoggedDeprecationWarning=!0);var r=this,i=r.inputId,a=r.disabled,o=r.checked,n=r.color,l=r.el,s=r.buttonTabindex,d=(0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),c=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.e)(l,i),p=c.label,m=c.labelId,u=c.labelText;return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,{"aria-checked":"".concat(o),"aria-hidden":a?"true":null,"aria-labelledby":p?m:null,role:"radio",tabindex:s,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_5__.c)(n,(e={},e[d]=!0,e["in-item"]=(0,_theme_17531cdf_js__WEBPACK_IMPORTED_MODULE_5__.h)("ion-item",l),e.interactive=!0,e["radio-checked"]=o,e["radio-disabled"]=a,e["legacy-radio"]=!0,e))},this.renderRadioControl(),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:i},u),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"radio",checked:o,disabled:a,tabindex:"-1",id:i,ref:function(e){return t.nativeInput=e}}))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"],checked:["styleChanged"],color:["styleChanged"],disabled:["styleChanged"]}},enumerable:!1,configurable:!0}),e}(),radioButtonIds=0;Radio.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-radio)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper:dir(rtl){-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color-checked:var(--ion-color-primary, #3880ff)}:host(.legacy-radio){width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}@supports (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}}@supports not (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{left:-9px}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}@supports selector(:dir(rtl)){:host(.ion-focused) .radio-icon::after:dir(rtl){left:unset;right:unset;right:-9px}}}:host(.in-item.legacy-radio){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px;margin-top:8px;margin-bottom:8px}.native-wrapper .radio-icon{width:15px;height:24px}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-radio)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper:dir(rtl){-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%}:host(.legacy-radio){width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.legacy-radio.radio-disabled),:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused.legacy-radio) .radio-icon::after{top:-12px}@supports (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{inset-inline-start:-12px}}@supports not (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{left:-12px}:host-context([dir=rtl]):host(.ion-focused.legacy-radio) .radio-icon::after,:host-context([dir=rtl]).ion-focused.legacy-radio .radio-icon::after{left:unset;right:unset;right:-12px}@supports selector(:dir(rtl)){:host(.ion-focused.legacy-radio) .radio-icon::after:dir(rtl){left:unset;right:unset;right:-12px}}}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host(.in-item.legacy-radio){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:11px;margin-bottom:10px}.native-wrapper .radio-icon{width:20px;height:20px}'};var RadioGroup=function(){function e(e){var t=this;(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.ionChange=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionChange",7),this.ionValueChange=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionValueChange",7),this.inputId="ion-rg-".concat(radioGroupIds++),this.labelId="".concat(this.inputId,"-lbl"),this.setRadioTabindex=function(e){var r=t.getRadios(),i=r.find((function(e){return!e.disabled})),a=r.find((function(t){return t.value===e&&!t.disabled}));if(i||a)for(var o=a||i,n=0,l=r;n<l.length;n++){var s=l[n],d=s===o?0:-1;s.setButtonTabindex(d)}},this.onClick=function(e){e.preventDefault();var r=e.target&&e.target.closest("ion-radio");if(r){var i=t.value,a=r.value;a!==i?(t.value=a,t.emitValueChange(e)):t.allowEmptySelection&&(t.value=void 0,t.emitValueChange(e))}},this.allowEmptySelection=!1,this.name=this.inputId,this.value=void 0}return e.prototype.valueChanged=function(e){this.setRadioTabindex(e),this.ionValueChange.emit({value:e})},e.prototype.componentDidLoad=function(){this.setRadioTabindex(this.value)},e.prototype.connectedCallback=function(){return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.mG)(this,void 0,void 0,(function(){var e,t;return(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Jh)(this,(function(r){return(e=this.el.querySelector("ion-list-header")||this.el.querySelector("ion-item-divider"))&&(t=this.label=e.querySelector("ion-label"))&&(this.labelId=t.id=this.name+"-lbl"),[2]}))}))},e.prototype.getRadios=function(){return Array.from(this.el.querySelectorAll("ion-radio"))},e.prototype.emitValueChange=function(e){var t=this.value;this.ionChange.emit({value:t,event:e})},e.prototype.onKeydown=function(e){var t=!!this.el.closest("ion-select-popover");if(!e.target||this.el.contains(e.target)){var r=this.getRadios().filter((function(e){return!e.disabled}));if(e.target&&r.includes(e.target)){var i=r.findIndex((function(t){return t===e.target})),a=r[i],o=void 0;if(["ArrowDown","ArrowRight"].includes(e.key)&&(o=i===r.length-1?r[0]:r[i+1]),["ArrowUp","ArrowLeft"].includes(e.key)&&(o=0===i?r[r.length-1]:r[i-1]),o&&r.includes(o)&&(o.setFocus(e),t||(this.value=o.value,this.emitValueChange(e))),[" "].includes(e.key)){var n=this.value;this.value=this.allowEmptySelection&&void 0!==this.value?void 0:a.value,(n!==this.value||this.allowEmptySelection)&&this.emitValueChange(e),e.preventDefault()}}}},e.prototype.render=function(){var e=this,t=e.label,r=e.labelId,i=e.el,a=e.name,o=e.value,n=(0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_4__.d)(!0,i,a,o,!1),(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"radiogroup","aria-labelledby":t?r:null,onClick:this.onClick,class:n})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:!1,configurable:!0}),e}(),radioGroupIds=0},"./node_modules/@ionic/core/dist/esm-es5/theme-17531cdf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),hostContext=function(r,t){return null!==t.closest(r)},createColorClasses=function(r,t){var n;return"string"==typeof r&&r.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(r)]=!0,n),t):t},getClassMap=function(r){var t={};return function(r){return void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter((function(r){return null!=r})).map((function(r){return r.trim()})).filter((function(r){return""!==r})):[]}(r).forEach((function(r){return t[r]=!0})),t},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(r,t,n,e){return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.mG)(void 0,void 0,void 0,(function(){var o;return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Jh)(this,(function(a){return null!=r&&"#"!==r[0]&&!SCHEME.test(r)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(r,n,e)]):[2,!1]}))}))}}}]);