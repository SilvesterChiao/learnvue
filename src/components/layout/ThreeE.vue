<template>
    <div class="layout-box">
        <aside class="layout__aside layout__aside--left">左侧边栏宽度固定</aside>
        <div class="layout__main">主内容栏宽度自适应</div>
        <aside class="layout__aside layout__aside--right">右侧边栏宽度固定</aside>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.layout-box:after,
.layout-box:before {
    clear: both;
    content: ' ';
    display: table;
}

.layout-box .layout__aside,
.layout-box .layout__main {
    float: left;
    height: 300px;
    line-height: 300px;
}

.layout-box {
    margin-top: 10px;
    padding: 0 210px;
}

.layout-box .layout__main {
    width: 100%;
    background-color: darkgoldenrod;
}

.layout-box .layout__aside {
    width: 200px;
}

.layout-box .layout__aside--left {
    margin-left: -210px;
    background-color: greenyellow;
}

.layout-box .layout__aside--right {
    margin-right: -210px;
    float: right;
    background-color: yellowgreen;
}
</style>
