"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"general/hardforks/v2.0",id:"general/hardforks/v2.0",title:"v2.0",description:"- - -",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/hardforks/v2.0.md",sourceDirName:"general/hardforks",slug:"/general/hardforks/v2.0",permalink:"/es/docs/general/hardforks/v2.0",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{},sidebar:"generalSidebar",previous:{title:"Hard Forks",permalink:"/es/docs/general/hardforks/"},next:{title:"v2.1",permalink:"/es/docs/general/hardforks/v2.1"}},c={},p=[{value:"PoS",id:"pos",level:2},{value:"Conflux eSpace",id:"conflux-espace",level:2},{value:"New Added InternalContracts",id:"new-added-internalcontracts",level:2},{value:"RPC changes",id:"rpc-changes",level:2},{value:"cfx namespace RPC change",id:"cfx-namespace-rpc-change",level:3},{value:"trace RPC breaking change",id:"trace-rpc-breaking-change",level:3},{value:"New added namespace",id:"new-added-namespace",level:3},{value:"eSpace eth RPC",id:"espace-eth-rpc",level:3},{value:"Conflux-rust config file",id:"conflux-rust-config-file",level:2},{value:"Mainnet Upgrade schedule",id:"mainnet-upgrade-schedule",level:2},{value:"Testnet Upgrade schedule",id:"testnet-upgrade-schedule",level:2},{value:"Upgrade CIP list",id:"upgrade-cip-list",level:2},{value:"CIP-43",id:"cip-43",level:3},{value:"CIP-64",id:"cip-64",level:3},{value:"CIP-71",id:"cip-71",level:3},{value:"CIP-76",id:"cip-76",level:3},{value:"CIP-78",id:"cip-78",level:3},{value:"CIP-86",id:"cip-86",level:3},{value:"CIP-90",id:"cip-90",level:3},{value:"CIP-92",id:"cip-92",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"displayed_sidebar: generalSidebar"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"v20"},"v2.0"),(0,r.kt)("p",null,"In the Hydra hardfork (v2.0) Conflux will introduce serveral big upgrades through 8 CIPs (Conflux improvement proposal)."),(0,r.kt)("h2",{id:"pos"},"PoS"),(0,r.kt)("p",null,"Through ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md"},"CIP-43")," Hydra has introduced a PoS system to improve the finality of the whole Network. CFX holders can stake their CFX to PoS to protect high-value transactions and also earn CFX rewards of participating the PoS. For detail information, check ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview"},"PoS Overview")," page."),(0,r.kt)("h2",{id:"conflux-espace"},"Conflux eSpace"),(0,r.kt)("p",null,"The CIP-90 has introduced a new fully EVM-compatible space. The new space is called eSpace, and the current space is called Core Space. The eSpace follows the same rule as EVM and supports eth rpc like eth_getBalance, so the tools (web3.js, ethers.js, hardhat, truffle and so on) from ethereum ecosystem can be used on Conflux directly. Check ",(0,r.kt)("a",{parentName:"p",href:"/conflux-doc/docs/EVM-Space/intro_of_evm_space"},"eSpace documentation")," for more info."),(0,r.kt)("h2",{id:"new-added-internalcontracts"},"New Added InternalContracts"),(0,r.kt)("p",null,"Hydra hardfork has intoduced three new ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/core-space-basics/internal-contracts/"},"InternalContracts"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConfluxContext")," (CIP-64)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PoSRegister")," (CIP-43)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CrossSpaceCall")," (CIP-90)")),(0,r.kt)("h2",{id:"rpc-changes"},"RPC changes"),(0,r.kt)("h3",{id:"cfx-namespace-rpc-change"},"cfx namespace RPC change"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New added methods: ",(0,r.kt)("a",{parentName:"li",href:"/conflux-doc/docs/json_rpc#cfx_getposrewardbyepoch"},(0,r.kt)("inlineCode",{parentName:"a"},"cfx_getPoSRewardByEpoch")),", ",(0,r.kt)("a",{parentName:"li",href:"/conflux-doc/docs/json_rpc#cfx_openedmethodgroups"},(0,r.kt)("inlineCode",{parentName:"a"},"cfx_openedMethodGroups")),", ",(0,r.kt)("a",{parentName:"li",href:"/conflux-doc/docs/json_rpc#cfx_getposeconomics"},(0,r.kt)("inlineCode",{parentName:"a"},"cfx_getPoSEconomics")),"."),(0,r.kt)("li",{parentName:"ul"},"New added EpochNumber tag: ",(0,r.kt)("inlineCode",{parentName:"li"},"latest_finalized")," indicating latest finalized (by PoS) epoch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cfx_getStatus")," reponse have two new field: ",(0,r.kt)("inlineCode",{parentName:"li"},"latestFinalized"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereumSpaceChainId")),(0,r.kt)("li",{parentName:"ul"},"Block header new added field: ",(0,r.kt)("inlineCode",{parentName:"li"},"posReference")," which is the latest pos blockHash when the PoW block is mined."),(0,r.kt)("li",{parentName:"ul"},"Block header's ",(0,r.kt)("inlineCode",{parentName:"li"},"custom")," field's type has changed from array of ",(0,r.kt)("inlineCode",{parentName:"li"},"number array")," to array of ",(0,r.kt)("inlineCode",{parentName:"li"},"hex string"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// before\ncustom: [[1, 2]]\n// after \ncustom: ["0x12"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: CIP-90 will break some block field's verifiability for example: hash")),(0,r.kt)("h3",{id:"trace-rpc-breaking-change"},"trace RPC breaking change"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trace")," RPC methods have some ",(0,r.kt)("a",{parentName:"li",href:"/conflux-doc/docs/RPCs/trace_rpc#v20-trace-breaking-change"},"big changes"))),(0,r.kt)("h3",{id:"new-added-namespace"},"New added namespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/conflux-doc/docs/RPCs/txpool_rpc"},(0,r.kt)("inlineCode",{parentName:"a"},"txpool"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/conflux-doc/docs/RPCs/pos_rpc"},(0,r.kt)("inlineCode",{parentName:"a"},"pos")))),(0,r.kt)("h3",{id:"espace-eth-rpc"},"eSpace eth RPC"),(0,r.kt)("p",null,"The eSpace has introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth")," namespace RPC, check the ",(0,r.kt)("a",{parentName:"p",href:"/conflux-doc/docs/EVM-Space/evm_space_rpc_compatibility"},"RPC compatibility doc")," for details"),(0,r.kt)("h2",{id:"conflux-rust-config-file"},"Conflux-rust config file"),(0,r.kt)("p",null,"The mainnet config file has been renamed from ",(0,r.kt)("inlineCode",{parentName:"p"},"tethys.toml")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.toml"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"bootnodes")," has changed and several options are added:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsonrpc_http_eth_port = 8545")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsonrpc_ws_eth_port = 8546")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'public_evm_rpc_apis = "evm"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"evm_chain_id = 1030"))),(0,r.kt)("h2",{id:"mainnet-upgrade-schedule"},"Mainnet Upgrade schedule"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Conflux client program need to be updated before ",(0,r.kt)("inlineCode",{parentName:"li"},"Epoch Number reaches 36935000")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Block Number reaches 92060600")," (around 10:00 Feb.23th, 2022(GMT+8))"),(0,r.kt)("li",{parentName:"ol"},"The PoS registration start at ",(0,r.kt)("inlineCode",{parentName:"li"},"Block Number 92060600")," (around Feb.23th at 12:00)"),(0,r.kt)("li",{parentName:"ol"},"The PoS registration close at ",(0,r.kt)("inlineCode",{parentName:"li"},"Block Number 92751800")," (around Feb.25th at 12:00)"),(0,r.kt)("li",{parentName:"ol"},"The deadline for adding pos_config is before ",(0,r.kt)("inlineCode",{parentName:"li"},"Epoch Number reaches 37400000")," (around Feb.28th 12:00). Hardfork upgrade completed at this time.")),(0,r.kt)("h2",{id:"testnet-upgrade-schedule"},"Testnet Upgrade schedule"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Conflux client program need to be updated before ",(0,r.kt)("inlineCode",{parentName:"li"},"Epoch Number reaches 55095000")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Block Number reaches 68845000")," (around 10:00 Dec.9th, 2021(GMT+8))"),(0,r.kt)("li",{parentName:"ol"},"The PoS registration start at ",(0,r.kt)("inlineCode",{parentName:"li"},"Block Number 68845000")," (around Dec.9th at 10:00)"),(0,r.kt)("li",{parentName:"ol"},"The PoS registration close at ",(0,r.kt)("inlineCode",{parentName:"li"},"Block Number 69245000")," (around Dec.11 at 18:00)"),(0,r.kt)("li",{parentName:"ol"},"The deadline for adding pos_config is before ",(0,r.kt)("inlineCode",{parentName:"li"},"Epoch Number reaches 55665000")," (around Dec.13th 15:00). Hardfork upgrade completed at this time.")),(0,r.kt)("p",null,"For detail infomation check ",(0,r.kt)("a",{parentName:"p",href:"https://forum.conflux.fun/t/conflux-v2-0-0-testnet-hardfork-upgrade-announcement/12556"},"Conflux v2.0.0-testnet Hardfork Upgrade Announcement")),(0,r.kt)("h2",{id:"upgrade-cip-list"},"Upgrade CIP list"),(0,r.kt)("p",null,"The following is a brief introduction of these CIPs."),(0,r.kt)("h3",{id:"cip-43"},"CIP-43"),(0,r.kt)("p",null,"Detail link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md")),(0,r.kt)("p",null,"In this CIP, we propose introducing finality to the Conflux chain via voting among staked CFX holders. This will increase the confidence of high-value transactions happening on Conflux in the future and protect Conflux against potential 51% attacks from PoW."),(0,r.kt)("h3",{id:"cip-64"},"CIP-64"),(0,r.kt)("p",null,"Detail link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-64.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-64.md")),(0,r.kt)("p",null,"Currently, transactions on Conflux have no direct access to the number of the epoch they are executed in. To maintain EVM compatibility, this CIP introduces a new internal contract that makes this information available to contracts."),(0,r.kt)("h3",{id:"cip-71"},"CIP-71"),(0,r.kt)("p",null,"Detail link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-71.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-71.md")),(0,r.kt)("p",null,"Fully disable the anti-reentrancy for their contract."),(0,r.kt)("h3",{id:"cip-76"},"CIP-76"),(0,r.kt)("p",null,"Detail link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-76.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-76.md")),(0,r.kt)("p",null,"We should remove VM-related constraints in syncing blocks, like requiring the transactions to have enough gas limit."),(0,r.kt)("h3",{id:"cip-78"},"CIP-78"),(0,r.kt)("p",null,"Detail link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-78.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-78.md")),(0,r.kt)("p",null,"Fix incorrect fields in transaction receipt."),(0,r.kt)("h3",{id:"cip-86"},"CIP-86"),(0,r.kt)("p",null,"Detail link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-86.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-86.md")),(0,r.kt)("p",null,"Reduce the period of difficulty adjustment and apply the simple moving average method."),(0,r.kt)("h3",{id:"cip-90"},"CIP-90"),(0,r.kt)("p",null,"Detail link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md")),(0,r.kt)("p",null,"This CIP aims to introduce a new fully EVM-compatible space. The new space is called ",(0,r.kt)("inlineCode",{parentName:"p"},"eSpace"),", and the current space is called ",(0,r.kt)("inlineCode",{parentName:"p"},"Core")," Space. The eSpace follows the same rule as EVM and supports eth rpc like ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getBalance"),", so the tools from ethereum economics can be used on Conflux directly."),(0,r.kt)("h3",{id:"cip-92"},"CIP-92"),(0,r.kt)("p",null,"Detail link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-92.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-92.md")),(0,r.kt)("p",null,"Enable Blake2F builtin function in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-152.md"},"EIP-152"),"."))}u.isMDXComponent=!0}}]);