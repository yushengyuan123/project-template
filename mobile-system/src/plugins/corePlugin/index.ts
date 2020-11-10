// Vant
import Vant from 'vant';
import 'vant/lib/index.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
    async install(Vue: any, options:  any) {
        Vue.config.productionTip = false
        // // 当前环境
        // Vue.prototype.$env = process.env.NODE_ENV
        // // 当前的 baseUrl
        // Vue.prototype.$baseUrl = process.env.BASE_URL
        // // 当前版本
        // Vue.prototype.$version = process.env.VUE_APP_VERSION
        // // 构建时间
        // Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
        // Element
        Vue.use(Vant)
        Vue.use(ElementUI)
    }
}
