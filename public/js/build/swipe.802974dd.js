import{n as w,_ as v}from"./app.4c333b9d.js";/*!
  * PhotoSwipe Lightbox 5.3.4 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */function d(s,t,e){const i=document.createElement(t||"div");return s&&(i.className=s),e&&e.appendChild(i),i}function S(s,t,e){let i="translate3d("+s+"px,"+(t||0)+"px,0)";return e!==void 0&&(i+=" scale3d("+e+","+e+",1)"),i}function u(s,t,e){s.style.width=typeof t=="number"?t+"px":t,s.style.height=typeof e=="number"?e+"px":e}const l={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function E(s){if(s.which===2||s.ctrlKey||s.metaKey||s.altKey||s.shiftKey)return!0}function c(s,t,e=document){let i=[];if(s instanceof Element)i=[s];else if(s instanceof NodeList||Array.isArray(s))i=Array.from(s);else{const n=typeof s=="string"?s:t;n&&(i=Array.from(e.querySelectorAll(n)))}return i}function I(s){return typeof s=="function"&&s.prototype&&s.prototype.goTo}function f(){return!!(navigator.vendor&&navigator.vendor.match(/apple/i))}class A{constructor(t,e){this.type=t,e&&Object.assign(this,e)}preventDefault(){this.defaultPrevented=!0}}class D{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,e,i=100){this._filters[t]||(this._filters[t]=[]),this._filters[t].push({fn:e,priority:i}),this._filters[t].sort((n,r)=>n.priority-r.priority),this.pswp&&this.pswp.addFilter(t,e,i)}removeFilter(t,e){this._filters[t]&&(this._filters[t]=this._filters[t].filter(i=>i.fn!==e)),this.pswp&&this.pswp.removeFilter(t,e)}applyFilters(t,...e){return this._filters[t]&&this._filters[t].forEach(i=>{e[0]=i.fn.apply(this,e)}),e[0]}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this.pswp&&this.pswp.on(t,e)}off(t,e){this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter(i=>e!==i)),this.pswp&&this.pswp.off(t,e)}dispatch(t,e){if(this.pswp)return this.pswp.dispatch(t,e);const i=new A(t,e);return this._listeners&&this._listeners[t]&&this._listeners[t].forEach(n=>{n.call(this,i)}),i}}class L{constructor(t,e){this.element=d("pswp__img pswp__img--placeholder",t?"img":"",e),t&&(this.element.decoding="async",this.element.alt="",this.element.src=t,this.element.setAttribute("role","presentation")),this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,e){!this.element||(this.element.tagName==="IMG"?(u(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=S(0,0,t/250)):u(this.element,t,e))}destroy(){this.element.parentNode&&this.element.remove(),this.element=null}}class b{constructor(t,e,i){this.instance=e,this.data=t,this.index=i,this.element=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.state=l.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout(()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=null)},1e3)}load(t,e){if(this.slide&&this.usePlaceholder())if(this.placeholder){const i=this.placeholder.element;i&&!i.parentElement&&this.slide.container.prepend(i)}else{const i=this.instance.applyFilters("placeholderSrc",this.data.msrc&&this.slide.isFirstSlide?this.data.msrc:!1,this);this.placeholder=new L(i,this.slide.container)}this.element&&!e||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=d("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=d("pswp__content"),this.element.innerHTML=this.data.html||""),e&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){const e=this.element;this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented||(this.updateSrcsetSizes(),this.data.srcset&&(e.srcset=this.data.srcset),e.src=this.data.src,e.alt=this.data.alt||"",this.state=l.LOADING,e.complete?this.onLoaded():(e.onload=()=>{this.onLoaded()},e.onerror=()=>{this.onError()}))}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=l.LOADED,this.slide&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===l.LOADED||this.state===l.ERROR)&&this.removePlaceholder())}onError(){this.state=l.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===l.LOADING,this)}isError(){return this.state===l.ERROR}isImageContent(){return this.type==="image"}setDisplayedSize(t,e){if(!!this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,e),!this.instance.dispatch("contentResize",{content:this,width:t,height:e}).defaultPrevented&&(u(this.element,t,e),this.isImageContent()&&!this.isError()))){const i=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=e,i?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:e,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==l.ERROR,this)}updateSrcsetSizes(){if(this.data.srcset){const t=this.element,e=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||e>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=e+"px",t.dataset.largestUsedSize=String(e))}}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=null,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=null),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=null))}displayError(){if(this.slide){let t=d("pswp__error-msg");t.innerText=this.instance.options.errorMsg,t=this.instance.applyFilters("contentErrorElement",t,this),this.element=d("pswp__content pswp__error-msg-container"),this.element.appendChild(t),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached)return;if(this.isAttached=!0,this.state===l.ERROR){this.displayError();return}if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||f())?(this.isDecoding=!0,this.element.decode().catch(()=>{}).finally(()=>{this.isDecoding=!1,this.appendImage()})):this.appendImage():this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||this.slide&&(this.isImageContent()&&this.isDecoding&&!f()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){!this.isAttached||this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===l.LOADED||this.state===l.ERROR)&&this.removePlaceholder())}}function C(s,t){if(s.getViewportSizeFn){const e=s.getViewportSizeFn(s,t);if(e)return e}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function p(s,t,e,i,n){let r;if(t.paddingFn)r=t.paddingFn(e,i,n)[s];else if(t.padding)r=t.padding[s];else{const a="padding"+s[0].toUpperCase()+s.slice(1);t[a]&&(r=t[a])}return r||0}function z(s,t,e,i){return{x:t.x-p("left",s,t,e,i)-p("right",s,t,e,i),y:t.y-p("top",s,t,e,i)-p("bottom",s,t,e,i)}}const m=4e3;class x{constructor(t,e,i,n){this.pswp=n,this.options=t,this.itemData=e,this.index=i}update(t,e,i){this.elementSize={x:t,y:e},this.panAreaSize=i;const n=this.panAreaSize.x/this.elementSize.x,r=this.panAreaSize.y/this.elementSize.y;this.fit=Math.min(1,n<r?n:r),this.fill=Math.min(1,n>r?n:r),this.vFill=Math.min(1,r),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const e=t+"ZoomLevel",i=this.options[e];if(!!i)return typeof i=="function"?i(this):i==="fill"?this.fill:i==="fit"?this.fit:Number(i)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,this.fit*3),t*this.elementSize.x>m&&(t=m/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){const t=this._parseZoomLevelOption("max");return t||Math.max(1,this.fit*4)}}function y(s,t,e){const i=t.createContentFromData(s,e);if(!i||!i.lazyLoad)return;const{options:n}=t,r=t.viewportSize||C(n,t),a=z(n,r,s,e),h=new x(n,s,-1);return h.update(i.width,i.height,a),i.lazyLoad(),i.setDisplayedSize(Math.ceil(i.width*h.initial),Math.ceil(i.height*h.initial)),i}function P(s,t){const e=t.getItemData(s);if(!t.dispatch("lazyLoadSlide",{index:s,itemData:e}).defaultPrevented)return y(e,t,s)}class O extends D{getNumItems(){let t;const{dataSource:e}=this.options;e?"length"in e?t=e.length:"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),e.items&&(t=e.items.length)):t=0;const i=this.dispatch("numItems",{dataSource:e,numItems:t});return this.applyFilters("numItems",i.numItems,e)}createContentFromData(t,e){return new b(t,this,e)}getItemData(t){const{dataSource:e}=this.options;let i;Array.isArray(e)?i=e[t]:e&&e.gallery&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),i=e.items[t]);let n=i;n instanceof Element&&(n=this._domElementToItemData(n));const r=this.dispatch("itemData",{itemData:n||{},index:t});return this.applyFilters("itemData",r.itemData,t)}_getGalleryDOMElements(t){return this.options.children||this.options.childSelector?c(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const e={element:t},i=t.tagName==="A"?t:t.querySelector("a");if(i){e.src=i.dataset.pswpSrc||i.href,i.dataset.pswpSrcset&&(e.srcset=i.dataset.pswpSrcset),e.width=parseInt(i.dataset.pswpWidth,10),e.height=parseInt(i.dataset.pswpHeight,10),e.w=e.width,e.h=e.height,i.dataset.pswpType&&(e.type=i.dataset.pswpType);const n=t.querySelector("img");n&&(e.msrc=n.currentSrc||n.src,e.alt=n.getAttribute("alt")),(i.dataset.pswpCropped||i.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,i)}lazyLoadData(t,e){return y(t,this,e)}}class M extends O{constructor(t){super(),this.options=t||{},this._uid=0}init(){this.onThumbnailsClick=this.onThumbnailsClick.bind(this),c(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(t){if(E(t)||window.pswp||window.navigator.onLine===!1)return;let e={x:t.clientX,y:t.clientY};!e.x&&!e.y&&(e=null);let i=this.getClickedIndex(t);i=this.applyFilters("clickedIndex",i,t,this);const n={gallery:t.currentTarget};i>=0&&(t.preventDefault(),this.loadAndOpen(i,n,e))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const e=t.target,n=c(this.options.children,this.options.childSelector,t.currentTarget).findIndex(r=>r===e||r.contains(e));return n!==-1?n:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,e,i){return window.pswp?!1:(this.options.index=t,this.options.initialPointerPos=i,this.shouldOpen=!0,this.preload(t,e),!0)}preload(t,e){const{options:i}=this;e&&(i.dataSource=e);const n=[],r=typeof i.pswpModule;if(I(i.pswpModule))n.push(Promise.resolve(i.pswpModule));else{if(r==="string")throw new Error("pswpModule as string is no longer supported");if(r==="function")n.push(i.pswpModule());else throw new Error("pswpModule is not valid")}typeof i.openPromise=="function"&&n.push(i.openPromise()),i.preloadFirstSlide!==!1&&t>=0&&(this._preloadedContent=P(t,this));const a=++this._uid;Promise.all(n).then(h=>{if(this.shouldOpen){const o=h[0];this._openPhotoswipe(o,a)}})}_openPhotoswipe(t,e){if(e!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const i=typeof t=="object"?new t.default(this.options):new t(this.options);this.pswp=i,window.pswp=i,Object.keys(this._listeners).forEach(n=>{this._listeners[n].forEach(r=>{i.on(n,r)})}),Object.keys(this._filters).forEach(n=>{this._filters[n].forEach(r=>{i.addFilter(n,r.fn,r.priority)})}),this._preloadedContent&&(i.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=null),i.on("destroy",()=>{this.pswp=null,window.pswp=null}),i.init()}destroy(){this.pswp&&this.pswp.destroy(),this.shouldOpen=!1,this._listeners=null,c(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.removeEventListener("click",this.onThumbnailsClick,!1)})}}var F=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div")},R=[];const T={props:{className:{type:String,default:()=>"preview-image-swipe-"+Math.round(Math.random()*1e4)},urlList:{type:Array,default:()=>[]},initialIndex:{type:Number,default:0}},data(){return{lightbox:null}},beforeDestroy(){var s;(s=this.lightbox)==null||s.destroy()},watch:{urlList:{handler(s){var n;let t=!1,e=!1;(n=this.lightbox)==null||n.destroy();const i=s.map(r=>{if($A.isJson(r)){if(r.src&&(r.src=$A.rightDelete(r.src,"_thumb.jpg")),parseInt(r.width)>0&&parseInt(r.height)>0)return r;r=r.src}return e=!0,{html:`<div class="preview-image-swipe"><img src="${$A.rightDelete(r,"_thumb.jpg")}"/></div>`}});this.lightbox=new M({dataSource:i,escKey:!1,mainClass:this.className,showHideAnimationType:"none",pswpModule:()=>v(()=>import("./photoswipe.esm.7de5f3f7.js"),[])}),this.lightbox.on("change",r=>{!e||$A.loadScript("js/pinch-zoom.umd.min.js").then(a=>{document.querySelector(`.${this.className}`).querySelectorAll(".preview-image-swipe").forEach(o=>{o.getAttribute("data-init-pinch-zoom")!=="init"&&(o.setAttribute("data-init-pinch-zoom","init"),o.querySelector("img").addEventListener("pointermove",_=>{t&&_.stopPropagation()}),new PinchZoom.default(o,{draggableUnzoomed:!1,onDragStart:()=>{t=!0},onDragEnd:()=>{t=!1}}))})})}),this.lightbox.on("close",()=>{this.$emit("on-close")}),this.lightbox.on("destroy",()=>{this.$emit("on-destroy")}),this.lightbox.init(),this.lightbox.loadAndOpen(this.initialIndex)},immediate:!0},initialIndex(s){var t;(t=this.lightbox)==null||t.loadAndOpen(s)}}},g={};var N=w(T,F,R,!1,k,null,null,null);function k(s){for(let t in g)this[t]=g[t]}var W=function(){return N.exports}();export{W as default};
