<template>
    <div>
        <h3>过渡效果</h3>
        <el-button @click="fade = !fade" size="small">
            toggle
        </el-button>
        <transition name="fade" :duration="10000">
            <p v-if="fade">fade</p>
        </transition>
        <el-button @click="slideFade = !slideFade" size="small">
            toggle
        </el-button>
        <transition name="slide-fade">
            <p v-if="slideFade">
                slide-fade
            </p>
        </transition>
        <el-button @click="bounce = !bounce" size="small">
            toggle
        </el-button>
        <transition name="bounce">
            <p v-if="bounce">
                bouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebounce <br> bouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebouncebounce
            </p>
        </transition>
        <el-button @click="animate = !animate" size="small">
            toggle
        </el-button>
        <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
            <p v-if="animate">
                custom-classes-transition
            </p>
        </transition>
        <h3>初始渲染的过渡</h3>
        <p>
            appear appear-class appear-to-class appear-active-class before-appear appear after-appear appear-cancelled
        </p>
        <div>
            <el-button @click="appear = !appear" size="small">
                toggle
            </el-button>
            <transition name="appear" appear appear-class="custom-appear-class" appear-to-class="custom-appear-to-class" appear-active-class="animated shake custom-appear-active-class" appear-leave-action-class="animated jello">
                <p v-if="appear">
                    appear
                </p>
            </transition>
        </div>
        <div>
            <h3>多元素过渡</h3>
            <div>
                <h5>过渡模式</h5>
                <div>
                    <el-button @click="isEditing = !isEditing" size="small">
                        toggle
                    </el-button>
                    <transition name="slide-fade" mode="out-in">
                        <p v-if="isEditing" key="save">save</p>
                        <p v-else key="edit">edit</p>
                    </transition>
                </div>
            </div>
        </div>
        <div>
            <h3>列表过渡</h3>
            <p>
                transition-group tag
            </p>
            <div>
                <div id="list-demo" class="demo">
                    <el-button v-on:click="add" size="small">Add</el-button>
                    <el-button v-on:click="remove" size="small">Remove</el-button>
                    <transition-group name="list" tag="p">
                        <span v-for="item in items" v-bind:key="item" class="list-item">
                            {{ item }}
                        </span>
                    </transition-group>
                </div>
                <div id="flip-list-demo" class="demo">
                    <el-button v-on:click="shuffle" size="small">Shuffle</el-button>
                    <transition-group name="flip-list" tag="ul">
                        <li v-for="item in items" v-bind:key="item">
                            {{ item }}
                        </li>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 进入/离开 & 列表过渡
import _ from 'lodash'

export default {
    name: 'transitions',
    data () {
        return {
            fade: true,
            slideFade: true,
            bounce: true,
            animate: true,
            appear: true,
            isEditing: true,
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10
        }
    },
    methods: {
        randomIndex () {
            return Math.floor(Math.random() * this.items.length)
        },
        add () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove () {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
    transform: translateX(-10px);
    opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

/* appear */
.custom-appear-class {
    color: red;
}

.custom-appear-to-class {
    color: green;
}

.custom-appear-active-class {
    transition: all 3s;
}

/* 列表过渡 */
.list-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-leave-active {
    position: absolute;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}

.flip-list-move {
    transition: all 1s;
}
</style>
