<template>
    <div>
        <h3>输入框</h3>
        <el-row :gutter="24" class="input-box">
            <el-col :span="8">
                <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-date"></el-input>
                <el-input v-model="input" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>

                <el-input placeholder="请选择日期" v-model="input">
                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
                <el-input placeholder="请输入内容" v-model="input">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
            <el-col :span="8">
                <el-input type="textarea" v-model="input" :rows="3" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="8">
                <el-input placeholder="请输入内容" v-model="input">
                    <template slot="prepend">Http://</template>
                    <template slot="append">.com</template>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="24" class="input-box">
            <el-col :span="24">
                <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="电话号" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            input: '',
            select: ''
        }
    }
}
</script>
<style scoped>
.input-box {
    margin-top: 10px;
    padding: 24px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
}
</style>
