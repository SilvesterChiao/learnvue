<template>
    <div class="elementui-demo-item">
        <h3>Notification 通知</h3>
        <el-row>
            <el-col :span="12">
                <el-button-group>
                    <el-button type="primary" @click="open1">发送</el-button>
                    <el-button type="primary" @click="open2">发送</el-button>
                    <el-button type="primary" @click="open3">发送</el-button>
                    <el-button type="primary" @click="open4">发送</el-button>
                    <el-button type="primary" @click="close1">关闭</el-button>
                </el-button-group>
            </el-col>
            <el-col :span="12">
                <el-button-group>
                    <el-button type="primary" @click="open5">登录</el-button>
                    <el-button type="primary" @click="open6">取消</el-button>
                    <el-button type="primary" @click="open7">退出</el-button>
                    <el-button type="primary" @click="open8">注册</el-button>
                    <el-button type="primary" @click="close2">关闭</el-button>
                </el-button-group>
            </el-col>
        </el-row>
    </div>
</template>
<script>
// 发送系统级消息
/**
 * Options:
 * title: String
 * message: String/VNode
 * dangerouslyUseHTMLString: Boolean
 * type: String
 * iconClass: String
 * customClass: String
 * duration: Number
 * position: top-left/top-right/bottom-right/bottom-left
 * showClose: Boolean
 * onClose: Function
 * onClick: Function
 * offset: Number
 * Methods:
 * close:
 */

// Notification.info, Notification.success, Notification.warning, Notification.error
export default {
    methods: {
        open1 () {
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
        },
        close1 () {
            this.instance.close()
        },
        open5 () {
            let vm = this
            vm.noficeLogin = vm.$notify({
                type: 'success',
                title: '登录成功',
                message: '欢迎光临!',
                customClass: 'login-notify-class',
                duration: 0,
                position: 'top-right',
                showClose: false,
                offset: 30,
                onClose: function () {
                    vm.$message('关闭了nitify')
                },
                onClick: function () {
                    vm.noficeLogin.close()
                }
            })
        },
        open6 () {
            this.$notify({
                type: 'warning',
                title: '取消登录',
                message: '<i>大爷以后常来啊</i>',
                dangerouslyUseHTMLString: true,
                duration: 2000
            })
        },
        open7 () { },
        open8 () { },
        close2 () {
            this.noficeLogin.close()
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~styles/el-demo-item.scss";
</style>
