"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"Android",sidebar_position:2,toc_max_heading_level:4},o="Use MetaMask SDK with Android",l={unversionedId:"how-to/connect/set-up-sdk/mobile/android",id:"how-to/connect/set-up-sdk/mobile/android",title:"Use MetaMask SDK with Android",description:"You can import MetaMask SDK into your native Android dapp to enable",source:"@site/wallet/how-to/connect/set-up-sdk/mobile/android.md",sourceDirName:"how-to/connect/set-up-sdk/mobile",slug:"/how-to/connect/set-up-sdk/mobile/android",permalink:"/cm/snap-get-locale/wallet/how-to/connect/set-up-sdk/mobile/android",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/mobile/android.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Android",sidebar_position:2,toc_max_heading_level:4},sidebar:"walletSidebar",previous:{title:"iOS",permalink:"/cm/snap-get-locale/wallet/how-to/connect/set-up-sdk/mobile/ios"},next:{title:"Detect MetaMask",permalink:"/cm/snap-get-locale/wallet/how-to/connect/detect-metamask"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Set up your project",id:"2-set-up-your-project",level:3},{value:"2.1. Set up Gradle",id:"21-set-up-gradle",level:4},{value:"2.2. Inject ViewModel dependencies",id:"22-inject-viewmodel-dependencies",level:4},{value:"2.3. Set up an application class",id:"23-set-up-an-application-class",level:4},{value:"2.4. Add @AndroidEntryPoint",id:"24-add-androidentrypoint",level:4},{value:"3. Import the SDK",id:"3-import-the-sdk",level:3},{value:"4. Connect your dapp",id:"4-connect-your-dapp",level:3},{value:"5. Call provider methods",id:"5-call-provider-methods",level:3},{value:"Example: Get chain ID",id:"example-get-chain-id",level:4},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Sign message",id:"example-sign-message",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4},{value:"Example: Switch chain",id:"example-switch-chain",level:4}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-android"},"Use MetaMask SDK with Android"),(0,r.kt)("p",null,"You can import ",(0,r.kt)("a",{parentName:"p",href:"/cm/snap-get-locale/wallet/concepts/sdk"},"MetaMask SDK")," into your native Android dapp to enable\nyour users to easily connect with their MetaMask Mobile wallet."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp source code"),"\nfor examples on how to use the SDK to make Ethereum requests.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MetaMask Mobile version 7.6.0 or above installed on your target device (that is, a physical\ndevice or emulator)"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can install MetaMask Mobile from ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=io.metamask"},"Google Play"),",\nor clone and compile MetaMask Mobile from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-mobile"},"source"),"\nand build to your target device."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android SDK version 23 or above"))),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"To add the SDK from Maven Central as a dependency to your project, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.gradle")," file,\nadd the following entry to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n  implementation 'io.metamask.androidsdk:metamask-android-sdk:0.1.2'\n}\n")),(0,r.kt)("p",null,"Then, sync your project with the Gradle settings.\nOnce the syncing completes, you can set up the rest of your project."),(0,r.kt)("h3",{id:"2-set-up-your-project"},"2. Set up your project"),(0,r.kt)("h4",{id:"21-set-up-gradle"},"2.1. Set up Gradle"),(0,r.kt)("p",null,"The SDK uses Hilt for Dagger dependency injection, so you must add the corresponding dependencies to\nyour Gradle files."),(0,r.kt)("p",null,"Add the following to your project's root ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle"',title:'"build.gradle"'},"buildscript {\n    // other setup here\n    ext {\n        hilt_version = '2.43.2'\n    }\n    dependencies {\n        classpath \"com.google.dagger:hilt-android-gradle-plugin:$hilt_version\"\n    }\n}\nplugins {\n    // other setup here\n    id 'com.google.dagger.hilt.android' version \"$hilt_version\" apply false\n}\n")),(0,r.kt)("p",null,"Add the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.gradle")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="app/build.gradle"',title:'"app/build.gradle"'},"plugins {\n    id 'kotlin-kapt'\n    id 'dagger.hilt.android.plugin'\n}\n\ndependencies {\n    // dagger-hilt\n    implementation \"com.google.dagger:hilt-android:$hilt_version\"\n    kapt \"com.google.dagger:hilt-compiler:$hilt_version\"\n\n    // viewmodel-related\n    implementation 'androidx.lifecycle:lifecycle-viewmodel-compose:2.6.1'\n    implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.6.1'\n}\n")),(0,r.kt)("h4",{id:"22-inject-viewmodel-dependencies"},"2.2. Inject ViewModel dependencies"),(0,r.kt)("p",null,"The SDK uses Hilt dependency injections, so you must create a module defining an Ethereum ViewModel injection.\nThis is a single instance that is shared across various view models and survives configuration changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ViewModelModule.kt"',title:'"ViewModelModule.kt"'},"import dagger.Module\nimport dagger.Provides\nimport dagger.hilt.InstallIn\nimport dagger.hilt.components.SingletonComponent\nimport io.metamask.androidsdk.ApplicationRepository\nimport io.metamask.androidsdk.EthereumViewModel\nimport javax.inject.Singleton\n\n@Module\n@InstallIn(SingletonComponent::class)\nobject EthereumViewModelModule {\n\n    @Provides\n    @Singleton\n    fun provideEthereumViewModel(repository: ApplicationRepository): EthereumViewModel {\n        return EthereumViewModel(repository)\n    }\n}\n")),(0,r.kt)("h4",{id:"23-set-up-an-application-class"},"2.3. Set up an application class"),(0,r.kt)("p",null,"If you don't have an application class, you must create one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MetaMaskDappApplication.kt"',title:'"MetaMaskDappApplication.kt"'},"import android.app.Application\nimport dagger.hilt.android.HiltAndroidApp\n\n@HiltAndroidApp\nclass DappApplication : Application() {}\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file, update ",(0,r.kt)("inlineCode",{parentName:"p"},"android:name")," to this application class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="AndroidManifest.xml"',title:'"AndroidManifest.xml"'},'<manifest>\n    <application\n        android:name=".DappApplication"\n        ...\n    </application>\n</manifest>\n')),(0,r.kt)("h4",{id:"24-add-androidentrypoint"},"2.4. Add @AndroidEntryPoint"),(0,r.kt)("p",null,"If you need to inject your dependencies in an activity, you must add ",(0,r.kt)("inlineCode",{parentName:"p"},"@AndroidEntryPoint")," to your\nactivity class.\nHowever, if you need to inject your dependencies in a fragment, you must add ",(0,r.kt)("inlineCode",{parentName:"p"},"@AndroidEntryPoint")," to\nboth the fragment and the activity that hosts the fragment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MainActivity.kt"',title:'"MainActivity.kt"'},"@AndroidEntryPoint\nclass MainActivity : ComponentActivity() {\n   // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="LoginFragment.kt"',title:'"LoginFragment.kt"'},"@AndroidEntryPoint\nclass LoginFragment : Fragment() {\n   // ...\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example dapp")," for more\ndetails on how to set up a Jetpack Compose project to work with the SDK.")),(0,r.kt)("h3",{id:"3-import-the-sdk"},"3. Import the SDK"),(0,r.kt)("p",null,"Import the SDK by adding the following line to the top of your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import io.metamask.androidsdk.EthereumViewModel\n")),(0,r.kt)("h3",{id:"4-connect-your-dapp"},"4. Connect your dapp"),(0,r.kt)("p",null,"Connect your dapp to MetaMask by adding the following code to your project file.\nThe Ethereum module requires the app context, so you must instantiate it from an activity or a\nmodule that injects a context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MainActivity.kt"',title:'"MainActivity.kt"'},'// MainActivity\n\n// Obtain EthereumViewModel using viewModels()\nval ethereumViewModel: EthereumViewModel by viewModels()\n\nval dapp = Dapp(name: "Droid Dapp", url: "https://droiddapp.com")\n\n// This is the same as calling "eth_requestAccounts"\nethereumViewModel.connect(dapp) { result ->\n    if (result is RequestError) {\n        Log.e(TAG, "Ethereum connection error: ${result.message}")\n    } else {\n        Logger.d(TAG, "Ethereum connection result: $result")\n    }\n}\n')),(0,r.kt)("p",null,"By default, MetaMask logs three SDK events: ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"connected"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnected"),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereumViewModel.enableDebug = false"),"."),(0,r.kt)("h3",{id:"5-call-provider-methods"},"5. Call provider methods"),(0,r.kt)("p",null,"You can now call any ",(0,r.kt)("a",{parentName:"p",href:"/cm/snap-get-locale/wallet/reference/provider-api"},"provider API method"),"."),(0,r.kt)("p",null,"The following examples use the\n",(0,r.kt)("a",{parentName:"p",href:"/cm/snap-get-locale/wallet/reference/provider-api#windowethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nprovider API method to call various ",(0,r.kt)("a",{parentName:"p",href:"/cm/snap-get-locale/wallet/concepts/apis#json-rpc-api"},"RPC API")," methods."),(0,r.kt)("h4",{id:"example-get-chain-id"},"Example: Get chain ID"),(0,r.kt)("p",null,"The following example gets the user's chain ID by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_chainId"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_chainId")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'var chainId: String? = null\n\nval chainIdRequest = EthereumRequest(EthereumMethod.ETH_CHAIN_ID.value) // or EthereumRequest("eth_chainId")\n\nethereumViewModel.sendRequest(chainIdRequest) { result ->\n    if (result is RequestError) {\n        // handle error\n    } else {\n        chainId = result\n    }\n}\n')),(0,r.kt)("h4",{id:"example-get-account-balance"},"Example: Get account balance"),(0,r.kt)("p",null,"The following example gets the user's account balance by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_getBalance"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBalance")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'var balance: String? = null\n\n// Create parameters\nval params: List<String> = listOf(\n    ethereumViewModel.selectedAddress,\n    "latest" // "latest", "earliest" or "pending" (optional)\n    )\n\n// Create request\nlet getBalanceRequest = EthereumRequest(\n    EthereumMethod.ETHGETBALANCE.value,\n    params)\n\n// Make request\nethereumViewModel.sendRequest(getBalanceRequest) { result ->\n    if (result is RequestError) {\n        // handle error\n    } else {\n        balance = result\n    }\n}\n')),(0,r.kt)("h4",{id:"example-sign-message"},"Example: Sign message"),(0,r.kt)("p",null,"The following example requests the user sign a message by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_signTypedData_v4"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val message = "{\\"domain\\":{\\"chainId\\":\\"${ethereumViewModel.chainId}\\",\\"name\\":\\"Ether Mail\\",\\"verifyingContract\\":\\"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC\\",\\"version\\":\\"1\\"},\\"message\\":{\\"contents\\":\\"Hello, Busa!\\",\\"from\\":{\\"name\\":\\"Kinno\\",\\"wallets\\":[\\"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826\\",\\"0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF\\"]},\\"to\\":[{\\"name\\":\\"Busa\\",\\"wallets\\":[\\"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB\\",\\"0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57\\",\\"0xB0B0b0b0b0b0B000000000000000000000000000\\"]}]},\\"primaryType\\":\\"Mail\\",\\"types\\":{\\"EIP712Domain\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"version\\",\\"type\\":\\"string\\"},{\\"name\\":\\"chainId\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"verifyingContract\\",\\"type\\":\\"address\\"}],\\"Group\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"members\\",\\"type\\":\\"Person[]\\"}],\\"Mail\\":[{\\"name\\":\\"from\\",\\"type\\":\\"Person\\"},{\\"name\\":\\"to\\",\\"type\\":\\"Person[]\\"},{\\"name\\":\\"contents\\",\\"type\\":\\"string\\"}],\\"Person\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"wallets\\",\\"type\\":\\"address[]\\"}]}}"\n\nval from = ethereumViewModel.selectedAddress\nval params: List<String> = listOf(from, message)\n\nval signRequest = EthereumRequest(\n    EthereumMethod.ETH_SIGN_TYPED_DATA_V4.value,\n    params\n)\n\nethereumViewModel.sendRequest(signRequest) { result ->\n    if (result is RequestError) {\n        Log.e(TAG, "Ethereum sign error: ${result.message}")\n    } else {\n        Log.d(TAG, "Ethereum sign result: $result")\n    }\n}\n')),(0,r.kt)("h4",{id:"example-send-transaction"},"Example: Send transaction"),(0,r.kt)("p",null,"The following example sends a transaction by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Create parameters\nval from = ethereumViewModel.\nval to = "0x0000000000000000000000000000000000000000"\nval amount = "0x01"\nval params: Map<String, Any> = mapOf(\n    "from" to from,\n    "to" to to,\n    "amount" to amount\n)\n\n// Create request\nval transactionRequest = EthereumRequest(\n    EthereumMethod.ETH_SEND_TRANSACTION.value,\n    listOf(params)\n)\n\n// Make a transaction request\nethereumViewModel.sendRequest(transactionRequest) { result ->\n    if (result is RequestError) {\n        // handle error\n    } else {\n        Log.d(TAG, "Ethereum transaction result: $result")\n    }\n}\n')),(0,r.kt)("h4",{id:"example-switch-chain"},"Example: Switch chain"),(0,r.kt)("p",null,"The following example switches to a new Ethereum chain by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun switchChain(\n    chainId: String,\n    onSuccess: (message: String) -> Unit,\n    onError: (message: String, action: (() -> Unit)?) -> Unit\n) {\n    val switchChainParams: Map<String, String> = mapOf("chainId" to chainId)\n    val switchChainRequest = EthereumRequest(\n        method = EthereumMethod.SWITCH_ETHEREUM_CHAIN.value,\n        params = listOf(switchChainParams)\n    )\n\n    ethereumViewModel.sendRequest(switchChainRequest) { result ->\n        if (result is RequestError) {\n            if (result.code == ErrorType.UNRECOGNIZED_CHAIN_ID.code || result.code == ErrorType.SERVER_ERROR.code) {\n                val message = "${Network.chainNameFor(chainId)} ($chainId) has not been added to your MetaMask wallet. Add chain?"\n\n                val action: () -> Unit = {\n                    addEthereumChain(\n                        chainId,\n                        onSuccess = { result ->\n                            onSuccess(result)\n                        },\n                        onError = { error ->\n                            onError(error, null)\n                        }\n                    )\n                }\n                onError(message, action)\n            } else {\n                onError("Switch chain error: ${result.message}", null)\n            }\n        } else {\n            onSuccess("Successfully switched to ${Network.chainNameFor(chainId)} ($chainId)")\n        }\n    }\n}\n\nprivate fun addEthereumChain(\n    chainId: String,\n    onSuccess: (message: String) -> Unit,\n    onError: (message: String) -> Unit\n) {\n    Logger.log("Adding chainId: $chainId")\n\n    val addChainParams: Map<String, Any> = mapOf(\n        "chainId" to chainId,\n        "chainName" to Network.chainNameFor(chainId),\n        "rpcUrls" to Network.rpcUrls(Network.fromChainId(chainId))\n    )\n    val addChainRequest = EthereumRequest(\n        method = EthereumMethod.ADD_ETHEREUM_CHAIN.value,\n        params = listOf(addChainParams)\n    )\n\n    ethereumViewModel.sendRequest(addChainRequest) { result ->\n        if (result is RequestError) {\n            onError("Add chain error: ${result.message}")\n        } else {\n            if (chainId == ethereumViewModel.chainId) {\n                onSuccess("Successfully switched to ${Network.chainNameFor(chainId)} ($chainId)")\n            } else {\n                onSuccess("Successfully added ${Network.chainNameFor(chainId)} ($chainId)")\n            }\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);