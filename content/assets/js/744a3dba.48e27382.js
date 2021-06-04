(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6844],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5865:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],l={title:"Solving for the cardinality of set intersection at scale with Pinot and Theta Sketches",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",keywords:["Pinot","Uber Data","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c={permalink:"/blog/2020/12/01/LinkedIn-Theta",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2020-12-01-LinkedIn-Theta.md",source:"@site/blog/2020-12-01-LinkedIn-Theta.md",title:"Solving for the cardinality of set intersection at scale with Pinot and Theta Sketches",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",date:"2020-12-01T00:00:00.000Z",formattedDate:"December 1, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.205,truncated:!1,prevItem:{title:"Building LinkedIn Talent Insights to democratize data-driven decision making",permalink:"/blog/2020/12/01/LinkedIn-TalentInsight"},nextItem:{title:"Analyzing anomalies with ThirdEye",permalink:"/blog/2020/12/01/LinkedIn-Thirdeye"}},s=[],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Lambda architecture has become a popular architectural style that promises both speed and accuracy in data processing by using a hybrid approach of both batch processing and stream processing methods."),(0,r.kt)("p",null,"Read More at ",(0,r.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2021/pinot-and-theta-sketches"},"https://engineering.linkedin.com/blog/2021/pinot-and-theta-sketches")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2021/04/thetasketches2.png",alt:"From Lambda to Lambda-less Lessons learned"})))}u.isMDXComponent=!0}}]);