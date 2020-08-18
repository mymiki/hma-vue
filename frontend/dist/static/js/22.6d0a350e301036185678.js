webpackJsonp([22],{UC5L:function(t,e){},c5gm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var m=a("mtWM"),v=a.n(m),r=a("PJh5"),s=a.n(r);s.a.locale("zh-cn");var o={data:function(){return{time:"",loading:!0,jvm:{memory:{max:0,committed:0,used:0},buffer:{memory:{used:0},count:0},threads:{daemon:0,live:0,peak:0},classes:{loaded:0,unloaded:0},gc:{memory:{allocated:0,promoted:0},maxDataSize:0,liveDataSize:0,pause:{totalTime:0,count:0}}}}},mounted:function(){this.create()},methods:{create:function(){var t=this;this.time=s()().format("YYYY年MM月DD日 HH时mm分ss秒"),v.a.all([this.$get("actuator/metrics/jvm.memory.max"),this.$get("actuator/metrics/jvm.memory.committed"),this.$get("actuator/metrics/jvm.memory.used"),this.$get("actuator/metrics/jvm.buffer.memory.used"),this.$get("actuator/metrics/jvm.buffer.count"),this.$get("actuator/metrics/jvm.threads.daemon"),this.$get("actuator/metrics/jvm.threads.live"),this.$get("actuator/metrics/jvm.threads.peak"),this.$get("actuator/metrics/jvm.classes.loaded"),this.$get("actuator/metrics/jvm.classes.unloaded"),this.$get("actuator/metrics/jvm.gc.memory.allocated"),this.$get("actuator/metrics/jvm.gc.memory.promoted"),this.$get("actuator/metrics/jvm.gc.max.data.size"),this.$get("actuator/metrics/jvm.gc.live.data.size"),this.$get("actuator/metrics/jvm.gc.pause")]).then(function(e){t.jvm.memory.max=t.convert(e[0].data.measurements[0].value),t.jvm.memory.committed=t.convert(e[1].data.measurements[0].value),t.jvm.memory.used=t.convert(e[2].data.measurements[0].value),t.jvm.buffer.memory.used=t.convert(e[3].data.measurements[0].value),t.jvm.buffer.count=e[4].data.measurements[0].value,t.jvm.threads.daemon=e[5].data.measurements[0].value,t.jvm.threads.live=e[6].data.measurements[0].value,t.jvm.threads.peak=e[7].data.measurements[0].value,t.jvm.classes.loaded=e[8].data.measurements[0].value,t.jvm.classes.unloaded=e[9].data.measurements[0].value,t.jvm.gc.memory.allocated=t.convert(e[10].data.measurements[0].value),t.jvm.gc.memory.promoted=t.convert(e[11].data.measurements[0].value),t.jvm.gc.maxDataSize=t.convert(e[12].data.measurements[0].value),t.jvm.gc.liveDataSize=t.convert(e[13].data.measurements[0].value),t.jvm.gc.pause.count=e[14].data.measurements[0].value,t.jvm.gc.pause.totalTime=e[14].data.measurements[1].value,t.loading=!1}).catch(function(e){t.$message.error("获取JVM信息失败")})},convert:function(t){return Number(t/1048576).toFixed(3)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-skeleton",{attrs:{active:"",loading:t.loading,paragraph:{rows:17}}},[a("div",{staticClass:"jvm-info"},[a("div",{staticClass:"alert"},[a("a-alert",{attrs:{type:"success","show-icon":!0}},[a("div",{attrs:{slot:"message"},slot:"message"},[t._v("\n        数据获取时间 "+t._s(this.time)+"\n        "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:t.create}},[t._v("点击刷新")])])])],1),t._v(" "),a("table",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("当前值")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"purple"}},[t._v("jvm.memory.max")])],1),t._v(" "),a("td",[t._v("JVM 最大内存")]),t._v(" "),a("td",[t._v(t._s(t.jvm.memory.max)+" MB")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"purple"}},[t._v("jvm.memory.committed")])],1),t._v(" "),a("td",[t._v("JVM 可用内存")]),t._v(" "),a("td",[t._v(t._s(t.jvm.memory.committed)+" MB")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"purple"}},[t._v("jvm.memory.used")])],1),t._v(" "),a("td",[t._v("JVM 已用内存")]),t._v(" "),a("td",[t._v(t._s(t.jvm.memory.used)+" MB")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"cyan"}},[t._v("jvm.buffer.memory.used")])],1),t._v(" "),a("td",[t._v("JVM 缓冲区已用内存")]),t._v(" "),a("td",[t._v(t._s(t.jvm.buffer.memory.used)+" MB")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"cyan"}},[t._v("jvm.buffer.count")])],1),t._v(" "),a("td",[t._v("当前缓冲区数量")]),t._v(" "),a("td",[t._v(t._s(t.jvm.buffer.count)+" 个")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"green"}},[t._v("jvm.threads.daemon")])],1),t._v(" "),a("td",[t._v("JVM 守护线程数量")]),t._v(" "),a("td",[t._v(t._s(t.jvm.threads.daemon)+" 个")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"green"}},[t._v("jvm.threads.live")])],1),t._v(" "),a("td",[t._v("JVM 当前活跃线程数量")]),t._v(" "),a("td",[t._v(t._s(t.jvm.threads.live)+" 个")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"green"}},[t._v("jvm.threads.peak")])],1),t._v(" "),a("td",[t._v("JVM 峰值线程数量")]),t._v(" "),a("td",[t._v(t._s(t.jvm.threads.peak)+" 个")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"orange"}},[t._v("jvm.classes.loaded")])],1),t._v(" "),a("td",[t._v("JVM 已加载 Class 数量")]),t._v(" "),a("td",[t._v(t._s(t.jvm.classes.loaded)+" 个")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"orange"}},[t._v("jvm.classes.unloaded")])],1),t._v(" "),a("td",[t._v("JVM 未加载 Class 数量")]),t._v(" "),a("td",[t._v(t._s(t.jvm.classes.unloaded)+" 个")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"pink"}},[t._v("jvm.gc.memory.allocated")])],1),t._v(" "),a("td",[t._v("GC 时, 年轻代分配的内存空间")]),t._v(" "),a("td",[t._v(t._s(t.jvm.gc.memory.allocated)+" MB")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"pink"}},[t._v("jvm.gc.memory.promoted")])],1),t._v(" "),a("td",[t._v("GC 时, 老年代分配的内存空间")]),t._v(" "),a("td",[t._v(t._s(t.jvm.gc.memory.promoted)+" MB")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"pink"}},[t._v("jvm.gc.max.data.size")])],1),t._v(" "),a("td",[t._v("GC 时, 老年代的最大内存空间")]),t._v(" "),a("td",[t._v(t._s(t.jvm.gc.maxDataSize)+" MB")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"pink"}},[t._v("jvm.gc.live.data.size")])],1),t._v(" "),a("td",[t._v("FullGC 时, 老年代的内存空间")]),t._v(" "),a("td",[t._v(t._s(t.jvm.gc.liveDataSize)+" MB")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"blue"}},[t._v("jvm.gc.pause.count")])],1),t._v(" "),a("td",[t._v("系统启动以来GC 次数")]),t._v(" "),a("td",[t._v(t._s(t.jvm.gc.pause.count)+" 次")])]),t._v(" "),a("tr",[a("td",[a("a-tag",{attrs:{color:"blue"}},[t._v("jvm.gc.pause.totalTime")])],1),t._v(" "),a("td",[t._v("系统启动以来GC 总耗时")]),t._v(" "),a("td",[t._v(t._s(t.jvm.gc.pause.totalTime)+" 秒")])])])])])},staticRenderFns:[]},c=a("VU/8")(o,d,!1,function(t){a("UC5L")},null,null);e.default=c.exports}});