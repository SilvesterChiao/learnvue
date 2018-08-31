<template>
    <div id="app">
        <el-container>
            <el-aside class="sidebar" width="240px">
                <el-row>
                    <el-col :span="24">
                        kkk
                    </el-col>
                </el-row>
                <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" router>
                    <el-menu-item index="/">
                        <i class="fa fa-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="1" :show-timeout="500" :hide-timeout="800">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Vue</span>
                        </template>
                        <el-menu-item-group title="基础">
                            <el-menu-item index="/introduce">
                                <i class="el-icon-upload"></i>
                                介绍
                            </el-menu-item>
                            <el-menu-item index="/template">
                                <i class="el-icon-error"></i>
                                模板语法
                            </el-menu-item>
                            <el-menu-item index="/computed">
                                <i class="el-icon-success"></i>
                                计算属性
                            </el-menu-item>
                            <el-menu-item index="/v-bind">
                                <i class="el-icon-warning"></i>
                                Class与Style绑定
                            </el-menu-item>
                            <el-menu-item index="/v-if">
                                <i class="el-icon-sort-down"></i>
                                条件渲染
                            </el-menu-item>
                            <el-menu-item index="/v-for">
                                <i class="el-icon-sort-up"></i>
                                列表渲染
                            </el-menu-item>
                            <el-menu-item index="/v-on">
                                <i class="el-icon-arrow-left"></i>
                                事件处理器
                            </el-menu-item>
                            <el-menu-item index="/v-model">
                                <i class="el-icon-circle-plus"></i>
                                表单
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="组件">
                            <el-menu-item index="/component">
                                <i class="el-icon-circle-plus-outline"></i>
                                组件
                            </el-menu-item>
                            <el-menu-item index="/prop">
                                <i class="el-icon-back"></i>
                                属性
                            </el-menu-item>
                            <el-menu-item index="/events">
                                <i class="el-icon-circle-close"></i>
                                自定义事件
                            </el-menu-item>
                            <el-menu-item index="/slot">
                                <i class="el-icon-date"></i>
                                插槽
                            </el-menu-item>
                            <el-menu-item index="/dynamic">
                                <i class="el-icon-caret-left"></i>
                                动态组件
                            </el-menu-item>
                            <el-menu-item index="/transitions">
                                <i class="el-icon-close"></i>
                                过渡效果
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2" :show-timeout="500" :hide-timeout="800">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>vue-router</span>
                        </template>
                        <el-menu-item-group title="基础">
                            <el-menu-item index="/guide">
                                <i class="el-icon-message"></i>
                                介绍
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3" :show-timeout="500" :hide-timeout="800">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>elementUI</span>
                        </template>
                        <el-menu-item-group title="基础">
                            <el-menu-item index="/elementui">
                                <i class="el-icon-message"></i>
                                介绍
                            </el-menu-item>
                            <el-menu-item index="/film">
                                <i class="el-icon-message"></i>
                                电影
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Form">
                            <el-menu-item index="/radio">
                                <i class="el-icon-message"></i>
                                Radio 单选框
                            </el-menu-item>
                            <el-menu-item index="/checkbox">
                                <i class="el-icon-message"></i>
                                Checkbox 多选框
                            </el-menu-item>
                            <el-menu-item index="/input">
                                <i class="el-icon-message"></i>
                                Input 输入框
                            </el-menu-item>
                            <el-menu-item index="/input-number">
                                <i class="el-icon-message"></i>
                                NumberInput 计数器
                            </el-menu-item>
                            <el-menu-item index="/select">
                                <i class="el-icon-message"></i>
                                Select 选择器
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Data">

                        </el-menu-item-group>
                        <el-menu-item-group title="Notice">

                        </el-menu-item-group>
                        <el-menu-item-group title="Navigation">

                        </el-menu-item-group>
                        <el-menu-item-group title="Others">

                        </el-menu-item-group>
                    </el-submenu>
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
