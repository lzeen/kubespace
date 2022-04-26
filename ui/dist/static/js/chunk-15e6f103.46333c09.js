(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15e6f103"],{"22ce":function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return n}));a("99af");var r=a("b775");function s(e,t){return Object(r["a"])({url:"service/".concat(e),method:"get",params:t})}function i(e,t,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(r["a"])({url:"service/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:s}})}function o(e,t){return Object(r["a"])({url:"service/".concat(e,"/delete"),method:"post",data:t})}function n(e,t,a,s){return Object(r["a"])({url:"service/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:s}})}},"7cd7":function(e,t,a){},"817a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.projectId?void 0:e.nsSearch,nameFunc:e.nameSearch,createFunc:e.openCreateFormDialog}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.services,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"cluster_ip",label:"ClusterIP","min-width":"35","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ports",label:"端口","min-width":"30","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.ports&&t.row.ports.length>0?[a("span",[e._v(e._s(e.getPortsDisplay(t.row.ports)))])]:e._e()]}}])}),a("el-table-column",{attrs:{prop:"selector",label:"选择器","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.selector?e._l(t.row.selector,(function(t,r){return a("span",{key:r,staticClass:"back-class"},[e._v(" "+e._s(r+"="+t)+" ")])})):e._e()]}}])}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(e.$dateFormat(t.row.created))+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":"",width:"110px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"tableOperate"},[a("el-link",{staticStyle:{"margin-right":"15px"},attrs:{disabled:!e.$editorRole(),underline:!1,type:"primary"},on:{click:function(a){return e.openUpdateFormDialog(t.row.namespace,t.row.name)}}},[e._v("编辑")]),a("el-link",{attrs:{disabled:!e.$editorRole(),underline:!1,type:"danger"},on:{click:function(a){return e.handleDeleteServices([{namespace:t.row.namespace,name:t.row.name}])}}},[e._v("删除")])],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:e.updateFormVisible?"编辑Service":"创建Service",visible:e.createFormVisible,"destroy-on-close":!0,width:"70%","close-on-click-modal":!1},on:{"update:visible":function(t){e.createFormVisible=t},close:e.closeFormDialog}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}]},[a("div",{staticClass:"dialogContent"},[a("el-form",{ref:"form",attrs:{model:e.service.metadata,rules:e.rules,"label-position":"left","label-width":"105px"}},[a("el-form-item",{attrs:{label:"服务名称",prop:"name",required:""}},[a("el-input",{staticStyle:{width:"50%"},attrs:{disabled:e.updateFormVisible,placeholder:"请输入服务名称",size:"small"},model:{value:e.service.metadata.name,callback:function(t){e.$set(e.service.metadata,"name",t)},expression:"service.metadata.name"}})],1),a("el-form-item",{attrs:{label:"命名空间",prop:"",required:""}},[e.namespace?a("span",[e._v(e._s(e.namespace))]):a("el-select",{staticStyle:{width:"50%"},attrs:{disabled:e.updateFormVisible,placeholder:"请选择命名空间",size:"small"},model:{value:e.service.metadata.namespace,callback:function(t){e.$set(e.service.metadata,"namespace",t)},expression:"service.metadata.namespace"}},e._l(e.namespaces,(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"服务类型",prop:"",required:""}},[a("el-radio-group",{attrs:{size:"small"},model:{value:e.service.spec.type,callback:function(t){e.$set(e.service.spec,"type",t)},expression:"service.spec.type"}},[a("el-radio-button",{attrs:{label:"ClusterIP"}}),a("el-radio-button",{attrs:{label:"NodePort"}}),a("el-radio-button",{attrs:{label:"LoadBalancer"}}),a("el-radio-button",{attrs:{label:"ExternalName"}})],1)],1),a("el-form-item",{attrs:{label:"Pod选择器",prop:"",required:""}},[e._l(e.service.spec.selector,(function(t,r){return a("div",{key:r,staticStyle:{"margin-bottom":"5px"}},[a("el-input",{staticStyle:{width:"25%"},attrs:{size:"small",placeholder:"Key"},model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"l.key"}}),e._v(" = "),a("el-input",{staticStyle:{width:"25%"},attrs:{size:"small",placeholder:"Value"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"l.value"}}),a("el-button",{staticStyle:{padding:"5px","margin-left":"10px"},attrs:{size:"mini",circle:"",icon:"el-icon-close"},on:{click:function(t){return e.service.spec.selector.splice(r,1)}}})],1)})),a("el-button",{staticStyle:{"border-radius":"0px"},attrs:{plain:"",size:"small",icon:"el-icon-plus"},on:{click:function(t){return e.service.spec.selector.push({key:"",value:""})}}},[e._v("添加")])],2),a("el-form-item",{attrs:{label:"端口配置",required:""}},[a("el-row",{staticStyle:{"margin-bottom":"5px","margin-top":"8px"}},[a("el-col",{staticStyle:{"background-color":"#F5F7FA","padding-left":"10px"},attrs:{span:"NodePort"==e.service.spec.type?5:6}},[a("div",{staticClass:"border-span-header"},[e._v(" 名称 ")])]),a("el-col",{staticStyle:{"background-color":"#F5F7FA"},attrs:{span:"NodePort"==e.service.spec.type?5:6}},[a("div",{staticClass:"border-span-header"},[a("span",{staticClass:"border-span-content"},[e._v("*")]),e._v("服务端口 ")])]),a("el-col",{staticStyle:{"background-color":"#F5F7FA"},attrs:{span:"NodePort"==e.service.spec.type?5:6}},[a("div",{staticClass:"border-span-header"},[a("span",{staticClass:"border-span-content"},[e._v("*")]),e._v("容器端口 ")])]),"NodePort"==e.service.spec.type?a("el-col",{staticStyle:{"background-color":"#F5F7FA"},attrs:{span:5}},[e._v(" NodePort ")]):e._e(),a("el-col",{staticStyle:{"background-color":"#F5F7FA"},attrs:{span:"NodePort"==e.service.spec.type?3:5}},[a("div",{staticClass:"border-span-header"},[e._v(" 协议 ")])])],1),e._l(e.service.spec.ports,(function(t,r){return a("el-row",{key:r,staticStyle:{"padding-top":"0px"}},[a("el-col",{attrs:{span:"NodePort"==e.service.spec.type?5:6}},[a("div",{staticClass:"border-span-header"},[a("el-input",{staticStyle:{"padding-right":"10px"},attrs:{size:"small",placeholder:"服务端口名称"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1)]),a("el-col",{attrs:{span:"NodePort"==e.service.spec.type?5:6}},[a("div",{staticClass:"border-span-header"},[a("el-input-number",{staticStyle:{width:"100%","padding-right":"10px"},attrs:{controls:!1,size:"small",placeholder:"服务暴露端口"},model:{value:t.port,callback:function(a){e.$set(t,"port",a)},expression:"item.port"}})],1)]),a("el-col",{attrs:{span:"NodePort"==e.service.spec.type?5:6}},[a("div",{staticClass:"border-span-header"},[a("el-input-number",{staticStyle:{width:"100%","padding-right":"10px"},attrs:{controls:!1,size:"small",placeholder:"容器访问端口，如:80"},model:{value:t.targetPort,callback:function(a){e.$set(t,"targetPort",a)},expression:"item.targetPort"}})],1)]),"NodePort"==e.service.spec.type?a("el-col",{attrs:{span:5}},[a("el-input-number",{staticStyle:{width:"100%","padding-right":"10px"},attrs:{controls:!1,size:"small",placeholder:"宿主机暴露端口"},model:{value:t.nodePort,callback:function(a){e.$set(t,"nodePort",a)},expression:"item.nodePort"}})],1):e._e(),a("el-col",{attrs:{span:"NodePort"==e.service.spec.type?3:5}},[a("div",{staticClass:"border-span-header"},[a("el-select",{attrs:{placeholder:"端口所属协议",size:"small"},model:{value:t.protocol,callback:function(a){e.$set(t,"protocol",a)},expression:"item.protocol"}},[a("el-option",{attrs:{label:"TCP",value:"TCP"}}),a("el-option",{attrs:{label:"UDP",value:"UDP"}}),a("el-option",{attrs:{label:"SCTP",value:"SCTP"}})],1)],1)]),a("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:1}},[a("el-button",{staticStyle:{padding:"5px"},attrs:{circle:"",size:"mini",icon:"el-icon-close"},on:{click:function(t){return e.service.spec.ports.splice(r,1)}}})],1)],1)})),a("el-row",[a("el-col",{attrs:{span:(e.service.spec.type,23)}},[a("el-button",{staticStyle:{width:"100%","border-radius":"0px",padding:"9px 15px","border-color":"rgb(102, 177, 255)",color:"rgb(102, 177, 255)"},attrs:{plain:"",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.service.spec.ports.push({protocol:"TCP"})}}},[e._v("添加服务端口")])],1)],1)],2)],1)],1),a("div",{staticClass:"dialogFooter",staticStyle:{"margin-top":"20px"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.createFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.updateFormVisible?e.handleUpdateService():e.handleCreateService()}}},[e._v("确 定")])],1)])])],1)},s=[],i=(a("99af"),a("4de4"),a("caad"),a("c975"),a("a15b"),a("b0c0"),a("2532"),a("b85c")),o=a("61b2"),n=a("22ce"),c=a("7ea2"),l=a("aad4"),d=a("4fee"),p=a("5c96"),u=a("e2c1"),m={name:"Service",components:{Clusterbar:o["a"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Services"],maxHeight:window.innerHeight-135,loading:!0,originServices:[],search_ns:[],search_name:"",delFunc:void 0,delServices:[],dialogLoading:!1,createFormVisible:!1,updateFormVisible:!1,service:{kind:"Service",apiVersion:"v1",metadata:{name:""},spec:{ports:[],selector:[{}],type:"ClusterIP"}},rules:{},namespaces:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-135;e.maxHeight=t}()}},watch:{servicesWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originServices.push(this.buildServices(e.resource));else if("update"===e.event)for(var r in this.originServices){var s=this.originServices[r];if(s.uid===t){if(s.resource_version<a){var i=this.buildServices(e.resource);this.$set(this.originServices,r,i)}break}}else"delete"===e.event&&(this.originServices=this.originServices.filter((function(e){var a=e.uid;return a!==t})))}},cluster:function(){this.fetchData()}},computed:{services:function(){var e,t=[],a=Object(i["a"])(this.originServices);try{for(a.s();!(e=a.n()).done;){var r=e.value;this.search_ns.length>0&&this.search_ns.indexOf(r.namespace)<0||(this.search_name&&!r.name.includes(this.search_name)||t.push(r))}}catch(s){a.e(s)}finally{a.f()}return t},servicesWatch:function(){return this.$store.getters["ws/servicesWatch"]},projectId:function(){return this.$route.params.workspaceId},cluster:function(){return this.$store.state.cluster},namespace:function(){return this.$store.state.namespace||""}},methods:{fetchData:function(){var e=this;this.loading=!0;var t=this.$store.state.cluster,a={namespace:this.namespace};this.projectId&&(a["labels"]=Object(d["e"])()),t?Object(n["c"])(t,a).then((function(t){e.loading=!1;var a=t.data||[];e.$set(e,"originServices",a)})).catch((function(){e.loading=!1})):this.projectId||(this.loading=!1,p["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(i["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;this.search_ns.push(r)}}catch(s){a.e(s)}finally{a.f()}},nameSearch:function(e){this.search_name=e},buildServices:function(e){if(e){var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,type:e.spec.type,cluster_ip:e.spec.clusterIP,ports:e.spec.ports,external_ip:e.spec.externalIPs,selector:e.spec.selector,resource_version:e.metadata.resourceVersion,created:e.metadata.creationTimestamp};return t}},nameClick:function(e,t){var a=this.projectId?"workspaceServiceDetail":"serviceDetail";this.$router.push({name:a,params:{namespace:e,serviceName:t}})},getService:function(e,t){var a=this,r=this.$store.state.cluster;r?e?t?(this.dialogLoading=!0,Object(n["b"])(r,e,t).then((function(e){var t=e.data,r=[];for(var s in t.spec.selector)r.push({key:s,value:t.spec.selector[s]});t.spec.selector=r,a.service=t,a.dialogLoading=!1})).catch((function(){a.dialogLoading=!1}))):p["Message"].error("获取Service名称参数异常，请刷新重试"):p["Message"].error("获取命名空间参数异常，请刷新重试"):p["Message"].error("获取集群参数异常，请刷新重试")},handleDeleteServices:function(e){var t,a=this,r="",s=Object(i["a"])(e);try{for(s.s();!(t=s.n()).done;){var o=t.value;r+="".concat(o.namespace,"/").concat(o.name,",")}}catch(c){s.e(c)}finally{s.f()}r=r.substr(0,r.length-1),this.$confirm("请确认是否删除「".concat(r,"」Service?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.loading=!0,Object(n["a"])(a.cluster,{resources:e}).then((function(){p["Message"].success("删除Service成功"),a.loading=!1,a.fetchData()})).catch((function(e){a.loading=!1}))})).catch((function(){}))},handleCreateService:function(){var e=this,t=this.$store.state.cluster;if(t){var a=JSON.parse(JSON.stringify(this.service));if(this.namespace&&(a.metadata.namespace=this.namespace),a.metadata.namespace){this.projectId&&(a.metadata.labels=Object(d["e"])());var r,s={},o=Object(i["a"])(a.spec.selector);try{for(o.s();!(r=o.n()).done;){var n=r.value;if(!n.key)return void p["Message"].error("Pod选择器Key不能为空");s[n.key]=n.value}}catch(f){o.e(f)}finally{o.f()}a.spec.selector=s;var l,m=Object(i["a"])(a.spec.ports);try{for(m.s();!(l=m.n()).done;){var v=l.value;try{v["port"]=parseInt(v.port),v["targetPort"]=parseInt(v.targetPort),v.nodePort&&(v["nodePort"]=parseInt(v.nodePort))}catch(b){return void p["Message"].error("端口错误")}}}catch(f){m.e(f)}finally{m.f()}var h=u["default"].dump(a);this.dialogLoading=!0,Object(c["e"])(t,h).then((function(){p["Message"].success("创建Service成功"),e.dialogLoading=!1,e.createFormVisible=!1,e.fetchData()})).catch((function(){e.dialogLoading=!1}))}else p["Message"].error("命名空间不能为空")}else p["Message"].error("获取集群参数异常，请刷新重试")},handleUpdateService:function(){var e=this,t=this.$store.state.cluster;if(t){var a,r=JSON.parse(JSON.stringify(this.service)),s={},o=Object(i["a"])(r.spec.selector);try{for(o.s();!(a=o.n()).done;){var c=a.value;if(!c.key)return void p["Message"].error("Pod选择器Key不能为空");s[c.key]=c.value}}catch(h){o.e(h)}finally{o.f()}r.spec.selector=s;var l,d=Object(i["a"])(r.spec.ports);try{for(d.s();!(l=d.n()).done;){var m=l.value;try{m["port"]=parseInt(m.port),m.targetPort&&(m["targetPort"]=parseInt(m.targetPort)),m.nodePort&&(m["nodePort"]=parseInt(m.nodePort))}catch(f){return void p["Message"].error("端口错误")}}}catch(h){d.e(h)}finally{d.f()}var v=u["default"].dump(r);this.dialogLoading=!0,Object(n["d"])(t,this.service.metadata.namespace,this.service.metadata.name,v).then((function(){e.dialogLoading=!1,e.createFormVisible=!1,p["Message"].success("编辑Service成功"),e.fetchData()})).catch((function(){e.dialogLoading=!1}))}else p["Message"].error("获取集群参数异常，请刷新重试")},_delServicesFunc:function(){if(this.delServices.length>0){var e,t=[],a=Object(i["a"])(this.delServices);try{for(a.s();!(e=a.n()).done;){var r=e.value;t.push({namespace:r.namespace,name:r.name})}}catch(s){a.e(s)}finally{a.f()}this.handleDeleteServices(t)}},handleSelectionChange:function(e){this.delServices=e,e.length>0?this.delFunc=this._delServicesFunc:this.delFunc=void 0},getPortsDisplay:function(e){if(!e)return"";var t,a=[],r=Object(i["a"])(e);try{for(r.s();!(t=r.n()).done;){var s=t.value,o=s.port;s.nodePort&&(o+=":"+s.nodePort),o+="/"+s.protocol,a.push(o)}}catch(n){r.e(n)}finally{r.f()}return a.join(",")},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(l["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(e){console.log(e)})):p["Message"].error("获取集群异常，请刷新重试")},openCreateFormDialog:function(){this.namespace||0!=this.namespaces.length||this.fetchNamespace(),this.createFormVisible=!0},openUpdateFormDialog:function(e,t){this.createFormVisible=!0,this.updateFormVisible=!0,this.namespace||0!=this.namespaces.length||this.fetchNamespace(),this.getService(e,t)},closeFormDialog:function(){this.createFormVisible=!1,this.updateFormVisible=!1,this.service={kind:"Service",apiVersion:"v1",metadata:{name:""},spec:{ports:[],selector:[{}],type:"ClusterIP"}}}}},v=m,h=(a("a385"),a("a773"),a("2877")),f=Object(h["a"])(v,r,s,!1,null,"6dd222d0",null);t["default"]=f.exports},"9f53":function(e,t,a){},a15b:function(e,t,a){"use strict";var r=a("23e7"),s=a("44ad"),i=a("fc6a"),o=a("a640"),n=[].join,c=s!=Object,l=o("join",",");r({target:"Array",proto:!0,forced:c||!l},{join:function(e){return n.call(i(this),void 0===e?",":e)}})},a385:function(e,t,a){"use strict";var r=a("7cd7"),s=a.n(r);s.a},a773:function(e,t,a){"use strict";var r=a("9f53"),s=a.n(r);s.a}}]);