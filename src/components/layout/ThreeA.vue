<template>
    <div class="layout-box">
        <div class="left"></div>
        <div class="right"></div>
        <div class="middle">
            <ol>
                <li>当宽度小于左右两边宽度之和时，右侧栏会被挤下去</li>
                <li>html的结构不正确</li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
/* 三栏布局 */
.layout-box {
    margin-top: 10px;
}

.layout-box .left {
    width: 200px;
    height: 300px;
    float: left;
    background-color: darkred;
}

.layout-box .right {
    width: 190px;
    height: 300px;
    float: right;
    background-color: yellowgreen;
}

.layout-box .middle {
    margin-left: 210px;
    margin-right: 200px;
    padding: 10px 34px;
    height: 280px;
    background-color: greenyellow;
}
</style>
