<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="todolist" name="first">
            </el-tab-pane>
            <el-tab-pane label="记账" name="second">
                <el-row :gutter="20">
                    <el-col :span="12">
                        收入
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="收入" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="备注">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form ref="form" :model="form" label-width="80px" label-position="left">
                            <el-form-item label="摘要">
                                <el-input v-model="form.summary"></el-input>
                            </el-form-item>
                            <el-form-item label="支出">
                                <el-input v-model="form.amount"></el-input>
                            </el-form-item>
                            <el-form-item label="支付方式">
                                <el-select v-model="form.payType" placeholder="请选择支付方式">
                                    <el-option label="花呗" :value="1"></el-option>
                                    <el-option label="银行卡" :value="2"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="时间">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">添加</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
                五险一金计算器
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">
                等等
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeName: 'second',
            tableData: [{
                date: '2016-05-02',
                name: '5.5',
                address: '晚餐'
            }, {
                date: '2016-05-04',
                name: '14',
                address: '午餐'
            }, {
                date: '2016-05-01',
                name: '5',
                address: '晚餐'
            }, {
                date: '2016-05-03',
                name: '6',
                address: '夜宵'
            }],
            form: {
                summary: '',
                amount: '',
                payType: '',
                date1: ''
            }
        }
    },
    watch: {
    },
    computed: {
    },
    methods: {
        handleClick (tab, event) {
            console.log(tab, event)
        },
        onSubmit () {
            console.log(this.form)
        }
    }
}
</script>
<style scoped>
</style>
