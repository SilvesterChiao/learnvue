<template>
    <div style="flex: 1;">
        <alert-box>
            <h3 slot="header">Warnning!!</h3>
            Something bad happened.
        </alert-box>
        <div>
            <h3>关于编译作用域: 官网截图</h3>
            <p>
                子组件内部允许使用父组件的data, methods等
            </p>
            <img :src="SlotImg" alt="vue-slot">
        </div>
        <div>
            <h3>作用域插槽</h3>
            <p>
                定义: 父组件的data传到props中, props传到slot中; <br> 渲染: 父组件调子组件, 使用插槽的scope属性, 调用scope
            </p>
            <div class="slot-scope">
                <!--Colors-->
                <my-list :items="colors" title="Colors">
                    <template slot-scope="color">
                        <div>
                            <div class="swatch" :style="{ background: color.hex }"></div>
                            {{ color.name }}
                        </div>
                    </template>
                </my-list>
            </div>
        </div>
    </div>
</template>
<script>
import SlotImg from './../../assets/images/vue_slot.png'
// 内容分发
let AlertBox = {
    template: `
        <div>
            <slot name="header"></slot>
            <strong>Error!</strong>
            <slot></slot>
            <slot name="footer">默认内容, 如果父组件没有提供内容</slot>
        </div>
    `
}

let MyList = {
    props: ['title', 'items'],
    template: `
        <div class="my-list">
            <div class="title">{{ title }}</div>
            <div class="list">
                <div class="list-item" v-for="item in items">
                    <slot v-bind="item"></slot>
                </div>
            </div>
        </div>
    `
}

export default {
    data () {
        return {
            SlotImg,
            colors: [
                {
                    name: 'Yellow', hex: '#f4d03f'
                },
                {
                    name: 'Green', hex: '#229954'
                },
                {
                    name: 'Purple', hex: '#9b59b6'
                }
            ]
        }
    },
    components: {
        'alert-box': AlertBox,
        'my-list': MyList
    }
}
</script>
<style lang="scss">
.slot-scope {
    background: linear-gradient(270deg, #0e6251, #28b463);
    display: flex;
}

.my-list {
    flex: 1 1 50%;
    font-family: Arial;
    color: white;
    margin: 20px;
}

.title {
    background: #a93226;
    padding: 20px;
    font-weight: bold;
    font-size: 22px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.list {
    background: #34495e;
    padding: 20px;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.list-item:not(:last-child) {
    padding-bottom: 20px;
}

.swatch {
    display: inline-block;
    width: 15px;
    height: 10px;
    margin-right: 8px;
}
</style>
