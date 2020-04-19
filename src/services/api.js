import { stringify } from 'qs';
import request from '../utils/request';
import apiconfig from '../../config/api.config';
import cookie from '../utils/cookie';

/*
  获取企业所有集群的每小时按需消费明细
 */
export async function getAllRegionFee(body = { team_name, date }) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/team/${body.team_name}/all-region-fee`,
    {
      method: 'get',
      params: {
        date: body.date,
      },
    }
  );
}

/*
  获取企业下应用列表
 */
export async function fetchEnterpriseApps(body = { enterprise_id }) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${body.enterprise_id}/apps`,
    {
      method: 'get',
      params: {
        page: body.page,
        page_size: body.page_size,
        name: body.name,
      },
    }
  );
}

/*
  获取应用列表下组件
 */


export async function fetchAppComponents(body = {}) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${body.enterprise_id}/apps/${body.app_id}/components`,
    {
      method: 'get',
      params: {
        page: body.page,
        page_size: body.page_size,
        name: body.name,
      },
    }
  );
}



/*
  获取用户可加入团队列表
 */
export async function getUserCanJoinTeams(body = { enterpriseID }) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${body.enterpriseID}/jointeams`,
    {
      method: 'get',
    }
  );
}

/*
  用户加入团队
 */
export async function joinTeam(body = { team_name }) {
  return request(`${apiconfig.baseUrl}/console/user/applicants/join`, {
    method: 'post',
    data: {
      team_name: body.team_name,
    },
  });
}

/*
  用户查询加入状态
 */
export async function getJoinTeam(body = { user_id }) {
  return request(`${apiconfig.baseUrl}/console/user/applicants/join`, {
    method: 'get',
    params: {
      user_id: body.user_id,
    },
  });
}

/*
  用户删除团队状态
 */
export async function deleteJoinTeam(body = { user_id, is_pass, team_name }) {
  return request(`${apiconfig.baseUrl}/console/user/applicants/join`, {
    method: 'delete',
    data: {
      user_id: body.user_id,
      is_pass: body.is_pass,
      team_name: body.team_name,
    },
  });
}

/* 内部市场删除插件 */
export async function deleteMarketPlugin(body = { plugin_id }) {
  return request(
    `${apiconfig.baseUrl}/console/market/plugins/uninstall-template`,
    {
      method: 'post',
      data: {
        plugin_id: body.plugin_id,
      },
    }
  );
}

/* 云端同步插件 */
export async function syncCloudPlugin() {
  return request(`${apiconfig.baseUrl}/console/market/plugins/sync`, {
    method: 'post',
  });
}

/* 获取云端插件 */
export async function getCloudPlugin(body = { plugin_name, page }) {
  return request(`${apiconfig.baseUrl}/console/market/plugins`, {
    method: 'get',
    params: {
      plugin_name: body.plugin_name,
      page: body.page,
      limit: body.limit,
    },
  });
}

/*
  获取企业充值记录
 */
export async function getPayHistory(
  body = {
    team_name,
    start,
    end,
    page,
    page_size,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/team/${body.team_name}/recharge-records`,
    {
      method: 'get',
      params: {
        start: body.start,
        end: body.end,
        page: body.page,
        page_size: body.page_size,
      },
    }
  );
}

/* 完成分享 */
export async function complatePluginShare(body = { team_name, share_id }) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/plugin-share/${body.share_id}/complete`,
    {
      method: 'post',
      data: {
        plugin_key: body.plugin_key,
        version: body.version,
      },
    }
  );
}

/* 同步插件模版 */
export async function syncMarketPluginTmp(body = { plugin_key, version }) {
  return request(`${apiconfig.baseUrl}/console/market/plugins/sync-template`, {
    method: 'post',
    data: {
      plugin_key: body.plugin_key,
      version: body.version,
    },
  });
}

/* 同步云市插件 */
export async function syncMarketPlugins() {
  return request(`${apiconfig.baseUrl}/console/market/plugins/sync`, {
    method: 'post',
  });
}

/* 获取内部市场插件 */
export async function getMarketPlugins(body = { plugin_name, page }) {
  return request(`${apiconfig.baseUrl}/console/plugins`, {
    method: 'get',
    params: {
      plugin_name: body.plugin_name,
      page: body.page,
      limit: body.limit,
    },
  });
}

/*
  初始化一个团队
*/
export async function InitTeam(body = { team_alias, region_name }) {
  return request(`${apiconfig.baseUrl}/console/teams/init`, {
    method: 'post',
    data: body,
  });
}

/* 获取某个集群的资源详情 */
export async function getRegionSource(body = { team_name, region }) {
  return request(`${apiconfig.baseUrl}/console/enterprise/region/resource`, {
    method: 'get',
    params: {
      team_name: body.team_name,
      region: body.region,
    },
  });
}
/* 获取团队应用模块 */
export async function getTeamAppList(
  body = {
    team_name,
    region,
    page,
    page_size,
    query,
  }
) {
  return request(`${apiconfig.baseUrl}/console/teams/${body.team_name}/apps`, {
    method: 'get',
    params: {
      page: body.page,
      page_size: body.page_size,
      query: body.query,
    },
  });
}

/* 获取团队应用模块 */
export async function getGuideState(
  body = {
    team_name,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${body.enterprise_id}/base-guidance`,
    {
      method: 'get',
    }
  );
}

/* 获取热门域名访问模块 */
export async function getDomainName(
  body = { team_name, region_name, page, page_size, id, start, step, end }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/regions/${body.region_name}/sort_domain/query?repo=${body.id}`,
    {
      method: 'get',
      params: {
        // query:`sort_desc(sum( ceil(increase(gateway_requests[1h]))) by (host))`,
        // query:`sort_desc(sum( ceil(increase(gateway_requests{namespace=”765738e17a294a74a704e381e018de80”}[1h]))) by (service))`,
        // query:`sort_desc(sum(ceil(increase(app_request{tenant_id=”765738e17a294a74a704e381e018de80”,method=”total”}[1h])))by (service_id))`,
        end: body.end || new Date().getTime() / 1000,
        start: body.start,
        step: body.step,
        page: body.page,
        page_size: body.page_size,
      },
    }
  );
}

/* 获取热门服务访问模块 */
export async function getService(
  body = { team_name, region_name, page, page_size }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/regions/${body.region_name}/sort_service/query`,
    {
      method: 'get',
      params: {
        // query:`sort_desc(sum(ceil(increase(app_request{method="total"}[1h])))by (service_id))`,
        // query: `sort_desc(sum( ceil(increase(gateway_requests[1h]))) by (service))`,
        page: body.page,
        page_size: body.page_size,
      },
    }
  );
}
// https://console.goodrain.com/console/teams/23ehgni5/apps/gr3698ab/monitor/query_range?query=sum(ceil(increase(app_request%7Bservice_id%3D%22dde947ccc8cc6fe46c734dddd13698ab%22,method%3D%22total%22%7D[1m])%2F12))
/*
	 获取应用吞吐率监控数据(一段时间内数据)
*/
export async function getDomainTime(
  body = {
    team_name,
    app_alias,
    tenant_id,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/regions/${body.region_name}/query_range/query`,
    {
      method: 'get',
      showMessage: false,
      params: {
        query: `ceil(sum(increase(gateway_requests{namespace=”${body.tenant_id}”}[1h])))`,
      },
    }
  );
}

/* 查询当前组下的云市应用 */
export async function getApplication(body = { team_name, group_id }) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/groups/${body.group_id}/apps`,
    {
      method: 'get',
    }
  );
}

/* 获取企业详情 */
export async function getCompanyInfo(body = { team_name }) {
  return request(`${apiconfig.baseUrl}/console/enterprise/account`, {
    method: 'get',
    params: {
      team_name: body.team_name,
    },
  });
}

/* 获取某集群下某一天的资源费用数据 */
export async function getRegionOneDayMoney(body = { team_name, date, region }) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/team/${body.team_name}/fee`,
    {
      method: 'get',
      params: {
        date: body.date,
        region: body.region,
      },
    }
  );
}

/* 认证企业 */
export async function authEnterprise(
  body = {
    enterprise_id,
    market_info,
  },
  handleError
) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${body.enterprise_id}/active/optimiz`,
    {
      method: 'post',
      handleError,
      data: {
        market_info: body.market_info.replace(/\s+/g, ''),
      },
    }
  );
}

/* 获取当前团队的企业ID */
export async function getTeamOverview(
  body = {
    team_name,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/overview`,
    {
      method: 'get',
    }
  );
}

/* 生成升级订单 */

export async function postUpdateOrder(
  body = {
    team_name,
    group_id,
    group_key,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/groups/${body.group_id}/upgrade-records`,
    {
      method: 'post',
      data: {
        group_key: body.group_key,
      },
    }
  );
}

/* 创建升级任务 */

export async function postUpdatedTasks(
  body = {
    team_name,
    group_id,
    group_key,
    services,
    version,
    upgrade_record_id,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/groups/${body.group_id}/upgrade-tasks`,
    {
      method: 'post',
      data: {
        upgrade_record_id: body.upgrade_record_id,
        group_key: body.group_key,
        version: body.version,
        services: body.services,
      },
    }
  );
}

/* 查询某云市应用的更新版本 */

export async function getUpdatedVersion(
  body = {
    group_key,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/groups/${body.group_id}/upgrade-versions`,
    {
      method: 'get',
      params: {
        group_key: body.group_key,
      },
    }
  );
}

/* 查询某云市应用下服务的更新信息 */

export async function getUpdatedInfo(
  body = {
    team_name,
    group_id,
    group_key,
    version,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/groups/${body.group_id}/upgrade-info`,
    {
      method: 'get',
      params: {
        group_key: body.group_key,
        version: body.version,
      },
    }
  );
}

/* 查询某应用的更新记录列表 */

export async function getUpdateRecordsList(
  body = {
    team_name,
    group_id,
    group_key,
    version,
    page,
    pageSize,
    status__gt,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/groups/${body.group_id}/upgrade-records`,
    {
      method: 'get',
      params: {
        group_key: body.group_key ? body.group_key : null,
        version: body.version ? body.version : null,
        page: body.page ? body.page : '',
        page_size: body.pageSize ? body.pageSize : '',
        status__gt: body.status__gt ? body.status__gt : 1,
      },
    }
  );
}

/* 查询某应用的更新记录列表 */

export async function getUpdateRecordsInfo(
  body = {
    team_name,
    group_id,
    record_id,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/groups/${body.group_id}/upgrade-records/${body.record_id}`,
    {
      method: 'get',
      params: {},
    }
  );
}

/* 查询某应用的更新记录列表 */
export async function getUpdateRollback(
  body = {
    team_name,
    group_id,
    record_id,
    service_ids,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/groups/${body.group_id}/upgrade-records/${body.record_id}/rollback`,
    {
      method: 'post',
      data: {
        service_ids: body.service_ids,
      },
    }
  );
}

/* 从云市同步应用的详细模板 */
export async function getVersion(
  body = {
    app_name,
    version,
    group_key,
  }
) {
  return request(`${apiconfig.baseUrl}/console/app_market/version`, {
    method: 'get',
    params: {
      app_name: body.app_name,
      version: body.version,
      group_key: body.group_key,
    },
  });
}

/* 卸载云市已下载的应用 */
export async function deleteAppModel(body = { app_id, enterprise_id }) {
  return request(
    // `http://doc.goodrain.org/mock/18/console/enterprise/{enterprise_id}/app-model/{app_id}`,
    `${apiconfig.baseUrl}/console/enterprise/${body.enterprise_id}/app-model/${body.app_id}`,
    {
      method: 'DELETE',
    }
  );
}

/* 从云市同步应用的详细模板 */
export async function syncMarketAppDetail(
  body = {
    enterprise_id,
    body,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${body.enterprise_id}/cloud/app-models/download`,
    {
      method: 'post',
      data: body.body,
    }
  );
}

/* 查询所有同步的应用 */
export async function getMarketApp(
  body = {
    app_name,
    page,
    pageSize,
    is_complete,
  }
) {
  return request(`${apiconfig.baseUrl}/console/app_market/all`, {
    method: 'get',
    params: {
      app_name: body.app_name,
      page: body.page,
      page_size: body.pageSize,
      is_complete: body.is_complete,
    },
  });
}

/*
  从好雨云市同步应用
*/
export async function syncMarketApp(
  body = {
    team_name,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/apps/all_apps`,
    {
      method: 'get',
    }
  );
}

/*
   获取云帮的公共信息、配置信息
*/
export function getRainbondInfo() {
  //
  return request(`${apiconfig.baseUrl}/console/config/info`, {
    passAuthorization: false,
  });
}

/*
   绑定github
*/
export async function bindGithub(
  body = {
    code,
    state,
  }
) {
  return request(`${apiconfig.baseUrl}/console/github/callback`, {
    method: 'post',
    data: {
      code: body.code,
      state: body.state,
    },
  });
}

/*
  获取github授权地址
*/

/* 判断是否是公有云云帮 */
export async function isPubCloud() {
  return request(`${apiconfig.baseUrl}/console/checksource`);
}

// 获取全部数据中心
export function getAllRegion(param) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/regions`,
    { 
      method: 'get',
      params: {
        status: param.status,
      }
    }
  );
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

/* 查询用户站内信 */
export async function getuserMessage(
  body = {
    team_name,
    page_num,
    page_size,
    msg_type,
    is_read,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/message`,
    {
      method: 'get',
      params: {
        page_num: body.page_num,
        page_size: body.page_size,
        msg_type: body.msg_type,
        is_read: body.is_read,
      },
    }
  );
}

/* 消息标记为已读未读 */
export async function putMsgAction(body = { team_name, msg_ids, action }) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/message`,
    {
      method: 'put',
      data: {
        action: body.action,
        msg_ids: body.msg_ids,
      },
    }
  );
}

/* 删除站内信 */
export async function deleteMsg(body = { team_name, msg_ids }) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${body.team_name}/message`,
    {
      method: 'delete',
      data: {
        msg_ids: body.msg_ids,
      },
    }
  );
}

/* 资源价格计算 */
export async function resPrice(
  body = {
    team_name,
    region_name,
    memory,
    disk,
    rent_time,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/regions/${body.region_name}/res-price`,
    {
      method: 'post',
      data: {
        team_name: body.team_name,
        region_name: body.region_name,
        memory: body.memory,
        disk: body.disk,
        rent_time: body.rent_time,
      },
    }
  );
}

/* 资源购买 */
export async function buyPurchase(
  body = {
    team_name,
    region_name,
    memory,
    disk,
    rent_time,
  }
) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/regions/${body.region_name}/purchase`,
    {
      method: 'post',
      data: {
        team_name: body.team_name,
        region_name: body.region_name,
        memory: body.memory,
        disk: body.disk,
        rent_time: body.rent_time,
      },
    }
  );
}

/* 查询企业信息 */
export async function fetchEnterpriseInfo(param) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/info`,
    {
      method: 'get',
    }
  );
}
/* 查询企业下所有团队 */
export async function fetchEnterpriseTeams(param) {
  return request(
    // `http://doc.goodrain.org/mock/18/console/enterprise/${param.enterprise_id}/teams`,

    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/teams`,
    {
      method: 'get',
      params: {
        page: param.page,
        page_size: param.page_size,
        name: param.name,
      },
    }
  );
}

/* 获取企业管理员列表 */
export async function fetchEnterpriseAdmin(param) {
  return request(
    // `http://doc.goodrain.org/mock/18/console/enterprise/${param.enterprise_id}/admin/user`,
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/admin/user`,
    {
      method: 'get',
    }
  );
}

/* 获取企业用户列表 */
export async function fetchEnterpriseUsers(param) {
  return request(
    // `http://doc.goodrain.org/mock/18/console/enterprise/${param.enterprise_id}/users`,
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/users`,
    {
      method: 'get',
      params: {
        page: param.page,
        page_size: param.page_size,
        query: param.name,
      },
    }
  );
}

/* 添加企业管理员 */
export async function addEnterpriseAdminTeams(param) {
  return request(
    // `http://doc.goodrain.org/mock/18/console/enterprise/${param.enterprise_id}/admin/user`,
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/admin/user`,
    {
      method: 'post',
      data: {
        user_id: param.user_id,
      },
    }
  );
}

/* 删除 企业管理员 */

export async function deleteEnterpriseAdmin(param) {
  return request(
    // `http://doc.goodrain.org/mock/18/console/enterprise/${param.enterprise_id}/admin/user/${param.user_id}`,
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/admin/user/${param.user_id}`,
    {
      method: 'delete',
    }
  );
}

/* 获取当前用户团队列表（搜索） */
export async function fetchUserTeams(param) {
  return request(
    // `http://doc.goodrain.org/mock/18/console/enterprise/{enterprise_id}/user/{user_id}/teams`,
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/user/${param.user_id}/teams`,
    {
      method: 'get',
      params: {
        page: param.page,
        page_size: param.page_size,
        name: param.name,
      },
    }
  );
}

/* 查询企业列表 */
export async function fetchEnterpriseList() {
  return request(
    // `http://doc.goodrain.org/mock/18/enterprises`,
    `${apiconfig.baseUrl}/console/enterprises`,
    {
      method: 'get',
    }
  );
}

/* 查询企业下组件 应用下信息 */
export async function fetchOverviewApp(param) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/overview/app`,
    {
      method: 'get',
    }
  );
}

/* 查询企业下的组件 团队 用户数量 */
export async function fetchOverview(param) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/overview`,
    {
      method: 'get',
    }
  );
}

/* 查询企业下团队信息 */
export async function fetchOverviewTeam(param) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/overview/team`,
    // `http://doc.goodrain.org/mock/18/console/enterprise/${param.enterprise_id}/overview/team`,
    {
      method: 'get',
    }
  );
}

/* 查询企业下监控 */
export async function fetchOverviewMonitor(param) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${param.enterprise_id}/monitor`,
    {
      method: 'get',
    }
  );
}

/* 设置注册功能 */
export async function setRegist(body = { isRegist }) {
  return request(`${apiconfig.baseUrl}/console/enterprise/registerstatus`, {
    method: 'put',
    data: { is_regist: body.isRegist },
  });
}

/* 设置注册功能 */
export async function getRegist(body = {}) {
  return request(`${apiconfig.baseUrl}/console/enterprise/registerstatus`, {
    method: 'get',
  });
}

/** 获取oath信息  */
export async function queryOauthInfo(body) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${body.enterprise_id}/oauth/oauth-services`,
    {
      method: 'get',
    }
  );
}

/** 创建Oauth 2.0 */
export async function toCreatOauth(params) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${params.enterprise_id}/oauth/oauth-services`,
    {
      method: 'post',
      data: {
        oauth_services: params.arr,
      },
    }
  );
}

/** 修改Oauth 2.0 */
export async function toEditOauth(params) {
  return request(`${apiconfig.baseUrl}/console/oauth/oauth-config`, {
    method: 'put',
    data: {
      oauth_services: params.arr,
    },
  });
}

/* 删除 oath信息 */

export async function deleteOauth(body = { service_id }) {
  return request(
    `${apiconfig.baseUrl}/console/oauth/oauth-services/${body.service_id}`,
    {
      method: 'delete',
      data: {
        service_id: body.service_id,
      },
    }
  );
}

/** 获取权限 */
export async function queryAuthority(params) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${params.selectedTeam}/role-list`,
    {
      method: 'get',
    }
  );
}
/** 获取代码仓库信息 */
export async function queryCodeWarehouseInfo(params) {
  return request(
    `${apiconfig.baseUrl}/console/oauth/service/${params.oauth_service_id}/user/repositories`,
    {
      method: 'get',
      params: {
        page: params.page || 1,
        search: params.search || null,
      },
    }
  );
}
/** 获取类型 */
export async function queryCodeWarehouseType(params) {
  return request(
    `${apiconfig.baseUrl}/console/oauth/service/${params.oauth_service_id}/user/repository/branches`,
    {
      method: 'get',
      params: {
        type: params.type || 'tags',
        full_name: params.full_name,
      },
    }
  );
}

/** 第三方oauth认证信息 */

export async function queryThirdInfo(params) {
  return request(
    `${apiconfig.baseUrl}/console/oauth/service/${params.oauth_service_id}/user/repository/${params.full_name}`,
    {
      method: 'get',
    }
  );
}

/** 代码检测 */
export async function queryTestCode(params) {
  return request(
    `${apiconfig.baseUrl}/console/oauth/service/${params.oauth_service_id}/user/repository/code_detection`,
    {
      method: 'post',
      data: {
        region_name: params.region_name,
        tenant_name: params.tenant_name,
        project_url: params.project_url,
        version: params.version,
      },
    }
  );
}
/** 代码检测结果 */

export async function queryDetectionTestCode(params) {
  return request(
    `${apiconfig.baseUrl}/console/oauth/service/${params.oauth_service_id}/user/repository/code_detection`,
    {
      method: 'get',
      params: {
        region: params.region,
        tenant_name: params.tenant_name,
        check_uuid: params.check_uuid,
      },
    }
  );
}

/** 创建第三方认证组件 */
export async function toCeateSourceCode(params) {
  return request(`${apiconfig.baseUrl}/console/apps/source_code`, {
    method: 'post',
    data: {
      code_from: params.code_from,
      oauth_service_id: params.oauth_service_id,
      group_name: params.group_name,
      project: params.project,
      branche: params.branche,
      tag: params.tag,
      code_type: params.code_type,
      project_url: params.project_url,
      oauth_type: params.oauth_type,
      group_id: params.group_id,
      service_cname: params.service_cname,
      is_auto_construct: params.is_auto_construct,
    },
  });
}

/** 创建用户 */
export async function toCreatUser(params,handleError) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${params.enterprise_id}/users`,
    {
      method: 'post',
      handleError,
      data: {
        tenant_name: params.tenant_name,
        user_name: params.user_name,
        phone: params.phone,
        real_name: params.real_name,
        email: params.email,
        password: params.password,
        re_password: params.password,
        role_ids: params.role_ids ? params.role_ids.join(',') : [],
      },
    }
  );
}

/** 编辑用户 */
export async function upEnterpriseUsers(params) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${params.enterprise_id}/user/${params.user_id}`,
    {
      method: 'PUT',
      data: {
        real_name: params.real_name,
        tenant_name: params.tenant_name,
        user_name: params.user_name,
        phone: params.phone,
        email: params.email,
        password: params.password,
        re_password: params.password,
        role_ids: params.role_ids ? params.role_ids.join(',') : [],
      },
    }
  );
}

/** 删除用户 */
export async function deleteEnterpriseUsers(params) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${params.enterprise_id}/user/${params.user_id}`,
    {
      method: 'DELETE',
    }
  );
}

/** 构建拓扑图 */
export async function toBuildShape(params) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${params.tenantName}/groups/${params.group_id}/common_operation `,
    {
      method: 'post',
      data: {
        tenantName: params.tenantName,
        group_id: params.group_id,
        action: params.action,
      },
    }
  );
}

/** 获取所有的拓扑图 */
export async function toQueryTopology(params) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${params.team_name}/topological?group_id=${params.groupId}&region=${params.region_name}`,
    {
      method: 'get',
    }
  );
}

/** 获取所有可访问的link */
export async function toQueryLinks(params) {
  return request(
    `${apiconfig.baseUrl}/console/teams/${params.team_name}/group/service/visit?service_alias=${params.service_alias}`,
    {
      method: 'get',
    }
  );
}

export async function toSearchTenant(params) {
  return request(
    `${apiconfig.baseUrl}/console/enterprise/${params.eid}/teams`,
    {
      method: 'get',
      params: {
        name: params.tenant,
        page_num: params.page_num || 1,
        page_size: params.page_size || 1000,
      },
    }
  );
}
