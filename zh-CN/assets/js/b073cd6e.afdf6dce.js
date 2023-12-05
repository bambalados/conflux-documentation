"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6048],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return t?o.createElement(d,l(l({ref:n},u),{},{components:t})):o.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={sidebar_position:2,title:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165 PoS \uff1f",id:"why_pos",keywords:["pos","why"],displayed_sidebar:"generalSidebar"},l=void 0,s={unversionedId:"general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",id:"general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",title:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165 PoS \uff1f",description:"This is an article written before the Ethereum Merge to explain why Conflux decides to introduce PoS.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/consensus-mechanisms/proof-of-stake/why-pos.md",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-stake",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165 PoS \uff1f",id:"why_pos",keywords:["pos","why"],displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"PoS \u6982\u89c8",permalink:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview"},next:{title:"\u672f\u8bed\u8868",permalink:"/zh-CN/docs/general/conflux-basics/glossary"}},i={},c=[{value:"PoW + PoS \u6df7\u5408\u5171\u8bc6\uff1f",id:"pow--pos-\u6df7\u5408\u5171\u8bc6",level:2}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is an article written before the Ethereum Merge to explain why Conflux decides to introduce PoS.")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u9996\u5148\u89e3\u91ca\u8fd9\u6837\u4e00\u4e2a\u73b0\u5b9e\uff0c\u5373 Conflux \u5728\u76f8\u5f53\u957f\u7684\u4e00\u6bb5\u65f6\u95f4\u5185\u5fc5\u987b\u8003\u8651 51% \u653b\u51fb\u98ce\u9669\uff1a\u7531\u4e8e\u4ee5\u592a\u574a\u7684\u5de8\u5927\u6316\u77ff\u6536\u76ca\u548c\u663e\u5361\u9700\u6c42\u7684\u589e\u52a0\uff0c\u77ff\u5de5\u5df2\u7ecf\u8d2d\u4e70\u4e86\u5927\u91cf\u7684\u663e\u5361\uff0c\u5f62\u6210\u4e86\u5e9e\u5927\u7684\u7b97\u529b\u6c60\u3002"),(0,r.kt)("p",null,"Conflux \u4e5f\u4f7f\u7528\u663e\u5361\u8fdb\u884c\u6316\u77ff\uff0c\u800c\u663e\u5361\u7684\u7b97\u529b\u5728\u7ef4\u62a4 Conflux \u7684\u5b89\u5168\u6027\u65b9\u9762\u4ecd\u7136\u8fdc\u8fdc\u843d\u540e\u4e8e\u4ee5\u592a\u574a\u3002 \u56e0\u6b64\uff0c\u5b58\u5728\u7740\u5927\u91cf\u7684\u663e\u5361\u5728\u77ed\u65f6\u95f4\u5185\u5207\u6362\u5230 Conflux \u6765\u5b8c\u6210 51% \u653b\u51fb\u7684\u98ce\u9669\u3002"),(0,r.kt)("p",null,"\u7c7b\u4f3c\u7684 51% \u653b\u51fb\u98ce\u9669\u4e0d\u4ec5\u5b58\u5728\u4e8e\u5176\u4ed6\u4f7f\u7528\u663e\u5361\u6316\u77ff\u7684 PoW \u516c\u94fe\u4e2d\uff0c\u4e5f\u5b58\u5728\u4e8e\u50cf BCH \u8fd9\u6837\u4f7f\u7528\u4e0e BTC \u76f8\u540c\u7684 ASIC \u6316\u77ff\u4f46\u7b97\u529b\u660e\u663e\u4f4e\u4e8e BTC \u7684\u533a\u5757\u94fe\u4e2d\u3002 \u4e3a\u4e86\u5e94\u5bf9 51% \u653b\u51fb\u98ce\u9669\uff0cBCH \u751a\u81f3\u91c7\u53d6\u4e86\u4e00\u79cd\u201c\u4e0d\u592a\u4f18\u96c5\u201d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u901a\u8fc7\u9650\u5236\u56de\u6eda\u957f\u5ea6\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c\u4e00\u4e2a\u4f7f\u7528 PoW \u7684\u516c\u94fe\u6c38\u8fdc\u65e0\u6cd5\u5b8c\u5168\u6d88\u9664 51% \u653b\u51fb\u7684\u98ce\u9669\u3002 \u5b9e\u8df5\u4e2d\uff0c\u653b\u51fb\u8005\u662f\u5426\u53d1\u52a8 51% \u653b\u51fb\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u51b3\u4e8e\u653b\u51fb\u7684\u6536\u76ca\u548c\u6210\u672c\u3002 \u5c31\u653b\u51fb\u8005\u7684\u6536\u76ca\u800c\u8a00\uff1a\u4e00\u6b21\u6210\u529f\u7684 51% \u653b\u51fb\u4e0d\u4f1a\u635f\u5bb3\u6316\u77ff\u6536\u76ca\u3002 \u653b\u51fb\u8005\u7684\u6536\u76ca\u53ef\u80fd\u4f1a\u56e0\u4e3a\u4e24\u4e2a\u539f\u56e0\u800c\u51cf\u5c11\u3002 \u4e00\u4e2a\u662f\u653b\u51fb\u6210\u529f\u540e\u4ee3\u5e01\u4ef7\u503c\u7684\u5d29\u6e83\u6240\u9020\u6210\u7684\u635f\u5931\uff1b\u53e6\u4e00\u4e2a\u662f\u793e\u533a\u53ef\u80fd\u8fbe\u6210\u5171\u8bc6\uff0c\u901a\u8fc7\u786c\u5206\u53c9\u6765\u56de\u6eda\u72b6\u6001\uff0c\u4ee5\u6d88\u9664\u653b\u51fb\u8005\u7684\u6536\u76ca\u3002 \u4f46\u662f\uff0c\u73b0\u5728\u533a\u5757\u94fe\u5df2\u7ecf\u652f\u6301\u4e86\u591a\u79cd\u94fe\u4e0a\u8d44\u4ea7\uff0c\u5e76\u63d0\u4f9b\u4e86\u8de8\u94fe\u670d\u52a1\uff0c\u6240\u4ee5\u73b0\u5728\u5f88\u96be\u901a\u8fc7\u7b80\u5355\u7684\u786c\u5206\u53c9\u6765\u6d88\u9664\u53cc\u82b1\u653b\u51fb\u9020\u6210\u7684\u5f71\u54cd\uff0c\u8fd9\u4e0e ETC \u4ece ETH \u5206\u53c9\u65f6\u7684\u60c5\u51b5\u6709\u5f88\u5927\u4e0d\u540c\u3002"),(0,r.kt)("p",null,"\u5728\u589e\u52a0 51% \u653b\u51fb\u8005\u7684\u6210\u672c\u65b9\u9762\uff0c\u76ee\u524d\u6709\u4e09\u79cd\u5e94\u5bf9\u65b9\u6848\u53ef\u4f9b\u9009\u62e9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u907f\u5f00\u6240\u6709\u5927\u89c4\u6a21\u7684\u7b97\u529b\u6c60\u3002 \u5177\u4f53\u6765\u8bf4\uff0c\u653e\u5f03\u663e\u5361\u6316\u77ff\uff0c\u6539\u7528\u4e13\u7528\u7684 ASIC \u6316\u77ff\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f Conflux \u7684\u7f51\u7edc\u7b97\u529b\u63a5\u8fd1\u751a\u81f3\u8d85\u8fc7\u4ee5\u592a\u574a\u3002 \u8fd9\u9700\u8981\u5c06 Conflux \u7684\u603b\u6316\u77ff\u6536\u76ca\u63d0\u9ad8\u5230\u4e0e\u4ee5\u592a\u574a\u76f8\u5f53\u7684\u6c34\u5e73\u3002 \u4ee5\u592a\u574a\u76ee\u524d\u7684\u6316\u77ff\u53d1\u884c\u91cf\u5927\u7ea6\u662f\u6bcf 13 \u79d2 2.6 ETH\uff0c\u5e73\u5747\u6bcf\u79d2 0.2 ETH\u3002 \u6309\u7167 3400 \u7f8e\u5143/ETH \u7684\u5e02\u573a\u4ef7\u683c\uff0c\u4ee5\u592a\u574a\u7684\u6316\u77ff\u6536\u76ca\u5927\u7ea6\u662f\u6bcf\u79d2 680 \u7f8e\u5143\uff0c\u6bcf\u5929\u7ea6\u4e3a 58752000 \u7f8e\u5143\u3002 \u8981\u5c06 Conflux \u7684\u6316\u77ff\u6536\u76ca\u63d0\u9ad8\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u9700\u8981\u63d0\u5347\u7ea6 170 \u500d\u3002 \u8fd9\u610f\u5473\u7740\u5c06\u6bcf\u4e2a\u533a\u5757\u7684\u6536\u76ca\u63d0\u9ad8\u5230 340 \u7f8e\u5143\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u4fdd\u6301 1USD/CFX \u7684\u4ef7\u683c\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u6bcf\u4e2a\u533a\u5757\u7684\u5956\u52b1\u63d0\u9ad8\u5230 340 CFX \u4ee5\u4e0a\uff0c\u6216\u8005\u5728\u4fdd\u6301\u4ea7\u91cf\u4e0d\u53d8\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06 CFX \u7684\u5355\u4ef7\u63d0\u9ad8 170 \u500d\u3002 \u8981\u5728\u77ed\u671f\u5185\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u6807\uff0c\u53ef\u80fd\u9700\u8981 Elon Musk \u6bcf\u5468\u751a\u81f3\u6bcf\u5929\u4e3a CFX \u53d1\u4e00\u6761\u63a8\u7279\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165 PoS \u673a\u5236\u6765\u5bf9\u6297 51% \u653b\u51fb\u3002 PoS \u51b3\u7b56\u4f7f\u5f97\u653b\u51fb\u8005\u4ec5\u51ed\u7b97\u529b\u4f18\u52bf\u5c31\u65e0\u6cd5\u5b9e\u73b0\u53cc\u82b1\u653b\u51fb\uff0c\u9664\u975e\u653b\u51fb\u8005\u989d\u5916\u6295\u5165\u8db3\u591f\u7684 CFX \u6765\u5f71\u54cd PoS \u51b3\u7b56\u3002")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e09\u79cd\u65b9\u6848\u4e2d\uff0c\u6211\u4eec\u8ba4\u4e3a\u53ea\u6709\u6700\u540e\u4e00\u79cd\u662f\u771f\u6b63\u53ef\u884c\u7684\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u56e2\u961f\u7684\u6280\u672f\u8def\u7ebf\u56fe\uff0cConflux \u7684\u76ee\u6807\u662f\u5b9e\u73b0\u4e00\u4e2a\u201c\u4eba\u4eba\u90fd\u80fd\u4f7f\u7528\u548c\u8d1f\u62c5\u5f97\u8d77\u7684\u53bb\u4e2d\u5fc3\u5316\u516c\u94fe\u5e73\u53f0\u201d\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u201c\u5177\u6709\u7279\u5b9a PoW \u5171\u8bc6\u534f\u8bae\u7684\u516c\u94fe\u201d\u3002 \u6280\u672f\u624b\u6bb5\u53ea\u662f\u4e3a\u4e86\u670d\u52a1\u4e8e\u76ee\u6807\uff0c\u800c\u4e0d\u662f\u76ee\u6807\u672c\u8eab\u3002 \u51fa\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0c\u5728 Conflux \u73b0\u6709\u7684 PoW \u5171\u8bc6\u673a\u5236\u4e0a\u589e\u52a0 PoS \u6700\u7ec8\u786e\u5b9a\u6027\u51b3\u7b56\uff0c\u4ee5\u63d0\u9ad8\u786e\u8ba4\u901f\u5ea6\u548c\u62b5\u6297\u6f5c\u5728\u7684 51% \u653b\u51fb\uff0c\u662f\u7b26\u5408 Conflux \u7684\u76ee\u6807\u7684\u3002 \u53e6\u5916\uff0c\u4e3a\u4e86\u964d\u4f4e\u589e\u52a0 PoS \u6700\u7ec8\u786e\u5b9a\u6027\u673a\u5236\u7684\u590d\u6742\u5ea6\u548c\u6f5c\u5728\u98ce\u9669\uff0c\u6211\u4eec\u9009\u62e9\u5c06\u4ea4\u6613\u7684\u9009\u62e9\u548c\u6253\u5305\u5b8c\u5168\u4ea4\u7ed9 PoW \u77ff\u5de5\uff0c\u533a\u5757\u7684\u6392\u5e8f\u4ecd\u7136\u9075\u5faa Tree-Graph \u6392\u5e8f\u89c4\u5219\uff0cPoS \u6295\u7968\u53ea\u5bf9 PoW \u77ff\u5de5\u751f\u6210\u7684\u533a\u5757\u7684\u6700\u7ec8\u786e\u5b9a\u6027\u8fdb\u884c\u6295\u7968\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u5bf9 PoW \u548c PoS \u7684\u7406\u89e3\uff0c\u6211\u4eec\u4ece\u672a\u6539\u53d8\uff1aPoW \u66f4\u5b89\u5168\u4f46\u786e\u8ba4\u901f\u5ea6\u8f83\u6162\uff1bPoS \u786e\u8ba4\u901f\u5ea6\u66f4\u5feb\u4f46\u5b89\u5168\u6027\u8f83\u4f4e\u3002 PoW \u548c PoS \u7684\u7ed3\u5408\u6709\u53ef\u80fd\u662f\u4e00\u4e2a\u66f4\u7406\u60f3\u7684\u5171\u8bc6\u534f\u8bae\u3002"),(0,r.kt)("h2",{id:"pow--pos-\u6df7\u5408\u5171\u8bc6"},"PoW + PoS \u6df7\u5408\u5171\u8bc6\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PoW \u5171\u8bc6\u7684\u4f18\u52bf - \u5b89\u5168\u6027\u548c\u53ef\u9760\u6027"),(0,r.kt)("li",{parentName:"ul"},"PoS \u5171\u8bc6\u7684\u4f18\u52bf - \u6548\u7387\uff08\u5feb\u901f\u786e\u8ba4\uff0c\u4f4e\u80fd\u8017\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4e24\u8005\u90fd\u53ef\u4ee5\u5b9e\u73b0\u63a5\u8fd1\u7f51\u7edc\u5bb9\u91cf\u9650\u5236\u7684\u541e\u5410\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fdb\u4e00\u6b65\u6269\u5c55\u9700\u8981\u57fa\u7840\u8bbe\u65bd\u5347\u7ea7\u6216Layer 2\u89e3\u51b3\u65b9\u6848"))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u7ed3\u5408\u4e24\u8005\u7684\u4f18\u52bf\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u5b89\u5168\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u5feb\u901f\u786e\u8ba4"),(0,r.kt)("li",{parentName:"ul"},"\u5408\u7406\u7684\u80fd\u6e90\u6d88\u8017")))))}f.isMDXComponent=!0}}]);