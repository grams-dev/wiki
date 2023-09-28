"use strict";(self.webpackChunk_grams_dev_wiki=self.webpackChunk_grams_dev_wiki||[]).push([[2672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),a=r(6010),i=r(2802),o=r(9960),c=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:o},o))}function p(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},1905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),i=r(2991);const o={sidebar_position:5},c="Subjects",s={unversionedId:"develop/subjects/index",id:"develop/subjects/index",title:"Subjects",description:"Welcome to the transformative realm of Subjects in Grams. Blending the best of modularity and innovation, Subjects are the heart of decentralized application design in the Grams ecosystem.",source:"@site/docs/develop/subjects/index.md",sourceDirName:"develop/subjects",slug:"/develop/subjects/",permalink:"/ar/docs/develop/subjects/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"developSidebar",previous:{title:"Wallet",permalink:"/ar/docs/develop/concepts/wallet"},next:{title:"Subjects 101",permalink:"/ar/docs/develop/subjects/101"}},l={},u=[{value:"What are Subjects?",id:"what-are-subjects",level:2},{value:"Key Features:",id:"key-features",level:3},{value:"Protocol Agnostic Design",id:"protocol-agnostic-design",level:2},{value:"Dive Deeper",id:"dive-deeper",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subjects"},"Subjects"),(0,a.kt)("p",null,"Welcome to the transformative realm of Subjects in Grams. Blending the best of modularity and innovation, Subjects are the heart of decentralized application design in the Grams ecosystem."),(0,a.kt)("h2",{id:"what-are-subjects"},"What are Subjects?"),(0,a.kt)("p",null,"Subjects are dynamic entities encapsulating behavior, state, and logic in a neatly packaged unit. They stand as the building blocks for decentralized applications, ensuring reusability, interoperability, and scalability. With Subjects, developers can craft applications with seamless component integration, fostering collaboration and efficiency."),(0,a.kt)("h3",{id:"key-features"},"Key Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modularity"),": Subjects promote a component-based architecture, making it easier to build, manage, and scale decentralized applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reusability"),": Designed for reuse, Subjects can be employed across various applications without the need for rework."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Interoperability"),": Subjects can be built for various languages and frameworks, paving the way for collaborative development and deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Innovative Design"),": Embracing the latest in web3 design paradigms, Subjects provide a robust framework for next-generation decentralized applications.")),(0,a.kt)("h2",{id:"protocol-agnostic-design"},"Protocol Agnostic Design"),(0,a.kt)("p",null,"Designed using an Interface Definition Language (IDL) or a JSON Abstract Syntax Tree (AST), Subjects are inherently protocol agnostic. This unique approach ensures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Future-Proofing"),": Their design is resilient to evolving technological landscapes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Broad Compatibility"),": They facilitate the generation of client-side packages and contracts. While Solidity is currently supported, there's a roadmap for incorporating WebAssembly in order to secure immediate support for IOTA's generalized smart contract platform.")),(0,a.kt)("h2",{id:"dive-deeper"},"Dive Deeper"),(0,a.kt)("p",null,"Ready to embark on your journey with Subjects? Explore the below topics to gain a comprehensive understanding and start your innovative venture."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);