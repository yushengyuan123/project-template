
export default {
    state: {
        header: [],

        aside: [],
    },

    getters: {
        /**
         * 获得头部菜单配置
         */
        getHeaderConfig(state: any): Array<object> {
            return state.header
        },

        /**
         * 获得头部侧栏配置
         * @param state
         */
        getAsideConfig(state: any): Array<object> {
            return state.header
        }
    },

    mutations: {
        /**
         * 设置顶部菜单
         * @param state
         * @param menu
         */
        headerSet(state: any, menu: Array<object>) {
            state.header = menu
        },

        /**
         * 设置侧栏菜单
         * @param state
         * @param menu
         */
        asideSet(state: any, menu: Array<object>) {
            state.aside = menu
        }
    }

}
