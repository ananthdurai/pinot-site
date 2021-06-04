(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[356],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2628:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],l={title:"Building LinkedIn Talent Insights to democratize data-driven decision making",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",keywords:["Pinot","Uber Data","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c={permalink:"/blog/2020/12/01/LinkedIn-TalentInsight",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2020-12-01-LinkedIn-TalentInsight.md",source:"@site/blog/2020-12-01-LinkedIn-TalentInsight.md",title:"Building LinkedIn Talent Insights to democratize data-driven decision making",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",date:"2020-12-01T00:00:00.000Z",formattedDate:"December 1, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.185,truncated:!1,prevItem:{title:"Star-tree index - Powering fast aggregations on Pinot",permalink:"/blog/2020/12/01/LinkedIn-StarTree"},nextItem:{title:"Solving for the cardinality of set intersection at scale with Pinot and Theta Sketches",permalink:"/blog/2020/12/01/LinkedIn-Theta"}},s=[],p={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"LinkedIn is a mission-driven organization, and we take our mission of \u201cconnecting the world's professionals to make them more productive and successful\u201d very seriously."),(0,a.kt)("p",null,"Read More at ",(0,a.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/building-linkedin-talent-insights"},"https://engineering.linkedin.com/blog/2020/building-linkedin-talent-insights")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/06/lti-1.png",alt:"Building LinkedIn Talent Insights to democratize data-driven decision making"})))}u.isMDXComponent=!0}}]);