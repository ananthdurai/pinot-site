/*! For license information please see 0b8045ed.e65b028b.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7550],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var A=n.createContext({}),s=function(e){var t=n.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(A.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,A=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(A,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var A in t)hasOwnProperty.call(t,A)&&(i[A]=t[A]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8448:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},2168:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(50),o=r(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var A=37,s=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=(0,a.Z)(),k=m.tabGroupChoices,f=m.setTabGroupChoices,b=(0,n.useState)(u),h=b[0],v=b[1],S=n.Children.toArray(e.children),y=[];if(null!=p){var Z=k[p];null!=Z&&Z!==h&&c.some((function(e){return e.value===Z}))&&v(Z)}var N=function(e){var t=e.currentTarget,r=y.indexOf(t),n=c[r].value;v(n),null!=p&&(f(p,n),setTimeout((function(){var e,r,n,a,o,l,A,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,l=window,A=l.innerHeight,s=l.innerWidth,r>=0&&o<=s&&a<=A&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},R=function(e){var t,r;switch(e.keyCode){case s:var n=y.indexOf(e.target)+1;r=y[n]||y[0];break;case A:var a=y.indexOf(e.target)-1;r=y[a]||y[y.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},c.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:R,onFocus:N,onClick:N},r)}))),t?(0,n.cloneElement)(S.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},S.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},2713:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},50:function(e,t,r){"use strict";var n=r(7294),a=r(2713);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6261:function(e,t,r){"use strict";var n=r(7294),a=r(4184),o=r.n(a);t.Z=function(e){var t=e.children,r=e.classNames,a=e.fill,l=e.icon,i=e.type,A=null;switch(i){case"danger":A="alert-triangle";break;case"success":A="check-circle";break;case"warning":A="alert-triangle";break;default:A="info"}return n.createElement("div",{className:o()(r,"alert","alert--"+i,{"alert--fill":a,"alert--icon":!1!==l}),role:"alert"},!1!==l&&n.createElement("i",{className:o()("feather","icon-"+(l||A))}),t)}},9152:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),o=r(7294),l=r(3905),i=(r(6261),r(2168)),A=r(8448),s=["components"],u={title:"Cluster",sidebar_label:"cluster",description:"Cluster",draft:!0},c={unversionedId:"components/cluster",id:"components/cluster",isDocsHomePage:!1,title:"Cluster",description:"Cluster",source:"@site/docs/components/cluster.md",sourceDirName:"components",slug:"/components/cluster",permalink:"/docs/components/cluster",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/components/cluster.md",version:"current",sidebar_label:"cluster",frontMatter:{title:"Cluster",sidebar_label:"cluster",description:"Cluster",draft:!0},sidebar:"docs",previous:{title:"Broker",permalink:"/docs/components/broker"},next:{title:"Pinot Query Language (PQL)",permalink:"/docs/components/controller"}},p=[{value:"Cluster components",id:"cluster-components",children:[{value:"Participant",id:"participant",children:[]},{value:"Spectator",id:"spectator",children:[]},{value:"Controller",id:"controller",children:[]}]},{value:"Logical view",id:"logical-view",children:[]},{value:"Setup a Pinot Cluster",id:"setup-a-pinot-cluster",children:[{value:"Using docker images",id:"using-docker-images",children:[]}]}],d={toc:p};function m(e){var t=e.components,u=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cluster is a set a nodes comprising of servers, brokers, controllers and minions."),(0,l.kt)("p",null,"Pinot leverages ",(0,l.kt)("a",{parentName:"p",href:"http://helix.apache.org"},"Apache Helix")," for cluster management. Helix is a cluster management framework to manage replicated, partitioned resources in a distributed system. Helix uses Zookeeper to store cluster state and metadata."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Cluster Components",src:r(817).Z})),(0,l.kt)("h2",{id:"cluster-components"},"Cluster components"),(0,l.kt)("p",null,"Briefly, Helix divides nodes into three logical components based on their responsibilities"),(0,l.kt)("h3",{id:"participant"},"Participant"),(0,l.kt)("p",null,"The nodes that host distributed, partitioned resources"),(0,l.kt)("h3",{id:"spectator"},"Spectator"),(0,l.kt)("p",null,"The nodes that observe the current state of each Participant and use that information to access the resources. Spectators are notified of state changes in the cluster (state of a participant, or that of a partition in a participant)."),(0,l.kt)("h3",{id:"controller"},"Controller"),(0,l.kt)("p",null,"The node that observes and controls the Participant nodes. It is responsible for coordinating all transitions in the cluster and ensuring that state constraints are satisfied while maintaining cluster stability."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pinot Servers are modeled as Participants, more details about server nodes can be found in ",(0,l.kt)("a",{parentName:"li",href:"../../docs/components/server"},"Server")),(0,l.kt)("li",{parentName:"ul"},"Pinot Brokers are modeled as Spectators, more details about broker nodes can be found in ",(0,l.kt)("a",{parentName:"li",href:"../../docs/components/broker"},"Broker")),(0,l.kt)("li",{parentName:"ul"},"Pinot Controllers are modeled as Controllers, more details about controller nodes can be found in ",(0,l.kt)("a",{parentName:"li",href:"../../docs/components/controller"},"Controller"))),(0,l.kt)("h2",{id:"logical-view"},"Logical view"),(0,l.kt)("p",null,"Another way to visualize the cluster is a logical view, wherein a cluster contains ",(0,l.kt)("a",{parentName:"p",href:"../../docs/components/segments"},"tenants"),", tenants contain ",(0,l.kt)("a",{parentName:"p",href:"../../docs/components/tables"},"tables"),", and tables contain ",(0,l.kt)("a",{parentName:"p",href:"../../docs/components/segments"},"segments"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Logical View",src:r(664).Z})),(0,l.kt)("h2",{id:"setup-a-pinot-cluster"},"Setup a Pinot Cluster"),(0,l.kt)("p",null,"Typically, there is only cluster per environment/data center. There is no needed to create multiple Pinot clusters since Pinot supports the concept of ",(0,l.kt)("a",{parentName:"p",href:"../../docs/components/tenants"},"tenants"),"."),(0,l.kt)("p",null,"At LinkedIn, the largest Pinot cluster consists of 1000+ nodes."),(0,l.kt)("p",null,"To setup a Pinot cluster, we need to first start Zookeeper:"),(0,l.kt)(i.Z,{className:"Install",defaultValue:"Using launcher scripts",values:[{label:(0,l.kt)(o.Fragment,null,(0,l.kt)("i",{className:"Using docker images"})," Using docker images"),value:"docker"},{label:(0,l.kt)(o.Fragment,null,(0,l.kt)("i",{className:"Using launcher scripts"})," Using launcher scripts"),value:"launcer"}],mdxType:"Tabs"},(0,l.kt)(A.Z,{value:"docker",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a Network\nCreate an isolated bridge network in docker")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create -d bridge pinot-demo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Start Zookeeper")),(0,l.kt)("p",null,"Start Zookeeper in daemon."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    --network=pinot-demo \\\n    --name pinot-zookeeper \\\n    --restart always \\\n    -p 2181:2181 \\\n    -d zookeeper:3.5.6\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Start Zookeeper UI\nStart  ZKUI to browse Zookeeper data at http://localhost:9090.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    --network pinot-demo --name=zkui \\\n    -p 9090:9090 \\\n    -e ZK_SERVER=pinot-zookeeper:2181 \\\n    -d qnib/plain-zkui:latest\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"}))),(0,l.kt)(A.Z,{value:"launcer",mdxType:"TabItem"},(0,l.kt)("p",null,"Download Pinot Distribution using instructions in Download"),(0,l.kt)("p",null,"Start Zookeeper"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pinot-admin.sh StartZookeeper\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Start Zooinspector")),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jfim/zooinspector"},"zooinspector")," to view the data in Zookeeper, and connect to localhost:2181"))),(0,l.kt)("p",null,"Once we've started Zookeeper, we can start other components to join this cluster. If you're using docker, pull the latest ",(0,l.kt)("inlineCode",{parentName:"p"},"apachepinot/pinot")," image."),(0,l.kt)("h3",{id:"using-docker-images"},"Using docker images"),(0,l.kt)("h4",{id:"pull-pinot-docker-image"},"Pull pinot docker image"),(0,l.kt)("p",null,"(Optional) You can also follow the instructions here to build your own images.",(0,l.kt)("br",null)),(0,l.kt)("p",null,"You can try out pre-built Pinot all-in-one docker image."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"export PINOT_VERSION=0.3.0-SNAPSHOT\nexport PINOT_IMAGE=apachepinot/pinot:${PINOT_VERSION}\ndocker pull ${PINOT_IMAGE}\n")),(0,l.kt)("p",null,"To start other components to join the cluster"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start Controller"),(0,l.kt)("li",{parentName:"ul"},"Start Broker"),(0,l.kt)("li",{parentName:"ul"},"Start Server")),(0,l.kt)("p",null,"Explore your cluster via Pinot Data Explorer"))}m.isMDXComponent=!0},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},664:function(e,t,r){"use strict";t.Z=r.p+"assets/images/ClusterLogical-a82f8d136804e81aa069c9cb7f1f53ec.png"},817:function(e,t){"use strict";t.Z="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAC9ASMDASIAAhEBAxEB/8QAHQABAAMAAwEBAQAAAAAAAAAAAAYHCAEEBQMCCf/EAFUQAAAFAgMDBQkLCQUFCQAAAAABAgMEBQYHERUSEyEIFFZhYhgiMVKUlqHS1BcjMjhBUViks7XVFjdXZ3V3k7TjCXSio9MkM0KlsUNEU2Nxc4GRsv/EABwBAQABBQEBAAAAAAAAAAAAAAAHAgMEBQYBCP/EADkRAAIBAQMICAYCAgIDAAAAAAABAgMEBRESFCExUaGx0RNBUlNhYnGRBhUWF8HwMoEiMwfxNELh/9oADAMBAAIRAxEAPwD+qYAAAAAAAAAAAAAAAAAAAAAArLlKJ28FbhR4xwi+uMizRXHKHRvMIa0jxnoBfXWBnXXot1HHtx4ow7w/8Srh2ZcGYa01XzGGmq+YxL9L7IaX2R9EdPR7K9kQV0VbtP3ZENNV8xhpqvmMS/S+yGl9kOno9leyHRVu0/dkQ01XzGGmq+YxL9L7IaX2Q6ej2V7IdFW7T92XbyNWTYhXWg//ABYZ/wCF0aQFAclJjm5XU3ll38I/Q8L/ABBHxS1K967WrFcETP8ADqauuinrw/LAAA0BugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr7HtG8wtqaPGlU4vrzAsEQTG5G8w5mI8afSy+vxxl3e8LXSfmjxRjWxY2aovK+BmKsuUq3qTMrtcnMQKfAZXIlSX1khtltJGalKUfAiIiEIh40YYS2KlIfqdTpqaXS3626mqUOdBcdgMp2nZDKH2UKfQksjPdkoyzLhxLOX8oWxq/dmENdpNr03UKo2qHUGIRqJPPOay2ZKo+Z8M3Esqb45Ee1xMvCK+xPuio4tWFeVFsnCy5nUIsavb6ZV7dlwZTU12KbbMGI282lbzzhmvb3ZKSRISWZmoiEm2i9qlOTUGtCx1N4vT49Wj3I7oXZCpFOSevalhq8Ov8ABabVPQ80l5os0OJJSTyyzI+JDq1hyl0CnPVetTGocOPs71908kIzUSSzPrMyL/5FNMR7qhXHGsU7Ju9yb7p0asuSkUeScFulqYSonjlbG52drvDSStpKtrMiIjMVuxhhVJ9p3pRTw5rtabXRClzJU62Z8KpHMZnsrKNKQpS2KnKJs3jTIjZmaWzLwOJztTv2aX+MdOnr61/RdhcsW/8AKWjR1dXua50rshpXZGa6JYd6O44JlHDqsKaV4MzKfIbs2obabcShG7ZOorlNxWY3N82lxza3iXDP3tS8jF4cmjDRFmYT0k5dHnwa1VG+d1Yp5u85U/tKIiWTnfJJKdlKU5ERJIiIheoXzOtPJccFp047MPDXpLVa6YUo5Sli9HVt/wCjQXJvY5vMulvLLhBP0PC7hUWBbHN6zdDeWXvcA/txboj2/Z9JeFSW3DgjurmjkWGnHw/LAAA1BswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhWMKN5YrqPGqlJL/mMcTURDFRG8tFKPGrFHL/AJlGGRZHhaIPxXEs2hY0ZrwfAgml9QaX1CY6UfihpR+KOm+YeJzuYkO0vqDS+oTHSj8UNKPxQ+YeIzEh2l9QaX1CY6UfihpR+KHzDxGYnmYUsc3ua528v+wp5/bizBBLFY5veVzN5f8Adacf8wJ2OevCfSWiUtuHBG9sUcihGOzHiwAAMIywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjl/02pVS3Ob0mEcuSzUKdMJgnEoNxDE1l5ZEpRkkj2W1ZZn4RIwFUJunJTXUUyipxcX1kN1a5/0cVLy+H/qjnVrn/RxUvL4f+qJiAvZx5Vv5lvoVte7kQ3Vrn/RxUvL4f+qIrhZjLExmsKk4mYfWVVZ9v1tDq4Uhx+Owpwm3VtKzQ4slJyW2ouJfJmLcGZP7NP4kOGH92qP3lKDOPKt/MdCtr3ci6tWuf9HFR8vh/wCqGrXP+jio+Xw/9UTEAzjyrfzHQra93IiVpQ6z+UVbrNToT1Mbmx4bTSHXmnDUps3tr/dqVw79Phy8PUJaAC1Um6ksplyEVBYIAACgqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzJ/Zp/Ehwx/u1R+8pQ02Mx/2aXxIcMf7vUfvOUANOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK1uLHWiUO7apZlPsq9Lin0VLB1BdFoypDMdTze8bQpZqSRqNBkrhmXEuOeZEBZQCqvd9/Urir5uf1A9339SuKvm5/UAFqgKq9339SuKvm5/UD3ff1K4q+bn9QAWqAqr3ff1K4q+bn9QPd9/Urir5uf1ABaoCqvd9/Urir5uf1A9339SuKvm5/UAFqgKHuPlawLerlNtpOAeMdTq1ViS50eHCtxnenHjLYQ87k5IR3qVSmEmZZ8XE/OOv3WlV+iXj/wCbUP2wAaAAZ/7rSq/RLx/82oftgd1pVfol4/8Am1D9sAGgBmP+zR+JDhl/7FS+85Q9zutKr9EvH/zah+2CqORzfeJuBXJssrCu7+SpjDKq1DYlc4dgQaYbCt9LefRs72c24Rkh1JGSkJMjIyy4ADa4Cju6Xun6JOOHkFG/Eg7pe6fok44eQUb8SAF4gKO7pe6fok44eQUb8SDul7p+iTjh5BRvxIAXiAoiLyqZ0i6Idmv8mbGKFV6hAl1OLHkw6QjfRozkdt9aT1Ey7xcuORkZ5++FlnkeUi9266fo14q/w6N+IAC1QFVe7ddP0a8Vf4dG/EA9266fo14q/wAOjfiAAtUBVXu3XT9GvFX+HRvxAPduun6NeKv8OjfiAAtUBVXu3XT9GvFX+HRvxAPduun6NeKv8OjfiAAtUBVXu3XT9GvFX+HRvxAPduun6NeKv8OjfiAAtUBXFo40IuW942H9Zw1vG0qrOpUysQtbahE3JjxXozT+wqNJeyUlU2PwUScyXwzyMWOAAAAAAAAAAAAAqrDT89eMX9+on3a2LVFVYafnrxi/v9F+7GgBaoAAAAAAAAAAAAAAqq4/jT4efu/vL7xtwWqKquP40+Hn7v7y+8bcFqgAAAAAAAAAAAAAAAKquP402Hn7v7y+8bcFqiqrj+NNh5+7+8vvG3BaoAAAAAAAAAAAAAAACqrj+NNh5+7+8vvG3Baoqq4/jTYefu/vL7xtwWqAAAAAAAAAAAAAqrDP89WMf7Qov3Y0LDuS4aNaNu1S67imlDpVFhP1GdINClkzHZQbji9lJGo8kpUeREZnlwIxnnDDlC4HvYy3u7ExTtyX+XNZocS3UxJyH11J06a0kyaQ3moySrvVqMiJCuCjSfAAaYAAAAAAAAAAAAAAFVXH8afDz9395feNuC1Rji8+WxyaqTj7RbsqmIzMNmzrXvSgVeFJiPtT2ajqdCS3HKKtBOmtzm7xoIk8SbWfDZVs7BiSm5sRmayl5LchtLqEvMracIlFmRKQsiUhXHilREZHwMiMAfYAAAAAAAAAAAAAAVVcfxpsPP3f3l9424LVGOLz5bHJqpOPlFuyqYjMw2bOte9KBV4UmI+1PZqOp0JLccoq0E6a3ObvGgiTxJtZ8NlWzsGJKbmxGZrKXktyG0uoS8ytpwiUWZEpCyJSFceKVERkfAyIwB9gAAAAAAAAAAAAABVVx/Gmw8/d/eX3jbgtUY4vPlscmqk4+UW7KpiMzDZs6170oFXhSYj7U9mo6nQktxyirQTprc5u8aCJPEm1nw2VbOwYkpubEZmspeS3IbS6hLzK2nCJRZkSkLIlIVx4pURGR8DIjAH2AAAAAAAVx3RODHTmN5M/6gd0Tgx05jeTP+oMQM03eMoXl8JJH6B+9K6hLtP/AI8u+cFJ156V4ciMKnx1bYTcVRjoe1m2X+UFglJZcjSb0hutOpNDja4rykrSZZGRkbeRkZfIMJckjk94K4Ccq7ELFaq3VDVbdNWpvD41JW5k3MSan1mkiNaFsIM4xGsi2yccURZbJj1NK6g0rqFf26u7v57uRR9eW7uY+7Nud0Tgx05jeTP+oHdE4MdOY3kz/qDEeldQaV1B9uru7+e7kPry3dzH3Zu+3MZMNLuq7NBty6WZs+QSjbZQw6RmSUmpR5qQRFkRH4TE0GKuTbD5tjFRlZeFqWX+QsbVEf8AxLdFG5bbmtCTkslPF4deOw7e4Lzq3vY85qxUXi1gvADrVKow6RTpVWqL5MxITK5D7hkZkhtCTUpWRcTyIjPgOyI1ib+ba7P2HP8A5dY0VOKnNRfWzczeTFtEd7onBjpzG8mf9QO6JwY6cxvJn/UGI9K6g0rqEu/bq7+/nu5EX/Xlu7mPuz1cSMBOTzfnLdtjlLqvujptyMwmo12mKjyd5Kq8bJMVaUk3sbtXvalkfhNlWee9zLY/dE4MdOY3kz/qDEeldQaV1B9uru7+e7kPry3dzH3ZtzuicGOnMbyZ/wBQO6JwY6cxvJn/AFBiPSuoNK6g+3V3d/PdyH15bu5j7s3vaeKlgX1UHaValxtVCUyychxtDLqdlslEk1ZqSReFSS+fiJYMl8kiLzbESqcPhUVz7dka0Ec/EF2Urot87JRk5RWGl69Kx6jvLkvCpelijaqsUm8dC8HgB51w3DR7Vo8iv1+amJAiEk3nlIUokbSiSXBJGfhUReD5R6IrflEp28G7iR4yYxfWWhrrHRjaLRToy1Skl7vAz7TVdChOrHXFN+yOe6JwY6cxvJn/AFA7onBjpzG8mf8AUGI9K6g0rqEr/bq7u/nu5EafXlu7mPuz1cSMBOTzfnLdtjlLqvujptyMwmo12mKjyd5Kq8bJMVaUk3sbtXvalkfhNlWee9zLY/dE4MdOY3kz/qDEeldQaV1B9uru7+e7kPry3dzH3ZtzuicGOnMbyZ/1A7onBjpzG8mf9QYj0rqDSuoPt1d3fz3ch9eW7uY+7P6AWfiJZl/FLO0a43USg7vnGw24jY29rZ+Gks89hXg+YSMZt5HMfm6rvb+fTz/mBpIRpfdgp3Zb6lkpNuMWtL16kyQbotk7wsVO01Fg5LUvVgeLdd423ZFNRWLpqiYENbyWEuqbWst4ZGZF3pGZcEnx8HAe0KW5WTW+wzit+NWGPs3RYuyywttspWabwUpJNrxLt4WiVkstSvBYuKb9iRd0Tgx05jeTP+oHdE4MdOY3kz/qDEeldQaV1CUvt1d3fz3ciOfry3dzH3Z6uJGAnJ5vzlu2xyl1X3R025GYTUa7TFR5O8lVeNkmKtKSb2N2r3tSyPwmyrPPe5lsfuicGOnMbyZ/1BiPSuoNK6g+3V3d/PdyH15bu5j7s253RODHTmN5M/6gd0Tgx05jeTP+oMR6V1BpXUH26u7v57uQ+vLd3Mfdm3e6IwZ6cxvJn/UAYQmNbiQtrxcv+gDlrR8M2WjWnTU5NJtdXU/Q6mz35XrUYVHFJtJ9fWvUnVMpu8psReXwmGz/AMJDs6V1CKNYxQINPkHR7Auu4qVbbTcetVelx4648N1LSVOoShbyHn1NkZGsmW15cS4qI0lYH5SWWVWg0Bd1Uhuq1NgpMKnuTW0SpDRlmS0MqMlqLLPwF8hjvKN7U3FRUtWHL+zha12TU3Jx14nlaV1BpXUPvNv/AA2gx6pIcvigunRYTlRnMs1Flx1iOjwuKQSsyLPhmZZZmRD6Ua+MPq9Bg1Cm3hRnEVGGU6Og5zROKZ3e8NWztZkSUEZq+YiPPwC4r1pt4ZSx9S38tnhjkv2OppXUGldQ/buIFjuRaLPotZi12HXaumiRpVJksymUyVNuOd+tK8iIiaVnlmZGZcPm/Ns4h2Jc9CtetIrkOmLvCCzUKTT6jKZZmPtupJSUpa2z2lFnkZINRZ/KY8V7U28MpfuHND5ZNLHJ/f1E5wMh82xZoS8vCmUX1dwa4GU8Hatb0rGCj0um1ynyp0Q5fOIzEpDjrOTDqT20JPNPfJUniXhIy8JDVgjL4vrKveCmn/6riyRPhek6NgyX2n+AI1ib+be6/wBhzvsFiSiNYmfm3uv9hzvsFjm6H+2PquJ0FX+D9DGJUrvS4fIOdK6hL0UrvC735BW1Mxgo1YqcdEGzLndoUyquUSPcKIzC4K5jb6o6kGlLpyEI3qFIJxTRIzL4WXETlO9YU8FJ6yG43bKpi4rUe1pXUGldQ9huv2c9PqVKZuqjLm0do3qjGTPaN2G2RZmt5G1m2ki8JqIiHEO4bMqMeoS6fddFlMUps3Z7jM9paIiC281OmSsmy97c4qyLvFfMY9+Zx7RT8ulsPI0rqDSuoe0zWrTk1w7Zj3LSXawTJSdPRNaVJ3RlmTm6JW1smRkeeWWRj7UWfbtysOSrcrlOqrLSkpW5ClNvpSpSErSRmgzIjNC0qL5yUR+AyHqvOL0Jj5fJaWibcmiLzbEabw+FRHvt2BpwZ6wJi82xHf4ZbVEkfbsDQoin4qqdLec5+C4EmfDcOju6EfXiBXuPydvCWuI8Y4hfWmhYQgWOadvC+rI8Z2EX1tkai73hbKT80eKNpbVjZqi8r4GStK6g0rqEnqjTFJpsuqyW1qahsOSHCQRGo0oSajIszIs8i+cVzamNFFuOdb8Sp2Tc9ssXXAcqVGm1dMLm8tlDJPq76PIdNsyaPbycJHAj+UshNU72hTkoyelkQwuyc05RWo9/SuoNK6h3JN74bwozM2Zf1tsR5Mk4bLrtVjpQ7IIiM2kqNeSlkSknslx74uHEcxbstp+sVuiyZSYLlCnRaa87McbaaekSGW3mkNKNXfGZOpTkZEZqzIiPgZ+/NYaspfuk8+Wz15J0tK6g0rqHrN3HZTz9Vis3bRFvUJCnao2moMmqAhJGalPltZtEREZmasssjHoUxVKrcXn1GqMSfG21tb6K8l1G2hRpWnaSZlmlRGky+QyMjFSvKMtTPHd7WtFmclePzeddqMvC3Tj9MkaAFIcnWPzatXW3llnHpp/4pQu8RF8ST6S9KstrXBEpXDDIu6lHwfFgVDynGt9YVPb8asM/ZPC3hVnKIa31o0pv560z9i8Ma5pZF4UZbJLiZF6xyrFVXlfAzBpXUGldQ9G/7gpeHNmVi+K1DmSYNFiqlvsw20rfWlPyISpSSNXUZkItXcabCoVHw/ra01CZHxJnwIFGKK0hSknLJOw68SllsNpNxtKzLaMjWkiIxMU73p03hOWGGnfhxIohddSok4xx/cT2NK6g0rqH1av6xG6bFqNbuSk0PnitlpipVOK04o96ttOWy4pJ7Sm15ZKPPIy8JGRfeZd9pUjWXrkq8GhRKJNagPTKlOjMMLccYbeTko3O94OkWy4SFGZGZJNJpUqr5rDDHKPPls8cMk6eldQaV1D0qnddh0VEZys3pQICJiGnIypVSZaJ5LpmTakGpRbRKNKtky8OR5Z5D39K7IqV5RloTKXYGtLRS9xtbisyGvF2P/wQDu321uLqnNZfB3X2aQHN15ZdWUtrfE6uzRyaMI7EuB8bGo+NOGdsV607OwzduBVxTZFctyvFPiNQIipyUurTOQ46l8ty8tw/e23NtGyRZHmRfK4MGr8kXLcttOWC7VX7nu6hXCzfCXYjaIUWIUE3kKSp0pCHGzivk0htCkHv05mRbwassam7yybfXs/CpUQ/B/5KR7mldn0DRznD+Dk8F6aNa2ePr4maoSTy1FYv18OXoY1gcnK5otrWfCjWVBi1KOxdTVXcJcclEc5qRudtaVGbhLcUyZ5bWWRZ5bPDzmeTvd1asu7ZkzDduBXJ9tWzAhRZb8Q3ZBQS2pcHeNuLQ2h40G2o9okqJ0jM+HDbeldn0BpXZ9Aoxo6v3Vhs2FWFXX+68eJkCm4T3tXr6axBjYbSrUgSbnoj6qPKkQkusxoUGY27MWmO6tvNS5LTRJStSzQygzSXyVXTuTBjDEpEK3KzblyuKrVs23TFKpc2hpj0x2GwlDzUl+S09Ia3bqVPIVE2iUpZ5ZK4j+ieldn0BpXZ9A8l0U9bfXv19R7HpIakurdqKb5NOGzli4lTapUrfjQKjcN316oqkI3anZUZaHjjrUtBmeW7IskmeaflIjzGwxT9Jh82v61l5ZZyJRfVXRcA0F8NOtHJ1ZP5Zu7qTVF5W38ICNYmfm4uv9iTvsFiSiN4l/m4ur9iTvsFjXUP9sfVGwq/wfoUi3Sve0978hDL8fCfEZN4wp9v4VVSzrrRc7Uys3DRq20xbdVp3O9p9xcLnKnHXXo+0RpVHJROqzNwiIlHtBql+9I73/hL5OofvSuz6B3Fa0xrYZT1fv7gcbSs8qWOC1mALZ5NmK0WJJoVToNyvzqLSrmaROfmURqnVGROYfbb3BsslNeN5TqHFlJcQSFIIzNWyRCeXfybbi2rJodjW1Ag0CrUWJa17x2ltNJYpzD7UnaSkj99UokzIx7O0f8Atm14EmY2HpXZ9AaV2fQMePQxjk4v9/8Amj0L8nVlLKwX7+4mJLdwDxFhYvGurUi5XoLN9T7rbqyJNGbphRXTdU0RK3Kqkt0kOFHUyakt7JHkskElIuTk74Wu4a4K2faM+3Y1HqsOkRiqsdndn/t27LfqUtszStRrzzURnn85kL30rs+gNK7PoF2jVp0JZUXp078ORbq051o5Mls3Y8zo4UxebYk5ZZbVDk/zEcXaKqsqLzbEpgsstqhy/wCYjC1RzV81OltTntSOguqHR2ZR8WBCMaE7eHNRR40iCX1xkTcQ3F1O3YctHjTKeX11kYdjeFppvzLiZdpWNCa8HwKNuq3pNRtisU+ExvJEqBIZZRmRbS1NqJJZnwLMzLwjJ9m8ny/GGLOTSsGK1adVoFtyqXXKpVrmjTWqilymrZOLGYblPknblbhzbMmiSlrLjnsjeuldn0BpXZ9A7KtWhXkpSer08Hs4HJ0aU6MXGK1+pi6VghX7Hg0FFJwSRdEd7DpFqrpsV2AhFLqWRqdcd37qEqQ+ayS662a1e8EeSs+PWtvk4YoWXiNSb73ci4maE9RqWcCRJjm3IYKjx4cmrM7ai2ZTTrZ/DMjU0TqUFm4W1trSuz6A0rs+gWsaWKeL0aV+8y5hUwaw16Gfzzt/kzYus2VVLVn21cj1XpFk3HRWZcudRGoFRmzI6m0JjKYaKU8l5ey6pUt1GwpJbRqVmY2Na1mUy17dp1v0ekxqdEgxm2W4sZtKG2yJPEiJPDw//YsbSuz6A0rs+gXLPVp2bTF+5RXpztH8kfvBSPza5roRllnDph/45YtwVrhlH5teNzIyyzp9MP8AzJgsocte0+ktk5bcOCOku2ORZYR2Y8WBW+ObW+oFEby+FW2vsHhZAgWLrW+gW+3l8KttfYPi3d0si1QlsZct0cqzzj4GcMdrFrt44Q3VbFs0/nlUqMBTMVjeIb3izUR5bSzJJeD5TIUhJ5OmKDl3KS5Q2n6DaF2Uhy0lFMZ2jpb1caqVRcNJqI0EyhtlhKDLbUmOeyStos9uaV2fQGldn0Dra1anXllSfh+8f6Ry1KlOjHJivHh/1/bMVUjk3XW/Qq+zclhw5Ex7D2o0KBv3YzplNenz3iaSe2extJcjK2syTxLM80mRGMHsRrav1GIdWwzmXTBiVdLukxpUFb7hOUCmReeoS+8hs1tPxJDWSlpVsuqUnMsjPauldn0BpXZ9At40kkk3ow2dX9FzCo221r9esxPQuTLczdt1qLXbGgyJMrDmdSaew47GdKHNlTp0koDajVklLSXo7ZLLJGTaclcOGk7XoE2FbNJhVJo0y48GO1ISaiUZOJbIlFmRmR8SPiRixdK7PoDSuz6BeoV4UP4MtVaM638jJ2KTW4vuptZfB3P2KAHcxqa3GJlZa8Xm/wDLtgNlGWXFS2ltRyf8dhrTDmm7zD22HNn4VGhH/kIEi0rsjpUG0b+t6h06gQ7vt1yPTIjMNpbtvPmtSG0EhJqMppEZ5EWeRF/6DvaRiP0rtjzdke2jh6lqTm2prX48jpo2fCKTjw5nGldkNK7I50jEfpXbHm7I9tDSMR+ldsebsj20U5z51v5FWbrsvdzONK7IaV2RzpGI/Su2PN2R7aGkYj9K7Y83ZHtoZz51v5DN12Xu5nkyYXNr1tNeWWcuUX1R0WGIjGte6n69S6vXrjpEhmluOuoZh0h2OpaltKb4rXJcLIiWZ/B+TwiXDFtVRVXFp46PyzIs8OjTWGGn8ICN4l/m5ur9iTvsFiSDzbmo/wCUNuVWgc45vqcF+Hvtjb3e8bNG1s5lnlnnlmWfzizSkozi3tRemm4tI8Bmle8o73/hL/oP3pXZBFGxGQgkFdds5JIi427I9tHOkYj9K7Y83ZHto2Gc+db+Rg5uuzw5nGldkNK7I50jEfpXbHm7I9tDSMR+ldsebsj20M58638hm67L3czjSuyGldkc6RiP0rtjzdke2hpGI/Su2PN2R7aGc+db+Qzddl7uZ51Li82xMhcMtqhTf5iKJ8ItRrauJm5W7iuCvU2YpiC9CaahUxyKRE442s1KNb7uf+6IiIiLwmJSMO01FUkmnjoMmhDIi1gBEsUk7dmuo8afTS+usCWjxruoT9x0J2lRZzcN5T0d9t5xg3kJU08h0tpBKSaiM0ZHkovD4RRQkoVYyepNcSurFypyitjPK0rshpXZHOkYj9K7Y83ZHtoaRiP0rtjzdke2jPznzrfyMPN12Xu5nGldkNK7I50jEfpXbHm7I9tDSMR+ldsebsj20M58638hm67L3czjSuyGldkc6RiP0rtjzdke2hpGI/Su2PN2R7aGc+db+Qzddl7uZ1LQj82v2428ss6XSz/zZonAjdtW5WqbWanXa7WYM6RUI8WMlMOAuKhtDKnlEZkt501GZvH8pfBLgJIMK0zVSo5J46uCMqhDIpqL8eIENxIa335NN5Z7Vcb/AJd8TIeDdtAn15inqpdTjwZVOnJmtrkRVSG1GTa0bKkJcbPwOGeZKLwDyzzUKik2e1o5UGkefpXZDSuyOdIxH6V2x5uyPbQ0jEfpXbHm7I9tGdnPnW/kYmbrsvdzONK7IaV2RzpGI/Su2PN2R7aGkYj9K7Y83ZHtoZz51v5DN12Xu5nGldkNK7I50jEfpXbHm7I9tDSMR+ldsebsj20M58638hm67L3czG3KAZ3GLteay+DzX+VaAXre3JcqV+XPNuur4hRWJc7d7xuNRFJbLYbS2WRKkqPwILPMz45gOjoXxY4UoxlPSksdD2ehqalgtDm3GOjHauZ//9k="}}]);