import axios, { type Method } from 'axios'

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  // baseURL: 'http://apipc-xiaotuxian-front.itheima.net/',
  timeout: 50000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
// 后端返回的接口数据格式
export interface ResponseData<T = any> {
  data: {
    code: string;
    msg: string;
    result: T;
  };
}

/**
 * axios 二次封装，整个 TS 类型
 * @param url  请求地址
 * @param method  请求类型
 * @param submitData  对象类型，提交数据
 * @param RawAxiosResponseHeaders  请求头
 */
export const http = <T>(method: Method, url: string, submitData?: unknown) => {
  return instance.request<T, ResponseData<T>>({
    url,
    method, 
    // 🔔 自动设置合适的 params/data 键名称，如果 method 为 get 用 params 传请求参数，否则用 data
    [method.toUpperCase() === "GET" ? "params" : "data"]: submitData,
  });
};
export default instance