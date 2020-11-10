import {RouteConfig} from 'vue-router';

/**
 * 主页对应子路路由配置选项
 */
const menuPagesConfig: Array<RouteConfig> = [
    {
        path: 'demo1',
        component: () => import('../pages/demo1/demo1.vue'),
    },
    {
        name: 'demo2',
        path: 'demo2',
        component: () => import('../pages/demo2/demo2.vue'),
    },
    {
        name: 'demo3',
        path: 'demo3',
        component: () => import('../pages/demo3/demo3.vue'),
    },
    {
        name: 'demo4',
        path: 'demo4',
        component: () => import('../pages/demo4/demo4.vue'),
    }
];

export {menuPagesConfig};
