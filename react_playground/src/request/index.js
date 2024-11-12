import store from 'store';
import axios from 'axios';
import axiosThrottle from 'axios-request-throttle';

import { setLoading } from 'store/loading';
import { TOKEN } from './config';

class Request {
  // 构造器
  constructor(baseURL, timeout, config) {
    // 创建axios实例
    this.instance = axios.create({
      baseURL: baseURL, // 替换为你的API基础URL
      timeout: timeout, // 请求超时时间
    });

    // 如果启用了拦截器，则设置拦截器
    if (config.enableInterceptors) {
      this.setupInterceptors();
    }

    // 如果启用了带宽限制，则设置带宽限制
    if (config.enableThrottle) {
      axiosThrottle.use(this.instance, {
        requestsPerSecond: config.requestsPerSecond,
      });
    }
  }

  // 设置请求和响应拦截器
  setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        store.dispatch(setLoading(true)); // 请求前设置loading为true
        // 在发送请求之前做些什么，例如设置请求头
        config.headers['Authorization'] = `Bearer ${TOKEN}`; // 替换为实际的token
        return config;
      },
      (error) => {
        store.dispatch(setLoading(false)); // 请求失败关闭loading
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

  // 构造函数
  request(config) {
    return this.instance.request(config);
  }

  // 成员方法
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

  // 获取取消令牌
  cancelToken() {
    return axios.CancelToken.source();
  }

  // 设置默认超时时间
  setDefaultTimeout(timeout) {
    this.instance.defaults.timeout = timeout;
  }

  // 捕获上传进度
  onUploadProgress(callback) {
    this.instance.defaults.onUploadProgress = callback;
  }

  // 捕获下载进度
  onDownloadProgress(callback) {
    this.instance.defaults.onDownloadProgress = callback;
  }
}

export default Request;
