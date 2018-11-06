<template>
    <div class="elementui-demo-item">
        <h3>折叠面板</h3>
        <el-row>
            <el-col :span="8">
                <el-collapse v-model="activeNames" @change="handleChange" accordion>
                    <el-collapse-item title="一致性 Consistency" name="1">
                        <div>bulabula不用啦</div>
                        <div>bulabula不用啦</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Fankui" name="2">
                        <div>buadflkj</div>
                        <div>buiadf</div>
                    </el-collapse-item>
                    <el-collapse-item>
                        <template slot="title">
                            一致性 Consistency
                            <i class="header-icon el-icon-info"></i>
                        </template>
                        <div>可控</div>
                        <div>可控</div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeNames: ['1']
        }
    },
    methods: {
        handleChange (val) {
            console.log(val)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/el-demo-item.scss';
</style>
