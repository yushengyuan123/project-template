// @ts-ignore
import Cookies from 'js-cookie'

const APP_TITLE: string = 'mobile-system'

export default class cookies {
    /**
     * cookie获取
     * @description 由于你的系统可能会更新那么你最后设置一个版本号区别的你的cookies
     * @param name
     * @returns {*}
     */
    public static get(name: string) {
        return Cookies.get(`${APP_TITLE}-${process.env.VUE_APP_VERSION}-${name}`)
    }

    /**
     * cookie设置
     * @param name
     * @param value
     * @param cookieSetting
     */
    public static set(name = 'default', value = '', cookieSetting = {}) {
        let currentCookieSetting = {
            expires: 1
        }
        Object.assign(currentCookieSetting, cookieSetting)
        Cookies.set(`${APP_TITLE}-${process.env.VUE_APP_VERSION}-${name}`, value, currentCookieSetting)
    }

    /**
     * @description 拿到 cookie 全部的值
     */
    public static getAll() {
        return Cookies.get()
    }

    /**
     * @description 删除 cookie
     * @param {String} name cookie name
     */
    public static remove(name = 'default') {
        return Cookies.remove(`${APP_TITLE}-${process.env.VUE_APP_VERSION}-${name}`)
    }
}
