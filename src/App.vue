<template>
    <div id="app">
        <div class="header">
            header
        </div>
        <div class="main">
            <div class="sidebar">
                <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" router>
                    <el-menu-item-group title="分组一">
                        <el-menu-item index="/">
                            <i class="el-icon-message"></i>首页</el-menu-item>
                        <el-menu-item index="/login">
                            <i class="el-icon-message"></i>登录</el-menu-item>
                        <el-menu-item index="/chat">
                            <i class="el-icon-message"></i>聊天</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组二">
                        <el-menu-item index="/film">
                            <i class="el-icon-message"></i>电影</el-menu-item>
                        <el-menu-item index="/element">
                            <i class="el-icon-message"></i>element-ui</el-menu-item>
                    </el-menu-item-group>
                </el-menu>
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
    name: 'app'
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

.main {
    height: calc(100% - 50px);
}

.sidebar {
    float: left;
    width: 300px;
    height: 100%;
}

.content {
    overflow: auto;
    height: 100%;
}
</style>
