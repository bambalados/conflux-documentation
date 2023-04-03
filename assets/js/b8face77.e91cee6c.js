"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"Overview"},s=void 0,i={unversionedId:"espace/learn/overview",id:"espace/learn/overview",title:"Overview",description:"Conflux has a virtual machine that is similar to the EVM. However, there are still some considerable differences between Conflux and Ethereum. Conflux uses a different transaction format and a different rule for generating addresses from public keys. These differences often make it hard to port EVM compatible dApps to Conflux. Replacing CIP-72 and CIP-80, CIP-90 introduces a transaction execution environment called the Conflux eSpace. eSpace achieves full EVM compatibility without changing the existing accounts and transactions.",source:"@site/docs/espace/learn/overview.md",sourceDirName:"espace/learn",slug:"/espace/learn/overview",permalink:"/docs/espace/learn/overview",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/espace/learn/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Learn",permalink:"/docs/category/learn"},next:{title:"Accounts and Addresses",permalink:"/docs/espace/learn/accounts"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Conflux has a virtual machine that is similar to the EVM. However, there are still some considerable differences between Conflux and Ethereum. Conflux uses a different transaction format and a different rule for generating addresses from public keys. These differences often make it hard to port EVM compatible dApps to Conflux. Replacing CIP-72 and CIP-80, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")," introduces a transaction execution environment called the ",(0,a.kt)("strong",{parentName:"p"},"Conflux eSpace"),". eSpace achieves full EVM compatibility without changing the existing accounts and transactions."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")," introduces a new fully EVM-compatible space. The new space is called ",(0,a.kt)("strong",{parentName:"p"},"Conflux eSpace"),", while the current space is called ",(0,a.kt)("strong",{parentName:"p"},"Conflux Core")," space. Conflux eSpace follows the same rule as Ethereum's EVM and supports RPCs like ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_getBalance"),". As a result, existing tooling from the Ethereum ecosystem (MetaMask, Truffle, Remix, Hardhat, web3.js, ethers.js) can be used on Conflux eSpace directly."),(0,a.kt)("p",null,"Accounts in Conflux Core and Conflux eSpace are ",(0,a.kt)("strong",{parentName:"p"},"separated"),". This means that Conflux transactions can only be sent between core space accounts (using their ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"CIP-37")," base32 addresses), while Ethereum-compatible EIP-155 transactions can only be sent between eSpace accounts (using their ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-55"},"EIP-55")," hex addresses). Assets and data can be transferred across the two spaces using the new ",(0,a.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract. Unlike cross-chain operations, ",(0,a.kt)("strong",{parentName:"p"},"cross-space")," operations are ",(0,a.kt)("strong",{parentName:"p"},"atomic")," and they have ",(0,a.kt)("strong",{parentName:"p"},"layer-1 security"),"."),(0,a.kt)("admonition",{title:"s",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/tutorials"},"tutorials")," for cross chian and wallet usage tutorials.")))}f.isMDXComponent=!0}}]);