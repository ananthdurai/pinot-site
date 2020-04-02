/*! For license information please see c571a310.5509b13b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),c=(a(0),a(193)),i=a(198),l=a(197),s={title:"AWS Quickstart",sidebar_label:"AWS",description:"Run Pinot on AWS"},o={id:"administration/installation/cloud/aws",title:"AWS Quickstart",description:"Run Pinot on AWS",source:"@site/docs/administration/installation/cloud/aws.md",permalink:"/docs/administration/installation/cloud/aws",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/cloud/aws.md",sidebar_label:"AWS",sidebar:"docs",previous:{title:"Running Pinot in Kubernetes",permalink:"/docs/administration/installation/cloud/on-premise"},next:{title:"GCP Quickstart",permalink:"/docs/administration/installation/cloud/gcp"}},u=[{value:"Tooling Installation",id:"tooling-installation",children:[]},{value:"(Optional) Login to your AWS account",id:"optional-login-to-your-aws-account",children:[{value:"(Optional) Create a Kubernetes cluster(EKS) in AWS",id:"optional-create-a-kubernetes-clustereks-in-aws",children:[]}]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}],b={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This document provides the basic instruction to set up a Kubernetes Cluster on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/eks/"}),"Amazon Elastic Kubernetes Service (Amazon EKS)")),Object(c.b)(i.a,{type:"info",mdxType:"Alert"}," Because Pinot must be manually updated on Nix, new Pinot releases will be delayed. Generally new Pinot releases are made available within a few days."),Object(c.b)("h2",{id:"tooling-installation"},"Tooling Installation"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install Pinot"),Object(c.b)("p",{parentName:"li"},"Please follow this link (",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"}),"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),Object(c.b)("p",{parentName:"li"},"For Mac User"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install kubernetes-cli\n")),Object(c.b)("p",{parentName:"li"},"Please check kubectl version after installation:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl version\n")),Object(c.b)(i.a,{icon:!1,type:"info",mdxType:"Alert"},"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install Helm"),Object(c.b)("p",{parentName:"li"},"Please follow this link (",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/using_helm/#installing-helm"}),"https://helm.sh/docs/using_helm/#installing-helm"),") to install helm."),Object(c.b)("p",{parentName:"li"},"For Mac User"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install kubernetes-helm\n")),Object(c.b)("p",{parentName:"li"},"Please check helm version after installation."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm version\n")),Object(c.b)(i.a,{icon:!1,type:"info",mdxType:"Alert"},Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1."),Object(c.b)("li",{parentName:"ul"},"Please pick the script based on your helm version.")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install AWS CLI"),Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"(https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html#install-tool-bundled)"}),"Install AWS CLI")),Object(c.b)("p",{parentName:"li"},"For Mac User"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl "https://d1vvhvl2y92vvt.cloudfront.net/awscli-exe-macos.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install Eksctl"),Object(c.b)("p",{parentName:"li"},"Install ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html#installing-eksctl"}),"AWS CLI")),Object(c.b)("p",{parentName:"li"},"For Mac User"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew tap weaveworks/tap\nbrew install weaveworks/tap/eksctl\n")))),Object(c.b)("h2",{id:"optional-login-to-your-aws-account"},"(Optional) Login to your AWS account"),Object(c.b)("p",null,"For first time AWS user, please register your ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/"}),"aws account")),Object(c.b)("p",null,"Once created the account, you can go to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.aws.amazon.com/iam/home#/home"}),"AWS Identity and Access Management (IAM)")," to create a user and create access keys under Security Credential tab."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"aws configure\n")),Object(c.b)(i.a,{type:"info",mdxType:"Alert"}," Environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY will override  AWS configuration stored in file ~/.aws/credentials"),Object(c.b)("h3",{id:"optional-create-a-kubernetes-clustereks-in-aws"},"(Optional) Create a Kubernetes cluster(EKS) in AWS"),Object(c.b)("p",null,"Below script will create a 3 nodes cluster named pinot-quickstart in us-west-2 with t3.small machines for demo purposes.\nPlease modify the parameters in the example command below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"EKS_CLUSTER_NAME=pinot-quickstart\neksctl create cluster \\\n  --name ${EKS_CLUSTER_NAME} \\\n  --version 1.14 \\\n  --region us-west-2 \\\n  --nodegroup-name standard-workers \\\n  --node-type t3.small \\\n  --nodes 3 \\\n  --nodes-min 3 \\\n  --nodes-max 4 \\\n  --node-ami auto\n")),Object(c.b)("p",null,"You can monitor cluster status by command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"EKS_CLUSTER_NAME=pinot-quickstart\naws eks describe-cluster --name ${EKS_CLUSTER_NAME}\n")),Object(c.b)("p",null,"Once the cluster is in ACTIVE status, it's ready to be used."),Object(c.b)("h2",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),Object(c.b)("p",null,"Simply run below command to get the credential for the cluster pinot-quickstart that you just created or your existing cluster."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"EKS_CLUSTER_NAME=pinot-quickstart\naws eks update-kubeconfig --name ${EKS_CLUSTER_NAME}\n")),Object(c.b)("p",null,"To verify the connection, you can run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get nodes\n")),Object(c.b)("h2",{id:"pinot-quickstart"},"Pinot Quickstart"),Object(c.b)("p",null,"Please follow this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/administration/installation/cloud/on-premises"}),"Kubernetes QuickStart")," to deploy your Pinot Demo."),Object(c.b)(l.a,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),Object(c.b)("h2",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"EKS_CLUSTER_NAME=pinot-quickstart\naws eks delete-cluster --name ${EKS_CLUSTER_NAME}\n")))}p.isMDXComponent=!0},193:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||c;return a?r.a.createElement(d,l({ref:t},o,{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},194:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},195:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),i=a(39),l=a(196),s=a(13),o=a.n(s);t.a=function(e){var t,a=e.to,s=e.href,u=a||s,b=Object(l.a)(u),p=Object(r.useRef)(!1),m=o.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&b&&window.docusaurus.prefetch(u),function(){m&&t&&t.disconnect()}}),[u,m,b]),u&&b?c.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var a,n;m&&e&&b&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):c.a.createElement("a",Object(n.a)({},e,{href:u}))}},196:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(195),i=a(194),l=a.n(i);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.icon,s=e.size,o=e.target,u=e.to,b=l()("jump-to","jump-to--"+s,a),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return o?r.a.createElement("a",{href:u,target:o,className:b},p):r.a.createElement(c.a,{to:u,className:b},p)}},198:function(e,t,a){"use strict";a(199);var n=a(0),r=a.n(n),c=a(194),i=a.n(c);a(133);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,c=e.icon,l=e.type,s=null;switch(l){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==c}),role:"alert"},!1!==c&&r.a.createElement("i",{className:i()("feather","icon-"+(c||s))}),t)}},199:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(200)}),a(75)("fill")},200:function(e,t,a){"use strict";var n=a(26),r=a(76),c=a(25);e.exports=function(e){for(var t=n(this),a=c(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,a),s=i>2?arguments[2]:void 0,o=void 0===s?a:r(s,a);o>l;)t[l++]=e;return t}}}]);