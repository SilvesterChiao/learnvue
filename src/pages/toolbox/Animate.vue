<template>
    <div>
        <h3>animate.css用法</h3>
        <el-row>
            <el-col :span="8" :offset="80" class="animate-demo animated" :class="[currentType, currentDelay, currentSpeed, currentInfinite]">
                示例
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-select v-model="currentType" placeholder="请选择">
                    <el-option v-for="item in animateType" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-select v-model="currentDelay" placeholder="请选择">
                    <el-option v-for="item in delayType" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-select v-model="currentSpeed" placeholder="请选择">
                    <el-option v-for="item in speedType" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <button @click="animateIt">animate it</button>
            </el-col>
        </el-row>
        <div id="parent" ref="parent" style="padding: 10px; width: 100px; height: 100px; background-color: red;">
            <div id="child" style="width: 100px; height: 100px; background-color: #fff;"></div>
        </div>
    </div>
</template>
<script>
var animateType = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'jackInTheBox', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp', 'heartBeat'
]

export default {
    data () {
        return {
            animateType,
            currentType: 'bounce',
            delayType: [
                'delay-2s',
                'delay-3s',
                'delay-4s',
                'delay-5s'
            ],
            currentDelay: '',
            speedType: [
                'slow',
                'slower',
                'fast',
                'faster'
            ],
            currentSpeed: '',
            currentInfinite: 'infinite'
        }
    },
    methods: {
        animateIt () {
            console.log('OK')
        }
    },
    created () {
        this.$nextTick(() => {
            var parent = document.getElementById('parent')
            var child = document.getElementById('child')
            parent.addEventListener('click', () => {
                console.log('1')
            }, true)
            parent.addEventListener('click', () => {
                console.log('2')
            }, false)
            child.addEventListener('click', () => {
                console.log('3')
            }, true)
            child.addEventListener('click', () => {
                console.log('4')
            }, false)
        })
    }
}
</script>
<style scoped>
</style>
