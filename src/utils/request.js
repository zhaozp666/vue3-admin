import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

service.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      // 创建包含完整错误信息的对象
      debugger
      const error = new Error(res.msg)
      error.code = res.code
      error.response = response
      ElMessage.error(res.msg || '业务异常')
      return null
    }
  },
  error => {
    // 完善错误信息解析
    const msg = error.response?.data?.msg || error.message || '请求失败'
    ElMessage.error(msg)
    return null
  }
)

export default service