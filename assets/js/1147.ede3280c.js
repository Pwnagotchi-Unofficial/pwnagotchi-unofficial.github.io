(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1147],{9047:(e,n,t)=>{"use strict";t.d(n,{Z:()=>T});var s=t(7294),o=t(5893);function r(e){var n,t=function(e){var n=s.Children.toArray(e),t=n.find((function(e){return s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),r=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:r.length>0?(0,o.jsx)(o.Fragment,{children:r}):null}}(e.children),r=t.mdxAdmonitionTitle,a=t.rest,i=null!=(n=e.title)?n:r;return Object.assign({},e,i&&{title:i},{children:a})}var a=t(6010),i=t(5999),c=t(5281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function u(e){var n=e.type,t=e.className,s=e.children;return(0,o.jsx)("div",{className:(0,a.Z)(c.k.common.admonition,c.k.common.admonitionType(n),l.admonition,t),children:s})}function d(e){var n=e.icon,t=e.title;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function m(e){var n=e.children;return n?(0,o.jsx)("div",{className:l.admonitionContent,children:n}):null}function f(e){var n=e.type,t=e.icon,s=e.title,r=e.children,a=e.className;return(0,o.jsxs)(u,{type:n,className:a,children:[(0,o.jsx)(d,{title:s,icon:t}),(0,o.jsx)(m,{children:r})]})}function h(e){return(0,o.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var p={icon:(0,o.jsx)(h,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,o.jsx)(f,Object.assign({},p,e,{className:(0,a.Z)("alert alert--secondary",e.className),children:e.children}))}function j(e){return(0,o.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var v={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(f,Object.assign({},v,e,{className:(0,a.Z)("alert alert--success",e.className),children:e.children}))}function x(e){return(0,o.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var y={icon:(0,o.jsx)(x,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,o.jsx)(f,Object.assign({},y,e,{className:(0,a.Z)("alert alert--info",e.className),children:e.children}))}function k(e){return(0,o.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var C={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function B(e){return(0,o.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var w={icon:(0,o.jsx)(B,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var O={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var L={note:g,tip:b,info:N,warning:function(e){return(0,o.jsx)(f,Object.assign({},C,e,{className:(0,a.Z)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,o.jsx)(f,Object.assign({},w,e,{className:(0,a.Z)("alert alert--danger",e.className),children:e.children}))}},E={secondary:function(e){return(0,o.jsx)(g,Object.assign({title:"secondary"},e))},important:function(e){return(0,o.jsx)(N,Object.assign({title:"important"},e))},success:function(e){return(0,o.jsx)(b,Object.assign({title:"success"},e))},caution:function(e){return(0,o.jsx)(f,Object.assign({},O,e,{className:(0,a.Z)("alert alert--warning",e.className),children:e.children}))}};const Z=Object.assign({},L,E);function T(e){var n,t=r(e),s=(n=t.type,Z[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),Z.info));return(0,o.jsx)(s,Object.assign({},t))}},1147:(e,n,t)=>{"use strict";t.d(n,{Z:()=>ue});var s=t(7294);const o={},r=s.createContext(o);function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:function(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}(e.components),s.createElement(r.Provider,{value:n},e.children)}var i=t(5742),c=t(3366),l=t(2389),u=t(6010),d=t(2949),m=t(6668);function f(){var e=(0,m.L)().prism,n=(0,d.I)().colorMode,t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var h=t(5281),p=t(7099),g=t(7594),j=t.n(g),v=(0,p.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),b=(0,p.Z)(/\{([\d,-]+)\}/,{range:1}),x={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function y(e,n){var t=e.map((function(e){var t=x[e],s=t.start,o=t.end;return"(?:"+s+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function N(e,n){var t=e.replace(/\n$/,""),s=n.language,o=n.magicComments,r=n.metastring;if(r&&b.test(r)){var a=r.match(b).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+r+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var i=o[0].className,c=j()(a).filter((function(e){return e>0})).map((function(e){return[e-1,[i]]}));return{lineClassNames:Object.fromEntries(c),code:t}}if(void 0===s)return{lineClassNames:{},code:t};for(var l=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],n);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],n);case"html":return y(["js","jsBlock","html"],n);case"python":case"py":case"bash":return y(["bash"],n);case"markdown":case"md":return y(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return y(["tex"],n);case"lua":case"haskell":case"sql":return y(["lua"],n);case"wasm":return y(["wasm"],n);default:return y(Object.keys(x).filter((function(e){return!["lua","wasm","tex","latex","matlab"].includes(e)})),n)}}(s,o),u=t.split("\n"),d=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),f=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),h=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),p=0;p<u.length;){var g=u[p].match(l);if(g){var v=g.slice(1).find((function(e){return void 0!==e}));m[v]?d[m[v]].range+=p+",":f[v]?d[f[v]].start=p:h[v]&&(d[h[v]].range+=d[h[v]].start+"-"+(p-1)+","),u.splice(p,1)}else p+=1}t=u.join("\n");var N={};return Object.entries(d).forEach((function(e){var n=e[0],t=e[1].range;j()(t).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(n)}))})),{lineClassNames:N,code:t}}const k={codeBlockContainer:"codeBlockContainer_Ckt0"};var C=t(5893),B=["as"];function w(e){var n=e.as,t=(0,c.Z)(e,B),s=function(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var s=e[0],o=e[1],r=n[s];r&&"string"==typeof o&&(t[r]=o)})),t}(f());return(0,C.jsx)(n,Object.assign({},t,{style:s,className:(0,u.Z)(t.className,k.codeBlockContainer,h.k.common.codeBlock)}))}const O={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function L(e){var n=e.children,t=e.className;return(0,C.jsx)(w,{as:"pre",tabIndex:0,className:(0,u.Z)(O.codeBlockStandalone,"thin-scrollbar",t),children:(0,C.jsx)("code",{className:O.codeBlockLines,children:n})})}var E=t(9688),Z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,n){var t=(0,s.useState)(),o=t[0],r=t[1],a=(0,s.useCallback)((function(){var n;r(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,s.useEffect)((function(){a()}),[a]),function(e,n,t){void 0===t&&(t=Z);var o=(0,E.zX)(n),r=(0,E.Ql)(t);(0,s.useEffect)((function(){var n=new MutationObserver(o);return e&&n.observe(e,r),function(){return n.disconnect()}}),[e,o,r])}(o,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=t(2573);const S={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function I(e){var n=e.line,t=e.classNames,s=e.showLineNumbers,o=e.getLineProps,r=e.getTokenProps;1===n.length&&"\n"===n[0].content&&(n[0].content="");var a=o({line:n,className:(0,u.Z)(t,s&&S.codeLine)}),i=n.map((function(e,n){return(0,C.jsx)("span",Object.assign({},r({token:e,key:n})),n)}));return(0,C.jsxs)("span",Object.assign({},a,{children:[s?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("span",{className:S.codeLineNumber}),(0,C.jsx)("span",{className:S.codeLineContent,children:i})]}):i,(0,C.jsx)("br",{})]}))}var A=t(5999);function z(e){return(0,C.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,C.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function M(e){return(0,C.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,C.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){var n=e.code,t=e.className,o=(0,s.useState)(!1),r=o[0],a=o[1],i=(0,s.useRef)(void 0),c=(0,s.useCallback)((function(){!function(e,n){var t=(void 0===n?{}:n).target,s=void 0===t?document.body:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),i=a.rangeCount>0&&a.getRangeAt(0);s.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}o.remove(),i&&(a.removeAllRanges(),a.addRange(i)),r&&r.focus()}(n),a(!0),i.current=window.setTimeout((function(){a(!1)}),1e3)}),[n]);return(0,s.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),(0,C.jsx)("button",{type:"button","aria-label":r?(0,A.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",t,H.copyButton,r&&H.copyButtonCopied),onClick:c,children:(0,C.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,C.jsx)(z,{className:H.copyButtonIcon}),(0,C.jsx)(M,{className:H.copyButtonSuccessIcon})]})})}function V(e){return(0,C.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,C.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function P(e){var n=e.className,t=e.onClick,s=e.isEnabled,o=(0,A.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,C.jsx)("button",{type:"button",onClick:t,className:(0,u.Z)("clean-btn",n,s&&W.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,C.jsx)(V,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function D(e){var n,t,o,r,a,i,c,l,d,h,p,g=e.children,j=e.className,b=void 0===j?"":j,x=e.metastring,y=e.title,k=e.showLineNumbers,B=e.language,L=(0,m.L)().prism,E=L.defaultLanguage,Z=L.magicComments,S=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=B?B:null==(t=b.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:t.replace(/language-/,""))?n:E),A=f(),z=(o=(0,s.useState)(!1),r=o[0],a=o[1],i=(0,s.useState)(!1),c=i[0],l=i[1],d=(0,s.useRef)(null),h=(0,s.useCallback)((function(){var e=d.current.querySelector("code");r?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),a((function(e){return!e}))}),[d,r]),p=(0,s.useCallback)((function(){var e=d.current,n=e.scrollWidth>e.clientWidth||d.current.querySelector("code").hasAttribute("style");l(n)}),[d]),T(d,p),(0,s.useEffect)((function(){p()}),[r,p]),(0,s.useEffect)((function(){return window.addEventListener("resize",p,{passive:!0}),function(){window.removeEventListener("resize",p)}}),[p]),{codeBlockRef:d,isEnabled:r,isCodeScrollable:c,toggle:h}),M=function(e){var n,t;return null!=(n=null==e||null==(t=e.match(v))?void 0:t.groups.title)?n:""}(x)||y,H=N(g,{metastring:x,language:S,magicComments:Z}),V=H.lineClassNames,W=H.code,D=null!=k?k:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(x);return(0,C.jsxs)(w,{as:"div",className:(0,u.Z)(b,S&&!b.includes("language-"+S)&&"language-"+S),children:[M&&(0,C.jsx)("div",{className:O.codeBlockTitle,children:M}),(0,C.jsxs)("div",{className:O.codeBlockContent,children:[(0,C.jsx)(_.y$,{theme:A,code:W,language:null!=S?S:"text",children:function(e){var n=e.className,t=e.style,s=e.tokens,o=e.getLineProps,r=e.getTokenProps;return(0,C.jsx)("pre",{tabIndex:0,ref:z.codeBlockRef,className:(0,u.Z)(n,O.codeBlock,"thin-scrollbar"),style:t,children:(0,C.jsx)("code",{className:(0,u.Z)(O.codeBlockLines,D&&O.codeBlockLinesWithNumbering),children:s.map((function(e,n){return(0,C.jsx)(I,{line:e,getLineProps:o,getTokenProps:r,classNames:V[n],showLineNumbers:D},n)}))})})}}),(0,C.jsxs)("div",{className:O.buttonGroup,children:[(z.isEnabled||z.isCodeScrollable)&&(0,C.jsx)(P,{className:O.codeButton,onClick:function(){return z.toggle()},isEnabled:z.isEnabled}),(0,C.jsx)(R,{className:O.codeButton,code:W})]})]})]})}var q=["children"];function F(e){var n=e.children,t=(0,c.Z)(e,q),o=(0,l.Z)(),r=function(e){return s.Children.toArray(e).some((function(e){return(0,s.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),a="string"==typeof r?D:L;return(0,C.jsx)(a,Object.assign({},t,{children:r}),String(o))}var $=t(9960);var G=t(6043);const U={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var J=["summary","children"];function Y(e){return!!e&&("SUMMARY"===e.tagName||Y(e.parentElement))}function K(e,n){return!!e&&(e===n||K(e.parentElement,n))}function Q(e){var n=e.summary,t=e.children,o=(0,c.Z)(e,J),r=(0,l.Z)(),a=(0,s.useRef)(null),i=(0,G.u)({initialState:!o.open}),d=i.collapsed,m=i.setCollapsed,f=(0,s.useState)(o.open),h=f[0],p=f[1],g=s.isValidElement(n)?n:(0,C.jsx)("summary",{children:null!=n?n:"Details"});return(0,C.jsxs)("details",Object.assign({},o,{ref:a,open:h,"data-collapsed":d,className:(0,u.Z)(U.details,r&&U.isBrowser,o.className),onMouseDown:function(e){Y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;Y(n)&&K(n,a.current)&&(e.preventDefault(),d?(m(!1),p(!0)):m(!0))},children:[g,(0,C.jsx)(G.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),p(!e)},children:(0,C.jsx)("div",{className:U.collapsibleContent,children:t})})]}))}const X={details:"details_b_Ee"};var ee="alert alert--info";function ne(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,C.jsx)(Q,Object.assign({},n,{className:(0,u.Z)(ee,X.details,n.className)}))}function te(e){var n=s.Children.toArray(e.children),t=n.find((function(e){return s.isValidElement(e)&&"summary"===e.type})),o=(0,C.jsx)(C.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,C.jsx)(ne,Object.assign({},e,{summary:t,children:o}))}var se=t(2503);function oe(e){return(0,C.jsx)(se.Z,Object.assign({},e))}const re={containsTaskList:"containsTaskList_mC6p"};function ae(e){if(void 0!==e)return(0,u.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&re.containsTaskList)}const ie={img:"img_ev3q"};var ce=t(9047);const le={Head:i.Z,details:te,Details:te,code:function(e){return s.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?(0,C.jsx)("code",Object.assign({},e)):(0,C.jsx)(F,Object.assign({},e))},a:function(e){return(0,C.jsx)($.Z,Object.assign({},e))},pre:function(e){return(0,C.jsx)(C.Fragment,{children:e.children})},ul:function(e){return(0,C.jsx)("ul",Object.assign({},e,{className:ae(e.className)}))},img:function(e){return(0,C.jsx)("img",Object.assign({loading:"lazy"},e,{className:(n=e.className,(0,u.Z)(n,ie.img))}));var n},h1:function(e){return(0,C.jsx)(oe,Object.assign({as:"h1"},e))},h2:function(e){return(0,C.jsx)(oe,Object.assign({as:"h2"},e))},h3:function(e){return(0,C.jsx)(oe,Object.assign({as:"h3"},e))},h4:function(e){return(0,C.jsx)(oe,Object.assign({as:"h4"},e))},h5:function(e){return(0,C.jsx)(oe,Object.assign({as:"h5"},e))},h6:function(e){return(0,C.jsx)(oe,Object.assign({as:"h6"},e))},admonition:ce.Z,mermaid:function(){return null}};function ue(e){var n=e.children;return(0,C.jsx)(a,{components:le,children:n})}},7594:(e,n)=>{function t(e){let n,t=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))t.push(parseInt(s,10));else if(n=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,r]=n;if(s&&r){s=parseInt(s),r=parseInt(r);const e=s<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let n=s;n!==r;n+=e)t.push(n)}}return t}n.default=t,e.exports=t}}]);