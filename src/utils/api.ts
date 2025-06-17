import axios from "axios";

const api = axios.create({
  timeout: 10000, // 请求超时时间为 10 秒
});

// 添加响应拦截器
api.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    if (response.status !== 200) {
      return Promise.reject(new Error(`请求失败: ${response.statusText}`));
    } else {
      return response;
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export const myGet = <T = any>(url: string): Promise<T> => api.get(url);

export default api;
