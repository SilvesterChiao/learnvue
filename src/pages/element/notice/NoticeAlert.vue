<template>
    <div class="elementui-demo-item">
        <h3>Alert 警告</h3>
        <el-row>
            <el-col :span="8">
                <el-alert title="成功提示的文案" type="success" center :style="{ marginBottom: '10px' }"></el-alert>
                <el-alert title="消息提示的文案" type="info" :closable="false" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……" :style="{ marginBottom: '10px' }"></el-alert>
                <el-alert title="警告提示的文案" type="warning" close-text="我知道了" @close="handleClose" :style="{ marginBottom: '10px' }"></el-alert>
                <el-alert title="错误提示的文案" type="error" show-icon :style="{ marginBottom: '10px' }" center></el-alert>
            </el-col>
        </el-row>
    </div>
</template>
<script>
/**
 * Attributes:
 * title: String
 * type: success/warning/info/error
 * description: String
 * closeable: Boolean
 * center: Boolean
 * close-text: String
 * show-icon: Boolean
 * Events:
 * close
 */
export default {
    methods: {
        handleClose () {
            console.log('关闭alert')
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~styles/el-demo-item.scss";
</style>
