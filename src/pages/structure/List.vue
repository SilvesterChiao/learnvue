<template>
    <div>
        <el-row>
            <el-col :span="24">
                <span v-for="(star, index) in stars" :key="index">
                    {{ star }}
                </span>
            </el-col>
        </el-row>
        <input type="text" placeholder="请输入项目" v-model="newStar">
        <button @click="addStar">添加</button>
        <button @click="deleteStar">删除</button>
    </div>
</template>
<script>
import { List } from './../../assets/scripts/structure/List'

let girls = new List()

export default {
    data () {
        return {
            newStar: '',
            stars: []
        }
    },
    methods: {
        addStar () {
            girls.append(this.newStar)
            this.stars = girls.toString()
            this.newStar = ''
        },
        deleteStar () {
            girls.remove(this.newStar)
            this.stars = girls.toString()
            this.newStar = ''
        }
    },
    created () {
        let l = new List()
        l.append('西红柿')
        console.log(l.toString())
    }
}
</script>
<style scoped>
</style>
