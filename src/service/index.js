import axios from "axios"
import { ElLoading } from 'element-plus'

const instance = axios.create({
  baseURL: "http://localhost:10000",
  timeout: 5000,
})

let loadInstance
instance.interceptors.request.use((req) => {
  loadInstance = ElLoading.service({fullscreen: true,lock: true, text: "加载中..." })
  return req
})

instance.interceptors.response.use((res) => {
  loadInstance && loadInstance.close()
  return res.data
})

export default instance