import axios from 'axios';
import Request from 'request/index';
import { BASE_URL, TIMEOUT } from '../config';

const CONFIG = {
  enableInterceptors: true, // 启用拦截器
  enableThrottle: true, // 启用带宽限制
  requestsPerSecond: 5, // 每秒请求数限制
};

const request = new Request(BASE_URL, TIMEOUT, CONFIG);

const API = {
  website: '/website',
};

export const getWebsiteAPI = () =>
  request.get({ url: API.website }).then((res) => res.data);

/**
 * TODO: 取消、超时、上传进度、下载进度待使用
 */

const source = request.cancelToken();
request.get({ url: '/endpoint', cancelToken: source.token }).catch((thrown) => {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    console.error(thrown);
  }
});
source.cancel('Operation canceled by the user.');

// 设置超时
request.setDefaultTimeout(5000);

// 捕获上传进度
request.onUploadProgress((progressEvent) => {
  console.log('Upload Progress:', progressEvent);
});

// 捕获下载进度
request.onDownloadProgress((progressEvent) => {
  console.log('Download Progress:', progressEvent);
});
