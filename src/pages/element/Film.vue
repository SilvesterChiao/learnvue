<template>
    <div class="hello" style="flex: 1;">
        <div>
            <el-row class="filter-box">
                <el-col :span="16">
                    类型:
                    <el-select v-model="sortFileType" placeholder="请选择" size="mini">
                        <el-option v-for="(item, index) in typelist" :key="index" :label="item" :value="item">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary" size="mini" @click="addFilmVisible = true" :style="{ float: 'right' }">添加</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-table :data="films" style="width: 100%" :stripe="true" v-loading="filmLoading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
                        <el-table-column prop="id" label="id" header-align="center" align="center" width="80"></el-table-column>
                        <el-table-column prop="name" label="影片名称" header-align="center" align="center" width="180"></el-table-column>
                        <el-table-column prop="title" label="标题" header-align="center" align="center" width="180"></el-table-column>
                        <el-table-column prop="image" label="图片地址" header-align="center" align="center"></el-table-column>
                        <el-table-column prop="type" label="影片类型" header-align="center" align="center" width="180"></el-table-column>
                        <el-table-column prop="hot" label="热门" header-align="center" align="center" width="100">
                            <template slot-scope="scope">
                                <el-tag v-if="scope.row.hot" size="small">是</el-tag>
                                <el-tag v-else size="small">否</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" header-align="center" align="center" width="100">
                            <template slot-scope="scope">
                                <el-button @click.native.prevent="open2(scope.$index, data.film)" type="text" size="small">
                                    移除
                                </el-button>
                                <el-button type="text" size="small" @click="showEditFilm(scope.$index, scope.row)">
                                    编辑
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
        <el-dialog title="编辑" :visible.sync="editFilmVisible" width="30%" :before-close="handleClose">
            <div>
                <el-form ref="edit-form" :mode="film" label-width="80px">
                    <el-form-item label="影片ID">
                        <el-input v-model="film.id" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="影片名称">
                        <el-input v-model="film.name"></el-input>
                    </el-form-item>
                    <el-form-item label="标题">
                        <el-input v-model="film.title"></el-input>
                    </el-form-item>
                    <el-form-item label="是否热门">
                        <el-switch active-text="是" inactive-text="否" v-model="film.hot"></el-switch>
                    </el-form-item>
                    <el-form-item label="影片类型">
                        <el-select v-model="film.type" placeholder="请选择" size="mini">
                            <el-option v-for="(item, index) in typelist" :key="index" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editFilmVisible = false">取 消</el-button>
                <el-button type="primary" @click="editFilm">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="添加" :visible.sync="addFilmVisible" width="30%" :before-close="handleClose">
            <div>
                <el-form ref="add-form" :mode="newFilm" label-width="80px">
                    <el-form-item label="影片名称">
                        <el-input v-model="newFilm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="标题">
                        <el-input v-model="newFilm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="是否热门">
                        <el-switch active-text="是" inactive-text="否" v-model="newFilm.hot"></el-switch>
                    </el-form-item>
                    <el-form-item label="影片类型">
                        <el-select v-model="newFilm.type" placeholder="请选择" size="mini">
                            <el-option v-for="(item, index) in typelist" :key="index" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addFilmVisible = false">取 消</el-button>
                <el-button type="primary" @click="addFilm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { data } from './../../assets/scripts/data/film.js'
// import img1 from '../../assets/images/movie_1.jpg'
// import img2 from '../../assets/images/movie_2.jpg'
// import img3 from '../../assets/images/movie_3.jpg'
// import img4 from '../../assets/images/movie_4.jpg'

export default {
    name: 'hello',
    data () {
        let msg = 'Welcome to Your Vue.js App'
        return {
            data,
            filmLoading: false,
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
                '全部',
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
            film: {
                id: '1',
                name: '神偷奶爸3',
                title: '我明天要去看',
                image: '无图片',
                type: [],
                hot: true
            },
            editFilmIndex: 0,
            newFilm: {
                id: '1',
                name: '',
                title: '',
                image: '',
                hot: false
            },
            addFilmVisible: false,
            editFilmVisible: false,
            sortFileType: '全部'
        }
    },
    computed: {
        films () {
            this.filmLoading = true
            this.filmLoading = false
            return this.data.film.filter(item => {
                if (this.sortFileType === '全部') {
                    return true
                } else {
                    return item.type === this.sortFileType
                }
            })
        }
    },
    methods: {
        deleteFilm (film) {
            this.films.splice(this.films.indexOf(film), 1)
            this.$message({
                message: '删除成功',
                type: 'success'
            })
        },
        deleteRow (index, rows) {
            rows.splice(index, 1)
            this.$message({
                message: '删除成功',
                type: 'success'
            })
        },
        open2 (index, rows) {
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
                })
            })
        },
        addFilm: function () {
            this.addFilmVisible = false
            this.data.film.push(this.newFilm)
        },
        showEditFilm (index, film) {
            this.editFilmVisible = true
            this.editFilmIndex = index
            this.film = {
                id: film.id,
                name: film.name,
                title: film.title,
                image: film.image,
                type: film.type,
                hot: film.hot
            }
        },
        editFilm: function () {
            this.editFilmVisible = false
            this.$set(this.data.film, this.editFilmIndex, this.film)
            console.log(this.films)
        },
        handleClose (done) {
            done()
            // this.$confirm('确认关闭？')
            //     .then(_ => {
            //         done();
            //     })
            //     .catch(_ => { });
        }
    },
    created () {
        console.log(this.data)
    }
}

</script>

<style scoped>
.hello {
    height: 100%;
}

.filter-box {
    margin-bottom: 16px;
}
</style>
