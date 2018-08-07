<template>
    <div id="app">
        <div class="header">
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
        </div>
        <div class="main">
            <div class="sidebar">
                <ul>
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/introduce">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/template">模板语法</router-link>
                    </li>
                    <li>
                        <router-link to="/computed">计算属性</router-link>
                    </li>
                    <li>
                        <router-link to="/v-bind">Class与Style绑定</router-link>
                    </li>
                    <li>
                        <router-link to="/v-if">条件渲染</router-link>
                    </li>
                    <li>
                        <router-link to="/v-for">列表渲染</router-link>
                    </li>
                    <li>
                        <router-link to="/v-on">事件处理器</router-link>
                    </li>
                    <li>
                        <router-link to="/v-model">表单控件绑定</router-link>
                    </li>
                    <li>
                        <router-link to="/component">组件</router-link>
                    </li>
                    <li>
                        <router-link to="/prop">属性</router-link>
                    </li>
                    <li>
                        <router-link to="/events">自定义事件</router-link>
                    </li>
                    <li>
                        <router-link to="/slot">插槽</router-link>
                    </li>
                    <li>
                        <router-link to="/dynamic">动态组件</router-link>
                    </li>
                    <li>
                        <router-link to="/transitions">过渡效果</router-link>
                    </li>
                    <li>
                        <router-link to="/element">element-ui</router-link>
                    </li>
                    <li>
                        <router-link to="/film">电影</router-link>
                    </li>
                </ul>
                <!-- <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" router>
                    <el-menu-item-group title="分组一">
                        <el-menu-item index="/">
                            <i class="el-icon-message"></i>
                            首页
                        </el-menu-item>
                        <el-menu-item index="/login">
                            <i class="el-icon-message"></i>
                            登录
                        </el-menu-item>
                        <el-menu-item index="/chat">
                            <i class="el-icon-message"></i>
                            聊天
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组二">
                        <el-menu-item index="/hello">
                            <i class="el-icon-message"></i>
                            Hello
                        </el-menu-item>
                        <el-menu-item index="/film">
                            <i class="el-icon-message"></i>
                            电影
                        </el-menu-item>
                        <el-menu-item index="/element">
                            <i class="el-icon-message"></i>
                            element-ui
                        </el-menu-item>
                    </el-menu-item-group>
                </el-menu> -->
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <!-- <img src="./assets/logo.png"> -->
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

.header {
    min-height: 50px;
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

.main {
    height: calc(100% - 50px);
}

.sidebar {
    float: left;
    width: 160px;
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

.content {
    overflow: auto;
    padding: 10px 16px;
    height: 100%;
}
</style>
