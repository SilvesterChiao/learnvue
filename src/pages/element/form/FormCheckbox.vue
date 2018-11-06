<template>
    <div>
        <h3>多选框</h3>
        <el-row class="checkbox-box">
            <el-col :span="8">
                <el-checkbox v-model="checked">苹果</el-checkbox>
            </el-col>
        </el-row>
        <el-row class="checkbox-box">
            <el-col :span="8">
                <el-checkbox v-model="checked1" disabled>苹果</el-checkbox>
                <el-checkbox v-model="checked2" disabled>香蕉</el-checkbox>
            </el-col>
        </el-row>
        <el-row class="checkbox-box">
            <el-col :span="24">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="Stefan"></el-checkbox>
                    <el-checkbox label="Katherine"></el-checkbox>
                    <el-checkbox label="Elena"></el-checkbox>
                    <el-checkbox label="Damon"></el-checkbox>
                    <el-checkbox label="禁用" disabled></el-checkbox>
                    <el-checkbox label="选中且禁用" disabled></el-checkbox>
                </el-checkbox-group>
            </el-col>
        </el-row>
        <el-row class="checkbox-box">
            <el-col :span="24">
                <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
                </el-checkbox-group>
            </el-col>
        </el-row>
        <el-row class="checkbox-box">
            <el-col :span="24">
                <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">
                        {{ city }}
                    </el-checkbox>
                </el-checkbox-group>
            </el-col>
        </el-row>
        <el-row class="checkbox-box">
            <el-col :span="24">
                <el-checkbox-group v-model="checkboxGroup1">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                </el-checkbox-group>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkboxGroup2" size="small">
                    <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '深圳'" :key="city">{{city}}</el-checkbox-button>
                </el-checkbox-group>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkboxGroup3" size="large" fill="#324057" text-color="#a4aebd" :min="1" :max="3">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                </el-checkbox-group>
            </el-col>
        </el-row>
    </div>
</template>
<script>
let cityOptions = ['上海', '北京', '广州', '深圳']

export default {
    data () {
        return {
            checked: true,
            checked1: false,
            checked2: true,
            checkList: ['选中且禁用', 'Katherine'],
            checkAll: true,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            checkedCities1: ['上海', '北京'],
            checkboxGroup1: ['上海'],
            checkboxGroup2: ['北京'],
            checkboxGroup3: ['深圳']
        }
    },
    methods: {
        handleCheckAllChange (val) {
            this.checkedCities = val ? cityOptions : []
            this.isIndeterminate = false
        },
        handleCheckedCitiesChange (value) {
            let checkedCount = value.length
            this.checkAll = checkedCount === this.cities.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
        }
    }
}
</script>
<style scoped>
.checkbox-box {
    margin-top: 10px;
    padding: 24px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
}
</style>
