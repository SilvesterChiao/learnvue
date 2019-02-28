<template>
    <div style="flex: 1;">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="todolist" name="first">
            </el-tab-pane>
            <el-tab-pane label="记账" name="second">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="true">支出</el-radio-button>
                    <el-radio-button :label="false">收入</el-radio-button>
                </el-radio-group>
                <el-row :gutter="20" v-if="isCollapse">
                    <el-col :span="24">
                        <el-row class="filter-box">
                            <el-col :span="16">
                                类型:
                                <el-select v-model="sortOutlayType" placeholder="请选择" size="mini">
                                    <el-option v-for="(item, index) in outlayType" :key="index" :label="item.text" :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="8">
                                <el-button type="primary" size="mini" @click="addOutlayVisible = true" :style="{ float: 'right' }">添加</el-button>
                            </el-col>
                        </el-row>
                        <el-table :data="outlayList" style="width: 100%">
                            <el-table-column prop="id" label="ID" header-align="center" align="center" width="80"></el-table-column>
                            <el-table-column prop="date" label="日期" header-align="center" align="center" width="120"></el-table-column>
                            <el-table-column prop="amount" label="支出金额" header-align="center" align="center" width="120"></el-table-column>
                            <el-table-column prop="outlayType" label="支出类型" header-align="center" align="center" width="150">
                                <template slot-scope="scope">
                                    {{ outlayType[scope.row.outlayType].text }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="payType" label="支付方式" header-align="center" align="center" width="150">
                                <template slot-scope="scope">
                                    {{ payType[scope.row.payType] }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="summary" label="备注" header-align="center" align="center"></el-table-column>
                            <el-table-column label="操作" header-align="center" align="center" width="180">
                                <template slot-scope="scope">
                                    <el-button type="text" size="medium" @click="showEditOutlay(scope.$index, scope.row)">
                                        编辑
                                    </el-button>
                                    <el-button type="text" size="medium" @click.native.prevent="deleteOutlay(scope.$index, outlayList)">
                                        删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-dialog title="添加" :visible.sync="addOutlayVisible" width="30%">
                        <div>
                            <el-form ref="addOutlay" :mode="newOutlay" label-width="80px">
                                <el-form-item label="日期">
                                    <el-date-picker type="date" placeholder="请选择日期" v-model="newOutlay.date" style="width: 100%;" :picker-options="pickerOptions">

                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="金额">
                                    <el-input v-model="newOutlay.amount">
                                        <template slot="prepend">
                                            <i slot="prefix" class="fa fa-jpy" aria-hidden="true"></i>
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="支出类型">
                                    <el-select v-model="newOutlay.outlayType" placeholder="请选择支出类型" size="mini">
                                        <el-option v-for="(item, index) in outlayType" :key="index" :label="item.text" :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="支付方式">
                                    <el-select v-model="newOutlay.payType" placeholder="请选择支付方式" size="mini">
                                        <el-option v-for="(item, index) in payType" :key="index" :label="item" :value="index">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="备注">
                                    <el-input v-model="newOutlay.summary"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="addOutlay">确 定</el-button>
                            <el-button type="primary" @click="addOutlayVisible = false">取 消</el-button>
                        </span>
                    </el-dialog>
                    <el-dialog title="编辑" :visible.sync="editOutlayVisible" width="30%">
                        <div>
                            <el-form ref="editOutlay" :mode="currentOutlay" label-width="80px">
                                <el-form-item label="ID">
                                    <el-input v-model="currentOutlay.id" disabled></el-input>
                                </el-form-item>
                                <el-form-item label="日期">
                                    <el-date-picker type="date" placeholder="请选择日期" v-model="currentOutlay.date" style="width: 100%;" :picker-options="pickerOptions">

                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="金额">
                                    <el-input v-model="currentOutlay.amount">
                                        <template slot="prepend">
                                            <i slot="prefix" class="fa fa-jpy" aria-hidden="true"></i>
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="支出类型">
                                    <el-select v-model="currentOutlay.outlayType" placeholder="请选择支出类型" size="mini">
                                        <el-option v-for="(item, index) in outlayType" :key="index" :label="item.text" :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="支付方式">
                                    <el-select v-model="currentOutlay.payType" placeholder="请选择支付方式" size="mini">
                                        <el-option v-for="(item, index) in payType" :key="index" :label="item" :value="index">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="备注">
                                    <el-input v-model="currentOutlay.summary"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="editOutlay">确 定</el-button>
                            <el-button type="primary" @click="editOutlayVisible = false">取 消</el-button>
                        </span>
                    </el-dialog>
                </el-row>
                <el-row :gutter="20" v-else>
                    <el-col :span="24">
                        <el-row class="filter-box">
                            <el-col :span="16">
                                类型:
                                <el-select v-model="sortIncomeType" placeholder="请选择" size="mini">
                                    <el-option v-for="(item, index) in incomeType" :key="index" :label="item.text" :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="8">
                                <el-button type="primary" size="mini" @click="addIncomeVisible = true" :style="{ float: 'right' }">添加</el-button>
                            </el-col>
                        </el-row>
                        <el-table :data="incomeList" style="width: 100%">
                            <el-table-column prop="id" label="ID" header-align="center" align="center" width="80"></el-table-column>
                            <el-table-column prop="date" label="日期" header-align="center" align="center" width="120"></el-table-column>
                            <el-table-column prop="amount" label="收入金额" header-align="center" align="center" width="120"></el-table-column>
                            <el-table-column prop="incomeType" label="收入类型" header-align="center" align="center" width="150">
                                <template slot-scope="scope">
                                    {{ incomeType[scope.row.incomeType].text }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="receiptType" label="收款方式" header-align="center" align="center" width="150">
                                <template slot-scope="scope">
                                    {{ receiptType[scope.row.receiptType] }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="summary" label="备注" header-align="center" align="center"></el-table-column>
                            <el-table-column label="操作" header-align="center" align="center" width="180">
                                <template slot-scope="scope">
                                    <el-button type="text" size="medium" @click="showEditIncome(scope.$index, scope.row)">
                                        编辑
                                    </el-button>
                                    <el-button type="text" size="medium" @click.native.prevent="deleteIncome(scope.$index, incomeList)">
                                        删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-dialog title="添加" :visible.sync="addIncomeVisible" width="30%">
                        <div>
                            <el-form ref="addIncome" :mode="newIncome" label-width="80px">
                                <el-form-item label="日期">
                                    <el-date-picker type="date" placeholder="请选择日期" v-model="newIncome.date" style="width: 100%;" :picker-options="pickerOptions"></el-date-picker>
                                </el-form-item>
                                <el-form-item label="金额">
                                    <el-input v-model="newIncome.amount">
                                        <template slot="prepend">
                                            <i slot="prefix" class="fa fa-jpy" aria-hidden="true"></i>
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="收入类型">
                                    <el-select v-model="newIncome.incomeType" placeholder="请选择收入类型" size="mini">
                                        <el-option v-for="(item, index) in incomeType" :key="index" :label="item.text" :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="收款方式">
                                    <el-select v-model="newIncome.receiptType" placeholder="请选择收款方式" size="mini">
                                        <el-option v-for="(item, index) in receiptType" :key="index" :label="item" :value="index">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="备注">
                                    <el-input v-model="newIncome.summary"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="addIncome">确 定</el-button>
                            <el-button type="primary" @click="addIncomeVisible = false">取 消</el-button>
                        </span>
                    </el-dialog>
                    <el-dialog title="编辑" :visible.sync="editIncomeVisible" width="30%">
                        <div>
                            <el-form ref="editIncome" :mode="currentIncome" label-width="80px">
                                <el-form-item label="ID">
                                    <el-input v-model="currentIncome.id" disabled></el-input>
                                </el-form-item>
                                <el-form-item label="日期">
                                    <el-date-picker type="date" placeholder="请选择日期" v-model="currentIncome.date" style="width: 100%;" :picker-options="pickerOptions">

                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="金额">
                                    <el-input v-model="currentIncome.amount">
                                        <template slot="prepend">
                                            <i slot="prefix" class="fa fa-jpy" aria-hidden="true"></i>
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="收入类型">
                                    <el-select v-model="currentIncome.incomeType" placeholder="请选择收入类型" size="mini">
                                        <el-option v-for="(item, index) in incomeType" :key="index" :label="item.text" :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="收款方式">
                                    <el-select v-model="currentIncome.receiptType" placeholder="请选择收款方式" size="mini">
                                        <el-option v-for="(item, index) in receiptType" :key="index" :label="item" :value="index">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="备注">
                                    <el-input v-model="currentIncome.summary"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="editIncome">确 定</el-button>
                            <el-button type="primary" @click="editIncomeVisible = false">取 消</el-button>
                        </span>
                    </el-dialog>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
                五险一金计算器
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">
                等等
            </el-tab-pane>
            <el-tab-pane label="正则表达式" name="fifth">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-input v-model="regex" placeholder="请输入正则表达式"></el-input>
                    </el-col>
                    <el-col :span="12">
                        <el-checkbox v-model="global">global</el-checkbox>
                        <el-checkbox v-model="ignore">ignoreCase</el-checkbox>
                        <el-button type="primary" @click="checkRegex">匹配</el-button>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 10px;">
                    <el-col :span="24">
                        <h5 style="font-size: 14px;font-weight: normal;">常用正则表达式</h5>

                    </el-col>
                </el-row>
                <el-row :gutter="20" style="margin-top: 10px;">
                    <el-col :span="12">
                        <h5 style="margin-bottom: 12px;font-size: 16px;font-weight: normal;">待匹配文本</h5>
                        <textarea v-model="testText" style="padding: 10px 14px;width: 100%;height: 240px;box-sizing: border-box;resize: none;">
                        </textarea>
                    </el-col>
                    <el-col :span="12">
                        <h5 style="margin-bottom: 12px;font-size: 16px;font-weight: normal;">匹配结果</h5>
                        <textarea readonly :value="resultText" style="padding: 10px 14px;width: 100%;height: 240px;box-sizing: border-box;resize: none;">
                        </textarea>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { outlayType, incomeType, payType, receiptType, outlayList, incomeList } from 'data/account.js'

export default {
    data () {
        return {
            activeName: 'second',
            isCollapse: true,
            pickerOptions: {
                disabledDate (time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [{
                    text: '今天',
                    onClick (picker) {
                        picker.$emit('pick', new Date())
                    }
                }, {
                    text: '昨天',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        picker.$emit('pick', date)
                    }
                }]
            },
            sortOutlayType: '全部',
            sortIncomeType: '全部',
            outlayType: outlayType,
            incomeType: incomeType,
            payType: payType,
            receiptType: receiptType,
            outlayList: outlayList,
            incomeList: incomeList,
            addOutlayVisible: false,
            addIncomeVisible: false,
            newOutlay: {
                id: 0,
                date: '',
                amount: '',
                outlayType: '',
                payType: '',
                summary: ''
            },
            newIncome: {
                id: 0,
                date: '',
                amount: '',
                incomeType: '',
                receiptType: '',
                summary: ''
            },
            editOutlayVisible: false,
            editOutlayIndex: 0,
            currentOutlay: {
                id: 0,
                date: '',
                amount: '',
                outlayType: 0,
                payType: 0,
                summary: ''
            },
            editIncomeVisible: false,
            editIncomeIndex: 0,
            currentIncome: {
                id: 0,
                date: '',
                amount: '',
                incomeType: 0,
                receiptType: 0,
                summary: ''
            },
            regex: '',
            global: false,
            ignore: false,
            regexs: [{
                match: '中文字符',
                pattern: '[\\u4e00-\\u9fa5]'
            }, {
                match: '18位身份证号',
                pattern: '^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X)$'
            }],
            testText: '',
            resultText: ''
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
        addOutlay () {
            let outlayLength = this.outlayList.length
            let newOutlayId = this.outlayList[outlayLength - 1].id + 1
            this.newOutlay.id = newOutlayId
            this.newOutlay.date = this.$moment(this.newOutlay.date).format('YYYY-MM-DD')
            this.newOutlay.amount = Number(this.newOutlay.amount).toFixed(2)
            this.outlayList.push(this.newOutlay)
            this.addOutlayVisible = false
            console.log(this.newOutlay)
        },
        addIncome () {
            let incomeLength = this.incomeList.length
            let newIncomeId = this.incomeList[incomeLength - 1].id + 1
            this.newIncome.id = newIncomeId
            this.newIncome.date = this.$moment(this.newIncome.date).format('YYYY-MM-DD')
            this.newIncome.amount = Number(this.newIncome.amount).toFixed(2)
            this.incomeList.push(this.newIncome)
            this.addIncomeVisible = false
            console.log(this.newIncome)
        },
        showEditOutlay (index, currentOutlay) {
            this.editOutlayVisible = true
            this.editOutlayIndex = index
            this.currentOutlay = {
                id: currentOutlay.id,
                date: currentOutlay.date,
                amount: currentOutlay.amount,
                outlayType: currentOutlay.outlayType,
                payType: currentOutlay.payType,
                summary: currentOutlay.summary
            }
        },
        editOutlay: function () {
            this.editOutlayVisible = false
            this.$set(this.outlayList, this.editOutlayIndex, this.currentOutlay)
        },
        showEditIncome (index, currentIncome) {
            this.editIncomeVisible = true
            this.editIncomeIndex = index
            this.currentIncome = {
                id: currentIncome.id,
                date: currentIncome.date,
                amount: currentIncome.amount,
                incomeType: currentIncome.incomeType,
                receiptType: currentIncome.receiptType,
                summary: currentIncome.summary
            }
        },
        editIncome: function () {
            this.editIncomeVisible = false
            this.$set(this.incomeList, this.editIncomeIndex, this.currentIncome)
        },
        deleteOutlay (index, rows) {
            this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                rows.splice(index, 1)
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        deleteIncome (index, rows) {
            this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                rows.splice(index, 1)
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        checkRegex () {
            var flags = ''

            if (this.ignore) {
                flags += 'i'
            }
            if (this.global) {
                flags += 'gm'
            }

            var pattern = new RegExp(this.regex, flags)
            var result = this.testText.match(pattern)
            this.resultText = ''
            result.forEach((item) => {
                this.resultText += item + '\r\n'
            })
        }
    }
}
</script>
<style scoped>
</style>
