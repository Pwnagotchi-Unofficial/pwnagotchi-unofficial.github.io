"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9677],{1460:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(3366),n=a(7294),s=a(6905),i=a(8862),l=a(7524),o=a(9960),c=a(5999),m=a(6550),d=a(8596);function u(e){var t=(0,m.TH)().pathname;return(0,n.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)}))}),[e,t])}const h={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=a(5893);function v(e){var t=e.sidebar,a=u(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,s.Z)(h.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,s.Z)(h.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,s.Z)(h.sidebarItemList,"clean-list"),children:a.map((function(e){return(0,g.jsx)("li",{className:h.sidebarItem,children:(0,g.jsx)(o.Z,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var p=a(3102);function x(e){var t=u(e.sidebar.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((function(e){return(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function j(e){return(0,g.jsx)(p.Zo,{component:x,props:e})}function b(e){var t=e.sidebar,a=(0,l.i)();return null!=t&&t.items.length?"mobile"===a?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(v,{sidebar:t}):null}var f=["sidebar","toc","children"];function N(e){var t=e.sidebar,a=e.toc,n=e.children,l=(0,r.Z)(e,f),o=t&&t.items.length>0;return(0,g.jsx)(i.Z,Object.assign({},l,{children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(b,{sidebar:t}),(0,g.jsx)("main",{className:(0,s.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"https://schema.org/Blog",children:n}),a&&(0,g.jsx)("div",{className:"col col--2",children:a})]})})}))}},390:(e,t,a)=>{a.d(t,{Z:()=>O});a(7294);var r=a(6905),n=a(9460),s=a(4996),i=a(5893);function l(e){var t,a,r=e.children,l=e.className,o=(0,n.C)(),c=o.frontMatter,m=o.assets,d=o.metadata.description,u=(0,s.C)().withBaseUrl,h=null!=(t=m.image)?t:c.image,g=null!=(a=c.keywords)?a:[];return(0,i.jsxs)("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[d&&(0,i.jsx)("meta",{itemProp:"description",content:d}),h&&(0,i.jsx)("link",{itemProp:"image",href:u(h,{absolute:!0})}),g.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:g.join(",")}),r]})}var o=a(9960);const c={title:"title_f1Hy"};function m(e){var t=e.className,a=(0,n.C)(),s=a.metadata,l=a.isBlogPostPage,m=s.permalink,d=s.title,u=l?"h1":"h2";return(0,i.jsx)(u,{className:(0,r.Z)(c.title,t),itemProp:"headline",children:l?d:(0,i.jsx)(o.Z,{itemProp:"url",to:m,children:d})})}var d=a(5999),u=a(8824);const h={container:"container_mt6G"};function g(e){var t,a=e.readingTime,r=(t=(0,u.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return(0,i.jsx)(i.Fragment,{children:r(a)})}function v(e){var t=e.date,a=e.formattedDate;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:a})}function p(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function x(e){var t=e.className,a=(0,n.C)().metadata,s=a.date,l=a.formattedDate,o=a.readingTime;return(0,i.jsxs)("div",{className:(0,r.Z)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(v,{date:s,formattedDate:l}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{}),(0,i.jsx)(g,{readingTime:o})]})]})}function j(e){return e.href?(0,i.jsx)(o.Z,Object.assign({},e)):(0,i.jsx)(i.Fragment,{children:e.children})}function b(e){var t=e.author,a=e.className,n=t.name,s=t.title,l=t.url,o=t.imageURL,c=t.email,m=l||c&&"mailto:"+c||void 0;return(0,i.jsxs)("div",{className:(0,r.Z)("avatar margin-bottom--sm",a),children:[o&&(0,i.jsx)(j,{href:m,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:n,itemProp:"image"})}),n&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(j,{href:m,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:n})})}),s&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:s})]})]})}const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){var t=e.className,a=(0,n.C)(),s=a.metadata.authors,l=a.assets;if(0===s.length)return null;var o=s.every((function(e){return!e.name}));return(0,i.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",o?f.imageOnlyAuthorRow:"row",t),children:s.map((function(e,t){var a;return(0,i.jsx)("div",{className:(0,r.Z)(!o&&"col col--6",o?f.imageOnlyAuthorCol:f.authorCol),children:(0,i.jsx)(b,{author:Object.assign({},e,{imageURL:null!=(a=l.authorsImageUrls[t])?a:e.imageURL})})},t)}))})}function _(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(x,{}),(0,i.jsx)(N,{})]})}var P=a(8780),Z=a(1147);function k(e){var t=e.children,a=e.className,s=(0,n.C)().isBlogPostPage;return(0,i.jsx)("div",{id:s?P.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody",children:(0,i.jsx)(Z.Z,{children:t})})}var w=a(4881),C=a(1526),T=a(3366),I=["blogPostTitle"];function F(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function L(e){var t=e.blogPostTitle,a=(0,T.Z)(e,I);return(0,i.jsx)(o.Z,Object.assign({"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a,{children:(0,i.jsx)(F,{})}))}const y={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function B(){var e=(0,n.C)(),t=e.metadata,a=e.isBlogPostPage,s=t.tags,l=t.title,o=t.editUrl,c=t.hasTruncateMarker,m=!a&&c,d=s.length>0;return d||m||o?(0,i.jsxs)("footer",{className:(0,r.Z)("row docusaurus-mt-lg",a&&y.blogPostFooterDetailsFull),children:[d&&(0,i.jsx)("div",{className:(0,r.Z)("col",{"col--9":m}),children:(0,i.jsx)(C.Z,{tags:s})}),a&&o&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(w.Z,{editUrl:o})}),m&&(0,i.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":d}),children:(0,i.jsx)(L,{blogPostTitle:l,to:t.permalink})})]}):null}function O(e){var t=e.children,a=e.className,s=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,i.jsxs)(l,{className:(0,r.Z)(s,a),children:[(0,i.jsx)(_,{}),(0,i.jsx)(k,{children:t}),(0,i.jsx)(B,{})]})}},4881:(e,t,a)=>{a.d(t,{Z:()=>u});a(7294);var r=a(5999),n=a(5281),s=a(9960),i=a(3366),l=a(6905);const o={iconEdit:"iconEdit_Z9Sw"};var c=a(5893),m=["className"];function d(e){var t=e.className,a=(0,i.Z)(e,m);return(0,c.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(o.iconEdit,t),"aria-hidden":"true"},a,{children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function u(e){var t=e.editUrl;return(0,c.jsxs)(s.Z,{to:t,className:n.k.common.editThisPage,children:[(0,c.jsx)(d,{}),(0,c.jsx)(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},2244:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var r=a(6905),n=a(9960),s=a(5893);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,l=e.isNext;return(0,s.jsxs)(n.Z,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,s.jsx)("div",{className:"pagination-nav__label",children:a})]})}},3008:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var r=a(6905),n=a(9960);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(5893);function l(e){var t=e.permalink,a=e.label,l=e.count;return(0,i.jsxs)(n.Z,{href:t,className:(0,r.Z)(s.tag,l?s.tagWithCount:s.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},1526:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var r=a(6905),n=a(5999),s=a(3008);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(5893);function o(e){var t=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,r.Z)(i.tags,"padding--none","margin-left--sm"),children:t.map((function(e){var t=e.label,a=e.permalink;return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(s.Z,{label:t,permalink:a})},a)}))})]})}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>l});var r=a(7294),n=a(9688),s=a(5893),i=r.createContext(null);function l(e){var t=e.children,a=e.content,n=e.isBlogPostPage,l=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==n&&n});return(0,s.jsx)(i.Provider,{value:l,children:t})}function o(){var e=(0,r.useContext)(i);if(null===e)throw new n.i6("BlogPostProvider");return e}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(7294),n=a(2263),s=["zero","one","two","few","many","other"];function i(e){return s.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),l}var t,a}),[e])}function c(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),s=a.pluralForms.indexOf(n);return r[Math.min(s,r.length-1)]}(a,t,e)}}}}}]);