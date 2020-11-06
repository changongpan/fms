import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://146.56.216.166:80/index.php',
    baseURL: 'http://localhost:80/handa/index.php',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    if(config.method === 'post'){ //如果为POST方式，拦截数据进行转换
      config.data = JSON.stringify(config.data)
    }
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

export function dataGet(url,data) {
  return request({
    url:url,
    params:data
  })
}

export function dataPost(url,data) {
  return request({
    url:url,
    method:'post',
    data:data
  })
}
