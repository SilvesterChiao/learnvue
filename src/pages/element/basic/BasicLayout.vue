<template>
    <div class="elementui-demo-item">
        <h3>Layout 布局</h3>
        <p>通过基础的24分栏，迅速简便地创建布局。</p>
        <h4>基础布局</h4>
        <p>使用单一分栏创建基础的栅格布局</p>
        <el-row :gutter="24" type="flex" align="middle" tag="article" justify="center">
            <el-col :span="8" :push="1" tag="section">
                :gutter="24" 增加分隔
                <div class="hidden-xs-only">xs时隐藏</div>
            </el-col>
            <el-col :span="8" :offset="2" :pull="1" tag="section" :xs="12" :sm="{ span: 24, offset: 0 }" :md="8" :lg="{ span: 8, offset: 4 }">
                :offset="2" 增加偏移
                <div class="hidden-sm-and-down">sm以下隐藏</div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
}
</script>
<style lang="scss" scoped>
@import '~styles/el-demo-item.scss';
</style>
