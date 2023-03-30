import{n as _,_ as w}from"./app.73f924cf.js";/*!
  * PhotoSwipe Lightbox 5.3.7 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */function d(s,t,e){const i=document.createElement(t);return s&&(i.className=s),e&&e.appendChild(i),i}function v(s,t,e){let i=`translate3d(${s}px,${t||0}px,0)`;return e!==void 0&&(i+=` scale3d(${e},${e},1)`),i}function u(s,t,e){s.style.width=typeof t=="number"?`${t}px`:t,s.style.height=typeof e=="number"?`${e}px`:e}const a={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function S(s){return"button"in s&&s.button===1||s.ctrlKey||s.metaKey||s.altKey||s.shiftKey}function c(s,t,e=document){let i=[];if(s instanceof Element)i=[s];else if(s instanceof NodeList||Array.isArray(s))i=Array.from(s);else{const n=typeof s=="string"?s:t;n&&(i=Array.from(e.querySelectorAll(n)))}return i}function E(s){return typeof s=="function"&&s.prototype&&s.prototype.goTo}function f(){return!!(navigator.vendor&&navigator.vendor.match(/apple/i))}class I{constructor(t,e){this.type=t,this.defaultPrevented=!1,e&&Object.assign(this,e)}preventDefault(){this.defaultPrevented=!0}}class A{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,e,i=100){var n,r,l;this._filters[t]||(this._filters[t]=[]),(n=this._filters[t])==null||n.push({fn:e,priority:i}),(r=this._filters[t])==null||r.sort((h,o)=>h.priority-o.priority),(l=this.pswp)==null||l.addFilter(t,e,i)}removeFilter(t,e){this._filters[t]&&(this._filters[t]=this._filters[t].filter(i=>i.fn!==e)),this.pswp&&this.pswp.removeFilter(t,e)}applyFilters(t,...e){var i;return(i=this._filters[t])==null||i.forEach(n=>{e[0]=n.fn.apply(this,e)}),e[0]}on(t,e){var i,n;this._listeners[t]||(this._listeners[t]=[]),(i=this._listeners[t])==null||i.push(e),(n=this.pswp)==null||n.on(t,e)}off(t,e){var i;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter(n=>e!==n)),(i=this.pswp)==null||i.off(t,e)}dispatch(t,e){var n;if(this.pswp)return this.pswp.dispatch(t,e);const i=new I(t,e);return(n=this._listeners[t])==null||n.forEach(r=>{r.call(this,i)}),i}}class D{constructor(t,e){if(this.element=d("pswp__img pswp__img--placeholder",t?"img":"div",e),t){const i=this.element;i.decoding="async",i.alt="",i.src=t,i.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,e){!this.element||(this.element.tagName==="IMG"?(u(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=v(0,0,t/250)):u(this.element,t,e))}destroy(){var t;(t=this.element)!=null&&t.parentNode&&this.element.remove(),this.element=null}}class b{constructor(t,e,i){this.instance=e,this.data=t,this.index=i,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=a.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout(()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)},1e3)}load(t,e){if(this.slide&&this.usePlaceholder())if(this.placeholder){const i=this.placeholder.element;i&&!i.parentElement&&this.slide.container.prepend(i)}else{const i=this.instance.applyFilters("placeholderSrc",this.data.msrc&&this.slide.isFirstSlide?this.data.msrc:!1,this);this.placeholder=new D(i,this.slide.container)}this.element&&!e||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=d("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=d("pswp__content","div"),this.element.innerHTML=this.data.html||""),e&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var i,n;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const e=this.element;this.updateSrcsetSizes(),this.data.srcset&&(e.srcset=this.data.srcset),e.src=(i=this.data.src)!=null?i:"",e.alt=(n=this.data.alt)!=null?n:"",this.state=a.LOADING,e.complete?this.onLoaded():(e.onload=()=>{this.onLoaded()},e.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=a.LOADED,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===a.LOADED||this.state===a.ERROR)&&this.removePlaceholder())}onError(){this.state=a.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===a.LOADING,this)}isError(){return this.state===a.ERROR}isImageContent(){return this.type==="image"}setDisplayedSize(t,e){if(!!this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,e),!this.instance.dispatch("contentResize",{content:this,width:t,height:e}).defaultPrevented&&(u(this.element,t,e),this.isImageContent()&&!this.isError()))){const i=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=e,i?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:e,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==a.ERROR,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=this.element,e=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||e>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=e+"px",t.dataset.largestUsedSize=String(e))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){var t,e;if(this.slide){let i=d("pswp__error-msg","div");i.innerText=(e=(t=this.instance.options)==null?void 0:t.errorMsg)!=null?e:"",i=this.instance.applyFilters("contentErrorElement",i,this),this.element=d("pswp__content pswp__error-msg-container","div"),this.element.appendChild(i),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===a.ERROR){this.displayError();return}if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||f())?(this.isDecoding=!0,this.element.decode().catch(()=>{}).finally(()=>{this.isDecoding=!1,this.appendImage()})):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||!this.slide||(this.isImageContent()&&this.isDecoding&&!f()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){!this.isAttached||this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===a.LOADED||this.state===a.ERROR)&&this.removePlaceholder())}}function C(s,t){if(s.getViewportSizeFn){const e=s.getViewportSizeFn(s,t);if(e)return e}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function p(s,t,e,i,n){let r=0;if(t.paddingFn)r=t.paddingFn(e,i,n)[s];else if(t.padding)r=t.padding[s];else{const l="padding"+s[0].toUpperCase()+s.slice(1);t[l]&&(r=t[l])}return Number(r)||0}function L(s,t,e,i){return{x:t.x-p("left",s,t,e,i)-p("right",s,t,e,i),y:t.y-p("top",s,t,e,i)-p("bottom",s,t,e,i)}}const m=4e3;class x{constructor(t,e,i,n){this.pswp=n,this.options=t,this.itemData=e,this.index=i,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}update(t,e,i){const n={x:t,y:e};this.elementSize=n,this.panAreaSize=i;const r=i.x/n.x,l=i.y/n.y;this.fit=Math.min(1,r<l?r:l),this.fill=Math.min(1,r>l?r:l),this.vFill=Math.min(1,l),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const e=t+"ZoomLevel",i=this.options[e];if(!!i)return typeof i=="function"?i(this):i==="fill"?this.fill:i==="fit"?this.fit:Number(i)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,this.fit*3),this.elementSize&&t*this.elementSize.x>m&&(t=m/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,this.fit*4)}}function y(s,t,e){const i=t.createContentFromData(s,e);let n;const{options:r}=t;if(r){n=new x(r,s,-1);let l;t.pswp?l=t.pswp.viewportSize:l=C(r,t);const h=L(r,l,s,e);n.update(i.width,i.height,h)}return i.lazyLoad(),n&&i.setDisplayedSize(Math.ceil(i.width*n.initial),Math.ceil(i.height*n.initial)),i}function P(s,t){const e=t.getItemData(s);if(!t.dispatch("lazyLoadSlide",{index:s,itemData:e}).defaultPrevented)return y(e,t,s)}class z extends A{getNumItems(){var n;let t=0;const e=(n=this.options)==null?void 0:n.dataSource;e&&"length"in e?t=e.length:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),e.items&&(t=e.items.length));const i=this.dispatch("numItems",{dataSource:e,numItems:t});return this.applyFilters("numItems",i.numItems,e)}createContentFromData(t,e){return new b(t,this,e)}getItemData(t){var l;const e=(l=this.options)==null?void 0:l.dataSource;let i={};Array.isArray(e)?i=e[t]:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),i=e.items[t]);let n=i;n instanceof Element&&(n=this._domElementToItemData(n));const r=this.dispatch("itemData",{itemData:n||{},index:t});return this.applyFilters("itemData",r.itemData,t)}_getGalleryDOMElements(t){var e,i;return((e=this.options)==null?void 0:e.children)||((i=this.options)==null?void 0:i.childSelector)?c(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){var n;const e={element:t},i=t.tagName==="A"?t:t.querySelector("a");if(i){e.src=i.dataset.pswpSrc||i.href,i.dataset.pswpSrcset&&(e.srcset=i.dataset.pswpSrcset),e.width=i.dataset.pswpWidth?parseInt(i.dataset.pswpWidth,10):0,e.height=i.dataset.pswpHeight?parseInt(i.dataset.pswpHeight,10):0,e.w=e.width,e.h=e.height,i.dataset.pswpType&&(e.type=i.dataset.pswpType);const r=t.querySelector("img");r&&(e.msrc=r.currentSrc||r.src,e.alt=(n=r.getAttribute("alt"))!=null?n:""),(i.dataset.pswpCropped||i.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,i)}lazyLoadData(t,e){return y(t,this,e)}}class O extends z{constructor(t){super(),this.options=t||{},this._uid=0,this.shouldOpen=!1,this._preloadedContent=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}init(){c(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(t){if(S(t)||window.pswp||window.navigator.onLine===!1)return;let e={x:t.clientX,y:t.clientY};!e.x&&!e.y&&(e=null);let i=this.getClickedIndex(t);i=this.applyFilters("clickedIndex",i,t,this);const n={gallery:t.currentTarget};i>=0&&(t.preventDefault(),this.loadAndOpen(i,n,e))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const e=t.target,n=c(this.options.children,this.options.childSelector,t.currentTarget).findIndex(r=>r===e||r.contains(e));return n!==-1?n:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,e,i){return window.pswp?!1:(this.options.index=t,this.options.initialPointerPos=i,this.shouldOpen=!0,this.preload(t,e),!0)}preload(t,e){const{options:i}=this;e&&(i.dataSource=e);const n=[],r=typeof i.pswpModule;if(E(i.pswpModule))n.push(Promise.resolve(i.pswpModule));else{if(r==="string")throw new Error("pswpModule as string is no longer supported");if(r==="function")n.push(i.pswpModule());else throw new Error("pswpModule is not valid")}typeof i.openPromise=="function"&&n.push(i.openPromise()),i.preloadFirstSlide!==!1&&t>=0&&(this._preloadedContent=P(t,this));const l=++this._uid;Promise.all(n).then(h=>{if(this.shouldOpen){const o=h[0];this._openPhotoswipe(o,l)}})}_openPhotoswipe(t,e){if(e!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const i=typeof t=="object"?new t.default(this.options):new t(this.options);this.pswp=i,window.pswp=i,Object.keys(this._listeners).forEach(n=>{var r;(r=this._listeners[n])==null||r.forEach(l=>{i.on(n,l)})}),Object.keys(this._filters).forEach(n=>{var r;(r=this._filters[n])==null||r.forEach(l=>{i.addFilter(n,l.fn,l.priority)})}),this._preloadedContent&&(i.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),i.on("destroy",()=>{this.pswp=void 0,delete window.pswp}),i.init()}destroy(){var t;(t=this.pswp)==null||t.destroy(),this.shouldOpen=!1,this._listeners={},c(this.options.gallery,this.options.gallerySelector).forEach(e=>{e.removeEventListener("click",this.onThumbnailsClick,!1)})}}var M=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div")},F=[];const R={props:{className:{type:String,default:()=>"preview-image-swipe-"+Math.round(Math.random()*1e4)},urlList:{type:Array,default:()=>[]},initialIndex:{type:Number,default:0}},data(){return{lightbox:null}},beforeDestroy(){var s;(s=this.lightbox)==null||s.destroy()},watch:{urlList:{handler(s){var n;let t=!1,e=!1;(n=this.lightbox)==null||n.destroy();const i=s.map(r=>{if($A.isJson(r)){if(r.src&&(r.src=$A.rightDelete(r.src,"_thumb.jpg")),parseInt(r.width)>0&&parseInt(r.height)>0)return r;r=r.src}return e=!0,{html:`<div class="preview-image-swipe"><img src="${$A.rightDelete(r,"_thumb.jpg")}"/></div>`}});this.lightbox=new O({dataSource:i,escKey:!1,mainClass:this.className,showHideAnimationType:"none",pswpModule:()=>w(()=>import("./photoswipe.esm.f2ba98d2.js"),[])}),this.lightbox.on("change",()=>{e&&$A.loadScript("js/pinch-zoom.umd.min.js",r=>{PinchZoom!=="object"&&document.querySelector(`.${this.className}`).querySelectorAll(".preview-image-swipe").forEach(h=>{h.getAttribute("data-init-pinch-zoom")!=="init"&&(h.setAttribute("data-init-pinch-zoom","init"),h.querySelector("img").addEventListener("pointermove",o=>{t&&o.stopPropagation()}),new PinchZoom.default(h,{draggableUnzoomed:!1,onDragStart:()=>{t=!0},onDragEnd:()=>{t=!1}}))})})}),this.lightbox.on("close",()=>{this.$emit("on-close")}),this.lightbox.on("destroy",()=>{this.$emit("on-destroy")}),this.lightbox.init(),this.lightbox.loadAndOpen(this.initialIndex)},immediate:!0},initialIndex(s){var t;(t=this.lightbox)==null||t.loadAndOpen(s)}}},g={};var N=_(R,M,F,!1,T,null,null,null);function T(s){for(let t in g)this[t]=g[t]}var $=function(){return N.exports}();export{$ as default};
