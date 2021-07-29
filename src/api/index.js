import axios from 'axios'
import { Notification, MessageBox, Message } from 'element-ui'

console.log('url', process.env.VUE_APP_BASE_API)
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})
// request request 拦截器
// 每次请求都为request头增加Authorization字段，其内容为Token
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      // 请求添加token
      config.headers.Authorization = token // 通常这么写
      // config.headers.common['Authorization'] = token 
    }
    return config
  },
  error => {
    console.log('errorRequest', error)
    Message({
      message: error.msg,
      type: 'error'
    })
    return Promise.reject(error)
  }
)

// request response 拦截器
request.interceptors.response.use(response => {
  console.log('response', response)
  let data = response.data
  /// 根据不同的code进行处理，具体情况具体分析
  if (data.code === 200) {
    return data.data
  } else if (data.code === 401) {
    Message({
      message: data.msg,
      type: 'error'
    })
  } else {
    Message({
      message: data.msg,
      type: 'error'
    })
  }
  return Promise.reject(data)
}, error => {
  console.log('errorResponse', error)
  Message({
    message: error.msg,
    type: 'error'
  })
  return Promise.reject(error)
})

export default request
