<template>
    <div>
        <h1>elementUI 单选框</h1>
        <h3>单选框</h3>
        <el-row class="radio-box">
            <el-col :span="24">
                <h5>手机</h5>
            </el-col>
            <el-col :span="12">
                <el-radio v-model="radio" label="1" @change="phoneChange">小米</el-radio>
                <el-radio v-model="radio" label="2" @change="phoneChange">华为</el-radio>
                <el-radio v-model="radio" label="3" @change="phoneChange">魅族</el-radio>
                <el-radio v-model="radio" label="4" @change="phoneChange">苹果</el-radio>
            </el-col>
        </el-row>
        <el-row class="radio-box">
            <el-col :span="12">
                <el-radio disabled v-model="radio1" label="1">火影忍者</el-radio>
                <el-radio disabled v-model="radio1" label="2">死神</el-radio>
            </el-col>
        </el-row>
        <el-row class="radio-box">
            <el-col :span="12">
                <el-radio-group v-model="radio2">
                    <el-radio :label="3" :border="true" size="small">火影忍者</el-radio>
                    <el-radio :label="6" :border="true" size="medium">死神</el-radio>
                    <el-radio :label="9" :border="true" size="mini">海贼王</el-radio>
                </el-radio-group>
            </el-col>

        </el-row>
        <el-row class="radio-box">
            <el-col :span="24">
                <el-radio-group v-model="radio3" text-color="#ff6666" fill="#ffcc22">
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                </el-radio-group>
            </el-col>
            <el-col :span="24">
                <el-radio-group v-model="radio4">
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                    <el-radio-button label="广州" :disabled="true"></el-radio-button>
                </el-radio-group>
            </el-col>
            <el-col :span="24">
                <el-radio-group v-model="radio5" :disabled="true">
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                </el-radio-group>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            radio: '2',
            radio1: '1',
            radio2: 3,
            radio3: '上海',
            radio4: '北京',
            radio5: '深圳'
        }
    },
    methods: {
        phoneChange (val) {
            console.log(val)
        }
    }
}
</script>
<style scoped>
.radio-box {
    margin-top: 10px;
    padding: 24px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
}
</style>
