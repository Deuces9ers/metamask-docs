"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3899],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),y=a,d=l["".concat(o,".").concat(y)]||l[y]||g[y]||i;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=y;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},60527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={},s="Variable: KeyringAccountStruct",c={unversionedId:"reference/keyring-api/variables/KeyringAccountStruct",id:"reference/keyring-api/variables/KeyringAccountStruct",title:"Variable: KeyringAccountStruct",description:"Source",source:"@site/snaps/reference/keyring-api/variables/KeyringAccountStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/KeyringAccountStruct",permalink:"/add-metametrics/snaps/reference/keyring-api/variables/KeyringAccountStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/KeyringAccountStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Type alias: SubmitRequestResponse",permalink:"/add-metametrics/snaps/reference/keyring-api/type-aliases/SubmitRequestResponse"},next:{title:"Variable: KeyringJsonRpcRequestStruct",permalink:"/add-metametrics/snaps/reference/keyring-api/variables/KeyringJsonRpcRequestStruct"}},o={},p=[{value:"Source",id:"source",level:2}],u={toc:p},l="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-keyringaccountstruct"},"Variable: KeyringAccountStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const KeyringAccountStruct: Struct<{\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record<string, Json>;\n  supportedMethods: (\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n  }, {\n  address: Struct<string, null>;\n  id: Struct<string, null>;\n  name: Struct<string, null>;\n  options: Struct<null | Record<string, Json>, null>;\n  supportedMethods: Struct<(\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4")[], Struct<\n     | "personal_sign"\n     | "eth_sendTransaction"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v2"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4", {\n     eth_sendTransaction: "eth_sendTransaction";\n     eth_sign: "eth_sign";\n     eth_signTransaction: "eth_signTransaction";\n     eth_signTypedData: "eth_signTypedData";\n     eth_signTypedData_v1: "eth_signTypedData_v1";\n     eth_signTypedData_v2: "eth_signTypedData_v2";\n     eth_signTypedData_v3: "eth_signTypedData_v3";\n     eth_signTypedData_v4: "eth_signTypedData_v4";\n     personal_sign: "personal_sign";\n  }>>;\n  type: Struct<"eip155:eoa" | "eip155:erc4337", {\n     eip155:eoa: "eip155:eoa";\n     eip155:erc4337: "eip155:erc4337";\n  }>;\n  }>;\n')),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-api.ts#L16"},"external/keyring-api/src/keyring-api.ts:16")))}g.isMDXComponent=!0}}]);