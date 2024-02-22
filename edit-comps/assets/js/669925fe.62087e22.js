"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:9,description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",tags:["JavaScript SDK"]},i="Make read-only requests",s={unversionedId:"how-to/make-read-only-requests",id:"how-to/make-read-only-requests",title:"Make read-only requests",description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",source:"@site/wallet/how-to/make-read-only-requests.md",sourceDirName:"how-to",slug:"/how-to/make-read-only-requests",permalink:"/edit-comps/wallet/how-to/make-read-only-requests",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/make-read-only-requests.md",tags:[{label:"JavaScript SDK",permalink:"/edit-comps/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Add a network",permalink:"/edit-comps/wallet/how-to/add-network"},next:{title:"Batch JSON-RPC requests",permalink:"/edit-comps/wallet/how-to/batch-json-rpc-requests"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use the Infura API",id:"use-the-infura-api",level:2},{value:"Use custom nodes",id:"use-custom-nodes",level:2},{value:"Use the Infura API and custom nodes",id:"use-the-infura-api-and-custom-nodes",level:2},{value:"Example",id:"example",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"make-read-only-requests"},"Make read-only requests"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/"},"Infura API")," from your dapp with\n",(0,r.kt)("a",{parentName:"p",href:"/edit-comps/wallet/concepts/sdk/"},"MetaMask SDK")," installed to make direct, read-only JSON-RPC requests."),(0,r.kt)("p",null,"Direct, read-only JSON-RPC requests are blockchain requests that do not require user wallet interaction.\nYour dapp can directly call most ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API methods"),", bypassing\nuser wallet authentication for read-only operations."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your dapp cannot directly call the following RPC methods, which require user wallet interaction:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_requestAccounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_sendTransaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_signTransaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_sign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"personal_sign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wallet_watchAsset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wallet_addEthereumChain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wallet_switchEthereumChain")))),(0,r.kt)("p",null,"Configure your dapp to make read-only requests using the ",(0,r.kt)("a",{parentName:"p",href:"#use-the-infura-api"},"Infura API"),",\n",(0,r.kt)("a",{parentName:"p",href:"#use-custom-nodes"},"custom nodes"),", or ",(0,r.kt)("a",{parentName:"p",href:"#use-the-infura-api-and-custom-nodes"},"both"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An Infura API key.\nCreate one by following the first two steps in the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/getting-started"},"Infura getting started guide"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"An allowlist configured for your API key.")),(0,r.kt)("admonition",{parentName:"li",title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Your API key, when used with the SDK, is vulnerable to exposure.\nIf someone inspects your dapp's code, they can potentially retrieve your API key and submit\nrequests to Infura, impersonating your account."),(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"allowlists"),"\nto protect against this vulnerability.\nYou can restrict interactions with your API key to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/edit-comps/wallet/how-to/use-sdk/javascript/"},"MetaMask SDK set up")," in your JavaScript dapp."))),(0,r.kt)("h2",{id:"use-the-infura-api"},"Use the Infura API"),(0,r.kt)("p",null,"To use the Infura API to make read-only requests, specify your Infura API key using the\n",(0,r.kt)("a",{parentName:"p",href:"/edit-comps/wallet/reference/sdk-js-options#infuraapikey"},(0,r.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," option when instantiating the SDK\nin your dapp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'infuraAPIKey: "YOUR-API-KEY"\n')),(0,r.kt)("h2",{id:"use-custom-nodes"},"Use custom nodes"),(0,r.kt)("p",null,"To use your own node (for example, with ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat"),") to make read-only requests,\nspecify your node's chain ID and RPC URL using the\n",(0,r.kt)("a",{parentName:"p",href:"/edit-comps/wallet/reference/sdk-js-options#readonlyrpcmap"},(0,r.kt)("inlineCode",{parentName:"a"},"readonlyRPCMap"))," option when instantiating the\nSDK in your dapp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'readonlyRPCMap: {\n  "0x539": "http://localhost:8545",\n}\n')),(0,r.kt)("p",null,"In this example, chain ID ",(0,r.kt)("inlineCode",{parentName:"p"},"0x539")," maps to the custom node's RPC URL."),(0,r.kt)("h2",{id:"use-the-infura-api-and-custom-nodes"},"Use the Infura API and custom nodes"),(0,r.kt)("p",null,"You can use both the Infura API and custom nodes to make read-only requests by specifying both the\n",(0,r.kt)("a",{parentName:"p",href:"/edit-comps/wallet/reference/sdk-js-options#infuraapikey"},(0,r.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/edit-comps/wallet/reference/sdk-js-options#readonlyrpcmap"},(0,r.kt)("inlineCode",{parentName:"a"},"readonlyRPCMap"))," options when instantiating the\nSDK in your dapp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'sdkOptions={{\n    infuraAPIKey: "YOUR-API-KEY",\n    readonlyRPCMap: {\n        "0x539": "http://localhost:8545",\n    },\n    // Other options\n}}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"infuraAPIKey")," provides access to various networks supported by Infura, and ",(0,r.kt)("inlineCode",{parentName:"p"},"readonlyRPCMap"),"\nprovides access to custom nodes.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"readonlyRPCMap")," values override Infura networks in case of a conflict."),(0,r.kt)("p",null,"Refer to the SDK's\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/blob/dd9a3aaa1b5afa208cdb0d0768916d15b8638b25/packages/sdk/src/services/MetaMaskSDK/InitializerManager/setupInfuraProvider.ts#L12"},"default RPC URLs map"),"\nto see how Infura networks are configured by default.\nBy defining your own ",(0,r.kt)("inlineCode",{parentName:"p"},"readonlyRPCMap"),", you can override these defaults or add support for other networks."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following is an example of using both the Infura API and custom nodes with the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'sdkOptions={{\n    infuraAPIKey: "YOUR-API-KEY",\n    readonlyRPCMap: {\n        // Custom node\n        "0x539": "http://localhost:8545",\n        // Override Infura Mainnet\n        "0x1": "https://mainnet.infura.io/v3/YOUR-API-KEY",\n    },\n    defaultReadOnlyChainId: "0x1",\n    // Other options\n}\n')),(0,r.kt)("p",null,"In this example, read-only requests to Mainnet (chain ID ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1"),") use the Infura API, while read-only\nrequests to the local testnet (chain ID ",(0,r.kt)("inlineCode",{parentName:"p"},"0x539"),") use the custom node.\n",(0,r.kt)("a",{parentName:"p",href:"/edit-comps/wallet/reference/sdk-js-options#defaultreadonlychainid"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultReadOnlyChainId"))," enables making\nread-only requests before the user connects to MetaMask, and specifies to make those requests to Mainnet."))}c.isMDXComponent=!0}}]);