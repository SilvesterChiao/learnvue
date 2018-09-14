<template>
    <div id="app">
        <el-container>
            <el-aside class="sidebar" width="240px">
                <el-row>
                    <el-col :span="24">
                        {{ $route.path }}
                    </el-col>
                </el-row>
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
                                电影
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
                    <router-link to="/" class="logo">SilvesterChiao</router-link>
                    <el-dropdown style="float: right; height: 60px; line-height: 60px;">
                        <i class="el-icon-setting"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                <el-main class="content">
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
            logined: false
        }
    },
    methods: {
        checkLogin () {

        }
    },
    created () {
        this.$notify({
            title: '提示',
            message: '登陆成功',
            offset: 100
        })
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
    border-radius: 4px;
    background-color: #84c8b3;
}

.header .logo {
    line-height: 60px;
    text-decoration: none;
    color: #545c64;
}

.content {
    overflow: auto;
    margin-top: 16px;
    padding: 10px 16px;
    height: calc(100% - 60px);
    border-radius: 4px;
    background-color: #fff;
}

.content::-webkit-scrollbar {
    display: none;
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
