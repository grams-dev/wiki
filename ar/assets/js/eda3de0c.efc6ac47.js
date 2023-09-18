"use strict";(self.webpackChunk_grams_dev_wiki=self.webpackChunk_grams_dev_wiki||[]).push([[7315],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1},o="Subjects 101",l={unversionedId:"develop/subjects/101",id:"develop/subjects/101",title:"Subjects 101",description:"Subjects form the backbone of decentralized programming in the Grams ecosystem. These entities encapsulate behavior, state, trigger, and subscription, offering a seamless blend of modularity and adaptability.",source:"@site/docs/develop/subjects/101.md",sourceDirName:"develop/subjects",slug:"/develop/subjects/101",permalink:"/ar/docs/develop/subjects/101",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Subjects",permalink:"/ar/docs/develop/subjects/"},next:{title:"Subject Specification",permalink:"/ar/docs/develop/subjects/specification/"}},s={},c=[{value:"Protocol Agnostic Design",id:"protocol-agnostic-design",level:2},{value:"Anatomy of a Subject",id:"anatomy-of-a-subject",level:2},{value:"Example of a <code>.subject</code> File",id:"example-of-a-subject-file",level:2},{value:"Building with Subjects",id:"building-with-subjects",level:2},{value:"Comparing Paradigms",id:"comparing-paradigms",level:2},{value:"Dive Deeper",id:"dive-deeper",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"subjects-101"},"Subjects 101"),(0,n.kt)("p",null,"Subjects form the backbone of decentralized programming in the Grams ecosystem. These entities encapsulate behavior, state, trigger, and subscription, offering a seamless blend of modularity and adaptability."),(0,n.kt)("h2",{id:"protocol-agnostic-design"},"Protocol Agnostic Design"),(0,n.kt)("p",null,"Designed using an Interface Definition Language (IDL) or a JSON Abstract Syntax Tree (AST), Subjects are inherently protocol agnostic. This unique approach ensures:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Future-Proofing"),": Their design is resilient to evolving technological landscapes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Broad Compatibility"),": They facilitate the generation of client-side packages and contracts. While Solidity is currently supported, there's a roadmap for incorporating WebAssembly in order to secure immediate support for IOTA's generalized smart contract platform.")),(0,n.kt)("h2",{id:"anatomy-of-a-subject"},"Anatomy of a Subject"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Behavior"),": Dictates the Subject's actions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"State"),": Represents current data or status."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Triggers"),": Events a Subject can initiate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Subscriptions"),": Mechanisms for a Subject to monitor specific events.")),(0,n.kt)("h2",{id:"example-of-a-subject-file"},"Example of a ",(0,n.kt)("inlineCode",{parentName:"h2"},".subject")," File"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'namespace subject.example\n\nsubject Organization {\n\n   version: "2.1.0"\n\n   state: [Team]\n\n   behaviors: [JoinTeam]\n}\n\nstate Team {\n   members: TeamMembers\n}\n\nlist TeamMembers {\n   member: Address\n}\n\nbehavior JoinTeam {\n   input: string\n}\n')),(0,n.kt)("h2",{id:"building-with-subjects"},"Building with Subjects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Desktop App"),": For a visual approach, our application interface is available for ",(0,n.kt)("a",{parentName:"p",href:"https://grams.dev/download/"},"download"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"CLI"),": For terminal enthusiasts:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @grams-dev/subjects\ngsx create myAwesomeSubject\n")))),(0,n.kt)("h2",{id:"comparing-paradigms"},"Comparing Paradigms"),(0,n.kt)("p",null,"Juxtaposing Subjects against Object-Oriented Programming (OOP) and prevailing smart contract strategies offers clarity:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Features"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OOP \ud83d\udcda"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Smart Contracts \ud83d\udd12"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Subjects \ud83c\udf1f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Focus"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Objects with State & Behavior"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Immutable contracts"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Behavior, State, Trigger, Subscription")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Coupling Nature"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Intricate"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Dependencies on other contracts"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Autonomous by design")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Architecture"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Class-based"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function & state-centric"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Interoperable units")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Adaptability"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Requires inheritance"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Constrained by immutability"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Naturally flexible")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scalability Concerns"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Hierarchical complexities"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Chain-specific limitations"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Inherently scalable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reusability Span"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Through libraries"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Contract-specific"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Across varied projects")))),(0,n.kt)("h2",{id:"dive-deeper"},"Dive Deeper"),(0,n.kt)("p",null,"Embark on your journey with Subjects. Navigate through this wiki to delve into enriched content, methodologies, best practices, and illustrative examples."))}m.isMDXComponent=!0}}]);