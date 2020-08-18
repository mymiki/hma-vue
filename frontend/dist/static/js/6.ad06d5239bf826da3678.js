webpackJsonp([6,42,43],{IdhN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),o=a.n(s),r=a("qyDE"),n=a("j5Q7"),i=a("JpjP"),l={name:"Job",components:{JobAdd:r.default,JobEdit:n.default,RangeDate:i.a},data:function(){return{advanced:!1,dataSource:[],selectedRowKeys:[],queryParams:{},filteredInfo:null,sortedInfo:null,paginationInfo:null,pagination:{pageSizeOptions:["10","20","30","40","100"],defaultCurrent:1,defaultPageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(e,t){return"显示 "+t[0]+" ~ "+t[1]+" 条记录，共 "+e+" 条记录"}},loading:!1,jobAddVisiable:!1,jobEditVisiable:!1}},computed:{columns:function(){var e=this.$createElement,t=this.sortedInfo,a=this.filteredInfo;return t=t||{},[{title:"Bean名称",dataIndex:"beanName"},{title:"方法名称",dataIndex:"methodName"},{title:"方法参数",dataIndex:"params",scopedSlots:{customRender:"params"},width:120},{title:"Cron表达式",dataIndex:"cronExpression"},{title:"备注",dataIndex:"remark"},{title:"状态",dataIndex:"status",customRender:function(t,a,s){switch(t){case"0":return e("a-tag",{attrs:{color:"green"}},["正常"]);case"1":return e("a-tag",{attrs:{color:"orange"}},["暂停"]);default:return t}},filters:[{text:"正常",value:"0"},{text:"暂停",value:"1"}],filterMultiple:!1,filteredValue:(a=a||{}).status||null,onFilter:function(e,t){return t.status.includes(e)}},{title:"创建时间",dataIndex:"createTime",sorter:!0,sortOrder:"createTime"===t.columnKey&&t.order},{title:"操作",dataIndex:"operations",scopedSlots:{customRender:"operations"},fixed:"right",width:100}]}},mounted:function(){this.fetch()},methods:{onSelectChange:function(e){this.selectedRowKeys=e},toggleAdvanced:function(){this.advanced=!this.advanced,this.advanced||(this.queryParams.createTimeFrom="",this.queryParams.createTimeTo="",this.queryParams.params="")},handleDateChange:function(e){e&&(this.queryParams.createTimeFrom=e[0],this.queryParams.createTimeTo=e[1])},handleJobAddSuccess:function(){this.jobAddVisiable=!1,this.$message.success("新增定时任务成功"),this.search()},handleJobAddClose:function(){this.jobAddVisiable=!1},add:function(){this.jobAddVisiable=!0},handleJobEditSuccess:function(){this.jobEditVisiable=!1,this.$message.success("修改定时任务成功"),this.search()},handleJobEditClose:function(){this.jobEditVisiable=!1},edit:function(e){this.$refs.jobEdit.setFormValues(e),this.jobEditVisiable=!0},runJob:function(e){var t=this,a=e.jobId;this.$get("job/run/"+a).then(function(){t.$message.success("执行定时任务成功"),t.search()}).catch(function(){t.$message.error("执行定时任务失败")})},pauseJob:function(e){var t=this,a=e.jobId;this.$get("job/pause/"+a).then(function(){t.$message.success("暂停定时任务成功"),t.search()}).catch(function(){t.$message.error("暂停定时任务失败")})},resumeJob:function(e){var t=this,a=e.jobId;this.$get("job/resume/"+a).then(function(){t.$message.success("恢复定时任务成功"),t.search()}).catch(function(){t.$message.error("恢复定时任务失败")})},batchDelete:function(){if(this.selectedRowKeys.length){var e=this;this.$confirm({title:"确定删除所选中的记录?",content:"当您点击确定按钮后，这些记录将会被彻底删除",centered:!0,onOk:function(){var t=e.selectedRowKeys.join(",");e.$delete("job/"+t).then(function(){e.$message.success("删除成功"),e.selectedRowKeys=[],e.search()})},onCancel:function(){e.selectedRowKeys=[]}})}else this.$message.warning("请选择需要删除的记录")},exprotExccel:function(){var e=this.sortedInfo,t=this.filteredInfo,a=void 0,s=void 0;e&&(a=e.field,s=e.order),this.$export("job/excel",o()({sortField:a,sortOrder:s},this.queryParams,t))},search:function(){var e=this.sortedInfo,t=this.filteredInfo,a=void 0,s=void 0;e&&(a=e.field,s=e.order),this.fetch(o()({sortField:a,sortOrder:s},this.queryParams,t))},reset:function(){this.selectedRowKeys=[],this.$refs.TableInfo.pagination.current=this.pagination.defaultCurrent,this.paginationInfo&&(this.paginationInfo.current=this.pagination.defaultCurrent,this.paginationInfo.pageSize=this.pagination.defaultPageSize),this.filteredInfo=null,this.sortedInfo=null,this.queryParams={},this.advanced&&this.$refs.createTime.reset(),this.fetch()},handleTableChange:function(e,t,a){this.paginationInfo=e,this.filteredInfo=t,this.sortedInfo=a,this.fetch(o()({sortField:a.field,sortOrder:a.order},this.queryParams,t))},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,this.paginationInfo?(this.$refs.TableInfo.pagination.current=this.paginationInfo.current,this.$refs.TableInfo.pagination.pageSize=this.paginationInfo.pageSize,t.pageSize=this.paginationInfo.pageSize,t.pageNum=this.paginationInfo.current):(t.pageSize=this.pagination.defaultPageSize,t.pageNum=this.pagination.defaultCurrent),this.$get("job",o()({},t)).then(function(t){var a=t.data,s=o()({},e.pagination);s.total=a.total,e.loading=!1,e.dataSource=a.rows,e.pagination=s})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"card-area",attrs:{bordered:!1}},[a("div",{class:e.advanced?"search":null},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",[a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"Bean名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{model:{value:e.queryParams.beanName,callback:function(t){e.$set(e.queryParams,"beanName",t)},expression:"queryParams.beanName"}})],1)],1),e._v(" "),a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"方法名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{model:{value:e.queryParams.methodName,callback:function(t){e.$set(e.queryParams,"methodName",t)},expression:"queryParams.methodName"}})],1)],1)],1),e._v(" "),e.advanced?a("a-row",[a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"方法参数",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{model:{value:e.queryParams.params,callback:function(t){e.$set(e.queryParams,"params",t)},expression:"queryParams.params"}})],1)],1),e._v(" "),a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"执行时间",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("range-date",{ref:"createTime",on:{change:e.handleDateChange}})],1)],1)],1):e._e()],1),e._v(" "),a("span",{staticStyle:{float:"right","margin-top":"3px"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.reset}},[e._v("重置")]),e._v(" "),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.toggleAdvanced}},[e._v("\n          "+e._s(e.advanced?"收起":"展开")+"\n          "),a("a-icon",{attrs:{type:e.advanced?"up":"down"}})],1)],1)])],1),e._v(" "),a("div",[a("div",{staticClass:"operator"},[a("a-button",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["job:add"],expression:"['job:add']"}],attrs:{ghost:"",type:"primary"},on:{click:e.add}},[e._v("新增")]),e._v(" "),a("a-button",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["job:delete"],expression:"['job:delete']"}],on:{click:e.batchDelete}},[e._v("删除")]),e._v(" "),a("a-dropdown",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["job:export"],expression:"['job:export']"}]},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"export-data",on:{click:e.exprotExccel}},[e._v("导出Excel")])],1),e._v(" "),a("a-button",[e._v("\n          更多操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1),e._v(" "),a("a-table",{ref:"TableInfo",attrs:{columns:e.columns,rowKey:function(e){return e.jobId},dataSource:e.dataSource,pagination:e.pagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},scroll:{x:1210}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"method",fn:function(t,s){return[a("a-popover",{attrs:{placement:"topLeft"}},[a("template",{slot:"content"},[a("div",[e._v(e._s(t))])]),e._v(" "),a("p",{staticStyle:{width:"200px","margin-bottom":"0"}},[e._v(e._s(t))])],2)]}},{key:"params",fn:function(t,s){return[a("a-popover",{attrs:{placement:"topLeft"}},[a("template",{slot:"content"},[a("div",{staticStyle:{"max-width":"300px"}},[e._v(e._s(t))])]),e._v(" "),a("p",{staticStyle:{width:"80px","margin-bottom":"0"}},[e._v(e._s(t))])],2)]}},{key:"operations",fn:function(t,s){return[a("a-icon",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:"job:update",expression:"'job:update'"}],attrs:{type:"setting",theme:"twoTone",twoToneColor:"#4a9ff5",title:"修改"},on:{click:function(t){return e.edit(s)}}}),e._v("\n         \n        "),a("a-dropdown",{directives:[{name:"hasAnyPermission",rawName:"v-hasAnyPermission",value:["job:run","job:pause","job:resume"],expression:"['job:run','job:pause','job:resume']"}]},[a("a",{staticClass:"ant-dropdown-link"},[a("a-icon",{staticStyle:{"font-size":"1.1rem"},attrs:{type:"down-circle"}})],1),e._v(" "),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["job:run"],expression:"['job:run']"}]},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.runJob(s)}}},[e._v("立即执行")])]),e._v(" "),"0"===s.status?a("a-menu-item",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["job:pause"],expression:"['job:pause']"}]},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.pauseJob(s)}}},[e._v("暂停任务")])]):e._e(),e._v(" "),"1"===s.status?a("a-menu-item",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["job:resume"],expression:"['job:resume']"}]},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.resumeJob(s)}}},[e._v("恢复任务")])]):e._e()],1)],1),e._v(" "),a("a-badge",{directives:[{name:"hasNoPermission",rawName:"v-hasNoPermission",value:["job:update","job:run","job:pause","job:resume"],expression:"['job:update','job:run','job:pause','job:resume']"}],attrs:{status:"warning",text:"无权限"}})]}}])})],1),e._v(" "),a("job-add",{attrs:{jobAddVisiable:e.jobAddVisiable},on:{success:e.handleJobAddSuccess,close:e.handleJobAddClose}}),e._v(" "),a("job-edit",{ref:"jobEdit",attrs:{jobEditVisiable:e.jobEditVisiable},on:{success:e.handleJobEditSuccess,close:e.handleJobEditClose}})],1)},staticRenderFns:[]},d=a("VU/8")(l,c,!1,function(e){a("swTL")},"data-v-54381f30",null);t.default=d.exports},j5Q7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),o=a.n(s),r=a("fZjL"),n=a.n(r),i=a("+6Bu"),l=a.n(i),c={labelCol:{span:4},wrapperCol:{span:18}},d={name:"JobEdit",props:{jobEditVisiable:{default:!1}},data:function(){return{loading:!1,formItemLayout:c,form:this.$form.createForm(this),validateStatus:"",help:"",job:{}}},methods:{reset:function(){this.loading=!1,this.validateStatus=this.help="",this.job={},this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},open:function(){window.open("http://cron.qqe2.com/")},setFormValues:function(e){var t=this,a=l()(e,[]);this.job.jobId=a.jobId,this.job.status=a.status;var s=["beanName","methodName","params","cronExpression","remark"];n()(a).forEach(function(e){if(-1!==s.indexOf(e)){t.form.getFieldDecorator(e);var o={};o[e]=a[e],t.form.setFieldsValue(o)}})},handleSubmit:function(){var e=this;"success"!==this.validateStatus&&this.checkCron(),this.form.validateFields(function(t,a){if(!t){var s=e.form.getFieldsValue();s.jobId=e.job.jobId,s.status=e.job.status,e.$put("job",o()({},s)).then(function(){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1})}})},checkCron:function(){var e=this,t=this.form.getFieldValue("cronExpression");t.length?this.$get("job/cron/check?cron="+t).then(function(t){t.data?(e.validateStatus="success",e.help=""):(e.validateStatus="error",e.help="请填写合法的Cron表达式")}):(this.validateStatus="error",this.help="请填写Cron表达式")}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:"修改定时任务",maskClosable:!1,width:"650",placement:"right",closable:!1,visible:e.jobEditVisiable},on:{close:e.onClose}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",e._b({attrs:{label:"Bean名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["beanName",{rules:[{required:!0,message:"Bean名称不能为空"},{max:50,message:"长度不能超过50个字符"}]}],expression:"['beanName',\n                 {rules: [\n                  { required: true, message: 'Bean名称不能为空'},\n                  { max: 50, message: '长度不能超过50个字符'}\n                ]}]"}],staticStyle:{width:"100%"}})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"方法名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["methodName",{rules:[{required:!0,message:"方法名称不能为空"},{max:50,message:"长度不能超过50个字符"}]}],expression:"['methodName',\n                 {rules: [\n                  { required: true, message: '方法名称不能为空'},\n                  { max: 50, message: '长度不能超过50个字符'}\n                ]}]"}]})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"方法参数"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["params",{rules:[{max:50,message:"长度不能超过50个字符"}]}],expression:"['params',\n                 {rules: [\n                  { max: 50, message: '长度不能超过50个字符'}\n                ]}]"}]})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"Cron表达式",validateStatus:e.validateStatus,help:e.help}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cronExpression"],expression:"['cronExpression']"}],on:{blur:e.checkCron}},[a("a-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"addonAfter",type:"read"},on:{click:e.open},slot:"addonAfter"})],1)],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"备注信息"}},"a-form-item",e.formItemLayout,!1),[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{rules:[{max:100,message:"长度不能超过100个字符"}]}],expression:"[\n        'remark',\n        {rules: [\n          { max: 100, message: '长度不能超过100个字符'}\n        ]}]"}],attrs:{rows:4}})],1)],1),e._v(" "),a("div",{staticClass:"drawer-bootom-button"},[a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.onClose}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),e._v(" "),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},staticRenderFns:[]},u=a("VU/8")(d,m,!1,null,null,null);t.default=u.exports},qyDE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("fZjL"),o=a.n(s),r=a("Dd8w"),n=a.n(r),i={labelCol:{span:4},wrapperCol:{span:18}},l={name:"JobAdd",props:{jobAddVisiable:{default:!1}},data:function(){return{loading:!1,formItemLayout:i,form:this.$form.createForm(this),job:{cronExpression:""},validateStatus:"",help:""}},methods:{reset:function(){this.loading=!1,this.validateStatus=this.help="",this.job={cronExpression:""},this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},open:function(){window.open("http://cron.qqe2.com/")},handleSubmit:function(){var e=this;"success"!==this.validateStatus&&this.checkCron(),this.form.validateFields(function(t,a){t||(e.setJobFields(),e.$post("job",n()({},e.job)).then(function(){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1}))})},checkCron:function(){var e=this,t=this.job.cronExpression.trim();t.length?this.$get("job/cron/check?cron="+t).then(function(t){t.data?(e.validateStatus="success",e.help=""):(e.validateStatus="error",e.help="请填写合法的Cron表达式")}):(this.validateStatus="error",this.help="请填写Cron表达式")},setJobFields:function(){var e=this,t=this.form.getFieldsValue(["beanName","methodName","params","remark"]);void 0!==t&&o()(t).forEach(function(a){e.job[a]=t[a]})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:"新增定时任务",maskClosable:!1,width:"650",placement:"right",closable:!1,visible:e.jobAddVisiable},on:{close:e.onClose}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",e._b({attrs:{label:"Bean名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["beanName",{rules:[{required:!0,message:"Bean名称不能为空"},{max:50,message:"长度不能超过50个字符"}]}],expression:"['beanName',\n                 {rules: [\n                  { required: true, message: 'Bean名称不能为空'},\n                  { max: 50, message: '长度不能超过50个字符'}\n                ]}]"}],staticStyle:{width:"100%"}})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"方法名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["methodName",{rules:[{required:!0,message:"方法名称不能为空"},{max:50,message:"长度不能超过50个字符"}]}],expression:"['methodName',\n                 {rules: [\n                  { required: true, message: '方法名称不能为空'},\n                  { max: 50, message: '长度不能超过50个字符'}\n                ]}]"}]})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"方法参数"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["params",{rules:[{max:50,message:"长度不能超过50个字符"}]}],expression:"['params',\n                 {rules: [\n                  { max: 50, message: '长度不能超过50个字符'}\n                ]}]"}]})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"Cron表达式",validateStatus:e.validateStatus,help:e.help}},"a-form-item",e.formItemLayout,!1),[a("a-input",{on:{blur:e.checkCron},model:{value:e.job.cronExpression,callback:function(t){e.$set(e.job,"cronExpression",t)},expression:"job.cronExpression"}},[a("a-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"addonAfter",type:"read"},on:{click:e.open},slot:"addonAfter"})],1)],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"备注信息"}},"a-form-item",e.formItemLayout,!1),[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{rules:[{max:100,message:"长度不能超过100个字符"}]}],expression:"[\n        'remark',\n        {rules: [\n          { max: 100, message: '长度不能超过100个字符'}\n        ]}]"}],attrs:{rows:4}})],1)],1),e._v(" "),a("div",{staticClass:"drawer-bootom-button"},[a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.onClose}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),e._v(" "),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},staticRenderFns:[]},d=a("VU/8")(l,c,!1,null,null,null);t.default=d.exports},swTL:function(e,t){}});