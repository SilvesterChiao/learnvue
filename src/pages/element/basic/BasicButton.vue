<template>
    <div class="elementui-demo-item">
        <h3>Button 按钮</h3>
        <el-row>
            <el-col :span="12">
                <i class="el-icon-edit"></i>
                <i class="el-icon-share"></i>
                <i class="el-icon-delete"></i>
                <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                    <el-button type="primary">下一页
                        <i class="el-icon-arrow-right el-icon--right"></i>
                    </el-button>
                </el-button-group>
            </el-col>
            <el-col :span="12">
                <el-button-group>
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                    <el-button type="primary" icon="el-icon-share"></el-button>
                    <el-button type="primary" icon="el-icon-delete"></el-button>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    <el-button type="primary">上传
                        <i class="el-icon-upload el-icon-right"></i>
                    </el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
            <el-col :span="12">
                <el-button type="text">文字按钮</el-button>
                <el-button type="danger" :plain="true" size="mini">朴素按钮</el-button>
                <el-button type="warning" :round="true">圆角按钮</el-button>
            </el-col>
            <el-col :span="12">
                <el-button type="success" disabled size="small">禁用按钮</el-button>
                <el-button type="info" :loading="true" icon="el-icon-loading" size="medium">加载中</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods: {
        search () {
            this.$message({
                message: '提示',
                type: 'error',
                showClose: true,
                center: true
            })

            // this.$message.info({
            //     message: 'info'
            // })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/el-demo-item.scss';
</style>
