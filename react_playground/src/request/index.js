import store from 'store';
import axios from 'axios';

import { setLoading } from 'store/loading';
import { BASE_URL, TIMEOUT, TOKEN } from './config';

class Request {
  constructor(baseURL, timeout) {
    // 创建axios实例
    this.instance = axios.create({
      baseURL: baseURL, // 替换为你的API基础URL
      timeout: timeout, // 请求超时时间
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        store.dispatch(setLoading(true)); // 请求前设置loading为true
        // 在发送请求之前做些什么，例如设置请求头
        config.headers['Authorization'] = `Bearer ${TOKEN}`; // 替换为实际的token
        return config;
      },
      (error) => {
        store.dispatch(setLoading(false)); // 请求成功关闭loading
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        store.dispatch(setLoading(false)); // 请求成功关闭loading
        // 对响应数据做点什么
        return response.data;
      },
      (error) => {
        store.dispatch(setLoading(false)); // 请求失败关闭loading
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  // GET请求
  get(config) {
    return this.request({ ...config, method: 'GET' });
  }

  // POST请求
  post(config) {
    return this.request({ ...config, method: 'POST' });
  }

  // PUT请求
  put(config) {
    return this.request({ ...config, method: 'PUT' });
  }

  // DELETE请求
  delete(config) {
    return this.request({ ...config, method: 'DELETE' });
  }
}

const request = new Request(BASE_URL, TIMEOUT);

export default request;
