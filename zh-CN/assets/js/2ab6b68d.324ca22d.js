"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6192],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),g=i,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:10,title:"Gas",displayed_sidebar:"generalSidebar"},s=void 0,l={unversionedId:"general/conflux-basics/gas",id:"general/conflux-basics/gas",title:"Gas",description:"Conflux users(both Core Space and eSpace) usually see fields like gasFee, gas, and gasPrice when they are sending transactions using their wallets (Fluent) or SDK. \u672c\u6587\u5c06\u8be6\u7ec6\u89e3\u91ca\u8fd9\u4e9b\u6982\u5ff5\u7684\u542b\u4e49\uff0c\u4ee5\u53ca\u5982\u4f55\u6b63\u786e\u5730\u8bbe\u7f6e\u8fd9\u4e9b\u503c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/gas.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/gas",permalink:"/zh-CN/docs/general/conflux-basics/gas",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Gas",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u8d26\u6237\u548c\u5730\u5740",permalink:"/zh-CN/docs/general/conflux-basics/accounts"},next:{title:"Governance Overview",permalink:"/zh-CN/docs/general/conflux-basics/conflux-governance/governance-overview"}},o={},p=[{value:"gasFee",id:"gasfee",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u652f\u4ed8\u8d39\u7528",id:"\u4e3a\u4ec0\u4e48\u8981\u652f\u4ed8\u8d39\u7528",level:2},{value:"\u4ec0\u4e48\u662fGas",id:"\u4ec0\u4e48\u662fgas",level:2},{value:"Gas Limit",id:"gas-limit",level:2},{value:"gasPrice",id:"gasprice",level:2},{value:"\u5982\u4f55\u8ba1\u7b97gasFee",id:"\u5982\u4f55\u8ba1\u7b97gasfee",level:2},{value:"\u5982\u4f55\u6b63\u786e\u8bbe\u7f6egas\u548cgasPrice",id:"\u5982\u4f55\u6b63\u786e\u8bbe\u7f6egas\u548cgasprice",level:2},{value:"gasPrice",id:"gasprice-1",level:3},{value:"gas",id:"gas",level:3},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"1. Conflux\u7f51\u7edc\u4e2d\u6709\u6ca1\u6709\u7b26\u5408EIP-1559\u6807\u51c6\u7684\u4ea4\u6613\uff1f",id:"1-conflux\u7f51\u7edc\u4e2d\u6709\u6ca1\u6709\u7b26\u5408eip-1559\u6807\u51c6\u7684\u4ea4\u6613",level:3},{value:"\u4e86\u89e3\u66f4\u591a",id:"\u4e86\u89e3\u66f4\u591a",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Conflux users(both Core Space and eSpace) usually see fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"gasFee"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gas"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice")," when they are sending transactions using their wallets (Fluent) or SDK. \u672c\u6587\u5c06\u8be6\u7ec6\u89e3\u91ca\u8fd9\u4e9b\u6982\u5ff5\u7684\u542b\u4e49\uff0c\u4ee5\u53ca\u5982\u4f55\u6b63\u786e\u5730\u8bbe\u7f6e\u8fd9\u4e9b\u503c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign Transaction",src:a(75150).Z,width:"800",height:"638"})),(0,i.kt)("h2",{id:"gasfee"},"gasFee"),(0,i.kt)("p",null,"\u5728\u73b0\u5b9e\u751f\u6d3b\u4e2d\uff0c\u5f53\u6211\u4eec\u5728\u94f6\u884c\u5411\u522b\u4eba\u6c47\u6b3e\u65f6\uff0c\u6211\u4eec\u901a\u5e38\u8981\u652f\u4ed8\u4ea4\u6613\u8d39\u7528\u3002 \u5728\u533a\u5757\u94fe\uff08\u6bd4\u7279\u5e01\u3001\u4ee5\u592a\u574a\u3001Conflux\uff09\u4e2d\u53d1\u9001\u4ea4\u6613\u4e5f\u662f\u4e00\u6837\u7684\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"gasFee"),"\u662f\u53d1\u9001\u4ea4\u6613\u7684\u8d39\u7528\u3002 \u901a\u5e38\uff0c\u5b83\u9700\u8981\u7528\u94fe\u7684\u539f\u751f\u4ee3\u5e01\u6765\u652f\u4ed8\u3002 \u4ee5Conflux\u4e3a\u4f8b\uff0c\u9700\u8981\u7528CFX\u6765\u652f\u4ed8\u4ea4\u6613\u8d39\u7528\uff08gas\u8d39\u7528\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tx gas charged",src:a(62628).Z,width:"1680",height:"899"})),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u652f\u4ed8\u8d39\u7528"},"\u4e3a\u4ec0\u4e48\u8981\u652f\u4ed8\u8d39\u7528"),(0,i.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u533a\u5757\u94fe\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u8d26\u672c\uff0c\u7531\u77ff\u5de5\u7ef4\u62a4\u3002 \u77ff\u5de5\u5b58\u50a8\u6570\u636e\u548c\u751f\u6210\u533a\u5757\uff08\u8ba1\u7b97\u54c8\u5e0c\uff09\u6709\u4e00\u5b9a\u7684\u6210\u672c\u3002 \u56e0\u6b64\uff0c\u4e3a\u4e86\u6fc0\u52b1\u77ff\u5de5\u79ef\u6781\u53c2\u4e0e\u94fe\u7ef4\u62a4\u548c\u4fdd\u62a4\u7f51\u7edc\u5b89\u5168\uff0c\u533a\u5757\u94fe\u5171\u8bc6\u7cfb\u7edf\u88ab\u8bbe\u8ba1\u4e3a\u5305\u542b\u4e00\u4e2a\u5bf9\u77ff\u5de5\u7684\u5956\u52b1\u673a\u5236\uff0c\u800c\u4ea4\u6613\u8d39\u5c31\u662f\u77ff\u5de5\u7684\u5956\u52b1\u4e4b\u4e00\uff0c\u5b83\u5c06\u652f\u4ed8\u7ed9\u53c2\u4e0e\u751f\u6210\u533a\u5757\u7684\u77ff\u5de5\u3002 \u8fd9\u4e2a\u673a\u5236\u53ef\u4ee5\u4fdd\u8bc1\u6574\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7f51\u7edc\u7684\u53ef\u6301\u7eed\u6027\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\uff0cgas\u8d39\u7528\u673a\u5236\u4e5f\u53ef\u4ee5\u9632\u6b62\u6ee5\u7528\u4ea4\u6613\uff0c\u4ece\u800c\u63d0\u9ad8\u533a\u5757\u94fe\u5229\u7528\u6548\u7387\u3002"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662fgas"},"\u4ec0\u4e48\u662fGas"),(0,i.kt)("p",null,"Gas\u7684\u6982\u5ff5\u501f\u9274\u4e86\u73b0\u5b9e\u4e2d\u7684\u201c\u6c7d\u6cb9\u201d\u3002 \u6c7d\u8f66\u6d88\u8017\u6c7d\u6cb9\u6765\u884c\u9a76\u3002 \u6c7d\u8f66\u884c\u9a76\u5f97\u8d8a\u8fdc\uff0c\u6d88\u8017\u7684\u6c7d\u6cb9\u5c31\u8d8a\u591a\u3002 \u5728EVM\u533a\u5757\u94fe\u4e2d\uff0cgas\u8868\u793a\u6267\u884c\u4e00\u7b14\u4ea4\u6613\u6240\u9700\u7684\u5de5\u4f5c\u603b\u91cf\u3002 \u56e0\u6b64\uff0c\u5b83\u662f\u4e00\u4e2a\u8861\u91cf\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\u6240\u9700\u8ba1\u7b97\u91cf\u7684\u5355\u4f4d\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u6240\u6709Conflux\u7684\u4ea4\u6613\u90fd\u662f\u7531EVM\u6267\u884c\u7684\uff0c\u5305\u62ec\u666e\u901a\u7684CFX\u8f6c\u8d26\u548c\u667a\u80fd\u5408\u7ea6\u65b9\u6cd5\u8c03\u7528\u3002 \u5f53\u8fd9\u4e9b\u64cd\u4f5c\u88ab\u6267\u884c\u65f6\uff0c\u5b83\u4eec\u88ab\u7f16\u8bd1\u6210\u5355\u4e2aOPCode\u3002 \u6267\u884c\u6bcf\u4e2aOPCode\u6240\u9700\u7684\u5de5\u4f5c\u91cf\u4e0d\u540c\u3002 \u5173\u4e8eOPCode gas\u8d39\u7528\u7684\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/opcodes/"},"\u8fd9\u91cc"),"\u627e\u5230\u3002"),(0,i.kt)("p",null,"\u901a\u5e38\uff0c\u4e00\u7b14\u666e\u901a\u7684CFX\u8f6c\u8d26\u6240\u6d88\u8017\u7684gas\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"21000"),"\u3002 \u4e00\u7b14\u667a\u80fd\u5408\u7ea6\u4ea4\u6613\u901a\u5e38\u9700\u8981\u66f4\u591a\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u5408\u7ea6\u6267\u884c\u7684\u590d\u6742\u5ea6\u3002"),(0,i.kt)("h2",{id:"gas-limit"},"Gas Limit"),(0,i.kt)("p",null,"\u5728\u6784\u9020\u4e00\u7b14\u4ea4\u6613\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"gas"),"\u5b57\u6bb5\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u8be5\u5b57\u6bb5\u672c\u8eab\u8868\u793a\u4ea4\u6613\u6267\u884c\u6240\u80fd\u6d88\u8017\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"gas\u7684\u4e0a\u9650"),"\u3002"),(0,i.kt)("p",null,"\u6b63\u786e\u586b\u5199gas\u5b57\u6bb5\u975e\u5e38\u91cd\u8981\u3002 \u5982\u679c\u71c3\u6599\u9650\u5236\u8bbe\u7f6e\u4e3a\u5c0f\u4e8e\u5b9e\u9645\u6240\u9700gas\u91cf\u7684\u503c\uff0c\u4ea4\u6613\u5c06\u5931\u8d25\u3002 \u5982\u679cgas\u9650\u5236\u8bbe\u7f6e\u5f97\u592a\u9ad8\uff0c\u4f60\u53ef\u80fd\u4f1a\u652f\u4ed8\u6bd4\u4f60\u5b9e\u9645\u9700\u8981\u7684\u66f4\u591a\u7684gas\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It should be mentioned that transaction will typically fail if the gas limit is exactly set to gas consumption due to ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-150"},"EIP-150"),".")),(0,i.kt)("p",null,"Conflux\u7f51\u7edc\u4e2d\u5355\u7b14\u4ea4\u6613\u7684\u6700\u5927gas\u9650\u5236\u662f15M\u3002 \u8fd9\u786e\u4fdd\u4e86\u4ea4\u6613\u4e0d\u4f1a\u8fc7\u5ea6\u6d88\u8017EVM\u8d44\u6e90\u3002"),(0,i.kt)("h2",{id:"gasprice"},"gasPrice"),(0,i.kt)("p",null,"\u4ea4\u6613\u7684gasPrice\u7531\u4ea4\u6613\u53d1\u9001\u8005\u6307\u5b9a\uff0c\u8868\u793a\u8be5\u4eba\u613f\u610f\u652f\u4ed8\u7684\u6bcf\u5355\u4f4dgas\u7684\u8d39\u7528\u3002 The unit of gasPrice is GDrip, where 1 GDrip is equal to 0.000000001 CFX (10**-9 CFX)."),(0,i.kt)("p",null,"\u4ea4\u6613\u7684gasPrice\u503c\u5f71\u54cd\u4e86\u4ea4\u6613\u88ab\u77ff\u5de5\u6253\u5305\u7684\u901f\u5ea6\uff0c\u56e0\u4e3a\u77ff\u5de5\u4f1a\u4f18\u5148\u6253\u5305gasPrice\u8f83\u9ad8\u7684\u4ea4\u6613\uff0c\u4ee5\u83b7\u5f97\u66f4\u591a\u7684\u5229\u6da6\u3002 \u5f53\u7f51\u7edc\u4e0d\u62e5\u5835\u65f6\uff0c\u5c06gasPrice\u8bbe\u7f6e\u4e3a1Gdrip\u5c31\u8db3\u4ee5\u6b63\u5e38\u6253\u5305\u3002 \u7136\u800c\uff0c\u5f53\u7f51\u7edc\u62e5\u5835\u65f6\uff0c\u66f4\u591a\u7684\u4ea4\u6613\u5728\u7b49\u5f85\u6253\u5305\u3002 \u8fd9\u65f6\uff0c\u5982\u679cgasPrice\u8bbe\u7f6e\u5f97\u6bd4\u5927\u591a\u6570\u5176\u4ed6\u4ea4\u6613\u4f4e\uff0c\u5b83\u5c06\u4e0d\u4f1a\u88ab\u6253\u5305\uff0c\u800c\u662f\u4e00\u76f4\u7b49\u5f85\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u60f3\u8ba9\u4ea4\u6613\u5feb\u901f\u6253\u5305\uff0c\u4f60\u53ef\u4ee5\u5c06gasPrice\u8bbe\u7f6e\u5f97\u9ad8\u4e00\u4e9b\u3002 \u901a\u5e38\u5728Conflux\u4e2d\u5c06\u5176\u8bbe\u7f6e\u4e3a10G-1000G\u5c31\u8db3\u591f\u9ad8\uff0c\u4ee5\u786e\u4fdd\u5b83\u5feb\u901f\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u4e0d\u8981\u5c06gasPrice\u8bbe\u7f6e\u5f97\u592a\u9ad8\u3002 \u5b83\u53ef\u80fd\u5bfc\u81f4\u5929\u4ef7\u7684\u4ea4\u6613\u8d39\u7528\u3002 \u5982\u679cgasPrice\u8bbe\u7f6e\u4e3a1CFX\uff0c\u90a3\u4e48\u4e00\u7b14\u666e\u901a\u8f6c\u8d26\u7684\u8d39\u7528\u662f21000 CFX\uff0c\u8fd9\u5bf9\u4e8e\u4e00\u7b14\u4ea4\u6613\u6765\u8bf4\u662f\u76f8\u5f53\u591a\u7684\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u8ba1\u7b97gasfee"},"\u5982\u4f55\u8ba1\u7b97gasFee"),(0,i.kt)("p",null,"gasFee\u662f\u4e00\u7b14\u4ea4\u6613\u652f\u4ed8\u7684\u603bgas\u8d39\u7528\u3002 \u5b83\u7684\u8ba1\u7b97\u516c\u5f0f\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"gasFee = gasUsed * gasPrice"),"\u3002 gasFee\u91c7\u7528CFX\u7684\u6700\u5c0f\u5355\u4f4dDrip\u3002"),(0,i.kt)("p",null,"\u5047\u8bbe\u6709\u4e00\u7b141 CFX\u7684\u666e\u901a\u8f6c\u8d26\uff0cgas\u9650\u5236\u53ef\u4ee5\u8bbe\u7f6e\u4e3a21,000\u3002 \u5982\u679cgasPrice\u8bbe\u7f6e\u4e3a1GDrip\uff0c\u90a3\u4e48\u4ea4\u6613\u7684\u603b\u6210\u672c\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 21000 * 0.000000001 = 1.000021 CFX"),"\uff0c\u5176\u4e2d1 CFX\u8f6c\u5230\u6536\u6b3e\u4eba\u7684\u8d26\u6237\uff0c0.000021 CFX\u662f\u77ff\u5de5\u7684\u5956\u52b1\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\uff0c\u5728Conflux\u7684\u4e00\u7b14\u4ea4\u6613\u4e2d\uff0c\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"gas limit"),"\u5927\u4e8e\u5b9e\u9645\u6d88\u8017\u7684gas\u91cf\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"gasUsed"),"\uff09\uff0c\u8d85\u51fa\u90e8\u5206\u5c06\u88ab\u9000\u8fd8\u3002 The returning amount of gas ",(0,i.kt)("strong",{parentName:"p"},"can only be up to")," a quarter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas limit"),"."),(0,i.kt)("p",null,"\u5047\u8bbe\u4e00\u7b14\u666e\u901aCFX\u8f6c\u8d26\u7684gas\u9650\u5236\u8bbe\u7f6e\u4e3a100k\uff0c\u5b9e\u9645\u6267\u884c\u6d88\u8017\u4e8621,000\uff0c\u7531\u4e8e\u4ea4\u6613\u7684gas\u9650\u5236\u8bbe\u7f6e\u5f97\u592a\u9ad8\uff0c\u6700\u591a\u670925,000\u7684gas\u8d39\u7528\u4f1a\u88ab\u9000\u8fd8\uff08gas limit\u768425%\uff09\u3002 \u8be5\u4ea4\u6613\u4f7f\u7528\u7684gas\u5c06\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"0.000075 CFX"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4ea4\u6613\u7684gas\u9650\u5236\u8bbe\u7f6e\u5f97\u4e0d\u662f\u90a3\u4e48\u9ad8\uff0c\u4ee5\u524d\u9762\u7684\u4f8b\u5b50\u4e3a\u4f8b\uff0c\u4f46\u5c06gas\u9650\u5236\u8bbe\u7f6e\u4e3a25000\uff0c\u6bd4\u5b9e\u9645\u4f7f\u7528\u7684\u591a4000\uff0c\u8d85\u51fa\u90e8\u5206\u4e0d\u8d85\u8fc7gas\u9650\u5236\u7684\u56db\u5206\u4e4b\u4e00\u3002 \u8fd9\u90e8\u5206\u5c06\u88ab\u5b8c\u5168\u9000\u8fd8\uff0c\u6700\u7ec8\u6536\u53d6\u7684\u8d39\u7528\u4ecd\u7136\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"0.000021 CFX"),"\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u6b63\u786e\u8bbe\u7f6egas\u548cgasprice"},"\u5982\u4f55\u6b63\u786e\u8bbe\u7f6egas\u548cgasPrice"),(0,i.kt)("p",null,"The answer is different depending on different spaces."),(0,i.kt)("h3",{id:"gasprice-1"},"gasPrice"),(0,i.kt)("p",null,"The Conflux consensus don't limit the transaction gas prices and the minimum gas price depends on the miners' setting. Here are the minimum gas price settings of Confura, the public RPC endpoints supported by Conflux foundation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"core space: 1 GDrip"),(0,i.kt)("li",{parentName:"ul"},"eSpace: 20 GDrip")),(0,i.kt)("p",null,"Besides, it is recommended to set gas price based on core space / espace RPC return value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"core space: ",(0,i.kt)("inlineCode",{parentName:"li"},"cfx_gasPrice")),(0,i.kt)("li",{parentName:"ul"},"eSpace: ",(0,i.kt)("inlineCode",{parentName:"li"},"eth_gasPrice"))),(0,i.kt)("h3",{id:"gas"},"gas"),(0,i.kt)("p",null,"For regular CFX transfers, setting the gas to 21,000 is sufficient."),(0,i.kt)("p",null,"For contract interactions, it is recommended to set gas based on the return value of core space / espace RPC:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"core space: ",(0,i.kt)("inlineCode",{parentName:"li"},"gasLimit")," field of ",(0,i.kt)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral")),(0,i.kt)("li",{parentName:"ul"},"eSpace: ",(0,i.kt)("inlineCode",{parentName:"li"},"eth_estimateGas"))),(0,i.kt)("p",null,"These methods simulates the execution of the transaction and return the estimated amount of gas used for the transaction. Actually, in most cases, the value ",(0,i.kt)("inlineCode",{parentName:"p"},"gasUsed")," returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," is accurate, but it is not recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"gasUsed")," due to two main reasons:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Due to ",(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-150"},"EIP-150"),", setting the gas to the actual gas consumption may often lead to transaction failure."),(0,i.kt)("li",{parentName:"ol"},"The result is based on the current blockchain state during the simulation, but the actual execution states may be different.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gasLimit")," field typically equals ",(0,i.kt)("inlineCode",{parentName:"p"},"1.3 * gasUsed"),". This ensures that the gas limit is sufficient for the transaction, and any excessive gas fee will be refunded."),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,i.kt)("h3",{id:"1-conflux\u7f51\u7edc\u4e2d\u6709\u6ca1\u6709\u7b26\u5408eip-1559\u6807\u51c6\u7684\u4ea4\u6613"},"1. Conflux\u7f51\u7edc\u4e2d\u6709\u6ca1\u6709\u7b26\u5408EIP-1559\u6807\u51c6\u7684\u4ea4\u6613\uff1f"),(0,i.kt)("p",null,"\u76ee\u524d\uff0c\u5728Conflux\u7f51\u7edc\u4e2d\uff0c\u53ea\u6709\u7b26\u5408EIP-155\u6807\u51c6\u7684\u4ea4\u6613\u3002"),(0,i.kt)("h2",{id:"\u4e86\u89e3\u66f4\u591a"},"\u4e86\u89e3\u66f4\u591a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/gas/"},"Ethereum Developer Documentation: Gas and Fees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ethgas.io/index.html"},"Ethereum Gas Explained"))))}d.isMDXComponent=!0},75150:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gas1-7cc4ad4cf93fd42551f35d2edf9566cf.png"},62628:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx-gas-charged-631705fab32539aea535cfd7c829ba48.jpeg"}}]);