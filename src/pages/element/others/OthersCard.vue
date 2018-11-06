<template>
    <div class="elementui-demo-item">
        <h3>卡片</h3>
        <el-row>
            <el-col :span="12">
                <el-card :body-style="{ padding: '10px' }">
                    <div slot="header">
                        <span>卡片名称</span>
                        <el-button style="float: right; padding: 3px 0;" type="text">
                            操作按钮
                        </el-button>
                    </div>
                    <div v-for="o in 4" :key="o">
                        {{ '列表内容' + o }}
                    </div>
                </el-card>
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
