import { notification } from 'antd'

var aliyunRegionNames = [
  {
    RegionId: 'cn-qingdao',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '华北1（青岛）'
  },
  {
    RegionId: 'cn-beijing',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '华北2（北京）'
  },
  {
    RegionId: 'cn-zhangjiakou',
    RegionEndpoint: 'ecs.cn-zhangjiakou.aliyuncs.com',
    LocalName: '华北3（张家口）'
  },
  {
    RegionId: 'cn-huhehaote',
    RegionEndpoint: 'ecs.cn-huhehaote.aliyuncs.com',
    LocalName: '华北5（呼和浩特）'
  },
  {
    RegionId: 'cn-hangzhou',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '华东1（杭州）'
  },
  {
    RegionId: 'cn-shanghai',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '华东2（上海）'
  },
  {
    RegionId: 'cn-shenzhen',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '华南1（深圳）'
  },
  {
    RegionId: 'cn-heyuan',
    RegionEndpoint: 'ecs.cn-heyuan.aliyuncs.com',
    LocalName: '华南2（河源）'
  },
  {
    RegionId: 'cn-chengdu',
    RegionEndpoint: 'ecs.cn-chengdu.aliyuncs.com',
    LocalName: '西南1（成都）'
  },
  {
    RegionId: 'cn-hongkong',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '中国（香港）'
  },
  {
    RegionId: 'ap-northeast-1',
    RegionEndpoint: 'ecs.ap-northeast-1.aliyuncs.com',
    LocalName: '日本（东京）'
  },
  {
    RegionId: 'ap-southeast-1',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '新加坡'
  },
  {
    RegionId: 'ap-southeast-2',
    RegionEndpoint: 'ecs.ap-southeast-2.aliyuncs.com',
    LocalName: '澳大利亚（悉尼）'
  },
  {
    RegionId: 'ap-southeast-3',
    RegionEndpoint: 'ecs.ap-southeast-3.aliyuncs.com',
    LocalName: '马来西亚（吉隆坡）'
  },
  {
    RegionId: 'ap-southeast-5',
    RegionEndpoint: 'ecs.ap-southeast-5.aliyuncs.com',
    LocalName: '印度尼西亚（雅加达）'
  },
  {
    RegionId: 'ap-south-1',
    RegionEndpoint: 'ecs.ap-south-1.aliyuncs.com',
    LocalName: '印度（孟买）'
  },
  {
    RegionId: 'us-east-1',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '美国（弗吉尼亚）'
  },
  {
    RegionId: 'us-west-1',
    RegionEndpoint: 'ecs.aliyuncs.com',
    LocalName: '美国（硅谷）'
  },
  {
    RegionId: 'eu-west-1',
    RegionEndpoint: 'ecs.eu-west-1.aliyuncs.com',
    LocalName: '英国（伦敦）'
  },
  {
    RegionId: 'me-east-1',
    RegionEndpoint: 'ecs.me-east-1.aliyuncs.com',
    LocalName: '阿联酋（迪拜）'
  },
  {
    RegionId: 'eu-central-1',
    RegionEndpoint: 'ecs.eu-central-1.aliyuncs.com',
    LocalName: '德国（法兰克福）'
  }
]

var createKubernetesSteps = {
  Init: {
    Title: '控制器初始化',
    Description: '检测提供的参数是否正确',
    Status: ''
  },
  SelectZone: {
    Title: '选择部署可用区',
    Description: '选择合适的可用区用以购买VPC等资源',
    Status: ''
  },
  CreateVPC: {
    Title: '创建VPC专有网络',
    Description:
      '由于集群购买的限制和资源独立化原则，我们将新创建VPC网络用户部署集群',
    Status: ''
  },
  CreateVSWitch: {
    Title: '创建VSwitch交换机',
    Description: '基于上一步创建的VPC创建交换机',
    Status: ''
  },
  AllocateResource: {
    Title: '调配资源',
    Description:
      '确认用户提供的资源类型在指定区域是否可用，若不可用则重新选择同级别可用资源',
    Status: ''
  },
  CreateCluster: {
    Title: '创建集群',
    Description: '创建托管集群，创建成功后大概10分钟集群即可使用',
    Status: ''
  }
}

var initRainbondSteps = {
  Init: {
    Title: '控制器初始化',
    Description: '检测提供的参数是否正确',
    Status: ''
  },
  CheckCluster: {
    Title: '检测Kubernetes集群',
    Description: '对选择的Kubernetes集群进行适配性检测',
    Status: ''
  },
  CreateRDS: {
    Title: '创建RDS资源并初始化(预计2分钟)',
    Description:
      '用于Rainbond Region数据库，默认创建按需付费的高可用,入门级,通用型2GB实例',
    Status: ''
  },
  CreateNAS: {
    Title: '创建NAS资源',
    Description: '用于集群所有组件的持久化存储，默认使用单个NAS子目录模式',
    Status: ''
  },
  CreateNASMount: {
    Title: '创建NAS挂载点',
    Description: '创建NAS挂载点后即可使用此NAS资源',
    Status: ''
  },
  CreateLoadBalancer: {
    Title: '创建负载均衡',
    Description: '负载均衡用于集群控制端和应用网关的流量入口',
    Status: ''
  },
  BoundLoadBalancer: {
    Title: '创建负载均衡TCP监听',
    Description: '将所需要的端口负载均衡到所有Rainbond网关节点上',
    Status: ''
  },
  SetSecurityGroup: {
    Title: '设置安全组策略',
    Description: '默认将打开Rainbond网关节点需要对外暴露的端口安全策略',
    Status: ''
  },
  AssignDefaultDomain: {
    Title: '分配默认域名',
    Description: '将为你分配一个泛解析默认域名作为应用访问的默认域名',
    Status: ''
  },
  InitRainbondRegion: {
    Title: '初始化Rainbond集群完成',
    Description: '已经完成Rainbond集群初始化',
    Status: ''
  },
  InitRainbondRegionOperator: {
    Title: '启动集群初始化控制器',
    Description: 'Rainbond Operator创建并启动',
    Status: ''
  },
  InitRainbondRegionImageHub: {
    Title: '启动集群本地镜像仓库(预计2分钟)',
    Description:
      '本地镜像仓库就绪意味着存储、网关等服务已就绪，本阶段预计2分钟',
    Status: ''
  },
  InitRainbondRegionPackage: {
    Title: '系统所需所有镜像本地化处理(预计10分钟)',
    Description:
      '将Rainbond需要的所有镜像获取完成并推送到本地镜像仓库',
    Status: ''
  },
  InitRainbondRegionRegionConfig: {
    Title: '获取集群访问配置文件(预计1分钟)',
    Description:
      '等待集群服务启动完成，当API服务可以正常访问则集群访问配置文件已获取完成',
    Status: ''
  }
}
const aliyunIcon = (
  <svg
    t='1586160813949'
    viewBox='0 0 3477 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    p-id='5004'
    width='100'
    height='100'
  >
    <path
      d='M2114.83544281 615.29113906c87.49367063-2.43037969 119.0886075-63.18987375 119.0886075-116.65822781L2233.92405031 177.822785l12.15189844 0 12.15189844-48.60759469L1998.177215 129.21519031l12.15189844 48.60759469 174.98734218 0 0 315.94936688c0 46.177215-34.02531656 75.34177219-82.63291125 75.34177218L2114.83544281 615.29113906 2114.83544281 615.29113906z'
      fill='#ff6a00'
      p-id='5005'
    />
    <path
      d='M2124.55696156 505.92405031c12.15189844-12.15189844 17.01265781-29.16455719 17.01265781-55.89873375L2141.56962031 221.56962031 2000.60759469 221.56962031l0 301.36708875 77.77215187 0C2097.822785 522.93670906 2114.83544281 518.07594969 2124.55696156 505.92405031zM2049.21519031 471.89873375L2049.21519031 270.177215l43.74683531 0L2092.96202563 445.16455719c0 19.44303844-7.29113906 26.7341775-24.30379782 26.7341775L2049.21519031 471.89873375z'
      fill='#ff6a00'
      p-id='5006'
    />
    <path
      d='M1803.74683531 126.78480969L1803.74683531 615.29113906l48.60759469 0 0-21.87341812L1852.35443 330.93670906 1852.35443 177.822785l58.32911437 0-36.45569625 153.11392406 0 0 0 0c14.58227813 12.15189844 41.31645563 43.74683531 41.31645563 97.21519032 0 53.46835406-31.59493687 72.9113925-41.31645563 77.77215187l0 51.03797437c26.7341775-2.43037969 92.35443-38.88607594 92.35443-126.37974656 0-53.46835406-19.44303844-89.92405031-36.45569625-114.22784812l43.74683532-189.56962032L1803.74683531 126.78480969z'
      fill='#ff6a00'
      p-id='5007'
    />
    <path
      d='M2350.58227813 566.68354437L2340.86075938 615.29113906l432.60759468 0-12.15189843-48.60759468-179.84810157 0 0-60.75949407 165.2658225 0-12.15189843-48.60759468-155.54430375 0L2579.03797437 396.55696156l111.79746844 0c53.46835406 0 80.20253156-26.7341775 80.20253156-80.20253156L2771.03797437 126.78480969 2340.86075938 126.78480969 2340.86075938 396.55696156l189.56962031 0 0 58.32911438-155.54430375 0-12.15189844 48.60759469 165.2658225 0L2528 566.68354437 2350.58227813 566.68354437zM2581.46835406 287.18987375l114.22784813 0-12.15189844-48.60759469-102.07594969 0L2581.46835406 177.822785l140.96202563 0 0 136.10126625c0 24.30379781-9.72151875 34.02531656-29.16455719 34.02531656l-111.79746844 0L2581.46835406 287.18987375zM2391.89873375 347.94936687L2391.89873375 177.822785l140.96202563 0 0 60.75949406-102.07594969 0-12.15189844 48.60759469 114.22784813 0L2532.86075937 347.94936687 2391.89873375 347.94936687z'
      fill='#ff6a00'
      p-id='5008'
    />
    <path
      d='M3242.53164594 126.78480969L2902.27848125 126.78480969 2890.12658187 177.822785 3254.68354438 177.822785Z'
      fill='#ff6a00'
      p-id='5009'
    />
    <path
      d='M2882.83544281 610.43037969l-2.43037969 4.86075937 332.96202563 0c19.44303844 0 34.02531656-4.86075937 43.74683531-17.01265781 9.72151875-14.58227813 7.29113906-31.59493687 2.43037969-41.31645562l0 0c-4.86075937-24.30379781-24.30379781-109.36708875-29.16455719-121.51898719l0-2.43037969-51.03797437 0 2.43037968 4.86075938c2.43037969 12.15189844 24.30379781 99.64557 29.16455719 128.81012625l-267.34177219 0c12.15189844-55.89873375 34.02531656-153.11392406 46.177215-199.29113907L3288.70886094 367.39240531l-12.15189844-48.60759468-408.30379781 0-12.15189844 48.60759468 82.63291125 0C2929.01265781 411.13924062 2899.84810156 532.65822781 2882.83544281 610.43037969z'
      fill='#ff6a00'
      p-id='5010'
    />
    <path
      d='M1947.13924062 902.07594969c-4.86075937 0-7.29113906 0-7.29113906-2.43037969 0-2.43037969-2.43037969-4.86075937-2.43037969-7.29113906l0-97.21519032c0-14.58227813-4.86075937-26.7341775-17.01265781-34.02531656-12.15189844-7.29113906-29.16455719-12.15189844-48.60759469-12.15189844-17.01265781 0-31.59493687 4.86075937-43.74683531 12.15189844-12.15189844 7.29113906-19.44303844 21.87341813-19.44303844 43.74683531l26.7341775 0c0-9.72151875 2.43037969-14.58227813 7.29113907-19.44303843 7.29113906-7.29113906 17.01265781-12.15189844 31.59493687-12.15189844 12.15189844 0 21.87341813 2.43037969 29.16455719 7.29113906 7.29113906 4.86075937 9.72151875 12.15189844 9.72151875 21.87341813 0 4.86075937 0 7.29113906-2.43037969 9.72151875-2.43037969 4.86075937-7.29113906 7.29113906-12.15189844 7.29113906l-43.74683531 4.86075937c-14.58227813 2.43037969-29.16455719 7.29113906-38.88607594 14.58227813-9.72151875 7.29113906-14.58227813 19.44303844-14.58227812 36.45569625 0 14.58227813 4.86075937 26.7341775 14.58227812 34.02531656 9.72151875 9.72151875 21.87341813 14.58227813 38.88607594 14.58227813 12.15189844 0 24.30379781-2.43037969 36.45569625-7.29113907 9.72151875-4.86075937 19.44303844-12.15189844 24.30379781-19.44303843 0 7.29113906 2.43037969 12.15189844 4.86075938 14.58227812 4.86075937 7.29113906 12.15189844 9.72151875 21.87341812 9.72151875 4.86075937 0 7.29113906 0 9.72151875 0 2.43037969 0 4.86075937 0 9.72151875-2.43037969l0-21.87341812c-2.43037969 0-2.43037969 0-4.86075937 0C1949.56962031 902.07594969 1949.56962031 902.07594969 1947.13924062 902.07594969zM1910.68354438 858.32911438c0 17.01265781-7.29113906 29.16455719-24.30379782 36.45569624-9.72151875 4.86075937-19.44303844 7.29113906-29.16455718 7.29113907-7.29113906 0-14.58227813-2.43037969-21.87341813-7.29113907-4.86075937-4.86075937-9.72151875-12.15189844-9.72151875-19.44303843 0-9.72151875 4.86075937-19.44303844 12.15189844-24.30379781 4.86075937-2.43037969 12.15189844-4.86075937 21.87341812-7.29113907l17.01265782-2.43037969c4.86075937 0 9.72151875-2.43037969 17.01265781-2.43037968 4.86075937-2.43037969 9.72151875-2.43037969 12.15189844-4.86075938L1905.822785 858.32911438z'
      fill='#ff6a00'
      p-id='5011'
    />
    <path
      d='M1986.02531656 690.63291125l29.16455719 0 0 228.45569625-29.16455719 0 0-228.45569625Z'
      fill='#ff6a00'
      p-id='5012'
    />
    <path
      d='M2054.07594969 753.822785l29.16455719 0 0 165.2658225-29.16455719 0 0-165.2658225Z'
      fill='#ff6a00'
      p-id='5013'
    />
    <path
      d='M2054.07594969 690.63291125l29.16455719 0 0 31.59493687-29.16455719 0 0-31.59493687Z'
      fill='#ff6a00'
      p-id='5014'
    />
    <path
      d='M2185.31645562 889.92405031l-43.74683531-136.10126625-31.59493687 0 60.75949406 172.55696157c-2.43037969 2.43037969-4.86075937 9.72151875-7.29113906 17.01265781-2.43037969 7.29113906-4.86075937 12.15189844-4.86075938 12.15189844-2.43037969 2.43037969-4.86075937 4.86075937-7.29113906 7.29113906-2.43037969 2.43037969-7.29113906 2.43037969-12.15189844 2.43037969-2.43037969 0-2.43037969 0-4.86075937 0-2.43037969 0-4.86075937 0-9.72151875-2.43037969l0 26.7341775c2.43037969 0 4.86075937 2.43037969 7.29113906 2.43037969 2.43037969 0 4.86075937 0 9.72151875 0 17.01265781 0 26.7341775-4.86075937 34.02531656-14.58227813 7.29113906-9.72151875 17.01265781-34.02531656 34.02531656-77.77215187 7.29113906-17.01265781 14.58227813-41.31645563 24.30379782-70.48101282 14.58227813-38.88607594 21.87341813-63.18987375 26.7341775-72.9113925l-31.59493688 0L2185.31645562 889.92405031z'
      fill='#ff6a00'
      p-id='5015'
    />
    <path
      d='M2389.46835406 834.02531656c0 17.01265781-2.43037969 29.16455719-4.86075937 38.88607594-7.29113906 17.01265781-19.44303844 26.7341775-38.88607594 26.7341775-12.15189844 0-21.87341813-4.86075937-26.7341775-14.58227813-2.43037969-4.86075937-4.86075937-12.15189844-4.86075938-21.87341812l0-111.79746844-29.16455718 0 0 114.22784813c0 14.58227813 2.43037969 26.7341775 7.29113906 34.02531656 7.29113906 17.01265781 24.30379781 24.30379781 48.60759469 24.30379781 14.58227813 0 26.7341775-4.86075937 38.88607593-12.15189844 4.86075937-4.86075937 9.72151875-9.72151875 12.15189844-17.01265781l0 24.30379781 26.7341775 1e-8 0-167.69620219L2389.46835406 751.39240531 2389.46835406 834.02531656z'
      fill='#ff6a00'
      p-id='5016'
    />
    <path
      d='M2542.58227812 748.96202562c-9.72151875 0-19.44303844 2.43037969-29.16455718 7.29113907-9.72151875 4.86075937-17.01265781 12.15189844-24.30379782 21.87341812l0-24.30379781L2462.37974656 753.822785l0 167.69620219 29.16455719 0 0-87.49367063c0-9.72151875 0-19.44303844 2.43037969-24.30379781 2.43037969-4.86075937 4.86075937-12.15189844 9.72151875-17.01265781 4.86075937-7.29113906 12.15189844-12.15189844 19.44303844-14.58227813 4.86075937-2.43037969 9.72151875-2.43037969 17.01265781-2.43037969 12.15189844 0 21.87341813 4.86075937 26.7341775 14.58227813 2.43037969 7.29113906 4.86075937 14.58227813 4.86075937 24.30379781l0 104.50632938 29.16455719 0 0-106.93670907c0-17.01265781-2.43037969-29.16455719-7.29113906-38.88607593C2583.89873375 758.68354438 2566.88607594 748.96202562 2542.58227812 748.96202562z'
      fill='#ff6a00'
      p-id='5017'
    />
    <path
      d='M2647.0886075 885.06329094l31.59493687 0 0 34.02531656-31.59493687 0 0-34.02531656Z'
      fill='#ff6a00'
      p-id='5018'
    />
    <path
      d='M2792.9113925 773.2658225c12.15189844 0 21.87341813 2.43037969 29.16455719 9.72151875 4.86075937 7.29113906 9.72151875 14.58227813 12.15189843 26.7341775l26.7341775 0c-2.43037969-21.87341813-9.72151875-38.88607594-21.87341812-46.177215-12.15189844-9.72151875-26.7341775-14.58227813-46.177215-14.58227813-21.87341813 0-41.31645563 7.29113906-53.46835406 24.30379782-14.58227813 17.01265781-21.87341813 38.88607594-21.87341813 68.05063312 0 24.30379781 7.29113906 43.74683531 19.44303844 60.75949406 12.15189844 17.01265781 29.16455719 24.30379781 51.03797437 24.30379782 19.44303844 0 36.45569625-4.86075937 48.60759469-14.58227813 12.15189844-9.72151875 19.44303844-26.7341775 24.30379781-48.60759469l-26.7341775 0c-2.43037969 12.15189844-7.29113906 21.87341813-14.58227812 29.16455719-7.29113906 7.29113906-17.01265781 9.72151875-26.7341775 9.72151875-14.58227813 0-26.7341775-4.86075937-34.02531656-17.01265781-7.29113906-12.15189844-9.72151875-24.30379781-9.72151875-41.31645563 0-17.01265781 2.43037969-31.59493687 7.29113906-41.31645562C2761.31645562 782.98734219 2773.46835406 773.2658225 2792.9113925 773.2658225z'
      fill='#ff6a00'
      p-id='5019'
    />
    <path
      d='M2953.31645562 748.96202562c-24.30379781 0-43.74683531 7.29113906-55.89873375 24.30379782-14.58227813 17.01265781-21.87341813 38.88607594-21.87341812 68.05063312 0 26.7341775 7.29113906 46.177215 19.44303844 63.18987375 14.58227813 14.58227813 31.59493687 24.30379781 53.46835406 24.30379781 26.7341775 0 48.60759469-9.72151875 60.75949406-26.7341775 12.15189844-17.01265781 19.44303844-38.88607594 19.44303844-65.62025343 0-26.7341775-7.29113906-48.60759469-21.87341813-63.18987375C2994.63291125 756.25316469 2975.18987375 748.96202562 2953.31645562 748.96202562zM2989.77215188 880.20253156c-7.29113906 14.58227813-19.44303844 21.87341813-38.88607594 21.87341813-17.01265781 0-29.16455719-4.86075937-36.45569625-17.01265782-7.29113906-12.15189844-12.15189844-26.7341775-12.15189844-43.74683531 0-19.44303844 4.86075937-34.02531656 12.15189844-46.177215 7.29113906-12.15189844 19.44303844-19.44303844 36.45569625-19.44303844 19.44303844 0 31.59493687 7.29113906 41.31645562 21.87341813 4.86075937 9.72151875 7.29113906 21.87341813 7.29113907 38.88607594C3001.92405031 851.03797438 2997.06329094 865.62025344 2989.77215188 880.20253156z'
      fill='#ff6a00'
      p-id='5020'
    />
    <path
      d='M3281.41772188 773.2658225c-7.29113906-17.01265781-24.30379781-24.30379781-46.177215-24.30379781-9.72151875 0-19.44303844 2.43037969-29.16455719 7.29113906-7.29113906 4.86075937-14.58227813 12.15189844-21.87341813 19.44303844-4.86075937-7.29113906-7.29113906-12.15189844-12.15189843-17.01265781-7.29113906-7.29113906-19.44303844-9.72151875-31.59493688-9.72151875-12.15189844 0-21.87341813 2.43037969-31.59493687 9.72151875-4.86075937 4.86075937-12.15189844 9.72151875-17.01265782 17.01265781l0-24.30379781-26.7341775 0 0 167.69620218 29.16455719 0 0-87.49367062c0-21.87341813 4.86075937-36.45569625 12.15189844-43.74683532 9.72151875-7.29113906 19.44303844-12.15189844 29.16455719-12.15189843 12.15189844 0 19.44303844 4.86075937 24.30379781 12.15189843 2.43037969 4.86075937 4.86075937 14.58227813 4.86075937 24.30379782l0 109.36708875 29.16455719 0 0-97.21519032c0-17.01265781 4.86075937-29.16455719 12.15189844-36.45569625 7.29113906-7.29113906 17.01265781-12.15189844 29.16455719-12.15189843 7.29113906 0 14.58227813 2.43037969 19.44303843 7.29113906 4.86075937 4.86075937 7.29113906 12.15189844 7.29113907 21.87341812l0 116.65822782 29.16455718 0L3291.13924063 809.72151875C3288.70886094 795.13924063 3286.27848125 782.98734219 3281.41772188 773.2658225z'
      fill='#ff6a00'
      p-id='5021'
    />
    <path
      d='M309.06329094 765.97468344c-31.59493687-7.29113906-55.89873375-34.02531656-55.89873375-68.05063313 0 0 0-371.84810156 0-374.27848125 2.43037969-34.02531656 24.30379781-60.75949406 55.89873375-68.05063312l347.54430375-75.34177219L693.06329094 32 289.62025344 32C146.22784812 32 32 146.22784812 32 287.18987375l0 442.32911438c0 140.96202563 116.65822781 257.62025344 257.62025344 257.62025343l403.44303844 0-36.45569625-148.25316468L309.06329094 765.97468344z'
      fill='#ff6a00'
      p-id='5022'
    />
    <path
      d='M1320.10126625 32L914.22784813 32l36.45569625 148.25316469 347.54430375 75.34177218c31.59493687 7.29113906 55.89873375 34.02531656 55.89873375 68.05063313 0 0 0 371.84810156 0 374.27848125-2.43037969 34.02531656-24.30379781 60.75949406-55.89873375 68.05063313l-347.54430375 75.34177218-36.45569625 148.25316469L1320.10126625 989.56962031c140.96202563 0 257.62025344-114.22784813 257.62025344-257.62025343L1577.72151875 287.18987375C1575.29113906 146.22784812 1461.06329094 32 1320.10126625 32z'
      fill='#ff6a00'
      p-id='5023'
    />
    <path
      d='M656.60759469 491.34177219l296.50632937 0 0 36.45569625-296.50632937 0 0-36.45569625Z'
      fill='#ff6a00'
      p-id='5024'
    />
  </svg>
)
const amzonIcon = (
  <svg
    t='1586159729047'
    viewBox='0 0 2548 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    p-id='3719'
    width='100'
    height='100'
  >
    <path
      d='M65.991111 154.168889c38.115556-31.857778 88.746667-41.528889 136.533333-40.391111 40.96 2.275556 84.764444 13.084444 114.915556 44.373333 21.617778 22.755556 29.582222 55.751111 30.151111 86.471111 1.137778 50.062222 0 99.555556 0.568889 149.617778 0.568889 21.048889-2.275556 43.235556 5.688889 63.146667 5.688889 15.36 15.928889 27.306667 24.462222 41.528889 3.982222 5.688889 5.12 15.36-1.137778 19.911111-19.342222 17.635556-39.253333 35.271111-58.595555 52.337777-5.12 5.12-13.653333 7.964444-19.911111 3.982223-19.342222-13.653333-32.995556-34.133333-45.511111-54.613334-23.324444 25.6-51.2 48.355556-84.764445 55.182223-35.271111 6.826667-73.955556 6.826667-106.382222-11.377778-26.737778-14.791111-44.942222-42.666667-51.2-72.248889-7.395556-34.133333-5.688889-70.542222 7.964444-102.4 14.791111-35.271111 45.511111-62.008889 80.213334-74.524445 44.373333-17.066667 92.728889-19.342222 139.377777-24.462222-0.568889-25.031111 3.413333-54.044444-13.653333-74.524444-29.582222-30.151111-89.884444-16.497778-101.262222 26.737778-2.275556 8.533333-4.551111 21.048889-15.36 21.048888-21.048889-1.706667-42.097778-4.551111-63.146667-6.826666-7.395556-1.137778-15.36-0.568889-21.617778-5.12-4.551111-3.982222-4.551111-10.24-3.413333-15.36 5.688889-31.857778 21.617778-62.008889 46.08-82.488889m89.884445 219.022222c-17.635556 9.671111-30.72 27.306667-34.133334 48.355556-3.413333 21.048889-1.706667 44.942222 12.515556 62.008889 13.653333 16.497778 38.115556 18.204444 56.32 9.102222 17.635556-8.533333 30.151111-26.168889 37.546666-44.373334 11.377778-28.444444 8.533333-60.302222 8.533334-91.022222-27.875556 0.568889-56.32 2.844444-80.782222 15.928889zM1114.453333 140.515556c40.96-23.893333 89.884444-29.582222 136.533334-25.031112 38.684444 4.551111 79.644444 19.342222 103.537777 52.906667 20.48 28.444444 22.755556 66.56 22.186667 100.693333v152.462223c0 18.204444 3.982222 35.84 13.084445 50.631111 5.688889 10.808889 14.222222 19.342222 19.342222 30.72 2.844444 6.257778 1.137778 13.653333-4.551111 17.635555-19.342222 17.066667-38.684444 34.133333-57.457778 51.2-5.688889 5.688889-14.791111 8.533333-21.617778 3.413334-18.204444-14.222222-31.857778-33.564444-44.373333-53.475556-23.324444 25.031111-50.631111 47.786667-84.195556 54.613333-36.408889 6.826667-77.368889 7.395556-110.364444-12.515555-26.737778-15.928889-43.804444-44.942222-49.493334-75.662222-5.688889-32.995556-3.982222-68.266667 10.24-98.986667 15.36-35.271111 47.217778-60.871111 81.92-73.955556 43.804444-15.928889 90.453333-18.204444 136.533334-23.324444-0.568889-21.617778 2.844444-44.942222-6.826667-65.991111-9.671111-18.773333-31.288889-26.737778-50.062222-25.031111-24.462222 0.568889-50.062222 15.928889-56.888889 42.097778-2.275556 8.533333-4.551111 20.48-14.791111 21.617777-25.031111-2.275556-50.062222-5.12-75.093333-7.964444-7.395556-0.568889-14.791111-5.688889-14.222223-14.222222 5.12-42.666667 30.72-81.351111 66.56-101.831111M1182.151111 375.466667c-18.204444 10.808889-30.151111 31.288889-31.857778 52.337777-1.706667 19.342222 0 41.528889 13.653334 56.32 13.653333 16.497778 38.115556 18.204444 56.32 9.102223 18.204444-8.533333 30.151111-26.737778 37.546666-44.942223 10.808889-28.444444 8.533333-60.302222 7.964445-90.453333-29.013333 0-58.595556 2.275556-83.626667 17.635556zM583.68 135.964444c28.444444-19.911111 65.991111-22.755556 97.848889-12.515555 31.857778 10.808889 52.906667 40.96 65.422222 71.68 8.533333-23.324444 23.324444-44.373333 44.373333-58.595556 46.08-31.288889 114.915556-23.893333 150.755556 21.048889 21.617778 26.737778 25.031111 63.146667 24.462222 96.711111-1.137778 101.831111-0.568889 203.662222-0.568889 305.493334 1.137778 9.102222-7.395556 16.497778-15.36 15.36-26.168889 0-51.768889 0.568889-77.937777 0-9.102222 0-15.36-9.102222-14.222223-18.204445 0-87.04-0.568889-174.08 0.568889-261.12-0.568889-21.048889 0.568889-46.08-15.36-62.008889-19.911111-17.066667-52.337778-13.084444-69.404444 6.826667-15.928889 18.204444-15.928889 43.804444-17.066667 67.128889v248.604444c0.568889 7.964444-4.551111 17.635556-12.515555 17.635556-23.893333 1.137778-48.355556 0-72.248889 0.568889-6.257778-0.568889-14.222222 1.137778-18.773334-3.982222-4.551111-3.982222-4.551111-11.377778-4.551111-17.066667V340.764444c0-27.306667 2.275556-55.751111-3.982222-82.488888-3.413333-13.084444-10.808889-26.737778-23.324444-32.426667-14.791111-6.257778-31.857778-5.688889-46.08 2.275555s-21.048889 24.462222-24.462223 40.391112c-5.12 26.168889-3.982222 52.337778-4.551111 78.506666v212.764445c0.568889 8.533333-7.395556 15.928889-15.36 15.36-25.031111 0.568889-50.062222 0-75.093333 0-6.826667 0.568889-14.791111-2.844444-17.066667-10.24-1.137778-6.826667-0.568889-13.653333-0.568889-20.48V143.36c-1.137778-9.102222 6.257778-17.066667 14.791111-16.497778 23.893333-0.568889 48.355556-0.568889 72.248889 0 7.964444-0.568889 15.928889 5.688889 15.928889 14.222222 0.568889 18.773333 0 36.977778 0.568889 55.751112 7.964444-23.324444 21.048889-46.648889 41.528889-60.871112zM1943.893333 121.742222c42.097778-9.102222 87.608889-3.413333 124.586667 19.342222 34.702222 21.617778 59.733333 57.457778 73.955556 96.711112 17.635556 48.924444 22.186667 101.831111 17.066666 153.031111-6.257778 56.888889-28.444444 114.346667-71.111111 152.462222-59.164444 54.044444-157.013333 54.044444-215.04-1.706667-40.96-38.684444-60.302222-96.142222-66.56-151.893333-6.257778-63.146667 0.568889-129.137778 30.72-184.888889 22.186667-41.528889 60.871111-73.955556 106.382222-83.057778m25.6 83.057778c-16.497778 3.982222-29.013333 18.204444-35.271111 34.133333-12.515556 31.288889-12.515556 65.422222-13.653333 98.417778 0.568889 34.702222 0.568889 69.404444 9.102222 102.968889 3.982222 16.497778 10.808889 33.564444 23.324445 44.373333 18.204444 16.497778 48.355556 13.653333 64.853333-3.982222 11.377778-12.515556 17.635556-29.582222 21.048889-46.08 5.688889-26.168889 6.257778-52.906667 6.257778-80.213333 0.568889-33.564444-1.137778-67.128889-8.533334-99.555556-3.413333-14.791111-8.533333-30.151111-19.911111-40.391111-12.515556-10.24-31.288889-12.515556-47.217778-9.671111zM2367.146667 136.533333c26.737778-19.911111 62.577778-22.186667 93.866666-14.791111 34.702222 7.964444 62.577778 37.546667 72.248889 73.386667 8.533333 31.857778 9.102222 65.422222 9.102222 97.848889v266.808889c0.568889 9.102222-7.964444 16.497778-16.497777 15.36h-77.937778c-9.102222 0.568889-14.791111-9.671111-13.653333-18.204445 0.568889-82.488889-0.568889-166.115556 0.568888-248.604444-1.137778-23.893333-0.568889-50.062222-14.222222-69.973334-15.36-21.617778-50.062222-21.048889-67.128889-2.275555-19.342222 20.48-23.324444 50.631111-24.462222 77.937778-0.568889 80.782222 0 161.564444-0.568889 242.346666 1.137778 10.24-7.964444 19.342222-17.635555 18.773334H2235.733333c-8.533333 0.568889-16.497778-6.826667-15.928889-15.36V143.36c-1.137778-9.671111 7.395556-17.066667 15.928889-16.497778 22.755556-0.568889 46.08 0 68.835556 0 7.964444-0.568889 17.635556 3.982222 17.066667 13.653334 0.568889 21.048889 0 43.235556 0.568888 64.284444 10.808889-25.6 22.755556-51.768889 44.942223-68.266667zM1471.715556 140.515556c0-9.102222 7.964444-15.36 15.928888-14.222223h256c7.964444-0.568889 15.36 6.257778 14.791112 14.222223 0.568889 15.928889 0 32.426667 0 48.355555 0.568889 13.084444-7.964444 23.893333-14.222223 34.702222-46.08 68.266667-92.16 137.102222-138.24 205.368889 50.062222-1.706667 101.831111 6.257778 146.204445 32.426667 9.671111 4.551111 15.36 15.928889 14.791111 27.306667v60.302222c0.568889 8.533333-6.257778 17.066667-14.791111 16.497778-7.964444-2.844444-15.36-7.395556-23.324445-10.808889-74.524444-33.564444-163.271111-33.564444-237.226666 1.706666-7.395556 3.413333-13.653333 7.964444-21.617778 9.671111-7.964444-0.568889-14.222222-9.102222-13.653333-17.066666V485.831111c0-14.222222 3.413333-29.013333 11.946666-41.528889 50.631111-75.662222 101.262222-151.893333 152.462222-226.986666h-133.12c-8.533333 1.137778-17.066667-6.257778-15.928888-15.928889-0.568889-21.048889-0.568889-40.96 0-60.871111z'
      p-id='3720'
      fill='#1296db'
    />
    <path
      d='M1561.6 597.333333c37.546667-5.688889 76.231111-6.257778 113.208889 2.275556 10.24 2.844444 21.617778 5.12 29.013333 13.084444 6.257778 11.946667 4.551111 26.737778 4.551111 39.822223-3.413333 44.373333-17.066667 88.177778-37.546666 128-13.084444 25.031111-29.582222 48.355556-50.631111 66.56-5.12 3.982222-12.515556 7.964444-18.204445 3.982222-2.275556-3.982222-2.844444-7.964444-1.137778-11.946667 15.36-41.528889 31.857778-82.488889 40.391111-126.862222 2.275556-15.928889 6.826667-33.564444-1.137777-48.355556-9.102222-11.377778-24.462222-11.946667-37.546667-14.222222-45.511111-3.982222-90.453333 2.844444-135.395556 7.395556-5.12 1.137778-11.946667-1.706667-12.515555-7.964445 1.137778-7.964444 7.964444-12.515556 13.653333-17.066666 28.444444-18.204444 60.871111-29.013333 93.297778-34.702223z'
      fill='#1296db'
      p-id='3721'
    />
    <path
      d='M367.502222 622.933333c9.671111-4.551111 19.342222 3.982222 27.875556 8.533334 164.977778 97.28 349.866667 154.168889 538.168889 171.804444 206.506667 19.342222 416.995556-15.36 609.28-96.711111 11.946667-5.12 26.737778-13.653333 39.253333-4.551111 12.515556 7.964444 9.671111 27.306667-1.706667 34.702222-84.764444 64.853333-183.182222 108.088889-284.444444 137.102222-142.791111 40.391111-294.684444 48.355556-440.32 20.48-180.906667-32.995556-351.573333-120.035556-487.537778-248.035555-6.826667-6.826667-9.102222-18.773333-0.568889-23.324445z'
      fill='#1296db'
      p-id='3722'
    />
  </svg>
)
const huaweiIcon = (
  <svg
    t='1586163751977'
    viewBox='0 0 3328 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    p-id='6167'
    width='100'
    height='100'
  >
    <path
      d='M1497.6 704h236.8v-57.6h57.6v57.6h243.2v64H1792v160h-57.6V768h-236.8v-64z m339.2-57.6c-38.4 0-64-19.2-64-64v-38.4c-25.6 12.8-51.2 19.2-76.8 32l-32-51.2c44.8-19.2 76.8-32 108.8-44.8V332.8h57.6v121.6c57.6-32 108.8-64 140.8-102.4l38.4 44.8c-51.2 44.8-115.2 89.6-185.6 121.6v51.2c0 12.8 6.4 19.2 19.2 19.2h83.2c12.8 0 25.6-6.4 32-12.8 6.4-6.4 12.8-32 19.2-70.4l57.6 19.2c-6.4 57.6-19.2 89.6-32 102.4-12.8 12.8-32 19.2-64 19.2h-102.4z m-262.4-140.8c-25.6 19.2-44.8 38.4-70.4 51.2l-19.2-64c76.8-44.8 134.4-102.4 166.4-172.8l51.2 25.6c-19.2 38.4-38.4 70.4-70.4 102.4v217.6h-57.6V505.6z m620.8-166.4c32 38.4 64 70.4 83.2 102.4l-44.8 32c-19.2-32-51.2-64-83.2-102.4l44.8-32z m217.6 275.2c38.4 51.2 76.8 89.6 96 128l-51.2 38.4c-25.6-44.8-57.6-89.6-96-134.4l51.2-32z m-89.6-288h57.6v153.6h249.6c0 192-6.4 313.6-25.6 364.8-19.2 51.2-44.8 76.8-89.6 76.8-32 0-57.6 0-83.2-6.4l-12.8-57.6c38.4 6.4 64 6.4 89.6 6.4s44.8-38.4 51.2-102.4c6.4-76.8 6.4-147.2 6.4-217.6H2368c-12.8 83.2-25.6 147.2-51.2 204.8-38.4 76.8-96 134.4-179.2 179.2l-32-57.6c83.2-44.8 140.8-102.4 166.4-166.4 19.2-44.8 32-96 38.4-160h-185.6v-64h192V326.4h6.4z m460.8 32h441.6v57.6h-441.6v-57.6z m-57.6 179.2h556.8v64h-294.4c-51.2 115.2-102.4 192-140.8 243.2 102.4-6.4 198.4-19.2 300.8-32-19.2-38.4-44.8-76.8-64-115.2l44.8-32c57.6 83.2 96 160 128 230.4l-51.2 38.4c-12.8-32-25.6-51.2-32-64-121.6 19.2-256 32-403.2 44.8l-12.8-64c6.4 0 12.8-6.4 12.8-6.4 38.4-32 89.6-108.8 147.2-236.8h-198.4l6.4-70.4z'
      fill='#56606F'
      p-id='6168'
    />
    <path
      d='M601.6 6.4C531.2 6.4 467.2 38.4 422.4 89.6c-70.4 96-19.2 230.4 19.2 307.2s211.2 352 217.6 358.4c6.4 6.4 12.8 6.4 12.8 0s19.2-409.6 6.4-505.6c-19.2-89.6-44.8-166.4-76.8-243.2zM224 192c-12.8 0-102.4 96-115.2 179.2s32 147.2 134.4 217.6c108.8 76.8 358.4 211.2 364.8 204.8 6.4-12.8-96-192-185.6-326.4S236.8 192 224 192zM256 1011.2c76.8 32 198.4-44.8 230.4-64l89.6-64-435.2 12.8c25.6 44.8 64 83.2 115.2 115.2z m12.8-352C192 620.8 32 531.2 25.6 531.2c-6.4 0-32 115.2 19.2 198.4s147.2 108.8 192 115.2c51.2 6.4 345.6 6.4 345.6 0-6.4-6.4-236.8-147.2-313.6-185.6z m716.8-569.6C940.8 38.4 876.8 6.4 806.4 6.4c-32 76.8-57.6 153.6-70.4 236.8-12.8 96 6.4 505.6 6.4 505.6 0 6.4 6.4 6.4 12.8 0s185.6-288 217.6-358.4 83.2-204.8 12.8-300.8z m403.2 441.6c-6.4 0-166.4 89.6-243.2 128-76.8 38.4-307.2 179.2-313.6 185.6 0 6.4 294.4 6.4 345.6 0 44.8-6.4 140.8-32 192-115.2 44.8-83.2 19.2-198.4 19.2-198.4z m-467.2 416c32 19.2 153.6 96 230.4 64 51.2-25.6 89.6-70.4 115.2-121.6l-435.2-12.8 89.6 70.4z m377.6-576C1292.8 288 1196.8 192 1184 192s-121.6 140.8-204.8 275.2-185.6 313.6-179.2 326.4c6.4 12.8 256-128 364.8-204.8 102.4-70.4 140.8-128 134.4-217.6z'
      fill='#EA020A'
      p-id='6169'
    />
  </svg>
)
const providers = [
  {
    id: 'ack',
    name: '阿里云 ACK',
    icon: aliyunIcon,
    describe:
      '支持阿里云托管类型集群对接，集群可用性由阿里云负责，Rainbond Cloud负责辅助集群创建、Rainbond集群初始化以及后续的资源调度管理',
    disable: false
  },
  {
    id: 'eks',
    name: 'Amazon EKS',
    icon: amzonIcon,
    describe: 'Amazon EKS 即将支持',
    disable: true
  },
  {
    id: 'cce',
    name: '华为云 CCE',
    icon: huaweiIcon,
    describe: '华为云 CCE 即将支持',
    disable: true
  }
]

const cloud = {
  getAliyunRegionName (id) {
    let regionName = id
    aliyunRegionNames.map(item => {
      if (item.RegionId == id) {
        regionName = item.LocalName
      }
    })
    return regionName
  },

  getAllAliyunRegions () {
    return aliyunRegionNames
  },

  getAliyunClusterName (n) {
    switch (n) {
      case 'ManagedKubernetes':
        return '托管集群'
      case 'ServerlessKubernetes':
        return 'Serverless集群'
      default:
        return n
    }
  },
  handleCloudAPIError (code) {
    switch (code) {
      case 3000:
        notification.warning({ message: '用户已存在' })
        break
      case 3003:
        notification.warning({ message: '邮箱已存在' })
        break
      case 3004:
        notification.warning({ message: '电话已存在' })
        break
      case 7002:
        notification.warning({
          message: 'AccessKey不存在，请确认是否输入正确'
        })
        break
      case 7004:
        notification.warning({
          message: 'AccessKey与Secret不匹配，请确认是否输入正确'
        })
        break
      case 7005:
        notification.warning({ message: '已存在同类型任务' })
        break
      case 7006:
        notification.warning({ message: 'KubernetesAPI无法请求' })
        break
      case 400:
        notification.warning({ message: '请求参数错误' })
        break
      default:
        notification.warning({ message: `未知的Cloud错误，错误码为${code}` })
        break
    }
  },
  showCreateKubernetesSteps (events) {
    var colorMap = {
      start: '',
      '': 'gray',
      failure: 'red',
      success: 'green'
    }
    let complete = false
    let steps = []
    events.map(item => {
      let step = createKubernetesSteps[item.type]
      if (step == undefined) {
        step = {
          Title: item.type,
          Description: item.type,
          Status: ''
        }
      }
      step.Status = item.status
      step.Message = item.message
      step.Color = colorMap[item.status]
      steps.push(step)
      if (
        item.status == 'failure' ||
        (item.type == 'CreateCluster' && item.status == 'success')
      ) {
        complete = true
      }
    })
    return { complete, steps }
  },
  showInitRainbondSteps (events) {
    var colorMap = {
      start: '',
      '': 'gray',
      failure: 'red',
      success: 'green'
    }
    let complete = false
    let steps = []
    events.map(item => {
      let step = initRainbondSteps[item.type]
      if (step == undefined) {
        step = {
          Title: item.type,
          Description: item.type,
          Status: ''
        }
      }
      step.Status = item.status
      step.Message = item.message
      step.Color = colorMap[item.status]
      steps.push(step)
      if (
        item.status == 'failure' ||
        (item.type == 'InitRainbondRegion' && item.status == 'success')
      ) {
        complete = true
      }
    })
    return { complete, steps }
  },
  getAliyunClusterStatus (status, cluster) {
    const logURL = `https://cs.console.aliyun.com/#/k8s/cluster/${cluster.cluster_id}/log`
    switch (status) {
      case 'running':
        if (cluster.rainbond_init) {
          return <span style={{ color: 'green' }}>运行中(已对接)</span>
        }
        return <span style={{ color: 'green' }}>运行中</span>
      case 'initial':
        return (
          <span style={{ color: '#1890ff' }}>
            初始化中{' '}
            <a target='_blank' href={logURL}>
              查看日志
            </a>
          </span>
        )
      case 'deleting':
        return <span style={{ color: 'red' }}>删除中</span>
      case 'failed':
        return (
          <span style={{ color: 'red' }}>
            创建失败{' '}
            <a target='_blank' href={logURL}>
              查看日志
            </a>
          </span>
        )
      default:
        return status
    }
  },
  getProviders () {
    return providers
  },
  getProviderShowName (id) {
    let name = id
    providers.map(item => {
      if (item.id == id) {
        name = item.name
      }
    })
    return name
  },
  getTaskStatus (status) {
    switch (status) {
      case 'start':
        return '进行中'
      case 'complete':
        return '已完成'
      case 'inited':
        return '初始化完成'
      default:
        return '未开始'
    }
  }
}
export default cloud
