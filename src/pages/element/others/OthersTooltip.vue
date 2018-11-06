<template>
    <div class="elementui-demo-item">
        <h3>文字提示</h3>
        <el-row>
            <el-col :span="12">
                <el-tooltip effect="light" placement="top">
                    <div slot="content">用具名 slot 分发content<br/>替代tooltip中的content属性</div>
                    <el-button>上左</el-button>
                </el-tooltip>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '~styles/el-demo-item.scss';
</style>
