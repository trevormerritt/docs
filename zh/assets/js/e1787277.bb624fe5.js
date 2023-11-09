"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4126],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,d=m["".concat(s,".").concat(u)]||m[u]||k[u]||l;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(3117),r=(t(7294),t(3905));const l={title:"\u914d\u7f6e\u9009\u9879",weight:20},o=void 0,i={unversionedId:"installation/configuration",id:"installation/configuration",title:"\u914d\u7f6e\u9009\u9879",description:"\u672c\u6587\u91cd\u70b9\u4ecb\u7ecd\u9996\u6b21\u8bbe\u7f6e K3s \u65f6\u5e38\u7528\u7684\u9009\u9879\u3002\u5982\u9700\u4e86\u89e3\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605\u6709\u5173\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e\u4ee5\u53ca server \u548c agent \u547d\u4ee4\u7684\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/configuration.md",sourceDirName:"installation",slug:"/installation/configuration",permalink:"/zh/installation/configuration",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/configuration.md",tags:[],version:"current",lastUpdatedAt:1699546377,formattedLastUpdatedAt:"2023\u5e7411\u67089\u65e5",frontMatter:{title:"\u914d\u7f6e\u9009\u9879",weight:20},sidebar:"mySidebar",previous:{title:"\u8981\u6c42",permalink:"/zh/installation/requirements"},next:{title:"\u7f51\u7edc\u9009\u9879",permalink:"/zh/installation/network-options"}},s={},p=[{value:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u7684\u9009\u9879",id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u7684\u9009\u9879",level:2},{value:"\u4e8c\u8fdb\u5236\u914d\u7f6e",id:"\u4e8c\u8fdb\u5236\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6",id:"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u7ec4\u5408\u4f7f\u7528",id:"\u7ec4\u5408\u4f7f\u7528",level:2}],c={toc:p};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u91cd\u70b9\u4ecb\u7ecd\u9996\u6b21\u8bbe\u7f6e K3s \u65f6\u5e38\u7528\u7684\u9009\u9879\u3002\u5982\u9700\u4e86\u89e3\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605\u6709\u5173",(0,r.kt)("a",{parentName:"p",href:"/zh/advanced/"},"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e"),"\u4ee5\u53ca ",(0,r.kt)("a",{parentName:"p",href:"/zh/cli/server"},"server")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"/zh/cli/agent"},"agent")," \u547d\u4ee4\u7684\u6587\u6863\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u7684\u9009\u9879"},"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u7684\u9009\u9879"),(0,r.kt)("p",null,"\u5982",(0,r.kt)("a",{parentName:"p",href:"/zh/quick-start/"},"\u5feb\u901f\u5165\u95e8\u6307\u5357"),"\u4e2d\u6240\u8ff0\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://get.k3s.io"},"https://get.k3s.io")," \u4e0a\u63d0\u4f9b\u7684\u5b89\u88c5\u811a\u672c\u5728\u57fa\u4e8e systemd \u548c openrc \u7684\u7cfb\u7edf\u4e0a\u5c06 K3s \u5b89\u88c5\u4e3a\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u7ed3\u5408\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_")," \u73af\u5883\u53d8\u91cf\u548c\u547d\u4ee4\u6807\u5fd7\u5c06\u914d\u7f6e\u4f20\u9012\u7ed9\u670d\u52a1\u914d\u7f6e\u3002\n\u5e26\u524d\u7f00\u7684\u73af\u5883\u53d8\u91cf\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC")," \u503c\u548c\u5c3e\u9644\u7684 shell \u53c2\u6570\u90fd\u4fdd\u5b58\u5728\u670d\u52a1\u914d\u7f6e\u4e2d\u3002\n\u5b89\u88c5\u540e\uff0c\u5982\u679c\u9700\u8981\u66f4\u6539\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u7f16\u8f91\u73af\u5883\u6587\u4ef6\u3001\u7f16\u8f91\u670d\u52a1\u914d\u7f6e\u6216\u7b80\u5355\u4f7f\u7528\u65b0\u9009\u9879\u91cd\u65b0\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bf4\u660e\u8fd9\u4e00\u70b9\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5747\u540c\u6837\u5730\u6ca1\u6709 Flannel \u548c\u4f7f\u7528\u4ee4\u724c\u7684\u60c5\u51b5\u4e0b\u6ce8\u518c Server\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none --token 12345\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --flannel-backend none" K3S_TOKEN=12345 sh -s -\ncurl -sfL https://get.k3s.io | K3S_TOKEN=12345 sh -s - server --flannel-backend none\n# server is assumed below because there is no K3S_URL\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-backend none --token 12345" sh -s -\ncurl -sfL https://get.k3s.io | sh -s - --flannel-backend none --token 12345\n')),(0,r.kt)("p",null,"\u6ce8\u518c Agent \u65f6\uff0c\u4ee5\u4e0b\u547d\u4ee4\u90fd\u4f1a\u5bfc\u81f4\u540c\u6837\u7684\u884c\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent --server https://k3s.example.com --token mypassword" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent" K3S_TOKEN="mypassword" sh -s - --server https://k3s.example.com\ncurl -sfL https://get.k3s.io | K3S_URL=https://k3s.example.com sh -s - agent --token mypassword\ncurl -sfL https://get.k3s.io | K3S_URL=https://k3s.example.com K3S_TOKEN=mypassword sh -s - # agent is assumed because of K3S_URL\n')),(0,r.kt)("p",null,"\u6709\u5173\u6240\u6709\u73af\u5883\u53d8\u91cf\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/reference/env-variables"},"\u73af\u5883\u53d8\u91cf"),"\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u65f6\u8fdb\u884c\u4e86\u914d\u7f6e\uff0c\u4f46\u5728\u91cd\u65b0\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u65f6\u6ca1\u6709\u91cd\u65b0\u8bbe\u7f6e\uff0c\u5219\u539f\u59cb\u503c\u5c06\u4f1a\u4e22\u5931\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u914d\u7f6e\u6587\u4ef6")," \u7684\u5185\u5bb9\u4e0d\u53d7\u5b89\u88c5\u811a\u672c\u7ba1\u7406\u3002\n\u8981\u8ba9\u4f60\u7684\u914d\u7f6e\u72ec\u7acb\u4e8e\u5b89\u88c5\u811a\u672c\uff0c\u8bf7\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u800c\u4e0d\u662f\u4f20\u9012\u73af\u5883\u53d8\u91cf\u6216\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u53c2\u6570\u3002")),(0,r.kt)("h2",{id:"\u4e8c\u8fdb\u5236\u914d\u7f6e"},"\u4e8c\u8fdb\u5236\u914d\u7f6e"),(0,r.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u5b89\u88c5\u811a\u672c\u4e3b\u8981\u662f\u5c06 K3s \u914d\u7f6e\u4e3a\u670d\u52a1\u6765\u8fd0\u884c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f60\u9009\u62e9\u4e0d\u4f7f\u7528\u8be5\u811a\u672c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/latest"},"Releases \u9875\u9762"),"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5c06\u5176\u653e\u5728\u4f60\u7684\u8def\u5f84\u4e0a\uff0c\u7136\u540e\u6267\u884c\u5b83\u5373\u53ef\u8fd0\u884c K3s\u3002\u5bf9\u4e8e\u6c38\u4e45\u5b89\u88c5\u800c\u8a00\u8fd9\u4e0d\u662f\u7279\u522b\u6709\u7528\uff0c\u4f46\u5982\u679c\u6267\u884c\u4e0d\u9700\u8981\u5c06 K3s \u4f5c\u4e3a\u7cfb\u7edf\u670d\u52a1\u7ba1\u7406\u7684\u5feb\u901f\u6d4b\u8bd5\uff0c\u8fd9\u53ef\u80fd\u6709\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo /usr/local/bin/k3s https://github.com/k3s-io/k3s/releases/download/v1.26.5+k3s1/k3s; chmod a+x /usr/local/bin/k3s\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_")," \u73af\u5883\u53d8\u91cf\u6765\u4f20\u9012\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'K3S_KUBECONFIG_MODE="644" k3s server\n')),(0,r.kt)("p",null,"\u6216\u4f7f\u7528\u547d\u4ee4\u6807\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server --write-kubeconfig-mode=644\n")),(0,r.kt)("p",null,"K3s Agent \u4e5f\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s agent --server https://k3s.example.com --token mypassword\n")),(0,r.kt)("p",null,"\u5173\u4e8e\u914d\u7f6e K3s Server \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/cli/server"},(0,r.kt)("inlineCode",{parentName:"a"},"K3s Server")," \u6587\u6863"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6709\u5173\u914d\u7f6e K3s Agent \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/cli/agent"},(0,r.kt)("inlineCode",{parentName:"a"},"K3s Agent")," \u6587\u6863"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \u6807\u5fd7\u6765\u67e5\u770b\u6240\u6709\u53ef\u7528\u9009\u9879\u53ca\u5176\u5bf9\u5e94\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("admonition",{title:"\u5339\u914d\u6807\u5fd7",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5339\u914d Server \u8282\u70b9\u4e0a\u7684\u5173\u952e\u6807\u5fd7\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5728 master \u8282\u70b9\u4e0a\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable servicelb")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-cidr=10.200.0.0/16")," \u6807\u5fd7\uff0c\u4f46\u662f\u6ca1\u6709\u5728\u5176\u4ed6 Server \u8282\u70b9\u4e0a\u8fdb\u884c\u76f8\u540c\u7684\u8bbe\u7f6e\uff0c\u8282\u70b9\u5c06\u65e0\u6cd5\u52a0\u5165\u3002\u5b83\u4eec\u4f1a\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"failed to validate server configuration: critical configuration value mismatch")," \u9519\u8bef\u3002\n\u6709\u5173\u5fc5\u987b\u5728 Server \u8282\u70b9\u4e0a\u8bbe\u7f6e\u7684\u6807\u5fd7\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Server \u914d\u7f6e\u6587\u6863\uff08\u4e0a\u65b9\u94fe\u63a5\uff09\u3002")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1")," \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u9664\u4e86\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u548c CLI \u53c2\u6570\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e K3s\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b89\u88c5\u65f6\u5c06\u4f7f\u7528\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," \u7684 YAML \u6587\u4ef6\u4e2d\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," \u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'write-kubeconfig-mode: "0644"\ntls-san:\n  - "foo.local"\nnode-label:\n  - "foo=bar"\n  - "something=amazing"\ncluster-init: true\n')),(0,r.kt)("p",null,"\u7b49\u6548\u4e8e\u4ee5\u4e0b CLI \u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'k3s server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"  \\\n  --cluster-init\n')),(0,r.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0cCLI \u53c2\u6570\u6620\u5c04\u5230\u5404\u81ea\u7684 YAML \u952e\uff0c\u53ef\u91cd\u590d\u7684 CLI \u53c2\u6570\u88ab\u8868\u793a\u4e3a YAML \u5217\u8868\u3002\u5e03\u5c14\u6807\u5fd7\u5728 YAML \u6587\u4ef6\u4e2d\u8868\u793a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u548c CLI \u53c2\u6570\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u503c\u5c06\u4ece\u4e24\u4e2a\u6765\u6e90\u52a0\u8f7d\uff0c\u4f46 CLI \u53c2\u6570\u5c06\u4f18\u5148\u3002 \u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-label")," \u7b49\u53ef\u91cd\u590d\u53c2\u6570\uff0cCLI \u53c2\u6570\u5c06\u8986\u76d6\u5217\u8868\u4e2d\u7684\u6240\u6709\u503c\u3002"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e\u53ef\u4ee5\u901a\u8fc7 CLI \u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--config FILE, -c FILE")," \u6216\u8005\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"$K3S_CONFIG_FILE")," \u6765\u6539\u53d8\u3002"),(0,r.kt)("h3",{id:"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6"},"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1"},"v1.21.0+k3s1")," \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u652f\u6301\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6\u3002\u9ed8\u8ba4\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml.d/*.yaml")," \u4e2d\u6309\u5b57\u6bcd\u987a\u5e8f\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5c06\u4f7f\u7528\u7ed9\u5b9a\u952e\u7684\u6700\u540e\u4e00\u4e2a\u503c\u3002\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," \u9644\u52a0\u5230\u952e\uff0c\u8fd9\u6837\u80fd\u5c06\u503c\u9644\u52a0\u5230\u73b0\u6709\u5b57\u7b26\u4e32\u6216\u5207\u7247\uff0c\u800c\u4e0d\u662f\u66ff\u6362\u5b83\u3002\u540e\u7eed\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u6b64\u952e\u4e5f\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," \u6765\u9632\u6b62\u8986\u76d6\u7d2f\u79ef\u503c\u3002"),(0,r.kt)("p",null,"\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# config.yaml\ntoken: boop\nnode-label:\n  - foo=bar\n  - bar=baz\n\n\n# config.yaml.d/test1.yaml\nwrite-kubeconfig-mode: 600\nnode-taint:\n  - alice=bob:NoExecute\n\n# config.yaml.d/test2.yaml\nwrite-kubeconfig-mode: 777\nnode-label:\n  - other=what\n  - foo=three\nnode-taint+:\n  - charlie=delta:NoSchedule\n\n")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6700\u7ec8\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"write-kubeconfig-mode: 777\ntoken: boop\nnode-label:\n  - other=what\n  - foo=three\nnode-taint:\n  - alice=bob:NoExecute\n  - charlie=delta:NoSchedule\n")),(0,r.kt)("h2",{id:"\u7ec4\u5408\u4f7f\u7528"},"\u7ec4\u5408\u4f7f\u7528"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u628a\u4e0a\u8ff0\u6240\u6709\u9009\u9879\u7ec4\u5408\u6210\u4e00\u4e2a\u793a\u4f8b\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u521b\u5efa\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," \u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'token: "secret"\ndebug: true\n')),(0,r.kt)("p",null,"\u7136\u540e\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u548c\u6807\u5fd7\u7ec4\u5408\u6765\u8fd0\u884c\u5b89\u88c5\u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none\n')),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'K3S_KUBECONFIG_MODE="644" k3s server --flannel-backend none\n')),(0,r.kt)("p",null,"Server \u60c5\u51b5\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kubeconfig \u6587\u4ef6\u6743\u9650\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"644")),(0,r.kt)("li",{parentName:"ul"},"Flannel \u540e\u7aef\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"\u4ee4\u724c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"secret")),(0,r.kt)("li",{parentName:"ul"},"\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u8bb0\u5f55")))}k.isMDXComponent=!0}}]);