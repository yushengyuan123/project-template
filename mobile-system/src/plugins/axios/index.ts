import axios from 'axios';
import cookies from '@/libs/cookies/cookie';

function errorCreate(message: string) {
    throw new Error(message);
}

const service = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        if (cookies.get('token')) {
            config.headers['Authorization'] = cookies.get('token');
        }
        return config;
    },
    error => {
        // 发送失败
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        //当没有token的时候尝试去获取设置token
        if (!cookies.get('token')) {
            cookies.set('token', response.headers.authorization);
        }
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data;
        // 这个状态码是和后端约定的
        const {code} = dataAxios;
        // 根据 code 进行判断
        switch (code) {
            case 1:
                // [ 示例 ] code === 0 代表没有错误
                return dataAxios.data;
            case 'xxx':
                // [ 示例 ] 其它和后台约定的 code
                errorCreate(`[ code: xxx ] ${dataAxios.msg}: ${response.config.url}`);
                break;
            default:
                // 不是正确的 code
                errorCreate(`${dataAxios.msg}: ${response.config.url}`);
                break;
        }

    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求错误';
                    break;
                case 401:
                    error.message = '未授权，请登录';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = `请求地址出错: ${error.response.config.url}`;
                    break;
                case 408:
                    error.message = '请求超时';
                    break;
                case 500:
                    error.message = '服务器内部错误';
                    break;
                case 501:
                    error.message = '服务未实现';
                    break;
                case 502:
                    error.message = '网关错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                case 504:
                    error.message = '网关超时';
                    break;
                case 505:
                    error.message = 'HTTP版本不受支持';
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(error);
    }
);
