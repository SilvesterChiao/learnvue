<template>
    <div class="layout-box">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right"></div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
/* flex布局 */
.layout-box {
    display: flex;
    margin-top: 10px;
}
.layout-box .left {
    width: 200px;
    height: 300px;
    background: greenyellow;
}
.layout-box .middle {
    flex: 1;
    background: darkred;
    margin: 0 10px;
}
.layout-box .right {
    width: 200px;
    height: 300px;
    background: yellowgreen;
}
</style>
