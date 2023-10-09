"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6943],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:2,title:"Node Types"},i="Node Types Overview",l={unversionedId:"general/run-a-node/node-types",id:"general/run-a-node/node-types",title:"Node Types",description:"In the Conflux Network, there are different types of nodes that you can run, each serving different purposes and having different requirements.",source:"@site/docs/general/run-a-node/node-types.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/node-types",permalink:"/zh-CN/docs/general/run-a-node/node-types",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Node Types"},sidebar:"tutorialSidebar",previous:{title:"Downloading the Conflux Client",permalink:"/zh-CN/docs/general/run-a-node/downloading-conflux-client"},next:{title:"Compiling the Conflux Client",permalink:"/zh-CN/docs/general/run-a-node/compiling-conflux-client"}},u={},s=[{value:"Differences Between Node Types",id:"differences-between-node-types",level:2},{value:"Full Node",id:"full-node",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How to Run",id:"how-to-run",level:3},{value:"Archive Node",id:"archive-node",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"How to Run",id:"how-to-run-1",level:3},{value:"Light Node",id:"light-node",level:2},{value:"Requirements",id:"requirements-2",level:3},{value:"How to Run",id:"how-to-run-2",level:3}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-types-overview"},"Node Types Overview"),(0,o.kt)("p",null,"In the Conflux Network, there are different types of nodes that you can run, each serving different purposes and having different requirements.\nThere are 3 types of nodes: Archive Node, Full Node and Light Node. The difference between three types of nodes lies in the amount of data reserved for storage. The Archive Node takes the most and the Light Node takes the least. Of course, more data consumes more hardware resources.\nIn general, if you want to participate in mining, a fullnode will suffice . you need to run an archivenode if you want to use it as RPC service. The lightnode is mainly used as a wallet."),(0,o.kt)("p",null,"Here's a detail on the requirements for running all types of nodes in the Conflux Network, along with the differences between each one. "),(0,o.kt)("h2",{id:"differences-between-node-types"},"Differences Between Node Types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Full Node: Stores the entire blockchain but not all historical states. Suitable for most users and developers. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Archive Node: Stores the entire blockchain and all historical states. Requires significant storage and is suitable for data analysis and applications that need access to the full historical state. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Light Node: Stores only block headers and a small subset of data. Suitable for low-resource devices and provides a way to interact with the network without storing the entire blockchain. "))),(0,o.kt)("h2",{id:"full-node"},"Full Node"),(0,o.kt)("p",null,"A full node stores the entire state of the blockchain, including all blocks and transactions, but not all historical states. "),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A computer with a recent version of Linux or macOS. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"At least 8GB of RAM. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A minimum of 1TB free disk space (SSD is recommended). ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A stable internet connection. "))),(0,o.kt)("h3",{id:"how-to-run"},"How to Run"),(0,o.kt)("p",null,'Follow the steps in the previous tutorial to install and configure the Conflux node, then set the mode parameter in the configuration file to "full": '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mode = "full" \n')),(0,o.kt)("p",null,"Start the node with the custom configuration file, using the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./target/release/conflux --config ./run/hydra.toml \n")),(0,o.kt)("h2",{id:"archive-node"},"Archive Node"),(0,o.kt)("p",null,"An archive node stores the entire state of the blockchain, including all blocks, transactions, and every historical state. It requires more storage than a full node. "),(0,o.kt)("h3",{id:"requirements-1"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A computer with a recent version of Linux or macOS. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"At least 16GB of RAM. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A minimum of 2TB free disk space (SSD is recommended). ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A stable internet connection. "))),(0,o.kt)("h3",{id:"how-to-run-1"},"How to Run"),(0,o.kt)("p",null,'Set the mode parameter in the configuration file to "archive": '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mode = "archive" \n')),(0,o.kt)("p",null,"Start the node with the custom configuration file, using the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./target/release/conflux --config ./run/hydra.toml \n")),(0,o.kt)("h2",{id:"light-node"},"Light Node"),(0,o.kt)("p",null,"A light node only stores the block headers and a small subset of other data, allowing it to verify the authenticity of the data without storing the entire blockchain. "),(0,o.kt)("h3",{id:"requirements-2"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A computer with a recent version of Linux or macOS. "),(0,o.kt)("li",{parentName:"ul"},"At least 4GB of RAM. "),(0,o.kt)("li",{parentName:"ul"},"A minimum of 200GB free disk space (SSD is recommended). "),(0,o.kt)("li",{parentName:"ul"},"A stable internet connection. ")),(0,o.kt)("h3",{id:"how-to-run-2"},"How to Run"),(0,o.kt)("p",null,'Set the mode parameter in the configuration file to "light": '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mode = "light" \n')),(0,o.kt)("p",null,"Start the node with the custom configuration file, using the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./target/release/conflux --config ./run/hydra.toml \n")))}p.isMDXComponent=!0}}]);