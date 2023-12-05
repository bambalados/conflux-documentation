"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[35],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:6,title:"\u914d\u7f6e\u8282\u70b9",displayed_sidebar:"generalSidebar"},a="\u914d\u7f6e\u8282\u70b9",l={unversionedId:"general/run-a-node/node-configuration",id:"general/run-a-node/node-configuration",title:"\u914d\u7f6e\u8282\u70b9",description:"Configuring a Conflux node allows you to tailor its operation to your specific needs and system capabilities.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/node-configuration.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/node-configuration",permalink:"/zh-CN/docs/general/run-a-node/node-configuration",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u914d\u7f6e\u8282\u70b9",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u7f16\u8bd1 Conflux \u8282\u70b9",permalink:"/zh-CN/docs/general/run-a-node/compiling-conflux-client"},next:{title:"\u8282\u70b9\u914d\u7f6e\u6587\u4ef6",permalink:"/zh-CN/docs/general/run-a-node/configuration-files"}},u={},s=[{value:"Step 1: Install Conflux Node",id:"step-1-install-conflux-node",level:2},{value:"Step 2: Locate Configuration File",id:"step-2-locate-configuration-file",level:2},{value:"Step 3: Create a Custom Configuration File",id:"step-3-create-a-custom-configuration-file",level:2},{value:"Step 4: Edit the Configuration File",id:"step-4-edit-the-configuration-file",level:2},{value:"Step 5: Start the Node with the Custom Configuration",id:"step-5-start-the-node-with-the-custom-configuration",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u914d\u7f6e\u8282\u70b9"},"\u914d\u7f6e\u8282\u70b9"),(0,r.kt)("p",null,"Configuring a Conflux node allows you to tailor its operation to your specific needs and system capabilities."),(0,r.kt)("p",null,"Here's a step-by-step guide to configuring a Conflux node."),(0,r.kt)("h2",{id:"step-1-install-conflux-node"},"Step 1: Install Conflux Node"),(0,r.kt)("p",null,"If you haven't already installed the Conflux node, please refer to the previous tutorial on how to run a Conflux network node for installation instructions."),(0,r.kt)("h2",{id:"step-2-locate-configuration-file"},"Step 2: Locate Configuration File"),(0,r.kt)("p",null,"Conflux provides a sample configuration file that you can use as a starting point. This file is usually named hydra.toml or similar, depending on the network version. You'll find it in the run directory of the Conflux repository."),(0,r.kt)("h2",{id:"step-3-create-a-custom-configuration-file"},"Step 3: Create a Custom Configuration File"),(0,r.kt)("p",null,"Copy the sample configuration file to a new file that you'll edit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp ./run/hydra.toml ./run/hydra.toml \n")),(0,r.kt)("h2",{id:"step-4-edit-the-configuration-file"},"Step 4: Edit the Configuration File"),(0,r.kt)("p",null,"Open the custom configuration file in a text editor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano ./run/hydra.toml \n")),(0,r.kt)("p",null,"Here are some common parameters you might want to configure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mode: Defines the synchronization mode. Options include "full" for a full node, "archive" for an archive node, and "light" for a light node. \n\nnet_conf/listen_ip: The IP address that the node will listen on. Default is "0.0.0.0", meaning it will listen on all available network interfaces. \n\nnet_conf/listen_port: The port number that the node will listen on. Default is 32323. \n\nnet_conf/public_address: If your node is behind a NAT, you can set this to the public IP address and port that other nodes can use to connect to your node. \n\nstorage/data: The directory where the blockchain data will be stored. \n\nmining/miner_author: The address that mining rewards will be sent to if you are mining. \n\nmining/stratum_listen_address: If you are running a mining pool, this sets the address that the stratum server will listen on. \n\nlog_conf: Path to the log configuration file. \n\njsonrpc_local_http_port: Port for the local JSON-RPC HTTP service. \n\njsonrpc_public_http_port: Port for the public JSON-RPC HTTP service. \n\n')),(0,r.kt)("p",null,"Edit these and any other parameters as needed, then save and exit the file."),(0,r.kt)("h2",{id:"step-5-start-the-node-with-the-custom-configuration"},"Step 5: Start the Node with the Custom Configuration"),(0,r.kt)("p",null,"Start the Conflux node using the custom configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./target/release/conflux --config ./run/hydra.toml \n")))}p.isMDXComponent=!0}}]);