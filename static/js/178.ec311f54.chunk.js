(self.webpackChunkreact_tailwindcss_portfolio=self.webpackChunkreact_tailwindcss_portfolio||[]).push([[178],{9178:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=n(1605),o=n(5043),a=n(4458),i=(n(6341),n(7950));Object.create;function l(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=function(e){return"".concat(e,"ms")},c=function(e){var t=e.height,n=e.innerHeight,r=e.innerWidth,o=e.isLoaded,a=e.isUnloading,i=e.left,c=e.originalTransform,d=e.top,u=e.transitionDuration,m=e.width,f=e.zoomMargin,g=s(u);if(!o||a){var v=l(["scale(1)","translate(0, 0)"],c?[c]:[],!0).join(" ");return{height:t,left:i,top:d,transform:v,WebkitTransform:v,transitionDuration:g,width:m}}var h=function(e){var t=e.height,n=e.innerHeight,r=e.innerWidth,o=e.width,a=e.zoomMargin,i=r/(o+a),l=n/(t+a);return Math.min(i,l)}({height:t,innerWidth:r,innerHeight:n,width:m,zoomMargin:f}),p=(r/2-(i+m/2))/h,x=(n/2-(d+t/2))/h,y=l(["scale(".concat(h,")"),"translate(".concat(p,"px, ").concat(x,"px)")],c?[c]:[],!0).join(" ");return{height:t,left:i,top:d,transform:y,WebkitTransform:y,transitionDuration:g,width:m}},d=function(e){var t=e.isLoaded,n=e.isUnloading,r=e.overlayBgColorEnd,o=e.overlayBgColorStart,a=e.transitionDuration,i=e.zoomZindex,l={backgroundColor:o,transitionDuration:s(a),zIndex:i};return t&&!n&&(l.backgroundColor=r),l},u={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},m=function(e){var t,n=(0,o.useRef)(e);n.current=e,t=function(){return function(){return n.current()}},(0,o.useEffect)(t,[])},f=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n="undefined"!==typeof window,r=function(e){var t=(0,o.useRef)(0),n=(0,o.useState)(e),r=n[0],a=n[1],i=(0,o.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return m((function(){cancelAnimationFrame(t.current)})),[r,i]}({width:n?window.innerWidth:e,height:n?window.innerHeight:t}),a=r[0],i=r[1];return(0,o.useEffect)((function(){if(n){var e=function(){i({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[n,i]),a};function g(e){var t=(0,o.useRef)();return(0,o.useEffect)((function(){t.current=e})),t.current}var v=(0,o.memo)((function(e){var t=e.children,n=e.closeText,r=void 0===n?"Unzoom Image":n,a=e.isActive,l=e.onLoad,s=e.onUnload,m=e.onZoomChange,v=e.overlayBgColorEnd,h=void 0===v?"rgba(255, 255, 255, 0.95)":v,p=e.overlayBgColorStart,x=void 0===p?"rgba(255, 255, 255, 0)":p,y=e.parentRef,b=e.portalEl,E=void 0===b?document.body:b,k=e.scrollableEl,j=void 0===k?window:k,w=e.transitionDuration,C=void 0===w?300:w,S=e.zoomMargin,z=void 0===S?0:S,N=e.zoomZindex,L=void 0===N?2147483647:N,T=(0,o.useRef)(null),D=(0,o.useState)(0)[1],P=(0,o.useState)(a),B=P[0],H=P[1],M=(0,o.useState)(!1),Z=M[0],I=M[1],R=(0,o.useState)(!1),U=R[0],A=R[1],W=g(B),F=g(a),O=g(Z),_=f(),q=_.width,X=_.height,G=(0,o.useCallback)((function(e){e.preventDefault(),m&&m(!1)}),[m]),J=(0,o.useCallback)((function(e){!B||"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),m&&m(!1))}),[B,m]),K=(0,o.useCallback)((function(){D((function(e){return e+1})),!U&&m&&m(!1)}),[U,m]);(0,o.useEffect)((function(){return document.addEventListener("keydown",J),function(){document.removeEventListener("keydown",J)}}),[J]),(0,o.useEffect)((function(){var e;return null===(e=null===j||void 0===j?void 0:j.addEventListener)||void 0===e||e.call(j,"scroll",K),function(){var e;null===(e=null===j||void 0===j?void 0:j.removeEventListener)||void 0===e||e.call(j,"scroll",K)}}),[K,j]),(0,o.useEffect)((function(){!W&&B&&(I(!0),T.current&&T.current.focus({preventScroll:!0}))}),[B,W]),(0,o.useEffect)((function(){F&&!a&&A(!0),!F&&a&&H(!0)}),[a,F]),(0,o.useEffect)((function(){var e;return U&&(e=setTimeout((function(){I(!1),H(!1),A(!1)}),C)),function(){clearTimeout(e)}}),[U,C]),(0,o.useEffect)((function(){!O&&Z&&l(),O&&!Z&&s()}),[Z,l,s,O]);var Q=y.current||u,V=Q.getBoundingClientRect(),Y=V.height,$=V.left,ee=V.top,te=V.width,ne=d({isLoaded:Z,isUnloading:U,overlayBgColorEnd:h,overlayBgColorStart:x,transitionDuration:C,zoomZindex:L}),re=c({height:Y,isLoaded:Z,innerHeight:X,innerWidth:q,isUnloading:U,left:$,originalTransform:Q.style.transform,top:ee,transitionDuration:C,width:te,zoomMargin:z});return B?(0,i.createPortal)(o.createElement("div",{"aria-label":"Zoomed image","aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:ne},o.createElement("div",{"data-rmiz-modal-content":!0,style:re},t),o.createElement("button",{"aria-label":r,"data-rmiz-btn-close":!0,onClick:G,ref:T,type:"button"})),E):null})),h=((0,o.memo)((function(e){var t=e.children,n=e.closeText,r=void 0===n?"Unzoom image":n,a=e.isZoomed,i=e.overlayBgColorEnd,l=void 0===i?"rgba(255, 255, 255, 0.95)":i,s=e.overlayBgColorStart,c=void 0===s?"rgba(255, 255, 255, 0)":s,d=e.portalEl,u=e.onZoomChange,m=e.openText,f=void 0===m?"Zoom image":m,g=e.scrollableEl,h=e.transitionDuration,p=void 0===h?300:h,x=e.wrapElement,y=void 0===x?"div":x,b=e.wrapStyle,E=e.zoomMargin,k=void 0===E?0:E,j=e.zoomZindex,w=void 0===j?2147483647:j,C=(0,o.useState)(!1),S=C[0],z=C[1],N=(0,o.useRef)(null),L=(0,o.useRef)(null),T=(0,o.useCallback)((function(e){!a&&u&&(e.preventDefault(),u(!0))}),[a,u]),D=(0,o.useCallback)((function(){z(!0)}),[]),P=(0,o.useCallback)((function(){z(!1),L.current&&L.current.focus({preventScroll:!0})}),[]),B=S?"hidden":"visible";return o.createElement(o.StrictMode,null,o.createElement(y,{"data-rmiz-wrap":B,ref:N,style:b},t,o.createElement("button",{"aria-label":f,"data-rmiz-btn-open":!0,onClick:T,ref:L,type:"button"}),"undefined"!==typeof window&&o.createElement(v,{closeText:r,isActive:a,onLoad:D,onUnload:P,onZoomChange:u,overlayBgColorEnd:l,overlayBgColorStart:c,parentRef:N,portalEl:d,scrollableEl:g,transitionDuration:p,zoomMargin:k,zoomZindex:w},t)))})),(0,o.memo)((function(e){var t=e.children,n=e.closeText,r=void 0===n?"Unzoom Image":n,a=e.onUnload,l=e.onLoad,s=e.overlayBgColorEnd,m=void 0===s?"rgba(255, 255, 255, 0.95)":s,g=e.overlayBgColorStart,v=void 0===g?"rgba(255, 255, 255, 0)":g,h=e.parentRef,p=e.portalEl,x=void 0===p?document.body:p,y=e.scrollableEl,b=void 0===y?window:y,E=e.transitionDuration,k=void 0===E?300:E,j=e.zoomMargin,w=void 0===j?0:j,C=e.zoomZindex,S=void 0===C?2147483647:C,z=(0,o.useRef)(null),N=(0,o.useState)(0)[1],L=(0,o.useState)(!1),T=L[0],D=L[1],P=(0,o.useState)(!1),B=P[0],H=P[1],M=f(),Z=M.width,I=M.height,R=(0,o.useCallback)((function(e){e.preventDefault(),H(!0)}),[]),U=(0,o.useCallback)((function(e){"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),H(!0))}),[]),A=(0,o.useCallback)((function(){N((function(e){return e+1})),B||H(!0)}),[B]);(0,o.useEffect)((function(){return document.addEventListener("keydown",U),function(){document.removeEventListener("keydown",U)}}),[U]),(0,o.useEffect)((function(){var e;return null===(e=null===b||void 0===b?void 0:b.addEventListener)||void 0===e||e.call(b,"scroll",A),function(){var e;null===(e=null===b||void 0===b?void 0:b.removeEventListener)||void 0===e||e.call(b,"scroll",A)}}),[A,b]),(0,o.useEffect)((function(){D(!0),l(),z.current&&z.current.focus({preventScroll:!0})}),[l]),(0,o.useEffect)((function(){var e=B?setTimeout(a,k):null;return function(){e&&clearTimeout(e)}}),[B,a,k]);var W=h.current||u,F=W.getBoundingClientRect(),O=F.height,_=F.left,q=F.top,X=F.width,G=d({isLoaded:T,isUnloading:B,overlayBgColorEnd:m,overlayBgColorStart:v,transitionDuration:k,zoomZindex:S}),J=c({height:O,isLoaded:T,innerHeight:I,innerWidth:Z,isUnloading:B,left:_,originalTransform:W.style.transform,top:q,transitionDuration:k,width:X,zoomMargin:w});return(0,i.createPortal)(o.createElement("div",{"aria-label":"Zoomed image","aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:G},o.createElement("div",{"data-rmiz-modal-content":!0,style:J},t),o.createElement("button",{"aria-label":r,"data-rmiz-btn-close":!0,onClick:R,ref:z})),x)}))),p=(0,o.memo)((function(e){var t=e.children,n=e.closeText,r=void 0===n?"Unzoom image":n,a=e.overlayBgColorEnd,i=void 0===a?"rgba(255, 255, 255, 0.95)":a,l=e.overlayBgColorStart,s=void 0===l?"rgba(255, 255, 255, 0)":l,c=e.portalEl,d=e.openText,u=void 0===d?"Zoom image":d,m=e.scrollableEl,f=e.transitionDuration,g=void 0===f?300:f,v=e.wrapElement,p=void 0===v?"div":v,x=e.wrapStyle,y=e.zoomMargin,b=void 0===y?0:y,E=e.zoomZindex,k=void 0===E?2147483647:E,j=(0,o.useState)(!1),w=j[0],C=j[1],S=(0,o.useState)(!1),z=S[0],N=S[1],L=(0,o.useRef)(null),T=(0,o.useRef)(null),D=(0,o.useCallback)((function(e){w||(e.preventDefault(),C(!0))}),[w]),P=(0,o.useCallback)((function(){N(!0)}),[]),B=(0,o.useCallback)((function(){C(!1),N(!1),T.current&&T.current.focus({preventScroll:!0})}),[]),H=w&&z?"hidden":"visible";return o.createElement(o.StrictMode,null,o.createElement(p,{"data-rmiz-wrap":H,ref:L,style:x},t,o.createElement("button",{"aria-label":u,"data-rmiz-btn-open":!0,onClick:D,ref:T}),"undefined"!==typeof window&&w&&o.createElement(h,{closeText:r,onLoad:P,onUnload:B,overlayBgColorEnd:i,overlayBgColorStart:s,parentRef:L,portalEl:c,scrollableEl:m,transitionDuration:g,zoomMargin:b,zoomZindex:k},t)))})),x=n(579);const y=()=>{const{singleProjectData:e}=(0,o.useContext)(a.Ay);return(0,x.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12",children:e.ProjectImages.map((e=>(0,x.jsx)("div",{className:"mb-10 sm:mb-0",children:(0,x.jsx)(p,{overlayBgColorStart:"rgba(0,0,0,0.5)",overlayBgColorEnd:"rgba(0,0,0,0.5)",children:(0,x.jsx)("img",{src:e.img,className:"rounded-xl cursor-pointer shadow-lg sm:shadow-none bg-secondary-light dark:bg-ternary-dark",alt:e.title},e.id)})},e.id)))})};var b=n(8254);const E=()=>{const{singleProjectData:e}=(0,o.useContext)(a.Ay);return(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7",children:e.ProjectHeader.title}),(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsxs)("div",{className:"flex items-center mr-10",children:[(0,x.jsx)(b.Ohp,{className:"text-lg text-ternary-dark dark:text-ternary-light"}),(0,x.jsx)("span",{className:"font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",children:e.ProjectHeader.publishDate})]}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)(b.cnX,{className:"text-lg text-ternary-dark dark:text-ternary-light"}),(0,x.jsx)("span",{className:"font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",children:e.ProjectHeader.tags})]})]})]})},k=()=>{const{singleProjectData:e}=(0,o.useContext)(a.Ay);return(0,x.jsxs)("div",{className:"block sm:flex gap-0 sm:gap-10 mt-14",children:[(0,x.jsxs)("div",{className:"w-full sm:w-1/3 text-left",children:[(0,x.jsxs)("div",{className:"mb-7",children:[(0,x.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2",children:e.ProjectInfo.ClientHeading}),(0,x.jsx)("ul",{className:"leading-loose",children:e.ProjectInfo.CompanyInfo.map((e=>(0,x.jsxs)("li",{className:"font-general-regular text-ternary-dark dark:text-ternary-light",children:[(0,x.jsxs)("span",{children:[e.title,": "]}),e.details]},e.id)))})]}),(0,x.jsxs)("div",{className:"mb-7",children:[(0,x.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:e.ProjectInfo.ObjectivesHeading}),(0,x.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:e.ProjectInfo.ObjectivesDetails})]}),(0,x.jsxs)("div",{className:"mb-7",children:[(0,x.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:e.ProjectInfo.Technologies[0].title}),(0,x.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:e.ProjectInfo.Technologies[0].techs.join(", ")})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:e.ProjectInfo.SocialSharingHeading}),(0,x.jsx)("div",{className:"flex items-center gap-3 mt-5",children:e.ProjectInfo.SocialSharing.map((e=>(0,x.jsx)("a",{href:e.url,target:"__blank","aria-label":"Share Project",className:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500",children:(0,x.jsx)("span",{className:"text-lg lg:text-2xl",children:e.icon})},e.id)))})]})]}),(0,x.jsxs)("div",{className:"w-full sm:w-2/3 text-left mt-10 sm:mt-0",children:[(0,x.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7",children:e.ProjectInfo.ProjectDetailsHeading}),e.ProjectInfo.ProjectDetails.map((e=>(0,x.jsx)("p",{className:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light",children:e.details},e.id)))]})]})},j=()=>(0,x.jsxs)(r.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.6,delay:.15},className:"container mx-auto mt-5 sm:mt-10",children:[(0,x.jsx)(E,{}),(0,x.jsx)(y,{}),(0,x.jsx)(k,{})]})},6341:()=>{!function(){if("undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",(function(e){e.preventDefault(),e.stopPropagation()}),!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&"undefined"!==typeof navigator.userAgent&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return e=!1;e=!0}}))}catch(r){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var n=function(e){for(var t=0;t<e.length;t++)e[t][0].scrollTop=e[t][1],e[t][0].scrollLeft=e[t][2];e=[]};HTMLElement.prototype.focus=function(e){if(e&&e.preventScroll){var t=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push([t,t.scrollTop,t.scrollLeft]),t=t.parentNode;return t=r,n.push([t,t.scrollTop,t.scrollLeft]),n}(this);this.nativeFocus(),"function"===typeof setTimeout?setTimeout((function(){n(t)}),0):n(t)}else this.nativeFocus()}}}}()}}]);
//# sourceMappingURL=178.ec311f54.chunk.js.map