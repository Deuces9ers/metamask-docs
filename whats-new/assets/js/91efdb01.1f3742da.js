"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(v,s(s({ref:t},l),{},{components:r})):n.createElement(v,s({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Access a user's MetaMask provider using metamask-extension-provider.",sidebar_position:12},s="Access a user's MetaMask provider",i={unversionedId:"how-to/access-provider",id:"how-to/access-provider",title:"Access a user's MetaMask provider",description:"Access a user's MetaMask provider using metamask-extension-provider.",source:"@site/wallet/how-to/access-provider.md",sourceDirName:"how-to",slug:"/how-to/access-provider",permalink:"/whats-new/wallet/how-to/access-provider",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/access-provider.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{description:"Access a user's MetaMask provider using metamask-extension-provider.",sidebar_position:12},sidebar:"walletSidebar",previous:{title:"Manage permissions",permalink:"/whats-new/wallet/how-to/manage-permissions"},next:{title:"Onboard users",permalink:"/whats-new/wallet/how-to/onboard-users"}},c={},p=[{value:"Use @metamask/providers",id:"use-metamaskproviders",level:2}],l={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-a-users-metamask-provider"},"Access a user's MetaMask provider"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/providers"},(0,a.kt)("inlineCode",{parentName:"a"},"@metamask/providers"))," module to access a user's\nMetaMask provider from other sources, such as external extension providers and inpage providers."),(0,a.kt)("p",null,"The accounts provided by this provider are the user's MetaMask accounts.\nWhen sending signing requests to this provider, MetaMask prompts the user to sign with their accounts."),(0,a.kt)("p",null,"This module works in Chrome and Firefox."),(0,a.kt)("h2",{id:"use-metamaskproviders"},"Use @metamask/providers"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"@metamask/providers")," using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/providers\n")),(0,a.kt)("p",null,"Initialize the provider using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { initializeProvider } from "@metamask/providers";\n\n// Create a stream to a remote provider\nconst metamaskStream = new LocalMessageDuplexStream({\n    name: "inpage",\n    target: "contentscript",\n});\n\n// Initialize the provider and set it as window.ethereum\ninitializeProvider({\n    connectionStream: metamaskStream,\n});\n')),(0,a.kt)("p",null,"Create an external extension provider using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { createExternalExtensionProvider } from "@metamask/providers";\n\nlet provider = createExternalExtensionProvider();\nconst accounts = await provider.request({ method: "eth_requestAccounts" });\n')))}d.isMDXComponent=!0}}]);