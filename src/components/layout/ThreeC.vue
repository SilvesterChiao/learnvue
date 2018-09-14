<template>
    <div class="layout-box">
        <div class="middle">
            <div class="main"></div>
        </div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
/* 双飞翼 */
.layout-box {
    /* 清楚浮动 */
    margin-top: 10px;
    overflow: hidden;
}

.layout-box .middle {
    width: 100%;
    float: left;
}

.layout-box .middle .main {
    margin: 0 210px;
    height: 260px;
    background: darkred;
}

.layout-box .left {
    width: 200px;
    height: 300px;
    float: left;
    background: greenyellow;
    margin-left: -100%;
}

.layout-box .right {
    width: 200px;
    height: 300px;
    float: left;
    background: yellowgreen;
    margin-left: -200px;
}
</style>
