//用于页面菜单的路由
import {RouteConfig} from 'vue-router';

// @ts-ignore
import Login from '../pages/Login'
import { menuPagesConfig } from '@/config/menuPagesConfig';


const routerMenuConfig: Array<RouteConfig> = [
    {
        path: '/index',
        component: () => import ('../layouts/headerAsside/layout.vue'),
        // redirect: '/index/demo1',
        children: [
            //主页菜单下对应的路由
            ...menuPagesConfig
        ],
        meta: {
            Authorization: true
        }
    },
    // @ts-ignore
    { path: '*', component: () => import('../pages/Error404/Error404') },
]

//展示非菜单的路由
const routerOtherConfig: Array<RouteConfig> = [
    // 登录
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false,
        },
    },
    // 404
    // @ts-ignore
    { path: '*', component: () => import('../pages/Error404/Error404') },
]

export default [...routerOtherConfig, ...routerMenuConfig]
