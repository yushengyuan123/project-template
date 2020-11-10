import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {asideMenuConfig, headerMenuConfig} from '@/config/menu';
import corePlugin from "./plugins/corePlugin/index"

Vue.use(corePlugin)

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    //设置头部菜单
    this.$store.commit('headerSet', headerMenuConfig)
    //设置侧栏菜单
    this.$store.commit('asideSet', asideMenuConfig)
  }
}).$mount('#app');
