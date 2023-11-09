"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={title:"Automated Upgrades",weight:20},l=void 0,s={unversionedId:"upgrades/automated",id:"upgrades/automated",title:"Automated Upgrades",description:"Overview",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/upgrades/automated.md",sourceDirName:"upgrades",slug:"/upgrades/automated",permalink:"/kr/upgrades/automated",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/automated.md",tags:[],version:"current",lastUpdatedAt:1699546377,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{title:"Automated Upgrades",weight:20},sidebar:"mySidebar",previous:{title:"Manual Upgrades",permalink:"/kr/upgrades/manual"},next:{title:"\ubcfc\ub968\uacfc \uc800\uc7a5\uc18c",permalink:"/kr/storage/"}},i={},p=[{value:"Overview",id:"overview",level:3},{value:"Install the system-upgrade-controller",id:"install-the-system-upgrade-controller",level:3},{value:"Configure plans",id:"configure-plans",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"You can manage K3s cluster upgrades using Rancher's system-upgrade-controller. This is a Kubernetes-native approach to cluster upgrades. It leverages a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources"},"custom resource definition (CRD)"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"plan"),", and a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"controller"),"."),(0,r.kt)("p",null,"The plan defines upgrade policies and requirements. It also defines which nodes should be upgraded through a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"label selector"),". See below for plans with defaults appropriate for upgrading a K3s cluster. For more advanced plan configuration options, please review the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/blob/master/pkg/apis/upgrade.cattle.io/v1/types.go"},"CRD"),"."),(0,r.kt)("p",null,"The controller schedules upgrades by monitoring plans and selecting nodes to run upgrade ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"jobs")," on. When a job has run to completion successfully, the controller will label the node on which it ran accordingly."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The upgrade job that is launched must be highly privileged. It is configured with the following:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Host ",(0,r.kt)("inlineCode",{parentName:"li"},"IPC"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NET"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"PID")," namespaces"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"CAP_SYS_BOOT")," capability"),(0,r.kt)("li",{parentName:"ul"},"Host root mounted at ",(0,r.kt)("inlineCode",{parentName:"li"},"/host")," with read and write permissions"))),(0,r.kt)("p",null,"To automate upgrades in this manner, you must do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the system-upgrade-controller into your cluster"),(0,r.kt)("li",{parentName:"ol"},"Configure plans")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If the K3s cluster is managed by Rancher, you should use the Rancher UI to manage upgrades."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If the K3s cluster was imported into Rancher, Rancher will manage the system-upgrade-controller deployment and plans. Do not follow the steps on this page."),(0,r.kt)("li",{parentName:"ul"},"If the K3s cluster was provisioned by Rancher, Rancher will use system agent to manage version upgrades. Do not follow the steps on this page."),(0,r.kt)("li",{parentName:"ul"},"If the K3s cluster is ",(0,r.kt)("em",{parentName:"li"},"not")," managed Rancher, you may follow the steps below."))),(0,r.kt)("p",null,"For more details on the design and architecture of the system-upgrade-controller or its integration with K3s, see the following Git repositories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher/system-upgrade-controller"},"system-upgrade-controller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s-upgrade"},"k3s-upgrade"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When attempting to upgrade to a new version of K3s, the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/release/version-skew-policy/"},"Kubernetes version skew policy")," applies. Ensure that your plan does not skip intermediate minor versions when upgrading. The system-upgrade-controller itself will not protect against unsupported changes to the Kubernetes version.")),(0,r.kt)("h3",{id:"install-the-system-upgrade-controller"},"Install the system-upgrade-controller"),(0,r.kt)("p",null," The system-upgrade-controller can be installed as a deployment into your cluster. The deployment requires a service-account, clusterRoleBinding, and a configmap. To install these components, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/system-upgrade-controller.yaml\n")),(0,r.kt)("p",null,"The controller can be configured and customized via the previously mentioned configmap, but the controller must be redeployed for the changes to be applied."),(0,r.kt)("h3",{id:"configure-plans"},"Configure plans"),(0,r.kt)("p",null,"It is recommended you create at least two plans: a plan for upgrading server (control-plane) nodes and a plan for upgrading agent nodes. You can create additional plans as needed to control the rollout of the upgrade across nodes. Once the plans are created, the controller will pick them up and begin to upgrade your cluster.  "),(0,r.kt)("p",null,"The following two example plans will upgrade your cluster to K3s v1.24.6+k3s1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Server plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: In\n      values:\n      - "true"\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  version: v1.24.6+k3s1\n---\n# Agent plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: agent-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: DoesNotExist\n  prepare:\n    args:\n    - prepare\n    - server-plan\n    image: rancher/k3s-upgrade\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  version: v1.24.6+k3s1\n')),(0,r.kt)("p",null,"There are a few important things to call out regarding these plans:"),(0,r.kt)("p",null,"1) The plans must be created in the same namespace where the controller was deployed."),(0,r.kt)("p",null,"2) The ",(0,r.kt)("inlineCode",{parentName:"p"},"concurrency")," field indicates how many nodes can be upgraded at the same time. "),(0,r.kt)("p",null,"3) The server-plan targets server nodes by specifying a label selector that selects nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"node-role.kubernetes.io/control-plane")," label. The agent-plan targets agent nodes by specifying a label selector that select nodes without that label."),(0,r.kt)("p",null,"4) The ",(0,r.kt)("inlineCode",{parentName:"p"},"prepare")," step in the agent-plan will cause upgrade jobs for that plan to wait for the server-plan to complete before they execute."),(0,r.kt)("p",null,"5) Both plans have the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field set to v1.24.6+k3s1. Alternatively, you can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," field to a URL that resolves to a release of K3s. This will cause the controller to monitor that URL and upgrade the cluster any time it resolves to a new release. This works well with the ",(0,r.kt)("a",{parentName:"p",href:"/kr/upgrades/manual#release-channels"},"release channels"),". Thus, you can configure your plans with the following channel to ensure your cluster is always automatically upgraded to the newest stable release of K3s:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: upgrade.cattle.io/v1\nkind: Plan\n...\nspec:\n  ...\n  channel: https://update.k3s.io/v1-release/channels/stable\n\n")),(0,r.kt)("p",null,"As stated, the upgrade will begin as soon as the controller detects that a plan was created. Updating a plan will cause the controller to re-evaluate the plan and determine if another upgrade is needed."),(0,r.kt)("p",null,"You can monitor the progress of an upgrade by viewing the plan and jobs via kubectl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n system-upgrade get plans -o yaml\nkubectl -n system-upgrade get jobs -o yaml\n")))}c.isMDXComponent=!0}}]);