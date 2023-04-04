"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(r),h=n,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,title:"Node Setup"},i=void 0,p={unversionedId:"espace/build/resources/graph/setup-graph-node",id:"espace/build/resources/graph/setup-graph-node",title:"Node Setup",description:"Graph Node is the component which indexes subgraphs, and makes the resulting data available to query via a GraphQL API. As such it is central to the indexer stack, and correct operation of Graph Node is crucial to running a successful indexer.",source:"@site/docs/espace/build/resources/graph/setup-graph-node.md",sourceDirName:"espace/build/resources/graph",slug:"/espace/build/resources/graph/setup-graph-node",permalink:"/docs/espace/build/resources/graph/setup-graph-node",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/espace/build/resources/graph/setup-graph-node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Node Setup"},sidebar:"tutorialSidebar",previous:{title:"The Graph",permalink:"/docs/category/the-graph"},next:{title:"Creating Subgraphs",permalink:"/docs/espace/build/resources/graph/create-subgraphs"}},l={},s=[{value:"Graph Node",id:"graph-node",level:2},{value:"PostgreSQL database",id:"postgresql-database",level:3},{value:"Network clients",id:"network-clients",level:3},{value:"IPFS Nodes",id:"ipfs-nodes",level:3},{value:"Getting started from source",id:"getting-started-from-source",level:3},{value:"Install prerequisites",id:"install-prerequisites",level:3},{value:"Setup",id:"setup",level:3},{value:"Getting started using Docker",id:"getting-started-using-docker",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup",id:"setup-1",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Graph Node is the component which indexes subgraphs, and makes the resulting data available to query via a GraphQL API. As such it is central to the indexer stack, and correct operation of Graph Node is crucial to running a successful indexer."),(0,n.kt)("p",null,"This provides a contextual overview of Graph Node, and some of the more advanced options available to indexers. Detailed documentation and instructions can be found in the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphprotocol/graph-node"},"Graph Node repository"),"."),(0,n.kt)("h2",{id:"graph-node"},"Graph Node"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphprotocol/graph-node"},"Graph Node"),"\xa0is the reference implementation for indexing Subgraphs on The Graph Network, connecting to blockchain clients, indexing subgraphs and making indexed data available to query."),(0,n.kt)("p",null,"Graph Node (and the whole indexer stack) can be run on bare metal, or in a cloud environment. This flexibility of the central indexing component is crucial to the robustness of The Graph Protocol. Similarly, Graph Node can be\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphprotocol/graph-node"},"built from source"),", or indexers can use one of the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/graphprotocol/graph-node"},"provided Docker Images"),"."),(0,n.kt)("h3",{id:"postgresql-database"},"PostgreSQL database"),(0,n.kt)("p",null,"The main store for the Graph Node, this is where subgraph data is stored, as well as metadata about subgraphs, and subgraph-agnostic network data such as the block cache, and eth_call cache."),(0,n.kt)("h3",{id:"network-clients"},"Network clients"),(0,n.kt)("p",null,"In order to index a network, Graph Node needs access to a network client via an EVM-compatible JSON-RPC API. This RPC may connect to a single client or it could be a more complex setup that load balances across multiple."),(0,n.kt)("p",null,"While some subgraphs may just require a full node, some may have indexing features which require additional RPC functionality. Specifically subgraphs which make\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"eth_calls"),"\xa0as part of indexing will require an archive node which supports\xa0",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1898"},"EIP-1898"),", and subgraphs with\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"callHandlers"),", or\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"blockHandlers"),"\xa0with a\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"call"),"\xa0filter, require\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"trace_filter"),"\xa0support (",(0,n.kt)("a",{parentName:"p",href:"https://openethereum.github.io/JSONRPC-trace-module"},"see trace module documentation here"),")."),(0,n.kt)("h3",{id:"ipfs-nodes"},"IPFS Nodes"),(0,n.kt)("p",null,"Subgraph deployment metadata is stored on the IPFS network. The Graph Node primarily accesses the IPFS node during subgraph deployment to fetch the subgraph manifest and all linked files. Network indexers do not need to host their own IPFS node. An IPFS node for the network is hosted at\xa0",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.network.thegraph.com/"},"https://ipfs.network.thegraph.com"),"."),(0,n.kt)("h3",{id:"getting-started-from-source"},"Getting started from source"),(0,n.kt)("h3",{id:"install-prerequisites"},"Install prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rust")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PostgreSQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IPFS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Additional Requirements for Ubuntu users"),"\xa0- To run a Graph Node on Ubuntu a few additional packages may be needed.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"sudo apt-get install -y clang libpg-dev libssl-dev pkg-config")),(0,n.kt)("h3",{id:"setup"},"Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Start a PostgreSQL database server")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"initdb -D .postgres\npg_ctl -D .postgres -l logfile start\ncreatedb graph-node")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Clone\xa0",(0,n.kt)("a",{parentName:"li",href:"https://github.com/graphprotocol/graph-node"},"Graph Node"),"\xa0repo and build the source by running\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"cargo build")),(0,n.kt)("li",{parentName:"ol"},"Now that all the dependencies are setup, start the Graph Node:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"cargo run -p graph-node --release -- \\\n  --postgres-url postgresql://[USERNAME]:[PASSWORD]@localhost:5432/graph-node \\\n  --ethereum-rpc [NETWORK_NAME]:[URL] \\\n  --ipfs https://ipfs.network.thegraph.com")),(0,n.kt)("h3",{id:"getting-started-using-docker"},"Getting started using Docker"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ethereum node"),"\xa0- By default, the docker compose setup will use mainnet:\xa0",(0,n.kt)("a",{parentName:"li",href:"http://host.docker.internal:8545/"},"http://host.docker.internal:8545"),"\xa0to connect to the Ethereum node on your host machine. You can replace this network name and url by updating\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),".")),(0,n.kt)("h3",{id:"setup-1"},"Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Clone Graph Node and navigate to the Docker directory:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"git clone http://github.com/graphprotocol/graph-node\ncd graph-node/docker")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"For linux users only - Use the host IP address instead of\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"host.docker.internal"),"\xa0in the\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),"using the included script:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"./setup.sh")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Start a local Graph Node that will connect to your Ethereum endpoint:")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose up")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"References"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/en/operating-graph-node/"},"https://thegraph.com/docs/en/operating-graph-node/")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/graphprotocol/graph-node/"},"https://hub.docker.com/r/graphprotocol/graph-node/")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pranavdaa/Graph-Node-Local"},"https://github.com/pranavdaa/Graph-Node-Local")))}u.isMDXComponent=!0}}]);