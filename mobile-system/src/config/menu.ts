import VueRouter, { RouteConfig } from 'vue-router';

interface menuConfig {
    name: string,
    icon: string,
    children ?: Array<any>
}

//侧栏菜单
const asideMenuConfig: Array<menuConfig> = [
    {
        name: '演示页面',
        icon: 'folder-o',
        children: [
            { name: '演示 1', path: '/demo1' },
            { name: '演示 2', path: '/demo2' },
        ],
    },
];

//头顶部菜单
const headerMenuConfig: Array<menuConfig>= [
    {
        name: '菜单1',
        icon: 'flask',
    },
    {
        name: '菜单2',
        icon: 'flask',
    },
    {
        name: '菜单3',
        icon: 'flask',
    },
    {
        name: '我的',
        icon: 'flask',
    },
];

export {asideMenuConfig, headerMenuConfig}


