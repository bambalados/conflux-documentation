"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3979],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={sidebar_position:2,title:"Ledger"},l=void 0,i={unversionedId:"general/tutorials/wallets/ledger",id:"general/tutorials/wallets/ledger",title:"Ledger",description:"This wallet supports both Core and eSpace",source:"@site/docs/general/tutorials/wallets/ledger.md",sourceDirName:"general/tutorials/wallets",slug:"/general/tutorials/wallets/ledger",permalink:"/docs/general/tutorials/wallets/ledger",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/tutorials/wallets/ledger.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Ledger"},sidebar:"tutorialSidebar",previous:{title:"Fluent",permalink:"/docs/general/tutorials/wallets/fluent"},next:{title:"MetaMask",permalink:"/docs/general/tutorials/wallets/metamask"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Using Ledger on Core Space",id:"using-ledger-on-core-space",level:2},{value:"Before You Start",id:"before-you-start",level:3},{value:"Installation",id:"installation",level:3},{value:"Connecting Your Ledger Device to Fluent",id:"connecting-your-ledger-device-to-fluent",level:3},{value:"Using Ledger: Sending Crypto Assets",id:"using-ledger-sending-crypto-assets",level:3},{value:"Next Steps",id:"next-steps",level:3},{value:"Using Ledger on eSpace",id:"using-ledger-on-espace",level:2},{value:"Before You Start",id:"before-you-start-1",level:3},{value:"Installation",id:"installation-1",level:3},{value:"Setting up MetaMask",id:"setting-up-metamask",level:3},{value:"Connecting Your MetaMask Wallet to Conflux eSpace",id:"connecting-your-metamask-wallet-to-conflux-espace",level:4},{value:"Connecting Your Ledger Device to MetaMask",id:"connecting-your-ledger-device-to-metamask",level:4},{value:"Using Ledger",id:"using-ledger",level:3},{value:"Sending Crypto Assets",id:"sending-crypto-assets",level:4},{value:"Receiving Crypto Assets",id:"receiving-crypto-assets",level:4},{value:"Obtaining CFX",id:"obtaining-cfx",level:4},{value:"Checking Your Balance",id:"checking-your-balance",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This wallet supports both Core and eSpace")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"You can now use your ",(0,o.kt)("strong",{parentName:"p"},"Ledger Nano S")," or ",(0,o.kt)("strong",{parentName:"p"},"Ledger Nano X")," hardware wallet to securely store your assets on both Core and eSpace. In this guide, we will show you how to interact with Conflux using your Ledger device and how to transfer assets."),(0,o.kt)("h2",{id:"using-ledger-on-core-space"},"Using Ledger on Core Space"),(0,o.kt)("h3",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"Before you start, make sure that you have done the following:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-"),"  Initialized your ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true"},"Nano S")," or ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true"},"Nano X")," device."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-"),"  Updated your ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware?docs=true"},"Nano S")," or ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true"},"Nano X")," device to the latest firmware version."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-"),"  Installed ",(0,o.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," and updated it to the latest version."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-"),"  Installed ",(0,o.kt)("a",{parentName:"p",href:"https://fluentwallet.com/"},"Fluent Wallet")," on a compatible desktop browser."),(0,o.kt)("p",null,"If you encounter any issues, find us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Conflux Ledger app is currently available as an ",(0,o.kt)("strong",{parentName:"p"},"unaudited developer release"),". Please use it at your own risk.")),(0,o.kt)("p",null,"You can install the ",(0,o.kt)("strong",{parentName:"p"},"Conflux app")," on your Ledger device by following these steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2."),"  Unlock your device by entering your PIN."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3."),"  Open Ledger Live."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4."),"  Click on the gear icon in the top right corner to open Settings."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5."),'  Go to "Experimental features" and enable "Developer mode".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6."),'  In the menu on the left, click "Manager" to open the Ledger Live app manager.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7."),'  When your Ledger device displays "Allow Ledger manager", press both buttons to continue.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8."),'  Back in Ledger Live, under the "App catalog" tab, enter "Conflux" in the search field.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"9."),'  Once Ledger Live shows the Conflux app, press "Install".'),(0,o.kt)("p",null,"The Conflux app is now installed successfully."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ledger",src:n(1262).Z,width:"2272",height:"1624"})),(0,o.kt)("h3",{id:"connecting-your-ledger-device-to-fluent"},"Connecting Your Ledger Device to Fluent"),(0,o.kt)("p",null,"You can import accounts from your Ledger device into your Fluent wallet by following these steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Quit Ledger Live if it is currently opened."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Unlock your device by entering your PIN."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Navigate to the Conflux app on your device and press both buttons to open it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5."),' In Fluent, open the menu in the top right corner and select "Account Management".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6."),' Click "Add" and select "Hardware Wallet". Read the instructions carefully and click "Ready".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7."),' On the "Connect your Ledger" page, click "Connect".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8."),' A browser popup will appear saying "Fluent wants to connect". Select your Ledger device from the list and click "Connect".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"9."),' After a few seconds, the "Choose Address" page shows up in Fluent. Select one or more accounts that you would like to import to Fluent and click "Import".'),(0,o.kt)("p",null,'Your account is now available in Fluent as "LedgerNanoS-1" (or similar).'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ledger",src:n(4335).Z,width:"2016",height:"1654"})),(0,o.kt)("h3",{id:"using-ledger-sending-crypto-assets"},"Using Ledger: Sending Crypto Assets"),(0,o.kt)("p",null,"Assuming your account on the Ledger device has some CFX tokens, the steps below show how to make a CFX transfer on Conflux."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you do not have CFX, you can purchase at one of the exchanges listed ",(0,o.kt)("a",{parentName:"p",href:"https://123cfx.com/#Exchanges"},"here"),".")),(0,o.kt)("p",null,"Make sure you have already imported your Ledger account into your Fluent wallet by following the steps in the previous section. Quit Ledger Live if it is currently opened."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Unlock your device by entering your PIN."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Conflux app")," on your device and press both buttons to open it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4."),' In Fluent, select your Ledger account (e.g., "LedgerNanoS-1").'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5."),' Click "Send" and enter the recipient address.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6."),' Under "Token and Amount", enter the amount of CFX to transfer and click "Next".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7."),' Double check the transaction details, and click "Confirm".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8."),' Your Ledger device will now show "Review transaction". ',(0,o.kt)("strong",{parentName:"p"},"Carefully review the transaction amount and receipient address")," by repeatedly pressing the right button on your device."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"9."),' If everything looks correct, press both buttons at the "Accept and send" screen to approve the transaction. Otherwise, press both buttons at the "Reject" screen to reject the transaction.'),(0,o.kt)("p",null,'After the transaction has been approved, it is now signed and sent to the Conflux Network. You can see the transaction status in Fluent. If you click on "History", then click on the arrow icon at the top right corner of your transaction, you can see more details on ',(0,o.kt)("a",{parentName:"p",href:"https://confluxscan.io"},"Conflux Scan"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ledger",src:n(6091).Z,width:"2136",height:"1594"})),(0,o.kt)("h3",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"You can learn more about Conflux at ",(0,o.kt)("a",{parentName:"p",href:"https://confluxnetwork.org"},"confluxnetwork.org"),". You can check transaction and account details on ",(0,o.kt)("a",{parentName:"p",href:"https://confluxscan.io"},"Conflux Scan"),"."),(0,o.kt)("p",null,"If you encounter any issues, find us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help."),(0,o.kt)("h2",{id:"using-ledger-on-espace"},"Using Ledger on eSpace"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"The Conflux eSpace Ledger app is not yet available in Ledger Live."))),(0,o.kt)("h3",{id:"before-you-start-1"},"Before You Start"),(0,o.kt)("p",null,"Before you start, make sure that you have done the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initialized your ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true"},"Nano S")," or ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true"},"Nano X")," device."),(0,o.kt)("li",{parentName:"ul"},"Updated your ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware?docs=true"},"Nano S")," or ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true"},"Nano X")," device to the latest firmware version."),(0,o.kt)("li",{parentName:"ul"},"Installed ",(0,o.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," and updated it to the latest version."),(0,o.kt)("li",{parentName:"ul"},"Installed ",(0,o.kt)("a",{parentName:"li",href:"https://MetaMask.io"},"MetaMask")," on a compatible desktop browser.")),(0,o.kt)("p",null,"If you encounter any issues, find us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help."),(0,o.kt)("h3",{id:"installation-1"},"Installation"),(0,o.kt)("p",null,"You can install the ",(0,o.kt)("strong",{parentName:"p"},"Ethereum app")," on your Ledger device by following these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,o.kt)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),(0,o.kt)("li",{parentName:"ol"},"Open Ledger Live."),(0,o.kt)("li",{parentName:"ol"},'In the menu on the left, click "Manager" to open the Ledger Live app manager.'),(0,o.kt)("li",{parentName:"ol"},'When your Ledger device displays "Allow Ledger manager", press both buttons to continue.'),(0,o.kt)("li",{parentName:"ol"},'Back in Ledger Live, under the "App catalog" tab, enter "Ethereum" in the search field.'),(0,o.kt)("li",{parentName:"ol"},'Once Ledger Live shows the Ethereum app, press "Install".'),(0,o.kt)("li",{parentName:"ol"},"The Ethereum app is now installed successfully.")),(0,o.kt)("h3",{id:"setting-up-metamask"},"Setting up MetaMask"),(0,o.kt)("h4",{id:"connecting-your-metamask-wallet-to-conflux-espace"},"Connecting Your MetaMask Wallet to Conflux eSpace"),(0,o.kt)("p",null,"You can add the Conflux eSpace network to your MetaMask wallet by following these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your browser and navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://evmchainlist.org"},"https://evmchainlist.org"),"."),(0,o.kt)("li",{parentName:"ol"},'Search for "Conflux eSpace".'),(0,o.kt)("li",{parentName:"ol"},'Click "Connect Wallet" to allow this site to send requests to MetaMask.'),(0,o.kt)("li",{parentName:"ol"},'Click "Add to MetaMask" under "Conflux eSpace".'),(0,o.kt)("li",{parentName:"ol"},'When MetaMask prompts "Allow this site to add a network?", click "Approve".'),(0,o.kt)("li",{parentName:"ol"},'When MetaMask prompts "Allow this site to switch the network?", click "Approve".')),(0,o.kt)("p",null,"Your MetaMask wallet is now connected to Conflux eSpace. You can switch to other networks anytime through the network selection dropdown menu in MetaMask."),(0,o.kt)("p",null,'Alternatively, you can add Conflux eSpace to MetaMask manually under "Settings", "Networks", "Add Network":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"New RPC URL"),": ",(0,o.kt)("a",{parentName:"li",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chain ID"),": 1030"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block Explorer URL"),": ",(0,o.kt)("a",{parentName:"li",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))),(0,o.kt)("h4",{id:"connecting-your-ledger-device-to-metamask"},"Connecting Your Ledger Device to MetaMask"),(0,o.kt)("p",null,"You can import accounts from your Ledger device into your MetaMask wallet by following these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Quit Ledger Live if it is currently opened."),(0,o.kt)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,o.kt)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the Ethereum app on your device and press both buttons to open it."),(0,o.kt)("li",{parentName:"ol"},'In MetaMask, navigate to "Settings", "Advanced", "Preferred Ledger Connection Type" and choose "WebHID".'),(0,o.kt)("li",{parentName:"ol"},'Open the menu in the top right corner in MetaMask and click "Connect Hardware Wallet".'),(0,o.kt)("li",{parentName:"ol"},'Select "Ledger" and click "Continue".'),(0,o.kt)("li",{parentName:"ol"},'A browser popup will appear saying "MetaMask wants to connect to a HID device". Select your Ledger device from the list and click "Connect".'),(0,o.kt)("li",{parentName:"ol"},'After a few seconds, the "Select an Account" page shows up in MetaMask. Select one or more accounts that you would like to import to MetaMask and click "Unlock".'),(0,o.kt)("li",{parentName:"ol"},'Your account is now visible in MetaMask as "Ledger 1".')),(0,o.kt)("h3",{id:"using-ledger"},"Using Ledger"),(0,o.kt)("h4",{id:"sending-crypto-assets"},"Sending Crypto Assets"),(0,o.kt)("p",null,"Assuming your account on the Ledger device has some CFX tokens, the steps below show how to make a CFX transfer on Conflux eSpace."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: If you do not have CFX, you can purchase at one of the exchanges listed ",(0,o.kt)("a",{parentName:"em",href:"../transferring-funds/from-exchanges"},"here"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure you have already imported your Ledger account into your MetaMask wallet by following the steps in the previous section. Quit Ledger Live if it is currently opened."),(0,o.kt)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,o.kt)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the Ethereum app on your device and press both buttons to open it."),(0,o.kt)("li",{parentName:"ol"},'In MetaMask, select your Ledger account (e.g., "Ledger 1").'),(0,o.kt)("li",{parentName:"ol"},'Click "Send" and enter the recipient address (should start with ',(0,o.kt)("inlineCode",{parentName:"li"},"0x"),")."),(0,o.kt)("li",{parentName:"ol"},'Under "Amount", enter the amount of CFX to transfer and click "Next".'),(0,o.kt)("li",{parentName:"ol"},'Double check the transaction details, and click "Confirm".'),(0,o.kt)("li",{parentName:"ol"},'Your Ledger device will now show "Review transaction". ',(0,o.kt)("strong",{parentName:"li"},"Carefully review the transaction amount and receipient address")," by repeatedly pressing the right button on your device."),(0,o.kt)("li",{parentName:"ol"},'If everything looks correct, press both buttons at the "Accept and send" screen to approve the transaction. Otherwise, press both buttons at the "Reject" screen to reject the transaction.'),(0,o.kt)("li",{parentName:"ol"},'After the transaction has been approved, it is now signed and sent to the Conflux Network. You can see the transaction status in MetaMask. If you click on the transaction and click "View on block explorer", you can see more details on ',(0,o.kt)("a",{parentName:"li",href:"https://evm.confluxscan.io"},"Conflux Scan"),".")),(0,o.kt)("h4",{id:"receiving-crypto-assets"},"Receiving Crypto Assets"),(0,o.kt)("p",null,'In order to receive CFX and ERC20 tokens to your Ledger wallet account, simply copy your address from MetaMask and share it with the sender. You only need to sign transactions using your Ledger device when sending funds, not when receiving them. MetaMask can also provide you with an easy-to-use QR code under "Account details".'),(0,o.kt)("h4",{id:"obtaining-cfx"},"Obtaining CFX"),(0,o.kt)("p",null,"There are multiple ways of obtaining CFX and other tokens on Conflux eSpace."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can obtain CFX and withdraw it to Conflux eSpace through a variety of centralized exchanges (e.g., ",(0,o.kt)("a",{parentName:"li",href:"https://www.kucoin.com"},"KuCoin"),")."),(0,o.kt)("li",{parentName:"ul"},"You can also use a decentralized exchange like ",(0,o.kt)("a",{parentName:"li",href:"https://app.swappi.io/#/swap"},"Swappi"),"."),(0,o.kt)("li",{parentName:"ul"},"Finally, you can also transfer crypto assets from other chains to Conflux eSpace through cross-chain apps like ",(0,o.kt)("a",{parentName:"li",href:"https://app.multichain.org/#/router"},"Multichain"),", ",(0,o.kt)("a",{parentName:"li",href:"https://meson.fi/"},"meson.fi"),", ",(0,o.kt)("a",{parentName:"li",href:"https://cbridge.celer.network/#/transfer"},"cBridge"),", or the ",(0,o.kt)("a",{parentName:"li",href:"https://confluxhub.io/espace-bridge"},"Conflux eSpace Bridge"),".")),(0,o.kt)("h4",{id:"checking-your-balance"},"Checking Your Balance"),(0,o.kt)("p",null,"The easiest way to check your CFX and ERC20 token balances held by your Ledger account is to simply view them in MetaMask."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"conflux-app-in-ledger-live",src:n(236).Z,width:"1664",height:"1644"})),(0,o.kt)("p",null,'Alternatively, you can click on "View Account in Explorer", or navigate to ',(0,o.kt)("a",{parentName:"p",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net")," and manually search for your address to see your token balances and transaction history."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"conflux-app-in-ledger-live",src:n(5063).Z,width:"1664",height:"1184"})))}d.isMDXComponent=!0},4335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-ledger-accounts-in-fluent-0-59146e34f75736c9851e3112f2288b96.jpg"},1262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/conflux-app-in-ledger-live-1621e851c98e720df39966f63d885b05.jpg"},236:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask-view-balance-9e558f0db402afa799f16d678e68c6e1-9e558f0db402afa799f16d678e68c6e1.png"},5063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scan-view-balance-bf5b143069670feb9634e0b31c13296c-bf5b143069670feb9634e0b31c13296c.png"},6091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/send-tx-using-ledger-b9ea17d09195baf480d270dcfdc5bcb5.jpg"}}]);