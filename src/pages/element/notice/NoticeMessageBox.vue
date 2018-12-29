<template>
    <div class="elementui-demo-item">
        <h3>MessageBox 弹框</h3>
        <div>
            <el-button-group>
                <el-button type="text" @click="open">打开MessageBox</el-button>
                <el-button type="text" @click="confirm">confirm</el-button>
                <el-button type="text" @click="prompt">prompt</el-button>
            </el-button-group>
        </div>
    </div>
</template>
<script>
/**
 * Attributes:
 * title: String
 * message: String/VNode
 * dangerouslyUseHTMLString: Boolean
 * type: success/info/warning/error
 * customClass: String
 * callback: function(action, instance)
 * showClose: Boolean
 * beforeClose: function(action, instance, done)
 * lockScroll: Boolean
 * showCancelButton: Boolean
 * showConfirmButton: Boolean
 * cancelButtonText: String
 * confirmButtonText: String
 * cancelButtonClass: String
 * confirmButtonClass: String
 * closeOnClickModal: Boolean
 * closeOnPressEscape: Boolean
 * closeOnHashChange: Boolean
 * showInput: Boolean
 * inputPlaceholder: String
 * inputType: String
 * inputValue: String
 * inputPattern: Regexp
 * inputValidator: function
 * inputErrorMessage: String
 * center: Boolean
 * roundButton: Boolean
 */
// MessageBox, MessageBox.alert, MessageBox.confirm, MessageBox.prompt
export default {
    methods: {
        open () {
            this.$alert('这是一段内容', '标题', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    })
                }
            })
        },
        confirm () {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        prompt () {
            this.$prompt('请输入邮箱', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage: '邮箱格式不正确',
                center: true,
                roundButton: true
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: '您的邮箱是: ' + value
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                })
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~styles/el-demo-item.scss";
</style>
