import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.43.117:5173/',
  // baseURL: 'http://localhost:5173/',

})

export default api