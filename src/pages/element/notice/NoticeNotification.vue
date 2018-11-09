<template>
    <div class="elementui-demo-item">
        <h3>Notification 通知</h3>
        <div>
            <el-button-group>
                <el-button type="primary" @click="open">发送</el-button>
                <el-button type="primary" @click="open2">发送</el-button>
                <el-button type="primary" @click="open3">发送</el-button>
                <el-button type="primary" @click="open4">发送</el-button>
                <el-button type="primary" @click="close">关闭</el-button>
            </el-button-group>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        close () {
            this.instance.close()
        },
        handleClose () {
            console.log('关闭')
        },
        handleClick () {
            console.log('点击')
        },
        open () {
            const h = this.$createElement

            this.$notify({
                type: 'success',
                title: '提示',
                message: h('i', { style: 'color: teal' }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
                onClose () {
                    console.log('close')
                }
            })
        },
        open2 () {
            this.instance = this.$notify.warning({
                title: '提示',
                message: '这是一条不会自动关闭的消息',
                duration: 0,
                offset: 100,
                onClick () {
                    console.log('click')
                }
            })
        },
        open3 () {
            this.$notify.info({
                title: '提示',
                message: '系统消息',
                duration: 1000,
                position: 'top-left',
                showClose: false
            })
        },
        open4 () {
            this.$notify({
                type: 'error',
                title: '错误消息',
                message: '通信错误',
                position: 'bottom-right'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/el-demo-item.scss';
</style>
