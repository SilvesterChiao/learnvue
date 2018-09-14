<template>
    <div class="layout-box">
        <div class="layout__main">主内容栏宽度自适应</div>
        <aside class="layout__aside layout__aside--first">第1个侧边栏宽度固定</aside>
        <aside class="layout__aside layout__aside--second">第2个侧边栏宽度固定</aside>
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

.layout-box {
    margin-top: 10px;
    padding-right: 420px;
}

.layout-box .layout__main {
    float: left;
    width: 100%;
    height: 300px;
    background-color: darkgoldenrod;
    line-height: 300px;
}

.layout-box .layout__aside {
    float: right;
    width: 200px;
    height: 300px;
    line-height: 300px;
}

.layout-box .layout__aside--first {
    margin-right: -210px;
    background-color: greenyellow;
}

.layout-box .layout__aside--second {
    margin-right: -420px;
    background-color: yellowgreen;
}
</style>
