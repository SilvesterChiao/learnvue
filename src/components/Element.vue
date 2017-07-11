<template>
    <div class="element">
        <h2>基础组件</h2>
        <h3>Layout 布局</h3>
        <p>通过基础的24分栏，迅速简便地创建布局。</p>
        <h4>基础布局</h4>
        <p>使用单一分栏创建基础的栅格布局</p>
        <div>
            <el-row :gutter="20">
                <el-col :span="24">
                    24
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">12</el-col>
                <el-col :span="12">12</el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="8" :offset="2">
                    :gutter="24" 增加分隔
                </el-col>
                <el-col :span="8" :offset="2">
                    :offset="2" 增加偏移
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" :offset="2">
                    :gutter="24" 增加分隔
                </el-col>
                <el-col :span="8" :offset="2">
                    :offset="2" 增加偏移
                </el-col>
            </el-row>
            <el-row>
                <h3>图标</h3>
                <el-col :span="12">
                    通过设置类名为 el-icon-iconName 来使用即可
                </el-col>
                <el-col :span="12">
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-share"></i>
                    <i class="el-icon-delete"></i>
                    <el-button type="primary" icon="search">搜索</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="text">文字按钮</el-button>
                </el-col>
                <el-col :span="8">
                    <el-button :plain="true" :disabled="true">主要按钮</el-button>
                    <el-button type="primary" :disabled="true">主要按钮</el-button>
                    <el-button type="text" :disabled="true">文字按钮</el-button>
                </el-col>
                <el-col :span="8">
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                    <el-button type="info">信息按钮</el-button>

                    <el-button :plain="true" type="success">成功按钮</el-button>
                    <el-button :plain="true" type="warning">警告按钮</el-button>
                    <el-button :plain="true" type="danger">危险按钮</el-button>
                    <el-button :plain="true" type="info">信息按钮</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="6">
                    <el-button type="primary" icon="edit"></el-button>
                    <el-button type="primary" icon="share"></el-button>
                    <el-button type="primary" icon="delete"></el-button>
                    <el-button type="primary" icon="search">搜索</el-button>
                    <el-button type="primary">上传
                        <i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                </el-col>
                <el-col :span="6">
                    <el-button-group>
                        <el-button type="primary" icon="arrow-left">上一页</el-button>
                        <el-button type="primary">下一页
                            <i class="el-icon-arrow-right el-icon--right"></i>
                        </el-button>
                    </el-button-group>
                    <el-button-group>
                        <el-button type="primary" icon="edit"></el-button>
                        <el-button type="primary" icon="share"></el-button>
                        <el-button type="primary" icon="delete"></el-button>
                    </el-button-group>
                </el-col>
                <el-col :span="6">
                    :loading="true" : 在按钮上显示加载状态
                    <br>
                    <el-button type="primary" :loading="true">加载中</el-button>
                </el-col>
                <el-col :span="6">
                    size: large | small | mini
                    <br>
                    <el-button type="primary" size="large">大型按钮</el-button>
                    <el-button type="primary">正常按钮</el-button>
                    <el-button type="primary" size="small">小型按钮</el-button>
                    <el-button type="primary" size="mini">超小按钮</el-button>
                </el-col>
            </el-row>
        </div>

        <h4>Form</h4>
        <div>
            <h3>单选框</h3>
            <el-row>
                <el-col :span="12">
                    <el-radio v-model="radio" label="1">小米</el-radio>
                    <el-radio v-model="radio" label="2">华为</el-radio>
                    <el-radio v-model="radio" label="3">魅族</el-radio>
                    <el-radio v-model="radio" label="4">苹果</el-radio>
                </el-col>
                <el-col :span="12">
                    <el-radio disabled v-model="radio1" label="1">火影忍者</el-radio>
                    <el-radio disabled v-model="radio1" label="2">死神</el-radio>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-radio-group v-model="radio2">
                        <el-radio :label="3">火影忍者</el-radio>
                        <el-radio :label="6">死神</el-radio>
                        <el-radio :label="9">海贼王</el-radio>
                    </el-radio-group>
                </el-col>
                <el-col :span="12">
                    <el-radio-group v-model="radio3">
                        <el-radio-button label="北京"></el-radio-button>
                        <el-radio-button label="上海"></el-radio-button>
                        <el-radio-button label="深圳"></el-radio-button>
                        <el-radio-button label="广州"></el-radio-button>
                    </el-radio-group>
                    <br>
                    <el-radio-group v-model="radio4">
                        <el-radio-button label="北京"></el-radio-button>
                        <el-radio-button label="上海"></el-radio-button>
                        <el-radio-button label="深圳"></el-radio-button>
                        <el-radio-button label="广州" :disabled="true"></el-radio-button>
                    </el-radio-group>
                    <br>
                    <el-radio-group v-model="radio5" :disabled="true">
                        <el-radio-button label="北京"></el-radio-button>
                        <el-radio-button label="上海"></el-radio-button>
                        <el-radio-button label="深圳"></el-radio-button>
                        <el-radio-button label="广州"></el-radio-button>
                    </el-radio-group>
                </el-col>
            </el-row>
            <br>
            <h3>多选框</h3>
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-checkbox v-model="checked">苹果</el-checkbox>
                </el-col>
                <el-col :span="8">
                    <el-checkbox v-model="checked1" disabled>苹果</el-checkbox>
                    <el-checkbox v-model="checked2" disabled>香蕉</el-checkbox>
                </el-col>
                <el-col :span="8">
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
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
                    <div style="margin: 15px 0;"></div>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
                    </el-checkbox-group>
                </el-col>
                <el-col :span="8">
                    <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">
                            {{ city }}
                        </el-checkbox>
                    </el-checkbox-group>
                </el-col>
                <el-col :span="8">
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
        <h4>Data</h4>
        <h4>Notice</h4>
        <h4>Navigation</h4>
        <h4>Others</h4>
    </div>
</template>

<script>
let cityOptions = ['上海', '北京', '广州', '深圳']
export default {
    name: 'element',
    data() {
        let msg = 'Element'
        return {
            msg: msg,
            radio: '2',
            radio1: '1',
            radio2: 3,
            radio3: '上海',
            radio4: '北京',
            radio5: '深圳',
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
        handleCheckAllChange(event) {
            this.checkedCities = event.target.checked ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    }
}

</script>

<style>

</style>
