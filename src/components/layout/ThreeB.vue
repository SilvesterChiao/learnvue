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
.layout-box {
    position: relative;
    margin-top: 10px;
}

.layout-box .left {
    background: yellowgreen;
    width: 200px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
}

.layout-box .middle {
    height: 300px;
    margin: 0 210px;
    background: darkred;
}

.layout-box .right {
    height: 300px;
    width: 200px;
    position: absolute;
    top: 0;
    right: 0;
    background: darkgreen;
}
</style>
