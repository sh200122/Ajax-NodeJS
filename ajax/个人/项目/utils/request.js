// axios 公共配置
// 基地址
axios.defaults.baseURL = 'http://geek.itheima.net'
// 2.1 在 utils/request.js 设置请求拦截器，统一携带 token
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // 同意携带token令牌字符串在请求头上
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 2xx,范围内的状态码都会触发该函数
  // 对响应数据做点什么,例如：直接返回服务器的响应结果对象
  const result = response.data
  return result;
}, error => {
  //超出2xx范围的状态码都会触发该函数
  // 对响应错误做点什么，例如统一对401身份验证失败做出处理
  if (error?.response?.status === 401) {
    alert('身份验证失败，请重新登录')
    localStorage.clear()
    location.href = '../login/index.html'
  }
  return Promise.reject(error);
});