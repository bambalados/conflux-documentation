"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5600],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||s;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var i=2;i<s;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},748:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=a(7462),n=(a(7294),a(4137));const s={sidebar_position:1,title:"Across Spaces"},o="Transferring Funds Across Spaces",c={unversionedId:"general/tutorials/transferring-funds/transfer-funds-across-spaces",id:"general/tutorials/transferring-funds/transfer-funds-across-spaces",title:"Across Spaces",description:"ConfluxHub",source:"@site/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces.md",sourceDirName:"general/tutorials/transferring-funds",slug:"/general/tutorials/transferring-funds/transfer-funds-across-spaces",permalink:"/zh-CN/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Across Spaces"},sidebar:"tutorialSidebar",previous:{title:"Transferring Funds",permalink:"/zh-CN/docs/category/transferring-funds"},next:{title:"Across Chains",permalink:"/zh-CN/docs/category/across-chains"}},l={},i=[{value:"ConfluxHub",id:"confluxhub",level:2},{value:"Cross-Space Transfers for Developers",id:"cross-space-transfers-for-developers",level:2},{value:"Internal Contract",id:"internal-contract",level:3}],p={toc:i},u="wrapper";function f(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transferring-funds-across-spaces"},"Transferring Funds Across Spaces"),(0,n.kt)("h2",{id:"confluxhub"},"ConfluxHub"),(0,n.kt)("p",null,"The easiest way to transfer assets between Core Space and eSpace is to use ",(0,n.kt)("a",{parentName:"p",href:"https://confluxhub.io/espace-bridge/cross-space"},"ConfluxHub"),". We recommend that you set up two wallets: ",(0,n.kt)("a",{parentName:"p",href:"https://fluentwallet.com/"},"Fluent")," for Core Space and ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," for eSpace."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(7137).Z,width:"1766",height:"1422"})),(0,n.kt)("p",null,"Follow these steps to make a cross-space transfer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start by clicking on ",(0,n.kt)("inlineCode",{parentName:"li"},"Connect Wallet")," to connect your Fluent and MetaMask wallets to ConfluxHub."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"To: Conflux eSpace")," at the top shows that you are making a transfer from Core Space to eSpace. If you would like to make a transfer in the other direction, click on the arrow next to this text."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("inlineCode",{parentName:"li"},"Conflux eSpace Destination Address")," field, type in your eSpace address or click the MetaMask icon on the right to fill this field automatically."),(0,n.kt)("li",{parentName:"ul"},"Next, select the token that you want to transfer and enter the transfer amount."),(0,n.kt)("li",{parentName:"ul"},"If the button on the bottom says ",(0,n.kt)("inlineCode",{parentName:"li"},"Approve"),", click on it to submit an ERC20 token approval first."),(0,n.kt)("li",{parentName:"ul"},"Once the button on the bottom says ",(0,n.kt)("inlineCode",{parentName:"li"},"Transfer"),", click on it to make the transfer.")),(0,n.kt)("p",null,"Making a cross-space transfer from eSpace to Core Space follows a similar process but it has two main steps: First, transfer the token to the bridge on eSpace. Second, withdraw the token from the bridge on Core Space. Please follow the site\u2019s instructions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u26a0\ufe0f When making a cross-space transfer, always double check your addresses to avoid accidental asset loss.")),(0,n.kt)("h2",{id:"cross-space-transfers-for-developers"},"Cross-Space Transfers for Developers"),(0,n.kt)("p",null,"Below we will discuss how to make cross-space transfers programmatically."),(0,n.kt)("h3",{id:"internal-contract"},"Internal Contract"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")," introduced the concept of two spaces running on one blockchain, and defined a new ",(0,n.kt)("a",{parentName:"p",href:"https://hackmd.io/@thegaram/S15_VAwh5"},"internal contract")," to connect the two. This contract is available under the address ",(0,n.kt)("a",{parentName:"p",href:"https://confluxscan.io/address/cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv"},(0,n.kt)("inlineCode",{parentName:"a"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv"))," (hex: ",(0,n.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000006"),") on Core Space."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"interface CrossSpace {\n    /* methods for cross-space CFX transfers */\n\n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n    \n    function withdrawFromMapped(uint256 value) external;\n\n    function mappedBalance(address addr) external view returns (uint256);\n    \n    /* methods for other cross-space operations */\n\n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n    \n    // ...\n}\n\n")))}f.isMDXComponent=!0},7137:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/transferAssets-0c1a3f76a3a0ea978d3697997283f63a-0c1a3f76a3a0ea978d3697997283f63a.png"}}]);