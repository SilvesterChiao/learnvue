<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <span style="float: right; padding: 3px 0">{{ total }}</span>
                    </div>
                    <div class="text item" v-if="stars.length === 0">
                        暂无内容
                    </div>
                    <template v-else>
                        <div v-for="(star, index) in stars" :key="index" class="text item">
                            {{ index + 1 }}: {{ star }}
                        </div>
                    </template>
                </el-card>

                <el-input type="text" placeholder="请输入项目" v-model="newStar"></el-input>
                <el-button @click="addStar">添加</el-button>
                <el-button @click="deleteStar">删除</el-button>
                <el-button @click="showLength">统计</el-button>
                <el-button @click="clearStars">清空</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { List } from './../../assets/scripts/structure/List'

let girls = new List()

export default {
    data () {
        return {
            newStar: '',
            stars: [],
            total: 0
        }
    },
    computed: {
    },
    watch: {
    },
    methods: {
        addStar () {
            girls.append(this.newStar)
            this.stars = girls.toString()
            this.newStar = ''
            console.log(this.stars)
        },
        deleteStar () {
            girls.remove(this.newStar)
            this.stars = girls.toString()
            this.newStar = ''
        },
        showLength () {
            this.total = girls.length()
        },
        clearStars () {
            girls.clear()
            this.stars = girls.toString()
            this.showLength()
        }
    },
    created () {
        console.log('--------------List------------')
        let l = new List()
        l.append('西红柿')
        console.log(l.toString())
    }
}
</script>
<style scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.item:last-of-type {
    margin-bottom: 0;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}
</style>
