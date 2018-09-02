<template>
    <div>

    </div>
</template>
<script>
import { Queue } from './../../assets/scripts/structure/Queue'

export default {
    data () {
        return {}
    },
    methods: {

    },
    created () {
        let q = new Queue()
        q.enqueue('流刃若火')
        q.enqueue('雀峰')
        q.enqueue('神枪')
        q.enqueue('肉雫唼')
        q.enqueue('镜花水月')
        q.enqueue('千本樱')
        q.enqueue('天谴')
        q.enqueue('花天狂骨')
        q.enqueue('清虫')
        q.enqueue('野晒')
        q.enqueue('冰轮丸')
        q.enqueue('疋杀地藏')
        q.enqueue('双鱼鲤')
        console.log(q.toString())
    }
}
</script>
<style scoped>

</style>
