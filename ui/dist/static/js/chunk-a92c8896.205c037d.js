(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a92c8896"],{"06c5d":function(e,t,a){},"3d9a":function(e,t,a){"use strict";var n=a("06c5d"),i=a.n(n);i.a},a15b:function(e,t,a){"use strict";var n=a("23e7"),i=a("44ad"),o=a("fc6a"),l=a("a640"),s=[].join,r=i!=Object,c=l("join",",");n({target:"Array",proto:!0,forced:r||!c},{join:function(e){return s.call(o(this),void 0===e?",":e)}})},a8aa:function(e,t,a){},cc5e:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return s}));a("99af");var n=a("b775");function i(e){return Object(n["a"])({url:"role/".concat(e),method:"get"})}function o(e,t,a,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return Object(n["a"])({url:"role/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:o,kind:i}})}function l(e,t){return Object(n["a"])({url:"role/".concat(e,"/delete"),method:"post",data:t})}function s(e,t,a,i){return Object(n["a"])({url:"role/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:i}})}},cd88:function(e,t,a){"use strict";var n=a("a8aa"),i=a.n(n);i.a},fa20:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.roles,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),e.$updatePerm()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getRoleYaml(t.row.namespace,t.row.name,t.row.kind)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1):e._e(),e.$deletePerm()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deleteRoles([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1):e._e()],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateRole()}}},[e._v("确 定")])],1)],1)],1)},i=[],o=(a("4de4"),a("caad"),a("c975"),a("a15b"),a("b0c0"),a("2532"),a("b85c")),l=a("61b2"),s=a("cc5e"),r=a("5c96"),c={name:"Role",components:{Clusterbar:l["a"],Yaml:l["f"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlKind:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Roles"],maxHeight:window.innerHeight-150,loading:!0,originRoles:[],search_ns:[],search_name:"",delFunc:void 0,delRoles:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{rolesWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originRoles.push(this.buildRoles(e.resource));else if("update"===e.event)for(var n in this.originRoles){var i=this.originRoles[n];if(i.uid===t){if(i.resource_version<a){var o=this.buildRoles(e.resource);this.$set(this.originRoles,n,o)}break}}else"delete"===e.event&&(this.originRoles=this.originRoles.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{roles:function(){var e,t=[],a=Object(o["a"])(this.originRoles);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||t.push(n))}}catch(i){a.e(i)}finally{a.f()}return t.sort((function(e,t){return e.kind<t.kind||e.name>t.name?1:-1})),t},rolesWatch:function(){return this.$store.getters["ws/rolesWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originRoles=[];var t=this.$store.state.cluster;t?Object(s["c"])(t).then((function(t){e.loading=!1,e.originRoles=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,r["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(o["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(i){a.e(i)}finally{a.f()}},nameSearch:function(e){this.search_name=e},buildRoles:function(e){if(e){var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,resource_version:e.metadata.resourceVersion,created:e.metadata.creationTimestamp};return t}},nameClick:function(e,t){e?this.$router.push({name:"roleDetail",params:{namespace:e,roleName:t}}):this.$router.push({name:"clusterroleDetail",params:{roleName:t}})},getRoleYaml:function(e,t,a){var n=this;this.yamlNamespace="",this.yamlName="";var i=this.$store.state.cluster;i?"Role"!==a||e?("ClusterRole"===a&&(e="n"),t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(s["b"])(i,e,t,a,"yaml").then((function(i){n.yamlLoading=!1,n.yamlValue=i.data,n.yamlNamespace=e,n.yamlKind=a,n.yamlName=t})).catch((function(){n.yamlLoading=!1}))):r["Message"].error("获取Role名称参数异常，请刷新重试")):r["Message"].error("获取命名空间参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")},deleteRoles:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)r["Message"].error("请选择要删除的Roles");else{var a={resources:e};Object(s["a"])(t,a).then((function(){r["Message"].success("删除成功")})).catch((function(){}))}else r["Message"].error("获取集群参数异常，请刷新重试")},updateRole:function(){var e=this.$store.state.cluster;e?this.yamlKind?"Role"!==this.yamlKind||this.yamlNamespace?("ClusterRole"===this.yamlKind&&(this.yamlNamespace="n"),this.yamlName?(console.log(this.yamlValue),Object(s["d"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){r["Message"].success("更新成功")})).catch((function(){}))):r["Message"].error("获取Role参数异常，请刷新重试")):r["Message"].error("获取命名空间参数异常，请刷新重试"):r["Message"].error("获取Role参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")},_delRolesFunc:function(){if(this.delRoles.length>0){var e,t=[],a=Object(o["a"])(this.delRoles);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push({namespace:n.namespace,name:n.name})}}catch(i){a.e(i)}finally{a.f()}this.deleteRoles(t)}},handleSelectionChange:function(e){this.delRoles=e,e.length>0?this.delFunc=this._delRolesFunc:this.delFunc=void 0},getPortsDisplay:function(e){if(!e)return"";var t,a=[],n=Object(o["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value,l=i.port;i.nodePort&&(l+=":"+i.nodePort),l+="/"+i.protocol,a.push(l)}}catch(s){n.e(s)}finally{n.f()}return a.join(",")}}},u=c,d=(a("3d9a"),a("cd88"),a("2877")),m=Object(d["a"])(u,n,i,!1,null,"503ccca0",null);t["default"]=m.exports}}]);