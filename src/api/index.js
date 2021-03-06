import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

var instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  // withCredentials: true,
  // responseType: 'json',
  headers: {
    'If-Modified-Since': 0,
    'Cache-Control': 'no-cache'
  }
});

// 添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (config.method === 'post' && config.data.constructor !== FormData) {
    config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data && response.data.status) {
    setResponse(response.data.status);
  }
  // if (response && response.data && response.data.status !== 200) {
  //   response.data.data = {};
  // }

  return response;
}, function (error) {
  // Do something with response error
  console.log(String(error).search('401'));
  if (String(error).search('401') !== -1) {
    // goLogin();
  }
  return Promise.reject(error);
});

// 各种状态码处理
var setResponse = (status) => {
  switch (status) {
    case 500:
      Vue.prototype.$Notice.error({
        title: '服务器异常',
        desc: '服务器异常'
      });
      break;
    case 401:
      Vue.prototype.$alert('错误', {
        showConfirmButton: true,
        confirmButtonText: '重新登录',
        callback: action => {
          setTimeout(location.href = '/', 1000);
        }
      });
      goLogin();
      break;

    default:
      break;
  }
};

let goLogin = () => {
  location.href = '/';
};

// 将请求数据的方式包装成一个对象
let api = {};
let likeGet = ['delete', 'get', 'head', 'options'];
let likePost = ['post', 'put', 'patch'];

api.request = function () {
  let isPost = arguments[0];
  let method = arguments[1];
  let url = arguments[2];
  let data = arguments[3];
  let config = {
    method,
    url,
    responseType: 'json'
  };

  config[isPost ? 'data' : 'params'] = data;

  return new Promise(function (resolve, reject) {
    instance
      .request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      });
  });
};

likeGet.forEach(method => {
  api[method] = function () {
    return api.request(false, method, ...arguments);
  };
});

likePost.forEach(method => {
  api[method] = function () {
    return api.request(true, method, ...arguments);
  };
});

api['pathUpload'] = '/api/upload';

export default api;
/*
// 超时请求
//在main.js设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err);

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err);
  }

  // Increase the retry count
  config.__retryCount += 1;

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, config.retryDelay || 1);
  });

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function() {
    return axios(config);
  });
});
*/
