<template>
    <div id="app">
        <el-container>
            <el-aside class="sidebar" width="240px">
                <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="/">
                        <i class="fa fa-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="1" :show-timeout="500" :hide-timeout="800">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Vue全家桶</span>
                        </template>
                        <el-menu-item index="/v">
                            vue
                        </el-menu-item>
                        <el-menu-item index="/r">
                            vue-router
                        </el-menu-item>
                        <el-menu-item index="/x">
                            vuex
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="2" :show-timeout="500" :hide-timeout="800">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>elementUI</span>
                        </template>
                        <el-menu-item-group title="基础">
                            <el-menu-item index="/elementui">
                                介绍
                            </el-menu-item>
                            <el-menu-item index="/film">
                                影片管理
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-bell"></i>
                            <span>小练习</span>
                        </template>
                        <el-menu-item index="/markdown">
                            markdown编辑器
                        </el-menu-item>
                        <el-menu-item index="/toollist">
                            todolist
                        </el-menu-item>
                        <el-menu-item index="/layout">
                            布局
                        </el-menu-item>
                        <el-menu-item index="/animate">
                            特效
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-bell"></i>
                            <span>算法</span>
                        </template>
                        <el-menu-item index="/algorithm">
                            算法
                        </el-menu-item>
                        <el-menu-item index="/structure">
                            数据结构
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title">设置</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container class="main">
                <el-header class="header">
                    <img src="./assets/images/user_header.jpg" alt="header" style="width: 40px; height: 40px; border-radius: 50%;">
                    <div style="flex: 1; height: 60px;"></div>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link" style="color: #fff;">
                            SilvesterChiao
                            <i class="el-icon-caret-bottom"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                            <el-dropdown-item>
                                系统消息
                                <el-badge :value="12" class="mark"></el-badge>
                            </el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-badge is-dot class="item" style="margin: 0 10px;">
                        <i class="el-icon-bell" style="font-size: 1.5em;"></i>
                    </el-badge>
                </el-header>
                <el-main class="content">
                    <el-row class="breadcrumb">
                        <el-col :span="24">
                            <el-breadcrumb separator="/">
                                <template v-for="(item, index) in breadlist">
                                    <el-breadcrumb-item :to="{ name: item.name }" v-if="index < breadlist.length" :key="index">{{ item.meta.CName }}</el-breadcrumb-item>
                                    <el-breadcrumb-item :key="index" v-else>{{ item.meta.CName }}</el-breadcrumb-item>
                                </template>
                            </el-breadcrumb>
                        </el-col>
                    </el-row>
                    <!-- <img src="./assets/logo.png"> -->
                    <router-view></router-view>
                </el-main>
                <el-footer class="foot">
                    <p>Copyright &copy; 2018 SilvesterChiao.</p>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            logined: false,
            breadlist: ''
        }
    },
    methods: {
        checkLogin () {

        },
        getBread () {
            let breadlist = this.$route.matched
            if (breadlist[0].meta.CName !== '首页') {
                breadlist = [{
                    path: '/',
                    meta: {
                        CName: '首页'
                    }
                }].concat(breadlist)
            }

            this.breadlist = breadlist
        }
    },
    watch: {
        $route () {
            this.getBread()
        }
    },
    created () {
        this.$notify({
            title: '提示',
            message: '登陆成功',
            offset: 100
        })
        this.getBread()
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

html {
    height: 100%;
}

body {
    height: 100%;
}

#app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.el-menu {
    border-right: none;
}

.el-menu-item .fa {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
}

.el-container {
    height: 100%;
}

.sidebar {
    float: left;
    width: 240px;
    height: 100%;
    background-color: #545c64;
}

.sidebar ul {
    list-style: none;
}

.sidebar ul li {
}

.sidebar ul li a {
    display: inline-block;
    box-sizing: border-box;
    padding-left: 8px;
    width: 160px;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    color: #22aaee;
    background-color: #ccc;
}

.sidebar ul li a:hover {
    background-color: #eee;
}

.main {
    padding: 20px;
    height: 100%;
    background-color: #f2f2f2;
}

.header {
    display: flex;
    align-items: center;
    border-radius: 4px;
    background-color: #84c8b3;
}

.header .logo {
    line-height: 60px;
    text-decoration: none;
    color: #545c64;
}

.mark {
    float: right;
    margin-top: 8px;
    margin-left: 4px;
    line-height: 1;
}

.content {
    overflow: auto;
    margin-top: 16px;
    padding: 20px 24px;
    height: calc(100% - 60px);
    border-radius: 4px;
    background-color: #fff;
}

.content::-webkit-scrollbar {
    display: none;
}

.breadcrumb {
    margin-bottom: 16px;
}

.foot {
    margin-top: 10px;
    height: 50px;
}

.foot p {
    line-height: 50px;
    text-align: center;
    font-family: 'Arial';
    font-size: 18px;
    font-weight: 600;
    color: #999;
}
</style>
