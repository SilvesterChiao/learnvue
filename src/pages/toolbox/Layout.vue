<template>
    <div class="layout">
        <ul>
            <h3>布局的属性</h3>
            <li>position</li>
            <li>top, right, bottom, left</li>
            <li>border-sizing</li>
            <li>float</li>
        </ul>
        <ul>
            <h3>常见布局</h3>
            <li>两栏布局</li>
            <li>三栏布局</li>
        </ul>
        <div class="two-col">
            <div class="left">定宽</div>
            <div class="right">自适应</div>
        </div>
        <div class="three-col-1">
            <div class="left"></div>
            <div class="right"></div>
            <div class="middle">
                <ol>
                    <li>当宽度小于左右两边宽度之和时，右侧栏会被挤下去</li>
                    <li>html的结构不正确</li>
                </ol>
            </div>
        </div>
        <div class="three-col-2">
            <div class="left"></div>
            <div class="middle"></div>
            <div class="right"></div>
        </div>
        <div class="three-col-3">
            <div class="middle">
                <div class="main"></div>
            </div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="three-col-4">
            <div class="left"></div>
            <div class="middle"></div>
            <div class="right"></div>
        </div>
        <div class="two-col-2">
            <aside class="layout__aside">侧边栏宽度固定</aside>
            <div class="layout__main">主内容栏宽度自适应</div>
        </div>
        <div class="two-col-3">
            <div class="layout__main">主内容栏宽度自适应</div>
            <aside class="layout__aside">侧边栏宽度固定</aside>
        </div>
        <div class="three-col-5">
            <aside class="layout__aside layout__aside--left">左侧边栏宽度固定</aside>
            <div class="layout__main">主内容栏宽度自适应</div>
            <aside class="layout__aside layout__aside--right">右侧边栏宽度固定</aside>
        </div>
        <div class="three-col-6">
            <aside class="layout__aside layout__aside--first">第1个侧边栏宽度固定</aside>
            <aside class="layout__aside layout__aside--second">第2个侧边栏宽度固定</aside>
            <div class="layout__main">主内容栏宽度自适应</div>
        </div>
        <div class="three-col-7">
            <div class="layout__main">主内容栏宽度自适应</div>
            <aside class="layout__aside layout__aside--first">第1个侧边栏宽度固定</aside>
            <aside class="layout__aside layout__aside--second">第2个侧边栏宽度固定</aside>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.layout {
}

/* 两栏布局 */
.two-col {
}

.two-col .left {
    float: left;
    width: 200px;
    height: 300px;
    background-color: darkred;
    line-height: 300px;
    text-align: center;
    color: #fff;
}

.two-col .right {
    margin-left: 210px;
    height: 300px;
    background-color: yellowgreen;
    line-height: 300px;
    text-align: center;
}

/* 三栏布局 */
.three-col-1 {
    margin-top: 10px;
}

.three-col-1 .left {
    width: 200px;
    height: 300px;
    float: left;
    background-color: darkred;
}

.three-col-1 .right {
    width: 190px;
    height: 300px;
    float: right;
    background-color: yellowgreen;
}

.three-col-1 .middle {
    margin-left: 210px;
    margin-right: 200px;
    padding: 10px 34px;
    height: 280px;
    background-color: greenyellow;
}

.three-col-2 {
    position: relative;
    margin-top: 10px;
}

.three-col-2 .left {
    background: yellowgreen;
    width: 200px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
}

.three-col-2 .middle {
    height: 300px;
    margin: 0 210px;
    background: darkred;
}

.three-col-2 .right {
    height: 300px;
    width: 200px;
    position: absolute;
    top: 0;
    right: 0;
    background: darkgreen;
}

/* 双飞翼 */
.three-col-3 {
    /* 清楚浮动 */
    margin-top: 10px;
    overflow: hidden;
}

.three-col-3 .middle {
    width: 100%;
    float: left;
}

.three-col-3 .middle .main {
    margin: 0 210px;
    height: 260px;
    background: darkred;
}

.three-col-3 .left {
    width: 200px;
    height: 300px;
    float: left;
    background: greenyellow;
    margin-left: -100%;
}

.three-col-3 .right {
    width: 200px;
    height: 300px;
    float: left;
    background: yellowgreen;
    margin-left: -200px;
}

.three-col-4 {
    display: flex;
    margin-top: 10px;
}
.three-col-4 .left {
    width: 200px;
    height: 300px;
    background: greenyellow;
}
.three-col-4 .middle {
    width: 100%;
    background: darkred;
    margin: 0 10px;
}
.three-col-4 .right {
    width: 200px;
    height: 300px;
    background: yellowgreen;
}

/* 圣杯 */
.two-col-2:after,
.two-col-2:before {
    clear: both;
    content: ' ';
    display: table;
}

.two-col-2 .layout__aside,
.two-col-2 .layout__main {
    float: left;
    height: 100px;
    line-height: 100px;
}

.two-col-2 {
    margin-top: 10px;
    padding-left: 210px;
}

.two-col-2 .layout__main {
    width: 100%;
    background-color: darkred;
    color: #fff;
}

.two-col-2 .layout__aside {
    width: 200px;
    margin-left: -210px;
    background-color: greenyellow;
}

.two-col-3:after,
.two-col-3:before {
    clear: both;
    content: ' ';
    display: table;
}

.two-col-3 {
    margin-top: 10px;
    padding-right: 210px;
}

.two-col-3 .layout__main {
    float: left;
    width: 100%;
    height: 100px;
    background-color: darkred;
    line-height: 100px;
    color: #fff;
}

.two-col-3 .layout__aside {
    float: right;
    width: 200px;
    height: 100px;
    margin-right: -210px;
    background-color: greenyellow;
    line-height: 100px;
}

.three-col-5:after,
.three-col-5:before {
    clear: both;
    content: ' ';
    display: table;
}

.three-col-5 .layout__aside,
.three-col-5 .layout__main {
    float: left;
    height: 100px;
    line-height: 100px;
}

.three-col-5 {
    margin-top: 10px;
    padding: 0 210px;
}

.three-col-5 .layout__main {
    width: 100%;
    background-color: darkgoldenrod;
}

.three-col-5 .layout__aside {
    width: 200px;
}

.three-col-5 .layout__aside--left {
    margin-left: -210px;
    background-color: greenyellow;
}

.three-col-5 .layout__aside--right {
    margin-right: -210px;
    float: right;
    background-color: yellowgreen;
}

.three-col-6:after,
.three-col-6:before {
    clear: both;
    content: ' ';
    display: table;
}

.three-col-6 .layout__aside,
.three-col-6 .layout__main {
    float: left;
    height: 100px;
    line-height: 100px;
}

.three-col-6 {
    margin-top: 10px;
    padding-left: 420px;
}

.three-col-6 .layout__main {
    width: 100%;
    background-color: darkgoldenrod;
}

.three-col-6 .layout__aside {
    width: 200px;
}

.three-col-6 .layout__aside--first {
    margin-left: -420px;
    background-color: yellowgreen;
}

.three-col-6 .layout__aside--second {
    margin-left: -210px;
    background-color: greenyellow;
}

.three-col-7:after,
.three-col-7:before {
    clear: both;
    content: ' ';
    display: table;
}

.three-col-7 {
    margin-top: 10px;
    padding-right: 420px;
}

.three-col-7 .layout__main {
    float: left;
    width: 100%;
    height: 100px;
    background-color: darkgoldenrod;
    line-height: 100px;
}

.three-col-7 .layout__aside {
    float: right;
    width: 200px;
    height: 100px;
    line-height: 100px;
}

.three-col-7 .layout__aside--first {
    margin-right: -210px;
    background-color: greenyellow;
}

.three-col-7 .layout__aside--second {
    margin-right: -420px;
    background-color: yellowgreen;
}
</style>
