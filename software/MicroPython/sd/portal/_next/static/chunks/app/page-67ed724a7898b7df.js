(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(9944);n(2564);let r=l._(n(1539));function u(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let n=r.default,l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e),Object.assign(l,t);let o=l.loader;return n({...l,loader:()=>null!=o?o().then(u):Promise.resolve(u(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7406:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return r},NoSSR:function(){return u}}),n(9944),n(2564);let l=n(3765);function r(){let e=Error(l.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=l.NEXT_DYNAMIC_NO_SSR_CODE,e}function u(e){let{children:t}=e;return t}},1539:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(9944),r=l._(n(2564)),u=n(7406),o=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,l=r.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?r.default.Fragment:u.NoSSR,a=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:l},r.default.createElement(o,null,r.default.createElement(a,e)))}return t.lazy=r.default.lazy(t.loader),n.displayName="LoadableComponent",n}},6413:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2564),r=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var l,f={},i=null,s=null;for(l in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,l)&&!a.hasOwnProperty(l)&&(f[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===f[l]&&(f[l]=t[l]);return{$$typeof:r,type:e,key:i,ref:s,props:f,_owner:o.current}}t.jsx=f,t.jsxs=f},9219:function(e,t,n){"use strict";e.exports=n(6413)},751:function(e,t,n){Promise.resolve().then(n.bind(n,2362))},2362:function(e,t,n){"use strict";n.r(t);var l=n(9219),r=n(9971),u=n.n(r);let o=u()(()=>Promise.all([n.e(767),n.e(181),n.e(257)]).then(n.bind(n,9257)).then(e=>e.CodeEditor),{loadableGenerated:{webpack:()=>[9257]},loading:()=>(0,l.jsx)("div",{className:"h-full flex flex-col space-y-8 justify-center items-center",children:"loading..."}),ssr:!1});t.default=()=>(0,l.jsx)("main",{className:"mt-20 ml-80 fixed w-[calc(100%-320px)] h-[calc(100%-80px)]",children:(0,l.jsx)(o,{})})}},function(e){e.O(0,[253,151,744],function(){return e(e.s=751)}),_N_E=e.O()}]);