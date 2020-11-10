<template>
    <div class="aside-container">
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
        />
        <div>
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active">
            <van-tabbar-item
                    icon="home-o"
                    v-for="(item, index) in setAside"
                    :key="index"
                    :to="`/index/demo${index + 1}`"
            >
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar>
    </div>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "layout",

        data() {
            return {
                active: ''
            }
        },

        computed: {
            setHeader () {
                return this.getHeaderConfig()
            },

            setAside () {
                return this.getAsideConfig()
            }
        },

        mounted() {

        },

        methods: {
            ...mapGetters(['getHeaderConfig']),

            ...mapGetters(['getAsideConfig'])
        }
    }
</script>

<style scoped lang="scss">
    @import "layout.scss";
</style>
