<template>
    <div class="elementui-demo-item">
        <h3>Message 消息提示</h3>
        <div>
            <el-button-group>
                <el-button type="primary" @click="open">提示消息</el-button>
                <el-button type="primary" @click="openVn">VNode</el-button>
                <el-button type="primary" @click="open3">提示</el-button>
                <el-button type="primary" @click="open4">提示</el-button>
            </el-button-group>
        </div>
    </div>
</template>
<script>
/**
 * Options:
 * message: String/VNode
 * type: String
 * iconClass: String
 * dangerouslyUseHTMLString: Boolean
 * customClass: String
 * duration: Number
 * showClose: Boolean
 * center: Boolean
 * onClose: Function
 * Methods:
 * close
 */
export default {
    methods: {
        open () {
            this.$message('这是一条消息提示')
        },
        openVn () {
            const h = this.$createElement
            this.$message({
                message: h('p', null, [
                    h('span', null, '内容可以是'),
                    h('i', { style: 'color: teal' }, 'VNode')
                ])
            })
        },
        open3 () {
            this.$message.success({
                message: '操作成功',
                showClose: true,
                duration: 0
            })
        },
        open4 () {
            this.$message({
                type: 'warning',
                message: 'FBI Warning',
                center: true,
                duration: 1000,
                onClose () {
                    console.log('close')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~styles/el-demo-item.scss";
</style>
