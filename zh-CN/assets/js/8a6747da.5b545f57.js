"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3,title:"\u8d28\u62bc\u6ce8\u610f\u4e8b\u9879",displayed_sidebar:"generalSidebar"},i=void 0,s={unversionedId:"general/mine-stake/stake/staking-considerations",id:"general/mine-stake/stake/staking-considerations",title:"\u8d28\u62bc\u6ce8\u610f\u4e8b\u9879",description:"Before participating in staking activities, it's important to be aware of potential risks and take appropriate measures to mitigate them.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/mine-stake/stake/staking-considerations.md",sourceDirName:"general/mine-stake/stake",slug:"/general/mine-stake/stake/staking-considerations",permalink:"/zh-CN/docs/general/mine-stake/stake/staking-considerations",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u8d28\u62bc\u6ce8\u610f\u4e8b\u9879",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Conflux PoS \u9a8c\u8bc1\u8005\u6c60\u5217\u8868",permalink:"/zh-CN/docs/general/mine-stake/stake/stake-pos-pools/pos-pools-list"},next:{title:"\u8fd0\u884c PoS \u8d28\u62bc\u6c60",permalink:"/zh-CN/docs/general/mine-stake/stake/running-staking-pool"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before participating in staking activities, it's important to be aware of potential risks and take appropriate measures to mitigate them."),(0,o.kt)("p",null,"The following operations may cause your staked tokens to be permanently locked, and the user is responsible for losses caused by these risks."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pool running multiple nodes with the same private key"),(0,o.kt)("li",{parentName:"ol"},"Theft or loss of the Pool\u2019s PoS private key")),(0,o.kt)("p",null,"The following circumstances may prevent you from receiving a reward or reduce your reward during normal pool O&M and network upgrades, including but not limited to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fail to run the PoS node or connect to the PoS network during O&M or network upgrades"),(0,o.kt)("li",{parentName:"ol"},"Run the PoS node successfully, but the token is forceRetired due to various reasons such as network conditions, and there is no reward for the unlock period.")))}d.isMDXComponent=!0}}]);