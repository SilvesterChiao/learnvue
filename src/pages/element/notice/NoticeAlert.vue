<template>
    <div class="elementui-demo-item">
        <h3>Alert 警告</h3>
        <div>
            <el-alert title="成功提示的文案" type="success" center></el-alert>
            <el-alert title="消息提示的文案" type="info" :closable="false" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"></el-alert>
            <el-alert title="警告提示的文案" type="warning" close-text="我知道了" @close="handleClose"></el-alert>
            <el-alert title="错误提示的文案" type="error" show-icon></el-alert>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleClose () {
            console.log('关闭alert')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/el-demo-item.scss';
</style>
