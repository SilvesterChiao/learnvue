<template>
    <div class="layout-box">
        <div class="layout__main">圣杯两栏 右侧栏</div>
        <aside class="layout__aside">侧边栏宽度固定</aside>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
/* 圣杯两栏 右侧栏 */
.layout-box:after,
.layout-box:before {
    clear: both;
    content: ' ';
    display: table;
}

.layout-box {
    margin-top: 10px;
    padding-right: 210px;
}

.layout-box .layout__main {
    float: left;
    width: 100%;
    height: 300px;
    background-color: darkred;
    line-height: 300px;
    color: #fff;
}

.layout-box .layout__aside {
    float: right;
    width: 200px;
    height: 300px;
    margin-right: -210px;
    background-color: greenyellow;
    line-height: 300px;
}
</style>
