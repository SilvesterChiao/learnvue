<template>
    <div class="layout-box">
        <aside class="layout__aside">侧边栏宽度固定</aside>
        <div class="layout__main">圣杯两栏 右侧栏</div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
/* 圣杯两栏 左侧栏 */
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
    padding-left: 210px;
}

.layout-box .layout__main {
    width: 100%;
    background-color: darkred;
    color: #fff;
}

.layout-box .layout__aside {
    width: 200px;
    margin-left: -210px;
    background-color: greenyellow;
}
</style>
