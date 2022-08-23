// 组件下的信息

const componentOverview = {
    // tabs栏以上
    // 左侧按钮
    'componentOverview.header.left.reset':'重启',
    'componentOverview.header.left.turnoff':'关闭',
    'componentOverview.header.left.edit':'修改所属应用',
    'componentOverview.header.left.delete':'删除',
    // 右侧按钮
    'componentOverview.header.right.web':'Web终端',
    'componentOverview.header.right.build':'构建',
    'componentOverview.header.right.update':'更新',
    'componentOverview.header.right.update.roll':'更新(滚动)',
    'componentOverview.header.right.visit':'访问',
    'componentOverview.header.right.start':'启动',

    // tabs栏
    'componentOverview.body.tab.bar.overview':'总览',
    'componentOverview.body.tab.bar.monitor':'监控',
    'componentOverview.body.tab.bar.log':'日志',
    'componentOverview.body.tab.bar.expansion':'伸缩',
    'componentOverview.body.tab.bar.environmentConfiguration':'环境配置',
    'componentOverview.body.tab.bar.relation':'依赖',
    'componentOverview.body.tab.bar.mnt':'存储',
    'componentOverview.body.tab.bar.port':'端口',
    'componentOverview.body.tab.bar.plugin':'插件',
    'componentOverview.body.tab.bar.resource':'构建源',
    'componentOverview.body.tab.bar.setting':'其他设置',
    'componentOverview.body.tab.bar.connectionInformation':'连接信息',
    'componentOverview.body.tab.bar.members':'更多设置',


// tabs栏>overview
    'componentOverview.body.tab.overview.run':'运行',
    'componentOverview.body.tab.overview.allocation':'分配',
    'componentOverview.body.tab.overview.memory':'MB 内存',
    'componentOverview.body.tab.overview.occupy':'占用',
    'componentOverview.body.tab.overview.disk':'MB 磁盘',
    'componentOverview.body.tab.overview.version':'版本号',
    'componentOverview.body.tab.overview.not':'暂无',
    'componentOverview.body.tab.overview.codeVersion':'代码版本',
    'componentOverview.body.tab.overview.file':'文件MD5',
    'componentOverview.body.tab.overview.warehouse.address':'仓库地址',
    'componentOverview.body.tab.overview.submit':'提交信息',
    'componentOverview.body.tab.overview.fileName':'文件名称',
    'componentOverview.body.tab.overview.imageName':'镜像名称',
    'componentOverview.body.tab.overview.codeBranch':'代码分支',
    'componentOverview.body.tab.overview.uploadTime':'上传时间',
    'componentOverview.body.tab.overview.image':'镜像tag',
    'componentOverview.body.tab.overview.moreVersion':'查看更多版本',
    'componentOverview.body.tab.overview.return':'返回实例列表',
    'componentOverview.body.tab.overview.unlimited':'不限制',

    // tabs栏>overview>构建版本历史
    'componentOverview.body.tab.overview.buildHistory.buildVersionHistory':'构建版本历史',
    'componentOverview.body.tab.overview.buildHistory.currentVersion':'(当前版本)',
    'componentOverview.body.tab.overview.buildHistory.submitInformation':'提交信息',
    'componentOverview.body.tab.overview.buildHistory.address':'源镜像仓库地址',
    'componentOverview.body.tab.overview.buildHistory.CodeBranch':'代码分支',
    'componentOverview.body.tab.overview.buildHistory.uploadTime':'上传时间',
    'componentOverview.body.tab.overview.buildHistory.imageName':'源镜像名称',
    'componentOverview.body.tab.overview.buildHistory.codeVersion':'代码版本',
    'componentOverview.body.tab.overview.buildHistory.file':'文件MD5',
    'componentOverview.body.tab.overview.buildHistory.tag':'源镜像TAG',
    'componentOverview.body.tab.overview.buildHistory.creationTime':'创建时间',
    'componentOverview.body.tab.overview.buildHistory.log':'日志',
    'componentOverview.body.tab.overview.buildHistory.upgrade':'升级',
    'componentOverview.body.tab.overview.buildHistory.roolback':'回滚',
    'componentOverview.body.tab.overview.buildHistory.delete':'删除',
    'componentOverview.body.tab.overview.buildHistory.fileName':'文件名称',
    'componentOverview.body.tab.overview.buildHistory.runTime':'运行时间',
    'componentOverview.body.tab.overview.buildHistory.buildLog':'构建日志',
    // tabs栏>overview>运行实例
    'componentOverview.body.tab.overview.instance.title':'运行实例',
    'componentOverview.body.tab.overview.instance.tooltip':'点击查看详情',
    // tabs栏>overview>操作记录
    'componentOverview.body.tab.overview.handle.operationRecord':'操作记录',
    'componentOverview.body.tab.overview.handle.log':'日志',
    'componentOverview.body.tab.overview.handle.lookLog':'查看日志',
    'componentOverview.body.tab.overview.handle.handler':'暂无操作记录',
    'componentOverview.body.tab.overview.handle.system':'@系统',

// tabs栏>Monitor
    'componentOverview.body.tab.monitor.now':'实时',
    'componentOverview.body.tab.monitor.history':'历史',
    'componentOverview.body.tab.monitor.analysis':'尚未开通性能分析插件',
    'componentOverview.body.tab.monitor.open':'去开通',
    'componentOverview.body.tab.monitor.performanceAnalysis':'性能分析',
    'componentOverview.body.tab.monitor.monitoring':'资源监控',
    'componentOverview.body.tab.monitor.tracking':'链路追踪',
    'componentOverview.body.tab.monitor.business':'业务监控',
    // tabs栏>Monitor>实时
    'componentOverview.body.tab.monitor.now.time':'平均响应时间（ms）',
    'componentOverview.body.tab.monitor.now.averageTime':'平均响应时间，单位毫秒',
    'componentOverview.body.tab.monitor.now.throughput':'吞吐率（dps）',
    'componentOverview.body.tab.monitor.now.NumberOfRequests':'过去一分钟平均每5s的请求次数',
    'componentOverview.body.tab.monitor.now.onlineNumber':'在线人数',
    'componentOverview.body.tab.monitor.now.independent':'过去5分钟的独立IP数量',
    'componentOverview.body.tab.monitor.now.ranking':'过去5分钟耗时最多的URL排行',
    'componentOverview.body.tab.monitor.now.cumulativeTime':'累计时间(ms)',
    'componentOverview.body.tab.monitor.now.AverageTime':'平均时间(ms)',
    'componentOverview.body.tab.monitor.now.requests':'请求次数',
    'componentOverview.body.tab.monitor.now.abnormalTimes':'异常次数',
    // tabs栏>Monitor>历史>CustomChartz组件
    'componentOverview.body.tab.monitor.query':'查询',
    'componentOverview.body.tab.monitor.to':'至',
        // tabs栏>Monitor>历史>CustomChartz组件>RangeChart
    'componentOverview.body.tab.monitor.history.containerMem.title':'内存使用量',
    'componentOverview.body.tab.monitor.history.containerMem.label':'内存（MB）',
    'componentOverview.body.tab.monitor.history.containerCpu.title':'CPU使用率',
    'componentOverview.body.tab.monitor.history.containerCpu.label':'CPU使用率（%）',
    'componentOverview.body.tab.monitor.history.containerNetR.title':'传入流量',
    'componentOverview.body.tab.monitor.history.containerNetR.label':'流量（KB/s）',
    'componentOverview.body.tab.monitor.history.containerNetT.title':'传出流量',
    'componentOverview.body.tab.monitor.history.containerNetT.label':'流量（KB/s）',
    'componentOverview.body.tab.monitor.history.responseTime.title':'响应时间',
    'componentOverview.body.tab.monitor.history.responseTime.label':'响应时间（ms）',
    'componentOverview.body.tab.monitor.history.throughput.title':'吞吐率',
    'componentOverview.body.tab.monitor.history.throughput.label':'吞吐率（dps）',
    'componentOverview.body.tab.monitor.history.numberOnline.title':'在线人数',
    'componentOverview.body.tab.monitor.history.numberOnline.label':'在线人数',
    'componentOverview.body.tab.monitor.history.time':'时间',
    'componentOverview.body.tab.monitor.history.edit':'编辑',
    'componentOverview.body.tab.monitor.history.delete':'删除',
    'componentOverview.body.tab.monitor.history.refresh':'刷新',
    // tabs栏>Monitor>TraceShow
    'componentOverview.body.tab.monitor.TraceShow.message':'当前基于Java类源代码构建的组件默认支持Pinpoint链路追踪数据采集',
    'componentOverview.body.tab.monitor.TraceShow.Docking':'已经对接Pinpoint，可以开启数据采集',
    'componentOverview.body.tab.monitor.TraceShow.open':'开启',
    'componentOverview.body.tab.monitor.TraceShow.alreadyOpen':'已经开启Pinpoint链路追踪数据采集',
    'componentOverview.body.tab.monitor.TraceShow.close':'关闭',
    'componentOverview.body.tab.monitor.TraceShow.notDependent':'当前组件未依赖Pinpoint服务，请先依赖Pinpoint服务',
    // tabs栏>Monitor>CustomMonitor
    'componentOverview.body.tab.monitor.CustomMonitor.add':'添加图表',
    'componentOverview.body.tab.monitor.CustomMonitor.import':'一键导入',
    'componentOverview.body.tab.monitor.CustomMonitor.delete':'批量删除',
    'componentOverview.body.tab.monitor.CustomMonitor.point':'管理监控点',
    'componentOverview.body.tab.monitor.CustomMonitor.noBusiness':'暂无业务监控图、请先添加',
        // tabs栏>Monitor>CustomMonitor>MonitoryPoint
    'componentOverview.body.tab.monitor.MonitoryPoint.standard':'支持Prometheus的metric监控指标规范',
    'componentOverview.body.tab.monitor.MonitoryPoint.add':'添加配置',
    'componentOverview.body.tab.monitor.MonitoryPoint.back':'返回监控图',
    'componentOverview.body.tab.monitor.MonitoryPoint.name':'配置名称',
    'componentOverview.body.tab.monitor.MonitoryPoint.collect':'收集任务名称',
    'componentOverview.body.tab.monitor.MonitoryPoint.path':'路径',
    'componentOverview.body.tab.monitor.MonitoryPoint.port':'端口',
    'componentOverview.body.tab.monitor.MonitoryPoint.time':'收集间隔时间',
    'componentOverview.body.tab.monitor.MonitoryPoint.handle':'操作',
    'componentOverview.body.tab.monitor.MonitoryPoint.delete':'删除',
    'componentOverview.body.tab.monitor.MonitoryPoint.edit':'编辑',
        // tabs栏>Monitor>CustomMonitor>CustomMonitoring
    'componentOverview.body.tab.monitor.CustomMonitoring.editChart':'编辑图表',
    'componentOverview.body.tab.monitor.CustomMonitoring.addChart':'添加图表',
    'componentOverview.body.tab.monitor.CustomMonitoring.cancel':'取消',
    'componentOverview.body.tab.monitor.CustomMonitoring.preservation':'保存',
    'componentOverview.body.tab.monitor.CustomMonitoring.add':'添加',
    'componentOverview.body.tab.monitor.CustomMonitoring.input':'请输入 标准PromQL 语法进行查询显示图表',
    'componentOverview.body.tab.monitor.CustomMonitoring.title':'请填写标题',
    'componentOverview.body.tab.monitor.CustomMonitoring.max':'最大长度64位',
    'componentOverview.body.tab.monitor.CustomMonitoring.queryCriteria':'请填写查询条件',
    'componentOverview.body.tab.monitor.CustomMonitoring.maxLength':'最大长度255位',
    'componentOverview.body.tab.monitor.CustomMonitoring.query':'查询',

// tabs栏>log
    'componentOverview.body.tab.log.push':'暂停推送',
    'componentOverview.body.tab.log.startPushing':'开始推送',
    'componentOverview.body.tab.log.install':'历史日志下载',
    'componentOverview.body.tab.log.lately':'最近1000条日志',
    'componentOverview.body.tab.log.text':'过滤文本',
    'componentOverview.body.tab.log.filtertext':'请输入过滤文本',
    'componentOverview.body.tab.log.container':'容器',
    'componentOverview.body.tab.log.allLogs':'全部日志',
    'componentOverview.body.tab.log.select':'请选择容器',
    'componentOverview.body.tab.log.refresh':'自动刷新',
    'componentOverview.body.tab.log.five':'5秒',
    'componentOverview.body.tab.log.ten':'10秒',
    'componentOverview.body.tab.log.thirty':'30秒',
    'componentOverview.body.tab.log.close':'关闭',
    'componentOverview.body.tab.log.exampleName':'实例：{name}',
    'componentOverview.body.tab.log.containerName':'容器：{name}',
    // tabs栏>log>History1000Log
    'componentOverview.body.tab.log.History1000Log.title':'最近1000条日志',
    'componentOverview.body.tab.log.History1000Log.null':'暂无日志',
    // tabs栏>log>HistoryLog
    'componentOverview.body.tab.log.HistoryLog.title':'历史日志下载',
    'componentOverview.body.tab.log.HistoryLog.close':'关闭',
    'componentOverview.body.tab.log.HistoryLog.null':'暂无历史日志',

// tabs栏>Environment configuration
    'componentOverview.body.tab.env.environmentVariable.message':'组件环境配置变更后需要更新或重启组件生效',
    'componentOverview.body.tab.env.environmentVariable.title':'自定义环境变量',
    'componentOverview.body.tab.env.setting.message':'配置文件内容支持使用环境变量动态渲染，方式为：${ENV_NAME}',
    'componentOverview.body.tab.env.setting.title':'配置文件设置',
    'componentOverview.body.tab.env.setting.add':'添加配置文件',
    'componentOverview.body.tab.env.setting.volume_name':'配置文件名称',
    'componentOverview.body.tab.env.setting.volume_path':'配置文件挂载路径',
    'componentOverview.body.tab.env.setting.mode':'权限',
    'componentOverview.body.tab.env.setting.action':'操作',
    'componentOverview.body.tab.env.setting.delete':'删除',
    'componentOverview.body.tab.env.setting.edit':'编辑',
    'componentOverview.body.tab.env.file.share':'共享配置文件',
    'componentOverview.body.tab.env.file.mount':'挂载共享配置文件',
    'componentOverview.body.tab.env.file.localMount':'本地挂载配置文件路径',
    'componentOverview.body.tab.env.file.name':'配置文件名称',
    'componentOverview.body.tab.env.file.path':'目标挂载配置文件路径',
    'componentOverview.body.tab.env.file.action':'操作',
    'componentOverview.body.tab.env.file.Component':'所属组件',
    'componentOverview.body.tab.env.file.Components':'组件所属应用',
    'componentOverview.body.tab.env.file.cancel':'取消挂载',
    // tabs栏>Environment configuration>EditableFormTable
   'componentOverview.body.tab.env.table.attr_name.placeholders':'请输入变量名称',
   'componentOverview.body.tab.env.table.attr_name.required':'请输入变量名称',
   'componentOverview.body.tab.env.table.attr_name.max':'最大长度1024位',
   'componentOverview.body.tab.env.table.attr_name.pattern':'必须由字母、数字和 - . _ 组成，不支持数字开头',
   'componentOverview.body.tab.env.table.attr_value.required':'请输入变量值',
   'componentOverview.body.tab.env.table.attr_value.max':'最大长度65535位',
   'componentOverview.body.tab.env.table.attr_value.placeholders':'请输入变量值',
   'componentOverview.body.tab.env.table.attr_path.required':'请输入变量说明',
   'componentOverview.body.tab.env.table.attr_path.max':'最大长度1024位',
   'componentOverview.body.tab.env.table.attr_path.placeholders':'请输入变量说明',
   'componentOverview.body.tab.env.table.column.attr_name':'变量名',
   'componentOverview.body.tab.env.table.column.attr_value':'变量值',
   'componentOverview.body.tab.env.table.column.name':'说明',
   'componentOverview.body.tab.env.table.column.action':'操作',
   'componentOverview.body.tab.env.table.column.preservation':'保存',
   'componentOverview.body.tab.env.table.column.cancel':'取消',
   'componentOverview.body.tab.env.table.column.delete':'删除',
   'componentOverview.body.tab.env.table.column.msg':'将此连接信息变量转换为',
   'componentOverview.body.tab.env.table.column.nextMsg':'环境变量',
   'componentOverview.body.tab.env.table.column.explain':'将此环境变量转换为',
   'componentOverview.body.tab.env.table.column.nextExplain':'组件连接信息变量',
   'componentOverview.body.tab.env.table.column.transfer':'转移',
   'componentOverview.body.tab.env.table.column.edit':'修改',
   'componentOverview.body.tab.env.table.column.add':'添加变量',
   'componentOverview.body.tab.env.table.column.placeholder':'请输入变量名进行搜索',

// tabs栏>Relation
   'componentOverview.body.Relation.ViewRelationInfo.title':'依赖信息查看',
   'componentOverview.body.Relation.ViewRelationInfo.close':'关闭',
   'componentOverview.body.Relation.EnvironmentVariable.title':'组件连接信息',
   'componentOverview.body.Relation.EnvironmentVariable.information':'依赖组件信息',
   'componentOverview.body.Relation.EnvironmentVariable.conflict':'(依赖的组件有相同的端口冲突,请处理)',
   'componentOverview.body.Relation.EnvironmentVariable.add':'添加依赖',
   'componentOverview.body.Relation.table.service_cname':'组件名',
   'componentOverview.body.Relation.table.group_name':'所属应用',
   'componentOverview.body.Relation.table.operation':'操作',
   'componentOverview.body.Relation.table.connection':'连接信息',
   'componentOverview.body.Relation.table.cancel':'取消依赖',
    // tabs栏>Relation>AddRelation
    'componentOverview.body.addRelation.title':'添加依赖',
    'componentOverview.body.addRelation.placeholder':'请输入关键字',
    'componentOverview.body.addRelation.search':'搜索',
    'componentOverview.body.addRelation.option':'全部',
    'componentOverview.body.addRelation.group_name':'应用名称',
    'componentOverview.body.addRelation.service_name':'组件名称',
    'componentOverview.body.addRelation.table_service_name':'组件名称',
    'componentOverview.body.addRelation.table_group_name':'应用名称',
// tabs栏>Expansion
    'componentOverview.body.Expansion.empty':'不能为空',
    'componentOverview.body.Expansion.enter':'请输入数字',
    'componentOverview.body.Expansion.Input':'输入范围1-65535',
    'componentOverview.body.Expansion.max':'不能大于最大实例数',
    'componentOverview.body.Expansion.min':'不能小于最小实例数',
    'componentOverview.body.Expansion.cup_usage':'CPU使用量',
    'componentOverview.body.Expansion.cpu_use':'CPU使用率',
    'componentOverview.body.Expansion.usage':'内存使用量',
    'componentOverview.body.Expansion.use':'内存使用率',
    'componentOverview.body.Expansion.instance':'实例情况',
    'componentOverview.body.Expansion.refresh':'刷新',
    'componentOverview.body.Expansion.query':'查询命令：',
    'componentOverview.body.Expansion.copyCommand':'查询详细的组件实例信息,请复制查询命令到集群管理节点查询',
    'componentOverview.body.Expansion.copy':'复制',
    'componentOverview.body.Expansion.modify':'单实例类型组件不能进行水平伸缩，若需要请修改为相应的多实例组件类型。',
    'componentOverview.body.Expansion.set':'去设置',
    'componentOverview.body.Expansion.telescopic':'手动伸缩',
    'componentOverview.body.Expansion.empower':'当前产品授权不支持 GPU 调度，需要 GPU 共享调度能力请获取企业版授权。',
    'componentOverview.body.Expansion.memory':'内存',
    'componentOverview.body.Expansion.unlimited':'不限制',
    'componentOverview.body.Expansion.algorithm':'CPU 限制值目前基于比例算法基于设置内存值计算。',
    'componentOverview.body.Expansion.video':'GPU显存',
    'componentOverview.body.Expansion.resources':'GPU设置为0则不分配GPU资源，请求显存超过集群中单颗显卡的最大可用容量时无法进行调度。',
    'componentOverview.body.Expansion.input_cup':'请输入CPU',
    'componentOverview.body.Expansion.onlyAllowed':'只允许输入整数',
    'componentOverview.body.Expansion.setUp':'设置',
    'componentOverview.body.Expansion.dispatch':'CPU分配额0为不限制，1000m=1core、超出集群中单节点CPU的最大可用容量时无法进行调度。',
    'componentOverview.body.Expansion.number':'实例数量',
    'componentOverview.body.Expansion.initialValue':'该值定义组件实例数量的初始值，实际值可能被自动伸缩调整。',
    'componentOverview.body.Expansion.flex':'自动伸缩',
    'componentOverview.body.Expansion.switch':'功能开关',
    'componentOverview.body.Expansion.minNumber':'最小实例数',
    'componentOverview.body.Expansion.maxNumber':'最大实例数',
    'componentOverview.body.Expansion.CPU_usage':'CPU使用',
    'componentOverview.body.Expansion.CPU_umemory':'内存使用',
    'componentOverview.body.Expansion.rate':'率',
    'componentOverview.body.Expansion.amount_m':'量(m)',
    'componentOverview.body.Expansion.amount_mi':'量(Mi)',
    'componentOverview.body.Expansion.input_num_max':'请输入最大数量',
    'componentOverview.body.Expansion.input_memory':'请输入内存',
    'componentOverview.body.Expansion.horizontal':'水平伸缩记录',
    'componentOverview.body.Expansion.time':'时间',
    'componentOverview.body.Expansion.telescopicDetails':'伸缩详情',
    'componentOverview.body.Expansion.type':'类型',
    'componentOverview.body.Expansion.horizontalAutomatic':'水平自动伸缩',
    'componentOverview.body.Expansion.manualTelescopic':'手动伸缩',
    'componentOverview.body.Expansion.vertical':'垂直自动伸缩',
    'componentOverview.body.Expansion.operator':'操作人',
    'componentOverview.body.Expansion.reason':'原因',
    // tabs栏>Expansion>InstanceList
    'componentOverview.body.Expansion.InstanceList.example':'实例{num}',
    'componentOverview.body.Expansion.InstanceList.normal':'正常运行',
    'componentOverview.body.Expansion.InstanceList.starting':'启动中',
    'componentOverview.body.Expansion.InstanceList.successfully':'运行成功',
    'componentOverview.body.Expansion.InstanceList.failed':'运行失败',
    'componentOverview.body.Expansion.InstanceList.unknown':'未知',
    'componentOverview.body.Expansion.InstanceList.memory':'运行内存',
    // tabs栏>Expansion>AddScaling
    'componentOverview.body.Expansion.AddScaling.memory_usage':'内存使用量',
    'componentOverview.body.Expansion.AddScaling.memory_rate':'内存使用率',
    'componentOverview.body.Expansion.AddScaling.usage':'CPU使用量',
    'componentOverview.body.Expansion.AddScaling.rate':'CPU使用率',
    'componentOverview.body.Expansion.AddScaling.input_min':'最小输入值{num}',
    'componentOverview.body.Expansion.AddScaling.input_max':'最大输入值65535',
    'componentOverview.body.Expansion.AddScaling.add_indicator':'添加指标',
    'componentOverview.body.Expansion.AddScaling.flex':'自动伸缩',
    'componentOverview.body.Expansion.AddScaling.determine':'确定',
    'componentOverview.body.Expansion.AddScaling.minimum_quantity':'最小数量',
    'componentOverview.body.Expansion.AddScaling.number':'请输入数字',
    'componentOverview.body.Expansion.AddScaling.placese_input_min':'请输入最小数量',
    'componentOverview.body.Expansion.AddScaling.lower_limit':'自动伸缩副本数的下限',
    'componentOverview.body.Expansion.AddScaling.max':'最大数量',
    'componentOverview.body.Expansion.AddScaling.placese_input_max':'请输入最大数量',
    'componentOverview.body.Expansion.AddScaling.upper_limit':'自动伸缩副本数的上限',
    'componentOverview.body.Expansion.AddScaling.index':'指标',
    'componentOverview.body.Expansion.AddScaling.select_needs':'请选择需要的指标',
    'componentOverview.body.Expansion.AddScaling.target_value':'目标值',
    'componentOverview.body.Expansion.AddScaling.Memory':'内存',
    'componentOverview.body.Expansion.AddScaling.use':'使用',
    'componentOverview.body.Expansion.AddScaling.dang':'当',
    'componentOverview.body.Expansion.AddScaling.numberOfInstances':'超过或低于该目标值时, 实例数量会增加或减少',
    'componentOverview.body.Expansion.AddScaling.amount':'量',
    'componentOverview.body.Expansion.AddScaling.rate_unit':'率',
// tabs栏>mnt
    'componentOverview.body.mnt.Alert.message':'存储配置发生变化后需要更新组件才能生效',
    'componentOverview.body.mnt.save_setting':'存储设置',
    'componentOverview.body.mnt.add_storage':'添加存储',
    'componentOverview.body.mnt.volume_name':'存储名称',
    'componentOverview.body.mnt.volume_path':'挂载路径',
    'componentOverview.body.mnt.volume_type':'存储类型',
    'componentOverview.body.mnt.volume_capacity':'存储容量',
    'componentOverview.body.mnt.unlimited':'不限制',
    'componentOverview.body.mnt.status':'状态',
    'componentOverview.body.mnt.unmounted ':'未挂载',
    'componentOverview.body.mnt.mounted':'已挂载',
    'componentOverview.body.mnt.action':'操作',
    'componentOverview.body.mnt.deldete':'删除',
    'componentOverview.body.mnt.edit':'编辑',
    'componentOverview.body.mnt.share':'共享其他组件存储',
    'componentOverview.body.mnt.mount':'挂载共享存储',
    'componentOverview.body.mnt.local_vol_path':'本地挂载路径',
    'componentOverview.body.mnt.dep_vol_name':'目标存储名称',
    'componentOverview.body.mnt.dep_vol_path':'目标挂载路径',
    'componentOverview.body.mnt.dep_vol_type':'目标存储类型',
    'componentOverview.body.mnt.dep_app_name':'目标所属组件',
    'componentOverview.body.mnt.dep_app_group':'目标组件所属应用',
    'componentOverview.body.mnt.action':'操作',
    'componentOverview.body.mnt.unmount':'取消挂载',
    // tabs栏>mnt>RelyComponentModal
    'componentOverview.body.RelyComponentModal.title':'存储被依赖的组件',
    'componentOverview.body.RelyComponentModal.volume_name':'存储名称',
    'componentOverview.body.RelyComponentModal.service_name':'组件名称',
    'componentOverview.body.RelyComponentModal.close':'关闭',
    // tabs栏>mnt>AddVolumes
    'componentOverview.body.AddVolumes.callback_null':'请输入挂载路径',
    'componentOverview.body.AddVolumes.callback_path':'挂载路径为系统保留路径，请更换其他路径',
    'componentOverview.body.AddVolumes.callback_max':'最大长度100位',
    'componentOverview.body.AddVolumes.Max':'限额最大值为1000GB',
    'componentOverview.body.AddVolumes.Min':'限额最小值为0，即不进行限制',
    'componentOverview.body.AddVolumes.edit':'编辑存储',
    'componentOverview.body.AddVolumes.add':'添加存储',
    'componentOverview.body.AddVolumes.name':'名称',
    'componentOverview.body.AddVolumes.required':'请输入存储名称',
    'componentOverview.body.AddVolumes.max':'最大长度40位',
    'componentOverview.body.AddVolumes.pattern':'只支持字母、数字和-_组合，并且必须以字母数字开始和结束',
    'componentOverview.body.AddVolumes.volume_path':'挂载路径',
    'componentOverview.body.AddVolumes.volume_path_placeholder':'请输入挂载路径',
    'componentOverview.body.AddVolumes.volume_capacity':'存储配额(GB)',
    'componentOverview.body.AddVolumes.min':'最小值为0，即不限制',
    'componentOverview.body.AddVolumes.unlimited':'不限制',
    'componentOverview.body.AddVolumes.input':'请输入存储配额',
    'componentOverview.body.AddVolumes.type':'类型',
    'componentOverview.body.AddVolumes.select_type':'请选择存储类型',
    'componentOverview.body.AddVolumes.cancel':'取消',
    'componentOverview.body.AddVolumes.confirm':'确认',
    // tabs栏>mnt>AddRelationMnt
    'componentOverview.body.AddRelationMnt.mag':'请输入本地挂载路径',
    'componentOverview.body.AddRelationMnt.mag_path':'{path}路径为系统保留路径，请更换其他路径',
    'componentOverview.body.AddRelationMnt.title':'挂载共享目录',
    'componentOverview.body.AddRelationMnt.placeholder':'请输入组件名称进行搜索',
    'componentOverview.body.AddRelationMnt.localpath':'本地挂载路径',
    'componentOverview.body.AddRelationMnt.dep_vol_name':'目标存储名称',
    'componentOverview.body.AddRelationMnt.dep_vol_path':'目标挂载路径',
    'componentOverview.body.AddRelationMnt.dep_vol_type':'目标存储类型',
    'componentOverview.body.AddRelationMnt.dep_app_name':'目标所属组件',
    'componentOverview.body.AddRelationMnt.dep_app_group':'目标组件所属应用',
// tabs栏>Port
    'componentOverview.body.Port.message':'端口配置信息发生变化后需要重启组件才能生效',
    'componentOverview.body.Port.add':'添加端口',
    'componentOverview.body.Port.msg':'如需要提供访问服务，请',
    'componentOverview.body.Port.addMsg':'添加端口',
    // tabs栏>Port>ports
    'componentOverview.body.Ports.determine':'确定',
    'componentOverview.body.Ports.cancel':'取消',
    'componentOverview.body.Ports.attr_name':'变量名',
    'componentOverview.body.Ports.attr_value':'变量值',
    'componentOverview.body.Ports.name':'说明',
    'componentOverview.body.Ports.port_number':'端口号',
    'componentOverview.body.Ports.port_protocol':'端口协议',
    'componentOverview.body.Ports.service_information':'服务信息',
    'componentOverview.body.Ports.access_policy':'访问策略',
    'componentOverview.body.Ports.operation':'操作',
    'componentOverview.body.Ports.internal_service':'对内服务',
    'componentOverview.body.Ports.access_address':'访问地址',
    'componentOverview.body.Ports.use_alias':'使用别名',
    'componentOverview.body.Ports.external_service':'对外服务',
    'componentOverview.body.Ports.unbound':'解绑',
    'componentOverview.body.Ports.add':'添加域名',
    'componentOverview.body.Ports.manage':'管理访问策略',
    'componentOverview.body.Ports.delete':'删除',
    'componentOverview.body.Ports.current':'您当前的访问协议是{protocol}',
    'componentOverview.body.Ports.current_protocol':'您当前的访问协议是{protocol},打开MySQL客户端访问',
    'componentOverview.body.Ports.recommend':'推荐访问地址',
    'componentOverview.body.Ports.copy':'复制',
    'componentOverview.body.Ports.msg':'访问信息',


    // tabs栏>Port>AddPort
    'componentOverview.body.AddPort.callback':'端口范围为1-65534',
    'componentOverview.body.AddPort.title':'添加端口',
    'componentOverview.body.AddPort.label_port':'端口',
    'componentOverview.body.AddPort.required':'请添写端口',
    'componentOverview.body.AddPort.min':'请填写端口,范围1-65535',
    'componentOverview.body.AddPort.max':'请填写端口,范围1025-65535',
    'componentOverview.body.AddPort.label_agreement':'协议',
    'componentOverview.body.AddPort.add':'请添加端口',
    // tabs栏>Port>AddDomain
    'componentOverview.body.AddDomain.callback':'请选择证书!',
    'componentOverview.body.AddDomain.title':'绑定域名',
    'componentOverview.body.AddDomain.message':'请确保将域名cname指向到本组件的对外服务访问地址',
    'componentOverview.body.AddDomain.label_protocol':'协议',
    'componentOverview.body.AddDomain.label_protocol.required':'请添加端口',
    'componentOverview.body.AddDomain.httptohttps':'HTTP转HTTPS',
    'componentOverview.body.AddDomain.httpandhttps':'HTTP与HTTPS共存',
    'componentOverview.body.AddDomain.label_protocol.domain':'域名',
    'componentOverview.body.AddDomain.label_protocol.requireds':'请添加域名',
    'componentOverview.body.AddDomain.label_protocol.pattern':'请填写正确的域名格式，支持泛域名',
    'componentOverview.body.AddDomain.label_protocol.placeholder':'请填写域名',
    'componentOverview.body.AddDomain.lable_certificate_id':'选择证书',
    'componentOverview.body.AddDomain.select.placeholder':'请选择证书',
    'componentOverview.body.AddDomain.Load_more':'加载更多',
    'componentOverview.body.AddDomain.select':'请选择证书',
    'componentOverview.body.AddDomain.no_available':'无可用证书？',
    'componentOverview.body.AddDomain.new':'去新建',
    'componentOverview.body.AddDomain.setting':'如果需要设置更多路由策略参数 ：',
    'componentOverview.body.AddDomain.into':'点击进入访问策略设置',
    // tabs栏>Port>AddKey
    'componentOverview.body.AddKey.title':'新建证书',
    'componentOverview.body.AddKey.alias':'证书名称',
    'componentOverview.body.AddKey.required':'请填写证书名称',
    'componentOverview.body.AddKey.max':'最大长度64位',
    'componentOverview.body.AddKey.private_key':'请添加key',
    'componentOverview.body.AddKey.certificate':'证书',
    'componentOverview.body.AddKey.placeholder':'请添加证书',
    // tabs栏>Port>EditAlias
    'componentOverview.body.EditAlias.title':'编辑别名',
    'componentOverview.body.EditAlias.label_alias':'别名',
    'componentOverview.body.EditAlias.label_alias.message':'请填写端口别名',
    'componentOverview.body.EditAlias.label_k8s_service_name':'内部域名',
    'componentOverview.body.EditAlias.label_k8s_service_name_message':'请填写内部域名',
    'componentOverview.body.EditAlias.label_k8s_service_name.max':'最大长度63位',
    'componentOverview.body.EditAlias.label_k8s_service_name.pattern':'必须由小写字母、数字和-组成，并且必须以小写字母开始,数字和小写字母结束',
    // tabs栏>Port>SubDomain
    'componentOverview.body.SubDomain.title':'新增二级域名',
    'componentOverview.body.SubDomain.domain':'域名',
    'componentOverview.body.SubDomain.required':'请添加域名',
    'componentOverview.body.SubDomain.pattern':'格式不正确，请输入数字或字母',
    'componentOverview.body.SubDomain.placeholder':'请填写域名',
    // tabs栏>Port>SubPort
    'componentOverview.body.SubPort.title':'绑定域名',
    'componentOverview.body.SubPort.port':'请选择端口',

}
    
  

export default Object.assign({}, componentOverview);