"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{1310:(e,t,n)=>{n.d(t,{Z:()=>p});n(7294);var a=n(6905),s=n(5281),i=n(2802),r=n(8596),l=n(9960),o=n(5999),d=n(4996),c=n(5893);function u(e){return(0,c.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function v(){var e=(0,d.Z)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(l.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const h={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?(0,c.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,c.jsx)(l.Z,{className:a,href:n,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:a,children:t})}function x(e){var t=e.children,n=e.active,s=e.index,i=e.addMicrodata;return(0,c.jsxs)("li",Object.assign({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(s+1)})]}))}function p(){var e=(0,i.s1)(),t=(0,r.Ns)();return e?(0,c.jsx)("nav",{className:(0,a.Z)(s.k.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(v,{}),e.map((function(t,n){var a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(x,{active:a,index:n,addMicrodata:!!s,children:(0,c.jsx)(b,{href:s,isLast:a,children:t.label})},n)}))]})}):null}},5154:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var a=n(7294),s=n(1944),i=n(9688),r=n(5893),l=a.createContext(null);function o(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:n,children:t})}function d(){var e=(0,a.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}function c(){var e,t=d(),n=t.metadata,a=t.frontMatter,i=t.assets;return(0,r.jsx)(s.d,{title:n.title,description:n.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=n(6905),m=n(7524),v=n(49);function h(){var e=d().metadata;return(0,r.jsx)(v.Z,{previous:e.previous,next:e.next})}var b=n(3120),x=n(4364),p=n(5281),g=n(5999);function f(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return(0,r.jsx)(g.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function j(e){var t=e.lastUpdatedBy;return(0,r.jsx)(g.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function L(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return(0,r.jsxs)("span",{className:p.k.common.lastUpdated,children:[(0,r.jsx)(g.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,r.jsx)(f,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,r.jsx)(j,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var N=n(4881),Z=n(1526);const C={lastUpdated:"lastUpdated_vwxv"};function _(e){return(0,r.jsx)("div",{className:(0,u.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(Z.Z,Object.assign({},e))})})}function k(e){var t=e.editUrl,n=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return(0,r.jsxs)("div",{className:(0,u.Z)(p.k.docs.docFooterEditMetaRow,"row"),children:[(0,r.jsx)("div",{className:"col",children:t&&(0,r.jsx)(N.Z,{editUrl:t})}),(0,r.jsx)("div",{className:(0,u.Z)("col",C.lastUpdated),children:(n||a)&&(0,r.jsx)(L,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function T(){var e=d().metadata,t=e.editUrl,n=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,s=e.lastUpdatedBy,i=e.tags,l=i.length>0,o=!!(t||n||s);return l||o?(0,r.jsxs)("footer",{className:(0,u.Z)(p.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,r.jsx)(_,{tags:i}),o&&(0,r.jsx)(k,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var H=n(6043),U=n(3743),w=n(3366);const y={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var A=["collapsed"];function M(e){var t=e.collapsed,n=(0,w.Z)(e,A);return(0,r.jsx)("button",Object.assign({type:"button"},n,{className:(0,u.Z)("clean-btn",y.tocCollapsibleButton,!t&&y.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const O={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function I(e){var t=e.toc,n=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,H.u)({initialState:!0}),l=i.collapsed,o=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.Z)(O.tocCollapsible,!l&&O.tocCollapsibleExpanded,n),children:[(0,r.jsx)(M,{collapsed:l,onClick:o}),(0,r.jsx)(H.z,{lazy:!0,className:O.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(U.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const E={tocMobile:"tocMobile_ITEo"};function B(){var e=d(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(I,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(p.k.docs.docTocMobile,E.tocMobile)})}var S=n(9407);function V(){var e=d(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(S.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var P=n(2503),R=n(1147);function D(e){var t,n,a,s,i=e.children,l=(t=d(),n=t.metadata,a=t.frontMatter,s=t.contentTitle,a.hide_title||void 0!==s?null:n.title);return(0,r.jsxs)("div",{className:(0,u.Z)(p.k.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(P.Z,{as:"h1",children:l})}),(0,r.jsx)(R.Z,{children:i})]})}var F=n(1310),z=n(2212);const q={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function G(e){var t,n,a,s,i,l,o=e.children,c=(t=d(),n=t.frontMatter,a=t.toc,s=(0,m.i)(),i=n.hide_table_of_contents,l=!i&&a.length>0,{hidden:i,mobile:l?(0,r.jsx)(B,{}):void 0,desktop:!l||"desktop"!==s&&"ssr"!==s?void 0:(0,r.jsx)(V,{})}),v=d().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.Z)("col",!c.hidden&&q.docItemCol),children:[v&&(0,r.jsx)(z.Z,{}),(0,r.jsx)(b.Z,{}),(0,r.jsxs)("div",{className:q.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(F.Z,{}),(0,r.jsx)(x.Z,{}),c.mobile,(0,r.jsx)(D,{children:o}),(0,r.jsx)(T,{})]}),(0,r.jsx)(h,{})]})]}),c.desktop&&(0,r.jsx)("div",{className:"col col--3",children:c.desktop})]})}function W(e){var t="docs-doc-id-"+e.content.metadata.id,n=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(s.FG,{className:t,children:[(0,r.jsx)(c,{}),(0,r.jsx)(G,{children:(0,r.jsx)(n,{})})]})})}},49:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(5999),s=n(2244),i=n(5893);function r(e){var t=e.previous,n=e.next;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(s.Z,Object.assign({},t,{subLabel:(0,i.jsx)(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,i.jsx)(s.Z,Object.assign({},n,{subLabel:(0,i.jsx)(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},4364:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905),s=n(5999),i=n(5281),r=n(4477),l=n(5893);function o(e){var t=e.className,n=(0,r.E)();return n.badge?(0,l.jsx)("span",{className:(0,a.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var a=n(6905),s=n(2263),i=n(9960),r=n(5999),l=n(143),o=n(5281),d=n(373),c=n(4477),u=n(5893);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function v(e){var t=m[e.versionMetadata.banner];return(0,u.jsx)(t,Object.assign({},e))}function h(e){var t=e.versionLabel,n=e.to,a=e.onClick;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:n,onClick:a,children:(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){var t,n=e.className,i=e.versionMetadata,r=(0,s.Z)().siteConfig.title,c=(0,l.gA)({failfast:!0}).pluginId,m=(0,d.J)(c).savePreferredVersionName,b=(0,l.Jo)(c),x=b.latestDocSuggestion,p=b.latestVersionSuggestion,g=null!=x?x:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return(0,u.jsxs)("div",{className:(0,a.Z)(n,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(v,{siteTitle:r,versionMetadata:i})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(h,{versionLabel:p.label,to:g.path,onClick:function(){return m(p.name)}})})]})}function x(e){var t=e.className,n=(0,c.E)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},4881:(e,t,n)=>{n.d(t,{Z:()=>m});n(7294);var a=n(5999),s=n(5281),i=n(9960),r=n(3366),l=n(6905);const o={iconEdit:"iconEdit_Z9Sw"};var d=n(5893),c=["className"];function u(e){var t=e.className,n=(0,r.Z)(e,c);return(0,d.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(o.iconEdit,t),"aria-hidden":"true"},n,{children:(0,d.jsx)("g",{children:(0,d.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function m(e){var t=e.editUrl;return(0,d.jsxs)(i.Z,{to:t,className:s.k.common.editThisPage,children:[(0,d.jsx)(u,{}),(0,d.jsx)(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},2244:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(6905),s=n(9960),i=n(5893);function r(e){var t=e.permalink,n=e.title,r=e.subLabel,l=e.isNext;return(0,i.jsxs)(s.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},9407:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(3366),s=(n(7294),n(6905)),i=n(3743);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(5893),o=["className"],d="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function u(e){var t=e.className,n=(0,a.Z)(e,o);return(0,l.jsx)("div",{className:(0,s.Z)(r.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(i.Z,Object.assign({},n,{linkClassName:d,linkActiveClassName:c}))})}},3743:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(3366),s=n(7294),i=n(6668),r=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var s=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,a.Z)(e,r);n>=0?t[n].children.push(i):s.push(i)})),s}function o(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function c(e,t){var n,a,s=t.anchorTopOffset,i=e.find((function(e){return d(e).top>=s}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,s.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,s.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){var t=(0,s.useRef)(void 0),n=u();(0,s.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],s=t;s<=n;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:n.current}),d=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var v=n(9960),h=n(5893);function b(e){var t=e.toc,n=e.className,a=e.linkClassName,s=e.isChild;return t.length?(0,h.jsx)("ul",{className:s?void 0:n,children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)(v.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(b,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)}))}):null}const x=s.memo(b);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,c=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,a.Z)(e,p),j=(0,i.L)(),L=null!=b?b:j.tableOfContents.minHeadingLevel,N=null!=g?g:j.tableOfContents.maxHeadingLevel,Z=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,s.useMemo)((function(){return o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:L,maxHeadingLevel:N});return m((0,s.useMemo)((function(){if(c&&v)return{linkClassName:c,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:N}}),[c,v,L,N])),(0,h.jsx)(x,Object.assign({toc:Z,className:r,linkClassName:c},f))}},3008:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var a=n(6905),s=n(9960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(5893);function l(e){var t=e.permalink,n=e.label,l=e.count;return(0,r.jsxs)(s.Z,{href:t,className:(0,a.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},1526:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905),s=n(5999),i=n(3008);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(5893);function o(e){var t=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.Z)(r.tags,"padding--none","margin-left--sm"),children:t.map((function(e){var t=e.label,n=e.permalink;return(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.Z,{label:t,permalink:n})},n)}))})]})}},2212:(e,t,n)=>{n.d(t,{Z:()=>v});n(7294);var a=n(6905),s=n(5999),i=n(5742),r=n(5893);function l(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=n(5281),u=n(9047);function m(e){var t=e.className;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(t,c.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function v(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(m,Object.assign({},e))]})}}}]);