"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[843],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,N=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(N,p(p({ref:t},c),{},{components:n})):r.createElement(N,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function p(e){var t=e.children,n=e.hidden,p=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,p),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(3117),a=n(7294),l=n(4334),p=n(2389),i=n(7392),s=n(7094),o=n(2466),c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n,p=e.lazy,m=e.block,k=e.defaultValue,N=e.values,d=e.groupId,y=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=N?N:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===k?k:null!=(t=null!=k?k:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var S=(0,s.U)(),h=S.tabGroupChoices,E=S.setTabGroupChoices,C=(0,a.useState)(g),x=C[0],T=C[1],w=[],A=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=h[d];null!=O&&O!==x&&f.some((function(e){return e.value===O}))&&T(O)}var K=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;r!==x&&(A(t),T(r),null!=d&&E(d,String(r)))},j=function(e){var t,n=null;switch(e.key){case"Enter":K(e);break;case"ArrowRight":var r,a=w.indexOf(e.currentTarget)+1;n=null!=(r=w[a])?r:w[0];break;case"ArrowLeft":var l,p=w.indexOf(e.currentTarget)-1;n=null!=(l=w[p])?l:w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},f.map((function(e){var t=e.value,n=e.label,p=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return w.push(e)},onKeyDown:j,onClick:K},p,{className:(0,l.Z)("tabs__item",u,null==p?void 0:p.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function k(e){var t=(0,p.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},9943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return k}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),p=n(5488),i=n(5162),s=["components"],o={title:"Secret \u52a0\u5bc6",weight:26},c="Secret \u52a0\u5bc6\u914d\u7f6e",u={unversionedId:"security/secrets-encryption",id:"security/secrets-encryption",title:"Secret \u52a0\u5bc6",description:"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u9996\u6b21\u542f\u52a8 server \u65f6\uff0c\u4f20\u9012\u6807\u5fd7 --secrets-encryption \u5c06\u81ea\u52a8\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/secrets-encryption.md",sourceDirName:"security",slug:"/security/secrets-encryption",permalink:"/zh/security/secrets-encryption",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/security/secrets-encryption.md",tags:[],version:"current",lastUpdatedAt:1670005687,formattedLastUpdatedAt:"2022\u5e7412\u67082\u65e5",frontMatter:{title:"Secret \u52a0\u5bc6",weight:26},sidebar:"mySidebar",previous:{title:"\u5b89\u5168",permalink:"/zh/security/"},next:{title:"CIS \u5f3a\u5316\u6307\u5357",permalink:"/zh/security/hardening-guide"}},m={},k=[{value:"Secret \u52a0\u5bc6\u5de5\u5177",id:"secret-\u52a0\u5bc6\u5de5\u5177",level:2},{value:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3},{value:"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6",id:"\u7981\u7528\u542f\u7528-secret-\u52a0\u5bc6",level:3},{value:"Secret \u52a0\u5bc6\u72b6\u6001",id:"secret-\u52a0\u5bc6\u72b6\u6001",level:3}],N={toc:k};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"secret-\u52a0\u5bc6\u914d\u7f6e"},"Secret \u52a0\u5bc6\u914d\u7f6e"),(0,l.kt)("p",null,"K3s \u652f\u6301\u542f\u7528\u9759\u6001\u52a0\u5bc6\u3002\u9996\u6b21\u542f\u52a8 server \u65f6\uff0c\u4f20\u9012\u6807\u5fd7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," \u5c06\u81ea\u52a8\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210 AES-CBC \u5bc6\u94a5"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5bc6\u94a5\u751f\u6210\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u914d\u7f6e\u4f5c\u4e3a encryption-provider-config \u4f20\u9012\u7ed9 KubeAPI")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u91cd\u65b0\u542f\u52a8\u73b0\u6709 server\uff0c\u5219\u65e0\u6cd5\u5728\u5176\u4e0a\u542f\u7528 Secret \u52a0\u5bc6\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f7f\u7528\u811a\u672c\u6216",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/configuration#%E4%BD%BF%E7%94%A8%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC%E7%9A%84%E9%80%89%E9%A1%B9"},"\u914d\u7f6e\u9009\u9879"),"\u4e2d\u63cf\u8ff0\u7684\u5176\u4ed6\u65b9\u6cd5\u8fdb\u884c\u5b89\u88c5\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"curl -sfL https://get.k3s.io | sh -s - server --secrets-encryption"),"\u3002")),(0,l.kt)("p",null,"\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "kind": "EncryptionConfiguration",\n  "apiVersion": "apiserver.config.k8s.io/v1",\n  "resources": [\n    {\n      "resources": [\n        "secrets"\n      ],\n      "providers": [\n        {\n          "aescbc": {\n            "keys": [\n              {\n                "name": "aescbckey",\n                "secret": "xxxxxxxxxxxxxxxxxxx"\n              }\n            ]\n          }\n        },\n        {\n          "identity": {}\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"secret-\u52a0\u5bc6\u5de5\u5177"},"Secret \u52a0\u5bc6\u5de5\u5177"),(0,l.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.8%2Bk3s1"},"v1.21.8+k3s1")," \u8d77\u53ef\u7528")),(0,l.kt)("p",null,"K3s \u5305\u542b\u4e00\u4e2a\u5b9e\u7528\u5de5\u5177 ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets-encrypt"),"\uff0c\u53ef\u4ee5\u81ea\u52a8\u63a7\u5236\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u65b0\u7684\u52a0\u5bc6\u5bc6\u94a5"),(0,l.kt)("li",{parentName:"ul"},"\u8f6e\u6362\u548c\u5220\u9664\u52a0\u5bc6\u5bc6\u94a5"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u52a0\u5bc6 Secret")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u9075\u5faa\u6b63\u786e\u7684\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362\u7a0b\u5e8f\uff0c\u4f60\u7684\u96c6\u7fa4\u53ef\u80fd\u4f1a\u6c38\u4e45\u635f\u574f\u3002\u56e0\u6b64\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")),(0,l.kt)("h3",{id:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u5355\u670d\u52a1\u5668",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8981\u5728\u5355\u670d\u52a1\u5668\u96c6\u7fa4\u4e0a\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6807\u5fd7 ",(0,l.kt)("inlineCode",{parentName:"li"},"--secrets-encryption")," \u542f\u52a8 K3s Server")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u76ee\u524d",(0,l.kt)("em",{parentName:"p"},"\u4e0d"),"\u652f\u6301\u5728\u6ca1\u6709\u52a0\u5bc6\u7684\u60c5\u51b5\u4e0b\u542f\u52a8 K3s \u5e76\u5728\u540e\u7eed\u542f\u7528\u5b83\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u51c6\u5907"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8f6e\u6362"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u91cd\u65b0\u52a0\u5bc6"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"K3s \u6bcf\u79d2\u5c06\u91cd\u65b0\u52a0\u5bc6\u7ea6 5 \u4e2a Secret\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5177\u6709\u5927\u91cf Secret \u7684\u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u91cd\u65b0\u52a0\u5bc6\u3002")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))))),(0,l.kt)(i.Z,{value:"\u9ad8\u53ef\u7528",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u548c\u5916\u90e8\u6570\u636e\u5e93\u96c6\u7fa4\u7684\u6b65\u9aa4\u76f8\u540c\u3002"),(0,l.kt)("p",null,"\u8981\u5728 HA \u8bbe\u7f6e\u4e0a\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\uff1a"),(0,l.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d",(0,l.kt)("em",{parentName:"li"},"\u4e0d"),"\u652f\u6301\u5728\u6ca1\u6709\u52a0\u5bc6\u7684\u60c5\u51b5\u4e0b\u542f\u52a8 K3s \u5e76\u5728\u540e\u7eed\u542f\u7528\u5b83\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5efa\u8bae\u4f60\u9009\u62e9\u4e00\u4e2a Server \u8282\u70b9\u6765\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"secrets-encrypt")," \u547d\u4ee4\u3002"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," \u6807\u5fd7\u542f\u52a8\u6240\u6709\u4e09\u4e2a K3s Server\u3002\u4e3a\u7b80\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u5c06 server \u5206\u522b\u79f0\u4e3a S1\u3001S2\u3001S3\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u51c6\u5907 S1"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8f6e\u6362 S1"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u91cd\u65b0\u52a0\u5bc6"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"K3s \u6bcf\u79d2\u5c06\u91cd\u65b0\u52a0\u5bc6\u7ea6 5 \u4e2a Secret\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5177\u6709\u5927\u91cf Secret \u7684\u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u91cd\u65b0\u52a0\u5bc6\u3002")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"))))),(0,l.kt)("h3",{id:"\u7981\u7528\u542f\u7528-secret-\u52a0\u5bc6"},"\u7981\u7528/\u542f\u7528 Secret \u52a0\u5bc6"),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u5355\u670d\u52a1\u5668",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," \u6807\u5fd7\u542f\u52a8 server \u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7981\u7528 Secret \u52a0\u5bc6\u3002"),(0,l.kt)("p",null,"\u8981\u5728\u5355\u8282\u70b9\u96c6\u7fa4\u4e0a\u7981\u7528 Secret \u52a0\u5bc6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7981\u7528"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,l.kt)("p",null,"\u8981\u5728\u5355\u8282\u70b9\u96c6\u7fa4\u4e0a\u91cd\u65b0\u542f\u7528 Secret \u52a0\u5bc6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u542f\u7528"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f K3s Server\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n"))))),(0,l.kt)(i.Z,{value:"\u9ad8\u53ef\u7528",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," \u6807\u5fd7\u542f\u52a8 HA \u96c6\u7fa4\u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7981\u7528 Secret \u52a0\u5bc6\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5efa\u8bae\u4f60\u9009\u62e9\u4e00\u4e2a Server \u8282\u70b9\u6765\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets-encrypt")," \u547d\u4ee4\u3002")),(0,l.kt)("p",null,"\u4e3a\u7b80\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u5c06\u672c\u6307\u5357\u4e2d\u4f7f\u7528\u7684 3 \u4e2a server \u5206\u522b\u79f0\u4e3a S1\u3001S2\u3001S3\u3002"),(0,l.kt)("p",null,"\u8981\u5728 HA \u96c6\u7fa4\u4e0a\u7981\u7528 Secret \u52a0\u5bc6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u7981\u7528"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u4f7f\u7528 systemd\nsystemctl restart k3s\n# \u5982\u679c\u4f7f\u7528 openrc\nrc-service k3s restart\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3"))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,l.kt)("p",null,"\u8981\u5728 HA \u96c6\u7fa4\u4e0a\u91cd\u65b0\u542f\u7528 Secret \u52a0\u5bc6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u542f\u7528"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u76f8\u540c\u7684\u53c2\u6570\u7ec8\u6b62\u5e76\u91cd\u542f S1\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"S1 \u542f\u52a8\u540e\uff0c\u7ec8\u6b62\u5e76\u91cd\u542f S2 \u548c S3")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u4f7f\u7528\u6807\u5fd7\u91cd\u65b0\u52a0\u5bc6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))))),(0,l.kt)("h3",{id:"secret-\u52a0\u5bc6\u72b6\u6001"},"Secret \u52a0\u5bc6\u72b6\u6001"),(0,l.kt)("p",null,"secrets-encrypt \u5de5\u5177\u5305\u542b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," \u547d\u4ee4\uff0c\u8be5\u547d\u4ee4\u80fd\u663e\u793a\u8282\u70b9\u4e0a Secret \u52a0\u5bc6\u7684\u5f53\u524d\u72b6\u6001\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u5355 Server \u8282\u70b9\u4e0a\u7684\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u53e6\u4e00\u4e2a\u5173\u4e8e HA \u96c6\u7fa4\u7684\u4f8b\u5b50\uff0c\u5728\u8f6e\u6362\u5bc6\u94a5\u540e\uff0c\u91cd\u542f server \u4e4b\u524d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n")),(0,l.kt)("p",null,"\u5404\u90e8\u5206\u8be6\u60c5\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Encryption Status"),"\uff1a\u663e\u793a\u8282\u70b9\u4e0a\u7684 Secret \u52a0\u5bc6\u662f\u7981\u7528\u8fd8\u662f\u542f\u7528\u7684"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Current Rotation Stage"),"\uff1a\u8868\u793a\u8282\u70b9\u4e0a\u5f53\u524d\u7684\u8f6e\u6362\u9636\u6bb5",(0,l.kt)("br",{parentName:"li"}),"Stage \u53ef\u80fd\u662f\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"start"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"prepare"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"rotate"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"reencrypt_request"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"reencrypt_active"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"reencrypt_finished")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Server Encryption Hashes"),"\uff1a\u5bf9 HA \u96c6\u7fa4\u6709\u7528\uff0c\u8868\u660e\u6240\u6709 server \u662f\u5426\u4e0e\u672c\u5730\u6587\u4ef6\u5904\u4e8e\u540c\u4e00\u9636\u6bb5\u3002\u8fd9\u53ef\u7528\u4e8e\u786e\u5b9a\u5728\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u4e4b\u524d\u662f\u5426\u9700\u8981\u91cd\u542f server\u3002\u5728\u4e0a\u9762\u7684 HA \u4f8b\u5b50\u4e2d\uff0cnode-1 \u548c node-2 \u7684\u54c8\u5e0c\u503c\u4e0d\u540c\uff0c\u8bf4\u660e\u5b83\u4eec\u76ee\u524d\u6ca1\u6709\u76f8\u540c\u7684\u52a0\u5bc6\u914d\u7f6e\u3002\u91cd\u542f server \u5c06\u540c\u6b65\u5b83\u4eec\u7684\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Key Table"),"\uff1a\u6c47\u603b\u5728\u8282\u70b9\u4e0a\u627e\u5230\u7684 Secret \u52a0\u5bc6\u5bc6\u94a5\u7684\u4fe1\u606f\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Active"),"\uff1a\u201c*\u201d\u8868\u793a\u5f53\u524d\u4f7f\u7528\u4e86\u54ea\u4e9b\u5bc6\u94a5\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u8fdb\u884cSecret \u52a0\u5bc6\u3002Kubernetes \u4f7f\u7528 active \u5bc6\u94a5\u6765\u52a0\u5bc6\u65b0\u7684 Secret\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Key Type"),"\uff1a\u4f7f\u7528\u6b64\u5de5\u5177\u7684\u6240\u6709\u5bc6\u94a5\u90fd\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"AES-CBC")," \u7c7b\u578b\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers"},"\u6b64\u5904"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name"),"\uff1a\u52a0\u5bc6\u5bc6\u94a5\u7684\u540d\u79f0\u3002")))))}d.isMDXComponent=!0}}]);