<template>
    <div class="elementui-demo-item">
        <h3>Loading 加载</h3>
        <div>
            <el-row>
                <el-button-group>
                    <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="openFullscreen">指令方式</el-button>
                    <el-button type="primary" @click="openFullscreen2">服务方式</el-button>
                </el-button-group>
            </el-row>
        </div>
    </div>
</template>
<script>
/**
 * Options:
 * target: Object/String
 * body: Boolean
 * fullscreen: Boolean
 * lock: Boolean
 * text: String
 * sponner: String
 * background: String
 * customClass: String
 */
export default {
    data () {
        return {
            fullscreenLoading: false
        }
    },
    methods: {
        openFullscreen () {
            this.fullscreenLoading = true
            setTimeout(() => {
                this.fullscreenLoading = false
            }, 1000)
        },
        openFullscreen2 () {
            let loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 32, 0, 0.7)'
            })

            setTimeout(() => {
                loading.close()
            }, 1000)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~styles/el-demo-item.scss";
</style>
