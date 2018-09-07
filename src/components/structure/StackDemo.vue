<template>
    <div>
        stack-demo
    </div>
</template>
<script>
import { Stack } from './../../assets/scripts/structure/Stack'
export default {
    created () {
        console.log('---------------Stack---------------');
        let s = new Stack()
        let stars = [
            '金星',
            '水星',
            '地球',
            '火星',
            '木星',
            '土星',
            '天王星',
            '海王星',
            '冥王星'
        ]
        stars.forEach(star => {
            s.push(star)
        })

        console.log(s)
    }
}
</script>
<style scoped>
</style>
