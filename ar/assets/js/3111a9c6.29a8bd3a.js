"use strict";(self.webpackChunk_grams_dev_wiki=self.webpackChunk_grams_dev_wiki||[]).push([[1545],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:4},i="Subjects IDL",s={unversionedId:"develop/subjects/subject-specification/subjects-idl",id:"develop/subjects/subject-specification/subjects-idl",title:"Subjects IDL",description:"Subject models are defined using either the Subjects interface definition language (IDL) or the JSON abstract syntax tree (AST). This document defines the syntax and ABNF grammar for defining models using the Subjects IDL.",source:"@site/docs/develop/subjects/subject-specification/subjects-idl.md",sourceDirName:"develop/subjects/subject-specification",slug:"/develop/subjects/subject-specification/subjects-idl",permalink:"/ar/docs/develop/subjects/subject-specification/subjects-idl",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"developSidebar",previous:{title:"Subject Traits",permalink:"/ar/docs/develop/subjects/subject-specification/traits/subject-traits"},next:{title:"JSON AST",permalink:"/ar/docs/develop/subjects/subject-specification/json-ast"}},l={},p=[{value:"IDL Overview",id:"idl-overview",level:2},{value:"Language Components",id:"language-components",level:2},{value:"Comments",id:"comments",level:3},{value:"Control Block",id:"control-block",level:3},{value:"Version statement",id:"version-statement",level:4},{value:"Metadata Block",id:"metadata-block",level:3},{value:"Shape Block",id:"shape-block",level:3},{value:"Lexical Notes",id:"lexical-notes",level:2},{value:"Subjects IDL ABNF",id:"subjects-idl-abnf",level:2},{value:"Whitepace",id:"whitepace",level:3},{value:"Comments",id:"comments-1",level:4},{value:"ControlBlock",id:"controlblock",level:3},{value:"MetadataBlock",id:"metadatablock",level:3},{value:"ShapeBlock",id:"shapeblock",level:3},{value:"Shape ID",id:"shape-id",level:4},{value:"Node Values",id:"node-values",level:4},{value:"Traits",id:"traits",level:4}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subjects-idl"},"Subjects IDL"),(0,r.kt)("p",null,"Subject models are defined using either the Subjects interface definition language (IDL) or the JSON abstract syntax tree (AST). This document defines the syntax and ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5234.html"},(0,r.kt)("strong",{parentName:"a"},"ABNF grammar"))," for defining models using the Subjects IDL."),(0,r.kt)("h2",{id:"idl-overview"},"IDL Overview"),(0,r.kt)("p",null,"The Subjects IDL is made up of 3, ordered sections, each of which is optional:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Control: defines parser directives like which version of the IDL to use."),(0,r.kt)("li",{parentName:"ol"},"Metadata: applies metadata to the entire model."),(0,r.kt)("li",{parentName:"ol"},"Shapes: where shapes and traits are defined. A namespace MUST be defined before any shapes or traits can be defined. The ",(0,r.kt)("inlineCode",{parentName:"li"},"use")," keyword can be defined after a namespace and before shapes or traits to refer to shapes in other namespaces using a shorter name.")),(0,r.kt)("p",null,"The following example defines a basic model file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// (1) Control section\n$version: "2"\n\n// (2) Metadata section\nmetadata foo = "bar"\n\n// (3) Shape section\nnamespace grams.example\n\nuse some.other.namespace#MyString\n\nstructure MyStructure {\n    @required\n    foo: MyString\n}\n')),(0,r.kt)("p",null,"or in JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subjects": "2",\n    "metadata": {\n        "foo": "bar"\n    },\n    "shapes": {\n        "grams.example#MyStructure": {\n            "type": "structure",\n            "members": {\n                "foo": {\n                    "target": "some.other.namespace#MyString",\n                    "traits": {\n                        "subjects.core#required": {}\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"language-components"},"Language Components"),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"#comments-1"},"comment")," can appear at any place between tokens where whitespace ",(0,r.kt)("a",{parentName:"p",href:"#whitepace"},"WS")," can appear. Comments in Subjects are defined using two forward slashes followed by any character. A newline terminates a comment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$version: "2"\n\n// This is a comment\nnamespace com.foo // This is also a comment\n\n/// This is documentation about a shape.\n///\n/// - This is a list\n/// - More of the list.\n/// More docs here.\nstring MyString\n\n/// This is documentation about a trait shape.\n///   More docs here.\n@trait\nstructure myTrait {}\n')),(0,r.kt)("h3",{id:"control-block"},"Control Block"),(0,r.kt)("p",null,"The control block of a model contains control statements that apply parser directives to a specific IDL file. Because control statements influence parsing, they MUST appear at the beginning of a file before any other statements and have no effect on the semantic model."),(0,r.kt)("p",null,"The following control statements are currently supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the version of the Subjects used in the model file.")))),(0,r.kt)("p",null,"Implementations MUST ignore unknown control statements."),(0,r.kt)("h4",{id:"version-statement"},"Version statement"),(0,r.kt)("p",null,"Every Subject model begins with a ",(0,r.kt)("inlineCode",{parentName:"p"},"$version")," directive, indicating the version of the IDL specification it follows. The IDL adopts a versioning approach based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"major.minor.patch")," scheme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'version_string =\n    1*DIGIT [ "." 1*DIGIT [ "." 1*DIGIT ] ]\n')),(0,r.kt)("h3",{id:"metadata-block"},"Metadata Block"),(0,r.kt)("p",null,"The metadata block is utilized to apply untyped metadata across the entire Subject model. In a ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataStatement"),", a metadata key is defined, followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"="),", and then the node value assigned to that key."),(0,r.kt)("p",null,"Here's an example of defining metadata in a Subject model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'$version: "2.1.0"\nmetadata greeting = "hello"\nmetadata "stringList" = ["a", "b", "c"]\n')),(0,r.kt)("p",null,"Metadata isn't confined within a namespace. Unquoted object property values are considered syntactic shape IDs and are inherently associated with the core Subjects namespace."),(0,r.kt)("p",null,"For instance, in the Subjects IDL model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'$version: "2.1.0"\nmetadata exampleSyntacticShapeId = required\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"exampleSyntacticShapeId")," resolves to the core Subjects namespace, akin to ",(0,r.kt)("inlineCode",{parentName:"p"},"subjects.core#required"),"."),(0,r.kt)("h3",{id:"shape-block"},"Shape Block"),(0,r.kt)("h2",{id:"lexical-notes"},"Lexical Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subject models MUST be encoded using UTF-8 and SHOULD use Unix style line endings ",(0,r.kt)("inlineCode",{parentName:"li"},"\\n"),"."),(0,r.kt)("li",{parentName:"ul"},"The Subject ABNF is whitespace sensitive."),(0,r.kt)("li",{parentName:"ul"},"Except for within strings, commas in the Subjects IDL are considered whitespace. Commas can be used anywhere where they make the model easier to read (for example, in complex traits defined on a single line).")),(0,r.kt)("h2",{id:"subjects-idl-abnf"},"Subjects IDL ABNF"),(0,r.kt)("p",null,"The Subjects IDL is defined by the following ABNF which uses case-sensitive string support defined in ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7405.html"},"RFC 7405"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},"IDL = \n    [ WS ] ControlBlock MetadataBlock ShapeBlock\n")),(0,r.kt)("h3",{id:"whitepace"},"Whitepace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'WS =\n    1*(SP / NL / Comment / Comma) ; whitespace\n\nComma =\n    "," ; the comma character\n\nSP =\n    1*(%x20 / %x09) ; one or more spaces or tabs\n\nNL =\n    %x0A / %x0D.0A ; Newline: \\n and \\r\\n\n\nNotNL =\n    %x09 / %x20-10FFFF ; Any character except newline\n\nBR =\n    [SP] 1*(Comment / NL) [WS]; line break followed by whitespace\n')),(0,r.kt)("h4",{id:"comments-1"},"Comments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'Comment =\n    DocumentationComment / LineComment\n\nDocumentationComment =\n    "///" *NotNL NL\n\nLineComment =\n    "//" [(%x09 / %x20-2E / %x30-10FFF) *NotNL] NL ; First character after "//" can\'t be "/"\n')),(0,r.kt)("h3",{id:"controlblock"},"ControlBlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'ControlBlock =\n    *(ControlStatement)\n\nControlStatement =\n    "$" NodeObjectKey [SP] ":" [SP] NodeValue BR\n')),(0,r.kt)("h3",{id:"metadatablock"},"MetadataBlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'MetadataBlock =\n    *(MetadataStatement)\n\nMetadataStatement =\n    %s"metadata" SP NodeObjectKey [SP] "=" [SP] NodeValue BR\n')),(0,r.kt)("h3",{id:"shapeblock"},"ShapeBlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'ShapeBlock =\n    [NamespaceStatement UseSection [ShapeStatements]]\n\nNamespaceStatement =\n    %s"namespace" SP Namespace BR\n\nUseSection =\n    *(UseStatement)\n\nUseStatement =\n    %s"use" SP AbsoluteRootShapeId BR\n\nShapeStatements =\n    ShapeOrApplyStatement *(BR ShapeOrApplyStatement)\n\nShapeOrApplyStatement =\n    ShapeStatement / ApplyStatement\n\nShapeStatement =\n    TraitStatements Shape\n\nShape =\n    SimpleShape\n  / EnumShape\n  / AggregateShape\n  / EntityShape\n  / OperationShape\n\nSimpleShape =\n    SimpleTypeName SP Identifier [Mixins]\n\nSimpleTypeName =\n    %s"blob" / %s"boolean" / %s"document" / %s"string"\n  / %s"byte" / %s"short" / %s"integer" / %s"long"\n  / %s"float" / %s"double" / %s"bigInteger"\n  / %s"bigDecimal" / %s"timestamp"\n\nMixins =\n    [SP] %s"with" [WS] "[" [WS] 1*(ShapeId [WS]) "]"\n\nEnumShape =\n    EnumTypeName SP Identifier [Mixins] [WS] EnumShapeMembers\n\nEnumTypeName =\n    %s"enum" / %s"intEnum"\n\nEnumShapeMembers =\n    "{" [WS] 1*(EnumShapeMember [WS]) "}"\n\nEnumShapeMember =\n    TraitStatements Identifier [ValueAssignment]\n\nValueAssignment =\n    [SP] "=" [SP] NodeValue [SP] [Comma] BR\n\nAggregateShape =\n    AggregateTypeName SP Identifier [ForResource] [Mixins]\n     [WS] ShapeMembers\n\nAggregateTypeName =\n    %s"list" / %s"map" / %s"union" / %s"structure"\n\nForResource =\n    SP %s"for" SP ShapeId\n\nShapeMembers =\n    "{" [WS] *(ShapeMember [WS]) "}"\n\nShapeMember =\n    TraitStatements (ExplicitShapeMember / ElidedShapeMember)\n     [ValueAssignment]\n\nExplicitShapeMember =\n    Identifier [SP] ":" [SP] ShapeId\n\nElidedShapeMember =\n    "$" Identifier\n\nEntityShape =\n    EntityTypeName SP Identifier [Mixins] [WS] NodeObject\n\nEntityTypeName =\n    %s"service" / %s"resource"\n\nOperationShape =\n    %s"operation" SP Identifier [Mixins] [WS] OperationBody\n\nOperationBody =\n    "{" [WS] *(OperationProperty [WS]) "}"\n\nOperationProperty =\n    OperationInput / OperationOutput / OperationErrors\n\nOperationInput =\n    %s"input" [WS] (InlineAggregateShape / (":" [WS] ShapeId))\n\nOperationOutput =\n    %s"output" [WS] (InlineAggregateShape / (":" [WS] ShapeId))\n\nOperationErrors =\n    %s"errors" [WS] ":" [WS] "[" [WS] *(ShapeId [WS]) "]"\n\nInlineAggregateShape =\n    ":=" [WS] TraitStatements [ForResource] [Mixins]\n     [WS] ShapeMembers\n')),(0,r.kt)("h4",{id:"shape-id"},"Shape ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'ShapeId =\n    RootShapeId [ShapeIdMember]\n\nRootShapeId =\n    AbsoluteRootShapeId / Identifier\n\nAbsoluteRootShapeId =\n    Namespace "#" Identifier\n\nNamespace =\n    Identifier *("." Identifier)\n\nIdentifier =\n    IdentifierStart *IdentifierChars\n\nIdentifierStart =\n    (1*"_" (ALPHA / DIGIT)) / ALPHA\n\nIdentifierChars =\n    ALPHA / DIGIT / "_"\n\nShapeIdMember =\n    "$" Identifier\n')),(0,r.kt)("h4",{id:"node-values"},"Node Values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'NodeValue =\n    NodeArray\n  / NodeObject\n  / Number\n  / NodeKeyword\n  / NodeStringValue\n\nNodeArray =\n    "[" [WS] *(NodeValue [WS]) "]"\n\nNodeObject =\n    "{" [WS] [NodeObjectKvp *(WS NodeObjectKvp)] [WS] "}"\n\nNodeObjectKvp =\n    NodeObjectKey [WS] ":" [WS] NodeValue\n\nNodeObjectKey =\n    QuotedText / Identifier\n\nNumber =\n    [Minus] Int [Frac] [Exp]\n\nDecimalPoint =\n    %x2E ; .\n\nDigitOneToNine =\n    %x31-39 ; 1-9\n\nE =\n    %x65 / %x45 ; e E\n\nExp =\n    E [Minus / Plus] 1*DIGIT\n\nFrac =\n    DecimalPoint 1*DIGIT\n\nInt =\n    Zero / (DigitOneToNine *DIGIT)\n\nMinus =\n    %x2D ; -\n\nPlus =\n    %x2B ; +\n\nZero =\n    %x30 ; 0\n\nNodeKeyword =\n    %s"true" / %s"false" / %s"null"\n\nNodeStringValue =\n    ShapeId / TextBlock / QuotedText\n\nQuotedText =\n    DQUOTE *QuotedChar DQUOTE\n\nQuotedChar =\n    %x09        ; tab\n  / %x20-21     ; space - "!"\n  / %x23-5B     ; "#" - "["\n  / %x5D-10FFFF ; "]"+\n  / EscapedChar\n  / NL\n\nEscapedChar =\n    Escape (Escape / DQUOTE / %s"b" / %s"f"\n             / %s"n" / %s"r" / %s"t" / "/"\n             / UnicodeEscape)\n\nUnicodeEscape =\n    %s"u" Hex Hex Hex Hex\n\nHex =\n    DIGIT / %x41-46 / %x61-66\n\nEscape =\n    %x5C ; backslash\n\nTextBlock =\n    ThreeDquotes [SP] NL *TextBlockContent ThreeDquotes\n\nTextBlockContent =\n    QuotedChar / (1*2DQUOTE 1*QuotedChar)\n\nThreeDquotes =\n    DQUOTE DQUOTE DQUOTE\n')),(0,r.kt)("h4",{id:"traits"},"Traits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},'TraitStatements =\n    *(Trait [WS])\n\nTrait =\n    "@" ShapeId [TraitBody]\n\nTraitBody =\n    "(" [WS] [TraitStructure / TraitNode] ")"\n\nTraitStructure =\n    1*(NodeObjectKvp [WS])\n\nTraitNode =\n    NodeValue [WS]\n\nApplyStatement =\n    ApplyStatementSingular / ApplyStatementBlock\n\nApplyStatementSingular =\n    %s"apply" SP ShapeId WS Trait\n\nApplyStatementBlock =\n    %s"apply" SP ShapeId WS "{" [WS] TraitStatements "}"\n')))}m.isMDXComponent=!0}}]);