"use strict";(globalThis.webpackChunkionic_storybook=globalThis.webpackChunkionic_storybook||[]).push([[3265],{"./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_img:()=>Img});var _index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/index-2d388930.js"),_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js"),_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/dist/esm-es5/ionic-global-b3fc28dd.js"),Img=function(){function t(t){var e=this;(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.ionImgWillLoad=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionImgDidLoad",7),this.ionError=(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionError",7),this.inheritedAttributes={},this.onLoad=function(){e.ionImgDidLoad.emit()},this.onError=function(){e.ionError.emit()},this.loadSrc=void 0,this.loadError=void 0,this.alt=void 0,this.src=void 0}return t.prototype.srcChanged=function(){this.addIO()},t.prototype.componentWillLoad=function(){this.inheritedAttributes=(0,_helpers_3379ba19_js__WEBPACK_IMPORTED_MODULE_2__.k)(this.el,["draggable"])},t.prototype.componentDidLoad=function(){this.addIO()},t.prototype.addIO=function(){var t=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(e){e[e.length-1].isIntersecting&&(t.load(),t.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return t.load()}),200))},t.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},t.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.render=function(){var t=this,e=t.loadSrc,i=t.alt,r=t.onLoad,n=t.loadError,s=t.inheritedAttributes.draggable;return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_ionic_global_b3fc28dd_js__WEBPACK_IMPORTED_MODULE_1__.b)(this)},(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{decoding:"async",src:e,alt:i,onLoad:r,onError:n,part:"image",draggable:isDraggable(s)}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,_index_2d388930_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:!1,configurable:!0}),t}(),isDraggable=function(t){switch(t){case"true":return!0;case"false":return!1;default:return}};Img.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);