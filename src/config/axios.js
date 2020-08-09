import axios from 'axios'
import localStorageService from '../service/localStorageService'
import { notification } from 'antd';

axios.defaults.baseURL = "http://localhost:8000";

const token = localStorageService.getToken()

axios.interceptors.request.use(
    config => {
        if (config.url.includes('/login') || config.url.includes('/register')) {
            return config
        }
        if (token) {
            config.header['Authorization'] = `Bearer ${token}`
        } else {
            return config
        }
    },
    err => {
        Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response => {
        return response
    },
    err => {
        if (err.response?.status === 401) {
            localStorageService.removeToken()
            window.location.reload()
            notification.error({
                message: "Login again please"
            })
            return Promise.reject(err)
        }
        return Promise.reject(err)
    }
)


export default axios;