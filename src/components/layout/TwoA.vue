<template>
    <div class="layout-box">
        <div class="layout__aside">定宽</div>
        <div class="layout__main">自适应</div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.layout-box {
    margin-top: 10px;
}

.layout__aside {
    float: left;
    width: 200px;
    height: 300px;
    background-color: darkred;
    line-height: 300px;
    color: #fff;
}

.layout__main {
    margin-left: 210px;
    padding: 0;
    height: 300px;
    background-color: yellowgreen;
    line-height: 300px;
}
</style>
