"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,m=c["".concat(s,".").concat(u)]||c[u]||x[u]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"Base32 Addresses",displayed_sidebar:"coreSidebar"},i=void 0,l={unversionedId:"core/core-space-basics/addresses",id:"core/core-space-basics/addresses",title:"Base32 Addresses",description:"\u5728Conflux\u4e2d\uff0c\u6bcf\u4e2a \u8d26\u6237 \u90fd\u4e0e\u4e00\u4e2a\u516c\u79c1\u94a5\u5bf9\u76f8\u5173\u8054\uff0c\u5e76\u7531\u4e00\u4e2a\u201c\u5730\u5740\u201d\u6807\u8bc6\u3002 \u672c\u9875\u9762\u4ecb\u7ecd\u5730\u5740\u5728core space\u4e2d\u7684\u8868\u793a\u548c\u8ba1\u7b97\u65b9\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/core-space-basics/addresses.md",sourceDirName:"core/core-space-basics",slug:"/core/core-space-basics/addresses",permalink:"/zh-CN/docs/core/core-space-basics/addresses",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Base32 Addresses",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Intro",permalink:"/zh-CN/docs/core/core-space-basics/Intro"},next:{title:"Storage Collateral",permalink:"/zh-CN/docs/core/core-space-basics/storage"}},s={},p=[{value:"Hex\u5730\u5740 \u548c Base32 \u5730\u5740",id:"hex\u5730\u5740-\u548c-base32-\u5730\u5740",level:2},{value:"\u5730\u5740\u8ba1\u7b97",id:"\u5730\u5740\u8ba1\u7b97",level:2},{value:"\u5341\u516d\u8fdb\u5236\u5730\u5740\u8ba1\u7b97",id:"\u5341\u516d\u8fdb\u5236\u5730\u5740\u8ba1\u7b97",level:3},{value:"EOA \u5341\u516d\u8fdb\u5236\u5730\u5740\u8ba1\u7b97",id:"eoa-\u5341\u516d\u8fdb\u5236\u5730\u5740\u8ba1\u7b97",level:4},{value:"\u5408\u7ea6\u5730\u5740\u8ba1\u7b97",id:"\u5408\u7ea6\u5730\u5740\u8ba1\u7b97",level:4},{value:"Base32\u5730\u5740\u8ba1\u7b97",id:"base32\u5730\u5740\u8ba1\u7b97",level:3},{value:"\u7f51\u7edc\u524d\u7f00\uff08Network Prefix\uff09",id:"\u7f51\u7edc\u524d\u7f00network-prefix",level:4},{value:"\u5730\u5740\u7c7b\u578b\uff08Address Type\uff09",id:"\u5730\u5740\u7c7b\u578baddress-type",level:4},{value:"\u8f7d\u8377 (Payload)",id:"\u8f7d\u8377-payload",level:4},{value:"\u6821\u9a8c\u548c(Checksum)",id:"\u6821\u9a8c\u548cchecksum",level:4},{value:"\u6700\u7ec8\u7ed3\u679c\u548c\u793a\u4f8b",id:"\u6700\u7ec8\u7ed3\u679c\u548c\u793a\u4f8b",level:4},{value:"Use Cases for Base32 and Hex Addresses",id:"use-cases-for-base32-and-hex-addresses",level:2},{value:"Address Format Convert Tool",id:"address-format-convert-tool",level:2}],d={toc:p},c="wrapper";function x(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728Conflux\u4e2d\uff0c\u6bcf\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"../../../general/conflux-basics/accounts.md"},"\u8d26\u6237")," \u90fd\u4e0e\u4e00\u4e2a\u516c\u79c1\u94a5\u5bf9\u76f8\u5173\u8054\uff0c\u5e76\u7531\u4e00\u4e2a\u201c\u5730\u5740\u201d\u6807\u8bc6\u3002 \u672c\u9875\u9762\u4ecb\u7ecd\u5730\u5740\u5728core space\u4e2d\u7684\u8868\u793a\u548c\u8ba1\u7b97\u65b9\u5f0f\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../../../general/conflux-basics/accounts.md#address"},"General-address"),"\u4e86\u89e3\u6709\u5173\u5730\u5740\u7684\u57fa\u672c\u6982\u5ff5\u3002")),(0,r.kt)("h2",{id:"hex\u5730\u5740-\u548c-base32-\u5730\u5740"},"Hex\u5730\u5740 \u548c Base32 \u5730\u5740"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Conflux-rust v1.1.1"),"\u53d1\u5e03\u4e4b\u524d\uff0cConflux \u5730\u5740\u5b8c\u5168\u4ee5\u5341\u516d\u8fdb\u5236\u7f16\u7801\u5b57\u7b26\u4e32\u5f62\u5f0f\u5448\u73b0\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1292d4955b47f5153b88c12c7a94048f09839")," \u6b64\u683c\u5f0f\u4e0eEtherum\u548c\u5176\u4ed6\u517c\u5bb9\u7684EVM\u533a\u5757\u94fe\u4f7f\u7528\u7684\u5730\u5740\u975e\u5e38\u76f8\u4f3c\u3002 \u7136\u800c\uff0cConflux \u91c7\u7528\u72ec\u7279\u7684\u65b9\u6cd5\u6765\u8ba1\u7b97EOA\u5730\u5740\uff0c \u8fd9\u610f\u5473\u7740\u7531\u540c\u4e00\u79c1\u94a5\u751f\u6210\u7684\u5730\u5740\u5b57\u7b26\u4e32\u5728Conflux \u548c Etherum\u4e4b\u95f4\u901a\u5e38\u662f\u4e0d\u540c\u7684\u3002 \u8fd9\u79cd\u8868\u9762\u4e0a\u7684\u76f8\u4f3c\u6027\uff0c\u52a0\u4e0a\u8ba1\u7b97\u4e0a\u7684\u5dee\u5f02\uff0c \u4f7f\u5f97\u7528\u6237\u5f88\u5bb9\u6613\u5c06Conflux\u5730\u5740\u4e0eEthereum \u5730\u5740\u6df7\u6dc6\uff0c\u4ece\u800c\u53ef\u80fd\u5bfc\u81f4\u8d44\u4ea7\u635f\u5931\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cConflux\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"CIP-37"),' \u4e2d\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684\u57fa\u4e8e base32 \u7f16\u7801\u5730\u5740\u683c\u5f0f\u3002 \u65b0\u683c\u5f0f\u76f4\u63a5\u6765\u81ea\u539f\u6709\u7684\u5341\u516d\u8fdb\u5236\u7f16\u7801\u5730\u5740\uff0c\u5305\u62ec\u4e00\u4e2a\u72ec\u7279\u7684\u524d\u7f00(\u4f8b\u5982"cfx")\u3001\u4e00\u4e2a\u53ef\u9009\u7684\u5730\u5740\u7c7b\u578b\u548c\u4e00\u4e2a\u6821\u9a8c\u548c\u3002 \u56e0\u6b64\uff0c\u4e0a\u6587\u63d0\u5230\u7684Hex\u7f16\u7801\u5730\u5740\u53ef\u4ee5\u8f6c\u6362\u6210\u66f4\u5bb9\u6613\u8bc6\u522b\u7684base32\u5730\u5740\u3002\u4f8b\u5982 ',(0,r.kt)("inlineCode",{parentName:"p"},"cfx:aakkfzezns4h8ymx1cgmcnd4x3aev6e2hexz250ym5"),", \u53ef\u9009\u7684\uff0c\u4e5f\u53ef\u4ee5\u8868\u793a\u4e3a\u8be6\u7ec6\u683c\u5f0f\u5730\u5740\uff0c\u8be6\u7ec6\u683c\u5f0f\u5305\u542b\u4e86\u975e\u5fc5\u987b\u7684\u5730\u5740\u7c7b\u578b\u4fe1\u606f, \u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"CFX:TYPE .USER\uff1aAAKKFZEZNS4H8YMX1CGMCN4X3AEV6E2HEXZ250YM5"),". \u8fd9\u79cd\u65b0\u683c\u5f0f\u6700\u5927\u9650\u5ea6\u5730\u51cf\u5c11\u4e86Conflux \u548c Etherum\u5730\u5740\u4e4b\u95f4\u6df7\u6dc6\u7684\u98ce\u9669\uff0c\u63d0\u4f9b\u4e86\u66f4\u5b89\u5168\u548c\u66f4\u65b9\u4fbf\u7684\u7528\u6237\u4f53\u9a8c\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728Conflux Core Space \u7684\u751f\u6001\u4e2d\uff0c\u90fd\u9700\u8981\u4f7f\u7528Base32\u5730\u5740\u2014\u2014\u4f46\u662f\u667a\u80fd\u5408\u7ea6 ",(0,r.kt)("inlineCode",{parentName:"p"},".sol")," \u6e90\u4ee3\u7801\u9664\u5916\u3002 \u5728",(0,r.kt)("inlineCode",{parentName:"p"},".sol"),"\u6587\u4ef6\u4e2d\u9700\u8981\u786c\u7f16\u7801",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-55"},"EIP-55")," \u6821\u9a8c\u548c\u5730\u5740\u7684\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u5e94\u8be5\u9009\u62e9\u4f7f\u7528Conflux\u7684\u5341\u516d\u8fdb\u5236\u7f16\u7801\u5730\u5740\uff0c\u800c\u4e0d\u662fBase32\u683c\u5f0f\u3002")),(0,r.kt)("h2",{id:"\u5730\u5740\u8ba1\u7b97"},"\u5730\u5740\u8ba1\u7b97"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u8282\u5185\u5bb9\u4ec5\u4f9b\u4fe1\u606f\u53c2\u8003\u3002 \u7528\u6237\u6216\u5f00\u53d1\u8005\u901a\u5e38\u4e0d\u9700\u8981\u81ea\u5df1\u8ba1\u7b97\u5341\u516d\u8fdb\u5236\u5730\u5740\u3002 \u5efa\u8bae\u57fa\u4e8e SDK \u6216 RPC \u7684\u8fd4\u56de\u503c\u6765\u83b7\u53d6 EOA / \u5408\u7ea6\u5730\u5740\uff0c\u4f7f\u7528 SDK \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://www.confluxscan.net/address-converter"},"\u5728\u7ebf\u5730\u5740\u8f6c\u6362\u5668")," \u6765\u8f6c\u6362\u5341\u516d\u8fdb\u5236\u548c base32 \u5730\u5740\u683c\u5f0f\u3002")),(0,r.kt)("h3",{id:"\u5341\u516d\u8fdb\u5236\u5730\u5740\u8ba1\u7b97"},"\u5341\u516d\u8fdb\u5236\u5730\u5740\u8ba1\u7b97"),(0,r.kt)("p",null,"Base32\u5730\u5740\u76f4\u63a5\u7531\u539f\u59cb\u7684\u5341\u516d\u8fdb\u5236\u7f16\u7801\u5730\u5740\u6d3e\u751f\u800c\u6765\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u7406\u89e3\u5341\u516d\u8fdb\u5236\u5730\u5740\u7684\u8ba1\u7b97\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"Conflux \u5341\u516d\u8fdb\u5236\u5730\u5740\u662f\u4e00\u4e2a20\u5b57\u8282\u7684\u5341\u516d\u8fdb\u5236\u503c\uff0c\u4ee5\u201c0x\u201d\u5f00\u5934\u7684\u5305\u62ec42\u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\u8868\u793a\u3002 \u5341\u516d\u8fdb\u5236\u7f16\u7801\u5730\u5740\u4ee5\u4e00\u4e2a1(3)\u5b57\u7b26\u201c\u7c7b\u578b\u6807\u8bc6\u201d\u5f00\u5934\uff0c\u8868\u793a\u5730\u5740\u7c7b\u578b\u3002 \u76ee\u524d\u6709\u4e09\u79cd\u7c7b\u578b\u7684\u6807\u8bc6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(0x)1"),": \u4ee3\u8868\u4e00\u4e2aEOA \u5e10\u6237\u7684\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(0x)8"),": \u4ee3\u8868\u4e00\u4e2a\u5408\u7ea6\u7684\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(0x)0"),": \u8868\u793a\u4e00\u4e2a\u5728\u94fe\u4e0a\u5b9e\u73b0\u786c\u7f16\u7801\u903b\u8f91 ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/core/core-space-basics/internal-contracts/"},"\u5185\u7f6e\u5408\u7ea6"),", \u6216\u4e00\u4e2a\u7a7a\u5730\u5740 (",(0,r.kt)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000000000000000000000"),")\u3002")),(0,r.kt)("h4",{id:"eoa-\u5341\u516d\u8fdb\u5236\u5730\u5740\u8ba1\u7b97"},"EOA \u5341\u516d\u8fdb\u5236\u5730\u5740\u8ba1\u7b97"),(0,r.kt)("p",null,"\u8ba1\u7b97EOA \u5341\u516d\u8fdb\u5236\u5730\u5740\u7684\u89c4\u5b9a\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf"},"Conflux protocol specification")," ",(0,r.kt)("inlineCode",{parentName:"p"},"3.1: \u8d26\u6237"),". \u5c06\u8d26\u6237\u516c\u94a5\u8fdb\u884cKeccak\u8fd0\u7b97\u5f97\u5230\u6458\u8981\uff0c\u8d26\u6237\u5730\u5740\u75314\u4f4d\u7c7b\u578b\u6807\u8bc6\u548c\u8be5\u6458\u8981\u7684\u6700\u53f3\u4fa7156\u4f4d\u4e32\u8054\u800c\u6210\u3002"),(0,r.kt)("h4",{id:"\u5408\u7ea6\u5730\u5740\u8ba1\u7b97"},"\u5408\u7ea6\u5730\u5740\u8ba1\u7b97"),(0,r.kt)("p",null,"\u53ef\u9009\u7684\uff0c\u5408\u7ea6\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"create2")," \u64cd\u4f5c\u7801\u8fdb\u884c\u90e8\u7f72\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5408\u7ea6\u5730\u5740\u7684\u8ba1\u7b97\u65b9\u5f0f\u4e0e\u4ee5\u592a\u574a\u6709\u5f88\u5927\u4e0d\u540c\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"create2")," \uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bPython\u4ee3\u7801\u8ba1\u7b97\u90e8\u7f72\u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# using web3.py is also viable\n# from web3 import Web3\nfrom conflux_web3 import Web3\n\n# ensure salt is a bytes32 to avoid unmatched result caused by encoding approach\ndef compute_address_using_salt(salt: bytes, bytecode_hash: bytes, hex_deployer_address: str):\n    core_part = Web3.solidityKeccak(\n        ["bytes1", "address", "bytes32", "bytes32"],\n        ["0xff", hex_deployer_address, salt, bytecode_hash]\n    )\n    return "0x8"+ core_part.hex()[-39:]\n')),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"create2")," \u672a\u88ab\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# using web3.py is also viable\n# from web3 import Web3\nfrom conflux_web3 import Web3\n\ndef compute_address_using_nonce(nonce: int, bytecode_hash: bytes, hex_deployer_address: str):\n    core_part = Web3.solidityKeccak(\n        ["bytes1", "address", "bytes32", "bytes32"],\n        ["0x00", hex_deployer_address, nonce.to_bytes(32, "little"), bytecode_hash]\n    )\n    return "0x8"+ core_part.hex()[-39:]\n')),(0,r.kt)("h3",{id:"base32\u5730\u5740\u8ba1\u7b97"},"Base32\u5730\u5740\u8ba1\u7b97"),(0,r.kt)("p",null,"Conflux\u7684 base32 \u5730\u5740\u6307\u7531 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"CIP-37")," \u5b9a\u4e49\u7684\u5177\u6709\u7f51\u7edc\u524d\u7f00\u7684Conflux Base32\u6821\u9a8c\u548c\u5730\u5740\u3002 \u8be5\u5730\u5740\u7531\u8868\u793a\u8be5\u5730\u5740\u6709\u6548\u7684\u7f51\u7edc\u7684\u7f51\u7edc\u524d\u7f00\u3001\u4e00\u4e2a\u5192\u53f7(",(0,r.kt)("inlineCode",{parentName:"p"},'":"'),") \u548c\u4e00\u4e2a Base32 \u7f16\u7801\u7684\u8f7d\u8377\u7ec4\u6210\uff0c\u5e76\u5305\u542b\u4e00\u4e2a\u6821\u9a8c\u548c\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"cfx:aarc9abycue0hzgyr53m6cxedgccrmybjgh4xg"),"\u3002 \u53ef\u9009\u7684\uff0c\u5730\u5740\u53ef\u4ee5\u5728\u7f51\u7edc\u524d\u7f00\u548c\u8f7d\u8377\u4e4b\u95f4\u5305\u542b\u4e00\u7ec4\u952e\u503c\u5bf9\uff0c\u683c\u5f0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"key.value"),"\uff0c\u4ee5\u5192\u53f7\u5206\u9694\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"),"\u3002"),(0,r.kt)("h4",{id:"\u7f51\u7edc\u524d\u7f00network-prefix"},"\u7f51\u7edc\u524d\u7f00\uff08Network Prefix\uff09"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u7f51\u7edc\u524d\u7f00")," \u662f\u4ee5\u4e0b\u503c\u4e4b\u4e00\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},'"cfx"')," (\u4ee3\u8868\u4e3b\u7f51, \u5bf9\u5e94\u4e8e\u7f51\u7edc ID 1029)\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},'"cfxtest"')," (\u6d4b\u8bd5\u7f51, \u76f8\u5bf9\u5e94\u7f51\u7edcID 1), ",(0,r.kt)("inlineCode",{parentName:"p"},'"net[n]"')," ",(0,r.kt)("inlineCode",{parentName:"p"},"n !=1\uff0c1029")," (\u4ee3\u8868\u79c1\u6709Conflux\u7f51\u7edc)"),(0,r.kt)("p",null,"\u6709\u6548\u7684\u7f51\u7edc\u524d\u7f00\u793a\u4f8b\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},'"cfx"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"cfxtest"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"net17"')),(0,r.kt)("p",null,"\u65e0\u6548\u7684\u7f51\u7edc\u524d\u7f00\u793a\u4f8b\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},'"bch"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"conflux"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"net1"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"net1029"')),(0,r.kt)("h4",{id:"\u5730\u5740\u7c7b\u578baddress-type"},"\u5730\u5740\u7c7b\u578b\uff08Address Type\uff09"),(0,r.kt)("p",null,"\u5730\u5740\u7c7b\u578b\u662f\u4e00\u4e2a\u53ef\u9009\u5b57\u6bb5\uff0c\u4e3a\u5730\u5740\u7c7b\u578b\u63d0\u4f9b\u53ef\u8bfb\u7684\u4fe1\u606f\u3002 \u5bf9\u4e8e\u7a7a\u5730\u5740 (",(0,r.kt)("inlineCode",{parentName:"p"},"0x000000000000000000000000000000000000000000"),"), \u5730\u5740\u7c7b\u578b\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"type. null"),"\u3002 \u5176\u4ed6\u4e3a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x0"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"type.builtin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x1"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"type.user")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x8"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"type.contract"))),(0,r.kt)("h4",{id:"\u8f7d\u8377-payload"},"\u8f7d\u8377 (Payload)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u62fc\u63a5 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u7248\u672c\u5b57\u8282\uff08version-byte\uff09"),":\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u7248\u672c\u5b57\u8282"),"(",(0,r.kt)("inlineCode",{parentName:"li"},"0x00"),") \u4e0e\u5341\u516d\u8fdb\u5236\u5730\u5740\u62fc\u63a5\u8d77\u6765\uff0c\u5f97\u5230\u4e00\u4e2a21\u5b57\u8282\u6570\u7ec4\u3002"),(0,r.kt)("li",{parentName:"ol"},"Base32 \u7f16\u7801\uff1a\u5c06\u4ee5\u4e0a\u7ed3\u679c\u4ece\u5de6\u5230\u53f3\u7f16\u7801\uff0c\u5c06\u6bcf5\u4f4d\u5e8f\u5217\u6620\u5c04\u5230\u5bf9\u5e94\u7684 ASCII \u5b57\u7b26(\u89c1\u4e0b\u6587\u5b57\u6bcd\u8868)\u3002 \u5728\u7ed3\u5c3e\u8865\u96f6\u4f4d\uff08\u5e94\u4e3a2\u4e2a\u96f6\u4f4d\uff09\uff0c\u4ee5\u5b8c\u6210\u672a\u5b8c\u6210\u7684\u4efb\u4f55\u5757\u3002",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"0x00 => a    0x08 => j    0x10 => u    0x18 => 2\n0x01 => b    0x09 => k    0x11 => v    0x19 => 3\n0x02 => c    0x0a => m    0x12 => w    0x1a => 4\n0x03 => d    0x0b => n    0x13 => x    0x1b => 5\n0x04 => e    0x0c => p    0x14 => y    0x1c => 6\n0x05 => f    0x0d => r    0x15 => z    0x1d => 7\n0x06 => g    0x0e => s    0x16 => 0    0x1e => 8\n0x07 => h    0x0f => t    0x17 => 1    0x1f => 9\n")))),(0,r.kt)("h4",{id:"\u6821\u9a8c\u548cchecksum"},"\u6821\u9a8c\u548c(Checksum)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907\u8f93\u5165\u6821\u9a8c\u548c\u8f93\u5165\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," \u88ab\u7528\u4f5c\u6821\u9a8c\u548c\u51fd\u6570\u7684\u8f93\u5165\u3002 It contains:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The lower 5 bits of each character of the ",(0,r.kt)("inlineCode",{parentName:"li"},"network-prefix"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'"cfx..."')," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"0x03, 0x06, 0x18, ...")),(0,r.kt)("li",{parentName:"ul"},"\u5206\u9694\u7b26\uff085\u6bd4\u72790\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"5\u4f4d\u4e00\u7ec4\u5c06\u8f7d\u8377\u5206\u5757\u3002 \u5982\u679c\u9700\u8981\uff0c\u4f7f\u75280\u5728\u8f7d\u8377\u7684\u6700\u53f3\u4fa7\u8fdb\u884c\u586b\u5145\uff0c\u4ee5\u4fbf\u6070\u597d\u5c06\u8f7d\u8377\u5206\u4e3a5\u4f4d1\u7ec4\u3002"),(0,r.kt)("li",{parentName:"ul"},'\u516b\u4e2a\u96f6\u4f5c\u4e3a\u6821\u9a8c\u548c\u7684"\u6a21\u677f"\u3002'))),(0,r.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u6821\u9a8c\u548c\uff1a\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/cashaddr.md#checksum"},"\u6bd4\u7279\u5e01\u73b0\u91d1\u6821\u9a8c\u548c\u7b97\u6cd5"),"\u8ba1\u7b97",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\u7684\u6821\u9a8c\u548c\u3002"),(0,r.kt)("li",{parentName:"ol"},"Base32\u7f16\u7801\uff1a\u6839\u636e ",(0,r.kt)("a",{parentName:"li",href:"#payload"},"Payload-Base32"),"\u7f16\u7801\u4e2d\u7684\u76f8\u540c\u6b65\u9aa4\u7f16\u7801\u8fd4\u56de\u7684 40\u4f4d\u6821\u9a8c\u548c\u3002")),(0,r.kt)("h4",{id:"\u6700\u7ec8\u7ed3\u679c\u548c\u793a\u4f8b"},"\u6700\u7ec8\u7ed3\u679c\u548c\u793a\u4f8b"),(0,r.kt)("p",null,"\u8fde\u63a5\u8fd9\u4e9b\u90e8\u5206\u5c31\u80fd\u83b7\u5f97\u6700\u7ec8\u5730\u5740\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"[network-prefix]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'":"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[payload]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[checksum]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9009\u7684\uff0c\u53ef\u4ee5\u5728\u5176\u4e2d\u5305\u542b",(0,r.kt)("strong",{parentName:"li"},"address-type"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"[network-prefix]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},'":"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[address-type]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},'":"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[payload]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[checksum]"))),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5c55\u793a\u4e86\u7f16\u7801\u5404\u6b65\u9aa4\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'encode(0x1a2f80341409639ea6a35bbcab8299066109aa55, "cfx")\n\n1. address-type: "type.user"\n2. version-byte: 0x00\n3. payload: [0x00, 0x1a, 0x2f, 0x80, 0x34, 0x14, 0x09, 0x63, 0x9e, 0xa6, 0xa3, 0x5b, 0xbc, 0xab, 0x82, 0x99, 0x06, 0x61, 0x09, 0xaa, 0x55]\n   5-bit parts: [0x00, 0x00, 0x0d, 0x02, 0x1f, 0x00, 0x01, 0x14, 0x02, 0x10, 0x04, 0x16, 0x07, 0x07, 0x15, 0x06, 0x14, 0x0d, 0x0d, 0x1b, 0x19, 0x0a, 0x1c, 0x02, 0x13, 0x04, 0x03, 0x06, 0x02, 0x02, 0x0d, 0x0a, 0x0a, 0x14]\n   base32-encoded: "aarc9abycue0hhzgyrr53m6cxedgccrmmy"\n4. checksum input: [0x03, 0x06, 0x18, 0x00, 0x00, 0x00, 0x0d, 0x02, 0x1f, 0x00, 0x01, 0x14, 0x02, 0x10, 0x04, 0x16, 0x07, 0x07, 0x15, 0x06, 0x14, 0x0d, 0x0d, 0x1b, 0x19, 0x0a, 0x1c, 0x02, 0x13, 0x04, 0x03, 0x06, 0x02, 0x02, 0x0d, 0x0a, 0x0a, 0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]\n   checksum output: 688543492710\n   checksum string: "ybjgh4xg"\n5. concatenated result: "cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"\n')),(0,r.kt)("h2",{id:"use-cases-for-base32-and-hex-addresses"},"Use Cases for Base32 and Hex Addresses"),(0,r.kt)("p",null,"The Conflux Core RPC methods only accept base32 address, so Conflux Core SDKs and wallets also use base32 address. Base32 is the most common address format in the Core Space."),(0,r.kt)("p",null,"For Conflux Core Space contract development, Ethereum toolchains are used to compile contracts. So in Solidity smart contract ",(0,r.kt)("inlineCode",{parentName:"p"},".sol")," files, base32 format addresses would bring about compilation errors. If a specific address needs to be hardcoded in the contract code, it should be in hex format. This is the only situation that hex address is used in the Core Space."),(0,r.kt)("h2",{id:"address-format-convert-tool"},"Address Format Convert Tool"),(0,r.kt)("p",null,"ConfluxScan provide a ",(0,r.kt)("a",{parentName:"p",href:"https://www.confluxscan.io/address-converter"},"Online Address Converter")," which is very useful."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93597).Z,width:"1390",height:"815"})))}x.isMDXComponent=!0},93597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scan-address-converter-e7b61efba9861d32121a6e3aba72f821.png"}}]);