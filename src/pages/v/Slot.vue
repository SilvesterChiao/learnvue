<template>
    <div>
        <alert-box>
            <h3 slot="header">Warnning!!</h3>
            Something bad happened.
        </alert-box>
    </div>
</template>
<script>
// 内容分发
// 缺编译作用域
// 缺作用域插槽
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
export default {
    components: {
        'alert-box': AlertBox
    }
}
</script>
<style scoped>
</style>
