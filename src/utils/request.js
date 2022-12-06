/**
 * 封装axios的代码来源网络
 */

import axios from 'axios'
const ConfigBaseURL = '' //默认路径，这里也可以使用env来判断环境
//使用create方法创建axios实例
export const Request = axios.create({
    timeout: 7000, // 请求超时时间
    baseURL: ConfigBaseURL,
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})
// 添加请求拦截器
Request.interceptors.request.use(config => {
    return config
})
// 添加响应拦截器
Request.interceptors.response.use(response => {
    // console.log(response)
    return response.data
}, error => {
    return Promise.reject(error)
})


import to from 'await-to-js'
export function isObj(obj) {
    const typeCheck = typeof obj!=='undefined' && typeof obj === 'object' && obj !== null
    return typeCheck && Object.keys(obj).length > 0
}
export async function _get(url, qs,headers) {
    const params = {
        url,
        method: 'get',
        params: qs ? qs : ''
    }
    if(headers){params.headers = headers}
    const [err, res] = await to(Request(params))
    if (!err && res) {
        return res
    } else {
        return console.log(err)
    }
}

export async function _post(url, qs, body) {
    const params = {
        url,
        method: 'post',
        params: isObj(qs) ? qs : {},
        data: isObj(body) ? body : {}
    }
    const [err, res] = await to(Request(params))
    if (!err && res) {
        return res
    } else {
        return console.log(err)
    }
}
