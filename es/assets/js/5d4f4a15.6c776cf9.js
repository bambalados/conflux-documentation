"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1,title:"Installing a Wallet",description:"Install and setup Fluent wallet",keywords:["wallet"],displayed_sidebar:"coreSidebar"},o=void 0,i={unversionedId:"core/getting-started/installing-a-wallet",id:"core/getting-started/installing-a-wallet",title:"Installing a Wallet",description:"Install and setup Fluent wallet",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/getting-started/installing-a-wallet.md",sourceDirName:"core/getting-started",slug:"/core/getting-started/installing-a-wallet",permalink:"/es/docs/core/getting-started/installing-a-wallet",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installing a Wallet",description:"Install and setup Fluent wallet",keywords:["wallet"],displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Getting Started",permalink:"/es/docs/core/getting-started/"},next:{title:"Funding Your Account on Testnet",permalink:"/es/docs/core/getting-started/funding-your-account"}},s={},c=[{value:"Installing Fluent Wallet",id:"installing-fluent-wallet",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To interact with Conflux Core Space, you'll first need to create an account. Usually accounts in Conflux Core Space are created and managed through the Fluent wallet."),(0,a.kt)("h3",{id:"installing-fluent-wallet"},"Installing ",(0,a.kt)("a",{parentName:"h3",href:"https://fluentwallet.com/"},"Fluent Wallet")),(0,a.kt)("p",null,"Fluent is a browser plug-in wallet, similar to Ethereum's MetaMask wallet. It currently supports by Chrome, Firefox and Edge. Users can directly search for ",(0,a.kt)("inlineCode",{parentName:"p"},"Fluent Wallet")," in the browser plug-in market, select and install it. Or find it in ",(0,a.kt)("a",{parentName:"p",href:"https://fluentwallet.com/"},"Fluent official website")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fluent",src:n(94214).Z,width:"373",height:"605"})),(0,a.kt)("p",null,"After the Fluent wallet is installed, the first step is to set the password:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fluent",src:n(53344).Z,width:"373",height:"601"})),(0,a.kt)("p",null,"The next step is to create or import an account seed phrase. The account seed phrase can be used to generate or restore an account, so it is very important and needs to be kept properly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CreateImportAccount.png",src:n(56895).Z,width:"374",height:"601"})),(0,a.kt)("p",null,"After the seed phrase is created, Fluent will automatically create an account through it and you can see the name, address, balance and other information of the account. You can also see the CFX ",(0,a.kt)("inlineCode",{parentName:"p"},"Send")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Deposit")," buttons, click to send or receive CFX."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NewAccount.png",src:n(21295).Z,width:"373",height:"604"})))}d.isMDXComponent=!0},56895:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CreateImportAccount-1-f1c98463ba777c1228e9525a141a79a4.bin"},94214:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Fluent-Create-1-344aa1a56a898bb4938aaab1da9df14c.bin"},21295:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/NewAccount-28623549ea9b7c107b2c7c6738a16607.bin"},53344:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SetPassword-2-45a39361ddc090bcae3cdb50ea992716.bin"}}]);