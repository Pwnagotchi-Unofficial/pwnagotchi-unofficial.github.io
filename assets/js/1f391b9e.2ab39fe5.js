"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3085],{4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(7294);var a=t(6010),i=t(1944),r=t(5281),l=t(179),s=t(1147),c=t(9407),o=t(2212);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(5893);function m(e){var n,t=e.content,m=t.metadata,v=m.title,f=m.description,g=m.frontMatter,h=m.unlisted,x=t.assets,p=g.keywords,L=g.wrapperClassName,j=g.hide_table_of_contents,N=null!=(n=x.image)?n:g.image;return(0,u.jsx)(i.FG,{className:(0,a.Z)(null!=L?L:r.k.wrapper.mdxPages,r.k.page.mdxPage),children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.d,{title:v,description:f,keywords:p,image:N}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.Z)("row",d.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.Z)("col",!j&&"col--8"),children:[h&&(0,u.jsx)(o.Z,{}),(0,u.jsx)("article",{children:(0,u.jsx)(s.Z,{children:(0,u.jsx)(t,{})})})]}),!j&&t.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.Z,{toc:t.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},9407:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(3366),i=(t(7294),t(6010)),r=t(3743);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(5893),c=["className"],o="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.Z)(e,c);return(0,s.jsx)("div",{className:(0,i.Z)(l.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(r.Z,Object.assign({},t,{linkClassName:o,linkActiveClassName:d}))})}},3743:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(3366),i=t(7294),r=t(6668),l=["parentIndex"];function s(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,a.Z)(e,l);t>=0?n[t].children.push(r):i.push(r)})),i}function c(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function o(e){var n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,r=e.find((function(e){return o(e).top>=i}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,r.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,r=e.minHeadingLevel,l=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),c=d(s,{anchorTopOffset:t.current}),o=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===o)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var v=t(9960),f=t(5893);function g(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,f.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)(v.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const h=i.memo(g);var x=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,l=void 0===t?"table-of-contents table-of-contents__left-border":t,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,p=e.maxHeadingLevel,L=(0,a.Z)(e,x),j=(0,r.L)(),N=null!=g?g:j.tableOfContents.minHeadingLevel,b=null!=p?p:j.tableOfContents.maxHeadingLevel,C=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return c({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:N,maxHeadingLevel:b});return m((0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:b}}),[d,v,N,b])),(0,f.jsx)(h,Object.assign({toc:C,className:l,linkClassName:d},L))}},2212:(e,n,t)=>{t.d(n,{Z:()=>v});t(7294);var a=t(6010),i=t(5999),r=t(5742),l=t(5893);function s(){return(0,l.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(r.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),u=t(9047);function m(e){var n=e.className;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(s,{}),className:(0,a.Z)(n,d.k.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function v(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(m,Object.assign({},e))]})}}}]);