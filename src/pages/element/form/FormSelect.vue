<template>
    <div class="elementui-demo">
        <h1>Select 选择器</h1>
        <div>
            <h3>基础用法</h3>
            <div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value">

                    </el-option>
                </el-select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        }
    }
}
</script>
<style scoped>
</style>
