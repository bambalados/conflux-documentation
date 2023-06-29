"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8335],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(a),k=r,u=m["".concat(c,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8610:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_position:1,title:"Using MetaMask on Conflux eSpace",id:"user_metamask_interact_evmspace",keywords:["MetaMask","EVMSpace"]},i=void 0,s={unversionedId:"espace/learn/tutorials/user_metamask_interact_evmspace",id:"espace/learn/tutorials/user_metamask_interact_evmspace",title:"Using MetaMask on Conflux eSpace",description:"\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/learn/tutorials/using-metamask.md",sourceDirName:"espace/learn/tutorials",slug:"/espace/learn/tutorials/user_metamask_interact_evmspace",permalink:"/zh-CN/docs/espace/learn/tutorials/user_metamask_interact_evmspace",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Using MetaMask on Conflux eSpace",id:"user_metamask_interact_evmspace",keywords:["MetaMask","EVMSpace"]},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/zh-CN/docs/espace/learn/tutorials/"},next:{title:"Using Ledger on Conflux eSpace",permalink:"/zh-CN/docs/espace/learn/tutorials/using-ledger"}},c={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u8fde\u63a5 MetaMask \u5230 Conflux eSpace\u3002",id:"\u8fde\u63a5-metamask-\u5230-conflux-espace",level:2},{value:"\u4f7f\u7528 Remix \u90e8\u7f72 ERC-20 \u4ee3\u5e01",id:"\u4f7f\u7528-remix-\u90e8\u7f72-erc-20-\u4ee3\u5e01",level:2},{value:"\u6dfb\u52a0ERC-20\u4ee3\u5e01\u5230MetaMask",id:"\u6dfb\u52a0erc-20\u4ee3\u5e01\u5230metamask",level:2},{value:"\u4f7f\u7528 MetaMask \u8f6c\u79fb ERC-20 \u4ee3\u5e01",id:"\u4f7f\u7528-metamask-\u8f6c\u79fb-erc-20-\u4ee3\u5e01",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],p={toc:o},m="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," \u662f\u4e00\u4e2a\u5177\u6709\u7528\u6237\u754c\u9762\u7684\u6d4f\u89c8\u5668\u6269\u5c55\uff0c\u7528\u4e8e\u4e0e\u517c\u5bb9\u4ee5\u592a\u574a\u7684\u533a\u5757\u94fe(\u4f8b\u5982 Conflux eSpace)\u8fdb\u884c\u4ea4\u4e92\u3002 For the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed. \u5982\u679c\u60a8\u9700\u8981\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 MetaMask \u672c\u8eab\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/faqs.html"},"\u67e5\u770bMetamask\u7684\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u6f14\u793a\u5982\u4f55\u8fde\u63a5 MetaMask \u5230 Conflux eSpace Testnet\uff0c\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix")," \u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684 ERC-20 \u5408\u7ea6\uff0c\u5e76\u4f7f\u7528 MetaMask \u8f6c\u79fb\u65b0\u4ee3\u5e01\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u4e2d\u7684\u5c4f\u5e55\u622a\u56fe\u6765\u81eaMetaMask \u6d4f\u89c8\u5668\u6269\u5c55\u7248\u672c 10.8.1\u3002")),(0,r.kt)("h2",{id:"\u8fde\u63a5-metamask-\u5230-conflux-espace"},"\u8fde\u63a5 MetaMask \u5230 Conflux eSpace\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6dfb\u52a0 Conflux eSpace \u7f51\u7edc\u5230\u60a8\u7684 MetaMask \u94b1\u5305\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00\u60a8\u7684\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"li",href:"https://chainlist.org%E3%80%82"},"https://chainlist.org\u3002")),(0,r.kt)("li",{parentName:"ol"},"\u641c\u7d22\u201cConflux eSpace\u201d"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u201cConflux eSpace\u201d\u4e0b\u70b9\u51fb\u201c\u8fde\u63a5\u94b1\u5305\u201d\uff0c\u4ee5\u5141\u8bb8\u6b64\u7ad9\u70b9\u5411 MetaMask \u53d1\u9001\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u201cConflux eSpace\u201d\u4e0b\u70b9\u51fb\u201c\u6dfb\u52a0\u5230 MetaMask\u201d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53 MetaMask \u63d0\u793a\u201c\u5141\u8bb8\u6b64\u7ad9\u70b9\u6dfb\u52a0\u7f51\u7edc\uff1f\u201d\u65f6\uff0c\u70b9\u51fb\u201c\u6279\u51c6\u201d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53 MetaMask \u63d0\u793a\u201c\u5141\u8bb8\u6b64\u7ad9\u70b9\u5207\u6362\u7f51\u7edc\uff1f\u201d\u65f6\uff0c\u70b9\u51fb\u201c\u6279\u51c6\u201d\u3002")),(0,r.kt)("p",null,"\u60a8\u7684 MetaMask \u94b1\u5305\u73b0\u5728\u5df2\u8fde\u63a5\u5230 Conflux eSpace\u3002 \u60a8\u53ef\u4ee5\u968f\u65f6\u901a\u8fc7Metamask\u4e2d\u7684\u7f51\u7edc\u9009\u62e9\u83dc\u5355\u5207\u6362\u5230\u5176\u4ed6\u7f51\u7edc\u3002"),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u7f51\u7edc\u9009\u62e9\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u201c\u6dfb\u52a0\u7f51\u7edc\u201d(\u6216\u201c\u81ea\u5b9a\u4e49 RPC\u201d)\u624b\u52a8\u5c06 Conflux eSpace \u6dfb\u52a0\u5230 MetaMask\uff1a"),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"MetaMask-network-select",src:a(2353).Z,width:"1343",height:"589"})),(0,r.kt)("p",null,"\u5bf9\u4e8eeSpace ",(0,r.kt)("strong",{parentName:"p"},"mainnet"),", \u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New RPC URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain ID"),": 1030"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Explorer URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))),(0,r.kt)("p",null,"\u5bf9\u4e8e eSpace ",(0,r.kt)("strong",{parentName:"p"},"testnet"),"\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace (Testnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New RPC URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain ID"),": 71"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Explorer URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evmtestnet.confluxscan.net"},"https://evmtestnet.confluxscan.net"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-create-EVM-Space-rpc",src:a(6291).Z,width:"1934",height:"1294"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6240\u6709Conflux eSpace RPC \u7aef\u70b9URL \u548c chain ID\u90fd\u53ef\u4ee5\u5728\u6211\u4eec\u7684\u7f51\u7edc\u9875\u9762\u4e0a\u627e\u5230\u3002")),(0,r.kt)("p",null,"\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fdd\u5b58"),"\uff0c\u7136\u540e\u60a8\u5e94\u8be5\u5728 MetaMask \u4e2d\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Conflux eSpace")," \u662f\u5f53\u524d\u9009\u62e9\u7684\u7f51\u7edc\u3002 \u4e3a\u4e86\u8ba9\u60a8\u4f53\u9a8c MetaMask\u64cd\u4f5c\u60c5\u51b5\uff0c\u6211\u4eec\u5c06\u628a\u5b83\u8fde\u63a5\u5230 Remix \u5e76\u6267\u884c\u4e00\u4e9b\u4ea4\u6613\u3002 \u672c\u6307\u5357\u7684\u5176\u4f59\u90e8\u5206\u5c06\u5047\u8bbe\u60a8\u7684 MetaMask \u5df2\u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Conflux eSpace(Testnet)"),"\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-remix-\u90e8\u7f72-erc-20-\u4ee3\u5e01"},"\u4f7f\u7528 Remix \u90e8\u7f72 ERC-20 \u4ee3\u5e01"),(0,r.kt)("p",null,"\u5728\u4e00\u4e2a\u65b0\u6807\u7b7e\u9875\u4e2d\u6253\u5f00 Remix IDE\uff0c\u7f51\u5740\u662f",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"remix.ethereum.org"),"\u3002 \u5b83\u53ef\u80fd\u9700\u8981\u4e00\u5206\u949f\u624d\u80fd\u52a0\u8f7d\uff0c\u4f46\u4e00\u65e6\u52a0\u8f7d\u5b8c\u6210\uff0c\u8bf7\u5728\u5de6\u4fa7\u7684\u5de5\u4f5c\u533a\u9762\u677f\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ERC20Token.sol")," \u7684\u65b0\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix-new-file",src:a(6706).Z,width:"678",height:"364"})),(0,r.kt)("p",null,"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u5e76\u7c98\u8d34\u5230\u4e2d\u592e\u7684\u7f16\u8f91\u5668\u9762\u677f\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";\n\ncontract MyToken is ERC20 {\n    constructor (string memory name, string memory symbol) ERC20(name, symbol) {\n        // Mint 10000 tokens to msg.sender\n        // Similar to how 1 dollar = 100 cents\n        // 1 token = 1 * (10 ** decimals)\n        _mint(msg.sender, 10000 * 10 ** uint(decimals()));\n    }\n}\n')),(0,r.kt)("p",null,"\u70b9\u51fb\u5de6\u4fa7\u9762\u677f\u6700\u5de6\u4fa7\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Solidity Compile"),"\u6309\u94ae(\u7b2c\u4e8c\u4e2a\u5411\u4e0b\u7684\u56fe\u6807)\uff1b \u786e\u4fdd\u60a8\u9009\u62e9\u7684Solidity\u7f16\u8bd1\u5668\u7248\u672c\u4e3a0.8(0.8\u5185\u7684\u6b21\u8981\u7248\u672c\uff0c\u4f8b\u59820.8.4\u4e5f\u53ef\u4ee5)\uff0c\u7136\u540e\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"Compile ERC20Token.sol"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix-solidity-compile",src:a(7687).Z,width:"1228",height:"548"})),(0,r.kt)("p",null,"\u4e00\u65e6\u5408\u7ea6\u7f16\u8bd1\u5b8c\u6210\uff0c\u70b9\u51fb\u6700\u5de6\u4fa7\u9762\u677f\u4e0a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy & run transactions"),"\u6309\u94ae(Solidity\u7f16\u8bd1\u5668\u4e0b\u9762\u7684\u56fe\u6807)\u3002 \u5728\u5de6\u4fa7\u9762\u677f\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT"),"\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Injected Web3"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix-inject-web3",src:a(6510).Z,width:"367",height:"455"})),(0,r.kt)("p",null,"\u4f60\u5c06\u4f1a\u770b\u5230\u4e00\u4e2a MetaMask \u5f39\u7a97\uff0c\u8bf7\u6c42\u4f60\u5141\u8bb8 Remix IDE \u8bbf\u95ee\u5b83\u3002 \u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," \u7136\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," \u4ee5\u6388\u4e88\u8bbf\u95ee\u6743\u9650\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix-connect-metamask",src:a(5255).Z,width:"735",height:"574"})),(0,r.kt)("p",null,"\u5728Remix\u754c\u9762\u4e2d\uff0c\u70b9\u51fb\u5de6\u4fa7\u9762\u677f\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"DEPLOY"),"\u90e8\u5206\u65c1\u8fb9\u7684\u7bad\u5934\u3002 \u586b\u5199\u4ee3\u5e01\u8be6\u60c5\uff0c\u53ef\u6839\u636e\u81ea\u5df1\u7684\u559c\u597d\u586b\u5199(\u5728\u793a\u4f8b\u4e2d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"GoldenToken"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"GLD"),")\uff0c\u7136\u540e\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"transact"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix-deploy-contract",src:a(4117).Z,width:"360",height:"566"})),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a MetaMask \u5f39\u51fa\u7a97\u53e3\u5c06\u4f1a\u8981\u6c42\u60a8\u786e\u8ba4\u4ea4\u6613\u3002 \u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"\u786e\u8ba4"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix-deploy-contract-metamask-confirm",src:a(4940).Z,width:"340",height:"579"})),(0,r.kt)("p",null,"\u51e0\u5206\u949f\u540e\uff0c\u4ea4\u6613\u5c06\u7531\u7f51\u7edc\u786e\u8ba4\u3002 \u4f60\u5c06\u5728\u5e95\u90e8\u9762\u677f\u770b\u5230\u4e00\u4e2a\u6210\u529f\u7684\u6d88\u606f\uff0c\u4ee5\u53ca\u5de6\u8fb9\u9762\u677f\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Deployed Contracts"),"\u5217\u8868\u4e0b\u770b\u5230\u8be5\u5408\u7ea6\u3002 \u70b9\u51fb\u590d\u5236\u6309\u94ae\u590d\u5236\u65b0\u90e8\u7f72\u5408\u7ea6\u7684\u5730\u5740\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix-deploy-contract-confirmed",src:a(9697).Z,width:"1817",height:"254"})),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5408\u7ea6\u5df2\u7ecf\u90e8\u7f72\u5230\u4e86Conflux eSpace\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7MetaMask\u4e0e\u5176\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("h2",{id:"\u6dfb\u52a0erc-20\u4ee3\u5e01\u5230metamask"},"\u6dfb\u52a0ERC-20\u4ee3\u5e01\u5230MetaMask"),(0,r.kt)("p",null,"\u5728 MetaMask \u754c\u9762\u4e2d(\u786e\u4fdd\u9009\u62e9\u7684\u662f Conflux EVM Testnet \u7f51\u7edc)\uff0c\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"Add Token"),"\u6309\u94ae\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-add-token-button",src:a(904).Z,width:"1938",height:"1034"})),(0,r.kt)("p",null,"\u5c06\u4ece\u4e0a\u4e00\u6b65\u4e2d\u4eceRemix\u4e2d\u590d\u5236\u7684\u4ee3\u5e01\u5730\u5740\u7c98\u8d34\u5230\u6b64\u5904\u3002 \u5269\u4f59\u7684\u4ee3\u5e01\u8be6\u7ec6\u4fe1\u606f\u4f1a\u81ea\u52a8\u586b\u5145\uff0c\u56e0\u4e3a MetaMask \u5728\u94fe\u4e0a\u627e\u5230\u4e86\u8be5\u5408\u7ea6\u3002 \u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-add-token",src:a(7399).Z,width:"340",height:"532"})),(0,r.kt)("p",null,"\u5728\u4e0b\u4e00\u4e2a\u754c\u9762\u4e0a\uff0c\u60a8\u5c06\u770b\u5230\u4f59\u989d(100\u4e2a\u4ee3\u5e01)\uff0c\u8fd9\u662f\u5728\u6211\u4eec\u7684\u5408\u7ea6\u6784\u9020\u51fd\u6570\u4e2d\u521b\u5efa\u7684\u3002 \u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"Add Tokens"),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-add-token-confirm",src:a(451).Z,width:"340",height:"545"})),(0,r.kt)("p",null,"\u4ee3\u5e01\u5df2\u7ecf\u6210\u529f\u6dfb\u52a0\u5230\u4e86 MetaMask \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 MetaMask \u754c\u9762\u67e5\u770b\u4ee3\u5e01\u4f59\u989d\uff0c\u5e76\u5c06\u4ee3\u5e01\u8f6c\u79fb\u5230\u5176\u4ed6\u8d26\u6237\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-metamask-\u8f6c\u79fb-erc-20-\u4ee3\u5e01"},"\u4f7f\u7528 MetaMask \u8f6c\u79fb ERC-20 \u4ee3\u5e01"),(0,r.kt)("p",null,"\u63a5\u7740\u4e0a\u4e00\u6b65\uff0c\u70b9\u51fbMetaMask\u754c\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Send"),"\u6309\u94ae\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-my-token",src:a(7883).Z,width:"1938",height:"1362"})),(0,r.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u63a5\u6536\u8005(\u5982\u679c\u4f60\u5728 MetaMask \u4e2d\u6709\u591a\u4e2a\u8d26\u6237\uff0c\u53ef\u4ee5\u9009\u62e9\u53e6\u4e00\u4e2a\u8d26\u6237)\uff0c\u7136\u540e\u9009\u62e9\u8981\u53d1\u9001\u7684\u4ee3\u5e01\u6570\u91cf\u3002 \u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-send-my-token",src:a(8300).Z,width:"340",height:"539"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u540c\u6837\u5730\uff0c\u71c3\u6c14\u4ef7\u683c\u5e94\u8be5\u8bbe\u7f6e\u4e3a\u96f6\uff0c\u4f46\u662f\u8fd9\u5c06\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u6539\u53d8\u3002")),(0,r.kt)("p",null,"\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Confirm")," \u53d1\u9001\u4ea4\u6613\u5230\u7f51\u7edc\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-send-my-token-confirm",src:a(4086).Z,width:"340",height:"544"})),(0,r.kt)("p",null,"\u51e0\u5206\u949f\u540e\uff0c\u4ea4\u6613\u5c06\u7531\u7f51\u7edc\u786e\u8ba4\u3002 \u60a8\u53ef\u4ee5\u5728 MetaMask \u754c\u9762\u4e2d\u770b\u5230\u60a8\u7684\u8d26\u6237\u6240\u6301\u6709\u7684\u66f4\u65b0\u540e\u7684\u4f59\u989d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-my-token-sent-account1",src:a(6884).Z,width:"1926",height:"1372"})),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5c06\u4ee3\u5e01\u8f6c\u79fb\u5230\u60a8\u62e5\u6709\u7684\u53e6\u4e00\u4e2a MetaMask \u8d26\u6237\uff0c\u5219\u53ef\u4ee5\u6309\u7167\u524d\u9762\u63d0\u5230\u7684\u5c06\u4ee3\u5e01\u6dfb\u52a0\u5230 MetaMask \u4e0a\u7684\u6b65\u9aa4\uff0c\u5728\u5176\u4ed6\u8d26\u6237\u4e0a\u67e5\u770b\u5b83\u7684\u4f59\u989d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-add-token-account2",src:a(9814).Z,width:"1912",height:"784"})),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u8fde\u63a5\u4e86MetaMask\u5230Conflux EVM\u6d4b\u8bd5\u7f51\u7edc\uff0c\u4f7f\u7528Remix\u90e8\u7f72\u4e86\u4e00\u4e2aERC-20\u4ee3\u5e01\u5408\u7ea6\uff0c\u5e76\u4f7f\u7528MetaMask\u8f6c\u79fb\u4e86\u8be5\u4ee3\u5e01\u3002 \u8fd9\u4e2a\u8fc7\u7a0b\u5728\u4ee5\u592a\u574a\u7f51\u7edc\u4e0a\u8fdb\u884c\u7684\u552f\u4e00\u533a\u522b\u662f\u5c06 RPC \u7aef\u70b9\u8bbe\u7f6e\u4e3a Conflux eSpace \u7684\u7aef\u70b9\u3002"))}d.isMDXComponent=!0},904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metam-import-token-b2a756a7a4ed3ac17f1a75fca77bf738-b2a756a7a4ed3ac17f1a75fca77bf738.png"},6291:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_add_network-ce-cec2c8b22ca4e27c6b253415ff8f2244.png"},2353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_choose_network-0-0d3034f88dcd7bc92f61df7d1be9bb7c.png"},7399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mm-import-token-short-1-71f005c4fdb996d2a4b5651ceb6bc7bd-71f005c4fdb996d2a4b5651ceb6bc7bd.png"},451:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mm-import-token-short-2-675291201c0f55a6a0603edad9544335.png"},9814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mm-token-balance-changed-c59c6e2434009c0dcb6e03ef79ba5e60-c59c6e2434009c0dcb6e03ef79ba5e60.png"},5255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remix_connect_with_metamask-9d8214740f372d3b41e489cbe23c5884-9d8214740f372d3b41e489cbe23c5884-9d8214740f372d3b41e489cbe23c5884.png"},4117:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remix_deploy_contract-6423d60330003a7ffc0dc28ee5cd8178-6423d60330003a7ffc0dc28ee5cd8178-6423d60330003a7ffc0dc28ee5cd8178.png"},9697:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remix_deploy_contract_confirmed-59390e985747c30736f46356a88b4ff1-59390e985747c30736f46356a88b4ff1-59390e985747c30736f46356a88b4ff1.png"},4940:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remix_deploy_contract_metamask_confirm-6b4f8c2a751ec4a4b6ad9df96584c623-6b4f8c2a751ec4a4b6ad9df96584c623-6b4f8c2a751ec4a4b6ad9df96584c623.png"},6510:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remix_injected_web3-dbb0d671a1703239451d7d4e133f68ba-dbb0d671a1703239451d7d4e133f68ba-dbb0d671a1703239451d7d4e133f68ba.png"},6706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remix_new_file-1-15cadba3e578d16df451448175231e8b.png"},7687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remix_solidity_compile-1f459820c9caef73c47d3af1c87e71a6-1f459820c9caef73c47d3af1c87e71a6-1f459820c9caef73c47d3af1c87e71a6.png"},8300:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/send-gld-1-da8b6feee94ca0dfe89afc5118267c89-da8b6feee94ca0dfe89afc5118267c89.jpeg"},4086:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/send-gld-confirm-7789e263d3d53e45e2e4bebbf1d057cb-7789e263d3d53e45e2e4bebbf1d057cb.jpeg"},7883:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-send-gld-b56abfa83bb02864b94c3a5adcbcc0d0-b56abfa83bb02864b94c3a5adcbcc0d0.jpeg"},6884:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-transfer-balance-changed-24a5b4588118295da68d10d9a3cea0cf-24a5b4588118295da68d10d9a3cea0cf.jpeg"}}]);