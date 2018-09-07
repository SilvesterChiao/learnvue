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
                        <el-menu-item-group title="Form">
                            <el-menu-item index="/radio">
                                Radio 单选框
                            </el-menu-item>
                            <el-menu-item index="/checkbox">
                                Checkbox 多选框
                            </el-menu-item>
                            <el-menu-item index="/input">
                                Input 输入框
                            </el-menu-item>
                            <el-menu-item index="/input-number">
                                NumberInput 计数器
                            </el-menu-item>
                            <el-menu-item index="/select">
                                Select 选择器
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
                    <el-menu-item index="/">
                        <i class="fa fa-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container class="main">
                <el-header class="header">
                    <router-link to="/" class="logo">Blog</router-link>
                    <ul>
                        <li>
                            <template v-if="!logined">
                                <router-link to="/">登陆</router-link>
                                <router-link to="/">注册</router-link>
                            </template>
                            <template v-else>
                                <router-link to="/">发表</router-link>
                                <router-link to="/">退出</router-link>
                            </template>
                        </li>
                    </ul>
                </el-header>
                <el-main class="content">
                    <!-- <img src="./assets/logo.png"> -->
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
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
    min-height: 50px;
    border-radius: 4px;
    background-color: #84c8b3;
}

.header .logo {
    margin-left: 20px;
    line-height: 50px;
    text-decoration: none;
}

.header ul {
    float: right;
    margin-right: 20px;
    list-style: none;
}

.header ul li {
}

.header ul li a {
    margin-left: 15px;
    line-height: 50px;
    text-decoration: none;
}

.content {
    overflow: auto;
    margin-top: 16px;
    padding: 10px 16px;
    height: calc(100% - 50px);
    border-radius: 4px;
    background-color: #fff;
}

.content::-webkit-scrollbar {
    display: none;
}
</style>
