<template>
    <div class="layout-box">
        <aside class="layout__aside layout__aside--first">第1个侧边栏宽度固定</aside>
        <aside class="layout__aside layout__aside--second">第2个侧边栏宽度固定</aside>
        <div class="layout__main">主内容栏宽度自适应</div>
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
    padding-left: 420px;
}

.layout-box .layout__main {
    width: 100%;
    background-color: darkgoldenrod;
}

.layout-box .layout__aside {
    width: 200px;
}

.layout-box .layout__aside--first {
    margin-left: -420px;
    background-color: yellowgreen;
}

.layout-box .layout__aside--second {
    margin-left: -210px;
    background-color: greenyellow;
}
</style>
