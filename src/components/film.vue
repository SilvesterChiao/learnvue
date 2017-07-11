<template>
    <div class="hello">
        <div>
            <h3>影片管理</h3>
            <el-table :data="films" style="width: 100%">
                <el-table-column prop="id" label="id" width="80"></el-table-column>
                <el-table-column prop="name" label="影片名称" width="180"></el-table-column>
                <el-table-column prop="title" label="标题" width="180"></el-table-column>
                <el-table-column prop="image" label="图片地址" width="240"></el-table-column>
                <el-table-column prop="type" label="影片类型" width="180"></el-table-column>
                <el-table-column prop="hot" label="热门" width="80"></el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button @click.native.prevent="open2(scope.$index, films)" type="text" size="small">
                            移除
                        </el-button>
                        <el-button type="text" size="small">
                            编辑
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <ul class="films">
                <li v-for="film in films">
                    <img :src="film.image" alt="生化危机6">
                    <h3 class="animated jello">{{ film.name }}</h3>
                    <span>{{ film.title }}</span>
                    <el-tag>{{ film.type }}</el-tag>
                    <el-button type="primary" icon="delete" @click="deleteFilm(film)"></el-button>
                </li>
            </ul>
            <div>
                <div>
                    <h3>神偷奶爸3</h3>
                    <p>{{ film.name }}</p>
                    <p>{{ film.title }}</p>
                    <p>{{ film.hot }}</p>
                    <p>{{ film.type }}</p>
                </div>
                <h3>修改</h3>
                <el-form ref="form" :mode="film" label-width="80px">
                    <el-form-item label="影片名称">
                        <el-input v-model="film.name"></el-input>
                    </el-form-item>
                    <el-form-item label="标题">
                        <el-input v-model="film.title"></el-input>
                    </el-form-item>
                    <el-form-item label="是否热门">
                        <el-switch on-text="" off-text v-model="film.hot"></el-switch>
                    </el-form-item>
                    <el-form-item label="影片类型">
                        <el-checkbox-group v-model="film.type">
                            <el-checkbox v-for="item in typelist" :label="item" name="type" :key="item.id"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">修改</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>

import img1 from '../assets/movie_1.jpg'
import img2 from '../assets/movie_2.jpg'
import img3 from '../assets/movie_3.jpg'
import img4 from '../assets/movie_4.jpg'

export default {
    name: 'hello',
    data() {
        let msg = 'Welcome to Your Vue.js App'
        return {
            msg: msg,
            user: [
                {
                    userid: 0,
                    userName: '达康书记',
                    password: '123456',
                    header: '../assets/user-header-0.png'
                }
            ],
            typelist: [
                '喜剧',
                '悲剧',
                '爱情',
                '动作',
                '枪战',
                '犯罪',
                '惊悚',
                '恐怖',
                '悬疑',
                '动画',
                '家庭',
                '奇幻',
                '魔幻',
                '科幻',
                '战争',
                '青春'
            ],
            hots: [
                {
                    name: '生化危机：终章',
                    title: '呵呵呵呵呵呵',
                    url: '',
                    image: '../assets/movie1.jpg'
                },
                {
                    name: '生化危机：终章',
                    title: '呵呵呵呵呵呵',
                    url: '',
                    image: '../assets/movie1.jpg'
                },
                {
                    name: '生化危机：终章',
                    title: '呵呵呵呵呵呵',
                    url: '',
                    image: '../assets/movie1.jpg'
                },
                {
                    name: '生化危机：终章',
                    title: '呵呵呵呵呵呵',
                    url: '',
                    image: '../assets/movie1.jpg'
                },
                {
                    name: '生化危机：终章',
                    title: '呵呵呵呵呵呵',
                    url: '',
                    image: '../assets/movie1.jpg'
                },
                {
                    name: '生化危机：终章',
                    title: '呵呵呵呵呵呵',
                    url: '',
                    image: '../assets/movie1.jpg'
                }
            ],
            films: [
                {
                    id: 0,
                    name: '生化危机：终章',
                    title: '爱丽丝归来',
                    image: img1,
                    type: '恐怖',
                    hot: true
                },
                {
                    id: 1,
                    name: '金刚狼3',
                    title: '狼叔谢幕',
                    image: img2,
                    type: '动作',
                    hot: true
                },
                {
                    id: 2,
                    name: '加勒比海盗5',
                    title: '杰克船长再次扬帆',
                    image: img3,
                    type: '魔幻',
                    hot: true
                },
                {
                    id: 3,
                    name: '变形金刚5',
                    title: '听说不怎么好看',
                    image: img4,
                    type: '科幻',
                    hot: true
                }
            ],
            film: {
                id: '1',
                name: '神偷奶爸3',
                title: '我明天要去看',
                image: '无图片',
                type: [],
                hot: true
            },
            newFilm: {
                id: '1',
                name: '',
                title: '',
                image: '',
                hot: false
            }
        }
    },
    methods: {
        deleteFilm(film) {
            this.films.splice(this.films.indexOf(film), 1)
            this.$message({
                message: '删除成功',
                type: 'success'
            })
        },
        deleteRow(index, rows) {
            rows.splice(index, 1)
            this.$message({
                message: '删除成功',
                type: 'success'
            })
        },
        open2(index, rows) {
            this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                rows.splice(index, 1)
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        addFilm: function () {
            console.log('增加条目')
        },
        onSubmit: function () {
            console.log('编辑条目');
        }
    }
}

</script>

<style scoped>
.hello {
    height: 100%;
}

.films {
    margin-top: 20px;
    overflow: hidden;
    list-style-type: none;
}

.films li {
    float: left;
    margin-right: 15px;
}
</style>
