import request from "../index"

// 获取用户配置
export function getUserConfigByUsername(username) {
  return request({
    url: `/userConfig/${username}`,
  })
}

// 提交用户配置
export function postUserConfig(data) {
  return request({
    url: `/userConfig/postConfig`,
    method: 'post',
    data
  })
}