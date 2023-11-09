"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(a),k=r,g=d["".concat(s,".").concat(k)]||d[k]||p[k]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(3117),r=(a(7294),a(3905));const l={title:"Resource Profiling",weight:1},i=void 0,o={unversionedId:"reference/resource-profiling",id:"reference/resource-profiling",title:"Resource Profiling",description:"This section captures the results of tests to determine minimum resource requirements for K3s.",source:"@site/docs/reference/resource-profiling.md",sourceDirName:"reference",slug:"/reference/resource-profiling",permalink:"/reference/resource-profiling",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/resource-profiling.md",tags:[],version:"current",lastUpdatedAt:1699546377,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{title:"Resource Profiling",weight:1},sidebar:"mySidebar",previous:{title:"Environment Variables",permalink:"/reference/env-variables"},next:{title:"v1.24.X",permalink:"/release-notes/v1.24.X"}},s={},u=[{value:"Scope of Resource Testing",id:"scope-of-resource-testing",level:2},{value:"Components Included for Baseline Measurements",id:"components-included-for-baseline-measurements",level:2},{value:"Methodology",id:"methodology",level:2},{value:"Environment",id:"environment",level:2},{value:"Baseline Resource Requirements",id:"baseline-resource-requirements",level:2},{value:"K3s Server with a Workload",id:"k3s-server-with-a-workload",level:3},{value:"K3s Cluster with a Single Agent",id:"k3s-cluster-with-a-single-agent",level:3},{value:"K3s Server",id:"k3s-server",level:4},{value:"K3s Agent",id:"k3s-agent",level:3},{value:"Analysis",id:"analysis",level:2},{value:"Primary Resource Utilization Drivers",id:"primary-resource-utilization-drivers",level:3},{value:"Preventing Agents and Workloads from Interfering with the Cluster Datastore",id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",level:3}],m={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section captures the results of tests to determine minimum resource requirements for K3s."),(0,r.kt)("p",null,"The results are summarized as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Components"),(0,r.kt)("th",{parentName:"tr",align:null},"Processor"),(0,r.kt)("th",{parentName:"tr",align:null},"Min CPU"),(0,r.kt)("th",{parentName:"tr",align:null},"Min RAM with Kine/SQLite"),(0,r.kt)("th",{parentName:"tr",align:null},"Min RAM with Embedded etcd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K3s server with a workload"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C CPU, 2.90 GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"6% of a core"),(0,r.kt)("td",{parentName:"tr",align:null},"1596 M"),(0,r.kt)("td",{parentName:"tr",align:null},"1606 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K3s cluster with a single agent"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C CPU, 2.90 GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"5% of a core"),(0,r.kt)("td",{parentName:"tr",align:null},"1428 M"),(0,r.kt)("td",{parentName:"tr",align:null},"1450 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K3s agent"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C CPU, 2.90 GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"3% of a core"),(0,r.kt)("td",{parentName:"tr",align:null},"275 M"),(0,r.kt)("td",{parentName:"tr",align:null},"275 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K3s server with a workload"),(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B BCM2711, 1.50 GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"30% of a core"),(0,r.kt)("td",{parentName:"tr",align:null},"1588 M"),(0,r.kt)("td",{parentName:"tr",align:null},"1613 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K3s cluster with a single agent"),(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B BCM2711, 1.50 GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"25% of a core"),(0,r.kt)("td",{parentName:"tr",align:null},"1215 M"),(0,r.kt)("td",{parentName:"tr",align:null},"1413 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K3s agent"),(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B BCM2711, 1.50 GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"10% of a core"),(0,r.kt)("td",{parentName:"tr",align:null},"268 M"),(0,r.kt)("td",{parentName:"tr",align:null},"268 M")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scope-of-resource-testing"},"Scope of Resource Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#components-included-for-baseline-measurements"},"Components Included for Baseline Measurements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#methodology"},"Methodology")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#environment"},"Environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#baseline-resource-requirements"},"Baseline Resource Requirements"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#k3s-server-with-a-workload"},"K3s Server with a Workload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#k3s-cluster-with-a-single-agent"},"K3s Cluster with a Single Agent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#k3s-agent"},"K3s Agent")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#analysis"},"Analysis"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#primary-resource-utilization-drivers"},"Primary Resource Utilization Drivers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore"},"Preventing Agents and Workloads from Interfering with the Cluster Datastore"))))),(0,r.kt)("h2",{id:"scope-of-resource-testing"},"Scope of Resource Testing"),(0,r.kt)("p",null,"The resource tests were intended to address the following problem statements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On a single-node cluster, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside to run the entire K3s stack server stack, assuming that a real workload will be deployed on the cluster."),(0,r.kt)("li",{parentName:"ul"},"On an agent (worker) node, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside for the Kubernetes and K3s control plane components (the kubelet and k3s agent).")),(0,r.kt)("h2",{id:"components-included-for-baseline-measurements"},"Components Included for Baseline Measurements"),(0,r.kt)("p",null,"The tested components are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"K3s v1.26.5 with all packaged components enabled"),(0,r.kt)("li",{parentName:"ul"},"Prometheus + Grafana monitoring stack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/"},"Kubernetes Example Nginx Deployment"))),(0,r.kt)("p",null,"These are baseline figures for a stable system using only K3s packaged components (Traefik Ingress, Klipper lb, local-path storage) running a standard monitoring stack (Prometheus and Grafana) and the Guestbook example app."),(0,r.kt)("p",null,"Resource figures including IOPS are for the Kubernetes datastore and control plane only, and do not include overhead for system-level management agents or logging, container image management, or any workload-specific requirements. "),(0,r.kt)("h2",{id:"methodology"},"Methodology"),(0,r.kt)("p",null,"A standalone instance of Prometheus v2.43.0 was used to collect host CPU, memory, and disk IO statistics using ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-node-exporter")," installed via apt."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"systemd-cgtop")," was used to spot-check systemd cgroup-level CPU and memory utilization. ",(0,r.kt)("inlineCode",{parentName:"p"},"system.slice/k3s.service")," tracks resource utilization for both K3s and containerd, while individual pods are under the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubepods")," hierarchy."),(0,r.kt)("p",null,"Additional detailed K3s memory utilization data was collected from ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl top node")," using the integrated metrics-server for the server and agent processes."),(0,r.kt)("p",null,"Utilization figures were based on 95th percentile readings from steady state operation on nodes running the described workloads."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arch"),(0,r.kt)("th",{parentName:"tr",align:null},"OS"),(0,r.kt)("th",{parentName:"tr",align:null},"System"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM"),(0,r.kt)("th",{parentName:"tr",align:null},"Disk"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 22.04"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS c6id.xlarge"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel Xeon Platinum 8375C CPU, 4 Core 2.90 GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"NVME SSD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aarch64"),(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi OS 11"),(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 Model B"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2711, 4 Core 1.50 GHz"),(0,r.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"UHS-III SDXC")))),(0,r.kt)("h2",{id:"baseline-resource-requirements"},"Baseline Resource Requirements"),(0,r.kt)("p",null,"This section captures the results of tests to determine minimum resource requirements for basic K3s operation."),(0,r.kt)("h3",{id:"k3s-server-with-a-workload"},"K3s Server with a Workload"),(0,r.kt)("p",null,"These are the requirements for a single-node cluster in which the K3s server shares resources with a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/"},"simple workload"),"."),(0,r.kt)("p",null,"The CPU requirements are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"System"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU Core Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C"),(0,r.kt)("td",{parentName:"tr",align:null},"6% of a core")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B"),(0,r.kt)("td",{parentName:"tr",align:null},"30% of a core")))),(0,r.kt)("p",null,"The Memory Requirements are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tested Datastore"),(0,r.kt)("th",{parentName:"tr",align:null},"System"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kine/SQLite"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C"),(0,r.kt)("td",{parentName:"tr",align:null},"1596 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B"),(0,r.kt)("td",{parentName:"tr",align:null},"1588 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Embedded etcd"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C"),(0,r.kt)("td",{parentName:"tr",align:null},"1606 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B"),(0,r.kt)("td",{parentName:"tr",align:null},"1613 M")))),(0,r.kt)("p",null,"The Disk requirements are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tested Datastore"),(0,r.kt)("th",{parentName:"tr",align:null},"IOPS"),(0,r.kt)("th",{parentName:"tr",align:null},"KiB/sec"),(0,r.kt)("th",{parentName:"tr",align:null},"Latency"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kine/SQLite"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"< 10 ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Embedded etcd"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"250"),(0,r.kt)("td",{parentName:"tr",align:null},"< 5 ms")))),(0,r.kt)("h3",{id:"k3s-cluster-with-a-single-agent"},"K3s Cluster with a Single Agent"),(0,r.kt)("p",null,"These are the baseline requirements for a K3s cluster with a K3s server node and a K3s agent, but no workload."),(0,r.kt)("h4",{id:"k3s-server"},"K3s Server"),(0,r.kt)("p",null,"The CPU requirements are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"System"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU Core Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C"),(0,r.kt)("td",{parentName:"tr",align:null},"5% of a core")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B"),(0,r.kt)("td",{parentName:"tr",align:null},"25% of a core")))),(0,r.kt)("p",null,"The Memory Requirements are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tested Datastore"),(0,r.kt)("th",{parentName:"tr",align:null},"System"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kine/SQLite"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C"),(0,r.kt)("td",{parentName:"tr",align:null},"1428 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B"),(0,r.kt)("td",{parentName:"tr",align:null},"1215 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Embedded etcd"),(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C"),(0,r.kt)("td",{parentName:"tr",align:null},"1450 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B"),(0,r.kt)("td",{parentName:"tr",align:null},"1413 M")))),(0,r.kt)("h3",{id:"k3s-agent"},"K3s Agent"),(0,r.kt)("p",null,"The requirements are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"System"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU Core Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Intel 8375C"),(0,r.kt)("td",{parentName:"tr",align:null},"3% of a core"),(0,r.kt)("td",{parentName:"tr",align:null},"275 M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pi4B"),(0,r.kt)("td",{parentName:"tr",align:null},"5% of a core"),(0,r.kt)("td",{parentName:"tr",align:null},"268 M")))),(0,r.kt)("h2",{id:"analysis"},"Analysis"),(0,r.kt)("p",null,"This section captures what has the biggest impact on K3s server and agent utilization, and how the cluster datastore can be protected from interference from agents and workloads."),(0,r.kt)("h3",{id:"primary-resource-utilization-drivers"},"Primary Resource Utilization Drivers"),(0,r.kt)("p",null,"K3s server utilization figures are primarily driven by support of the Kubernetes datastore (kine or etcd), API Server, Controller-Manager, and Scheduler control loops, as well as any management tasks necessary to effect changes to the state of the system. Operations that place additional load on the Kubernetes control plane, such as creating/modifying/deleting resources, will cause temporary spikes in utilization. Using operators or apps that make extensive use of the Kubernetes datastore (such as Rancher or other Operator-type applications) will increase the server's resource requirements. Scaling up the cluster by adding additional nodes or creating many cluster resources will increase the server's resource requirements."),(0,r.kt)("p",null,"K3s agent utilization figures are primarily driven by support of container lifecycle management control loops. Operations that involve managing images, provisioning storage, or creating/destroying containers will cause temporary spikes in utilization. Image pulls in particular are typically highly CPU and IO bound, as they involve decompressing image content to disk. If possible, workload storage (pod ephemeral storage and volumes) should be isolated from the agent components (/var/lib/rancher/k3s/agent) to ensure that there are no resource conflicts."),(0,r.kt)("h3",{id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore"},"Preventing Agents and Workloads from Interfering with the Cluster Datastore"),(0,r.kt)("p",null,"When running in an environment where the server is also hosting workload pods, care should be taken to ensure that agent and workload IOPS do not interfere with the datastore."),(0,r.kt)("p",null,"This can be best accomplished by placing the server components (/var/lib/rancher/k3s/server) on a different storage medium than the agent components (/var/lib/rancher/k3s/agent), which include the containerd image store."),(0,r.kt)("p",null,"Workload storage (pod ephemeral storage and volumes) should also be isolated from the datastore."),(0,r.kt)("p",null,"Failure to meet datastore throughput and latency requirements may result in delayed response from the control plane and/or failure of the control plane to maintain system state."))}p.isMDXComponent=!0}}]);