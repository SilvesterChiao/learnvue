<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="todolist" name="first">
                todolist
            </el-tab-pane>
            <el-tab-pane label="记账" name="second">
                <el-row :gutter="20">
                    <el-col :span="12">
                        收入
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="金额" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="来源">
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :span="12">
                        支出
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="金额" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="用途">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <label>
                    支出: <input type="number" v-model="expenditure">
                </label>
                <label>
                    用途: <input type="text" v-model="something">
                </label>
                <button>确认</button>
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
            expenditure: 0,
            something: '',
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
            }]
        };
    },
    methods: {
        handleClick (tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style scoped>
</style>
