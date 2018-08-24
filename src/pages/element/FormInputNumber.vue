<template>
    <div>
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" :step="2" controls-position="left" label="描述文字"></el-input-number>
        <el-row>
            <el-col :span="12">
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        <span style="float: left">{{ item.label }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            num1: 2,
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
    },
    methods: {
        handleChange (value) {
            console.log(value)
        }
    }
}
</script>
<style scoped>
</style>
