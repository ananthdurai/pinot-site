(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9211],{3905:function(n,t,e){"use strict";e.d(t,{Zo:function(){return p},kt:function(){return g}});var i=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,i,o=function(n,t){if(null==n)return{};var e,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=i.createContext({}),u=function(n){var t=i.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},p=function(n){var t=u(n.components);return i.createElement(c.Provider,{value:t},n.children)},s={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(n,t){var e=n.components,o=n.mdxType,r=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=u(e),g=o,b=d["".concat(c,".").concat(g)]||d[g]||s[g]||r;return e?i.createElement(b,a(a({ref:t},p),{},{components:e})):i.createElement(b,a({ref:t},p))}));function g(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var r=e.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,a[1]=l;for(var u=2;u<r;u++)a[u]=e[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}d.displayName="MDXCreateElement"},3362:function(n,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var i,o=e(2122),r=e(9756),a=(e(7294),e(3905)),l=["components"],c={id:"running_locally",title:"Running Pinot locally",sidebar_label:"Running Pinot locally",draft:!0},u={unversionedId:"administration/running_locally",id:"administration/running_locally",isDocsHomePage:!1,title:"Running Pinot locally",description:"Running Pinot locally",source:"@site/docs/administration/running_locally.md",sourceDirName:"administration",slug:"/administration/running_locally",permalink:"/docs/administration/running_locally",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/running_locally.md",version:"current",sidebar_label:"Running Pinot locally",frontMatter:{id:"running_locally",title:"Running Pinot locally",sidebar_label:"Running Pinot locally",draft:!0},sidebar:"docs",previous:{title:"Features of Pinot",permalink:"/docs/about/features_of_pinot"},next:{title:"Running Pinot in Docker",permalink:"/docs/administration/installation/containers/docker"}},p=[{value:"Running Pinot locally",id:"running-pinot-locally",children:[{value:"Getting Pinot",id:"getting-pinot",children:[]},{value:"Build",id:"build",children:[]},{value:"Download",id:"download",children:[]}]}],s=(i="Alert",function(n){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}),d={toc:p};function g(n){var t=n.components,e=(0,r.Z)(n,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"running-pinot-locally"},"Running Pinot locally"),(0,a.kt)("p",null,"Pinot Quickstart local"),(0,a.kt)("h3",{id:"getting-pinot"},"Getting Pinot"),(0,a.kt)("p",null,"First, let's get Pinot. You can either build it, or download it"),(0,a.kt)("blockquote",null,(0,a.kt)("b",null,"Prerequisites:")," ",(0,a.kt)("br",null)," ",(0,a.kt)("p",null,"\xa0 ",(0,a.kt)("a",{href:"https://linuxize.com/post/install-java-on-ubuntu-18-04/#installing-openjdk-8",target:"_blank"},"Install Java 8 or higher...")," ")),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("p",null,"Follow these steps to checkout code from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-pinot"},"Github")," and build Pinot locally"),(0,a.kt)("blockquote",null,(0,a.kt)("b",null,"Prerequisites:")," ",(0,a.kt)("br",null)," ",(0,a.kt)("p",null,"\xa0 Install ",(0,a.kt)("a",{href:"https://maven.apache.org/install.html",target:"_blank"},"Apache Maven"),"  3.6 or higher. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# checkout pinot\ngit clone https://github.com/apache/incubator-pinot.git\ncd incubator-pinot\n\n# build pinot\nmvn install package -DskipTests -Pbin-dist\n\n# navigate to directory containing the setup scripts\ncd pinot-distribution/target/apache-pinot-incubating-${pinot.version}-bin/apache-pinot-incubating-${pinot.version}-bin\n")),(0,a.kt)("h3",{id:"download"},"Download"),(0,a.kt)("p",null,"Download the latest binary release from Apache Pinot, or use this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://downloads.apache.org/incubator/pinot/apache-pinot-incubating-${pinot.version}/apache-pinot-incubating-${pinot.version}-bin.tar.gz\n")),(0,a.kt)("p",null,"Once you have the tar file,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# untar it\ntar -zxvf apache-pinot-incubating-${pinot.version}-bin.tar.gz\n\n# navigate to directory containing the launcher scripts\ncd apache-pinot-incubating-${pinot.version}-bin\n")),(0,a.kt)("p",null,"If you want to run Pinot using a Docker image instead, head over to Running Pinot in Docker"),(0,a.kt)(s,{type:"info",mdxType:"Alert"},(0,a.kt)("p",null,"Pro-tip: These field names can be controlled via the\n","[global ",(0,a.kt)("inlineCode",{parentName:"p"},"log_schema")," options][docs.reference.global-options#log_schema]",".")))}g.isMDXComponent=!0}}]);