<template>
    <div class="elementui-demo-item">
        <h3>走马灯</h3>
        <el-row>
            <el-col :span="12">
                <el-carousel height="150px" trigger="click" indicator-position="none" arrow="never" :interval="3000" type="card">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '~styles/el-demo-item.scss';

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
