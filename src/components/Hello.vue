<template>
    <div class="hello">
        <div>
            <h3>影片管理</h3>
            <el-table :data="films" style="width: 100%">
                <el-table-column prop="id" label="id" width="180"></el-table-column>
                <el-table-column prop="name" label="影片名称" width="180"></el-table-column>
                <el-table-column prop="title" label="标题" width="180"></el-table-column>
                <el-table-column prop="image" label="图片地址" width="180"></el-table-column>
                <el-table-column prop="type" label="影片类型" width="180"></el-table-column>
                <el-table-column prop="hot" label="热门" width="180"></el-table-column>
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
            <ul>
                <li v-for="film in films">
                    <img src="../assets/movie1.jpg" alt="">
                    <h3 class="animated jello">{{ film.name }}</h3>
                    <span>{{ film.title }}</span>
                    <el-tag>{{ film.type }}</el-tag>
                    <el-button type="primary" icon="delete" @click="deleteFilm(film)"></el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            let msg = 'Welcome to Your Vue.js App'
            return {
                msg: msg,
                tableData: [
                    {
                        date: '2017-05-31',
                        name: 'Emily',
                        address: '上海市普陀区金沙江路 1518弄'
                    },
                    {
                        date: '2017-05-31',
                        name: 'Sofia',
                        address: '上海市普陀区金沙江路 1518弄'
                    },
                    {
                        date: '2017-05-31',
                        name: 'Nancy',
                        address: '上海市普陀区金沙江路 1518弄'
                    }
                ],
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
                        image: '../assets/movie1.jpg',
                        type: '恐怖',
                        hot: true
                    },
                    {
                        id: 1,
                        name: '生化危机：终章',
                        title: '爱丽丝归来',
                        image: '../assets/movie1.jpg',
                        type: '恐怖',
                        hot: true
                    },
                    {
                        id: 2,
                        name: '生化危机：终章',
                        title: '爱丽丝归来',
                        image: '../assets/movie1.jpg',
                        type: '恐怖',
                        hot: true
                    },
                    {
                        id: 3,
                        name: '生化危机：终章',
                        title: '爱丽丝归来',
                        image: '../assets/movie1.jpg',
                        type: '恐怖',
                        hot: true
                    }
                ]
            }
        },
        methods: {
            deleteFilm(film){
                this.films.splice(this.films.indexOf(film), 1)
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
            },
            deleteRow(index, rows){
                rows.splice(index, 1)
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
            },
            open2(index, rows){
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
            }
        }
    }

</script>

<style scoped>
    .hello {
        height: 100%;
    }
</style>
