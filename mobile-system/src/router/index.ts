import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import routes from '@/config/router';

// 进度条
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import cookies from '@/libs/cookies/cookie';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/**
 * 登陆权限校验
 */
router.beforeEach((to, from, next) => {
  NProgress.start()

  //假如页面的进入需要权限,那么先进行权限校验，否则弹出登陆
  if (to.matched.some((records) => records.meta.Authorization)) {
    const token = cookies.get('token')
    // if (token && token !== 'undefined') {
    //   next()
    // } else {
    //   // 没有登录的时候跳转到登录界面
    //   // 携带上登陆成功之后需要跳转的页面完整路径
    //   next({
    //     name: 'login',
    //   })
    //   // https://github.com/d2-projects/d2-admin/issues/138
    //   NProgress.done()
    // }
    next()

  } else {
    next()
  }

  NProgress.done()
})



export default router;
