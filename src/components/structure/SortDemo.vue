<template>
    <div>
        <div v-if="numbers !== null">
            <span v-for="(n, index) in showNumbers" :key="index">{{ n }}</span>
        </div>
        数组长度: <input type="number" v-model.number="numberLength">
        <button @click="createNums">生成数组</button>
        <button @click="bubbleSort">冒泡排序</button>
        <button @click="selectionSort">选择排序</button>
        <button @click="insertionSort">插入排序</button>
    </div>
</template>
<script>
import { CArray } from './../../assets/scripts/structure/CArray'

export default {
    data () {
        return {
            numberLength: 0,
            numbers: null,
            showNumbers: []
        }
    },
    methods: {
        createNums () {
            this.numbers = new CArray(this.numberLength)
            this.numbers.setData()
            this.showNumbers = this.numbers.toString()
        },
        bubbleSort () {
            this.numbers.bubbleSort()
            this.showNumbers = this.numbers.toString()
        },
        selectionSort () {
            this.numbers.selectionSort()
            this.showNumbers = this.numbers.toString()
        },
        insertionSort () {
            this.numbers.insertionSort()
            this.showNumbers = this.numbers.toString()
        }
    }
}
</script>
<style scoped>
</style>
