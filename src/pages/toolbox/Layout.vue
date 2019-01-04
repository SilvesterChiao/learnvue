<template>
    <div class="layout" style="flex: 1;">
        <el-row>
            <el-col :span="24">
                <el-select v-model="layoutType" placeholder="布局类型">
                    <el-option v-for="(type, index) in layoutTypes" :key="index" :label="type.label" :value="type.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <component :is="layoutType"></component>
    </div>
</template>
<script>
import TwoA from './../../components/layout/TwoA'
import TwoB from './../../components/layout/TwoB'
import TwoC from './../../components/layout/TwoC'
import ThreeA from './../../components/layout/ThreeA'
import ThreeB from './../../components/layout/ThreeB'
import ThreeC from './../../components/layout/ThreeC'
import ThreeD from './../../components/layout/ThreeD'
import ThreeE from './../../components/layout/ThreeE'
import ThreeF from './../../components/layout/ThreeF'
import ThreeG from './../../components/layout/ThreeG'

export default {
    data () {
        return {
            layoutTypes: [
                {
                    label: '两栏',
                    value: 'two-a'
                },
                {
                    label: '圣杯两栏 左侧栏',
                    value: 'two-b'
                },
                {
                    label: '圣杯两栏 右侧栏',
                    value: 'two-c'
                },
                {
                    label: '三栏',
                    value: 'three-a'
                },
                {
                    label: '三栏',
                    value: 'three-b'
                },
                {
                    label: '双飞翼',
                    value: 'three-c'
                },
                {
                    label: '弹性布局',
                    value: 'three-d'
                },
                {
                    label: '圣杯三栏',
                    value: 'three-e'
                },
                {
                    label: '圣杯三栏左',
                    value: 'three-f'
                },
                {
                    label: '圣杯三栏右',
                    value: 'three-g'
                }
            ],
            layoutType: 'two-a'
        }
    },
    components: {
        TwoA,
        TwoB,
        TwoC,
        ThreeA,
        ThreeB,
        ThreeC,
        ThreeD,
        ThreeE,
        ThreeF,
        ThreeG
    }
}
</script>
<style scoped>
</style>
